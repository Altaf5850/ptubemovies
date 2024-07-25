import React, { useEffect, useState } from "react";

function SecondSection() {
  const [kidData, setKidData] = useState([]);

  useEffect(() => {
    const cartoon = async () => {
      const URL = "https://omdbapi.com/?s=cartoon&apikey=1c62cc48";
      const responce = await fetch(URL);
      const finData = await responce.json();
      console.log(finData.Search);
      setKidData(finData.Search);
    };

    cartoon();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold font-serif text-center p-4 uppercase">
        Top Cartoon for Kids
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {kidData.map((Kid) => {
          return (
            <div
              key={Kid.Title}
              className="card bg-gray-800 border w-80 h-96 shadow-xl"
            >
              <figure className="px-11 pt-11 ">
                <img
                  src={Kid.Poster}
                  alt="img"
                  className="rounded-2xl w-[100%] h-[105%]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{Kid.Title}</h2>
                <p>{Kid.Year}</p>
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
          <div className="card bg-gray-800 border w-80  md:h-[60vh] shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTd88eLOMWD6stxhHtbbdv-nWLTu31n1WaVBzInjj_9KQ-d5pKF"
                alt="image"
                className="rounded-xl w-[100%] h-[100%] object-center"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">The Boss Baby</h2>
              <p>2021</p>
              <div className="card-actions">
                <button className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card bg-gray-800 border w-80  md:h-[60vh] shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW7GtLIm5DnXUttW2nkL-_Qo61020kxqn2lg42n53DMl-8t_zLzXAf6BbzVGsuRh1ujg3KiLWPjp2XHdTsnhM51h2hqdIWrKykA.jpg?r=38d"
                alt="image"
                className="rounded-xl w-[100%] h-[100%]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Scooby-Doo!: Mystery Incorporated</h2>
              <p>2010</p>
              <div className="card-actions">
                <button className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
