<template>
	<view class="hero-detail-panel">
		<view class="hero-img-panel">
			<image class="hero-img" :src="hero.imagine" mode="aspectFill"></image>
		</view>
		<view class="hero-infor">
			<view class="hero-name">
				<text class="iconfont" :class="hero.roleIcon"></text>
				<text>{{ hero.roleLabel }}</text>
				<text class="margin-left">{{hero.name}}</text>

				<text style="float: right">
					<text v-for="item in hero.difficulty" class="cuIcon-favorfill text-yellow"></text>
				</text>
			</view>

			<view class="hero-saying">
				{{ hero.saying }}
			</view>

			<view class="hero-desc">
				{{ hero.description }}
			</view>

			<view class="hero-short-info">
				<view class="row">
					<text class="icon cuIcon-wenzi"></text>
					<text>全名：</text>
					<text>{{ hero.fullName }}</text>
				</view>

				<view class="row">
					<text class="icon cuIcon-goodsfill"></text>
					<text>职业：</text>
					<text>{{ hero.profession }}</text>
				</view>

				<view class="row">
					<text class="icon cuIcon-homefill"></text>
					<text>基地：</text>
					<text>{{ hero.base }}</text>
				</view>

				<view class="row">
					<text class="icon cuIcon-activity"></text>
					<text>隶属：</text>
					<text>{{ hero.army }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getHeroDetail
	} from "../../api/hero.js";
  import {getFilterItem} from "../../utils/constant";
	export default {
		data() {
			return {
				hero: {}
			}
		},
		async onLoad({ id }) {
			const {
				code,
				data
			} = await getHeroDetail({
				id
			})
			if (code > 0) {
        const {label, icon} = getFilterItem('hero.role', data.role)
				data.roleLabel = label
				data.roleIcon = icon
				this.hero = data;
			}
		}
	}
</script>

<style lang="scss">
.hero-detail-panel {
	text-align: center;
	height: 100vh;
	.hero-img-panel {
		margin: 30upx auto 0upx;
		width: 240upx;
		height: 240upx;
		border-radius: 100%;
		background-image: url("https://overwatch.nosdn.127.net/1/assets/img/hero-portrait-detailed/hero-portrait-detailed-bg.jpg");
		background-size: 100% 100%;
		overflow: hidden;
		border: 20upx solid white;
		position: relative;
		z-index: 1;
		.hero-img {
			width: 180upx;
			height: 240upx;
		}
	}
	.hero-infor {
		margin: 0px 30upx;
		border-radius: 20upx;
		position: relative;
		text-align: left;
		bottom: 30upx;
		color: white !important;
		background-color: #657388;
		padding: 30upx;
		.hero-name {
			font-size: 40upx;
			font-weight: 700;
			letter-spacing: 5upx;
			.iconfont {
				font-size: 40upx;
				margin-right: 8upx;
			}
		}
		.hero-saying {
			margin-top: 10upx;
			padding-bottom: 24upx;
			border-bottom: 1upx solid #ababab;
		}
		.hero-desc {
			line-height: 40upx;
			margin: 30upx 0;
			border-left: 6upx solid #00c3ff;
			padding-left: 30upx;
		}
		.hero-short-info {
			margin-top: 24upx;
			border-top: 1upx solid #ababab;
			padding-top: 24upx;
			.row {
				display: flex;
				align-items: center;
				text {
					flex-shrink: 0;
				}
				text:last-child {
					flex-shrink: 1;
				}
				.icon {
					margin-right: 10upx;
					font-size: 40upx;
				}
				+ .row {
					margin-top: 16upx;
				}
			}
		}
	}
}
</style>
