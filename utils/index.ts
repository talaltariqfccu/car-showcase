import { CarApiProps } from "@/app/types";

export async function fetchCars(){

    const headers= {
        'X-RapidAPI-Key': 'c0be5ef07fmshcec8cb387e86915p1aef75jsn968b18b2f6da',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=civic&limit=1',
        {headers: headers}
    );
    

    const result = response.json();
    return result;
      
};

export async function generateCarImageUrl(car: CarApiProps, angle?: string){
       
};
