1.Vue的基本使用(插值)
2.Vue的指定系统
3.Vue的双向数据绑定
4.局部组件的创建
	打油诗: 声子 挂子 用子。

注意: 如果template定义了内容，那么优先template模板，如果没有定义内容那么加载目的地的模板
template叫做入口组件

5.组件通信
	父->子
		1.先给父组件中绑定自定义属性
		2.在子组件中使用props接受父组件传递的数据
		3.可以在子组件中任意使用
	子->父
		1.在父组件绑定自定义事件
		2.在子组件中触发原生事件，在函数中使用$emit触发自定义的事件($emit e1:自定义事件名, e2:消息|数据)

	组件通信二
		$attrs和$listeners 解决多层组件问题

	组件通信三
		中央事件总线
		var bus = new Vue();

		mounted() {
			<!-- 监听 -->
			bus.$on('globalEvent', (val)=>{
			})
			<!-- 触发 -->
			methods: {
				click: function(){
					bus.$emit('globalEvent', val)
				}
			}
		}

	组件通信四
		父组件通过provide来提供变量，子组件通过inject注入变量

	组件通信五
		$parent和$child

	组件通信 Vuex

	全局组件不需要挂载，自动挂载(Vue.component('', {}))
	局部组件需要手动挂载
	插槽: slot内置组件(承载内容)
	具名插槽: 预留位置

7.过滤器
	为页面中的数据进行添油加醋的功能
	1.局部过滤器(filters)
	2.全局过滤器(Vue.filter('', function(){}))

8.watch监听
	基本类型可以直接监听对应属性
	引用类型
		监听复杂类型，深度监视
		属性名: {
			deep: true,
			handler: function (nVal, oVal) {

			}
		}
	总结:
		watch监听的是单个属性
			基本的数据类型 简单监视
			复杂的数据类型 深度监视

9.计算属性computed
	使用方法代替繁琐的模板运算

	<!-- for example -->

	<!-- mode one Function -->
	getCurrentIndex: function() {},
	
	<!-- mode two Object -->
	getCurrentIndex: {
		set: function (){
		},
		get: function (){
		}
	}

10.组件的生命周期(钩子)
	beforeCreate	(组件创建之前)
	created			(组件创建之后)
	beforeMount		(挂载数据到DOM之前调用)(打印DOM)
	mounted			(挂载数据到DOM之后调用)(打印DOM)
	beforeUpdate	(在更新DOM之前被调用，可以获取原始DOM)
	updated			(在更新DOM之前被调用，可以获取最新DOM)
	beforeDestroy	(在DOM销毁之前)
	destroyed		(在DOM销毁之后)

	keep-alive		Vue内置组件keep-alive能在组件的切换过程中将状态保留在内存中防止我们的重复渲染DOM
	activated		(被 keep-alive 缓存的组件激活时调用)
	deactivated		(被 keep-alive 缓存的组件停用时调用)

扩展
	1.nodejs框架
		koa
		express
			设计模式(MVC)model view controller
	2.Element Ui