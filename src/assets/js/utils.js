export default {
	// 函数防抖
	debounce (func, delay){
	    let timer;
	    return function (...args) {
	        if (timer) {
	            clearTimeout(timer)
	        }

	        timer = setTimeout(() =>{
	            func.apply(this, args)
	        }, delay);
	    }
	}
}