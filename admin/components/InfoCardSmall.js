// Icons
import { BiCart, BiChevronUp } from "react-icons/bi";

const InfoCardSmall = () => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div className="report-box zoom-in">
        <div className="box p-5">
          <div className="flex">
            <BiCart className="report-box__icon text-primary" />
            <div className="ml-auto">
              <div
                className="report-box__indicator bg-success tooltip cursor-pointer"
                title="33% Higher than last month"
              >
                33% <BiChevronUp className="w-4 h-4 ml-0.5" />
              </div>
            </div>
          </div>
          <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
          <div className="text-base text-slate-500 mt-1">Item Sales</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardSmall;
