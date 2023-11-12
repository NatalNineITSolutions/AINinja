import axios from "axios";
import Search from "@/Components/Icons/Search";
import TablePageSize from "@/Components/Table/TablePageSize";
import debounce from "@/utils/debounce";

const TableNav = (props) => {
   const {
      data,
      title,
      component,
      globalSearch,
      tablePageSizes,
      setSearchData,
      searchPath,
   } = props;

   const searchHandler = debounce(async (e) => {
      const query = e.target.value;
      const res = await axios.get(
         `${searchPath}?page=1&per_page=10&value=${query}`
      );
      setSearchData(res.data);
   }, 300);

   return (
      <div className="p-7 md:flex items-center justify-between">
         {title && (
            <p className="mb-4 md:mb-0 text18 font-bold text-gray-900">
               {title}
            </p>
         )}
         <div className="flex justify-end items-center">
            {globalSearch && (
               <div className="w-full md:max-w-[260px] relative">
                  <input
                     type="text"
                     placeholder="Search"
                     onChange={searchHandler}
                     className="h-10 pl-12 pr-4 py-[15px] border border-gray-200 rounded-md w-full focus:ring-0 focus:outline-0 focus:border-primary-500 text-sm font-normal text-gray-500"
                  />
                  <Search className="absolute w-4 h-4 top-3 left-4 text-gray-700 z-10" />
               </div>
            )}

            <TablePageSize
               pageData={data}
               dropdownList={tablePageSizes}
               className="ml-3"
            />

            {component && component}
         </div>
      </div>
   );
};

export default TableNav;
