<template>
	<view v-if="couponData.useList.length || (couponData.stopList.length && noCouponShow)" @touchmove.stop.prevent>
		<nx-coupon-rule ref="couponRule" v-if="couponShowRule" :itemData="itemData" :ruleShow="couponShowRule">
		</nx-coupon-rule>
		<view class="cu-form-group" @click="chooseClicked()">
			<view style="
			height: 20px;
			font-family: PingFangSC, PingFangSC-Regular;
			text-align: left;
			line-height: 20px;">
				<slot><text style="font-size: 32rpx;color: #888888;font-weight: 400;">优惠券</text></slot>
			</view>

			<view>
				<view style="margin-right: 11px;display: inline-block;font-size: 14px;">
					<view v-if="discounts>0" style="font-size: 32rpx;
    font-weight: 400;
    color: #888888;">
						{{'- ￥'+ discounts}}
					</view>
					<view v-else>
						<view v-if="couponData.useList.length" style="
						background-color: #CA161D;
						color: #fff;
						border-radius: 10px;
						
						padding: 2px 6px;">{{couponData.useList.length}}张可用</view>

						<view v-else-if="couponData.useList.length==0 && couponData.stopList.length && noCouponShow">无可用

						</view>


					</view>



				</view>
				<text class="cuIcon-right" style="color: #666666;"></text>
			</view>
		</view>
		<u-popup :show="isShowList" :round="10" mode="bottom" :overlay="true" height="auto" @close="chooseClicked" :closeable="true">
			<view class="pop-content">
				<view style="text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Semibold;
    color: #333333;
    position: fixed;
    background-color: #fff;
    z-index: 9999999;
	top: 0;
    width: 100%;
	padding: 10px 0;
}">
					<text>优惠券</text>
				</view>
				<view v-if="couponData.stopList.length" style="margin-top: 40px;"></view>
				<view v-else style="padding-top: 40px;">

				</view>
				<v-tabs v-if="couponData.stopList.length" v-model="current" :scroll="false" :tabs="tabs" :fixed="true"
					@change="changeTab" activeColor="#C0191F" lineColor="#C0191F">
				</v-tabs>

				<scroll-view v-if="isShowScrollView" scroll-y="true" class="autoheight"
					:style="[{color:couponList.length},{height:couponList.length<3?(couponList.length * 110 + 91+ 'px'):'409px'},{padding:couponList.length==0?'10px 10px 0 10px':'10px 10px 40px 10px'}]">

					<nx-coupon :isShowCheck="current==0?isShowCheck:false" :status="couponStatus"
						@closeModel="chooseClicked" @showrule="showrule" v-for="(item, index) in couponList"
						:key="index" :item="item" :index="index" />


				</scroll-view>

				<view class="x-c autoheight" v-if="couponList.length == 0 && current==0">
					<u-empty text="暂无数据"  icon-size="180"></u-empty>
				</view>

				<view
					style="display: flex;justify-content: center;position: fixed;bottom: 20rpx;padding: 0 20rpx;width: 100%;">
					<view class="okisee" @click='okClick'>{{isShowCheck?'确认':'我知道了'}}</view>
				</view>

			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "can-use-coupon", // 可使用的优惠券
		components: {},
		watch: {
			'couponList.length': {
				handler(newValue, oldValue) {
					if (newValue !== oldValue) {
						// 操作
						console.log('watch');
						// this.$nextTick(() => { // 确保dom已渲染
						//    this.isShowScrollView = true;
						// })
					}
				}
			}
		},
		props: {
			// 无可用优惠券是否也显示
			noCouponShow: {
				type: Boolean,
				default: false
			},
			// 是否有勾选框
			isShowCheck: {
				type: Boolean,
				default: false
			},
			// 选择优惠券后优惠金额
			discounts: {
				type: Number,
				default: 0
			},
			couponData: {
				type: Object,
				default: {
					stopList: [],
					useList: []
				}
			}

		},
		mounted() {
			console.log('mounted')
		},
		data() {
			return {
				couponStatus: 0,
				tabs: ['可用', '不可用'],
				current: 0,
				couponList: this.couponData.useList,
				isShowScrollView: true,
				isShowList: false,
				itemData: {},
				couponShowRule: false
			};
		},
		methods: {
			setStopList(array){
				console.log('array')
				this.couponData.setStopList = array;
			},
			setUseData(array) {
				this.couponList = array;
				console.log('setUseData this.couponList', this.couponList)
				// this.isShowScrollView = false;
				// this.$nextTick(() => { // 确保dom已渲染
				// 	this.isShowScrollView = true;
				// })
			},
			submitCoupon() {
				this.$emit('submitCoupon');
			},
			okClick() {
				// 关闭弹窗
				this.isShowList = !this.isShowList;
				if (this.isShowCheck && this.couponData.useList.length) {
					//提交优惠券
					this.submitCoupon()
				}
			},
			changeTab(index) {
				console.log('index', index)
				this.couponStatus = index;
				//this.$nextTick(() => { // 确保dom已渲染
				this.current = index;
				if (index == 0) {
					this.couponStatus = index;
					this.couponList = this.couponData.useList;
				} else {
					this.couponStatus = 3;
					this.couponList = this.couponData.stopList;

				}
				this.isShowScrollView = false;
				this.$nextTick(() => { // 确保dom已渲染
					this.isShowScrollView = true;
				})
				console.log('couponList.length', this.couponList.length);
				//})


			},
			showrule(item) {
				let that = this;
				console.log('item');
				this.couponShowRule = true;
				this.itemData = item;
				if (that.$refs.couponRule) {
					that.$refs.couponRule.ruleShowOrClose();
				}
			},
			/**
			 * PopUp 弹出层点击事件
			 */
			chooseClicked() {
				console.log('chooseClicked')
				this.isShowList = !this.isShowList;
				this.current = 1;
				this.isShowScrollView = false;
				this.$nextTick(() => { // 确保dom已渲染
					this.isShowScrollView = true;
					this.current = 0;
				})
			},
		}
	}
</script>

<style lang="scss">
	.pop-content {
		position: relative;
		background-color: #F7F7F7;
		height: 100%;

		.autoheight {
			min-height: 190px;
		}

		.okisee {
			// margin: 0 20px;
			background: linear-gradient(132deg, #C11920 0%, #EE2626 100%);
			// width: calc(100% - 40px);
			width: 100%;
			border-radius: 48px;
			text-align: center;
			color: #FFFFFF;
			font-size: 32rpx;
			font-weight: bold;
			line-height: 76rpx;
			// position: fixed;
			// bottom: 20rpx;
		}
	}
</style>
