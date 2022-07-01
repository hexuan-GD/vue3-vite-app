module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true, // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true,
  },
  parser: "vue-eslint-parser", //parser 是用来将 js 转化为 AST 树的，默认 parser 为 espree，但是只能处理js
  parserOptions: {
    parser: "@typescript-eslint/parser", //vue-eslint-parser 是没办法解析ts
    ecmaVersion: "latest", // ES 版本
    sourceType: "module", // 引入方式,默认为script，我们设置为module
  },
  extends: [
    //如果要我们自己去设置各个规则未免会显得繁琐，所以可以直接使用业界的最佳实践
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"], //提供一些额外的适用于 ts 语法的规则
  rules: {
    // 禁止出现未使用过的变量
    "no-unused-vars": "error",
  }, //自定义规则。
};
