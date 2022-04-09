<template>
	<view>
		<view class="coupon-item x-bc" @tap="selectCoupon">

			<view class="box-con" v-if="isShowCheck && item.topRightTip">
				<view class="box-text">可叠加</view>
			</view>

			<view class="coupon-money" :class="[{graybg:(status == 1 || status == 2)}]">
				<view class="layof"><text style="font-size: 16px;
">￥</text><text style="font-size: 28px;
">{{item.discountsMaxAmount}}</text></view>
				<view class="demand">满{{item.discountsMinAmount}}可用</view>
			</view>
			<view class="coupon-detail" :class="[{graybgRight:(status == 1 || status == 2) }]">
				<view style="margin-bottom: 12rpx;"><text :class="[{graybg:(status == 1 || status == 2)}]" style="margin-right: 4px;
	background: linear-gradient(132deg, #C11920 0%, #EE2626 100%);
	color: #fff;
	float: left;
	border-radius: 4px;
	font-size: 12px;
	padding: 2px 6px;">{{item.source==0?'平台券':'商家券'}}</text><text style="font-size: 15px;
color: #333333;" class="coupon-title">{{item.applicableScene | formatStatus}}</text></view>
				<!-- {{item.exchangeStartDate.substring(0,10)}}至 -->
				<view class="x-bc" style="margin:0 20rpx 12rpx 0;"><text style="font-size: 12px;
color: #666666;">{{item.exchangeEndDate.substring(0,10)}}&nbsp;到期</text>
					<view v-if="isShowCheck">

						<image class="selectimg" :src="
						        item.checked
						            ? selectStr
						            : unSelectStr
						    "></image>
						<!-- 	
						<radio class='red' :class="item.checked?'checked':''" :checked="false"></radio> -->

					</view>
					<view v-else>
						<view v-if="status==0"  @click.stop="gotoShop" style="width: 60px;
                height: 24px;
				line-height: 24px;
				background-color: #fa3534;
                color: #fff;
                text-align: center;
                border-radius: 12px;">
							去使用
						</view>
					</view>



				</view>
				<view style="margin-bottom: 12rpx;color: #999999;font-size: 12px;text-decoration: underline;"
					@click.stop="ruleShowOrClose()">使用规则</view>

				<view v-if="isShowCheck && item.bottomTip" style="margin-bottom: 12rpx;color: #C0191F;font-size: 12px;">
					此券暂不可和已勾选券叠加使用</view>
			</view>

			<!-- 印章效果 -->
			<view class="seal" v-if="status == 1 || status == 2" style="position: absolute;right: 10rpx;bottom: 10rpx;">
				<view class="seal-son">
					<span
						style="position: absolute;top: 40rpx;text-align: center;font-size: 35rpx;transform: rotate(-12deg);left: 8rpx;color: #D2D2D2;font-weight: 900;">{{status == 1?'已使用':'已失效'}}</span>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				// 未选中图片
				unSelectStr: '/static/images/un-select.png',
				// 选中图片
				selectStr: '/static/images/select.png',
				ruleShow: false
			}
		},
		props: {
			// 是否有勾选框
			isShowCheck: {
				type: Boolean,
				default: false
			},
			// 状态 0未使用，1已使用，2已过期,3不可用
			status: {
				type: Number,
				default: 0
			},
			index: {
				type: Number,
				default: 0
			},
			//优惠券数据
			item: {
				type: Object
			},
		},
		filters: {
			formatStatus: function(type) {
				/**
				  适用场景 0新客注册 1消费返卷 2优惠活动**/
				const statusMap = {
					0: '新客注册',
					1: '消费返券',
					2: '优惠活动'
				}
				return statusMap[type]
			}
		},
		methods: {
			// 查看优惠券使用规则
			ruleShowOrClose() {
				this.$emit('showrule', this.item);
			},
			gotoShop() {
				if (this.status != 0) {
					return
				}
				if (this.$Route.path == '/pages/home/index') {
					this.$emit('closeModel');
				} else {
					this.$Router.pushTab('/pages/home/index')
				}
			},
			selectCoupon() {
				let that = this;
				if (that.isShowCheck) {
					that.$bus.$emit('couponChecked', that.index);
				}
			}

		}
	}
