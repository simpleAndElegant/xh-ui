import Button from '../packages/button/index';


const components = [Button];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};


// 全局通过script标签的方式引入自动执行install方法
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  Button,
};
