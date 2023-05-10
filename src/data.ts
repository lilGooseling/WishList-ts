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
                template: SectionTemplateEnum.GRID_STICKER,
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
                }]
            },
                {
                    title: 'Care & Dress',
                    description: 'Always good things for gift',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    imageTemplate: BackgroundImageEnum.COVER,
                    cards: [
                        {
                            title: 'Джемпер',
                            description: 'Джемпер оверсайз из шерсти в полоску всегда полезен',
                            img: 'https://e930f744-2554-4589-81f4-fda27b4a4a59.selcdn.net/iblock/3df/3df8967d752201b6e50f9c20a64183ca/bf83c5a8346ba83fce24c19ad8cca576.jpg',
                            url:'https://www.lusio.ru/catalog/lscw_340011_dzhemper/?pid=112366'
                        },
                        {
                            title: 'Джемпер из льна',
                            description: 'Джемпер из льняной пряжи, натуральной и дышащей, идеальной для тёплого сезона.',
                            img: 'https://solo-u.ru/upload/iblock/1c7/4b9i8sj3j0pzr6vbqpg9qdsdd1904638.webp',
                            url:'https://solo-u.ru/catalog/vyazanyy_trikotazh/dzhemper_svobodnyy_lnyanoy_195902/'
                        },
                        {
                            title: 'Платье миди',
                            description: 'Платье из шифона в длине миди с рукавами ¾.',
                            img: 'https://solo-u.ru/upload/iblock/49e/tvwu2sb3p77znwgsqbx7oonh4x2psdvx.webp',
                            url:'https://solo-u.ru/catalog/platya_i_sarafany/plate_midi_s_dekorativnymi_pugovitsami_171505/'
                        },
                        {
                            title: 'Сарафан',
                            description: 'Сарафан из шифона в длине миди. Лёгкая модель для весенних и летних образов.',
                            img: 'https://solo-u.ru/upload/iblock/b5e/hoor1ox0vn8ygn8fnb9kd91qg52nzwqh.webp',
                            url:'https://solo-u.ru/catalog/platya_i_sarafany/sarafan_iz_shifona_na_bretelyakh_146311/'
                        },
                        {
                            title: 'Блуза',
                            description: 'Блуза с пышным рукавом темно-синяя с принтом клевер',
                            img: 'https://uniquefabric.ru/loaded/goods/images/thumbs/7fc15b665cd57e2cec065ad1ba085bec.webp',
                            url:'https://uniquefabric.ru/good/bluza-s-py-sny-m-rukavom-temno-sinyaya-s-printom-klever'
                        },
                        {
                            title: 'Рубашка',
                            description: 'Базовая свободная рубашка с длинным рукавом.',
                            img: 'https://solo-u.ru/upload/iblock/e47/mipwhvc3jbc5ex54wol7eb82alr41zk8.webp',
                            url:'https://solo-u.ru/catalog/bluzy_i_rubashki/rubashka_iz_khlopka_s_karmanom_174705/'
                        },
                        {
                            title: 'Жилет с молнией',
                            description: 'Вязаный жилет с высоким воротником и широкими проймами.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/top/121928/63d3749aed007-23-01-20230505.jpg',
                            url:'https://12storeez.com/catalog/trikotaz/womencollection/zilet-s-molniej-121928'
                        },
                        {
                            title: 'Футболка',
                            description: 'Трикотажная футболка в полоску.',
                            img: 'https://e930f744-2554-4589-81f4-fda27b4a4a59.selcdn.net/iblock/f8c/f8cbefc9e1946b1a20f6b0e382b280e9/65a99149c894ad87cd9261110642158b.jpg',
                            url:'https://www.lusio.ru/catalog/lscw_070044_trikotazhnaya_bluza/?pid=115616'
                        },
                        {
                            title: 'ELMOLU peptide wrinkle love mode',
                            description: 'Маска повышает эластичность, смягчает и увлажняет кожу.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809420568969_1_ytl2ts88kvxc9x1r.jpg',
                            url:'https://goldapple.ru/89880300001-peptide-wrinkle-serii-love-mode'
                        },
                        {
                            title: 'ELMOLU anti ac love mode',
                            description: 'Успокаивает и увлажняет чувствительную и раздраженную кожу, укрепляет естественный защитный барьер',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809420569003_1_q5ehfgids5td6t3p.jpg',
                            url:'https://goldapple.ru/89880300003-anti-ac-serii-love-mode'
                        },
                        {
                            title: 'ELMOLU energy boosting love mode',
                            description: 'Маска питает и глубоко увлажняет кожу, придаёт ей сияние.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809420568983_1_6qodzlejil0fy7lq.jpg',
                            url:'https://goldapple.ru/89880300005-energy-boosting-serii-love-mode'
                        },
                        {
                            title: 'ELMOLU pore scaling love mode',
                            description: 'Маска очищает кожу и поры, повышает эластичность и увлажняет.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809420569010_1_lhyeqli85xnzuges.jpg',
                            url:'https://goldapple.ru/89880300004-pore-scaling-serii-love-mode'
                        },
                        {
                            title: 'Жилет с молнией',
                            description: 'Вязаный жилет с высоким воротником и широкими проймами.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/top/121928/63d3749aed007-23-01-20230505.jpg',
                            url:'https://12storeez.com/catalog/trikotaz/womencollection/zilet-s-molniej-121928'
                        },
                        {
                            title: 'Футболка',
                            description: 'Трикотажная футболка в полоску.',
                            img: 'https://e930f744-2554-4589-81f4-fda27b4a4a59.selcdn.net/iblock/f8c/f8cbefc9e1946b1a20f6b0e382b280e9/65a99149c894ad87cd9261110642158b.jpg',
                            url:'https://www.lusio.ru/catalog/lscw_070044_trikotazhnaya_bluza/?pid=115616'
                        },
                        {
                            title: 'Жилет с молнией',
                            description: 'Вязаный жилет с высоким воротником и широкими проймами.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/top/121928/63d3749aed007-23-01-20230505.jpg',
                            url:'https://12storeez.com/catalog/trikotaz/womencollection/zilet-s-molniej-121928'
                        },
                        {
                            title: 'Футболка',
                            description: 'Трикотажная футболка в полоску.',
                            img: 'https://e930f744-2554-4589-81f4-fda27b4a4a59.selcdn.net/iblock/f8c/f8cbefc9e1946b1a20f6b0e382b280e9/65a99149c894ad87cd9261110642158b.jpg',
                            url:'https://www.lusio.ru/catalog/lscw_070044_trikotazhnaya_bluza/?pid=115616'
                        }
                    ]
                }

            ]
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