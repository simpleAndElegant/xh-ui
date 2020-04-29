<template>
<div class="xh_col" :class="colClass" :style="colStyle">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'xh-col',
  data() {
    return { gutter: 0 };
  },
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: null,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    colClass() {
      const classList = [`xh-col-${this.span}`];
      ['span', 'offset'].forEach((prop) => {
        if (this[prop] || this[prop] === 0) {
          classList.push(
            prop !== 'span'
              ? `xh-col-${prop}-${this[prop]}`
              : `xh-col-${this[prop]}`,
          );
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`xh-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            classList.push(
              prop !== 'span'
                ? `xl-col-${size}-${prop}-${props[prop]}`
                : `xl-col-${size}-${props[prop]}`,
            );
          });
        }
      });

      return classList;
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        const res = `${this.gutter / 2}px`;
        style = {
          ...style,
          paddingLeft: res,
          paddingRight: res,
        };
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';
@import '../../styles/_var';


@for $i from 1 through 24 {
  .xh-col-#{$i} {
    width: $i/24 * 100%;
  }
  .xh-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}
@include res(xs) {
  @for $i from 1 through 24 {
    .xh-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .xh-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}

@include res(sm) {
  @for $i from 1 through 24 {
    .xh-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .xh-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 24 {
    .xh-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .xh-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(lg) {
  @for $i from 1 through 24 {
    .xh-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .xh-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 24 {
    .xh-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .xh-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
</style>
