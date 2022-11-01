const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],

  ////////////////////////////////Normal
  // devServer: { proxy: "http://localhost:5000" },

  ///////////////////////////////////////Docker
  devServer: { proxy: "http://server:5000" },
});
