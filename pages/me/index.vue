<template>
	<view style="height: 100%;">

		<u-navbar :placeholder="true" title="优惠券" :titleStyle="{color:'#ffffff'}" :bgColor="background" :border="false">
			<view slot="left">
			</view>


		</u-navbar>

		<v-tabs v-model="current" :scroll="false" :tabs="tabs" @change="changeTab" activeColor="#C0191F"
			lineColor="#C0191F">
		</v-tabs>


		<view class="content-list">
			<view style="padding: 20rpx;">
				<nx-coupon :status="current" @showrule="showrule" v-for="(item, index) in couponList" :key="index"
					:item="item" />
			</view>

			<view style="height: 80vh;" class="x-c" v-if="couponList.length === 0">
				<u-empty text="暂无数据" icon-size="40"></u-empty>
			</view>

		</view>

		<nx-coupon-rule ref="couponRule" v-if="couponShowRule" :itemData="itemData" :ruleShow="couponShowRule">
		</nx-coupon-rule>
	</view>
</template>

<script>
	export default {
		components: {},
		onShow() {
			// 查询优惠券
			this.getCoupon();
		},
		filters: {

		},
		data() {
			return {
				itemData: {},
				couponShowRule: false,
				couponList: [
					{
						couponName: "大促销活动",
						discountsMaxAmount: "21.00",
						discountsMinAmount: "1000.00",
						exchangeEndDate: "2022-04-09 23:59:59",
						exchangeStartDate: "2022-04-06 13:46:25",
						isAdditivity: 1,
						source: 0,
						type: 0,
					},
					{
						couponName: "大促销活动",
						discountsMaxAmount: "21.00",
						discountsMinAmount: "1000.00",
						exchangeEndDate: "2022-04-09 23:59:59",
						exchangeStartDate: "2022-04-06 13:46:25",
						isAdditivity: 1,
						source: 0,
						type: 0,
					}
				],
				searchQuery: {
					type: 0, // 0未使用 1已使用 2 已失效
				},
				current: 0,
				tabs: ['未使用', '已使用', '已失效'],
				background: '#C0191F',

			}
		},
		methods: {
			showrule(item) {
				let that = this;
				this.couponShowRule = true;
				this.itemData = item;
				if (that.$refs.couponRule) {
					that.$refs.couponRule.ruleShowOrClose();
				}
			},
			// 获取优惠券
			async getCoupon() {
				let parms = {
					type: this.searchQuery.type
				}
				// let data = await this.$get(this.$api.person.couponList, parms, true);
				// if (data) {
				// 	this.couponList = data;
				// }
					this.couponList = this.couponList.map(item=>{
						let obj = item;
						obj.type = this.searchQuery.type
						return obj
					});
			},
			changeTab(index) {
				this.searchQuery.type = index;
				this.current = index;
				// 查询优惠券
				this.getCoupon();
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .scroll-view-item_wrap {
	// 	min-width: 140rpx;
	// 	text-align: center;
	// 	line-height: 60rpx;
	// 	font-size: 25rpx;
	// 	border-radius: 32rpx;
	// 	margin: 20rpx 0 0 30rpx;
	// }
</style>
