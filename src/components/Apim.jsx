import React, { useEffect, useState } from "react";

function Apim() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const movie = async () => {
      const URL = "https://omdbapi.com/?s=batman&apikey=1c62cc48";
      const responce = await fetch(URL);
      const finData = await responce.json();
      console.log(finData.Search);
      setData(finData.Search);
    };

    movie();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold font-serif text-center p-4 uppercase">
        Top Movies
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {data.map((Elem) => {
          return (
            <div
              key={Elem.Title}
              className="card bg-transparent border w-96 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img src={Elem.Poster} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{Elem.Title}</h2>
                <p>{Elem.Year}</p>
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
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTd88eLOMWD6stxhHtbbdv-nWLTu31n1WaVBzInjj_9KQ-d5pKF"
                alt="Shoes"
                className="rounded-xl"
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
        <div className="card bg-transparent border w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUw076GR7JpnfExoBLTMpiE9otUzk518SylUdC1roF6Ah63NS9"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interstellar</h2>
            <p>2014</p>
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

export default Apim;
