import Header from '@/app/shared/Header/Header'
import { Product } from '@/lib/ProductType'
import { getSpecificProduct } from '@/services/productService'
import ProductDetails from './_components/ProductDetails'

export default async function page({
    params
}:{
    params:Promise<{
        slug:string
    }>
}) {
    const param = await params
    const slug=param.slug
    const {product}=await getSpecificProduct(slug)
  return (
    <section>
        <Header h2='Product Details Page' currentRoute={`/products:${slug}`} page='Product Details Page'/>
       <ProductDetails product={product}/>
    </section>
  )
}
