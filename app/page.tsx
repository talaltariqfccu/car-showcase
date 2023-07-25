import Image from "next/image";
import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { CarApiProps } from "./types";
import { fetchCars } from "@/utils";


export default async function page() {
  const carData:CarApiProps[] = await fetchCars();
  let isEmpty: boolean;

  if (carData.length < 1) isEmpty = true;
  else isEmpty = false;

  return (
    <main>
      <Hero />;
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">{}</div>
        </div>
        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper"> 
            {
              carData.map((car)=><CarCard car={car}/>)
            }
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1 font-bold"></h2>
          </div>
        )}
      </div>
    </main>
  );
}
