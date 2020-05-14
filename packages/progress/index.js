import xhProgress from './src/progress.vue';

/* istanbul ignore next */
// eslint-disable-next-line func-names
xhProgress.install = function (Vue) {
  Vue.component(xhProgress.name, xhProgress);
};

export default xhProgress;
