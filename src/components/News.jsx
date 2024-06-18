import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2381c3c9c7dc4daea5110196517dbab5"
        );
        console.log(response.data);
        setNews(response.data.articles);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <>
      <div className="tw-bg-slate-200 ">
        <h2 className="tw-text-center tw-font-bold  tw-text-3xl tw-sm:text-center ">
          Top Headingh
        </h2>
      </div>

      <div className=" tw-bg-slate-200">
        <div className=" container container tw-flex tw-justify-between tw-md:justify-center tw-flex-wrap tw-md:w-10 tw-md:max-xl:flex  ">
          {news.map((eve) => (
            <Cards
              title={eve.title}
              description={eve.description.slice(0, 92)}
              image={eve.urlToImage}
              url={eve.url}
            />
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default News;
