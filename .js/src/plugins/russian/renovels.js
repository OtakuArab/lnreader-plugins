var l=this&&this.__awaiter||function(l,e,a,u){return new(a||(a=Promise))((function(v,b){function t(l){try{i(u.next(l))}catch(l){b(l)}}function n(l){try{i(u.throw(l))}catch(l){b(l)}}function i(l){var e;l.done?v(l.value):(e=l.value,e instanceof a?e:new a((function(l){l(e)}))).then(t,n)}i((u=u.apply(l,e||[])).next())}))},e=this&&this.__generator||function(l,e){var a,u,v,b,t={label:0,sent:function(){if(1&v[0])throw v[1];return v[1]},trys:[],ops:[]};return b={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(b[Symbol.iterator]=function(){return this}),b;function n(n){return function(i){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;b&&(b=0,n[0]&&(t=0)),t;)try{if(a=1,u&&(v=2&n[0]?u.return:n[0]?u.throw||((v=u.return)&&v.call(u),0):u.next)&&!(v=v.call(u,n[1])).done)return v;switch(u=0,v&&(n=[2&n[0],v.value]),n[0]){case 0:case 1:v=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,u=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(!(v=t.trys,(v=v.length>0&&v[v.length-1])||6!==n[0]&&2!==n[0])){t=0;continue}if(3===n[0]&&(!v||n[1]>v[0]&&n[1]<v[3])){t.label=n[1];break}if(6===n[0]&&t.label<v[1]){t.label=v[1],v=n;break}if(v&&t.label<v[2]){t.label=v[2],t.ops.push(n);break}v[2]&&t.ops.pop(),t.trys.pop();continue}n=e.call(l,t)}catch(l){n=[6,l],u=0}finally{a=v=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,i])}}},a=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(exports,"__esModule",{value:!0});var u=require("@libs/filterInputs"),v=require("@libs/fetch"),b=require("@libs/novelStatus"),t=a(require("dayjs")),n=function(){function a(){var l=this;this.id="ReN",this.name="Renovels",this.icon="src/ru/renovels/icon.png",this.site="https://renovels.org",this.version="1.0.1",this.resolveUrl=function(e,a){return l.site+"/novel/"+e},this.filters={sort:{label:"Сортировка",value:"rating",options:[{label:"Рейтинг",value:"rating"},{label:"Просмотры",value:"views"},{label:"Лайкам",value:"votes"},{label:"Дате добавления",value:"id"},{label:"Дате обновления",value:"chapter_date"},{label:"Количество глав",value:"count_chapters"}],type:u.FilterTypes.Picker},genres:{label:"Жанры:",value:{include:[],exclude:[]},options:[{label:"Боевик",value:"112"},{label:"Война",value:"123"},{label:"Детектив",value:"114"},{label:"Драма",value:"125"},{label:"Историческая проза",value:"115"},{label:"ЛитРПГ",value:"109"},{label:"Любовные романы",value:"116"},{label:"Мистика",value:"103"},{label:"Научная фантастика",value:"121"},{label:"Повседневность",value:"128"},{label:"Подростковая проза",value:"113"},{label:"Политический роман",value:"119"},{label:"Попаданцы",value:"108"},{label:"Поэзия",value:"105"},{label:"Разное",value:"111"},{label:"РеалРПГ",value:"117"},{label:"Романтика",value:"126"},{label:"Современная проза",value:"102"},{label:"Современная фантастика",value:"127"},{label:"Спорт",value:"122"},{label:"Трагедия",value:"129"},{label:"Триллер",value:"110"},{label:"Триллер и саспенс",value:"124"},{label:"Ужасы",value:"106"},{label:"Фантастика",value:"101"},{label:"Фанфик",value:"107"},{label:"Фьюжн роман",value:"120"},{label:"Фэнтези",value:"100"},{label:"Эротика",value:"118"},{label:"Юмор",value:"104"}],type:u.FilterTypes.ExcludableCheckboxGroup},categories:{label:"Тэги:",value:{include:[],exclude:[]},options:[{label:"[Награжденная работа]",value:"648"},{label:"18+",value:"423"},{label:"Абьюзеры",value:"663"},{label:"Авантюристы",value:"436"},{label:"Автоматоны",value:"593"},{label:"Агрессивные персонажи",value:"502"},{label:"Ад",value:"569"},{label:"Адаптация в радиопостановку",value:"581"},{label:"Академия",value:"153"},{label:"Актеры озвучки",value:"627"},{label:"Активный главный герой",value:"251"},{label:"Алхимия",value:"233"},{label:"Альтернативная история",value:"147"},{label:"Альтернативный мир",value:"156"},{label:"Амнезия/Потеря памяти",value:"344"},{label:"Анабиоз",value:"685"},{label:"Ангелы",value:"183"},{label:"Андрогинные персонажи",value:"321"},{label:"Андроиды",value:"203"},{label:"Анти-магия",value:"533"},{label:"Антигерой",value:"432"},{label:"Антикварный магазин",value:"623"},{label:"Антисоциальный главный герой",value:"613"},{label:"Антиутопия",value:"142"},{label:"Апатичный протагонист",value:"157"},{label:"Апокалипсис",value:"402"},{label:"Аранжированный брак",value:"375"},{label:"Армия",value:"639"},{label:"Артефакты",value:"234"},{label:"Артисты",value:"523"},{label:"Банды",value:"630"},{label:"БДСМ",value:"699"},{label:"Бедный главный герой",value:"398"},{label:"Безжалостный главный герой",value:"261"},{label:"Беззаботный главный герой",value:"438"},{label:"Безусловная любовь",value:"679"},{label:"Беременность",value:"250"},{label:"Бесполый главный герой",value:"325"},{label:"Бессмертные",value:"368"},{label:"Бесстрашный протагонист",value:"656"},{label:"Бесстыдный главный герой",value:"352"},{label:"Бесчестный главный герой",value:"716"},{label:"Библиотека",value:"428"},{label:"Бизнес-литература",value:"121"},{label:"Бизнесмен",value:"769"},{label:"Биочип",value:"238"},{label:"Бисексуальный главный герой",value:"773"},{label:"Близнецы",value:"263"},{label:"Боги",value:"317"},{label:"Богини",value:"439"},{label:"Боевая академия",value:"450"},{label:"Боевая фантастика",value:"149"},{label:"Боевое фэнтези",value:"104"},{label:"Боевые духи",value:"433"},{label:"Боевые соревнования",value:"493"},{label:"Божественная защита",value:"421"},{label:"Божественные силы",value:"327"},{label:"Борьба за власть",value:"599"},{label:"Брак",value:"446"},{label:"Брак по расчету",value:"188"},{label:"Братский комплекс",value:"159"},{label:"Братство",value:"487"},{label:"Братья и сестры",value:"577"},{label:"Буддизм",value:"745"},{label:"Быстрая культивация",value:"366"},{label:"Быстрообучаемый",value:"324"},{label:"Валькирии",value:"692"},{label:"Вампиры",value:"360"},{label:"Ваншот",value:"702"},{label:"Ведьмы",value:"281"},{label:"Вежливый главный герой",value:"379"},{label:"Верные подчиненные",value:"328"},{label:"Взрослый главный герой",value:"295"},{label:"Видит то, чего не видят другие",value:"671"},{label:"Виртуальная реальность",value:"401"},{label:"Владелец магазина",value:"681"},{label:"Внезапная сила",value:"455"},{label:"Внезапное богатство",value:"765"},{label:"Внешний вид отличается от факт",value:"419"},{label:"Военные Летописи",value:"743"},{label:"Возвращение из другого мира",value:"696"},{label:"Войны",value:"181"},{label:"Вокалоид",value:"701"},{label:"Волшебники/Волшебницы",value:"539"},{label:"Волшебные звери",value:"308"},{label:"Воображаемый друг",value:"651"},{label:"Воры",value:"414"},{label:"Воскрешение",value:"199"},{label:"Враги становятся возлюбленными",value:"498"},{label:"Враги становятся союзниками",value:"562"},{label:"Врата в другой мир",value:"609"},{label:"Врачи",value:"376"},{label:"Временной парадокс",value:"275"},{label:"Всемогущий главный герой",value:"169"},{label:"Вторжение на землю",value:"198"},{label:"Второй шанс",value:"231"},{label:"Вуайеризм",value:"790"},{label:"Выживание",value:"380"},{label:"Высокомерные персонажи",value:"361"},{label:"Гадание",value:"595"},{label:"Гарем рабов",value:"777"},{label:"Гг - женщина",value:"186"},{label:"Гг - мужчина",value:"166"},{label:"Гг силен с самого начала",value:"171"},{label:"Геймеры",value:"392"},{label:"Генералы",value:"326"},{label:"Генетические модификации",value:"657"},{label:"Гениальный главный герой",value:"617"},{label:"Герои",value:"285"},{label:"Героиня — сорванец",value:"583"},{label:"Героическая фантастика",value:"140"},{label:"Героическое фэнтези",value:"107"},{label:"Герой влюбляется первым",value:"187"},{label:"Гетерохромия",value:"570"},{label:"Гильдии",value:"411"},{label:"Гипнотизм",value:"755"},{label:"Главный герой — бог",value:"547"},{label:"Главный герой — гуманоид",value:"636"},{label:"Главный герой — наполовину чел",value:"445"},{label:"Главный герой — отец",value:"792"},{label:"Главный герой — раб",value:"780"},{label:"Главный герой — ребенок",value:"488"},{label:"Главный герой — рубака",value:"476"},{label:"Главный герой влюбляется первы",value:"683"},{label:"Главный герой играет роль",value:"472"},{label:"Главный герой носит очки",value:"672"},{label:"Главный герой пацифист",value:"698"},{label:"Гладиаторы",value:"603"},{label:"Глуповатый главный герой",value:"385"},{label:"Гоблины",value:"586"},{label:"Големы",value:"620"},{label:"Гомункул",value:"789"},{label:"Горничные",value:"459"},{label:"Городское фэнтези",value:"105"},{label:"Госпиталь",value:"800"},{label:"Готовка",value:"302"},{label:"Гриндинг",value:"393"},{label:"Дао Компаньон",value:"462"},{label:"Даосизм",value:"760"},{label:"Дварфы",value:"323"},{label:"Двойная личность",value:"642"},{label:"Двойник",value:"601"},{label:"Дворецкий",value:"660"},{label:"Дворяне",value:"168"},{label:"Дворянство/Аристократия",value:"437"},{label:"Девушки-монстры",value:"669"},{label:"Демоническая техника культивац",value:"722"},{label:"Демоны",value:"152"},{label:"Денежный долг",value:"783"},{label:"Депрессия",value:"555"},{label:"Детектив",value:"116"},{label:"Детективы",value:"612"},{label:"Детская литература",value:"123"},{label:"Дискриминация",value:"162"},{label:"Добыча денег в приоритете",value:"396"},{label:"Документальная проза",value:"122"},{label:"Долгая разлука",value:"307"},{label:"Домашние дела",value:"290"},{label:"Домогательство",value:"470"},{label:"Драконы",value:"303"},{label:"Драконьи всадники",value:"607"},{label:"Древние времена",value:"221"},{label:"Древний Китай",value:"374"},{label:"Дружба",value:"217"},{label:"Друзья детства",value:"282"},{label:"Друзья становятся врагами",value:"567"},{label:"Друиды",value:"497"},{label:"Дух лисы",value:"784"},{label:"Духи/призраки",value:"172"},{label:"Духовный советник",value:"435"},{label:"Душевность",value:"633"},{label:"Души",value:"254"},{label:"Европейская атмосфера",value:"521"},{label:"Ёкаи",value:"575"},{label:"Есть аниме-адаптация",value:"154"},{label:"Есть видеоигра по мотивам",value:"552"},{label:"Есть манга",value:"155"},{label:"Есть манхва-адаптация",value:"517"},{label:"Есть маньхуа-адаптация",value:"388"},{label:"Есть сериал-адаптация",value:"492"},{label:"Есть фильм",value:"173"},{label:"Женища-наставник",value:"505"},{label:"Жесткая, двуличная личность",value:"346"},{label:"Жестокие персонажи",value:"503"},{label:"Жестокое обращение с ребенком",value:"654"},{label:"Жестокость",value:"245"},{label:"Животноводство",value:"754"},{label:"Животные черты",value:"528"},{label:"Жизнь в квартире",value:"606"},{label:"Жрицы",value:"615"},{label:"Заботливый главный герой",value:"288"},{label:"Забывчивый главный герой",value:"628"},{label:"Заговоры",value:"289"},{label:"Закалка тела",value:"362"},{label:"Законники",value:"756"},{label:"Замкнутый главный герой",value:"589"},{label:"Запечатанная сила",value:"430"},{label:"Застенчивые персонажи",value:"508"},{label:"Звери",value:"237"},{label:"Звери-компаньоны",value:"301"},{label:"Злой протагонист",value:"243"},{label:"Злые боги",value:"504"},{label:"Злые организации",value:"563"},{label:"Злые религии",value:"734"},{label:"Знаменитости",value:"473"},{label:"Знаменитый главный герой",value:"531"},{label:"Знания современного мира",value:"297"},{label:"Зомби",value:"409"},{label:"Игра на выживание",value:"274"},{label:"Игривый протагонист",value:"717"},{label:"Игровая система рейтинга",value:"391"},{label:"Игровые элементы",value:"266"},{label:"Игрушки (18+)",value:"676"},{label:"Из грязи в князи",value:"416"},{label:"Из женщины в мужчину",value:"709"},{label:"Из мужчины в женщину",value:"715"},{label:"Из полного в худого",value:"767"},{label:"Из слабого в сильного",value:"202"},{label:"Извращенный главный герой",value:"434"},{label:"Изгои",value:"534"},{label:"Изменение расы",value:"664"},{label:"Изменения внешнего вида",value:"300"},{label:"Изменения личности",value:"219"},{label:"Изнасилование",value:"229"},{label:"Изображения жестокости",value:"355"},{label:"ИИ",value:"235"},{label:"Империи",value:"748"},{label:"Инвалидность",value:"684"},{label:"Индустриализация",value:"292"},{label:"Инженер",value:"163"},{label:"Инцест",value:"525"},{label:"Искусственный интеллект",value:"236"},{label:"Исследования",value:"670"},{label:"Историческая проза",value:"119"},{label:"Исторические приключения",value:"120"},{label:"Исторический детектив",value:"117"},{label:"Исторический любовный роман",value:"138"},{label:"Историческое фэнтези",value:"110"},{label:"Каннибализм",value:"456"},{label:"Карточные игры",value:"682"},{label:"Киберпанк",value:"141"},{label:"Киберспорт",value:"686"},{label:"Кланы",value:"796"},{label:"Класс безработного",value:"735"},{label:"Клоны",value:"447"},{label:"Клубы",value:"216"},{label:"Книги",value:"427"},{label:"Книги навыков",value:"400"},{label:"Книжный червь",value:"519"},{label:"Коварство",value:"230"},{label:"Коллеги",value:"704"},{label:"Колледж/Университет",value:"726"},{label:"Кома",value:"776"},{label:"Командная работа",value:"496"},{label:"Комедийный оттенок",value:"582"},{label:"Комплекс неполноценности",value:"550"},{label:"Комплекс семейных отношений",value:"223"},{label:"Конкуренция",value:"746"},{label:"Контроль разума/сознания",value:"357"},{label:"Копейщик",value:"425"},{label:"Королевская битва",value:"797"},{label:"Королевская власть",value:"178"},{label:"Королевства",value:"259"},{label:"Короткий любовный роман",value:"136"},{label:"Коррупция",value:"457"},{label:"Космическая фантастика",value:"146"},{label:"Космические войны",value:"697"},{label:"Красивый герой",value:"226"},{label:"Крафт",value:"377"},{label:"Кризис личности",value:"640"},{label:"Кругосветное путешествие",value:"353"},{label:"Кудере",value:"506"},{label:"Кузены",value:"718"},{label:"Кузнец",value:"518"},{label:"Кукловоды",value:"501"},{label:"Куклы/марионетки",value:"624"},{label:"Культивация",value:"241"},{label:"Куннилингус",value:"667"},{label:"Легенды",value:"500"},{label:"Легкая жизнь",value:"644"},{label:"Ленивый главный герой",value:"621"},{label:"Лидерство",value:"494"},{label:"Лоли",value:"213"},{label:"Лотерея",value:"477"},{label:"Любовное фэнтези",value:"135"},{label:"Любовный треугольник",value:"218"},{label:"Любовь детства",value:"560"},{label:"Любовь с первого взгляда",value:"737"},{label:"Магические надписи",value:"453"},{label:"Магические печати",value:"369"},{label:"Магические технологии",value:"440"},{label:"Магия",value:"165"},{label:"Магия призыва",value:"418"},{label:"Мазохистские персонажи",value:"688"},{label:"Манипулятивные персонажи",value:"249"},{label:"Мания",value:"212"},{label:"Мастер на все руки",value:"466"},{label:"Мастурбация",value:"788"},{label:"Махо-сёдзё",value:"556"},{label:"Медицинские знания",value:"507"},{label:"Медленная романтическая линия",value:"232"},{label:"Медленное развитие на старте",value:"694"},{label:"Межпространственные путешестви",value:"404"},{label:"Менеджмент",value:"294"},{label:"Мертвый главный герой",value:"761"},{label:"Месть",value:"209"},{label:"Метаморфы",value:"335"},{label:"Меч и магия",value:"180"},{label:"Мечник",value:"647"},{label:"Мечты",value:"738"},{label:"Милая история",value:"725"},{label:"Милое дитя",value:"637"},{label:"Милый главный герой",value:"714"},{label:"Мировое дерево",value:"463"},{label:"Мистика",value:"151"},{label:"Мистический ореол вокруг семьи",value:"483"},{label:"Мифические звери",value:"491"},{label:"Мифология",value:"530"},{label:"Младшие братья",value:"785"},{label:"Младшие сестры",value:"527"},{label:"ММОРПГ (ЛитРПГ)",value:"395"},{label:"Множество перемещенных людей",value:"549"},{label:"Множество реальностей",value:"370"},{label:"Множество реинкарнированных лю",value:"330"},{label:"Модели",value:"678"},{label:"Молчаливый персонаж",value:"721"},{label:"Монстры",value:"192"},{label:"Мужская гей-пара",value:"706"},{label:"Мужчина-яндере",value:"267"},{label:"Музыка",value:"635"},{label:"Музыкальные группы",value:"634"},{label:"Мутации",value:"693"},{label:"Мутированные существа",value:"405"},{label:"Навык кражи",value:"662"},{label:"Навязчивая любовь",value:"206"},{label:"Наемники",value:"412"},{label:"Назойливый возлюбленный",value:"561"},{label:"Наивный главный герой",value:"189"},{label:"Наркотики",value:"689"},{label:"Нарциссический главный герой",value:"532"},{label:"Насилие сексуального характера",value:"774"},{label:"Наследование",value:"452"},{label:"Научная фантастика",value:"144"},{label:"Национализм",value:"406"},{label:"Не блещущий внешне главный гер",value:"415"},{label:"Не родные братья и сестры",value:"526"},{label:"Небеса",value:"568"},{label:"Небесное испытание",value:"367"},{label:"Негуманоидный главный герой",value:"659"},{label:"Недоверчивый главный герой",value:"546"},{label:"Недооцененный главный герой",value:"258"},{label:"Недоразумения",value:"309"},{label:"Неизлечимая болезнь",value:"196"},{label:"Некромант",value:"397"},{label:"Нелинейная история",value:"269"},{label:"Ненавистный главный герой",value:"548"},{label:"Ненадежный рассказчик",value:"277"},{label:"Нерезиденты",value:"772"},{label:"Нерешительный главный герой",value:"744"},{label:"Несерьезный главный герой",value:"384"},{label:"Несколько временных линий",value:"576"},{label:"Несколько гг",value:"268"},{label:"Несколько главных героев",value:"537"},{label:"Несколько идентичностей",value:"652"},{label:"Несколько личностей",value:"536"},{label:"Нетораре",value:"732"},{label:"Нетори",value:"514"},{label:"Неудачливый главный герой",value:"618"},{label:"Ниндзя",value:"441"},{label:"Новелла",value:"103"},{label:"Обещание из детства",value:"742"},{label:"Обманщик",value:"485"},{label:"Обмен телами",value:"214"},{label:"Обнаженка",value:"490"},{label:"Обольщение",value:"731"},{label:"Оборотни",value:"661"},{label:"Обратный гарем",value:"351"},{label:"Общество монстров",value:"329"},{label:"Обязательство",value:"602"},{label:"Огнестрельное оружие",value:"291"},{label:"Ограниченное время жизни",value:"194"},{label:"Одержимость",value:"512"},{label:"Одинокий главный герой",value:"394"},{label:"Одиночество",value:"306"},{label:"Одиночное проживание",value:"313"},{label:"Околосмертные переживания",value:"759"},{label:"Оммёдзи",value:"597"},{label:"Омоложение",value:"338"},{label:"Организованная преступность",value:"540"},{label:"Оргия",value:"775"},{label:"Орки",value:"331"},{label:"Освоение навыков",value:"336"},{label:"Основано на аниме",value:"605"},{label:"Основано на видео игре",value:"720"},{label:"Основано на визуальной новелле",value:"793"},{label:"Основано на песне",value:"700"},{label:"Основано на фильме",value:"604"},{label:"Осторожный главный герой",value:"240"},{label:"Отаку",value:"571"},{label:"Открытый космос",value:"264"},{label:"Отношения в сети",value:"727"},{label:"Отношения между людьми и нелюд",value:"311"},{label:"Отношения на расстоянии",value:"791"},{label:"Отношения Сенпай-Коухай",value:"572"},{label:"Отношения ученика и учителя",value:"515"},{label:"Отношения учитель-ученик",value:"429"},{label:"Отношения хозяин-слуга",value:"312"},{label:"Отомэ игра",value:"733"},{label:"Отсутствие здравого смысла",value:"645"},{label:"Отсутствие родителей",value:"625"},{label:"Офисный роман",value:"707"},{label:"Официанты",value:"703"},{label:"Охотники",value:"378"},{label:"Очаровательный главный герой",value:"687"},{label:"Падшее дворянство",value:"655"},{label:"Падшие ангелы",value:"565"},{label:"Пайзури",value:"665"},{label:"Паразиты",value:"591"},{label:"Параллельные миры",value:"207"},{label:"Парк",value:"265"},{label:"Парк развлечений",value:"632"},{label:"Пародия",value:"407"},{label:"Певцы/Певицы",value:"739"},{label:"Первая любовь",value:"729"},{label:"Первоисточник новеллы — манга",value:"611"},{label:"Первый раз",value:"787"},{label:"Перемещение в игровой мир",value:"588"},{label:"Перемещение в иной мир",value:"750"},{label:"Перерождение в ином мире",value:"751"},{label:"Переселение души/трансмиграция",value:"257"},{label:"Персонаж использует щит",value:"666"},{label:"Петля времени",value:"200"},{label:"Пираты",value:"771"},{label:"Писатели",value:"482"},{label:"Питомцы",value:"349"},{label:"Племенное общество",value:"381"},{label:"Повелитель демонов",value:"283"},{label:"Подземелья",value:"322"},{label:"Подростковая проза",value:"114"},{label:"Пожелания",value:"278"},{label:"Познание Дао",value:"443"},{label:"Покинутое дитя",value:"590"},{label:"Полигамия",value:"386"},{label:"Политика",value:"170"},{label:"Политический роман",value:"133"},{label:"Полиция",value:"764"},{label:"Полулюди",value:"420"},{label:"Популярный любовный интерес",value:"342"},{label:"Постапокалипсис",value:"145"},{label:"Постапокалиптика",value:"184"},{label:"Потерянные цивилизации",value:"749"},{label:"Похищения людей",value:"723"},{label:"Поэзия",value:"111"},{label:"Правонарушители",value:"713"},{label:"Прагматичный главный герой",value:"592"},{label:"Преданный любовный интерес",value:"225"},{label:"Предательство",value:"222"},{label:"Предвидение",value:"177"},{label:"Прекрасная героиня",value:"158"},{label:"Преступники",value:"736"},{label:"Преступность",value:"204"},{label:"Призванный герой",value:"262"},{label:"Призраки",value:"176"},{label:"Принуждение к отношениям",value:"643"},{label:"Принцессы",value:"795"},{label:"Притворная пара",value:"641"},{label:"Причудливые персонажи",value:"387"},{label:"Пришельцы/инопланетяне",value:"197"},{label:"Программист",value:"691"},{label:"Проклятия",value:"174"},{label:"Промывание мозгов",value:"578"},{label:"Пропуск времени",value:"256"},{label:"Пророчества",value:"499"},{label:"Проститутки",value:"786"},{label:"Прошлое играет большую роль",value:"320"},{label:"Прыжки между мирами",value:"741"},{label:"Психические силы",value:"359"},{label:"Психопаты",value:"270"},{label:"Публицистика",value:"124"},{label:"Путешествие во времени",value:"201"},{label:"Пытка",value:"280"},{label:"Рабы",value:"778"},{label:"Развитие личности",value:"125"},{label:"Развод",value:"758"},{label:"Разумные предметы",value:"286"},{label:"Расизм",value:"408"},{label:"Рассказ",value:"185"},{label:"Расторжения помолвки",value:"343"},{label:"Расы зооморфов",value:"315"},{label:"Реализм",value:"246"},{label:"Ревность",value:"730"},{label:"Редакторы",value:"705"},{label:"Реинкарнация",value:"372"},{label:"Реинкарнация в монстра",value:"310"},{label:"Реинкарнация в объект",value:"711"},{label:"Религии",value:"616"},{label:"Репортеры",value:"781"},{label:"Ресторан",value:"680"},{label:"Решительный главный герой",value:"242"},{label:"Робкий главный герой",value:"763"},{label:"Родитель одиночка",value:"708"},{label:"Родительский комплекс",value:"587"},{label:"Родословная",value:"239"},{label:"Романтическая эротика",value:"132"},{label:"Романтический подсюжет",value:"271"},{label:"Рост персонажа",value:"215"},{label:"Рыцари",value:"260"},{label:"Садистские персонажи",value:"674"},{label:"Самоотверженный главный герой",value:"747"},{label:"Самурай",value:"677"},{label:"Сборник коротких историй",value:"520"},{label:"Связанные сюжетные линии",value:"535"},{label:"Святые",value:"752"},{label:"Священники",value:"413"},{label:"Сдержанный главный герой",value:"762"},{label:"Секретные организации",value:"417"},{label:"Секреты",value:"626"},{label:"Секс рабы",value:"779"},{label:"Семейный конфликт",value:"757"},{label:"Семь добродетелей",value:"334"},{label:"Семь смертных грехов",value:"253"},{label:"Семья",value:"347"},{label:"Сёнэн-ай подсюжет",value:"690"},{label:"Серийные убийцы",value:"557"},{label:"Сестринский комплекс",value:"558"},{label:"Сила духа",value:"373"},{label:"Сила, требующая платы за польз",value:"579"},{label:"Сильная пара",value:"228"},{label:"Сильный в сильнейшего",value:"442"},{label:"Сильный любовный интерес",value:"273"},{label:"Синдром восьмиклассника",value:"211"},{label:"Сироты",value:"319"},{label:"Система уровней",value:"305"},{label:"Системный администратор",value:"538"},{label:"Сказка",value:"126"},{label:"Скрытие истинной личности",value:"451"},{label:"Скрытие истинных способностей",value:"348"},{label:"Скрытный главный герой",value:"252"},{label:"Скрытые способности",value:"247"},{label:"Скульпторы",value:"448"},{label:"Слабо выраженная романтическая",value:"318"},{label:"Слабый главный герой",value:"298"},{label:"Слепой главный герой",value:"794"},{label:"Слуги",value:"333"},{label:"Слэш",value:"131"},{label:"Смерть",value:"175"},{label:"Смерть близких",value:"444"},{label:"Собственнические персонажи",value:"227"},{label:"Современная проза",value:"150"},{label:"Современность",value:"167"},{label:"Современный любовный роман",value:"137"},{label:"Сожительство",value:"544"},{label:"Создание армии",value:"287"},{label:"Создание артефактов",value:"382"},{label:"Создание клана",value:"513"},{label:"Создание королевства",value:"293"},{label:"Создание навыков",value:"337"},{label:"Создание секты",value:"469"},{label:"Солдаты/военные",value:"193"},{label:"Сон",value:"622"},{label:"Состоятельные персонажи",value:"190"},{label:"Социальная иерархия по силе",value:"255"},{label:"Социальная фантастика",value:"148"},{label:"Социальные изгои",value:"542"},{label:"Спасение мира",value:"638"},{label:"Специальные способности",value:"179"},{label:"Спокойный главный герой",value:"160"},{label:"Справедливый главный герой",value:"719"},{label:"Средневековье",value:"296"},{label:"Ссорящаяся пара",value:"383"},{label:"Сталкеры",value:"710"},{label:"Старение",value:"299"},{label:"Стимпанк",value:"139"},{label:"Стоические персонажи",value:"509"},{label:"Стокгольмский синдром",value:"675"},{label:"Стратег",value:"495"},{label:"Стратегические битвы",value:"272"},{label:"Стратегия",value:"798"},{label:"Стрелки",value:"522"},{label:"Стрельба из лука",value:"461"},{label:"Студенческий совет",value:"551"},{label:"Судьба",value:"364"},{label:"Суккубы",value:"545"},{label:"Супер герои",value:"799"},{label:"Суровая подготовка",value:"356"},{label:"Таинственная болезнь",value:"195"},{label:"Таинственное прошлое",value:"358"},{label:"Тайная личность",value:"399"},{label:"Тайные отношения",value:"768"},{label:"Танцоры",value:"782"},{label:"Телохранители",value:"516"},{label:"Темное фэнтези",value:"106"},{label:"Тентакли",value:"712"},{label:"Террористы",value:"574"},{label:"Технологический разрыв",value:"658"},{label:"Тихие персонажи",value:"600"},{label:"Толстый главный герой",value:"389"},{label:"Торговцы",value:"489"},{label:"Травля/буллинг",value:"210"},{label:"Травник",value:"724"},{label:"Трагическое прошлое",value:"276"},{label:"Трансплантация воспоминаний",value:"449"},{label:"Триллер",value:"134"},{label:"Трудолюбивый главный герой",value:"164"},{label:"Тюрьма",value:"541"},{label:"Убийства",value:"205"},{label:"Убийцы",value:"345"},{label:"Убийцы драконов",value:"646"},{label:"Уверенный главный герой",value:"363"},{label:"Удачливый главный герой",value:"478"},{label:"Ужасы",value:"112"},{label:"Укротитель монстров",value:"422"},{label:"Умения из прошлой жизни",value:"371"},{label:"Умная пара",value:"554"},{label:"Умный главный герой",value:"161"},{label:"Уникальная техника Культивации",value:"350"},{label:"Уникальное оружие",value:"426"},{label:"Управление бизнесом",value:"403"},{label:"Управление временем",value:"279"},{label:"Управление кровью",value:"753"},{label:"Упрямый главный герой",value:"695"},{label:"Уродливый главный герой",value:"766"},{label:"Ускоренный рост",value:"390"},{label:"Усыновленные дети",value:"543"},{label:"Усыновленный главный герой",value:"486"},{label:"Уход за детьми",value:"474"},{label:"Учителя",value:"431"},{label:"Фамильяры",value:"596"},{label:"Фанатизм",value:"650"},{label:"Фантастические существа",value:"410"},{label:"Фантастический детектив",value:"115"},{label:"Фанфик",value:"113"},{label:"Фанфикшн",value:"464"},{label:"Фармацевт",value:"728"},{label:"Фарминг",value:"458"},{label:"Феи",value:"316"},{label:"Фелляция",value:"631"},{label:"Фемслэш",value:"127"},{label:"Фениксы",value:"454"},{label:"Фетиш груди",value:"559"},{label:"Философия",value:"208"},{label:"Фильмы",value:"479"},{label:"Флэшбэки",value:"585"},{label:"Фобии",value:"220"},{label:"Фольклор",value:"529"},{label:"Футанари",value:"619"},{label:"Футуристический сеттинг",value:"460"},{label:"Фэнтези мир",value:"244"},{label:"Хакеры",value:"475"},{label:"Харизматический герой",value:"467"},{label:"Хикикомори/Затворники",value:"524"},{label:"Хитроумный главный герой",value:"224"},{label:"Хозяин подземелий",value:"608"},{label:"Холодный главный герой",value:"354"},{label:"Хорошие отношения с семьей",value:"566"},{label:"Хранители могил",value:"191"},{label:"Целители",value:"465"},{label:"Цзянши",value:"740"},{label:"Цундэрэ",value:"510"},{label:"Чаты",value:"629"},{label:"Человеческое оружие",value:"580"},{label:"Честный главный герой",value:"341"},{label:"Читы",value:"339"},{label:"Шантаж",value:"584"},{label:"Шеф-повар",value:"340"},{label:"Шикигами",value:"598"},{label:"Школа только для девочек",value:"668"},{label:"Шота",value:"573"},{label:"Шоу-бизнес",value:"481"},{label:"Шпионский детектив",value:"118"},{label:"Шпионы",value:"614"},{label:"Эволюция",value:"304"},{label:"Эгоистичный главный герой",value:"594"},{label:"Эйдетическая память",value:"468"},{label:"Экзорсизм",value:"564"},{label:"Экономика",value:"553"},{label:"Эксгибиционизм",value:"673"},{label:"Эксперименты с людьми",value:"248"},{label:"Элементальная магия",value:"471"},{label:"Эльфы",value:"284"},{label:"Эмоционально слабый гг",value:"770"},{label:"Эпизодический",value:"649"},{label:"Эпическое фэнтези",value:"109"},{label:"Эротическая фантастика",value:"129"},{label:"Эротический фанфик",value:"128"},{label:"Эротическое фэнтези",value:"130"},{label:"Юмористическая фантастика",value:"143"},{label:"Юмористическое фэнтези",value:"108"},{label:"Юный любовный интерес",value:"511"},{label:"Яды",value:"484"},{label:"Языкастые персонажи",value:"480"},{label:"Языковой барьер",value:"182"},{label:"Яндере",value:"314"},{label:"Японские силы самообороны",value:"610"},{label:"Ярко выраженная романтика",value:"365"},{label:"R-15 Японское возрастное огр.",value:"332"},{label:"R-18",value:"424"}],type:u.FilterTypes.ExcludableCheckboxGroup},types:{label:"Типы:",value:[],options:[{label:"Авторское",value:"1"},{label:"Другое",value:"7"},{label:"Запад",value:"5"},{label:"Китай",value:"4"},{label:"Корея",value:"3"},{label:"Фанфики",value:"6"},{label:"Япония",value:"2"}],type:u.FilterTypes.CheckboxGroup},status:{label:"Статус проекта:",value:[],options:[{label:"Анонс",value:"4"},{label:"Закончен",value:"0"},{label:"Заморожен",value:"2"},{label:"Лицензировано",value:"5"},{label:"Нет переводчика",value:"3"},{label:"Продолжается",value:"1"}],type:u.FilterTypes.CheckboxGroup},age_limit:{label:"Возрастной рейтинг:",value:[],options:[{label:"16+",value:"1"},{label:"18+",value:"2"},{label:"Для всех",value:"0"}],type:u.FilterTypes.CheckboxGroup}}}return a.prototype.popularNovels=function(a,u){return l(this,arguments,void 0,(function(l,a){var u,b,t,n=this,i=a.showLatestNovels,r=a.filters;return e(this,(function(e){switch(e.label){case 0:return u=this.site+"/api/search/catalog/?count=30&ordering=-",u+=i?"chapter_date":(null===(t=null==r?void 0:r.sort)||void 0===t?void 0:t.value)||"rating",Object.entries(r||{}).forEach((function(l){var e=l[0],a=l[1].value;a instanceof Array&&a.length&&(u+="&"+e+"="+a.join("&"+e+"=")),(null==a?void 0:a.include)instanceof Array&&a.include.length&&(u+="&"+e+"="+a.include.join("&"+e+"=")),(null==a?void 0:a.exclude)instanceof Array&&a.exclude.length&&(u+="&exclude_"+e+"="+a.exclude.join("&exclude_"+e+"="))})),u+="&page="+l,[4,(0,v.fetchApi)(u).then((function(l){return l.json()}))];case 1:return b=e.sent().content,[2,b.map((function(l){return{name:l.main_name||l.secondary_name,cover:n.site+(l.img.high||l.img.mid||l.img.low),path:l.dir}}))]}}))}))},a.prototype.parseNovel=function(a){return l(this,void 0,void 0,(function(){var l,u,n,i,r,o,s,c,h,p,f;return e(this,(function(e){switch(e.label){case 0:return[4,(0,v.fetchApi)(this.site+"/api/titles/"+a).then((function(l){return l.json()}))];case 1:l=e.sent().content,u={path:a,name:l.main_name||l.secondary_name||l.another_name,summary:l.description,cover:this.site+(l.img.high||l.img.mid||l.img.low),status:"Продолжается"===l.status.name?b.NovelStatus.Ongoing:b.NovelStatus.Completed},(n=[null==l?void 0:l.genres,null==l?void 0:l.categories].flat().map((function(l){return null==l?void 0:l.name})).filter((function(l){return l}))).length&&(u.genres=n.join(",")),i=((null===(h=null===(c=l.branches)||void 0===c?void 0:c[0])||void 0===h?void 0:h.count_chapters)||l.count_chapters)/100,r=(null===(f=null===(p=l.branches)||void 0===p?void 0:p[0])||void 0===f?void 0:f.id)||l.id,o=[],s=0,e.label=2;case 2:return s<i?[4,(d=1e3,new Promise((function(l){return setTimeout(l,d)})))]:[3,6];case 3:return e.sent(),[4,(0,v.fetchApi)(this.site+"/api/titles/chapters/?branch_id="+r+"&count=100&page="+(s+1)).then((function(l){return l.json()}))];case 4:e.sent().content.forEach((function(l){l.is_paid&&!l.is_bought||o.push({name:"Том "+l.tome+" Глава "+l.chapter+(l.name?" "+l.name.trim():""),path:a+"/"+l.id,releaseTime:(0,t.default)(l.upload_date).format("LLL"),chapterNumber:l.index})})),e.label=5;case 5:return s++,[3,2];case 6:return u.chapters=o.reverse(),[2,u]}var d}))}))},a.prototype.parseChapter=function(a){return l(this,void 0,void 0,(function(){var l;return e(this,(function(e){switch(e.label){case 0:return l=this.site+"/api/titles/chapters/"+a.split("/")[1],[4,(0,v.fetchApi)(l).then((function(l){return l.json()}))];case 1:return[2,e.sent().content.content||""]}}))}))},a.prototype.searchNovels=function(a){return l(this,arguments,void 0,(function(l,a){var u,b,t,n=this;return void 0===a&&(a=1),e(this,(function(e){switch(e.label){case 0:return u="".concat(this.site,"/api/search/?query=").concat(l,"&count=100&field=titles&page=").concat(a),[4,(0,v.fetchApi)(u).then((function(l){return l.json()}))];case 1:return b=e.sent().content,t=[],b.forEach((function(l){return t.push({name:l.main_name||l.secondary_name,cover:n.site+(l.img.high||l.img.mid||l.img.low),path:l.dir})})),[2,t]}}))}))},a}();exports.default=new n;