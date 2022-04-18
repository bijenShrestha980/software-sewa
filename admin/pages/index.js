import Head from "next/head";
import Header from "../components/Header";
import InfoCardSmall from "../components/InfoCardSmall";
import NoteCard from "../components/NoteCard";
import Pagination from "../components/Pagination";
import SalesChart from "../components/SalesChart";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopBar";
import WeeklyTopProductCard from "../components/WeeklyTopProductCard";

// Icons
import { BiFile, BiRefresh } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <meta name="Admin" content="Admin Pannel" />
      </Head>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <TopNav />
          {/* Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* General Report */}
            <div className="col-span-12 2xl:col-span-9">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-8">
                  <div className="intro-y flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      General Report
                    </h2>
                    <a
                      href="#"
                      className="ml-auto flex items-center text-primary"
                    >
                      <BiRefresh className="w-4 h-4 mr-3" />
                      Reload Data
                    </a>
                  </div>
                  <div className="grid grid-cols-12 gap-6 mt-5">
                    <InfoCardSmall />
                  </div>
                </div>
              </div>
            </div>
            {/* End General Report */}
            {/* Sales Report */}
            <SalesChart />
            {/* End Sales Report */}
            {/* Weekly Top Product */}
            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Weekly Top Products
                </h2>
                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                  <button className="btn box flex items-center text-slate-600 dark:text-slate-300">
                    <BiFile className="hidden sm:block w-4 h-4 mr-2" />
                    Export to Excel
                  </button>
                  <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300">
                    <BiFile className="hidden sm:block w-4 h-4 mr-2" />
                    Export to PDF
                  </button>
                </div>
              </div>
              <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <table className="table table-report sm:mt-2">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">IMAGES</th>
                      <th className="whitespace-nowrap">PRODUCT NAME</th>
                      <th className="text-center whitespace-nowrap">STOCK</th>
                      <th className="text-center whitespace-nowrap">STATUS</th>
                      <th className="text-center whitespace-nowrap">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <WeeklyTopProductCard />
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>
            {/* End Weekly Top Product */}
            <NoteCard />
          </div>
        </div>
      </div>
    </div>
  );
}
