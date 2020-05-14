<template>
  <div class='xh_progress'>
    <div class="xh_progress__bar" v-if="type === 'line'">
      <div class="xh_progress__bar-outer" :style="{height: strokeWidth + 'px'}">
        <div class="xh_progress__bar-inner" :style="barStyle">
            <div class="xh_progress__bar-innerText" v-if="showText && textInside">{{content}}</div>
        </div>
      </div>
    </div>
    <div
      class="el_progress__text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template>{{content}}</template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xh-progress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: (val) => ['line', 'circle', 'dashboard'].indexOf(val) > -1,
    },
    strokeWidth: {
      type: Number,
      default: 20,
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val) => val >= 0 && val <= 100,
    },
    color: {
      type: String,
      default: '#409eff',
    },
    showText: {
      type: Boolean,
      default: true,
    },
    textInside: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 126,
    },
    format: Function,
  },
  computed: {
    barStyle() {
      const style = {};
      style.width = `${this.percentage}%`;
      style.background = this.getCurrentColor(this.percentage);
      return style;
    },
    content() {
      if (typeof this.format === 'function') {
        return this.format(this.percentage) || '';
      }
      return `${this.percentage}%`;
    },
    progressTextSize() {
      return this.type === 'line'
        ? 12 + this.strokeWidth * 0.4
        : this.width * 0.111111 + 2;
    },
  },
  methods: {
    getCurrentColor(percentage) {
      if (typeof this.color === 'function') {
        return this.color(percentage);
      } if (typeof this.color === 'string') {
        return this.color;
      }
      return this.n(percentage);
    },
    getLevelColor(percentage) {
      const colorArray = this.getColorArray().sort((a, b) => a.percentage - b.percentage);

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < colorArray.length; i++) {
        if (colorArray[i].percentage > percentage) {
          return colorArray[i].color;
        }
      }
      return colorArray[colorArray.length - 1].color;
    },
    getColorArray() {
      const { color } = this;
      const span = 100 / color.length;
      return color.map((seriesColor, index) => {
        if (typeof seriesColor === 'string') {
          return {
            color: seriesColor,
            progress: (index + 1) * span,
          };
        }
        return seriesColor;
      });
    },
  },
};
</script>

<style lang="scss">
.xh_progress{
  position: relative;
  line-height: 1;
  &__bar-outer{
    border-radius:100px;
    background: #eee;
    vertical-align: middle;
  }
  &__bar-inner{
    transition:  width .6s ease;
    position: absolute;
    top:0;
    left:0;
    height:100%;
    text-align: right;
  }
  &__bar-innerText {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    margin: 0 5px;
  }
}

</style>
