// Icons
import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
      <nav className="w-full sm:w-auto sm:mr-auto">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <BiChevronsLeft className="w-4 h-4" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <BiChevronLeft className="w-4 h-4" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <BiChevronRight className="w-4 h-4" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <BiChevronsRight className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
