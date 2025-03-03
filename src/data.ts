import {
    BackgroundEffectEnum,
    BackgroundImageEnum,
    IData,
    PageTypeEnum,
    SectionTemplateEnum,
    TypeOfFontsEnum
} from "./interfaces/data";

export const globalData: IData = {
    title: 'WANTED',
    description: 'by Dae Dzugo',
    pages: [
        {
            title: 'Star Wars',
            menuActiveTextColor:'#52c1d6',
            titleTextColor:'rgb(243,241,241)',
            type: PageTypeEnum.LEFT,
            description: 'Звёдные Войны Легион. У меня большое количество позиций в коллекции, но есть далеко не все. Я не собираю полную коллекцию, но этличная игра и прекрасные миниатюры для раскрашивания. ВНИМАНИЕ: Ссылки на ВК группу с привозом из-за границы - там нет смысла заказывать, идут по году.',
            url: 'legion',
            textColor: 'rgb(248,243,243)',
            backgroundColor: 'rgb(232,224,224)',
            descriptionTextColor:'rgb(244,241,241)',
            menuTextColor: 'rgb(93,177,36)',
            backgroundEffect: BackgroundEffectEnum.PARALLAX,
            backgroundImage: 'https://cdn.openart.ai/stable_diffusion/95f4f47ee4c4b8f4a319d007a15df39844ec025c_2000x2000.webp',
            sections: [
                {
                    title: 'Топчик SW Legion',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Те позиции, что я ищу',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(51,45,45)',
                    buttonColor: 'rgba(189,12,12,0.8)',
                    cards: [

                        {
                            title: 'Star Wars: Legion - Bad Batch Operative Expansion',
                            description: 'Бракованная партия в полном составе',
                            img: 'https://sun9-34.userapi.com/s/v1/ig2/SaUGEbY-_1vqqqUeY7aVgT-_Z1sI4RYiznT7KTlgEM1zu2zSdMqWXnkuYRy41rDyPEggOuua1IrdKUP9hIfEOWWN.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&from=bu&u=L3VjPx_vS-LsHVzR726JVJKzjDKtKBC2wRl8Gqc1_eY&cs=510x510',
                            url: 'https://vk.com/market/product/star-wars-legion-bad-batch-operative-expansion-131012375-9427648'
                        },
                        {
                            title: 'Star Wars: Legion - Range Troopers',
                            description: 'Штурмовики из Соло',
                            img: 'https://sun9-30.userapi.com/s/v1/ig2/dwCJWYyRMjDArD2AeFc2DjwzT3XXhLgd6aqb84iv8s8nB2sA8Rsih-b4zuYx7Fm4y8daKLZhcczC-PF05_l6KhvT.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2000x2000&from=bu&u=Bnrtlxylo9J9Eu_xRvPWYdHZBBLPInBtBwdcE8_gZXE&cs=510x510',
                            url: 'https://vk.com/market/product/star-wars-legion-range-troopers-131012375-9145775'
                        },
                        {
                            title: 'Star Wars: Legion - Republic Clone Commandos',
                            description: 'Командос республики',
                            img: 'https://sun9-11.userapi.com/s/v1/ig2/3LL7UAluav4xAfBLsWY2hsWv91awl3b7iGGwj03j7ENmzbELhrfHJkkxfdJOEtwIV_c-sXIF8suB9K9ZW-Rf2UVK.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2000x2000&from=bu&u=Rx5CAMsXIJc-RPZLL9DAcHQb4F_8L2vKgrptv0sCoPo&cs=510x510',
                            url: 'https://vk.com/market/product/star-wars-legion-republic-clone-commandos-131012375-9145751'
                        },
                        {
                            title: 'Star Wars: Legion - Inferno Squad Unit Expansion',
                            description: 'Отряд Инферно пропущенный мною в своё время',
                            img: 'https://sun9-63.userapi.com/s/v1/ig2/1Oes2AdieXrMeP37Kup39Ncp5EP8j_-CPu__fAX7p33FAhJYd33ARYHM8gVA9PC3AcZIWx6S3plkCMUIkcEtH72S.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,500x500&from=bu&u=Ob3aat_hn1-YwN_vHfcvjzfjKiDma_YHARHzWhCjMEk&cs=500x500',
                            url: 'https://vk.com/market/product/star-wars-legion-inferno-squad-unit-expansion-131012375-4403995'
                        },
                        {
                            title: 'Star Wars: Legion - Phase II Clone Troopers Unit Expansion',
                            description: 'Отряд Клонов второй фазы, который в своё время упустил',
                            img: 'https://sun9-47.userapi.com/s/v1/ig2/Mb10p_R7ttdLj07V6P5QyF4zBJciSZVB4UF61K5YXXADe6dKdNnVbPL_r-IiUlVNJupfM1som59LkXCqm9iXNRHE.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,500x500&from=bu&u=n7nopop6CJT7JN-KzWjbyXoaCyDqp6BOoIsEvTCJ59c&cs=500x500',
                            url: 'https://vk.com/market/product/star-wars-legion-phase-ii-clone-troopers-unit-expansion-131012375-3186865'
                        },
                    ]
                },
                {
                    title: 'Хорошо бы по SW Legion',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Те позиции, что я не ищу, но всё равно был бы рад им',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(11,9,9)',
                    buttonColor: 'rgba(189,12,12,0.8)',
                    cards: [

                        {
                            title: 'Star Wars: Legion - Imperial Shoretroopers Unit Expansion',
                            description: 'Шор трупперы, одни есть, можно было бы ещё одних))',
                            img: 'https://sun9-4.userapi.com/s/v1/ig2/9Pvj8ct8Z2FFWmIVq-oIa9th3PUvicLmepSu9-kA-JzOjZiPbItaD6avz__XPTUgK00Q1SEvqnHV6pGIW-WqIDX6.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,500x500&from=bu&u=dnxaJL2z9YCQA0BQw3Os3P_pCRhIyGRVye2WkOwNSxo&cs=500x500',
                            url: 'https://vk.com/market/product/star-wars-legion-imperial-shoretroopers-unit-expansion-131012375-3186742'
                        },
                        {
                            title: 'Star Wars: Legion - BX-series Droid Commandos Unit Expansion',
                            description: 'Bx Дроиды, красавцы, есть одни, можно было бы ещё набор',
                            img: 'https://sun9-6.userapi.com/s/v1/ig2/FNISxkGx7nf3mxxef_4R7RmOfG3T9DGVjiwy-NxGC6J_K9lg58ZKdswPfBJcSNF7PGRjKcb5oyKdWVHas0ALBMSf.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,610x610&from=bu&u=Zhv2_m8POS1rT1QD8ywKOpt9aMIHP0vGqST7OJh4zAQ&cs=510x510',
                            url: 'https://vk.com/market/product/star-wars-legion-bx-series-droid-commandos-unit-expansion-131012375-5038611'
                        },
                    ]
                },
               /* {
                    title: 'Armada',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Грандиозные битвы в космосе',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.GRID_MATERIAL,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(11,9,9)',
                    buttonColor: 'rgba(12,53,189,0.8)',
                    cards: [

                        {
                            title: 'Partisan Resistance Cell',
                            description: 'Спящая ячейка',
                            img: 'https://static.insales-cdn.com/images/products/1/3584/690826752/large_img17038.jpg',
                            url: 'https://a13sector.ru/product/predzakaz-nastolnaya-igra-02-hundred-hours-partisan-resistance-cell'
                        },
                        {
                            title: 'Desert Raid',
                            description: 'Пустынный рейд',
                            img: 'https://static.insales-cdn.com/images/products/1/5948/739456828/large_img17530.jpg',
                            url: 'https://a13sector.ru/product/predzakaz-sbornaya-model-hundred-hours-desert-raid-28mm'
                        },
                    ]
                },*/
                {
                    title: 'Магазины где можно посмотреть',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Переодически бывает в наличии',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.SOLOSLIDER,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(253,253,253)',
                    buttonColor: 'rgba(225,227,234,0.8)',
                    cards: [

                        {
                            title: 'Лавка Орка',
                            description: 'Много настолок, варгеймов и прочего около настольного',
                            img: 'https://goodork.ru/userfiles/mnogorkov.jpg',
                            url: 'https://goodork.ru/categories/star-wars-legion'
                        },
                    ]
                },
            ]
        },
        {
            title: 'Wargames',
            menuActiveTextColor: '#1de4d3',
            titleTextColor: 'rgb(243,241,241)',
            type: PageTypeEnum.LEFT,
            description: 'На этой странцие собраны другие варгеймы которые я коллекционирую и чего мне не хватает',
            url: 'wargames',
            textColor: 'rgb(248,243,243)',
            backgroundColor: 'rgb(232,224,224)',
            descriptionTextColor: 'rgb(244,241,241)',
            menuTextColor: 'rgb(232,224,224)',
            backgroundEffect: BackgroundEffectEnum.PARALLAX,
            backgroundImage: 'https://t4.ftcdn.net/jpg/00/25/82/95/360_F_25829597_nzueNmnDHuAVVRPirrVdeeaLNmQqZqVD.jpg',
            sections: [
                {
                    title: 'Flames of war',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Flames of War позволяет игрокам разыгрывать сражения на уровне роты на европейском, тихоокеанском и североафриканском театрах Второй мировой войны. Я собираю в основном фракции России, Германии и Америки. Других у меня нет. Плюс я собрал почти всё, что хотел',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(11,9,9)',
                    buttonColor: 'rgba(189,12,12,0.8)',
                    cards: [

                        {
                            title: 'American Spearhead Force 1/100',
                            description: 'Пополнение для Америкосов',
                            img: 'https://static.insales-cdn.com/images/products/1/4136/481374248/large___Portals_0_all_images_Bulge-American_Spotlight_USAB11-02.jpg',
                            url: 'https://a13sector.ru/product/sbornaya-model-bulge-american-spearhead-force-1100'
                        },
                    ]
                },
                {
                    title: 'WW3',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Оживляет конфликт, который кипел на протяжении всей холодной войны, в игре, где вы командуете своими войсками в миниатюре. Я собираю Россиию против США. Думаю, что не против войск НАТО.',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(11,9,9)',
                    buttonColor: 'rgba(34,108,10,0.8)',
                    cards: [
                        {
                            title: '2S6 Tunguska AA Platoon',
                            description: 'Тунгуска',
                            img: 'https://static.insales-cdn.com/images/products/1/2609/510872113/compact_2s6-tunguska-aa-platoon.webp',
                            url: 'https://a13sector.ru/product/2s6-tunguska-aa-platoon-wwiii-x2-tanks'
                        },
                        {
                            title: 'BTR-60 Transport Platoon',
                            description: 'Прикольные бтры',
                            img: 'https://static.insales-cdn.com/images/products/1/1636/474474084/large___Portals_0_all_images_TeamYankee_StoreImages_Soviet_TSBX14.jpg',
                            url: 'https://a13sector.ru/product/sbornaya-model-btr-60-transport-platoon-plastic-15mm-1100'
                        },
                    ]
                },
                {
                    title: '02 Houndred hours',
                    titleTextColor: 'rgb(248,243,241)',
                    description: 'Тайные операции второй мировой',
                    descriptionTextColor: 'rgb(248,243,241)',
                    template: SectionTemplateEnum.GRID_MATERIAL,
                    imageTemplate: BackgroundImageEnum.COVER,
                    font: TypeOfFontsEnum.PHILOSOPHER,
                    textColor: 'rgb(11,9,9)',
                    buttonColor: 'rgba(12,53,189,0.8)',
                    cards: [

                        {
                            title: 'Partisan Resistance Cell',
                            description: 'Спящая ячейка',
                            img: 'https://static.insales-cdn.com/images/products/1/3584/690826752/large_img17038.jpg',
                            url: 'https://a13sector.ru/product/predzakaz-nastolnaya-igra-02-hundred-hours-partisan-resistance-cell'
                        },
                        {
                            title: 'Desert Raid',
                            description: 'Пустынный рейд',
                            img: 'https://static.insales-cdn.com/images/products/1/5948/739456828/large_img17530.jpg',
                            url: 'https://a13sector.ru/product/predzakaz-sbornaya-model-hundred-hours-desert-raid-28mm'
                        },
                    ]
                },
            ]
        }
    ]
}