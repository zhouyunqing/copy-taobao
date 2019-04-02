<template>
	<div class="btn-wrap">
        <a class="default-btn" :class="type + '-btn'">
            <span v-text="btnText"></span>
        </a>
    </div>
</template>

<script>
	export default {
        props: {
            btnText: {
                type: String,
                default: '默认'
            },
            type: {
                type: String,
                default: ''
            }
        },
		data () {
			return {
				
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../assets/scss/public.scss';
.btn-wrap {
    .default-btn {
        display: block;
        outline: 0 none;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        font-size: $font16; /*no*/
        height: 94px;
        line-height: 94px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        color: #000;
        background-color: $white;
        border: 1px solid #ddd;
        border-radius: 5px;/*no*/
    }
    .primary-btn {
        background-color: $mainColor;
        color: $white;
        &:active {
            background-color: #0e80d2;
            color: #f6f6f6;
        }
    }
}
</style>