import SearchProductsStyle from '@/styles/search-style.module.css'
import LineDivideStyle from '@/styles/search-style.module.css'
import ProductsItemStyle from '@/styles/search-style.module.css'
import ContainerStyle from '@/styles/search-style.module.css'

export default function SearchProductsTable() {

    return (
        <div className={ContainerStyle['container']}>
            <div className={SearchProductsStyle['search__products--table']}>
                <div className={ProductsItemStyle['product__item']}>
                    <span>Suggestions</span>
                    <hr className={LineDivideStyle['line-divide']} />

                </div>

                <div className={ProductsItemStyle['product__item']}>
                    <span>Products</span>
                    <hr className={LineDivideStyle['line-divide']} />

                </div>
            </div>
        </div>
    )
}