<template>
	<div class="btn-wrap">
        <a class="default-btn" :disabled="disabled" :class="[type + '-btn', disType]">
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
            },
            disType: {
                type: String,
                default: ''
            },
            disabled: Boolean
        },
		data () {
			return {
				
			}
		},
        mounted () {
            if (this.disabled) {
                this.disType = 'disabled' + '-btn'
            }
        }
	}
</script>

<style scoped lang="scss">
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
        border: 1px solid #ddd; /*no*/
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
    .disabled-btn {
        color: rgba(0, 0, 0, 0.3);
        opacity: .6;
    }
}
</style>