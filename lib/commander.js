const path = require("path");
const { version } = require("../package.json"); //获取package.json里面的版本号
const { program } = require("commander");
const { mapActions } = require("./mapActions.js"); //引入commands配置文件

program.version(version); //获取版本号
// console.log(mapActions)
Object.keys(mapActions).forEach((action) => {
    program
        .command(action) //commands 里面的命令的全称
        .option(mapActions[action].option) //配置Options
        .alias(mapActions[action].alias) //配置命令别名
        .description(mapActions[action].description) //配置cmmands里面的描述
        .action((name, argv) => {
            //输入不同的命令执行不同的操作
            //读取对应执行文件 引入path文件
            require(path.resolve(__dirname, `../actions/${action}`))(argv);
        });
});
program.parse(process.argv); //传入简析参数
