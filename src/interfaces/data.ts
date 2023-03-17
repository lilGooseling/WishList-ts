export enum PageTypeEnum {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum SectionTemplateEnum {
    SLIDER,
    PARALLAX,
    GRID,
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
    sections: ISection[]
}

export interface ISection {
    title: string,
    description: string,
    template: SectionTemplateEnum,
    cards: ICard[]
}

export interface ICard {
    title: string,
    description: string,
    url: string,
    img: string
}