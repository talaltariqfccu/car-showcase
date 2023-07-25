import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyle?: string;
    btnType?: "button"|"submit";
    handleClick ?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

export interface SearchManufacturerProps{
    manufacturer: string,
    setManufacturer: (manufacturer:string)=>void;
}

export interface CarApiProps{
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}