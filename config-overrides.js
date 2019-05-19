const {override, fixBabelImports, addLessLoader, addWebpackAlias} = require('customize-cra');
const path = require("path");

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#30b828'},
    }),
    addWebpackAlias({
        ["@components"]: path.resolve(__dirname, 'src/components'),
        ["@pages"]: path.resolve(__dirname, 'src/pages'),
        ["@locales"]: path.resolve(__dirname, 'src/locales'),
    })
);