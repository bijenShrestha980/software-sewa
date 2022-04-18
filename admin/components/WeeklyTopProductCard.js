import RoundImage from "./RoundImage";

// Icons
import { BiBlock, BiListCheck, BiTrash } from "react-icons/bi";

const WeeklyTopProductCard = () => {
  return (
    <tr className="intro-x">
      <td className="w-40">
        <div className="flex">
          <RoundImage />
        </div>
      </td>
      <td>
        <a href="#" className="font-medium whitespace-nowrap">
          Sony A7 III
        </a>
        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
          Photography
        </div>
      </td>
      <td className="text-center">84</td>
      <td className="w-40">
        <div className="flex items-center justify-center text-danger">
          <BiBlock className="w-4 h-4 mr-1" />
          Inactive
        </div>
      </td>
      <td className="table-report__action w-56">
        <div className="flex justify-center items-center">
          <a className="flex items-center mr-3" href="#">
            <BiListCheck className="w-4 h-4 mr-1" /> Edit
          </a>
          <a className="flex items-center text-danger" href="#">
            <BiTrash className="w-4 h-4 mr-1" /> Delete
          </a>
        </div>
      </td>
    </tr>
  );
};

export default WeeklyTopProductCard;
