export interface IData {
    title: string,
    description: string,
    pages: IPage[]
}

export interface IPage {
    title: string,
    description: string,
    url: string,
    sections: ISection[]
}

export interface ISection {
    title: string,
    description: string,
    cards: ICard[]
}

export interface ICard {
    title: string,
    description: string,
    url: string,
    img: string
}