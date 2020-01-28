const postcss = require("postcss-import");

module.exports = {
    parser:"postcss",
    plugins :[postcss()]
}