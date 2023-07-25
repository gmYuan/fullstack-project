#!/usr/bin/env node

console.log("开始执行imooc-test啦");

// 支持引入本地第三方库文件
// const lib = require('imooc-test-lib')
// let total = lib.sum(2,73)
// console.log('total', total)


//S1 注册一个命令: imooc-test init
const lib = require("imooc-test-lib");
const argv = require("process").argv;
const command = argv[2];
console.log("命令行的 命令解析", argv);


//S2 支持最简单的命令行的 命令参数解析 imooc-test init --name test
const options = argv.slice(3);
let option, param;
if (options.length > 1) {
  [option, param] = options;
  option = option.replace("--", "");
  console.log("命令行的 命令解析2", option, param);
}

if (command) {
  if (lib[command]) {
    lib[command]({ option, param });
		// 支持最简单的参数简写  --version/ -V
  } else if (command.startsWith("--") || command.startsWith("-")) {
		const globalOption = command.replace(/--|-/g, "");
		if (globalOption === "version" || globalOption === "V") {
			console.log("version-- 1.0.0");
		}
	} else {
    console.log("无效的命令");
  }
} else {
  console.log("请输入命令");
}

