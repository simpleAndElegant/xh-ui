<template>
  <div class="xh_row" :style="rowStyl">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xh-row',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
      validator(type) {
        if (type && !['start', 'end', 'center', 'space-around', 'space-between'].includes(type)) {
          console.error(`类型必须是:${['start', 'end', 'center', 'space-around', 'space-between'].join('、')}`);
        }
        return true;
      },
    },
  },
  computed: {
    rowStyl() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          marginLeft: `${-this.gutter / 2}px`,
          marginRight: `${-this.gutter / 2}px`,
        };
      }
      if (this.justify) {
        const key = ['start', 'end'].includes(this.justify) ? `flex-${this.justify}` : this.justify;
        style = {
          ...style,
          justifyContent: key,
        };
      }
      return style; // 通过外层的margin 负值 解决内部padding的问题
    },
    rowClass() {
      const classList = ['xh_row'];
      //   classList.push(this.justify !== 'start' ? `is-justify-${this.justify}` : '');
      return classList;
    },
  },
  mounted() {
    this.$children.forEach((child) => {
      // eslint-disable-next-line no-param-reassign
      child.gutter = this.gutter;
    });
  },
};
</script>

<style lang='scss'>
.xh_row {
  display: flex;
  overflow: hidden;
//   flex-wrap: wrap;
}

</style>
