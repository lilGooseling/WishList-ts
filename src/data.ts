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
                    title: 'GUCCI moonlight',
                    description: '«Лунная серенада» – это лавандовая душистая вода.',
                    img: 'https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/3/6/3614227575981_1_v0fl6jcjrlqmilqw.jpg',
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
                        },
                        {
                            title: 'Hickory Dickory',
                            description: 'Еще одна игра от Plaid Hat Games',
                            img: 'https://www.hickorydickorygame.com/photos/Hickory%20Dickory-004.jpg',
                            url:'https://rusboardgame.ru/'
                        }
                        ]
                },
                {
                    title: 'Sport',
                    description: 'Do my best',
                    template: SectionTemplateEnum.GRID_GRADIENT,
                    cards: [
                        {
                            title: 'Футболка Relaxed',
                            description: 'Relaxed меланж, Футболка с коротким рукавом, можно парочку',
                            img: 'https://image.12storeez.com/images/750xP_90_out/uploads/images/CATALOG/dresses/106852/6049d4fc73f35-24-02-202153122.jpg',
                            url:'https://12storeez.com/catalog/t-shirts/futbolka-relaxed-melanz-107302'
                        },
                        {
                            title: 'Бейсболка',
                            description: 'Карамельная бейсболка с жестким козырьком.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/Accessories/122188/63dd0740ea53d-28-01-20230019-2.jpg',
                            url:'https://12storeez.com/catalog/bags/womencollection/bejsbolka-122188'
                        },
                        {
                            title: 'Шорты джинсовые',
                            description: 'Шорты из органического хлопка с отворотами.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/shirts/113820/623a51be53977-17-03-202254988.jpg',
                            url:'https://12storeez.com/catalog/bruki/womencollection/sorty-dzinsovye-s-otvorotami-113820'
                        },
                        {
                            title: 'Сумка',
                            description: 'Спортивная теннисная сумка Wilson Team RG 3.',
                            img: 'https://cdn.sportmaster.ru/upload/resize_cache/iblock/37d/800_800_1/59026310299.jpg',
                            url:'https://www.sportmaster.ru/product/26409910299/'
                        },
                        {
                            title: 'Мячи',
                            description: 'Набор мячей Wilson US Open XD TBall',
                            img: 'https://cdn.sportmaster.ru/upload/resize_cache/iblock/40e/800_800_1/57976040299.jpg',
                            url:'https://www.sportmaster.ru/product/18263400299/'
                        },
                        {
                            title: 'Коврик',
                            description: 'Ковры JADE HARMONY. Подходит для ежедневных практик.',
                            img: 'https://jadeyoga.ru/wp-content/uploads/2021/06/product-main-pic-new.jpg',
                            url:'https://jadeyoga.ru/product/jade-harmony/'
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
                            description: 'Луиза Мэй Олкотт, Серия Exclusive Classics.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/29/250/2925075.jpg',
                            url:'https://www.chitai-gorod.ru/product/little-women-2925075'
                        },
                        {
                            title: 'Anne of Green Gables',
                            description: 'L.M. Montgomery, Люси Монтгомери, Серия Wordsworth Classics.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/27/248/2724882.jpg',
                            url:'https://www.chitai-gorod.ru/product/anne-of-green-gables-2724882'
                        },
                        {
                            title: 'The Secret Garden',
                            description: 'Фрэнсис Ходжсон Бернетт, Серия Collector`s Editions. ',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/27/248/2724893.jpg',
                            url:'https://www.chitai-gorod.ru/product/the-secret-garden-2724893'
                        },
                        {
                            title: 'The Jungle Book',
                            description: 'Joseph Kipling, Серия Collector`s Editions.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/27/248/2724885.jpg',
                            url:'https://www.chitai-gorod.ru/product/the-jungle-book-2724885?productShelf=&shelfIndex=0&productIndex=3'
                        },
                        {
                            title: 'The Wind in the Willows',
                            description: 'Kenneth Grahame, Серия Palmyra Classics.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/29/777/2977759.jpg',
                            url:'https://www.chitai-gorod.ru/product/the-wind-in-the-willows-2977759?productShelf=&shelfIndex=0&productIndex=4'
                        },
                        {
                            title: 'Pride and Prejudice',
                            description: 'Джейн Остен, Эксмо. ',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/26/094/2609407.jpg',
                            url:'https://www.chitai-gorod.ru/product/gordost-i-predubezhdenie-pride-and-prejudice-2609407'
                        },
                        {
                            title: 'Little Dorrit',
                            description: 'Charles Dickens, Penguin Books.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/23/855/2385597.jpg',
                            url:'https://www.chitai-gorod.ru/product/little-dorrit-2385597'
                        },
                        {
                            title: 'Таинственный сад',
                            description: 'Фрэнсис Ходжсон Бернетт, АСТ.',
                            img: 'https://cdn.img-gorod.ru/310x500/nomenclature/25/620/2562084.jpg',
                            url:'https://www.chitai-gorod.ru/product/tainstvennyy-sad-2562084'
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
                            title: 'Ботанические сказки',
                            description: 'Мамин-Сибиряк, Куприн, Андерсен, ЭНАС-КНИГА.',
                            img: 'https://img3.labirint.ru/rc/95583423e732c13508689de61c7a22dd/363x561q80/books60/599813/cover.png?1664353518',
                            url:'https://www.labirint.ru/books/599813/'
                        },
                        {
                            title: 'Книга Нового года и Рождества',
                            description: 'Нестерова Наталия Петровна, Манн, Иванов и Фербер.',
                            img: 'https://img3.labirint.ru/rc/ea2cff46e3585742cd23987ed3b7c66e/363x561q80/books46/458915/cover.jpg?1414517146',
                            url:'https://www.labirint.ru/books/458915/'
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
                            title: 'Коврик',
                            description: 'Ковры JADE HARMONY. Подходит для ежедневных практик.',
                            img: 'https://jadeyoga.ru/wp-content/uploads/2021/06/product-main-pic-new.jpg',
                            url:'https://jadeyoga.ru/product/jade-harmony/'
                        },
                        {
                            title: 'Жилет с молнией',
                            description: 'Жилет с высоким воротником и широкими проймами.',
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
            title: 'Home',
            description: '',
            url: 'home',
            backgroundImage: 'https://cdn.shoplightspeed.com/shops/640016/files/53818311/image.jpg',
            imageTemplate: BackgroundImageEnum.CONTAIN,
            sections: [
                {
                    title: 'Painting & miniatures',
                    description: 'Do my best',
                    template: SectionTemplateEnum.GRID_SHADOW,
                    cards: [
                        {
                            title: 'Футболка Relaxed',
                            description: 'Relaxed меланж, Футболка с коротким рукавом, можно парочку',
                            img: 'https://image.12storeez.com/images/750xP_90_out/uploads/images/CATALOG/dresses/106852/6049d4fc73f35-24-02-202153122.jpg',
                            url:'https://12storeez.com/catalog/t-shirts/futbolka-relaxed-melanz-107302'
                        },
                        {
                            title: 'Бейсболка',
                            description: 'Карамельная бейсболка с жестким козырьком.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/Accessories/122188/63dd0740ea53d-28-01-20230019-2.jpg',
                            url:'https://12storeez.com/catalog/bags/womencollection/bejsbolka-122188'
                        },
                        {
                            title: 'Шорты джинсовые',
                            description: 'Шорты из органического хлопка с отворотами.',
                            img: 'https://image.12storeez.com/images/800xP_90_out/uploads/images/CATALOG/shirts/113820/623a51be53977-17-03-202254988.jpg',
                            url:'https://12storeez.com/catalog/bruki/womencollection/sorty-dzinsovye-s-otvorotami-113820'
                        },
                        {
                            title: 'Сумка',
                            description: 'Спортивная теннисная сумка Wilson Team RG 3.',
                            img: 'https://cdn.sportmaster.ru/upload/resize_cache/iblock/37d/800_800_1/59026310299.jpg',
                            url:'https://www.sportmaster.ru/product/26409910299/'
                        },
                        {
                            title: 'Мячи',
                            description: 'Набор мячей Wilson US Open XD TBall',
                            img: 'https://cdn.sportmaster.ru/upload/resize_cache/iblock/40e/800_800_1/57976040299.jpg',
                            url:'https://www.sportmaster.ru/product/18263400299/'
                        },
                        {
                            title: 'Коврик',
                            description: 'Ковры JADE HARMONY. Подходит для ежедневных практик.',
                            img: 'https://jadeyoga.ru/wp-content/uploads/2021/06/product-main-pic-new.jpg',
                            url:'https://jadeyoga.ru/product/jade-harmony/'
                        },
                        {
                            title: 'Жилет с молнией',
                            description: 'Жилет с высоким воротником и широкими проймами.',
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
        }

    ]
}