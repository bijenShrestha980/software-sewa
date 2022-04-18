// import { createPopper } from "@popperjs/core";
// import { createRef, useState } from "react";
const RoundImage = () => {
  // const [popoverShow, setPopoverShow] = useState(false);
  // const btnRef = createRef();
  // const popoverRef = createRef();
  // const openTooltip = () => {
  //   createPopper(btnRef.current, popoverRef.current, {
  //     placement: "right",
  //   });
  //   setPopoverShow(true);
  // };
  // const closeTooltip = () => {
  //   setPopoverShow(false);
  // };
  return (
    <div className="w-10 h-10 image-fit zoom-in relative">
      <img
        alt=""
        className="rounded-full"
        src="/images/preview-7.jpg"
        title=""
        // onMouseEnter={openTooltip}
        // onMouseLeave={closeTooltip}
        // ref={btnRef}
      />
      {/* <div
        className={
          (popoverShow ? "" : "hidden ") +
          "bg-blue-600 border-0 mr-3 block z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline rounded-lg"
        }
        ref={popoverRef}
      >
        <div className="text-white p-3">Uploaded at 8 November 2022</div>
      </div> */}
    </div>
  );
};

export default RoundImage;
