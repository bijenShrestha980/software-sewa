const SalesChart = () => {
  return (
    <div className="col-span-12 lg:col-span-6 mt-8">
      <div className="intro-y block sm:flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Sales Report</h2>
        <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
          <i
            data-lucide="calendar"
            className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
          ></i>
          <input
            type="text"
            className="datepicker form-control sm:w-56 box pl-10"
          />
        </div>
      </div>
      <div className="intro-y box p-5 mt-12 sm:mt-5">
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="flex">
            <div>
              <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                $15,000
              </div>
              <div className="mt-0.5 text-slate-500">This Month</div>
            </div>
            <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
            <div>
              <div className="text-slate-500 text-lg xl:text-xl font-medium">
                $10,000
              </div>
              <div className="mt-0.5 text-slate-500">Last Month</div>
            </div>
          </div>
          <div className="dropdown xl:ml-auto mt-5 xl:mt-0">
            <button
              className="dropdown-toggle btn btn-outline-secondary font-normal"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              Filter by Category{" "}
              <i data-lucide="chevron-down" className="w-4 h-4 ml-2"></i>
            </button>
            <div className="dropdown-menu w-40">
              <ul className="dropdown-content overflow-y-auto h-32">
                <li>
                  <a href="#" className="dropdown-item">
                    PC & Laptop
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Smartphone
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Electronic
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Sport
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="report-chart">
          <canvas id="report-line-chart" height="169" className="mt-6"></canvas>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
