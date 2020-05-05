<template>
	<view>
		<!-- 搜索栏 -->
		<Search class="search" placeholder="请输入选手名称" @search="handleSearch"></Search>

		<!-- 选手列表 -->
		<view class="cu-list menu-avatar">
			<view v-for="(player, playerIndex) in playerList" :key="playerIndex" class="cu-item" @click="handleDetail(player)">
				<view class="cu-avatar round lg" :style="'background-image:url(' + player.headShot + ');'"></view>
				<view class="content">
					<view>
						<text>{{ player.name }}</text>
						<text>（{{ player.realName }}）</text>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut text-xs text-grey">
							<text>队伍：{{ player.team }}</text>
						</view>
					</view>
				</view>
				<view class="action">
					<view>
						<text class="iconfont text-xl" :class="player.roleIcon"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Search from "../../components/Search/index.vue"
	import {
		getPlayerList
	} from "../../api/player.js"
	import {
		getFilterItem
	} from "../../utils/constant.js"
	export default {
		data() {
			return {
				total: 0,
				
				params: {
					name: "",
					pageNum: 1,
					pageSize: 10,
					total: 10
				},
				playerList: []
			};
		},
		onLoad() {
			this.handleSearch("")
		},
		methods: {
			async handleSearch(name) {
				const { code, data: { total, list } } = await getPlayerList(this.params)
				if (code > 0) {
					this.playerList = list.map(item => {
						item.roleIcon = getFilterItem('hero.role', item.role).icon;
						return item;
					});
				}
			},
			handleDetail({ id }) {
				uni.navigateTo({
					url: `./detail?id=${id}`
				});
			}
		},
		components: {
			Search
		}
	}
</script>

<style lang="scss">
	.search {
		border-bottom: 1px solid #EEEEEE;
	}
</style>
