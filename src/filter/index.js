const filters = {
	// 年月日，时分秒
	getLocalTime: (timestamp) => {
		if (timestamp) {
            let date = new Date(timestamp),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                Y = date.getFullYear() + '-',
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ',
                h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':',
                m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':',
                s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
		    return Y + M + D + h + m + s
        } else {
            return ''
        }
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

const install = function (vue) {
	object.keys(filters).forEach(key => {
		Vue.filter(key, filters[key])
	})
}

export default { install, filters }