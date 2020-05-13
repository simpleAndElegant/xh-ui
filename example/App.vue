<template>
  <div id="app">
    <!-- <xh-button type="primary">主要按钮</xh-button>
    <xh-button type="warning">警告按钮</xh-button>
    <xh-button type="danger">危险按钮</xh-button>
    <xh-button type="success">成功按钮</xh-button>
    <xh-button type="info">信息按钮</xh-button> -->
    <br>
    <!-- 带icon的按钮 -->
    <!-- <xh-button type="info" icon="sousuo">搜索按钮</xh-button>
    <xh-button   @click="handleClick" type="primary" icon="sousuo"></xh-button>
    <xh-button type="success" icon="sousuo" icon-position="right">内容</xh-button>
    <xh-button @click="handleClick" type="success" loading>加载中</xh-button> -->

    <br>
    <!-- <xh-button-group>
      <xh-button  icon="left" icon-position="left">上一页</xh-button>
      <xh-button  icon="right" icon-position="right">下一页</xh-button>
    </xh-button-group> -->
    <!-- <xh-row>
      <xh-col :span='12'>
        <div class="red"> 11</div>
      </xh-col>
      <xh-col  :span='12'>
        <div class="green"> 22</div>
      </xh-col>
    </xh-row> -->
    <!-- <xh-row>
      <xh-col :span='6'>
        <div class="red"> 33</div>
      </xh-col>
      <xh-col :span='6' offset='12'>
        <div class="green"> 33</div>
      </xh-col>
    </xh-row> -->
    <!-- <xh-row :gutter='20' justify='end'>
      <xh-col :span='6'>
        <div class="red"> 33</div>
      </xh-col>
      <xh-col :span='6'>
        <div class="green"> 33</div>
      </xh-col>
    </xh-row> -->
    <br/>
    <!-- <xh-row  :gutter='20'>
      <xh-col
        :xs="8"
        :sm="6"
        :md="4"
        :lg="3"
        :xl="1"
      >
      <div class="grid-content bg-purple"></div>
      </xh-col>
      <xh-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </xh-col>
      <xh-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </xh-col>
      <xh-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </xh-col>
    </xh-row> -->
    <xh-input
      v-model="value"
      clearable
    />

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
    // input(e) {
    //   console.log(e, 111);
    // },
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
.red {
  background: red;
}
.green {
  background: green;
}
.xh-col {
    border-radius: 4px;
  }
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
