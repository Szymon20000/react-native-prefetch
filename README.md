# react-native-prefetch

fetch before you need it

## Installation

```sh
npm install react-native-prefetch
```

## Usage

```js
import { prefetch } from 'react-native-prefetch';

// ...

// That returns fetch
prefetch('MAIN_SYNC_KEY')(url, options?);
// or
prefetch('MAIN_SYNC_KEY', url, options?);
// or 
fetch(url, {headers:{__internalKey: "MAIN_SYNC_KEY"}});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
