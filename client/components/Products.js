import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import ProductCard from "./ProductCard";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const cat = router.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products=${categories}` : "/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat, setProducts]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat]);

  return (
    <div>
      {/* <!-- Our Products --> */}
      <section className="py-20 bg-blueGray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                <span>Our</span>
                <span className="text-blue-500">Products</span>
                <br />
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6 text-center">
            {cat
              ? filteredProducts.map((item) => (
                  <ProductCard titem={item} key={item._id} />
                ))
              : products
                  .slice(0, 6)
                  .map((item) => <ProductCard item={item} key={item._id} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
