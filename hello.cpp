//
//  hello.cpp
//  MyNodeAddons
//
//  Created by Shaun Ashby on 16/02/2013.
//  Copyright (c) 2013 Shaun Ashby. All rights reserved.
//
#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> Method(const Arguments& args) {
    HandleScope scope;
    return scope.Close(String::New("world"));
}

void init(Handle<Object> target) {
    NODE_SET_METHOD(target, "hello", Method);
}

NODE_MODULE(hello, init);