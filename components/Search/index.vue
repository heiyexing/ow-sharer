<template>
	<view class="cu-bar search bg-white">
		<view class="search-form round">
			<text class="cuIcon-search"></text>
			<input v-model="searchText" :adjust-position="false" type="text" :placeholder="placeholder || '请输入搜索内容'" confirm-type="search"></input>
		</view>
		<view class="action">
			<button class="cu-btn bg-yellow shadow-blur round" @click="handleSearch">搜索</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchText: ""
			}
		},
		methods: {
			handleSearch() {
				this.$emit("search", this.searchText)
			}
		},
		props: {
			placeholder: String
		}
	}
</script>

<style lang="scss">
</style>
