
import { useState } from "react";
function News() {

    const MANGA_NEWS='https://api.jikan.moe/v4/manga/{id}/news'
    const [manga, setManga] = useState(null);

    async function mangaNews(id) {
        await fetch(MANGA_NEWS + id)
          .then((r) => r.json())
          .then((res) => {
            setManga(res.data);
          });
        // console.log(manga);
      }
  return (
    <div>
      
    </div>
  )
}

export default News
