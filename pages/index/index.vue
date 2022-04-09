<template>
	<view>

		<view style="
		        background-color: #ffffff;
		        border-radius: 8px;
		        margin: 0 12px;
		        overflow: hidden;
		    ">
			<nx-can-use-coupon ref="picCoupon" v-if="couponData.useList.length || couponData.stopList.length"
				:discounts="couponDiscounts" :isShowCheck="true" :couponData="couponData" @submitCoupon="submitCoupon"
				:noCouponShow="true"></nx-can-use-coupon>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				//勾选优惠券优惠金额
				couponDiscounts: '',
				// 优惠券
				couponData: {
					useList: [
						// {
						// 	couponName: "1118-2",
						// 	couponSn: "Y1483348124452782092",
						// 	discountsMaxAmount: "50.00",
						// 	discountsMinAmount: "1500.00",
						// 	exchangeEndDate: "2022-01-21 15:58:47",
						// 	exchangeStartDate: "2022-01-18 15:58:47",
						// 	id: "1483348124657315841",
						// 	isAdditivity: 1,
						// 	source: 0,
						// 	type: 0,
						// },
						// {
						// 	couponName: "1118-3",
						// 	couponSn: "Y1483348124452782092",
						// 	discountsMaxAmount: "100.00",
						// 	discountsMinAmount: "1500.00",
						// 	exchangeEndDate: "2022-01-21 15:58:47",
						// 	exchangeStartDate: "2022-01-18 15:58:47",
						// 	id: "1483348124657315841",
						// 	isAdditivity: 0,
						// 	source: 0,
						// 	type: 0,
						// }, {
						// 	couponName: "1118-2",
						// 	couponSn: "Y1483348124452782092",
						// 	discountsMaxAmount: "50.00",
						// 	discountsMinAmount: "1500.00",
						// 	exchangeEndDate: "2022-01-21 15:58:47",
						// 	exchangeStartDate: "2022-01-18 15:58:47",
						// 	id: "1483348124657315841",
						// 	isAdditivity: 1,
						// 	source: 0,
						// 	type: 0,
						// },
						// {
						// 	couponName: "1118-3",
						// 	couponSn: "Y1483348124452782092",
						// 	discountsMaxAmount: "100.00",
						// 	discountsMinAmount: "1500.00",
						// 	exchangeEndDate: "2022-01-21 15:58:47",
						// 	exchangeStartDate: "2022-01-18 15:58:47",
						// 	id: "1483348124657315841",
						// 	isAdditivity: 1,
						// 	source: 0,
						// 	type: 0,
						// }
					],
					stopList: [
						// {
						// 	couponName: '1118-4',
						// 	couponSn: 'Y1483348124452782092',
						// 	discountsMaxAmount: '50.00',
						// 	discountsMinAmount: '1500.00',
						// 	exchangeEndDate: '2022-01-21 15:58:47',
						// 	exchangeStartDate: '2022-01-18 15:58:47',
						// 	id: '1483348124657315841',
						// 	isAdditivity: 1,
						// 	source: 0,
						// 	type: 0
						// },
						// {
						// 	couponName: '1118-',
						// 	couponSn: 'Y1483348124452782092',
						// 	discountsMaxAmount: '100.00',
						// 	discountsMinAmount: '1500.00',
						// 	exchangeEndDate: '2022-01-21 15:58:47',
						// 	exchangeStartDate: '2022-01-18 15:58:47',
						// 	id: '1483348124657315841',
						// 	isAdditivity: 1,
						// 	source: 0,
						// 	type: 0
						// }
					]
				},

			};
		},
		onShow() {
			let that = this
			this.couponData.stopList = []
			this.couponData.useList = [
				{
					couponName: "1118-2",
					couponSn: "Y1483348124452782092",
					discountsMaxAmount: "50.00",
					discountsMinAmount: "1500.00",
					exchangeEndDate: "2022-01-21 15:58:47",
					exchangeStartDate: "2022-01-18 15:58:47",
					id: "1483348124657315841",
					isAdditivity: 1,
					source: 0,
					type: 0,
				},
				{
					couponName: "1118-3",
					couponSn: "Y1483348124452782092",
					discountsMaxAmount: "100.00",
					discountsMinAmount: "1500.00",
					exchangeEndDate: "2022-01-21 15:58:47",
					exchangeStartDate: "2022-01-18 15:58:47",
					id: "1483348124657315841",
					isAdditivity: 0,
					source: 0,
					type: 0,
				}, {
					couponName: "1118-2",
					couponSn: "Y1483348124452782092",
					discountsMaxAmount: "50.00",
					discountsMinAmount: "1500.00",
					exchangeEndDate: "2022-01-21 15:58:47",
					exchangeStartDate: "2022-01-18 15:58:47",
					id: "1483348124657315841",
					isAdditivity: 1,
					source: 0,
					type: 0,
				},
				{
					couponName: "1118-3",
					couponSn: "Y1483348124452782092",
					discountsMaxAmount: "100.00",
					discountsMinAmount: "1500.00",
					exchangeEndDate: "2022-01-21 15:58:47",
					exchangeStartDate: "2022-01-18 15:58:47",
					id: "1483348124657315841",
					isAdditivity: 1,
					source: 0,
					type: 0,
				}
			]
			this.couponData.stopList=[
				{
					couponName: '1118-4',
					couponSn: 'Y1483348124452782092',
					discountsMaxAmount: '50.00',
					discountsMinAmount: '1500.00',
					exchangeEndDate: '2022-01-21 15:58:47',
					exchangeStartDate: '2022-01-18 15:58:47',
					id: '1483348124657315841',
					isAdditivity: 1,
					source: 0,
					type: 0
				},
				{
					couponName: '1118-',
					couponSn: 'Y1483348124452782092',
					discountsMaxAmount: '100.00',
					discountsMinAmount: '1500.00',
					exchangeEndDate: '2022-01-21 15:58:47',
					exchangeStartDate: '2022-01-18 15:58:47',
					id: '1483348124657315841',
					isAdditivity: 1,
					source: 0,
					type: 0
				}
			]
			// 赋值且给checkbox给默认值
			this.couponData.useList = this.couponData.useList.map((item) => {
				let obj = {
					...item,
					checked: false, // 勾选
					topRightTip: false, //右上角提示
					bottomTip: false // 底部提示
				}
				return obj
			})
			console.log('this.couponData.useList', this.couponData.useList)
			if (this.$refs.picCoupon) {
				this.$refs.picCoupon.setUseData(that.couponData.useList)
				this.$refs.picCoupon.setStopList(that.couponData.stopList)
			}

		},
		onLoad(parms) {
			// 监听优惠券勾选
			this.$bus.$on('couponChecked', this.couponChecked)
		},
		onUnload() {
			// 移除监听事件
			uni.$off('couponChecked')
		},
		methods: {
			setCheckUseList(parameIndex, setBool, isAdd) {
				// isAdd是否可叠加 0 不可叠加 1 可叠加 2 所有 其他参数见下
				let that = this
				let tempArray = []
				that.couponData.useList.forEach((item, index) => {
					let obj = item
					let isAddBool = true
					if (isAdd == 0) {
						isAddBool = item.isAdditivity == 0 ? true : false
					} else if (isAdd == 1) {
						isAddBool = item.isAdditivity == 1
					}
					if (parameIndex != index && isAddBool) {
						obj.checked = setBool
					}

					tempArray.push(obj)
				})
				that.couponData.useList = tempArray
				if (this.$refs.picCoupon) {
					this.$refs.picCoupon.setUseData(tempArray)
				}
			},
			setDefaultUseList(parameIndex, topOrBot, setBool, isAdd) {
				// index, -1所有还是其他索引，topOrBoT（0：top，1:bot 2 二个都有 ）顶部或者底部的提示，setBool设置值成true或者false,isAdd是否可叠加 0 不可叠加 1 可叠加 2 所有
				let that = this
				// console.log('parameIndex', parameIndex);
				// console.log('topOrBot', topOrBot);
				// console.log('setBool', setBool);
				// console.log('isAdd', isAdd);
				let tempArray = []
				that.couponData.useList.forEach((item, index) => {
					let obj = item
					let isAddBool = true
					if (isAdd == 0) {
						isAddBool = item.isAdditivity == 0 ? true : false
					} else if (isAdd == 1) {
						isAddBool = item.isAdditivity == 1
					}
					if (parameIndex != index && isAddBool) {
						if (topOrBot == 0) {
							obj.topRightTip = setBool
						} else if (topOrBot == 1) {
							obj.bottomTip = setBool
						} else {
							obj.topRightTip = setBool
							obj.bottomTip = setBool
						}
					}

					tempArray.push(obj)
				})
				that.couponData.useList = tempArray
				if (this.$refs.picCoupon) {
					this.$refs.picCoupon.setUseData(tempArray)
				}
			},
			couponChecked(index) {
				let that = this
				console.log('index', index)
				console.log(
					'that.couponData.useList[index]',
					that.couponData.useList[index]
				)

				that.couponData.useList[index].checked = !that.couponData.useList[index].checked
				if (that.couponData.useList[index].checked) {
					// 勾选上
					console.log('勾选上')

					// 把自己的底部提示隐藏起来
					that.couponData.useList[index].bottomTip = false
					this.$refs.picCoupon.setUseData(that.couponData.useList)
					let isAdditivity = that.couponData.useList[index].isAdditivity // 勾选的是否可叠加
					if (isAdditivity) {
						// 可叠加
						console.log('可叠加')
						// 把所有不可以叠加的优惠券取消勾选
						that.setCheckUseList(-1, false, 0)
						// 把所有可以叠加的优惠券右上角提示显示出来
						that.setDefaultUseList(-1, 0, true, 1)
						// 把所有不可以叠加的优惠券底部提示显示出来
						that.setDefaultUseList(-1, 1, true, 0)
						// 把所有可以叠加的优惠券底部提示隐藏起来
						that.setDefaultUseList(-1, 1, false, 1)
					} else {
						// 不可叠加
						console.log('不可叠加')
						// 把其他所有优惠券取消勾选
						console.log('把其他所有优惠券取消勾选')
						that.setCheckUseList(index, false, 2)
						// 把所有可以叠加的优惠券右上角提示隐藏起来
						that.setDefaultUseList(-1, 0, false, 1)
						// 把其他所有优惠券底部提示显示出来
						that.setDefaultUseList(index, 1, true, 2)
					}
				} else {
					// 取消勾选
					console.log('取消勾选')
					let isAdditivity = that.couponData.useList[index].isAdditivity // 取消的是否可叠加
					if (isAdditivity) {
						// 可叠加
						let checkList = that.couponData.useList.map(
							(item) => item.checked
						) // 获取所有勾选的优惠券
						if (checkList.length == 0) {
							// 没有勾选的可叠加优惠券
							//去掉所有提示
							that.setDefaultUseList(-1, 2, false, 2)
						}
					} else {
						// 不可叠加
						//去掉所有提示
						that.setDefaultUseList(-1, 2, false, 2)
					}
				}
			},

		}
	}
</script>

<style lang="less" scoped>

</style>
