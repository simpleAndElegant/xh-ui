import Button from '../packages/button/index';
import Icon from '../packages/icon/index';


const components = [Button, Icon];
const install = function (Vue) {
  components.forEach((component) => {
    console.log(component.name);
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
