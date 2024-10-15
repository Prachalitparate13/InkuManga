/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoRibbonSharp } from "react-icons/io5";

const MANGA_BY_ID = "https://api.jikan.moe/v4/manga/";
const MANGA_RE = "https://api.jikan.moe/v4/manga/";

function MangaCard(props) {
  const { mangaData } = props;
  const [showModal, setShowModal] = useState(false);
  const [manga, setManga] = useState(null);
  const [recomend, setRecomend] = useState(null);
  const [showRecModal, setShowRecModal] = useState(false);
  

  async function modalChange(id) {
    await fetch(MANGA_BY_ID + id)
      .then((r) => r.json())
      .then((res) => {
        setManga(res.data);
      });
    // console.log(manga);
    setShowModal(true);
  }

  async function recomendation(id) {
    await fetch(MANGA_RE + id + "/recommendations")
      .then((r) => r.json())
      .then((res) => {
        setRecomend(res.data);
      });
    // console.log(recomend);
    setShowRecModal(true);
  }
  return (
    <div className="mx-4 mt-16 grid grid-cols-1 content-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {showRecModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 h-full w-auto max-w-4xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-gray-700 dark:text-white">
                <div className="r flex items-center justify-between rounded-t border-b border-solid border-gray-300 p-5">
                  <p className="text-3xl  dark:text-white">Recomendation</p>
                  <button
                    className="float-right border-0 bg-transparent text-black dark:text-white"
                    onClick={() => setShowRecModal(false)}
                  >
                    <span className="opacity-7 block h-6 w-6 rounded-full p-1 text-2xl text-black hover:text-orange-400 dark:text-white dark:hover:text-orange-400">
                      {/* <IoSunny className="text-yellow-400"/>
                       */}
                      <IoClose />
                    </span>
                  </button>
                </div>
                <div className="mx-4 mt-4 grid grid-cols-1 content-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {recomend &&
                    recomend.map((r, index) => {
                      return (
                        <div
                          key={index}
                          className="mx-2 my-4 max-w-sm overflow-hidden text-clip rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
                        >
                          <img src={r.entry.images.jpg.image_url} className="h-60" />
                          <div className="flex justify-between">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:text-orange-400 dark:text-white dark:hover:text-orange-400">
                              {r.entry.title}
                            </h5>
                            <div className="group"></div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="border-blueGray-200 flex items-center justify-end gap-4 rounded-b border-t border-solid p-6">
                <button
                    className="float-right border-0 bg-transparent text-black dark:text-white"
                    onClick={() => setShowRecModal(false)}
                  >
                    <span className="opacity-7 block h-6 w-6 rounded-full p-1 text-2xl text-black dark:text-white">
                      {/* <IoSunny className="text-yellow-400"/>
                       */}
                      <IoClose />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {showModal ? (
        //   <div>
        //   <p>{manga.title}</p>
        //   <img src={manga.images?.jpg?.image_url} className="h-80" />
        // </div>
        <>
          <div className="overflow-y-ato fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 h-full w-auto max-w-4xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-gray-700 dark:text-white">
                <div className="r flex items-center justify-between rounded-t border-b border-solid border-gray-300 p-5">
                  <h3 className="font=semibold px-48 text-4xl">
                    {manga.title}{" "}
                  </h3>
                  <button
                    className="float-right border-0 bg-transparent text-black dark:text-white"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 block h-6 w-6 rounded-full p-1 text-2xl text-black dark:text-white">
                      {/* <IoSunny className="text-yellow-400"/>
                       */}
                      <IoClose />
                    </span>
                  </button>
                </div>

                <div className="border-blueGray-200 flex items-center justify-end gap-4 rounded-b border-t border-solid p-6">
                  <img src={manga.images?.jpg?.large_image_url} />
                  <div>
                    <h2 className="text-center text-lg">
                      {manga.title_english} &nbsp;&nbsp; &nbsp;{" "}
                      {manga.title_japanese} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      &nbsp;
                    </h2>
                    <h4 className="text-center">
                      Rating: {manga.score}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Rank:{" "}
                      {manga.rank}
                    </h4>
                    <br />
                    <h2>{manga.synopsis}</h2>
                    <p>
                      chap.{" "}
                      {manga.chapters === null ? manga.status : manga.chapters}{" "}
                      &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; status:{" "}
                      {manga.status}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {mangaData &&
        mangaData.map((d, index) => {
          return (
            <div
              key={index}
              className="mx-2 my-4 max-w-sm overflow-hidden text-clip rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="group flex items-center mx-4">
              <button
                type="button"
                onClick={() => {
                  modalChange(d.mal_id);
                }}
              >
                <img src={d.images?.jpg?.image_url} className="h-80" />
                <span className="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white dark:bg-white dark:text-black group-hover:scale-110">
                      More Details
                    </span>
              </button>
                </div>
              
              <div className="flex justify-between">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:text-orange-400 dark:text-white dark:hover:text-orange-400">
                  {d.title}
                </h5>
                <div className="group">
                  <button
                    type="button"
                    onClick={() => recomendation(d.mal_id)}
                    className="text-gray-900 hover:text-orange-400 dark:text-white dark:hover:text-orange-400"
                  >
                    <IoRibbonSharp />
                    <span className="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                      Recomendation
                    </span>
                  </button>
                </div>
              </div>

              <div className="h-24 overflow-hidden">
                <h5 className="text-sm">{d.background}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MangaCard;
