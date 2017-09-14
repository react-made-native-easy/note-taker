//
//  Device.m
//  NoteTaker
//
//  Created by Atul R on 14/09/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "Device.h"
#import <UIKit/UIKit.h>

@implementation Device

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
  @try{
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[[NSNull null], deviceName]);
  }
  @catch(NSException *exception){
    callback(@[exception.reason, [NSNull null]]);
  }
}

@end

