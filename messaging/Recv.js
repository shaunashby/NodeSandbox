//____________________________________________________________________
// File: Recv.js
//____________________________________________________________________
//
// Author: Shaun Ashby <shaun@ashby.ch>
// Created: 2014-08-18 15:08:17+0200
// Revision: $Id$
// Description: An example AMQP receive client.
//
// Copyright (C) 2014 Shaun Ashby
//
//
//--------------------------------------------------------------------
var amqp = require('amqplib');

var AMQP_URI = "amqp://test:test+999@10.1.38.2:5672/test";

amqp.connect(AMQP_URI).then(function(conn) {
  process.once('SIGINT', function() { conn.close(); });
  return conn.createChannel().then(function(ch) {
    
    var ok = ch.assertQueue('hello', {durable: false});
    
    ok = ok.then(function(_qok) {
      return ch.consume('hello', function(msg) {
        console.log(" [x] Received '%s'", msg.content.toString());
      }, {noAck: true});
    });
    
    return ok.then(function(_consumeOk) {
      console.log(' [*] Waiting for messages. To exit press CTRL+C');
    });
  });
}).then(null, console.warn);