import Vue from 'vue';
import MessageBox from './messageBox';

export var messageBox = (function () {

    var defaults = {   //默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };

    // 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
    // 让messageBox结合到Vue中
    var MyComponent = Vue.extend(MessageBox);

    return function (opts) {  //配置参数
        // 配置参数对默认对进行覆盖
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }
        // 实例化一个对象
        var vm = new MyComponent({
            // div是装messageBox的盒子
            el: document.createElement('div'),
            // 重新写data数据
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    // 判断defaults.handleCancel的方法是否存在
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    // 删除弹窗
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    // 删除弹窗
                    document.body.removeChild(vm.$el);
                }
            }
        });

        // 将数据添加到哪里
        document.body.appendChild(vm.$el);

    };

})();