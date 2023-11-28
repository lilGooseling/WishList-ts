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
            sections: [{
                title: 'Fragrance',
                description: 'Love it',
                template: SectionTemplateEnum.GRID_MATERIAL,
                imageTemplate: BackgroundImageEnum.COVER,
                backgroundEffect: BackgroundEffectEnum.PARALLAX,
                cards: [
                    {
                    title: '“Moonlight Serenade”',
                    description: 'Gucci, «Лунная серенада» – это лавандовая душистая вода.',
                    img: 'https://pcdn.goldapple.ru/p/p/19000004564/web/696d67416464338dad7cd9d4adf28fullhd.webp',
                    url:'https://goldapple.ru/19000004564-the-alchemist-s-garden-moonlight-serenade-acqua-profumata'
                },
                    {
                    title: 'BYREDO bal d\'afrique',
                    description: 'Бергамот, лимон, нероли, африканская календула, фиалка, жасмин, кедр.',
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
                    description: 'Померанец, можжевеловые ягоды, древесная база.',
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
                            description: 'Теплый джемпер прямого силуэта с высоким воротником',
                            img: 'https://static.snowqueen.ru/img/1000/1500/resizeWebP/catalog/product/I/M/IMG_12664.jpg',
                            url:'https://snowqueen.ru/product/dzhemper-s-risunkom-675277003'
                        },
                        {
                            title: 'Джемпер',
                            description: 'Джемпер темно-зеленого оттенка с вязаным узором',
                            img: 'https://static.snowqueen.ru/img/1000/1500/resizeWebP/catalog/product/s/l/sl_680464003_680611003-c_2.jpg',
                            url:'https://snowqueen.ru/product/vjazanyj-dzhemper-680464003'
                        },
                        {
                            title: 'Джемпер',
                            description: 'Удлиненный джемпер молочного оттенка с вязаным узором',
                            img: 'https://static.snowqueen.ru/img/1000/1500/resizeWebP/catalog/product/s/l/sl_675221003_675704003-c_1.jpg',
                            url:'https://snowqueen.ru/product/vjazanyj-dzhemper-675221003'
                        },
                        {
                            title: 'Шарф',
                            description: 'Легкий шарф из вискозы и полиэстера с рисунком в клетку',
                            img: 'https://static.snowqueen.ru/img/1000/1500/resizeWebP/catalog/product/s/r/sr_620006003_1.jpg',
                            url:'https://snowqueen.ru/product/sharf-v-kletku-620006003'
                        },
                        {
                            title: 'Блуза',
                            description: 'Блуза с пышным рукавом темно-синяя с принтом клевер',
                            img: 'https://uniquefabric.ru/loaded/goods/images/thumbs/7fc15b665cd57e2cec065ad1ba085bec.webp',
                            url:'https://uniquefabric.ru/good/bluza-s-py-sny-m-rukavom-temno-sinyaya-s-printom-klever'
                        },
                        {
                            title: 'Джемпер',
                            description: 'Джемпер с вырезом. Очень новогодниц цвет ',
                            img: 'https://imgcdn.zarina.ru/upload/images/33296/thumb/450_9999/3329609819_70_7.jpg?t=1690270802',
                            url:'https://zarina.ru/catalog/product/3329609819-70/'
                        },
                        {
                            title: 'Джемпер',
                            description: 'Джемпер из вискозы, бежевый принт',
                            img: 'https://imgcdn.zarina.ru/upload/images/33296/thumb/450_9999/3329621835_235_7.jpg?t=1688638872',
                            url:'https://zarina.ru/catalog/product/3329621835-235/'
                        },
                        {
                            title: 'Свитер ',
                            description: 'Свитер из вискозы, бежевый. Zarina',
                            img: 'https://imgcdn.zarina.ru/upload/images/34206/thumb/450_9999/3420602803_62_1.jpg?t=1690557982',
                            url:'https://zarina.ru/catalog/product/3420602803-62/'
                        },
                        {
                            title: 'Кардиган',
                            description: 'Вязаный кардиган, терракот/кирпичный',
                            img: 'https://imgcdn.zarina.ru/upload/images/33296/thumb/450_9999/3329644867_21_5.jpg?t=1690891817',
                            url:'https://zarina.ru/catalog/product/3329644867-21/'
                        },
                        {
                            title: 'Свитшот',
                            description: 'Свитшот из хлопка, кремовый/светлый беж',
                            img: 'https://imgcdn.zarina.ru/upload/images/33285/thumb/450_9999/3328522446_61_6.jpg?t=1690886703',
                            url:'https://zarina.ru/catalog/product/3328522446-61/'
                        },
                        {
                            title: 'Рубашка',
                            description: 'Женская рубашка в клетку Trendyol',
                            img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0LUZI_18703710_4_v1_2x.jpg',
                            url:'https://www.lamoda.ru/p/mp002xw0luzi/clothes-trendyol-rubashka/'
                        },
                        {
                            title: 'Рубашка',
                            description: 'Женская рубашка в клетку бордового цвета',
                            img: 'https://img-colinsrus.mncdn.com/Assets/Russia/Thumbs/__151790.jpeg?v=1692289897',
                            url:'https://www.colins.ru/p/zhenskaya-rubashka-bordovoho-cveta-40111'
                        },
                        {
                            title: 'ELMOLU peptide',
                            description: 'Маска повышает эластичность, смягчает и увлажняет кожу.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809420568969_1_ytl2ts88kvxc9x1r.jpg',
                            url:'https://goldapple.ru/89880300001-peptide-wrinkle-serii-love-mode'
                        },
                        {
                            title: 'ELMOLU anti ac love mode',
                            description: 'Успокаивает и увлажняет чувствительную кожу.',
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
                            description: 'Маска очищает кожу и поры, повышает эластичность.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8809420569010_1_lhyeqli85xnzuges.jpg',
                            url:'https://goldapple.ru/89880300004-pore-scaling-serii-love-mode'
                        },
                        {
                            title: 'GUERLAIN météorites perles',
                            description: 'Нежный аромат фиалки!',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/3/3/3346470416659_1_ml4xicn3bq02i4uf.jpg',
                            url:'https://goldapple.ru/10009-14095400001-meteorites-perles#sku=14095400002'
                        },
                        {
                            title: 'DR. CEURACLE hydrogel eye mask',
                            description: 'Гидрогелевые патчи для глаз.',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/8/8806133614570_1_xhg27m7w37ndaqe9.jpg',
                            url:'https://goldapple.ru/19000012321-hyal-reyouth-hydrogel-eye-mask'
                        }
                    ]
                },
                {
                    title: 'Bath',
                    description: 'Time to relax',
                    backgroundImage: 'https://oboi-ma.ru/f/product/7661.jpg',
                    imageTemplate: BackgroundImageEnum.CONTAIN,
                    template: SectionTemplateEnum.SOLOSLIDER,
                    cards: [
                        {
                            title: 'NOTEM bath bombs',
                            description: 'БОМБОЧКА ДЛЯ ВАННЫ',
                            img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/4/6/4673734888372_1_ejfbctlrc83lyins.jpg',
                            url:'https://goldapple.ru/19000070824-bath-bombs-rose'
                        },
                        {
                            title: 'PERLIER, Honey Miel',
                            description: 'Защитный крем для рук Honey Miel',
                            img: 'https://www.letu.ru/common/img/uploaded/skuImageFolder/PERL83345EX.jpg',
                            url:'https://www.letu.ru/product/perlier-zashchitnyi-krem-dlya-ruk-honey-miel/12620'
                        },
                        {
                            title: 'PERLIER, Fresia',
                            description: 'Защитный крем для рук Honey Miel',
                            img: 'https://www.letu.ru/common/img/uploaded/skuImageFolder/PER087514EX.jpg',
                            url:'https://www.letu.ru/product/perlier-krem-dlya-ruk-fresia-hand-cream/46500164'
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
            title: 'Hobby & inspiration ',
            type: PageTypeEnum.LEFT,
            backgroundColor: '#f5ebe6',
            description: '',
            url: 'hobby',
            sections: [
                {
                    title: 'Boardgames',
                    description: 'Time with family',
                    backgroundColor: '#f5ebe6',
                    backgroundImage: 'https://oboi-ma.ru/f/product/7673.jpg',
                    imageTemplate: BackgroundImageEnum.CONTAIN,
                    template: SectionTemplateEnum.SOLOSLIDER,
                    cards: [
                        {
                            title: 'BOTANY',
                            description: 'Flower Hunting in the Victorian Era',
                            img: 'https://cf.geekdo-images.com/Xp4Cb-IOZZYDDOxaWBYfFw__imagepage/img/5nTPHdodxoA7HHRSYnlD3BcrOv4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7477413.jpg',
                            url:'https://boardgamegeek.com/boardgame/380837/botany'
                        },
                        {
                            title: 'Planted',
                            description: 'A Game of Nature & Nurture',
                            img: 'https://cf.geekdo-images.com/w05q02PbXAw64GKtd4H4qg__opengraph/img/-o6-yMcXnIaHKDxWl1NKFFKnVyk=/0x314:2000x1961/fit-in/1200x630/filters:fill(blur):strip_icc()/pic6978684.jpg',
                            url:'https://boardgamegeek.com/boardgame/365104/planted-game-nature-nurture'
                        },
                        {
                            title: 'Wingspan asia',
                            description: 'expansion',
                            img: 'https://images.squarespace-cdn.com/content/v1/5ca03db673304600013d111e/a3da15c5-384b-44f2-9296-12eff02c8e15/Wingspan+Asia+Duet+Mode.jpg',
                            url:'https://cdek.shopping/p/481604/nastolnaya-igra-stonemaier-games-wingspan-asia'
                        },
                        {
                            title: 'Flourish',
                            description: 'Красивая, уникальная игра по созданию сада',
                            img: 'https://ksr-ugc.imgix.net/assets/030/625/525/99dfdc3f15c060e5e66f79792abe9148_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1600268716&auto=format&frame=1&q=92&s=8110caec6f2bcab8cd23b0f5d3375439',
                            url:'https://cdek.shopping/p/482243/nastolnaya-igra-starling-games-flourish-signature-edition'
                        },
                        {
                            title: 'Woodcraft',
                            description: 'Управляйте своей мастерской',
                            img: 'https://boardgameslv.files.wordpress.com/2022/10/dsc_0096_wood.jpg',
                            url:'https://rusboardgame.ru/product/bron-woodcraft'
                        }
                        ]
                },
                {
                    title: 'Sport',
                    description: 'Do my best',
                    template: SectionTemplateEnum.GRID_GRADIENT,
                    cards: [
                        {
                            title: 'Футболка из хлопка',
                            description: 'Футболка с коротким рукавом',
                            img: 'https://imgcdn.zarina.ru/upload/images/32255/thumb/450_9999/3225501402_1_4.jpg?t=1688139559',
                            url:'https://zarina.ru/catalog/product/3225501402-1/'
                        },
                        {
                            title: 'Футболка из хлопка',
                            description: 'Футболка с коротким рукавом',
                            img: 'https://imgcdn.zarina.ru/upload/images/32265/thumb/450_9999/3226520421_2_5.jpg?t=1689171196',
                            url:'https://zarina.ru/catalog/product/3226520421-2/'
                        },
                        {
                            title: 'Спортивные штаны',
                            description: 'Штаны коричневого цвета',
                            img: 'https://img-colinsrus.mncdn.com/Assets/Russia/Thumbs/_cl1065686_147797.jpeg?v=1689248535',
                            url:'https://www.colins.ru/p/zhenskye-sportyvne-shtan-korychnevoho-cveta-40565'
                        },
                        {
                            title: 'Коврик бежевый/черный',
                            description: 'Коврик для йоги и фитнеса MELA',
                            img: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6291361117.jpg',
                            url:'https://www.ozon.ru/product/kovrik-dlya-yogi-i-fitnesa-mela-808380965/?_bctx=CAMQ9I3GKQ&asb=aB9HPv5a30wI7OLhaW%252Bm9yDYDl1LdlkZPqKXIGA8hn8AHHHboXxLUobChfmLXEhJ&asb2=aDomAQPpbCVToXBQTgqtyZwKSOIVE_Ex6pk-z2951ebvQolyC46vmJ2S7Vsz9gX9vVtV-_lnUuIk4c_-Mb2_HgrP1Lqg-wAo5EhXJywIm9R4vxoflExPY8V86kgqYlQPLqdafflowL9o_Z1bbMIMRsAoCMfqBxpjuAnnKshhNsQ&avtc=1&avte=2&avts=1694634289&sh=viUNDv2zOQ'
                        }
                    ]
                },
                {
                    title: 'Books',
                    description: 'For collection',
                    template: SectionTemplateEnum.GRID_STICKER,
                    imageTemplate: BackgroundImageEnum.CONTAIN,
                    backgroundImage: 'https://cdn.shopify.com/s/files/1/3097/3722/products/media_cd68dfd7-4450-4b9b-8c63-e1252cf98287_1200x1200.jpg?v=1683718058',
                    cards: [
                        {
                            title: 'Little Women',
                            description: 'Луиза Мэй Олкотт, Серия Macmillan Collector`s Library',
                            img: 'https://img4.labirint.ru/rc/0ddfd708aa5f6dd00376a132503e0e58/363x561q80/books80/795742/cover.jpg?1617517511',
                            url:'https://www.labirint.ru/books/795742/'
                        },
                        {
                            title: 'The Secret Garden',
                            description: 'Бёрнетт Фрэнсис Ходжсон, Серия Macmillan Collector`s Library',
                            img: 'https://img3.labirint.ru/rc/f2c54416f01952ade467b03f8836d81b/363x561q80/books91/903015/cover.jpg?1693718708',
                            url:'https://www.labirint.ru/books/903015/'
                        },
                        {
                            title: 'Anne of Avonlea',
                            description: 'Монтгомери Люси Мод, Серия Macmillan Collector`s Library',
                            img: 'https://img4.labirint.ru/rc/e29c6ac45d6064b64b7be8da150ce8ed/363x561q80/books78/774470/cover.jpg?1605957960',
                            url:'https://www.labirint.ru/books/774470/'
                        },
                        {
                            title: 'The Wind in the Willows',
                            description: 'Kenneth Grahame, Серия Palmyra Classics.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/29/777/2977759.jpg',
                            url:'https://www.chitai-gorod.ru/product/the-wind-in-the-willows-2977759?productShelf=&shelfIndex=0&productIndex=4'
                        },
                        {
                            title: 'Pride and Prejudice',
                            description: 'Джейн Остен, Серия Penguin English Library ',
                            img: 'https://img3.labirint.ru/rc/10bf3c98c5d430ae6f8ca1bb5c61407c/363x561q80/books89/887529/cover.jpg?1675754724',
                            url:'https://www.labirint.ru/books/887529/'
                        },
                        {
                            title: 'Little Dorrit',
                            description: 'Charles Dickens, Penguin Books.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/23/855/2385597.jpg',
                            url:'https://www.chitai-gorod.ru/product/little-dorrit-2385597'
                        },
                        {
                            title: 'Sense and Sensibility',
                            description: 'Джейн Остен, Penguin Clothbound Classics',
                            img: 'https://img4.labirint.ru/rc/38cedd9e17c3121824c850353b780f3e/363x561q80/books89/886960/cover.jpg?1688394319',
                            url:'https://www.labirint.ru/books/886960/'
                        },
                        {
                            title: 'Tess of the D`Urbervilles',
                            description: 'Гарди Томас, Penguin Clothbound Classics',
                            img: 'https://img3.labirint.ru/rc/234efaf4b942a3e0da7d362c01dd99c8/363x561q80/books89/886957/cover.jpg?1688397922',
                            url:'https://www.labirint.ru/books/886957/'
                        },
                        {
                            title: 'Far from the Madding Crowd',
                            description: 'Гарди Томас, Penguin Clothbound Classics',
                            img: 'https://img4.labirint.ru/rc/7c8df4610ef34308136c3f940cd4ad05/363x561q80/books89/887922/cover.jpg?1673965515',
                            url:'https://www.labirint.ru/books/887922/'
                        },
                        {
                            title: 'Регата Лисьего Леса',
                            description: ' Патерсон Брайан, Издательство: Качели.',
                            img: 'https://img4.labirint.ru/rc/9a3cba6bf540de122f2e93522690fa68/363x561q80/books47/460440/cover.png?1670855115',
                            url:'https://www.labirint.ru/books/460440/'
                        },
                        {
                            title: 'Эрнест и Селестина',
                            description: 'Праздник каждый день, Венсан Габриэль.',
                            img: 'https://ir.ozone.ru/multimedia/wc700/1024316072.jpg',
                            url:'https://www.ozon.ru/product/ernest-i-selestina-prazdnik-kazhdyy-den-vensan-gabriel-258606781/?_bctx=CAUQh5qiDQ&asb=QqttJJLddoC2WQd4B18al7kNl%252BRQjvZebeC6IEMzgvs%253D&asb2=Z952oywW3_b5yqWcjYuKAG7pZnTnp9WcJ5SF16aLejc-E7UCPBvePQuXbQgs3Rvu&avtc=1&avte=2&avts=1684930063&sh=viUNDsdEag'
                        },
                        {
                            title: 'Лапин. Сказки на ночь',
                            description: 'Симбирская Юлия Станиславовна, Манн, Иванов и Фербер',
                            img: 'https://img3.labirint.ru/rc/401a8a849e3847a0410558c8b2d59d8f/363x561q80/books86/853819/cover.jpg?1694087081',
                            url:'https://www.labirint.ru/books/853819/'
                        },
                        {
                            title: 'Лапин',
                            description: 'Симбирская Юлия Станиславовна, Манн, Иванов и Фербер',
                            img: 'https://img3.labirint.ru/rc/ad592920ba0ad680eed5edce0556f64e/363x561q80/books75/749991/cover.jpg?1649658320',
                            url:'https://www.labirint.ru/books/749991/'
                        },
                        {
                            title: 'Тильда Яблочное Семечко',
                            description: 'Шмахтл Андреас Х., Манн, Иванов и Фербер',
                            img: 'https://img4.labirint.ru/rc/a6b8db7d0b26659c7db15756a62d2e39/363x561q80/books66/655486/cover.png?1575372521',
                            url:'https://www.labirint.ru/books/655486/'
                        },
                        {
                            title: 'Тильда Яблочное Семечко',
                            description: 'Шмахтл Андреас Х., Манн, Иванов и Фербер',
                            img: 'https://img3.labirint.ru/rc/19eb23f9e568b56dbf3a1679a314d7f5/363x561q80/books71/709217/cover.jpg?1567608754',
                            url:'https://www.labirint.ru/books/709217/'
                        },
                        {
                            title: 'Тильда Яблочное Семечко',
                            description: 'Шмахтл Андреас Х., Манн, Иванов и Фербер',
                            img: 'https://img3.labirint.ru/rc/fec301ec16a511973a8f713caec989c4/363x561q80/books79/788279/cover.jpg?1613831109',
                            url:'https://www.labirint.ru/books/788279/'
                        }
                    ]
                },
                {
                    title: 'Painting & miniatures',
                    description: 'for weekends',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    cards: [
                        {
                            title: 'Белый тополь',
                            description: 'AK Interactive, для будующего Эндора',
                            img: 'https://i-modelist.ru/file/i/850/850/a0ff2ec96c2622a4bb316cf25e0e4bc6/10a1c7e3f1673c3e9d73e5243c12b6b7.jpg',
                            url:'https://i-modelist.ru/goods/226/2415/78792.html'
                        },
                        {
                            title: 'Клён',
                            description: 'AK Interactive, для будующего Эндора',
                            img: 'https://i-modelist.ru/file/i/1200/1200/ad6729ea/2fa0db02b9a6e81cb52a37cc44445440.jpg',
                            url:'https://i-modelist.ru/goods/226/2415/78786.html'
                        },
                        {
                            title: 'Дуб',
                            description: 'AK Interactive, для будующего Эндора',
                            img: 'https://i-modelist.ru/file/i/850/850/7da629bb/e8c29b03375fa5892ca640ae84a67bb1.jpg',
                            url:'https://i-modelist.ru/goods/226/2415/78789.html'
                        },
                        {
                            title: 'Сосна',
                            description: 'AK Interactive, для будующего Эндора',
                            img: 'https://i-modelist.ru/file/i/500/500/c6646a0d/535dd1faa3f5d00e234c2b742ac32da7.jpg',
                            url:'https://i-modelist.ru/goods/226/2415/78785.html'
                        },
                        {
                            title: 'ПАПОРОТНИК',
                            description: 'MiniWarPaint, РАЗМЕР L',
                            img: 'https://i-modelist.ru/file/i/640/640/8d5cb430/27cb2f307d3c3b59146a5bac6f220ed8.jpg',
                            url:'https://i-modelist.ru/goods/226/2508/61763.html'
                        },
                        {
                            title: 'Gansai Kuretake',
                            description: 'Набор акварельных красок.',
                            img: 'https://ir.ozone.ru/s3/multimedia-w/wc700/6058736552.jpg',
                            url:'https://www.ozon.ru/product/nabor-akvarelnyh-krasok-gansai-tambi-ot-kuretake-36-tsvetov-274602723/?asb=DPNE2uEfPiziegB6STJTcgCzdCFXg2DBHcCLwZHcHkM%253D&asb2=bTk-eflX5v58C5s3XwAAnvAHU9XeZQIKwHWCvj5BarJh5sEZ-67P96cksyDQKp-6&avtc=1&avte=2&avts=1685432412&keywords=%D0%B0%D0%BA%D0%B2%D0%B0%D1%80%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5+%D0%BA%D1%80%D0%B0%D1%81%D0%BA%D0%B8+%D0%B8%D0%B7+%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8&sh=viUNDnC28w'
                        },
                        {
                            title: 'Pentel Brush',
                            description: 'Кисть с резервуаром.',
                            img: 'https://ir.ozone.ru/multimedia/wc700/1011625683.jpg',
                            url:'https://www.ozon.ru/product/kist-s-rezervuarom-pentel-aquash-brush-tonkaya-10-ml-31371811/?asb=mXCalrmCoFVaNo9ivx4a6M5KP5syr8%252BfRU3dM0qwZWQ%253D&asb2=9CsLzITh0ZsBiKZ09pzbfO3AlcQo4mTMHsDPUx7BsYgwY9faZI8VRC7g5JfGiTXe&avtc=1&avte=2&avts=1685432651&keywords=%D0%9A%D0%B8%D1%81%D1%82%D0%B8+%D1%81+%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D1%83%D0%B0%D1%80%D0%BE%D0%BC+%D0%B4%D0%BB%D1%8F+%D0%B2%D0%BE%D0%B4%D1%8B%2C+%D0%BA%D0%B8%D1%81%D1%82%D0%B8+%D1%81+%D0%B5%D0%BC%D0%BA%D0%BE%D1%81%D1%82%D1%8C%D1%8E+%D0%B4%D0%BB%D1%8F+%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F&sh=viUNDrgK6Q'
                        }
                    ]
                }

            ]
        },
        {
            title: 'Home',
            description: '',
            url: 'home',
            backgroundImage: 'https://oboi-ma.ru/f/product/7668.jpg',
            imageTemplate: BackgroundImageEnum.CONTAIN,
            sections: [
                {
                    title: 'Textile',
                    description: 'coziness',
                    template: SectionTemplateEnum.GRID_STICKER,
                    cards: [
                        {
                            title: 'Наволочки',
                            description: 'Комплект чехлов на подушку Ikea Svardtag Floral Pattern, 50x50 см',
                            img: 'https://static.cdek.shopping/images/shopping/519efee9507d47f7836187b82ff5b010.jpeg',
                            url:'https://cdek.shopping/p/3153230/komplekt-cexlov-na-podusku-ikea-svardtag-floral-pattern-50x50-sm-2-predmeta-zeltyi'
                        },
                        {
                            title: 'Наволочка',
                            description: 'Декоративная наволочка H&M Home Patterned Floral, зеленый',
                            img: 'https://static.cdek.shopping/images/shopping/8a21427127d247ceb04d45d279580f6b.jpg',
                            url:'https://cdek.shopping/p/3219536/dekorativnaya-navolocka-hm-home-patterned-floral-zelenyi'
                        },
                        {
                            title: 'Чехол',
                            description: 'Чехол на подушку Zara Home Christmas Cushion Cover',
                            img: 'https://static.cdek.shopping/images/shopping/44e27dea25b54ce486f9f8fc846d6a43.jpg',
                            url:'https://cdek.shopping/p/4261070/cexol-na-podusku-zara-home-christmas-cushion-cover-belyi'
                        },
                        {
                            title: 'Подушка',
                            description: 'Декоративная подушка Zara Home Round Floral.',
                            img: 'https://static.zarahome.net/8/photos4/2023/V/4/1/p/2622/009/727/2622009727_2_4_1.jpg?t=1668074565692',
                            url:'https://cdek.shopping/p/386715/dekorativnaya-poduska-zara-home-round-floral-vanilnyi'
                        },
                        {
                            title: 'Подушка из льна',
                            description: 'Nobodinoz "Lin Francais Leaf Noisette".',
                            img: 'https://bunnyhill.ru/upload/iblock/9cc/i2k1dwyx5aq2g3zxtmppnmj8x6oc0hbo/D22LINLEAF-005_1.jpg',
                            url:'https://bunnyhill.ru/catalog/podushka-iz-lna-nobodinoz-lin-francais-leaf-noisette-korichnevaya-25-kh-35-sm/'
                        },
                        {
                            title: 'Подушка',
                            description: 'Nobodinoz "Sublim Flore", нежность цветов.',
                            img: 'https://bunnyhill.ru/upload/iblock/fcb/i1lac6x2d5cn3w45hno404zbezzrs7uz/sublim-cushion-20x35-nobodinoz_OB.jpg',
                            url:'https://bunnyhill.ru/catalog/podushka-dekorativnaya-nobodinoz-sublim-flore-nezhnost-tsvetov-20-x-35-sm/'
                        },
                        {
                            title: 'LUKNO',
                            description: 'Овечка Мама в корзинке.',
                            img: 'https://bunnyhill.ru/upload/iblock/94e/wcm7kxl388ps9nk14nwj78x4bpisic32/%D0%BE%D0%B2%D0%B5%D1%87%D0%BA%D0%B8_04.jpg',
                            url:'https://bunnyhill.ru/catalog/ovechka-lukno-mama-marta-v-korzinke/'
                        },
                        {
                            title: 'LUKNO',
                            description: 'Зайка "Фея", серия Iskusno.',
                            img: 'https://bunnyhill.ru/upload/iblock/983/lx9x6gm1vkl8t7jv8b1b7id3a1sfei5v/%D0%B7%D0%B0%D1%8F%D1%86_03.jpg',
                            url:'https://bunnyhill.ru/catalog/zayka-lukno-starshaya-sestra-feya/'
                        },
                        {
                            title: 'Фартук',
                            description: 'Фартук с водоотталкивающим покрытием',
                            img: 'https://www.togas.com/media/catalog/product/cache/536b760c7743b9af85d9cdc069dd9c7b/_/2/_2_3_1_f732.jpg',
                            url:'https://www.togas.com/ru/fartuk-kelli-1001030081.html'
                        },
                        {
                            title: 'Свитшот',
                            description: 'Свитшот Konges Slojd "Lou Almond Milk", миндальное молоко',
                            img: 'https://bunnyhill.ru/upload/iblock/88a/7kfs091oqjsp5pd933cn7842w9kw83la/LOU_SWEATSHIRT-Blouses-KS3749-ALMOND_MILK-1.jpg',
                            url:'https://bunnyhill.ru/catalog/svitshot-konges-slojd-lou-mindalnoe-moloko/'
                        },
                        {
                            title: 'Платье',
                            description: 'Платье-колокольчик BUG LOVERS, светло-желтое',
                            img: 'https://bunnyhill.ru/upload/iblock/5de/yoe50kodtg9jp7y3jcghmn79eem0hs5o/100-21-1_3.jpg',
                            url:'https://bunnyhill.ru/catalog/plate-kolokolchik-bug-lovers-svetlo-zheltoe/'
                        }
                    ]
                },
                {
                    title: 'Tableware',
                    description: 'best decision',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    imageTemplate: BackgroundImageEnum.CONTAIN,
                    backgroundImage: 'https://oboi-ma.ru/f/product/2011.jpg',
                    cards: [
                        {
                            title: 'Тарелка',
                            description: 'Тарелка десертная Мартинелли',
                            img: 'https://www.togas.com/media/catalog/product/cache/536b760c7743b9af85d9cdc069dd9c7b/M/A/MARTINELLI_COUPLE_PLATE_DESSERT_cc93.jpg',
                            url:'https://www.togas.com/ru/tarelka-desertnaja-martinelli-sentiment-102400144.html'
                        },
                        {
                            title: 'Тарелка',
                            description: 'Тарелка суповая Мартинелли',
                            img: 'https://www.togas.com/media/catalog/product/cache/536b760c7743b9af85d9cdc069dd9c7b/M/A/MARTINELLI_COUPLE_PLATES_LS_DTL_01_b0a2.jpg',
                            url:'https://www.togas.com/ru/tarelka-supovaja-martinelli-sentiment-102400142.html'
                        },
                        {
                            title: 'Тарелка',
                            description: 'Тарелка обеденная Мартинелли ',
                            img: 'https://www.togas.com/media/catalog/product/cache/536b760c7743b9af85d9cdc069dd9c7b/M/A/MARTINELLI_COUPLE_PLATE_B_f53e.jpg',
                            url:'https://www.togas.com/ru/tarelka-obedennaja-martinelli-sentiment-102400139.html'
                        },
                        {
                            title: 'Чашка',
                            description: 'Чашка для чая Нарцисс',
                            img: 'https://www.togas.com/media/catalog/product/cache/536b760c7743b9af85d9cdc069dd9c7b/C/U/CUP_TULIP_LS_VRTCL_c76a.jpg',
                            url:'https://www.togas.com/ru/chashka-dlja-chaja-narciss-102400057.html'
                        },
                        {
                            title: 'Чашка',
                            description: 'Чашка для чая Лотос',
                            img: 'https://www.togas.com/media/catalog/product/cache/536b760c7743b9af85d9cdc069dd9c7b/C/U/CUP_LOTUS_LS_VRTCL_ed03.jpg',
                            url:'https://www.togas.com/ru/chashka-dlja-chaja-lotos-102400054.html'
                        },
                        {
                            title: 'Стаканы',
                            description: 'Набор стаканов 4 штуки Ikea',
                            img: 'https://static.cdek.shopping/images/shopping/fw/525/525/22e5ce4a008c43d3a5fa3458706381e4.jpg',
                            url:'https://cdek.shopping/p/622878/nabor-stakanov-4-stuki-27-ml-ikea-prozracnyi'
                        }
                    ]
                },
                {
                    title: 'Decoration',
                    description: 'Something useful',
                    template: SectionTemplateEnum.GRID_STICKER,
                    cards: [
                        {
                            title: 'Мини-футляр',
                            description: 'Zara Home Floral Design, кремовый/мультиколор',
                            img: 'https://static.cdek.shopping/images/shopping/0b326962663449008415a14e73621170.jpg',
                            url:'https://cdek.shopping/p/437468/mini-futlyar-zara-home-floral-design-belyimultikolor'
                        },
                        {
                            title: 'Ланч-бокс',
                            description: 'Monbento, MB Square, sakura pink',
                            img: 'https://ir.ozone.ru/s3/multimedia-4/c1000/6192313480.jpg',
                            url:'https://designboom.ru/catalog/product/lanch-boks-mb-square-sakura-pink/'
                        },
                        {
                            title: 'Ланч-бокс',
                            description: 'Monbento, MB Gram, fox',
                            img: 'https://cdn1.ozone.ru/s3/multimedia-t/6500301677.jpg',
                            url:'https://designboom.ru/catalog/product/lanch-boks-mb-gram-fox/'
                        },
                        {
                            title: 'Мешочек',
                            description: 'Мешочек сумка для ланч-бокса MB Pochette L с завязочками, flamingo',
                            img: 'https://ir.ozone.ru/s3/multimedia-i/wc750/6077749218.jpg',
                            url:'https://designboom.ru/catalog/product/meshochek-dlya-lancha-mb-pochette-l-flamingo/'
                        },
                        {
                            title: 'Форма',
                            description: 'Форма для выпечки, 26х10 см,золотистая, Bakery gold',
                            img: 'https://www.kuchenland.ru/upload/iblock/3da/h0jnix5xm06zu9onk0w21z2j20d3van5/acd24537_c878_11ed_a052_9440c9a6d57d_6d4ebb20_6412_11ee_a057_eeb30c7a4302.jpg',
                            url:'https://www.kuchenland.ru/catalog/kukhnya/prigotovlenie-edy-i-napitkov/formy-dlya-vypechki-i-zapekaniya/forma-dlya-vypechki/forma-dlya-vypechki-26kh10-sm-s-otverstiem-silikon-zolotistaya-bakery-gold/'
                        },
                        {
                            title: 'Форма',
                            description: 'Форма для выпечки кексов, 26x24 см, 5 отд, силикон, коричневая, Еж',
                            img: 'https://www.kuchenland.ru/upload/iblock/cbc/xpdm0lco5sry07a2gvzulorx215p5i7g/img_64e0efdbb4a68.jpg',
                            url:'https://www.kuchenland.ru/catalog/kukhnya/prigotovlenie-edy-i-napitkov/formy-dlya-vypechki-i-zapekaniya/forma-dlya-vypechki/forma-dlya-vypechki-keksov-26x24-sm-5-otd-silikon-korichnevaya-ezh-forest-fantasy/'
                        },
                        {
                            title: 'Доска',
                            description: 'Доска Williams Oliver Миндаль 34x22x2,5см, дерево',
                            img: 'https://williams-oliver.ru/image-preview/00010680857_2_10.jpg',
                            url:'https://williams-oliver.ru/product/doska-razdelocnaa-williams-et-oliver-mindal-34x22x2-5sm-derevo-00010680857/'
                        },
                        {
                            title: 'Форма',
                            description: 'Форма для выпечки хлеба антипригарная Nordic Ware Naturals, алюминий, кремовая',
                            img: 'https://williams-oliver.ru/image-preview/00010628615_2_10.jpg',
                            url:'https://williams-oliver.ru/product/forma-dla-vypecki-hleba-antiprigarnaa-nordic-ware-naturals-23h13h7sm-aluminij-kremovaa-00010628615/'
                        },
                        {
                            title: 'Форма',
                            description: 'Форма для выпечки кексов, 27x15 см, 2 отд, силикон, оранжевая, Тыква',
                            img: 'https://www.kuchenland.ru/upload/iblock/2dd/s6wfo862qbq594hdiq6hpljlhz4e0ul4/img_64e0efd098af4.jpg',
                            url:'https://www.kuchenland.ru/catalog/kukhnya/prigotovlenie-edy-i-napitkov/formy-dlya-vypechki-i-zapekaniya/forma-dlya-vypechki/forma-dlya-vypechki-keksov-27x15-sm-2-otd-silikon-oranzhevaya-tykva-forest-fantasy/'
                        },
                        {
                            title: 'Полотенце',
                            description: 'Полотенце кухонное, 40х60 см, хлопок, молочное, Утки',
                            img: 'https://www.kuchenland.ru/upload/iblock/abd/rhsmdo385nrbu1dy9xmxscy3jhf1xv9x/img_64e0cfa9d5407.jpg',
                            url:'https://www.kuchenland.ru/catalog/kukhnya/tekstil-i-aksessuary-dlya-kukhni/kukhonnye-polotentsa/polotentse-kukhonnoe-40kh60-sm-khlopok-molochnoe-utki-duck/'
                        },
                        {
                            title: 'Полотенце',
                            description: 'Полотенце кухонное, 40x60 см, 3 шт, хлопок, зеленое, Хвойный лес',
                            img: 'https://www.kuchenland.ru/upload/iblock/bd0/27005yusm6ixavdgg4enr0pdu18jjst1/4b975b97_c707_11ed_a052_9440c9a6d57d_a76d6440_78ab_11ee_a059_9440c9a6d57d.jpg',
                            url:'https://www.kuchenland.ru/catalog/kukhnya/tekstil-i-aksessuary-dlya-kukhni/kukhonnye-polotentsa/polotentse-kukhonnoe-40x60-sm-3-sht-khlopok-zelenoe-khvoynyy-les-tree/'
                        },
                        {
                            title: 'Доска',
                            description: 'Доска разделочная, 30x23 см, дерево, Noble tree',
                            img: 'https://www.kuchenland.ru/upload/iblock/913/35pg3nh9d8gnf23pvywj230q3uf5bf7c/img_655c61f90193b.jpg',
                            url:'https://www.kuchenland.ru/catalog/kukhnya/prigotovlenie-edy-i-napitkov/razdelochnye-doski/doska-razdelochnaya-30x23-sm-derevo-noble-tree/'
                        },
                        {
                            title: 'Штамп',
                            description: 'Пряничные штампы Пчёлкина радость',
                            img: 'https://static.insales-cdn.com/r/ep56ZPjM7fA/rs:fit:550:550:1/plain/images/products/1/5072/736703440/DSC_3767-3.jpg@webp',
                            url:'https://www.texturra.ru/product/pryanichnye-shtampy-medovye_novinka'
                        },
                        {
                            title: 'Форма',
                            description: 'Пряничная форма Жёлудь&листочек',
                            img: 'https://static.insales-cdn.com/r/yVRZmgtj0o0/rs:fit:550:550:1/plain/images/products/1/5548/479262124/%D0%B6%D0%B5%D0%BB%D1%83%D0%B4%D1%8C_%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%B5%D0%BA.jpg@webp',
                            url:'https://www.texturra.ru/product/pryanichnaya-doska-zhyoludlistochek-3'
                        },
                        {
                            title: 'Форма',
                            description: 'Пряничная форма Камелия',
                            img: 'https://static.insales-cdn.com/r/Y2t_mck3pWU/rs:fit:550:550:1/plain/images/products/1/3680/691056224/14.jpg@webp',
                            url:'https://www.texturra.ru/product/pryanichnaya-forma-mandala'
                        },
                        {
                            title: 'Штамп',
                            description: 'Пряничный штамп Прованская роза',
                            img: 'https://static.insales-cdn.com/r/31qHt5DK8qs/rs:fit:550:550:1/plain/images/products/1/3592/479079944/KAN_5368.jpg@webp',
                            url:'https://www.texturra.ru/product/shtamp-provanskaya-sentifoliya'
                        },
                        {
                            title: 'Штамп',
                            description: 'Пряничный штамп Чертополох',
                            img: 'https://static.insales-cdn.com/r/S1NKqWCLD5Q/rs:fit:550:550:1/plain/images/products/1/6341/507435205/3.jpg@webp',
                            url:'https://www.texturra.ru/product/pryanichnyy-shtamp-chertopoloh'
                        },
                        {
                            title: 'Пряности',
                            description: 'Сухие духи для русского пряника',
                            img: 'https://static.insales-cdn.com/r/uDIXQBAtB6g/rs:fit:550:550:1/plain/images/products/1/5058/468300738/%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B8%D0%BA%D0%B8.png@webp',
                            url:'https://www.texturra.ru/product/smes-pryanostey-russkaya-suhie-duhi'
                        },
                        {
                            title: 'Pumpkin spice',
                            description: 'Органическая приправа для тыквенного пирога',
                            img: 'https://ir.ozone.ru/s3/multimedia-4/wc700/6786698764.jpg',
                            url:'https://www.ozon.ru/product/organicheskaya-priprava-dlya-tykvennogo-piroga-simply-organic-pumpkin-spice-55-g-1220761267/?_bctx=CAMQ1NfOKQ&asb=B8KpmDZ0tia6DU1F9RtRu9YKpHhJrIDe5ONr8yX05jY%253D&asb2=gq9t4eu62yy7gBZoRx2Moi_gIZShKKBdWQ2W_f-WYOWFntakf4NWutl2ncJtZJqp&avtc=1&avte=2&avts=1700566183'
                        },
                        {
                            title: 'Citrus seasoning',
                            description: 'Simply Organic, Цитрусовая приправа, Без соли',
                            img: 'https://ir.ozone.ru/s3/multimedia-7/wc700/6065535847.jpg',
                            url:'https://www.ozon.ru/product/simply-organic-tsitrusovaya-priprava-bez-soli-63-g-270012565/?_bctx=CAMQ1NfOKQ&asb=QtJEMCFsvg4ZEVSLhKtflWXtQz38kjw4oZ4h3%252BFxWKIRWe24lCPdYIGH4qiUJe3S&asb2=18ElGUojO5BPWHXNZwj7ae3SMVQtDF3EP8te4vOA2c_FMhzBRiy_Av7vB1t9WLBYUQrrTAEeKRS-tWHNkMazxsa8pFpBedV8paagM1vMSYs8tlTGVxesm7ZHea4NzoryhLfQGN44nCrQNxQJW5__Nen3hyq8L7vIKsha_U3Mp6U&avtc=1&avte=2&avts=1700566216'
                        },
                        {
                            title: 'Adobo seasoning',
                            description: 'Simply Organic, Приправа Adobo',
                            img: 'https://ir.ozone.ru/s3/multimedia-2/wc700/6595729382.jpg',
                            url:'https://www.ozon.ru/product/simply-organic-priprava-adobo-125-g-903026530/?_bctx=CAMQ1NfOKQ&asb=kJABkkWL0Tnu2BNMViK%252BDYVRSUecRbIKweS6pzB4Geo%253D&asb2=SxcqI9tgERacfPIdlqDI_llgbQNhEfO8r9ISY1OmAfCf_aIVkyZUNNKa2pwJQDnH&avtc=1&avte=2&avts=1700566216'
                        },
                        {
                            title: 'Ceylon cinnamon',
                            description: 'Simply Organic, приправа Органическая цейлонская корица',
                            img: 'https://ir.ozone.ru/s3/multimedia-k/wc700/6557973920.jpg',
                            url:'https://www.ozon.ru/product/simply-organic-priprava-organicheskaya-tseylonskaya-koritsa-ceylon-cinnamon-59gr-864568246/?_bctx=CAMQ1NfOKQ&asb=uMh6PqHsQeMhH2DWes7ZksaoNh2pQtViDSSMBiVGlNQ%253D&asb2=e5Q7x_Ey7WUuyZlCECb7Y4JYBLObkO1H8tp4T4gCYl9fHnw5k9acuWr4CuWzaZEc&avtc=1&avte=2&avts=1700566216'
                        }
                    ]
                }
            ]
        }

    ]
}