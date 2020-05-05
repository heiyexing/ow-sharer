<template>
	<scroll-view scroll-x class="bg-white nav">
		<view class="flex text-center">
			<view class="cu-item flex-sub" v-for="(item,index) in list" :class="item.value==currentTab?'text-orange cur':''"
			 :key="index" @click="currentTab = item.value" :data-id="index">
				{{ item.label }}
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			value: [String, Number],
			list: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			currentTab: {
				get() {
					return this.value
				},
				set(value) {
					this.$emit("input", value);
				}
			}
		}
	}
</script>

<style>
</style>
