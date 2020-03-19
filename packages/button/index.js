import xhButton from './src/button.vue';

/* istanbul ignore next */
// eslint-disable-next-line func-names
xhButton.install = function (Vue) {
  Vue.component(xhButton.name, xhButton);
};

export default xhButton;
