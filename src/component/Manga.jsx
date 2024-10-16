import { useEffect, useState } from "react";
import MangaCard from "./MangaCard";
// import { getManga } from "../api/mangaapi";
const MNAGA_URL = "https://api.jikan.moe/v4/manga?limit=25&sfw=true";

export default function Manga() {
  const [mangaData, setMangaData] = useState(null);
  

  async function getMangaDetails(page) {
    await fetch(MNAGA_URL + "&page=" + page)
      .then((r) => r.json())
      .then((res) => {
        setMangaData(res);
        // console.log(res);
      });
    // console.log(page);
  }

  useEffect(() => {
    getMangaDetails(1);
  }, []);
  return (
    <div className="dark:bg-gray-900">
      <MangaCard mangaData={mangaData?.data} />
      {mangaData && (
        <div className="mt-7 flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {mangaData.pagination.current_page}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {mangaData.pagination.last_visible_page}
            </span>{" "}
            Pages
          </span>
          <div className="xs:mt-0 mt-2 inline-flex">
            <button
              className={`flex h-8 items-center justify-center rounded-s px-3 text-sm font-medium text-white  bg-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:text-white ${mangaData.pagination.current_page===1?"cursor-not-allowed":" hover:bg-orange-400  dark:hover:bg-orange-400 "} `}
              onClick={() => {
                getMangaDetails(mangaData.pagination.current_page-1)
              }}
              disabled={mangaData.pagination.current_page==1?true : false}
            >
               {/* ${mangaData.pagination.current_page===1?"cursor-not-allowed":""} */}
              Prev
            </button>
            <button className={`flex h-8 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-600 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white-400 dark:hover:bg-gray-700 dark:hover:text-white ${mangaData.pagination.has_next_page==false?"cursor-not-allowed":" hover:bg-orange-400  dark:hover:bg-orange-400 "}`}
             disabled={mangaData.pagination.has_next_page==false?true:false}
             onClick={() => {
              getMangaDetails(mangaData.pagination.current_page+1)
            }}
            >
              Next
            </button>
           
          </div>
        </div>
      )}
    </div>
  );
}
