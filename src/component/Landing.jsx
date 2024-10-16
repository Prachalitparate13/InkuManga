import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import MangaCard from "./MangaCard";

function Landing() {
  const [searchValue, setSearchValue] = useState("");
  const [mangaData, setMangaData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const MNAGA_URL = "https://api.jikan.moe/v4/manga";
  async function handleSearch() {
    try {
      await fetch(MNAGA_URL + "?q=" + searchValue +'sfw=true')
        .then((r) => r.json())
        .then((res) => {
          setMangaData(res);
          setShowModal(true);
        });
    } catch (e) {
      setShowModal(false);
      console.error(e.message);
    }
  }
  return (
    <div className="mt-16 h-[100%] dark:bg-gray-800">
      <h1 className="pt-14 text-center text-4xl text-orange-400">
        INUKU-MANGA
      </h1>
      <h3 className="pb-14 text-center text-lg dark:text-white">
        Discover Manga Tailored to Your Interests
      </h3>
      <h3 className="sm:w-94 px-8 pb-24 text-center text-lg dark:text-white sm:px-48">
        Welcome to <span className="text-orange-500">INUKU-MANGA</span>, your
        ultimate destination for finding manga that speaks to you. Whether
        you're a seasoned manga reader or a newcomer, our platform curates a
        personalized collection based on your unique tastes and interests.
      </h3>
      <div className="mx-auto flex max-w-96 gap-2 pb-14">
        <input
          className="rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] dark:text-white dark:placeholder:text-neutral-200 sm:w-full"
          placeholder="Search Manga"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value !== null || e.target.value !== undefined) {
              setSearchValue(e.target.value);
            } else {
              setMangaData("");
              setShowModal(false);
            }
          }}
        />
        <button
          className="text-xl dark:text-white"
          onClick={() => {
            handleSearch();
          }}
        >
          <IoSearch />
        </button>
      </div>
      <div className="mx-auto flex sm:max-w-[84px] max-w-full gap-2 pb-14">
        <a href="/manga">
          <button className="rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] dark:text-white">Popular</button>
        </a>
      </div>

      {showModal && <MangaCard mangaData={mangaData.data} />}
    </div>
  );
}

export default Landing;
