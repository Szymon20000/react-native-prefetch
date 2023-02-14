import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-prefetch' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const PrefetchModule = isTurboModuleEnabled
  ? require('./NativePrefetch').default
  : NativeModules.Prefetch;

const Prefetch = PrefetchModule
  ? PrefetchModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Prefetch.multiply(a, b);
}

export function prefetch(key: string) {
  return async (...args: Parameters<typeof fetch>) => {
    if (args[1] == null) {
      args[1] = {};
    }
    if (args[1]?.headers == null) {
      args[1].headers = {};
    }

    // @ts-ignore
    args[1].headers.__internalKey = key;

    return fetch(...args);
  };
}
