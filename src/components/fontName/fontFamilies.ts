import {TypeOfFontsEnum} from "../../interfaces/data";

export const fontFamilies = (typeOfFont: TypeOfFontsEnum):string =>{
    switch (typeOfFont){
        case TypeOfFontsEnum.CAVEAT:
            return 'Caveat'
        case TypeOfFontsEnum.PHILOSOPHER:
            return 'Philosopher'
        default:
            return 'Arial'
    }
}