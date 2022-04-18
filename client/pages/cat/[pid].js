import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { publicRequest } from "../../requestMethods";
import Loading from "../../components/Loading";

const products = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(`/products?categories=${pid}`);
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [setProducts, pid]);

  return (
    <div>
      <Header />
      <Navigation path={pid} />
      <section className="py-20 bg-blueGray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3 -mb-6 text-center">
            {loading ? (
              <Loading />
            ) : (
              products
                .slice(0, 8)
                ?.map((item) => <ProductCard item={item} key={item._id} />)
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default products;
