import { getFeaturedProducts, getProducts } from "@/lib/firestore/products/read_server";
import Header from "./components/Header";
import FeaturedProductSlider from "./components/Sliders";
import { getCollections } from "@/lib/firestore/collections/read_server";
import Collections from "./components/Collections,";
import Categories from "./components/Categories";
import { getCategories } from "@/lib/firestore/categories/read_server";
import ProductsGridView from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import Brands from "./components/Brands";
import { getBrands } from "@/lib/firestore/brands/read_server";
import Footer from "./components/Footer";
import ChatButton from "./components/Chat";


export default async function Home() {
  const featuredProducts = await getFeaturedProducts()
  const collections = await getCollections()
  const categories = await getCategories()
  const products = await getProducts()
  const brands = await getBrands()

  return(
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">  
      <Header />
        <FeaturedProductSlider featuredProducts = {featuredProducts}/>
        <Collections collections = {collections}/>
        <Categories categories={categories}/>
        <ProductsGridView products={products} />
        <CustomerReviews></CustomerReviews>
        <Brands brands= {brands}></Brands>
        <ChatButton/>
        <Footer/>

    </main>
  );
}
