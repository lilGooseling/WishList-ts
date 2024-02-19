export enum PageTypeEnum {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum BackgroundImageEnum {
    CONTAIN,
    COVER,
    REPEAT
}

export enum ImageStyleEnum {
    TOP_RIGHT,
    TOP_LEFT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT
}

export enum BackgroundEffectEnum {
    PARALLAX
}


export enum SectionTemplateEnum {
    SOLOSLIDER,
    DUOSLIDER,
    MULTISLIDER,
    GRID_MATERIAL,
    GRID_SHADOW,
    GRID_STICKER,
    GRID_GRADIENT
}

export enum TypeOfFontsEnum {
    CAVEAT = 'Caveat',
    PHILOSOPHER = 'Philosopher'
}


export interface IData {
    title: string,
    description: string,
    textColor?: string,
    font?: TypeOfFontsEnum,
    pages: IPage[]
}


export interface IPage {
    title: string,
    type?: PageTypeEnum,
    description: string,
    url: string,
    fullScreen?: boolean,
    backgroundColor?: string,
    backgroundImage?: string,
    backgroundEffect?: BackgroundEffectEnum,
    font?: TypeOfFontsEnum,
    textColor?: string,
    titleTextColor?: string,
    descriptionTextColor?: string,
    menuTextColor?: string,
    menuActiveTextColor?: string,
    imageTemplate?: BackgroundImageEnum,
    sections: ISection[]

}


export interface ISection {
    title: string,
    description: string,
    template: SectionTemplateEnum,
    imageTemplate?: BackgroundImageEnum,
    backgroundEffect?: BackgroundEffectEnum,
    textColor?: string,
    buttonColor?:string;
    buttonBackgroundColor?:string,
    font?: TypeOfFontsEnum,
    cards: ICard[],
    fullScreen?: boolean,
    backgroundColor?: string,
    backgroundImage?: string
}

export interface ICard {
    title: string,
    description: string,
    textColor?: string,
    url: string,
    img: string,
    font?: TypeOfFontsEnum,
}
