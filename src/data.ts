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
                    description: '«Лунная серенада» – это лавандовая душистая вода. Ее винтажный аккорд, поистине бодрящий, придаёт парфюмерной воде бодрящие ароматические оттенки.',
                    img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/3/6/3614227575981_1_v0fl6jcjrlqmilqw.jpg',
                    url:'https://goldapple.ru/19000004564-the-alchemist-s-garden-moonlight-serenade-acqua-profumata'
                },
                    {
                    title: 'BYREDO bal d\'afrique',
                    description: ' Композиция: бергамот, лимон, нероли, африканская календула, фиалка, лепестки жасмина, цикламен, черный янтарь, мускус, ветивер, марроканский кедр.',
                    img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/7/3/7340032806038_1.jpg',
                    url:'https://goldapple.ru/10207048-bal-d-afrique'
                },
                    {
                    title: 'LE LABO neroli 36',
                    description: 'Масло нероли — одно из названий эссенции цветков апельсина. ',
                    img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/1/811901022974_1_bnevadsf8c78vjyx.jpg',
                    url:'https://goldapple.ru/11466-19000012709-neroli-36'
                },
                {
                    title: 'PENHALIGON\'S LUNA',
                    description: 'Раскрываясь горьковатой свежестью померанца, сердце композиции оборачивается хрупкой легкостью можжевеловых ягод, и всё это в окружении темной древесной базы.',
                    img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/5/0/5056245021435_1_pq6bcx4yiofnmj6r.jpg',
                    url:'https://goldapple.ru/10251-19000125037-luna'
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
                            title: 'GUERLAIN météorites perles',
                            description: 'Нежный аромат фиалки, неподражаемый и восхитительный!',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/3/3/3346470416659_1_ml4xicn3bq02i4uf.jpg',
                            url:'https://goldapple.ru/10009-14095400001-meteorites-perles#sku=14095400002'
                        },
                        {
                            title: 'DR. CEURACLE hyal reyouth hydrogel eye mask',
                            description: 'Гидрогелевые патчи для глаз.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8806133614570_1_xhg27m7w37ndaqe9.jpg',
                            url:'https://goldapple.ru/19000012321-hyal-reyouth-hydrogel-eye-mask'
                        }
                    ]
                },
                {
                    title: 'Bath',
                    description: 'Time to relax',
                    template: SectionTemplateEnum.SOLOSLIDER,
                    cards: [
                        {
                            title: 'NOTEM bath bombs',
                            description: 'БОМБОЧКА ДЛЯ ВАННЫ',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/4/6/4673734888372_1_ejfbctlrc83lyins.jpg',
                            url:'https://goldapple.ru/19000070824-bath-bombs-rose'
                        },
                        {
                            title: 'Tranquillity, Comfort Zone',
                            description: 'Успокаивающий гель для душа',
                            img: 'https://vetermagazine.ru/wp-content/uploads/2021/07/uspokaivajushhij-gel-dlja-dusha-tranquility-comfort-zone.jpg',
                            url:'https://vetermagazine.ru/shop/beauty/for-the-bath/uspokaivajushhij-gel-dlja-dusha-tranquility-comfort-zone/'
                        },
                        {
                            title: 'HOSA body wash',
                            description: 'Нежный гель для душа HOSA',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809051282036_1_2gvkbetdarmhtaqn.jpg',
                            url:'https://goldapple.ru/89860200002-body-wash'
                        }]
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