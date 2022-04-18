import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductHeroBanner from "../../components/ProductHeroBanner";
import { publicRequest } from "../../requestMethods";
import Loading from "../../components/Loading";

const product = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/products/find/" + pid);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [setProduct, pid]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <section>
          <ProductHeroBanner product={product} />
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl mb-2">
                <strong>Description:</strong>
              </h1>
              <p
                className="mb-6 leading-loose text-blueGray-400 wow animate__ animate__fadeIn  animated animated"
                data-wow-delay=".1s"
                style={{ visibility: "visible", animationDelay: "0.1s" }}
              >
                {product.desc}
              </p>
              <div className="mb-6">
                <h1 className="text-2xl mb-2">
                  <strong>Features:</strong>
                </h1>
                <ul>
                  {product.feature &&
                    product.feature?.map((item, _id) => (
                      <li className="flex items-center py-2" key={_id}>
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <p className="pl-5 md:max-w-md lg:max-w-lg">{item}</p>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mb-6">
                <h1 className="text-2xl mb-2">
                  <strong>Contact Details:</strong>
                </h1>
                <ul>
                  <li className="flex items-center py-2">
                    <b>Contact us for more details</b>
                  </li>
                  <li className="flex items-center py-2">
                    E-Mail: itnttsnepal@gmail.com
                  </li>
                  <li className="flex items-center py-2">
                    Viber: (+977) 9801881003
                  </li>
                </ul>
              </div>
            </div>

            <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center mt-12">
              <a
                className="px-4 py-2 mt-2 text-white transition-colors duration-200 transform border border-blue-500 rounded-lg bg-blue-500 dark:text-gray-200 dark:border-gray-200 hover:bg-blue-700 dark:hover:bg-blue-700 focus:outline-none"
                href="../pricing/webPricing.html"
              >
                Price
              </a>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default product;
