import React, { useEffect, useState } from "react";

function Web() {
  const [MyData, setMyData] = useState([]);

  useEffect(() => {
    const movie = async () => {
      const URL = "https://omdbapi.com/?s=series&apikey=1c62cc48";
      const responce = await fetch(URL);
      const finData = await responce.json();
      console.log(finData.Search);
      setMyData(finData.Search);
    };

    movie();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold font-serif text-center p-4 uppercase">
        Top Web Series
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {MyData.map((Val) => {
          return (
            <div
              key={Val.Title}
              className="card bg-transparent border w-96 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img src={Val.Poster} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{Val.Title}</h2>
                <p>{Val.Year}</p>
                <div className="card-actions">
                  <button className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="">
          <div className="card bg-transparent border w-96  md:h-[112vh] shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg"
                alt="img"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Money Heist</h2>
              <p>2017</p>
              <div className="card-actions">
                <button className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-transparent border w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5"
              alt="img"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Game of Thronesx</h2>
            <p>2019</p>
            <div className="card-actions">
              <button className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Web;
