import xhInput from './src/input.vue';

/* istanbul ignore next */
// eslint-disable-next-line func-names
xhInput.install = function (Vue) {
  Vue.component(xhInput.name, xhInput);
};

export default xhInput;
