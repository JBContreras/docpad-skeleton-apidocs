!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.hashPersistencePlugin=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var configurePlugin=function(config,next){return config.id||(config.id=window.location.hash.substr(1)),next()};App.config.on("change:id",function(_,id){id=null==id?"":String(id),window.location.hash=id}),window.addEventListener("hashchange",function(){var id=window.location.hash.substr(1),url=window.location.href;App.config.set("id",id),App.config.set("url",url),App.config.set("fullUrl",url)}),module.exports={"application:config":configurePlugin}},{}]},{},[1])(1)});