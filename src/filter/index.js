const filters = {
	toDobule (n) {
		if (n < 10) {
			return '0' + n
		} else {
			return n
		}
	},
	// 年月日，时分秒
	getLocalTime: (timeStamp) => {
		if (typeof timeStamp == 'string') {
			timeStamp = Number(timeStamp)
		} else {
            timeStamp = timeStamp
		}
		let date = new Date(timeStamp),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
	    return Y + '-' + filters.toDobule(M) + '-' + filters.toDobule(D) + ' ' + 
	    		filters.toDobule(h) + ':' + filters.toDobule(m) + ':' + filters.toDobule(s)
	},

	// 年月日
	getTime: (time) => {
        if(time == null){
            return ''
        }
		let date = new Date(time),
			Y = date.getFullYear() + '-',
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
			D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' '
		return Y + M + D
    }
}

const install = function(Vue, opts = {}) {
	Object.keys(filters).forEach(key => {
		Vue.filter(key, filters[key])
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default { install, filters }