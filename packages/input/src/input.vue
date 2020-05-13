<template>
  <div class='xh-input' :class="inputClass">
    <input
      v-bind="$attrs"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      :disabled="disabled"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      ref="input"
    />
    <xh-icon
      icon="eye"
      v-if="showPassword && value"
      @click.native="changeStatus"
    ></xh-icon>
  </div>
</template>

<script>
export default {
  name: 'xh-input',
  props: {
    name: {
      type: String,
      default: null,
    },
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
  },
  data() {
    return {
      passwordVisible: false,
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
  },
  computed: {
    inputClass() {
      const classes = [];
      return classes;
    },

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
}
</style>
