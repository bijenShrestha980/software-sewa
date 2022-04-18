import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div
      className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
      data-wow-delay=".3s"
    >
      <div className="p-12 bg-white shadow rounded">
        <Image
          width={500}
          height={500}
          objectFit="contain"
          className="h-56 mx-auto my-4"
          src={item.img[0]}
          alt="NTTS"
        />
        <span className="cursor-pointer">
          <Link href={`/product/${item._id}`}>
            <h3 className="mb-2 font-bold font-heading text-xl hover:text-blue-500">
              {item.title}
            </h3>
          </Link>
        </span>

        <p className="text-sm text-blueGray-400 leading-relaxed">
          {item.desc.join(" ")}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
