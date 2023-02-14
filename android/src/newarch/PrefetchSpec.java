package com.prefetch;

import com.facebook.react.bridge.ReactApplicationContext;

abstract class PrefetchSpec extends NativePrefetchSpec {
  PrefetchSpec(ReactApplicationContext context) {
    super(context);
  }
}
