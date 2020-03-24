/* eslint-disable */
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

import Button from '../packages/button/src/button.vue';
import Icon from '../packages/icon/src/icon.vue';


describe('button.vue', () => {
  it('1.测试button能否正常显示slot里的内容', () => { // 测试当前组件运行在浏览器的情况
    const wrapper = shallowMount(Button, {
      slots: {
        default: '小猴编程',
      },
    });
    expect(wrapper.text()).to.eq('小猴编程');
  });
  it('2.测试icon传入是否能正常显示', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xh-icon': Icon, // 替换的功能
      },
      propsData: {
        icon: 'edit',
      },
    });
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit');
  });
  it('3.测试loading时 按钮是禁用状态', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xh-icon': Icon, // 替换的功能
      },
      propsData: {
        loading: true,
      },
    });
    console.log(wrapper.vm.$el)
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading');
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
  });
  it('4.测试按钮能否正常点击', () => {
    const wrapper = shallowMount(Button, {
      // stubs:['zh-icon'],// 不去渲染icon 只是一个加标签
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click').length).to.eq(1);
  });
  it('5.按钮传入position是否正常显示', () => { // 测试样式
    const wrapper = shallowMount(Button, {
      attachToDocument: true, // 将组件挂载到浏览器上
      stubs: {
        'xh-icon': Icon, // 替换的功能
      },
      slots: {
        default: 'xh-ui',
      },
      propsData: {
        iconPosition: 'left',
        icon: 'edit',
      },
    });
    const ele = wrapper.vm.$el.querySelector('span');
    expect(getComputedStyle(ele).order).to.eq('2');
    wrapper.setProps({ iconPosition: 'right' }); // 设置props 必须要在下一个事件环去取值
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele).order).to.eq('1');
    });
  });
});
