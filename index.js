const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({text:`Hi, my name is ${userInfo.name} and my school is ${userInfo.school}`, e: "o0", T: "U "}));

console.log(userInfo.name, userInfo.school);
