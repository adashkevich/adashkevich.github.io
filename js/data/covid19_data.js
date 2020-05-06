const COLOR_RED = "#f04048";
const COLOR_YELLOW = "#ffce27";
const COLOR_BLUE = "#40a8f0";
const COLOR_GRAY = "#999999";

let covid19Data = [
    {
        id: "PL",
        name: "Польша",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Запрет на въезд для иностранцев с 15 марта"
            },
            {
                title: "Ограничена деятельность торговых центров, заведений общепита"
            },
            {
                title: "запрещаются массовые мероприятия с участием более 50 человек"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "UA",
        name: "Украина",
        fill: COLOR_RED,
        info: [
            {
                title: "Запрет на въезд для иностранцев с 16 марта"
            },
            {
                title: "Закрываются школы и университеты"
            },
            {
                title:
                    "Ограничивается проведение массовых мероприятий и спортивных соревнований"
            }
        ]
    },
    {
        id: "LT",
        name: "Литва",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Запрет на въезд иностранцам",
                description:
                    "кроме тех случаев, когда речь идет о транспортировке товаров, наличии вида на жительство" +
                    " в Литве или разрешения на работу. Запрет также не распространяется на дипломатов и военнослужащих" +
                    " стран НАТО, которые дислоцируются в подразделениях в Литве. Будет предоставлен гуманитарный коридор" +
                    " гражданам Латвии и Эстонии для возвращения домой. Кроме того, до 00.00 19 марта разрешен транзит тех, кто" +
                    " возвращается в свою страну проживания"
            },
            {
                title:
                    "Сократится количество пограничных пропускных пунктов, через которые можно будет въехать в Литву"
            },
            {
                title:
                    "Гражданам Литвы запретили ездить в затронутые коронавирусом страны"
            },
            {
                title: "Запрещается торговля в магазинах",
                description:
                    "кроме продовольственных, аптек, специализированных ветеринарных аптек, рынков," +
                    " торгующих пищевыми продуктами. При этом власти обещают, что границы для товаров закрывать не будут."
            },
            {
                title:
                    "Закрываются кафе, бары, рестораны, за исключением услуг еды на вынос"
            },
            {
                title: "Услуги СПА, парикмахеров, салонов красоты также отменяются"
            },
            {
                title:
                    "Запрещаются все мероприятия, как в закрытых помещениях, так и на воздухе"
            },
            {
                title: "Запрещается вход круизных лайнеров в Клайпедский порт"
            },
            {
                title: "Пациенты не должны посещать лечебные учреждения"
            },
            {
                title:
                    "В лечебных учреждениях откладываются плановые операции, за исключением необходимой медицинской помощи"
            },
            {
                title: "Отменяется посещение заключенных в тюрьмах"
            },
            {
                title:
                    "Гостиницы обязали, при необходимости, размещать людей на карантин",
                description: "государство будет это оплачивать"
            },
            {
                title: "Учреждения образования остаются закрытыми"
            },
            {
                title:
                    "Pаботникам государственного и частного сектора рекомендуется работать на дому"
            }
        ] //https://news.tut.by/world/676431.html
    },
    {
        id: "LV",
        name: "Латвия",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title:
                    "Пассажирские перевозки остановлены с 17 марта по 14 апреля. Ни самолеты, ни паромы, ни автобусы в Латвию пропускать не будут.",
                description:
                    "На легковой машине можно вернуться и после 17 марта. У латвийцев есть два дня, чтобы вернуться в страну — позже с этим будут проблемы."
            },
            {
                title:
                    "Посольства и консульства перестают выдавать въездные визы иностранцам"
            },
            {
                title: "Массовые мероприятия запрещены",
                description:
                    "Неорганизованно можно собираться группами до 50 человек и расходиться до 23 часов"
            },
            {
                title: "Школы и вузы закрыты, но детсады будут работать",
                description:
                    "Под расписку от родителей: они должны каждую неделю приносить " +
                    "заявление, в котором подтверждают, что дети и члены семьи за последние 14 дней не были в зоне, пораженной " +
                    "коронавирусом и не контактировали с зараженными COVID-19"
            },
            {
                title:
                    "Государственные централизованные экзамены в школах переносятся на май"
            }
        ] //https://news.tut.by/world/676431.html
    },
    {
        id: "EE",
        name: "Эстония",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "В страну смогут въехать только граждане Эстонии",
                description:
                    "А жители страны, имеющиевид на жительство или разрешение на проживание, например, обладатели серых паспортов. А также те иностранцы и иностранные граждане, члены семьи которых живут в Эстонии"
            },
            {
                title:
                    "Приостановлена продажа билетов на популярные круизные рейсы по маршруту Таллин — Стокгольм — Таллин"
            },
            {
                title: "Закрываются музеи и кинотеатры"
            },
            {
                title: "апрещаются массовые мероприятия"
            }
        ] //https://news.tut.by/world/676431.html
    },
    {
        id: "RU",
        name: "Россия",
        fill: COLOR_YELLOW,
        info: [
            {
                title:
                    "с 16 марта ограничено регулярное авиасообщение со всеми странами Евросоюза",
                description: "кроме рейсов из Москвы в столицы и обратно",
                //datetime: "2020-03-16 15:07:00"
            },
            {
                title: "Прекращён пропуск через границу граждан Италии",
                //datetime: "2020-03-16 23:07:00"
            },
            {
                title:
                    "Москва и Санкт-Петербург объявили об ограничении массовых мероприятий"
            },
            {
                title: "Закрыта граница с Республикой Беларусь"
            }
        ] //https://news.tut.by/world/676373.html, https://news.tut.by/economics/676483.html
    },
    {
        id: "IL",
        name: "Израиль",
        fill: COLOR_YELLOW,
        info: [
            {
                title:
                    "Ввели двухнедельный карантин для всех въезжающих в страну в период с 9 по 23 марта"
            },
            {
                title:
                    "Начиная с 12 марта граждане, намеревающиеся посетить Израиль, должны за 5 дней до визита направить запрос в адрес посольства Израиля"
            },
            {
                title:
                    "Въезд в страну может быть осуществлен лишь после получения соответствующего подтверждения посольства"
            }
        ] //https://news.tut.by/society/675840.html
    },
    {
        id: "IT",
        name: "Италия",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "C 10 марта ввели карантин",
                description:
                    "Передвижения по стране возможны только при наличии веских причин: по работе или по состоянию здоровья"
            },
            {
                title:
                    "Запретили все массовые мероприятия, закрыты школы и университеты, магазины (кроме продуктовых), бары и рестораны"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "TR",
        name: "Турция",
        fill: COLOR_RED,
        info: [
            {
                title: "Необходимо соблюдать режима самоизоляции в течение 14 дней после посещения следующих стран – Китайская Республика, Иран, Ирак, Италия, Южная Корея, Германия, Франция, Испания, Норвегия, Дания, Бельгия, Австрия, Швеция и Нидерланды",
                datetime: "2020-14-03"
            },
            {
                title: "Перенос туристического сезон с марта, на конце апреля"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "CY",
        name: "Кипр",
        fill: COLOR_RED,
        eu: true,
        info: [
            {
                title: "С 15 марта на две недели закроет въезд для иностранцев",
                description:
                    "Которые не имеют аккредитации в этой стране. Ограничения не затронут граждан ЕС или третьих стран, которые законно проживают или работают на территории Кипра, являются членами дипломатического корпуса либо приезжают в страну по неотложным профессиональным обязанностям при условии, что получили разрешение от соответствующего министерства, а также студентов"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "US",
        name: "США",
        fill: COLOR_YELLOW,
        info: [
            {
                title: "13 марта объявлен общенациональный режим ЧС"
            },
            {
                title: "С 13 марта на месяц закрыт въезд из Европы"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "KZ",
        name: "Казахстан",
        fill: COLOR_RED,
        info: [
            {
                title: "Запрещены все массовые мероприятия",
                description:
                    "Отменили военный парад, посвященный 75-летию Победы, и мероприятия по празднованию Наурыза"
            },
            {
                title: "Школьников с 16 марта отправляют на каникулы до 5 апреля"
            },
            {
                title: "Вузы переводят на дистанционное обучение"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "BY",
        name: "Беларусь",
        fill: COLOR_BLUE,
        info: [
            {
                title: "Позиция Минздрава: на данный момент вводить карантин в школах нецелесообразно.",
                description:
                    `Дети в большинстве своем не болеют коронавирусом, а если и болеют, то переносят болезнь бессимптомно,
                     — объяснила на прошлой неделе замначальника отдела гигиены, эпидемиологии и профилактики Минздрава Инна Карабан`,
                datetime: "2020-03-16 23:30"
            },
        ]
    },
    {
        id: "AM",
        name: "Армения",
        fill: COLOR_BLUE,
        info: [
            {
                title: "Граждане Китая (Народная Республика) с обычным паспортом больше не освобождаются от получения визы",
                site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
            },
            {
                title: "Граждане Ирана больше не могут получить визу по прибытии",
                site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
            },
            {
                title: "С 13 марта закрывает на карантин все образовательные учреждения"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "NO",
        name: "Норвегия",
        fill: COLOR_RED,
        schengen: true,
        info: [
            {
                title: "С 16 марта закрывают все границы"
            },
            {
                title:
                    "С 12 марта ввели 14-дневный карантин для всех, кто после 27 февраля вернулся и возвращается не из стран Скандинавии"
            },
            {
                title: "Туристы тоже рискуют попасть в такой же 14-дневный карантин"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "FR",
        name: "Франция",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title:
                    "С полудня 17 марта на 15 дней вводится временное ограничение на перемещение по стране"
            },
            {
                title:
                    "Запрещаются семейные и дружеские встречи. Нарушителям грозят санкции"
            },
            {
                title:
                    "С 16 марта закроют сады, школы и университеты «до дальнейшего уведомления»"
            },
            {
                title:
                    "С 00:00 15 марта во Франции закрывают большинство магазинов, ресторанов, кинотеатров, ночных клубов и других развлекательных заведений",
                description:
                    "Людям рекомендуют оставаться дома"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "CZ",
        name: "Чехия",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "C 16 марта полностью закрывает свои границы",
                description:
                    "Страна запрещает въезд на свою территорию всем иностранцам, за исключением тех, у кого есть разрешение на постоянное или временное пребывание в стране"
            },
            {
                title: "Всем жителям страны запрещается покидать ее"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "SK",
        name: "Словакия",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Словакия  закрыла въезд для иностранцев из-за коронавируса"
            },
            {
                title: "Объявлено чрезвычайное положение"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "HU",
        name: "Венгрия",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Венгрия  закрыла въезд для иностранцев из-за коронавируса"
            },
            {
                title: "Объявлено чрезвычайное положение"
            },
            {
                title: "Закрывает учебные заведения"
            },
            {
                title: "Введён запрет на проведение массовых мероприятий"
            },
            {
                title:
                    "Запрет на поездки в Венгрию из Италии, Китая, Южной Кореи и Ирана"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "SE",
        name: "Швеция",
        fill: COLOR_BLUE,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Запрет на массовые мероприятия с участием более 500 человек"
            }
        ] //https://news.tut.by/world/676373.html
    },
    {
        id: "GE",
        name: "Грузия",
        fill: COLOR_RED,
        info: [
            {
                title: "C 18 марта на две недели закрыты границы",
                description:
                    "Запрет не коснется аккредитованных в Грузии сотрудников дипломатических миссий, членов международных организаций и их семей, а также смешанных семей, в которых один из супругов или ребенок являются гражданами другой страны. В случае приезда иностранных делегаций вопрос об их пропуске будет рассматриваться в индивидуальном порядке"
            },
            {
                title: "Закрыты образовательные учреждения"
            },
            {
                title: "Отменены спортивные и развлекательные мероприятия"
            },
            {
                title: "Государственные ведомства работают дистанционно"
            }
        ] //https://lenta.ru/news/2020/03/16/gruzia/
    },

    {
        id: "MT",
        name: "Мальта",
        fill: COLOR_YELLOW,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Обязательный карантин для всех въезжающих"
            }
        ]
    },
    {
        id: "RO",
        name: "Румыния",
        fill: COLOR_YELLOW,
        eu: true,
        info: [
            {
                title:
                    "Румыния закрыла границы с Молдовой, Венгрией, Украиной, Болгарией и Сербией"
            }
        ]
    },
    {
        id: "CH",
        name: "Швейцария",
        fill: COLOR_RED,
        schengen: true,
        info: [
            {
                title: "Швейцария частично закрыла границу с Италией из-за коронавируса"
            }
        ]
    },
    {
        id: "ES",
        name: "Испания",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title:
                    "Правительство Испании ввело 15-дневный общенациональный карантин с 16 марта",
                description:
                    "Людям будет разрешено выходить из дома только в случае необходимости - за продуктами, на работу и по важным делам, а также в чрезвычайных ситуациях"
            }
        ]
    },
    {
        id: "DE",
        name: "Германия",
        schengen: true,
        eu: true,
        fill: COLOR_RED,
        info: [
            {
                title: "Граждане должны отказаться от поездок внутри и за пределы страны",
                description: "ночевки в туристических целях недопустимы",
                datetime: "2020-03-16"
            },
            {
                title:  "Закрыты магазины, бары, рестораны, театры, музеи, школы, университеты, спортклубы и других заведений",
                datetime: "2020-03-16"
            },
            {
                title: "ФРГ частично закрыла границы с пятью европейскими странами",
                description:
                    "В качестве меры борьбы с распространением коронавируса Германия решила закрыть участки границы с Францией, Австрией, Швейцарией, Люксембургом и Данией"
            }
        ]
    },
    {
        id: "DK",
        name: "Дания",
        schengen: true,
        eu: true,
        fill: COLOR_RED,
        info: [
            {
                title: "Дания закрыла въезд для иностранцев из-за коронавируса"
            }
        ]
    },
    {
        id: "SI",
        name: "Словения",
        fill: COLOR_YELLOW,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Словения закрыла границу с Италией"
            }
        ]
    },
    {
        id: "RS",
        name: "Сербия",
        fill: COLOR_RED,
        info: [
            {
                title: "Сербия закрыла въезд для иностранцев из-за коронавируса"
            }
        ]
    },
    {
        id: "MD",
        name: "Молдова",
        fill: COLOR_RED,
        info: [
            {
                title: "Молдова закрыла въезд для иностранцев из-за коронавируса"
            }
        ]
    },
    {
        id: "AT",
        name: "Австрия",
        fill: COLOR_RED,
        schengen: true,
        eu: true,
        info: [
            {
                title: "Австрия закрыла въезд для иностранцев из-за коронавируса"
            }
        ]
    },
    {
        id: "HR",
        name: "Хорватия",
        fill: COLOR_YELLOW,
        eu: true,
        info: [
            {
                title: "Обязательный каранти для вьезжающих"
            }
        ]
    },
{id: 'AU', name: 'Австралия', fill:  COLOR_YELLOW, info: [
        {
            title: "С 15 марта введен 14-дневный карантин для всех приезжающих",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Люди, побывавшие в Китае, Иране, Южной Корее, Италии в течение последних 14 дней, не могут посещать Австралию даже транзитом",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'AZ', name: 'Азербайджан', fill:  COLOR_YELLOW, info: [
        {
            title: "Гражданам Китая не разрешается въезжать в Азербайджан, если у них нет визы, полученной до отъезда",
            site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
        },
        {
            title: "Гражданам Бахрейна, Индонезии, Ирана, Израиля, Японии, Кореи (Республика), Кувейта, Малайзии, Омана, Катара Саудовская Аравия, Сингапур, ОАЭ и США не допускаются в Азербайджан, если у них нет визы, полученной до отъезда",
            site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
        },
        {
            title: "Выдача электронных виз и виз по прибытии была приостановлена",
            site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
        },
    ]},
{id: 'AL', name: 'Албания', fill:  COLOR_GRAY, info: []},
{id: 'DZ', name: 'Алжир', fill:  COLOR_GRAY, info: []},
{id: 'AS', name: 'Американское Самоа', fill:  COLOR_GRAY, info: []},
{id: 'AI', name: 'Ангилья', fill:  COLOR_GRAY, info: []},
{id: 'AO', name: 'Ангола', fill:  COLOR_GRAY, info: []},
{id: 'AD', name: 'Андорра', fill:  COLOR_GRAY, info: []},
{id: 'AQ', name: 'Антарктида', fill:  COLOR_GRAY, info: []},
{id: 'AG', name: 'Антигуа и Барбуда', fill:  COLOR_GRAY, info: []},
{id: 'AR', name: 'Аргентина', fill:  COLOR_RED, info: [
        {
            title: "Правительство Аргентины приняло решение на 15 дней закрыты границы из-за угрозы коронавируса",
            description: "Запрет на въезд в страну вводится для всех иностранцев, кроме тех, кто имеет вид на жительство",
            datetime: "2020-03-16"
        }
    ]},
{id: 'AW', name: 'Аруба', fill:  COLOR_GRAY, info: []},
{id: 'AF', name: 'Афганистан', fill:  COLOR_GRAY, info: []},
{id: 'BS', name: 'Багамы', fill:  COLOR_GRAY, info: []},
{id: 'BD', name: 'Бангладеш', fill:  COLOR_GRAY, info: []},
{id: 'BB', name: 'Барбадос', fill:  COLOR_GRAY, info: []},
{id: 'BH', name: 'Бахрейн', fill:  COLOR_GRAY, info: []},
{id: 'BZ', name: 'Белиз', fill:  COLOR_GRAY, info: []},
{id: 'BE', name: 'Бельгия', fill:  COLOR_RED, schengen: true, eu: true, info: [
        {
            title: "Бельгия вводит режим карантина по всей стране",
            datetime: "2020-03-17",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'BJ', name: 'Бенин', fill:  COLOR_GRAY, info: []},
{id: 'BM', name: 'Бермудские острова', fill:  COLOR_GRAY, info: []},
{id: 'BG', name: 'Болгария', fill:  COLOR_RED, eu: true, info: []},
{id: 'BO', name: 'Боливия', fill:  COLOR_YELLOW, info: [
        {
            title: "Город Санта-Крус в Боливии для защиты населения от коронавируса с 18 марта 2020 года закрывается на пятидневный карантин",
            datetime: "2020-03-17",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Закрыты с 16 марта все дискотеки, бары, кинотеатры, спортивные залы, парки развлечений и отменила все развлекательные мероприятия",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Боливия с 18 марта запрещается въезд в страну из Европы, в частности из стран Шенгенской зоны и Великобритании, а также из Ирана",
            description: "за исключением граждан своей страны",
            datetime: "2020-03-17",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'BA', name: 'Босния и Герцеговина', fill:  COLOR_BLUE, info: [
    {
        title: "89 случаев заражения. Сербия и Черногория закрыли свои границы. Рекомендуется самоизоляция",
        datetime: "2020-03-20",
        site: "http://ba.n1info.com/Vijesti/a417833/Korona-virus-u-BiH.html",
    }
]},
{id: 'BW', name: 'Ботсвана', fill:  COLOR_GRAY, info: []},
{id: 'BR', name: 'Бразилия', fill:  COLOR_BLUE, info: [
        {
            title: "Введён запрет морских круизов из-за коронавируса",
            datetime: "2020-03-13",
            site: "https://lenta.ru/news/2020/03/16/greeen/",
        }
    ]},
{id: 'IO', name: 'Британская территория в Индийском океане', fill:  COLOR_GRAY, info: []},
{id: 'VG', name: 'Британские Виргинские острова', fill:  COLOR_GRAY, info: []},
{id: 'BN', name: 'Бруней-Даруссалам', fill:  COLOR_GRAY, info: []},
{id: 'BF', name: 'Буркина-Фасо', fill:  COLOR_GRAY, info: []},
{id: 'BI', name: 'Бурунди', fill:  COLOR_GRAY, info: []},
{id: 'BT', name: 'Бутан', fill:  COLOR_GRAY, info: []},
{id: 'VU', name: 'Вануату', fill:  COLOR_GRAY, info: []},
{id: 'VA', name: 'Ватикан', fill:  COLOR_GRAY, info: []},
{id: 'GB', name: 'Великобритания', fill:  COLOR_BLUE, info: []},
{id: 'VE', name: 'Венесуэла', fill:  COLOR_RED, info: [{
        title: "ввели общенациональный карантин из-за коронавируса",
        datetime: "2020-03-17",
        site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
    }]},
{id: 'VI', name: 'Виргинские острова США', fill:  COLOR_GRAY, info: []},
{id: 'VN', name: 'Вьетнам', fill:  COLOR_YELLOW, info: [
        {
            title: "Все пассажиры прибывшие из США, стран Европы, включая Россию, Юго-восточной Азии будут направлены на 14 дневный карантин",
            datetime: "2020-03-18",
            site: "https://vk.com/bookmarks?from_menu=1&w=wall-63731512_1472707%2Fb68354f6647b3e1929&z=photo-63731512_457332910%2Fwall-63731512_1472854"
        },
        {
            title: "Отменена выдача всех видов въездных виза с 18 марта на 30 суток",
            datetime: "2020-03-14",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'GA', name: 'Габон', fill:  COLOR_GRAY, info: []},
{id: 'HT', name: 'Гаити', fill:  COLOR_GRAY, info: []},
{id: 'GY', name: 'Гайана', fill:  COLOR_GRAY, info: []},
{id: 'GM', name: 'Гамбия', fill:  COLOR_GRAY, info: []},
{id: 'GH', name: 'Гана', fill:  COLOR_YELLOW, info: [
        {
            title: "Введено чрезвычайное положение",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Закрыт въезд жителям стран с очагами эпидемии",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'GP', name: 'Гваделупа', fill:  COLOR_GRAY, info: []},
{id: 'GT', name: 'Гватемала', fill:  COLOR_RED, info: [
        {
            title: "Гватемала с 17 марта прекращает авиасообщение по всем направлениям",
            description: "Наземным путем в ходе карантина въехать смогут граждане страны, резиденты и дипломатический корпус",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'GW', name: 'Гвинея-Бисау', fill:  COLOR_GRAY, info: []},
{id: 'GN', name: 'Гвинея', fill:  COLOR_GRAY, info: []},
{id: 'GG', name: 'Гернси', fill:  COLOR_GRAY, info: []},
{id: 'GI', name: 'Гибралтар', fill:  COLOR_GRAY, info: []},
{id: 'NL', name: 'Нидерланды', fill:  COLOR_GRAY, schengen: true, eu: true, info: []},
{id: 'HN', name: 'Гондурас', fill:  COLOR_GRAY, info: []},
{id: 'HK', name: 'Гонконг', fill:  COLOR_YELLOW, info: [
        {
            title: "Введён 14 дневный самокарантин для всех пасссажиров из Европы",
            datetime: "2020-03-13",
            site: "https://lenta.ru/news/2020/03/16/greeen/",
        }
    ]},
{id: 'GD', name: 'Гренада', fill:  COLOR_GRAY, info: []},
{id: 'GL', name: 'Гренландия', fill:  COLOR_RED, info: [
        {
            title: "Был зафиксирован первый случай заражения SARS-CoV-2, несмотря на закрытые границы",
            datetime: "2020-03-16",
            site: "https://lenta.ru/news/2020/03/16/greeen/",
        }
    ]},
{id: 'GR', name: 'Греция', fill:  COLOR_GRAY, schengen: true, eu: true, info: []},
{id: 'GU', name: 'Гуам', fill:  COLOR_GRAY, info: []},
{id: 'CD', name: 'Демократическая Республика Конго', fill:  COLOR_GRAY, info: []},
{id: 'JE', name: 'Джерси', fill:  COLOR_GRAY, info: []},
{id: 'DJ', name: 'Джибути', fill:  COLOR_GRAY, info: []},
{id: 'DO', name: 'Доминиканская Республика', fill:  COLOR_GRAY, info: []},
{id: 'DM', name: 'Доминика', fill:  COLOR_GRAY, info: []},
{id: 'EG', name: 'Египет', fill:  COLOR_RED, info: []},
{id: 'ZM', name: 'Замбия', fill:  COLOR_GRAY, info: []},
{id: 'EH', name: 'Западная Сахара', fill:  COLOR_GRAY, info: []},
{id: 'ZW', name: 'Зимбабве', fill:  COLOR_GRAY, info: []},
{id: 'IN', name: 'Индия', fill:  COLOR_RED, info: [
        {
            title: "С 13 марта по 15 апреля Индия аннулирует все ранее выданные визы и перестает выдавать новые визы",
            description: "В страну можно будет въехать только по предварительно полученной визе",
            datetime: "2020-03-12"
        }
    ]},
{id: 'ID', name: 'Индонезия', fill:  COLOR_YELLOW, info: [
        {
            title: "С 20 марта 2020 года Индонезия приостановит безвизовый режим для краткосрочных поездок, а также выдачу виз по прибытию",
            description: "В страну можно будет въехать только по предварительно полученной визе",
            datetime: "2020-03-17"
        }
    ]},
{id: 'JO', name: 'Иордания', fill:  COLOR_RED, info: [
        {
            title: "Иордания закрыла границы и авиасообщение",
            description: "В страну можно будет въехать только по предварительно полученной визе",
            datetime: "2020-03-15"
        },
        {
            title: "тменены публичные меропрития и молитвы в мечетях",
            description: "В страну можно будет въехать только по предварительно полученной визе",
            datetime: "2020-03-15"
        }
    ]},
{id: 'IQ', name: 'Ирак', fill:  COLOR_GRAY, info: []},
{id: 'IR', name: 'Иран', fill:  COLOR_RED, info: []},
{id: 'IE', name: 'Ирландия', fill:  COLOR_GRAY, eu: true, info: []},
{id: 'IS', name: 'Исландия', fill:  COLOR_BLUE, schengen: true, info: []},
{id: 'YE', name: 'Йемен', fill:  COLOR_YELLOW, info: [
        {
            title: "Закрыто авиасообщение",
            datetime: "2020-03-14",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'CV', name: 'Кабо-Верде', fill:  COLOR_RED, info: []},
{id: 'KY', name: 'Каймановы острова', fill:  COLOR_GRAY, info: []},
{id: 'KH', name: 'Камбоджа', fill:  COLOR_GRAY, info: []},
{id: 'CM', name: 'Камерун', fill:  COLOR_GRAY, info: []},
{id: 'CA', name: 'Канада', fill:  COLOR_RED, info: [
        {
            title: "Канада в связи с угрозой коронавируса запретит въезд в страну всем иностранным гражданам",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'QA', name: 'Катар', fill:  COLOR_YELLOW, info: [{
        title: "На 2 недели закрыто авиасообщение",
        datetime: "2020-03-16",
        site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
    }]},
{id: 'KE', name: 'Кения', fill:  COLOR_YELLOW, info: [
        {
            title: "Введено чрезвычайное положение",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Закрыт въезд жителям стран с очагами эпидемии",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'KI', name: 'Кирибати', fill:  COLOR_GRAY, info: []},
{id: 'CN', name: 'Китай', fill:  COLOR_BLUE, info: []},
{id: 'CC', name: 'Кокосовые (Килинг) острова', fill:  COLOR_GRAY, info: []},
{id: 'CO', name: 'Колумбия', fill:  COLOR_RED, info: [{
        title: "Колумбия закрыла границы для иностранцев до 30 мая",
        datetime: "2020-03-17",
        site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
    }]},
{id: 'KM', name: 'Коморы', fill:  COLOR_GRAY, info: []},
{id: 'CG', name: 'Конго', fill:  COLOR_GRAY, info: []},
{id: 'XK', name: 'Косово', fill:  COLOR_GRAY, info: []},
{id: 'CR', name: 'Коста-Рика', fill:  COLOR_GRAY, info: []},
{id: 'CI', name: 'Кот д’Ивуар', fill:  COLOR_GRAY, info: []},
{id: 'CU', name: 'Куба', fill:  COLOR_GRAY, info: []},
{id: 'KW', name: 'Кувейт', fill:  COLOR_GRAY, info: []},
{id: 'KG', name: 'Киргизия', fill:  COLOR_RED, info: []},
{id: 'LA', name: 'Лаос', fill:  COLOR_GRAY, info: []},
{id: 'LS', name: 'Лесото', fill:  COLOR_GRAY, info: []},
{id: 'LR', name: 'Либерия', fill:  COLOR_GRAY, info: []},
{id: 'LB', name: 'Ливан', fill:  COLOR_YELLOW, info: [
        {
            title: "Пассажиры, которые проезжали или находились в Китае, Тайбэе, Египте, Франции, Германии, Гонконге, Иране, Ираке, Италии, Японии, Корее, Макао, Испании, Сирии или Соединенному Королевству за последние 14 дней запрещен въезд и транзит через Ливан",
            site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
        },
        {
            title: "раждане Ливана и жители Ливана, которые находились в Китае, Тайбэе, Египте, Франции, Германии, Гонконге, Иране, Ираке, Италии, Японии, Корее, Макао, Испания, Сирия или Соединенное Королевство должны заполнить новую информационную форму Министерства здравоохранения до прибытия",
            site: "https://belavia.by/covid_informatsiya_po_ogranicheniyu/"
        }
    ]},
{id: 'LY', name: 'Ливия', fill:  COLOR_GRAY, info: []},
{id: 'LI', name: 'Лихтенштейн', fill:  COLOR_GRAY, schengen: true, info: []},
{id: 'LU', name: 'Люксембург', fill:  COLOR_GRAY, schengen: true, eu: true, info: []},
{id: 'MU', name: 'Маврикий', fill:  COLOR_GRAY, info: []},
{id: 'MR', name: 'Мавритания', fill:  COLOR_GRAY, info: []},
{id: 'MG', name: 'Мадагаскар', fill:  COLOR_GRAY, info: []},
{id: 'YT', name: 'Майотта', fill:  COLOR_GRAY, info: []},
{id: 'MO', name: 'Макао', fill:  COLOR_GRAY, info: []},
{id: 'MW', name: 'Малави', fill:  COLOR_GRAY, info: []},
{id: 'MY', name: 'Малайзия', fill:  COLOR_RED, info: []},
{id: 'ML', name: 'Мали', fill:  COLOR_GRAY, info: []},
{id: 'UM', name: 'Малые Тихоокеанские отдаленные острова США', fill:  COLOR_GRAY, info: []},
{id: 'MV', name: 'Мальдивы', fill:  COLOR_GRAY, info: []},
{id: 'MA', name: 'Марокко', fill:  COLOR_GRAY, info: []},
{id: 'MQ', name: 'Мартиника', fill:  COLOR_GRAY, info: []},
{id: 'MH', name: 'Маршалловы острова', fill:  COLOR_GRAY, info: []},
{id: 'MX', name: 'Мексика', fill:  COLOR_GRAY, info: []},
{id: 'FM', name: 'Микронезия', fill:  COLOR_GRAY, info: []},
{id: 'MZ', name: 'Мозамбик', fill:  COLOR_GRAY, info: []},
{id: 'MC', name: 'Монако', fill:  COLOR_GRAY, info: []},
{id: 'MN', name: 'Монголия', fill:  COLOR_RED, info: [
        {
            title: "До 28 марта 2020 года отменены все регулярные авиарейсы, прекращено движение поездов",
            datetime: "2020-03-10",
            site: "https://vz.ru/news/2020/3/10/1028070.html"
        },
        {
            title: "Запрет въезда на территорию страны на автомобилях для иностранных граждан",
            datetime: "2020-03-10",
            site: "https://vz.ru/news/2020/3/10/1028070.html"
        }
    ]},
{id: 'MS', name: 'Монтсеррат', fill:  COLOR_GRAY, info: []},
{id: 'MM', name: 'Мьянма', fill:  COLOR_GRAY, info: []},
{id: 'NA', name: 'Намибия', fill:  COLOR_GRAY, info: []},
{id: 'NR', name: 'Науру', fill:  COLOR_GRAY, info: []},
{id: 'NP', name: 'Непал', fill:  COLOR_GRAY, info: []},
{id: 'NG', name: 'Нигерия', fill:  COLOR_GRAY, info: []},
{id: 'NE', name: 'Нигер', fill:  COLOR_GRAY, info: []},
{id: 'AN', name: 'Нидерландские Антилы', fill:  COLOR_GRAY, info: []},
{id: 'NI', name: 'Никарагуа', fill:  COLOR_GRAY, info: []},
{id: 'NU', name: 'Ниуэ', fill:  COLOR_GRAY, info: []},
{id: 'NZ', name: 'Новая Зеландия', fill:  COLOR_YELLOW, info: [
        {
            title: "Обязательный 14-дневный карантин для приезжающих в страну",
            datetime: "2020-03-14",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'NC', name: 'Новая Каледония', fill:  COLOR_GRAY, info: []},
{id: 'AE', name: 'ОАЭ', fill:  COLOR_RED, info: []},
{id: 'OM', name: 'Оман', fill:  COLOR_RED, info: []},
{id: 'CK', name: 'Острова Кука', fill:  COLOR_GRAY, info: []},
{id: 'TC', name: 'Острова Тёркс и Кайкос', fill:  COLOR_GRAY, info: []},
{id: 'BV', name: 'Остров Буве', fill:  COLOR_GRAY, info: []},
{id: 'CP', name: 'Остров Клиппертон', fill:  COLOR_GRAY, info: []},
{id: 'IM', name: 'Остров Мэн', fill:  COLOR_GRAY, info: []},
{id: 'NF', name: 'Остров Норфолк', fill:  COLOR_GRAY, info: []},
{id: 'CX', name: 'Остров Рождества', fill:  COLOR_GRAY, info: []},
{id: 'MF', name: 'Остров Святого Мартина', fill:  COLOR_GRAY, info: []},
{id: 'HM', name: 'Остров Херд и острова Макдональд', fill:  COLOR_GRAY, info: []},
{id: 'PK', name: 'Пакистан', fill:  COLOR_RED, info: []},
{id: 'PW', name: 'Палау', fill:  COLOR_GRAY, info: []},
{id: 'PS', name: 'Оккупированная палестинская территория', fill:  COLOR_GRAY, info: []},
{id: 'PA', name: 'Панама', fill:  COLOR_GRAY, info: []},
{id: 'PG', name: 'Папуа-Новая Гвинея', fill:  COLOR_GRAY, info: []},
{id: 'PY', name: 'Парагвай', fill:  COLOR_BLUE, info: [
        {
            title: "6 марта Парагвай ввел комендантский час по всей стране из-за коронавируса с 20.00 до 04.00 на территории всей страны.",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'PE', name: 'Перу', fill:  COLOR_GRAY, info: []},
{id: 'PN', name: 'Питкерн', fill:  COLOR_GRAY, info: []},
{id: 'PT', name: 'Португалия', fill:  COLOR_YELLOW, schengen: true, eu: true, info: [
        {
            title: "С 16 марта Португалия перекрывает авиационное, железнодорожное, морское и речное сообщение с Испанией",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'PR', name: 'Пуэрто-Рико', fill:  COLOR_BLUE, info: [
        {
            title: "Объявилен комендантский час, который продлится как минимум две недели",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'MK', name: 'Республика Македония', fill:  COLOR_GRAY, info: []},
{id: 'RE', name: 'Реюньон', fill:  COLOR_GRAY, info: []},
{id: 'RW', name: 'Руанда', fill:  COLOR_GRAY, info: []},
{id: 'WS', name: 'Самоа', fill:  COLOR_GRAY, info: []},
{id: 'SM', name: 'Сан-Марино', fill:  COLOR_GRAY, info: []},
{id: 'ST', name: 'Сан-Томе и Принсипи', fill:  COLOR_GRAY, info: []},
{id: 'SA', name: 'Саудовская Аравия', fill:  COLOR_YELLOW, info: [
        {
            title: "Закрыто международное сообщение на 2 недели с 14 марта",
            datetime: "2020-03-14",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'SZ', name: 'Свазиленд', fill:  COLOR_GRAY, info: []},
{id: 'SH', name: 'Святая Елена', fill:  COLOR_GRAY, info: []},
{id: 'KP', name: 'Северная Корея', fill:  COLOR_GRAY, info: []},
{id: 'MP', name: 'Северные Марианские острова', fill:  COLOR_GRAY, info: []},
{id: 'SC', name: 'Сейшелы', fill:  COLOR_GRAY, info: []},
{id: 'BL', name: 'Сен-Бартельми', fill:  COLOR_GRAY, info: []},
{id: 'PM', name: 'Сен-Пьер и Микелон', fill:  COLOR_GRAY, info: []},
{id: 'SN', name: 'Сенегал', fill:  COLOR_GRAY, info: []},
{id: 'VC', name: 'Сент-Винсент и Гренадины', fill:  COLOR_GRAY, info: []},
{id: 'KN', name: 'Сент-Китс и Невис', fill:  COLOR_GRAY, info: []},
{id: 'LC', name: 'Сент-Люсия', fill:  COLOR_GRAY, info: []},
{id: 'SG', name: 'Сингапур', fill:  COLOR_YELLOW, info: [
        {
            title: "Приостановлен въезд в страну тем, кто в течение последних 14 дней бывали в Италии, Франции, Испании и Германии",
            datetime: "2020-03-13",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'SY', name: 'Сирия', fill:  COLOR_GRAY, info: []},
{id: 'SB', name: 'Соломоновы острова', fill:  COLOR_GRAY, info: []},
{id: 'SO', name: 'Сомали', fill:  COLOR_GRAY, info: []},
{id: 'SD', name: 'Судан', fill:  COLOR_RED, info: []},
{id: 'SR', name: 'Суринам', fill:  COLOR_GRAY, info: []},
{id: 'SL', name: 'Сьерра-Леоне', fill:  COLOR_GRAY, info: []},
{id: 'TJ', name: 'Таджикистан', fill:  COLOR_GRAY, info: []},
{id: 'TH', name: 'Таиланд', fill:  COLOR_BLUE, info: [
        {
            title: "Отменены выходные дни празднования традиционного тайского Нового года, Сонгкрана",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Из-за коронавируса закрыл город Бурирам",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'TW', name: 'Тайвань (Китай)', fill:  COLOR_GRAY, info: []},
{id: 'TZ', name: 'Танзания', fill:  COLOR_GRAY, info: []},
{id: 'TL', name: 'Тимор-Лесте', fill:  COLOR_GRAY, info: []},
{id: 'TG', name: 'Того', fill:  COLOR_GRAY, info: []},
{id: 'TK', name: 'Токелау', fill:  COLOR_GRAY, info: []},
{id: 'TO', name: 'Тонга', fill:  COLOR_GRAY, info: []},
{id: 'TT', name: 'Тринидад и Тобаго', fill:  COLOR_GRAY, info: []},
{id: 'TV', name: 'Тувалу', fill:  COLOR_GRAY, info: []},
{id: 'TN', name: 'Тунис', fill:  COLOR_RED, info: [{
        title: "Закрыты воздушные и сухопутные границы для всех коммерческих рейсов",
        datetime: "2020-03-17",
        site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
    }]},
{id: 'TM', name: 'Туркмения', fill:  COLOR_RED, info: []},
{id: 'UG', name: 'Уганда', fill:  COLOR_GRAY, info: []},
{id: 'UZ', name: 'Узбекистан', fill:  COLOR_RED, info: []},
{id: 'WF', name: 'Уоллис и Футуна', fill:  COLOR_GRAY, info: []},
{id: 'UY', name: 'Уругвай', fill:  COLOR_YELLOW, info: [{
        title: "Уругвай закрыл наземную границу с Аргентиной",
        datetime: "2020-03-17",
        site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/",
    }]},
{id: 'FO', name: 'Фарерские острова', fill:  COLOR_GRAY, info: []},
{id: 'FJ', name: 'Фиджи', fill:  COLOR_GRAY, info: []},
{id: 'PH', name: 'Филиппины', fill:  COLOR_YELLOW, info: [
        {
            title: "На острове Лусон объявлен карантин",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'FI', name: 'Финляндия', fill:  COLOR_RED, schengen: true, eu: true, info: []},
{id: 'FK', name: 'Фолклендские (Мальвинские) острова', fill:  COLOR_GRAY, info: []},
{id: 'GF', name: 'Французская Гвиана', fill:  COLOR_GRAY, info: []},
{id: 'PF', name: 'Французская Полинезия', fill:  COLOR_GRAY, info: []},
{id: 'TF', name: 'Французские Южные территории', fill:  COLOR_GRAY, info: []},
{id: 'CF', name: 'Центральноафриканская Республика', fill:  COLOR_GRAY, info: []},
{id: 'TD', name: 'Чад', fill:  COLOR_GRAY, info: []},
{id: 'ME', name: 'Черногория', fill:  COLOR_RED, info: [
        {
            title: "C 16 марта на 15 дней закрывает границы для лиц, не имеющих гражданства и ВНЖ страны",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'CL', name: 'Чили', fill:  COLOR_RED, info: [
        {
            title: "Чили закрывает границы для иностранцев из-за риска коронавируса",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'SJ', name: 'Шпицберген и Ян Майен', fill:  COLOR_GRAY, info: []},
{id: 'LK', name: 'Шри-Ланка', fill:  COLOR_RED, info: [
        {
            title: "С 18 марта Шри ланка на 2 недели приостанавливает международное сообщение на въезд в стран",
            description: "Вылет возможен",
            datetime: "2020-03-17",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'EC', name: 'Эквадор', fill:  COLOR_RED, info: [
        {
            title: "Закрыты границы в страны даже для своих граждан",
            datetime: "2020-03-15",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'GQ', name: 'Экваториальная Гвинея', fill:  COLOR_GRAY, info: []},
{id: 'AX', name: 'Эландские острова', fill:  COLOR_GRAY, info: []},
{id: 'SV', name: 'Эль-Сальвадор', fill:  COLOR_YELLOW, info: [{
        title: "Временно запрещена посадка иностранных самолетов из-за коронавируса"
    }]},
{id: 'ER', name: 'Эритрея', fill:  COLOR_GRAY, info: []},
{id: 'ET', name: 'Эфиопия', fill:  COLOR_GRAY, info: []},
{id: 'ZA', name: 'Южная Африка', fill:  COLOR_YELLOW, info: [
        {
            title: "Введено чрезвычайное положение",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        },
        {
            title: "Закрыт въезд жителям стран с очагами эпидемии",
            datetime: "2020-03-16",
            site: "http://turvopros.com/strany-zakrytye-iz-za-koronavirusa/"
        }
    ]},
{id: 'GS', name: 'Южная Джорджия и Южные Сандвичевы острова', fill:  COLOR_GRAY, info: []},
{id: 'KR', name: 'Южная Корея', fill:  COLOR_GRAY, info: []},
{id: 'JM', name: 'Ямайка', fill:  COLOR_GRAY, info: []},
{id: 'JP', name: 'Япония', fill:  COLOR_GRAY, info: []}
];
