const clear = require('clear');
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require('chalk');
const ora = require("ora"); //创建加载loading
const shell = require("shelljs");
// const { clone } = require("./download.js");
const log = content => console.log(chalk.green(content));

module.exports = name => {
    clear();
    console.log(
      chalk.yellow(figlet.textSync("NEC", { horizontalLayout: "full" }))
    );
    inquirer.prompt([
        {
            type: "list",
            name: "project",
            message: "🚀选择你需要创建的项目...",
            choices: [
                { name: "创建一个插件", value: "plugin",checked:true },
                { name: "创建一个PC项目", value: "web" },
                { name: "创建一个移动端项目", value: "mobile"}
            ],
        },
    ]).then(answers => {
        const remote = "https://github.com/kimixue/plugin-template.git";
        const curName = "plugin-template";
        const tarName = name;
        // const spinner = ora(`🚀下载项目并安装依赖~~~${name}`);
        // spinner.start();
        if (answers.project === 'plugin'){
            shell.exec(`
                git clone ${remote} --depth=1
                mv ${curName} ${tarName}
                rm -rf ./${tarName}/.git
                cd ${tarName}
                yarn
            `, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`)
                    return
                }
                // spinner.succeed("创建成功~");
                console.log(`🎉  Successfully created project ${tarName}`);
                console.log(`👉  Get started with the following commands:`);
                console.log(chalk.black('$') + ' ' + chalk.blue(`cd ${tarName}`))
                console.log(chalk.black('$') + ' ' + chalk.blue(`yarn serve`))
            });
        }
    })
};