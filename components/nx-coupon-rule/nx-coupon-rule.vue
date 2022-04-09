<template>
	<view>
		<view class="cu-modal" style="z-index: 9999999999;" :class="newRuleShow?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white act-title">
					<view class="content" style="font-size: 18px;
	color: #333333;">使用规则</view>
				</view>
				<view class="bg-white" style="padding:20px;text-align: left;">
					<view style="margin-bottom: 20px;">
						<view style="font-size: 14px;
	margin-bottom: 4px;font-weight: bold;">一、商品金额满<text
								style="color: #C0191F;font-weight: 500;">{{itemData.discountsMinAmount}}</text>元可用
						</view>

					</view>
					<view style="margin-bottom: 20px;">
						<view style="font-size: 14px;
						margin-bottom: 4px;font-weight: bold;">二、{{itemData.isAdditivity?'可':'不可'}}与其他券叠加</view>

					</view>
					<view style="margin-bottom: 20px;">
						<view style="font-size: 14px;
											margin-bottom: 4px;font-weight: bold;">三、订单取消、退款在优惠券有效期内可退回</view>

					</view>
					
					<view v-if="itemData.useNotice" style="margin-bottom: 20px;">
						<view style="font-size: 14px;
											margin-bottom: 4px;font-weight: bold;">四、使用须知：{{itemData.useNotice}}</view>
					
					</view>
				</view>

				<view class="bg-white" style="display: flex;justify-content: center;">
					<view class="okisee" @click='ruleShowOrClose'>我知道了</view>
				</view>

			</view>
		</view>


	</view>
</template>

<script>
	export default {
		name: 'sn-coupon-rule',
		props: {
			// 是否显示
			ruleShow: {
				type: Boolean,
				default: false
			},
			itemData: {
				type: Object,
				default: {}
			}

		},
		data() {
			return {
				newRuleShow:this.ruleShow
			}
		},
		methods: {
			ruleShowOrClose() {
				this.newRuleShow = !this.newRuleShow;
			}

		}
	}
</script>

<style lang="scss" scoped>
	.okisee {
		margin: 0 20px 20px 20px;
		background: linear-gradient(132deg, #C11920 0%, #EE2626 100%);
		opacity: 1;
		width: 670rpx;
		border-radius: 48px;
		text-align: center;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		line-height: 76rpx;
	}
</style>
