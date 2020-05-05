<template>
	<view class="player-detail-panel">
		<view class="cu-card case">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item align-start player-base-info">
						<image class="cu-avatar round lg" :src="player.headShot" mode="aspectFit"></image>
						<view class="content flex-sub align-start">
							<view class="flex justify-between">
								<view>
									<text>{{ player.name }}</text>
									<text>（{{player.realName}}）</text>
								</view>
							</view>
							<view class="text-gray text-sm flex">
								<view class="margin-right">
									<text>队伍：</text>
									<text>{{ player.team }}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-list grid col-3 player-list">
						<view class="cu-item">
							<text class="iconfont iconjishatexiao text-red text-xl">
								<view class="cu-tag badge text-xs">{{ player.elim | formatNumber }}</view>
							</text>
							<text>击杀数</text>
						</view>
						<view class="cu-item">
							<text class="iconfont iconshanghaiyichang text-blue text-xl">
								<view class="cu-tag badge text-xs">{{ player.damage | formatNumber }}</view>
							</text>
							<text>伤害量</text>
						</view>
						<view class="cu-item">
							<text class="iconfont iconzhiliao text-green text-xl">
								<view class="cu-tag badge text-xs">{{ player.healing | formatNumber }}</view>
							</text>
							<text>治疗量</text>
						</view>
						<view class="cu-item">
							<text class="iconfont iconsiwang text-purple text-xl">
								<view class="cu-tag badge text-xs">{{ player.deaths | formatNumber }}</view>
							</text>
							<text>死亡数</text>
						</view>
						<view class="cu-item">
							<text class="iconfont iconshichang- text-gray text-xl">
								<view class="cu-tag badge text-xs">{{ player.timePlayed }}</view>
							</text>
							<text>时长</text>
						</view>
						<view v-if="player.topHero" class="cu-item">
							<text class="iconfont iconyingxiong text-yellow text-xl"></text>
							<text>{{ player.topHero }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getPlayerDetail
	} from "../../api/player.js"
	import {
		getFilterItem
	} from "../../utils/constant.js"

	export default {
		data() {
			return {
				player: {}
			}
		},
		async onLoad({
			id
		}) {
			const {
				code,
				data
			} = await getPlayerDetail({
				id
			})
			if (code > 0) {
				const {
					icon: roleIcon,
					label: roleName
				} = getFilterItem('hero.role', data.role);
				data.roleIcon = roleIcon
				data.roleName = roleName
				this.player = data;
			}
		},
		methods: {},
		filters: {
			formatNumber(number) {
				number = parseFloat(number)
				return number >= 1000 ? ((number / 1000) + 'k+') : number
			}
		}
	}
</script>

<style lang="scss">
	.player-detail-panel {
		.player-base-info {
			padding: 80upx 0px;

			.role-icon {
				font-size: 26 upx;
				margin-right: 4px;
			}
		}

		.player-list {
			.cu-item .iconfont {
				position: relative;
			}
		}
	}
</style>
