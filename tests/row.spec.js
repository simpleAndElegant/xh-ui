/* eslint-disable */
import { shallowMount } from '@vue/test-utils';
import Row from '../packages/row/row.vue';
import Col from '../packages/col/col.vue';
import { expect } from 'chai';



describe('row.vue',() => {
    it('gutter', async () => {
        let wrapper = shallowMount(Row,{
            attachToDocument:true,
            stubs:{
                'xh-col':Col
            },
            slots:{
                default:`<xh-col></xh-col>`
            },
            propsData:{
                gutter:20
            }
        });
        expect(getComputedStyle(wrapper.vm.$el).marginLeft).to.eq('-10px');
        expect(getComputedStyle(wrapper.vm.$el).marginRight).to.eq('-10px');
    })
    it('justify', async () => {
        let wrapper = shallowMount(Row,{
            stubs:{
                'xh-col':Col
            },
            slots:{
                default:`<xh-col></xh-col>`
            },
        });
        console.log(getComputedStyle(wrapper.vm.$el).justifyContent)
        expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-start');
    })
})