</script>

<style lang='scss' scoped>
	@import '@/static/style/mixin/text-overflow.scss';

	.selectimg {
		width: 40rpx;
		height: 40rpx;
	}

	.graybgRight {
		background-color: #F5F4F5;
	}

	.graybg {
		background: linear-gradient(132deg, #D2D2D2 0%, #D2D2D2 100%) !important;
		;
	}

	.coupon-item {
		width: 100%;
		height: 110px;
		border-radius: 10upx;
		margin-top: 22upx;
		border: 1px solid #FFFFFF;
		position: relative;
		background-color: #FFFFFF;

		.coupon-money {
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			width: 232upx;
			height: 100%;
			border-style: none dotted none none;
			border-color: #eeeeee;
			background: linear-gradient(132deg, #C11920 0%, #EE2626 100%);
			/* background: ; */

			.layof {
				width: 100%;
				font-weight: 400;
				color: #FFFFFF;
				margin-bottom: 6px;
			}

			.demand {
				font-size: 12px;
				color: #FFFFFF;
			}


		}


		.box-con {
			width: 85px;
			height: 88px;
			overflow: hidden;
			position: absolute;
			top: -3px;
			right: -3px;

			.box-text {
				font-size: 12px;
				color: white;
				text-align: center;
				-webkit-transform: rotate(45deg);
				-moz-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				-o-transform: rotate(45deg);
				position: relative;
				padding: 2px 0;
				left: 37px;
				top: 4px;
				width: 65px;
				background-color: #EE2626;
				background-image: -webkit-gradient(linear, left top, left bottom, from(#ff503e), to(#ff2f50));
				background-image: -webkit-linear-gradient(top, #ff503e, #ff2f50);
				background-image: -moz-linear-gradient(top, #ff503e, #ff2f50);
				background-image: -ms-linear-gradient(top, #ff503e, #ff2f50);
				background-image: -o-linear-gradient(top, #ff503e, #ff2f50);
				-webkit-box-shadow: 0px 0px 3px #ff1b40;
				-moz-box-shadow: 0px 0px 3px #ff1b40;
				box-shadow: 0px 0px 3px #ff1b40;

				&:before,
				:after {
					content: "";
					position: absolute;
					bottom: -3px;
				}

				&:before {
					left: 0;
				}

				&:after {
					right: 0;
				}

			}
		}


	}

	.coupon-detail {
		display: flex;
		flex: 1;
		justify-content: center;
		flex-direction: column;
		text-align: left;
		padding-left: 20px;
		height: 100%;

		.coupon-title {
			@include text-overflow("", 2);
		}
	}

	.coupon-item:after {
		width: 40upx;
		height: 20upx;
		position: absolute;
		left: 212upx;
		top: -1px;
		border-radius: 0 0 40upx 40upx;
		content: "";
		display: block;
		background: #F5F5F7;
		border: 1px solid #eeeeee;
		border-top: 0px;
	}

	.coupon-item:before {
		width: 40upx;
		height: 20upx;
		position: absolute;
		left: 212upx;
		bottom: -1px;
		border-radius: 40upx 40upx 0 0;
		content: "";
		display: block;
		background: #F5F5F7;
		border: 1px solid #eeeeee;
		border-bottom: 0px;
	}

	.seal {
		width: 140rpx;
		height: 140rpx;
		border: solid 6rpx #D2D2D2;
		border-radius: 100%;
		background-color: #F5F4F5;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.seal-son {
		width: 125rpx;
		height: 125rpx;
		border: solid 2rpx #D2D2D2;
		border-radius: 100%;
		background-color: #F5F4F5;
		position: relative;
	}
</style>
