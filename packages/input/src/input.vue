<template>
  <div class='xh-input' :class="inputClass">
    <xh-icon :icon="prefixIcon" v-if="prefixIcon"></xh-icon>
    <xh-icon :icon="suffixIcon" v-if="suffixIcon"></xh-icon>
    <input
      v-bind="$attrs"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      ref="input"
    />
    <!-- @mousedown.native.prevent  不会失去焦点 -->
    <xh-icon
      icon="qingkong"
      v-if="showClear"
      @click.native="clear"
      @mousedown.native.prevent
    ></xh-icon>
    <xh-icon
      icon="eye"
      v-if="showPwdVisible"
      @click.native="changeStatus"
    ></xh-icon>
  </div>
</template>

<script>
export default {
  name: 'xh-input',
  props: {
    readonly: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    prefixIcon: String,
    suffixIcon: String,
  },
  data() {
    return {
      passwordVisible: false,
      focused: false,
    };
  },
  methods: {
    getInput() {
      return this.$refs.input;
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    changeStatus() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    handleInput(event) {
      if (event.target.value === this.nativeInputValue) return;
      this.$emit('input', event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
  },
  computed: {
    inputClass() {
      const classes = [];
      if (this.clearable || this.showPassword || this.suffixIcon) {
        classes.push('xh-input-suffix-icon');
      }
      if (this.prefixIcon) {
        classes.push('xh-input-prefix-icon');
      }
      return classes;
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showPwdVisible() {
      return this.showPassword
          && !this.disabled
          && !this.readonly
          && (!!this.nativeInputValue || this.focused);
    },
    showClear() {
      return this.clearable
          && !this.disabled
          && !this.readonly
          && this.nativeInputValue
          && this.focused;
    },
  },
  mounted() {
    this.setNativeInputValue();
  },
};
</script>

<style lang="scss">
@import '../../../styles/_var';

.xh-input {
  display: inline-flex;
  position: relative;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #eee;
    }
  }
  &-suffix-icon {
    input {
      padding-right: 25px;
    }
    .xh-icon {
      right: 8px;
      top: 13px;
      position: absolute;
      cursor: pointer;
      width: 14.5px;
      height: 14.5px;
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
  &-prefix-icon {
    input {
      padding-left: 25px;
    }
    .xh-icon {
      left: 8px;
      top: 13px;
      position: absolute;
      cursor: pointer;
      width: 14.5px;
      height: 14.5px;
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
}
}
</style>
