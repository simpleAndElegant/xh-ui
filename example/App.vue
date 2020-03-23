<template>
  <div id="app">
    <xh-button type="primary">主要按钮</xh-button>
    <xh-button type="warning">警告按钮</xh-button>
    <xh-button type="danger">危险按钮</xh-button>
    <xh-button type="success">成功按钮</xh-button>
    <xh-button type="info">信息按钮</xh-button>
    <br>
    <!-- 带icon的按钮 -->
    <xh-button type="info" icon="sousuo">搜索按钮</xh-button>
    <xh-button   @click="handleClick" type="primary" icon="sousuo"></xh-button>
    <xh-button type="success" icon="sousuo" icon-position="right">内容</xh-button>
    <xh-button @click="handleClick" type="success" loading>加载中</xh-button>

    <br>
    <xh-button-group>
      <xh-button  icon="left" icon-position="left">上一页</xh-button>
      <xh-button  icon="right" icon-position="right">下一页</xh-button>
    </xh-button-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
