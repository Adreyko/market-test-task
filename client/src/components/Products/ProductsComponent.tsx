import Filters from '../Filter/Filters'
import Goods from '../Goods/Goods'
import cls from './Products.module.scss'
const ProductsComponent = () => {
  return (
    <div className={cls.products}>
      <Filters/>
      <Goods/>
    </div>
  )
}

export default ProductsComponent