// 封装bus，，解决跨组件之间的通信
const install = function (vue) {
	const Bus = new Vue({
		methods: {
			emit (event, ...args) {
				this.$emit(event, ...args)
			},
			on (event, callback) {
				this.$on(event, callback)
			},
			off (evnet, callback) {
				this.$off(event, callback)
			}
		}
	})
	Vue.prototype.$bus = Bus
}

export default install