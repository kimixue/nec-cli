module.exports = async (argv) => {
  // 创建交互式命令
  require("../lib/inquirer.js")(argv[0]);
};
