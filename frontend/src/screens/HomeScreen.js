import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

// 了解
// 以下逻辑是 首先 获取state 然后获得state-类别-数据
// 首次render时候，loading是undefined, products为空，因为products有初始值[]
// 然后，根据action中的第一个dispatch，reducer return了一个{loading:true}
// action中接下来的任务是发出axios请求。
// 后端访问路径：server - route - controller
// 后端返回数据后，action中destructure出data, 装入payload
// 再然后，根据action中第二个dispatch type, reducer 给出{products: 列表}
// 这里的列表，通过action.payload.products拿到。因为，后端controller给出了一个叫products的列表
// action destructure出来的data实际上是包含三个obj的大obj
// 在return 中，products 遍历以下，将每个元素作为Props传给product组件。
// 在组件中，把商品的属性点出来
const HomeScreen = ({ match }) => {
  // match是url的后缀
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  // 这些内容可以是undefined
  // console.log(loading, error, products, page, pages)

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      {/* <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )} */}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
