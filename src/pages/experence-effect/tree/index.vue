<template>
	<div class="tree-wrap" v-html="treeText">

	</div>
</template>

<script>
	import TreeData from './json/tree.json'
	export default {
		data () {
			return {
				treeText: '',
				treeData: TreeData.tree
			}
		},
		mounted () {
			this.treeText = this.getTree(this.treeData)
		},
		methods: {
			getTree (data) {
				let str = `<ul>`
				for(let i = 0; i < data.length; i++){
					if(data[i].child && data[i].child.length) {
						str += '<li> '+ data[i].name +' </li>'
						str += this.getTree(data[i].child)
					} else {
						str += `<li>${data[i].name}</li>`
					}
				}

				str += `</ul>`
				return str
			}
		}
	}
</script>

<style scoped lang="scss">
	.tree-wrap {
		padding: 20px;
	}
</style>