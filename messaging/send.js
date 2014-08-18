//____________________________________________________________________
// File: send.js
//____________________________________________________________________
//
// Author: Shaun Ashby <shaun@ashby.ch>
// Created: 2014-08-18 14:37:06+0200
// Revision: $Id$
// Description: An example of AMQP message send.
//
// Copyright (C) 2014 Shaun Ashby
//
//
//--------------------------------------------------------------------

var amqp = require('amqplib');
var when = require('when');

amqp.connect('amqp://localhost').then(function(conn) {
  return when(conn.createChannel().then(function(ch) {
    var q = 'hello';
    var msg = 'Hello World!';

    var ok = ch.assertQueue(q, {durable: false});
    
    return ok.then(function(_qok) {
      ch.sendToQueue(q, new Buffer(msg));
      console.log(" [x] Sent '%s'", msg);
      return ch.close();
    });
  })).ensure(function() { conn.close(); });;
}).then(null, console.warn);