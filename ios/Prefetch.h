
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPrefetchSpec.h"

@interface Prefetch : NSObject <NativePrefetchSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Prefetch : NSObject <RCTBridgeModule>
#endif

@end
