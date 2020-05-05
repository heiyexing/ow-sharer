<template>
	<view>
		<Tabs v-model="currentRole" :list="roleList"></Tabs>
		
		<view class="hero-list">
			<view v-if="currentRole === 'ALL' || currentRole === hero.role" class="hero-item" v-for="(hero, heroIndex) in heroList" :key="hero.id" @click="handleDetail(hero)">
				<image :src="hero.imagine" mode="widthFix"></image>
				<view class="hero-name-panel">
					<text>{{ hero.name }}</text>
					<text class="iconfont text-sm" :class="hero.roleIcon"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Tabs from "../../components/Tabs/index.vue"
	import {
		getFilterList,
		getFilterItem
	} from "../../utils/constant.js"
	import { getHeroList } from "../../api/hero.js"
	export default {
		data() {
			const roleList = [{
				label: '全部',
				value: 'ALL'
			},...getFilterList('hero.role').map(item => {
				return {
					value: item.value,
					label: item.label
				}
			})];
			return {
				roleList ,
				currentRole: roleList[0].value,
				heroList: [],
				params: {}
			}
		},
		async onLoad() {
			const {code, data: { total, list }} = await getHeroList(this.params)
			if (code > 0) {
				this.heroList = list.map(item => {
				  item.roleIcon = getFilterItem("hero.role", item.role).icon
				  return item;
				});
			}
		},
		methods: {
			handleDetail({ id }) {
				uni.navigateTo({
					url: `./detail?id=${id}`
				});
			}
		},
		components: {
			Tabs
		}
	}
</script>

<style lang="scss">
.hero-list {
	display: flex;
	justify-content: space-between;
	margin: 30upx;
	flex-wrap: wrap;
	.hero-item {
		position: relative;
		background-image: url("https://overwatch.nosdn.127.net/1/assets/img/hero-portrait-detailed/hero-portrait-detailed-bg.jpg");
		background-size: 100% 100%;
		border-radius: 10upx;
		overflow: hidden;
		width: calc(33.3% - 30upx);
		margin-bottom: 30upx;
		image {
			width: 100%;
		}
		.hero-name-panel {
			position: absolute;
			bottom: 0px;
			width: 100%;
			padding: 20upx 20upx;
			background: rgba(40, 53, 79, 0.9);
			color: white;
			font-weight: 700;
			font-size: 30upx;
			.iconfont  {
				position: absolute;
				bottom: 8upx;
				right: 8upx;
			}
		}
	}
}
</style>
