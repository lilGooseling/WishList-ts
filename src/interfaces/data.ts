export enum PageTypeEnum {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum BackgroundImageEnum {
    CONTAIN,
    COVER
}


export enum SectionTemplateEnum {
    SOLOSLIDER,
    DUOSLIDER,
    MULTISLIDER,
    PARALLAX,
    GRID_MATERIAL,
    GRID_SHADOW,
    GRID_STICKER,
    GRID_GRADIENT
}

export interface IData {
    title: string,
    description: string,
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
    sections: ISection[]

}

export interface ISection {
    title: string,
    description: string,
    template: SectionTemplateEnum,
    cards: ICard[],
    fullScreen?: boolean,
    backgroundColor?: string,
    backgroundImage?: string
}

export interface ICard {
    title: string,
    description: string,
    url: string,
    img: string
}