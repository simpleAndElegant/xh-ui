module.exports = {
  title: "小猴UI",
  description: "Just playing around",
  dest: "./build", // 设置输出目录
  port: 1234, //端口
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/"
      }
    ],
    sidebar: {
      "/components/": [
        {
          collapsable: true,
          children: ["button"]
        }
      ]
    }
  }
};
