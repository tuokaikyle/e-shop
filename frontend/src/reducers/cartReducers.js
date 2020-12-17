import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_RESET,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    // 两种渠道触发：
    // product页面添加购物车
    // 购物车内修改数量
    case CART_ADD_ITEM:
      const item = action.payload
      // 购物车内是否已经存在该商品
      // find后面的意思是 对于state.cartItems进行遍历
      // 如果每一个.product 是(id) === 目前该商品的id,
      const existItem = state.cartItems.find((x) => x.product === item.product)
      // 如果存在，则所有状态汇中，cartItems的内容不变 就可以了吧 为什么这么写？
      // 改写了 如果新加入购物车 那么数量自动加一
      // 出错。手动更改数量时，也加了一。
      // 回答第一行：这种情况下 if block里面return state的话 数量选择器失效
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            // {...x, abc:d}意思是 将x内所有内容抄一遍，然后更改abc的值为d
            x.product === existItem.product ? item : x
          ),
        }
        // 如果不存在，那么state - cartItems中的cartItems中新增一条 item
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        // 把带有这个id的商品除去
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    // 给state增添地址
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        // 在这一步之前，state里面只有两个东西 第一个是items，
        // 也就是说，此时，只是给state obj append一个内容
        // 语法如下
        ...state,
        shippingAddress: action.payload,
      }
    // 给state增添付款方式
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    case CART_RESET:
      return { ...state, cartItems: [], shippingAddress: state.shippingAddress }
    default:
      return state
  }
}
