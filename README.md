
##  先上图
![在这里插入图片描述](https://img-blog.csdnimg.cn/a72315a1a10648fdbb5d07d632f5a57d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b55a95925d764bcba0c8a3440d2cfeb5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6b4dfe4d7b54183a9d25646eb8bdb64.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
## 前言
> 最近项目需要一个多选且互斥的优惠券组件，找了好久，发现并没有于是决定自己撸起袖子造一个 **（互斥比如说二个优惠券A,B选A,就不能选B,选B就不能选A）**

## 实现思路

 - 1 先写单选优惠券组件
   
 - 2 单选优惠券添加复选框
   
 -  3复选框组件是否勾选由数据里面的checked决定
   
     
      ```javascript checked: false||true ```
      
 -   4 动态改变每个优惠券里面的checked就能实现多选效果

 -   5 优惠券选中状态改变时候判断，循环判断每个优惠券的右上角可叠加提示和左下角的不可叠加提示是否显示显示即可
 
 -  6获取所有checked为true的优惠券就是用户勾选的

## 源码下载
github [nx-coupon](https://github.com/mgbq/nx-coupon)

Dcloud插件市场 [nx-coupon](https://ext.dcloud.net.cn/plugin?id=7878)

## 插播
承接，毕业设计，前端页面，后端接口，网站，小程序，APP开发，价格美丽，点击 QQ => [2214904953](http://wpa.qq.com/msgrd?v=3&uin=2214904953&site=qq&menu=yes) 自动加好友


#### 作者相关文章

[反编译获取任何微信小程序源码——看这篇就够了](https://blog.csdn.net/qq_32340877/article/details/110993362) 

[零成本，零基础搭建获利的影视小程序](https://nxmin.blog.csdn.net/article/details/120310802)

[零基础搭建智能垃圾分类小程序(可做毕设，可加入流量主，赚取零花钱)](https://nxmin.blog.csdn.net/article/details/121436270)


