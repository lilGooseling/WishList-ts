import {IData, PageTypeEnum, SectionTemplateEnum} from "./interfaces/data";

export const globalData: IData= {
    title: 'WishList',
    description: 'structure your wishes',
    pages:[
        {
            title: 'Beauty&Wellness',
            type: PageTypeEnum.LEFT,
            description: '',
            url: 'beauty',
            sections: [{
                title: 'Косметика',
                description: '',
                template: SectionTemplateEnum.SOLOSLIDER,
                cards: [
                    {
                    title: 'GUCCI the alchemist\'s garden moonlight serenade',
                    description: 'Gucci открывает новую страницу в истории ароматов Дома, полную волшебства и таинства, воплощенных в новой коллекции The Alchemist’s Garden.\n' +
                        'Вдохновленный алхимией Алессандро Микеле переосмысливает идею получения золота из различных металлов. Он превращает алхимию в искусство получения ароматов и создает семь композиций парфюмерной воды, четыре вида парфюмерных масел, три композиции душистой воды и ароматическую свечу.',
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
                    description: 'Масло нероли — одно из названий эссенции цветков апельсина. Неповторимое качество этого ингредиента объясняется его солнечным цветочным характером и невероятно теплой чувственной основой. Его идеально дополняют ноты розы, мускуса, жасмина, ванили, слегка альдегидные оттенки мандарина и другие эссенции, которые придают Neroli 36 остроту, непринужденность, пикантность и чувственность. Роскошь, элегантность и очарование в одном маленьком флаконе!',
                    img: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdoaXRlJTIwZmxvd2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    url:'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdoaXRlJTIwZmxvd2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                    title: 'PENHALIGON\'S LUNA',
                    description: 'Luna ― это новый свежий цветочный аромат от Penhaligon\'s, женский аналог древесно-кожаных нот Endymion Concentré. Вдохновленный блистательным светом полумесяца, который освещает сны, этот роскошный аромат передаёт опьяняющий образ мистической Богини Луны. Гипнотический и чувственный, Luna отражается в темной воде, освещая ночное небо. Раскрываясь горьковатой свежестью померанца, сердце композиции оборачивается хрупкой легкостью можжевеловых ягод, и всё это в окружении чувственной и темной древесной базы.',
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