"use strict";
// Assigne une ou plusieurs propriétés d’un objet à un objet source
exports.__esModule = true;
exports.result = exports.bar = exports.foo = void 0;
var lodash_1 = require("lodash");
exports.foo = { a: "a property" };
exports.bar = { b: 4, c: "an other property" };
exports.result = lodash_1["default"].assign({ a: "an old property" }, exports.foo, exports.bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
