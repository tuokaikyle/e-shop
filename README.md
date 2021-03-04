Bugs:

未购买过该商品的用户不应该能够评价该商品

使用

update 和 orders 分开做 --- 搞定，添加了 orderSboughtScreen, 拆分

没有 forget password

paymethod 保存好？还是手动选择好 --- 继续研究一下

cancel unpaid orders?

购买后 购物车的东西依然在 修改为增加 cartRest constant, action, reducer

不能先后下两个订单 连续购买两次 第二次购买后 到了第一个订单界面

万一付款出错怎么办？加入检查 completed, 并且可以在这里清空购物车

目前 admin 用户可以看到所有的用户 和所有的商品

未来添加一种用户 即 vendor 用户

为 admin 指定 可以创建商品 可以看到购买该商品的用户 和订单

Maybe it makes more sense to set the initial state of loading to false in orderDetailsReducer, and let ORDER_DETAILS_REQUEST to return only {loading:true}

admin 可以更改用户的姓名和邮箱 这个不合逻辑
可改进为：单独页面 创建 product 然后提交后端 然后可以修改这个界面

改进 Logout 改为全局刷新并且跳转到登录页面

deploy:
heroku git:remote -a e-shop-pty
