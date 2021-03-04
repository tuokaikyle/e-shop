sb-zrk5w3529122@personal.example.com
n!k_u7TV

sb-bpvgg3518556@business.example.com
EF7|2b?c

AYWy5iIQZ9rG4qAZG-8GskcpSp8FGmcdITNnEaXJZaFZ5XUmv7xMoRK9h7pjIdvb5D5Q6nTYNHkHev5Z

——————————————————————————————————————————————————————————————————————————————————

问题：

const middleware = [thunk];
composeWithDevTools(applyMiddleware(...middleware))
...是什么意思？
{...x, abc:d}意思是 将 x 内所有内容抄一遍，然后更改 abc 的值为 d

const {
userLogin: { userInfo },
} = getState()

export const createProductReview = (productId, review) => async (
dispatch,
getState
)
因为要使用 thunk，所以这么写一个 async.
后面的 getState 是因为要使用 localstorage

为什么有的在 useEffect 里面，有的不在？可能答案：在里面的，到页面的运行。不在的，到这个页面不运行。
reducer 里面的 reset0

————————————————————————————————————————————————————————————————————————————————————————————————

改进
insta：使用 async await

---

proshop：
未购买过该商品的用户不应该能够评价该商品
使用 materialize，useReducer
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

会出现两个错误：
Error: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
登录不上去
secretOrPrivateKey must have a value

商品的图片存在 public 里面？？那新创建的商品 图片存哪里呢？
reset password
————————————————————————————————————————————————————————————————————————————————————————————

搭建顺序：
server
mongoose
app.js

homescreen
productscreen
cartScreen

deploy:
heroku git:remote -a e-shop-pty
