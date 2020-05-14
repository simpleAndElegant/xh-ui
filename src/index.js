import Button from '../packages/button/index';
import Icon from '../packages/icon/index';
import Row from '../packages/row/index';
import Col from '../packages/col/index';
import Input from '../packages/input/index';
import Progress from '../packages/progress/index';


const components = [Button, Icon, Row, Col, Input, Progress];
// eslint-disable-next-line func-names
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
  Icon,
};
