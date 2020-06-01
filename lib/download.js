

module.exports.clone = function(url,name,cb) {
    const download = require("download-git-repo"); //克隆 github gitLab ... 资源
    download(url,name,cb);
}   