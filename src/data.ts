import {BackgroundEffectEnum, BackgroundImageEnum, IData, PageTypeEnum, SectionTemplateEnum} from "./interfaces/data";

export const globalData: IData= {
    title: 'WishList',
    description: 'structure your wishes',
    pages:[
        {
            title: 'Beauty&Wellness',
            type: PageTypeEnum.LEFT,
            description: '',
            url: 'beauty',
            backgroundColor: '#f5ebe6',
            backgroundEffect: BackgroundEffectEnum.PARALLAX,
            backgroundImage: 'https://images.unsplash.com/photo-1615801627253-eae9c5be334e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU1fHxiZWF1dGlmdWwlMjBwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            sections: [{
                title: 'Fragrance',
                description: 'Love it',
                template: SectionTemplateEnum.GRID_GRADIENT,
                imageTemplate: BackgroundImageEnum.COVER,
                backgroundEffect: BackgroundEffectEnum.PARALLAX,
                cards: [
                    {
                    title: 'GUCCI moonlight serenade',
                    description: 'Gucci открывает новую страницу в истории ароматов Дома, полную волшебства и таинства, воплощенных в новой коллекции The Alchemist’s Garden.\n' +
                        'Вдохновленный алхимией Алессандро Микеле превращает в искусство получения ароматов и создает семь композиций парфюмерной воды.',
                    img: 'https://images.unsplash.com/photo-1532152562158-bb5400e012f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg0fHxyb3NlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    url:'https://images.unsplash.com/photo-1532152562158-bb5400e012f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg0fHxyb3NlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                },
                    {
                    title: 'BYREDO young rose',
                    description: 'Прочтение традиции глазами нового поколения. Young Rose представляет собой оду вечной бурной молодости: ольфакторный дневник тех, кто сам пишет свое будущее. База из дамасской розы в огранке нот огненного сычуаньского перца - этот аромат бросает вызов условностям, представляя свежий взгляд на классический образ романтики.',
                    img: 'https://images.unsplash.com/photo-1602958658949-f84cb01b2726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxmbG93ZXJzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    url:'https://images.unsplash.com/photo-1602958658949-f84cb01b2726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxmbG93ZXJzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                    {
                    title: 'LE LABO neroli 36',
                    description: 'Масло нероли — одно из названий эссенции цветков апельсина. Неповторимое качество этого ингредиента объясняется его солнечным цветочным характером и невероятно теплой основой. Его идеально дополняют ноты розы, жасмина, ванили, оттенки мандарина и другие эссенции, которые придают непринужденность и очарование!',
                    img: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdoaXRlJTIwZmxvd2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    url:'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdoaXRlJTIwZmxvd2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    title: 'PENHALIGON\'S LUNA',
                    description: 'Luna ― это новый свежий цветочный аромат от Penhaligon\'s, Вдохновленный блистательным светом полумесяца, аромат передаёт образ мистической Богини Луны. Раскрываясь горьковатой свежестью померанца, сердце композиции оборачивается хрупкой легкостью можжевеловых ягод, и всё это в окружении темной древесной базы.',
                    img: 'https://images.unsplash.com/photo-1518105570919-e342af1a8275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGZsb3dlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    url:'https://images.unsplash.com/photo-1518105570919-e342af1a8275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGZsb3dlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                },

                ]
            }]
        },
        {
            title: 'Hobby',
            description: '',
            url: 'hobby',
            sections: []
        },
        {
            title: 'Home',
            description: '',
            url: 'home',
            sections: []
        }

    ]
}