import Link from "next/link";

const CategoryCard = ({ title, desc, img, categories }) => {
  return (
    <div className="swiper custom-class">
      <div className="swiper-wrapper">
        <div
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="2"
        >
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <img className="rounded-xl" src={img} alt="NTTS" />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href={`/cat/${categories}`}>{title}</Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">{desc}</p>
                </div>
                <div>
                  <span className="tracking-wide text-center hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">
                    <Link href={`/cat/${categories}`}>View Details</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
