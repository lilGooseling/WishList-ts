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
    imageTemplate?: BackgroundImageEnum,
    sections: ISection[]

}

export interface ISection {
    title: string,
    description: string,
    template: SectionTemplateEnum,
    imageTemplate?: BackgroundImageEnum,
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

export type ICard2 = {
    title: string,
    description: string,
    url: string,
    img: string
}