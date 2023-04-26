export const courses = [
    {
        id: 1,
        status: "active",
        name: "Python Backend",
        description: "Python(Django) tili asosida monolit va microservice larni qurish, Data Base, turli API, WEB dasturlarni yaratish va serverga yuklashni proektlar asosida o’rganasiz.",
        image: "/courses/course-python.svg",
        color: "#b9ddff",
        module_count: 6,
        lesson_count: 72,
        duration: 6,
        intended_students: [
            {
                id: 1,
                title: "Data sciencega qizquvchilar",
                description: "Bu sohaga qiziqib, katta hajmdagi ma'lumotlarga ega bolgan va ulardan sun'iy intellek asosida ishlaydigan dasturlar orqali katta hajimdagi ma'lumotlarni tahlil qilishni (Data sciense) va ulardan foydali ma'lumotlar olimoqchil bo'lganlar"
            },
            {
                id: 2,
                title: "Boshlang’ich bilimga ega bo’lganlarga",
                description: "Dasturlash bo’yicha mutaxasis ma’lumotlar bilan ishlashni biladigan va ma’lumotlarni tahlil qilomoqchi yoki shu ma’lumotlar orqali avtomatlashtirmoqchi bo’lganlar."
            },
            {
                id: 3,
                title: "0 dan boshlamoqchi bo’lganlarga",
                description: "Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin"
            },
            {
                id: 4,
                title: "Kuchli sabr va ishtiyoqga ega bo’lgan insonlarga",
                description: "Siz o’zingizni har qanday muammoli vaziyatga nisbatan sabrli va o’z ichki motivatsiyasiga ega inson deb bilsangiz, siz nafaqat dasturchi balki har qanday kasb egasi bo’la olasiz."
            }
        ],
        course_benefits: [
            {
                id: 1,
                name: " Internet infrastrukturasi protokollar haqida tushuncha",
            },
            {
                id: 2,
                name: "Sof SQL bilan ishlash va murakkab so'rovlarni optimallashtirish",
            },
            {
                id: 3,
                name: "Django web framework arxitekturasi ishlash mexanizmi",
            },
            {
                id: 4,
                name: "API ishlab chiqish, uchinchi tomon xizmatlari bilan integratsiya",
            },
            {
                id: 5,
                name: "Dokumentatsiya yaratish va undan foydalansh",
            },
            {
                id: 6,
                name: "Web texlogiyalari va ularning ishlash mexanizmi",
            },
            {
                id: 7,
                name: "Konteynerlash texnologiyalari, Deploy qilish",
            },
            {
                id: 8,
                name: "Python web frameworklari afzalliklari va kamchiliklar",
            },
        ],
        mentors: [
            {
                id: 1,
                first_name: "Samandar",
                last_name: "Nosirov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
            {
                id: 2,
                first_name: "Samandar",
                last_name: "Nosirov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
        ],
        program: [
            {
                id: 1,
                name: "program name",
                description: "program description"
            }
        ],
        faq: [
            {
                id: 1,
                question: "Kurs menga mos keladimi?",
                answer: "Dasturlash tajribasi bo'lmagan yangi boshlanuvchilar va tajribasi kam bo'lgan yangi boshlanuvchilar uchun mo'ljallangan. Agar siz kodlash asoslari bilan allaqachon tanish bo'lsangiz, unda siz bilimingizni yangilashingiz mumkin. Agar yo'q bo'lsa, biz sizga hamma narsani o'rgatamiz."
            },
            {
                id: 2,
                question: " Kursni boshlash uchun qanday talablar mavjud?",
                answer: "Kursni boshlash uchun maktab matematikasidan bilim etarli bo'ladi. Siz noldan IT kasb yonalishda barcha kerakli ko'nikmalarni o'rganishingiz mumkin bo’ladi."
            },
            {
                id: 3,
                question: "Menga kursdan tashqari yordam beriladimi?",
                answer: "Albatta! Bir yil davomida siz o'qish paytida assistentga ega bo'lasiz. Siz kurslar va hatto hozirgi vazifalaringiz haqida savollar berishingiz mumkin. Siz assistent bilan qulay aloqa kanali orqali bog'lanishingiz mumkin: pochta yoki messenjerlar."
            },
            {
                id: 4,
                question: "Qanday qilib o'qish uchun pul to'lash mumkin?",
                answer: "Siz o'qish uchun bank kartasi yokida Click, Payme va Uzumpay ilovalar orqali to'lovni to'lashingiz yoki bir martalik to'lov o'rniga oylik to'lovni amalga oshirishingiz mumkin. Shuningdek, kursni yuridik shaxs hisobidan to'lash mumkin."
            },
            {
                id: 5,
                question: "Bu qanchalik qiyin?",
                answer: "Boshlash uchun siz qanday dasturlashni bilishingiz shart emas. Kurs oddiy narsalardan boshlanadi va asta-sekin murakkablashadi. Barcha materiallar, topshiriqlar, loyihalar aniq ko'nikmalarni egallashga qaratilgan bo'lib, ular oxir-oqibat bitiruvchi uchun rejalashtirilgan kasb darajasida rivojlanadi."
            },
            {
                id: 6,
                question: "Kursni boshlash uchun ingliz tilini bilishim kerakmi?",
                answer: "Ingliz tilining maktab dasturini bilish yetarlik. Barcha mashg'ulotlar o’zbek va rus tilida olib boriladi."
            },
            {
                id: 7,
                question: "Uy vazifalarimni kim tekshiradi?",
                answer: "Uy vazifalari o'qituvchilar tomonidan tekshiriladi. Siz batafsil fikr-mulohazalarni va tavsiyalarni olasiz."
            },
            {
                id: 8,
                question: "Ishga joylashishda qanday yordam beriladi?",
                answer: "Biz sizga o'zingizni qanday taqdim etishni o'rgatamiz: rezyume va portfoliolarni loyihalash, intervyu savollari bilan shug'ullanish. Va shuningdek, biz sizga tegishli bo'sh ish o'rinlarini mustaqil ravishda qidirishni o'rgatamiz."
            },
            {
                id: 9,
                question: "Nega men ushbu dasturni o'rganishim kerak?",
                answer: "Dastur davomida siz chuqur bilimga ega bo'lasiz, mutaxassisliklarni tanlaysiz, texnologiya va vositalarni o'rganasiz va 9 oydan keyin ish topishingiz, o'z loyihalaringizni ko'tarishingiz yoki targ'ib qilishingiz mumkin. Olingan ko'nikmalar korporativ muammolarni hal qilish, jamoani rivojlantirish, o'z biznesingiz yoki shaxsiy brendingiz muammolarini hal qilish uchun qo'llanilishi mumkin."
            },
            {
                id: 10,
                question: "Agar darsni o'tkazib yuborsam nima qilishim kerak?",
                answer: "Darsda o'z vaqtida qatnasha olmaganlar uchun biz har bir darsni yozib olamiz. Shuningdek, darslar uchun taqdimotlar va o'quv materiallari mavjud bo'lib, ular yordamida siz darslarga yaxshiroq tayyorgarlik ko'rishingiz va qo'shimcha bilimlarga ega bo'lishingiz mumkin."
            },
            {
                id: 11,
                question: "O’quv kursni bitta to'lov bilan to'lash kerakmi yoki bo'lib-bo'lib to'lash kerakmi?",
                answer: "Biz to'lovni amalga oshirish uchun bir nechta variantni taqdim etamiz. Siz butun miqdorni birdaniga to'lashingiz mumkin, shuningdek kursni bo’lib to’lash imkoniyati ham bor."
            }
        ]
    },
    {
        id: 2,
        status: "active",
        name: "Android Development",
        description: "Android darslari davomida Java va Kotlin dasturlash tili, ma'lumotlar bazasi, REST API, Firebase, Git texnologiyalari va eng so'ngi texnologiyalar, Android Smartphone, Android TV va Wear OS lar uchun dastur yozishni, moslashuvchan UI yig'ishni o'raganasiz.",
        image: "/courses/course-android.svg",
        color: "#e8dfdc",
        module_count: 7,
        lesson_count: 84,
        duration: 7,
        intended_students: [
            {
                id: 2,
                title: "Boshlang’ich bilimga ega bo’lganlarga",
                description: "Dasturlash bo’yicha mutaxasis ma’lumotlar bilan ishlashni biladigan va ma’lumotlarni tahlil qilomoqchi yoki shu ma’lumotlar orqali avtomatlashtirmoqchi bo’lganlar."
            },
            {
                id: 3,
                title: "0 dan boshlamoqchi bo’lganlarga",
                description: "Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin"
            },
        ],
        course_benefits: [
            {
                id: 1,
                name: "Kotlin-da Android dasturlarini noldan ishlab chiqish",
            },
            {
                id: 2,
                name: "Har qanday Android qurilmasi uchun mobil ilovalarni moslashtirish",
            },
            {
                id: 3,
                name: "Mobil ilovaning ishlash mantig'ini loyihalash",
            },
            {
                id: 4,
                name: "Avtomatlashtirilgan testlarni o'tkazish",
            },
            {
                id: 5,
                name: "Grafik interfeyslarni yaratish",
            },
            {
                id: 6,
                name: "Ilovalarni backend bilan integratsiyani o'rnatish",
            },
            {
                id: 7,
                name: "Android ning UI kompanent larini ishlata olish",
            },
            {
                id: 8,
                name: "Hamma Ilovada kerak bo`lgan Firebaseni ishlata olish",
            }
        ],
        mentors: [
            {
                id: 1,
                first_name: "Foziljon",
                last_name: "Foziljon",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Android va IOS Developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
            {
                id: 2,
                first_name: "Samandar",
                last_name: "Nosirov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
        ],
        program: [
            {
                id: 1,
                name: "program name",
                description: "program description"
            }
        ],
        faq: [
            {
                id: 1,
                question: "Kurs menga mos keladimi?",
                answer: "Dasturlash tajribasi bo'lmagan yangi boshlanuvchilar va tajribasi kam bo'lgan yangi boshlanuvchilar uchun mo'ljallangan. Agar siz kodlash asoslari bilan allaqachon tanish bo'lsangiz, unda siz bilimingizni yangilashingiz mumkin. Agar yo'q bo'lsa, biz sizga hamma narsani o'rgatamiz."
            },
            {
                id: 2,
                question: " Kursni boshlash uchun qanday talablar mavjud?",
                answer: "Kursni boshlash uchun maktab matematikasidan bilim etarli bo'ladi. Siz noldan IT kasb yonalishda barcha kerakli ko'nikmalarni o'rganishingiz mumkin bo’ladi."
            },
            {
                id: 3,
                question: "Menga kursdan tashqari yordam beriladimi?",
                answer: "Albatta! Bir yil davomida siz o'qish paytida assistentga ega bo'lasiz. Siz kurslar va hatto hozirgi vazifalaringiz haqida savollar berishingiz mumkin. Siz assistent bilan qulay aloqa kanali orqali bog'lanishingiz mumkin: pochta yoki messenjerlar."
            },
            {
                id: 4,
                question: "Qanday qilib o'qish uchun pul to'lash mumkin?",
                answer: "Siz o'qish uchun bank kartasi yokida Click, Payme va Uzumpay ilovalar orqali to'lovni to'lashingiz yoki bir martalik to'lov o'rniga oylik to'lovni amalga oshirishingiz mumkin. Shuningdek, kursni yuridik shaxs hisobidan to'lash mumkin."
            },
            {
                id: 5,
                question: "Bu qanchalik qiyin?",
                answer: "Boshlash uchun siz qanday dasturlashni bilishingiz shart emas. Kurs oddiy narsalardan boshlanadi va asta-sekin murakkablashadi. Barcha materiallar, topshiriqlar, loyihalar aniq ko'nikmalarni egallashga qaratilgan bo'lib, ular oxir-oqibat bitiruvchi uchun rejalashtirilgan kasb darajasida rivojlanadi."
            },
            {
                id: 6,
                question: "Kursni boshlash uchun ingliz tilini bilishim kerakmi?",
                answer: "Ingliz tilining maktab dasturini bilish yetarlik. Barcha mashg'ulotlar o’zbek va rus tilida olib boriladi."
            },
            {
                id: 7,
                question: "Uy vazifalarimni kim tekshiradi?",
                answer: "Uy vazifalari o'qituvchilar tomonidan tekshiriladi. Siz batafsil fikr-mulohazalarni va tavsiyalarni olasiz."
            },
            {
                id: 8,
                question: "Ishga joylashishda qanday yordam beriladi?",
                answer: "Biz sizga o'zingizni qanday taqdim etishni o'rgatamiz: rezyume va portfoliolarni loyihalash, intervyu savollari bilan shug'ullanish. Va shuningdek, biz sizga tegishli bo'sh ish o'rinlarini mustaqil ravishda qidirishni o'rgatamiz."
            },
            {
                id: 9,
                question: "Nega men ushbu dasturni o'rganishim kerak?",
                answer: "Dastur davomida siz chuqur bilimga ega bo'lasiz, mutaxassisliklarni tanlaysiz, texnologiya va vositalarni o'rganasiz va 9 oydan keyin ish topishingiz, o'z loyihalaringizni ko'tarishingiz yoki targ'ib qilishingiz mumkin. Olingan ko'nikmalar korporativ muammolarni hal qilish, jamoani rivojlantirish, o'z biznesingiz yoki shaxsiy brendingiz muammolarini hal qilish uchun qo'llanilishi mumkin."
            },
            {
                id: 10,
                question: "Agar darsni o'tkazib yuborsam nima qilishim kerak?",
                answer: "Darsda o'z vaqtida qatnasha olmaganlar uchun biz har bir darsni yozib olamiz. Shuningdek, darslar uchun taqdimotlar va o'quv materiallari mavjud bo'lib, ular yordamida siz darslarga yaxshiroq tayyorgarlik ko'rishingiz va qo'shimcha bilimlarga ega bo'lishingiz mumkin."
            },
            {
                id: 11,
                question: "O’quv kursni bitta to'lov bilan to'lash kerakmi yoki bo'lib-bo'lib to'lash kerakmi?",
                answer: "Biz to'lovni amalga oshirish uchun bir nechta variantni taqdim etamiz. Siz butun miqdorni birdaniga to'lashingiz mumkin, shuningdek kursni bo’lib to’lash imkoniyati ham bor."
            }
        ]
    },
    {
        id: 3,
        status: "active",
        name: "Frontend",
        description: "HTML, CSS, Bootstrap, Web va Responsive Mobile sahifalarni tayorlash, JavaScript tilini chuqur o'rganish va VueJS/React frameworklarida SPA va SSR dasturlarni real proektkar asosida tayorlashni o'rganisiz.",
        image: "/courses/course-frontend.svg",
        color: "#e5daf6",
        module_count: 5,
        lesson_count: 60,
        duration: 5,
        intended_students: [
            {
                id: 2,
                title: "Boshlang’ich bilimga ega bo’lganlarga",
                description: "Dasturlash bo’yicha mutaxasis ma’lumotlar bilan ishlashni biladigan va ma’lumotlarni tahlil qilomoqchi yoki shu ma’lumotlar orqali avtomatlashtirmoqchi bo’lganlar."
            },
            {
                id: 3,
                title: "0 dan boshlamoqchi bo’lganlarga",
                description: "Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin"
            },
        ],
        course_benefits: [
            {
                id: 1,
                name: "HTML-ni yuqori darajaga ko'tarish, shuningdek CSS-ning ajoyib xususiyatlari bilan tanishish",
            },
            {
                id: 2,
                name: "Bir nechta website lar yaratish va ularni internetga joylash",
            },
            {
                id: 3,
                name: "Layout testi + DevTools asoslarini bilib olishingiz. Foydalanuvchi tajribasini (UX) qanday yaxshilashni tushunib va mukammal tartibga erishasiz",
            },
            {
                id: 4,
                name: "Javascript yordamida dinamik web sahifalar yarata olish",
            },
            {
                id: 5,
                name: "Bootstrap frameworki bilan tanishish, Bootstrap Component va Gridlari bilan ishlash",
            },
            {
                id: 6,
                name: "Javascript dasturi va uning asosiy operatorlari bilan tanishish",
            },
            {
                id: 7,
                name: "SASS Preprotsessori orqali kodlarni optimallashtirish",
            },
            {
                id: 8,
                name: "Javascriptda qo'shimcha turli kutubxonalar bilan ishlash",
            }
        ],
        mentors: [
            {
                id: 1,
                first_name: "Doston",
                last_name: "Rajabov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Frontend developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
            {
                id: 2,
                first_name: "Samandar",
                last_name: "Nosirov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
        ],
        program: [
            {
                id: 1,
                name: "program name",
                description: "program description"
            }
        ],
        faq: [
            {
                id: 1,
                question: "Kurs menga mos keladimi?",
                answer: "Dasturlash tajribasi bo'lmagan yangi boshlanuvchilar va tajribasi kam bo'lgan yangi boshlanuvchilar uchun mo'ljallangan. Agar siz kodlash asoslari bilan allaqachon tanish bo'lsangiz, unda siz bilimingizni yangilashingiz mumkin. Agar yo'q bo'lsa, biz sizga hamma narsani o'rgatamiz."
            },
            {
                id: 2,
                question: " Kursni boshlash uchun qanday talablar mavjud?",
                answer: "Kursni boshlash uchun maktab matematikasidan bilim etarli bo'ladi. Siz noldan IT kasb yonalishda barcha kerakli ko'nikmalarni o'rganishingiz mumkin bo’ladi."
            },
            {
                id: 3,
                question: "Menga kursdan tashqari yordam beriladimi?",
                answer: "Albatta! Bir yil davomida siz o'qish paytida assistentga ega bo'lasiz. Siz kurslar va hatto hozirgi vazifalaringiz haqida savollar berishingiz mumkin. Siz assistent bilan qulay aloqa kanali orqali bog'lanishingiz mumkin: pochta yoki messenjerlar."
            },
            {
                id: 4,
                question: "Qanday qilib o'qish uchun pul to'lash mumkin?",
                answer: "Siz o'qish uchun bank kartasi yokida Click, Payme va Uzumpay ilovalar orqali to'lovni to'lashingiz yoki bir martalik to'lov o'rniga oylik to'lovni amalga oshirishingiz mumkin. Shuningdek, kursni yuridik shaxs hisobidan to'lash mumkin."
            },
            {
                id: 5,
                question: "Bu qanchalik qiyin?",
                answer: "Boshlash uchun siz qanday dasturlashni bilishingiz shart emas. Kurs oddiy narsalardan boshlanadi va asta-sekin murakkablashadi. Barcha materiallar, topshiriqlar, loyihalar aniq ko'nikmalarni egallashga qaratilgan bo'lib, ular oxir-oqibat bitiruvchi uchun rejalashtirilgan kasb darajasida rivojlanadi."
            },
            {
                id: 6,
                question: "Kursni boshlash uchun ingliz tilini bilishim kerakmi?",
                answer: "Ingliz tilining maktab dasturini bilish yetarlik. Barcha mashg'ulotlar o’zbek va rus tilida olib boriladi."
            },
            {
                id: 7,
                question: "Uy vazifalarimni kim tekshiradi?",
                answer: "Uy vazifalari o'qituvchilar tomonidan tekshiriladi. Siz batafsil fikr-mulohazalarni va tavsiyalarni olasiz."
            },
            {
                id: 8,
                question: "Ishga joylashishda qanday yordam beriladi?",
                answer: "Biz sizga o'zingizni qanday taqdim etishni o'rgatamiz: rezyume va portfoliolarni loyihalash, intervyu savollari bilan shug'ullanish. Va shuningdek, biz sizga tegishli bo'sh ish o'rinlarini mustaqil ravishda qidirishni o'rgatamiz."
            },
            {
                id: 9,
                question: "Nega men ushbu dasturni o'rganishim kerak?",
                answer: "Dastur davomida siz chuqur bilimga ega bo'lasiz, mutaxassisliklarni tanlaysiz, texnologiya va vositalarni o'rganasiz va 9 oydan keyin ish topishingiz, o'z loyihalaringizni ko'tarishingiz yoki targ'ib qilishingiz mumkin. Olingan ko'nikmalar korporativ muammolarni hal qilish, jamoani rivojlantirish, o'z biznesingiz yoki shaxsiy brendingiz muammolarini hal qilish uchun qo'llanilishi mumkin."
            },
            {
                id: 10,
                question: "Agar darsni o'tkazib yuborsam nima qilishim kerak?",
                answer: "Darsda o'z vaqtida qatnasha olmaganlar uchun biz har bir darsni yozib olamiz. Shuningdek, darslar uchun taqdimotlar va o'quv materiallari mavjud bo'lib, ular yordamida siz darslarga yaxshiroq tayyorgarlik ko'rishingiz va qo'shimcha bilimlarga ega bo'lishingiz mumkin."
            },
            {
                id: 11,
                question: "O’quv kursni bitta to'lov bilan to'lash kerakmi yoki bo'lib-bo'lib to'lash kerakmi?",
                answer: "Biz to'lovni amalga oshirish uchun bir nechta variantni taqdim etamiz. Siz butun miqdorni birdaniga to'lashingiz mumkin, shuningdek kursni bo’lib to’lash imkoniyati ham bor."
            }
        ]
    },
    {
        id: 4,
        status: "active",
        name: "Foundation",
        description: "Kursda C++, Java, Python tillarida dasturlash asoslari, OOP va uning imkoniyatlari, Data Sturcture va algoritmlash, Telegram Bot yaritishni o'rganisiz.",
        image: "/courses/course-programming.svg",
        color: "#c2ffe7",
        module_count: 4,
        lesson_count: 48,
        duration: 4,
        intended_students: [
            {
                id: 1,
                title: "0 dan boshlamoqchi bo’lganlarga",
                description: "Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin"
            },
        ],
        course_benefits: [
            {
                id: 1,
                name: "Axborot texnologiyalari. Kompyuterning texnik va dasturiy ta’minoti",
            },
            {
                id: 2,
                name: "Axborotning o’lchov birliklari",
            },
            {
                id: 3,
                name: "Algoritm tushunchasi va turlari",
            },
            {
                id: 4,
                name: "Tartiblash algoritmlari",
            },
            {
                id: 5,
                name: "Obyektga yo’naltirilgan dasturlashni",
            },
            {
                id: 6,
                name: "Ma’lumotlar strukturasini",
            },
            {
                id: 7,
                name: "Qidirish algoritmlarini",
            },
            {
                id: 8,
                name: "Telegram bot yaratishni",
            },
            {
                id: 9,
                name: "Java, Python da ma’lumot turlari, o’zgaruvchilar bilan ishlash",
            },
            {
                id: 10,
                name: "Funksiya, satr va massivlar bilan ishlashni",
            }
        ],
        mentors: [
            {
                id: 1,
                first_name: "Alimardon",
                last_name: "Boqijonov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Python developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
            {
                id: 2,
                first_name: "Azamjon",
                last_name: "Nemadaliev",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Python developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
        ],
        program: [
            {
                id: 1,
                name: "program name",
                description: "program description"
            }
        ],
        faq: [
            {
                id: 1,
                question: "Kurs menga mos keladimi?",
                answer: "Dasturlash tajribasi bo'lmagan yangi boshlanuvchilar va tajribasi kam bo'lgan yangi boshlanuvchilar uchun mo'ljallangan. Agar siz kodlash asoslari bilan allaqachon tanish bo'lsangiz, unda siz bilimingizni yangilashingiz mumkin. Agar yo'q bo'lsa, biz sizga hamma narsani o'rgatamiz."
            },
            {
                id: 2,
                question: " Kursni boshlash uchun qanday talablar mavjud?",
                answer: "Kursni boshlash uchun maktab matematikasidan bilim etarli bo'ladi. Siz noldan IT kasb yonalishda barcha kerakli ko'nikmalarni o'rganishingiz mumkin bo’ladi."
            },
            {
                id: 3,
                question: "Menga kursdan tashqari yordam beriladimi?",
                answer: "Albatta! Bir yil davomida siz o'qish paytida assistentga ega bo'lasiz. Siz kurslar va hatto hozirgi vazifalaringiz haqida savollar berishingiz mumkin. Siz assistent bilan qulay aloqa kanali orqali bog'lanishingiz mumkin: pochta yoki messenjerlar."
            },
            {
                id: 4,
                question: "Qanday qilib o'qish uchun pul to'lash mumkin?",
                answer: "Siz o'qish uchun bank kartasi yokida Click, Payme va Uzumpay ilovalar orqali to'lovni to'lashingiz yoki bir martalik to'lov o'rniga oylik to'lovni amalga oshirishingiz mumkin. Shuningdek, kursni yuridik shaxs hisobidan to'lash mumkin."
            },
            {
                id: 5,
                question: "Bu qanchalik qiyin?",
                answer: "Boshlash uchun siz qanday dasturlashni bilishingiz shart emas. Kurs oddiy narsalardan boshlanadi va asta-sekin murakkablashadi. Barcha materiallar, topshiriqlar, loyihalar aniq ko'nikmalarni egallashga qaratilgan bo'lib, ular oxir-oqibat bitiruvchi uchun rejalashtirilgan kasb darajasida rivojlanadi."
            },
            {
                id: 6,
                question: "Kursni boshlash uchun ingliz tilini bilishim kerakmi?",
                answer: "Ingliz tilining maktab dasturini bilish yetarlik. Barcha mashg'ulotlar o’zbek va rus tilida olib boriladi."
            },
            {
                id: 7,
                question: "Uy vazifalarimni kim tekshiradi?",
                answer: "Uy vazifalari o'qituvchilar tomonidan tekshiriladi. Siz batafsil fikr-mulohazalarni va tavsiyalarni olasiz."
            },
            {
                id: 8,
                question: "Ishga joylashishda qanday yordam beriladi?",
                answer: "Biz sizga o'zingizni qanday taqdim etishni o'rgatamiz: rezyume va portfoliolarni loyihalash, intervyu savollari bilan shug'ullanish. Va shuningdek, biz sizga tegishli bo'sh ish o'rinlarini mustaqil ravishda qidirishni o'rgatamiz."
            },
            {
                id: 9,
                question: "Nega men ushbu dasturni o'rganishim kerak?",
                answer: "Dastur davomida siz chuqur bilimga ega bo'lasiz, mutaxassisliklarni tanlaysiz, texnologiya va vositalarni o'rganasiz va 9 oydan keyin ish topishingiz, o'z loyihalaringizni ko'tarishingiz yoki targ'ib qilishingiz mumkin. Olingan ko'nikmalar korporativ muammolarni hal qilish, jamoani rivojlantirish, o'z biznesingiz yoki shaxsiy brendingiz muammolarini hal qilish uchun qo'llanilishi mumkin."
            },
            {
                id: 10,
                question: "Agar darsni o'tkazib yuborsam nima qilishim kerak?",
                answer: "Darsda o'z vaqtida qatnasha olmaganlar uchun biz har bir darsni yozib olamiz. Shuningdek, darslar uchun taqdimotlar va o'quv materiallari mavjud bo'lib, ular yordamida siz darslarga yaxshiroq tayyorgarlik ko'rishingiz va qo'shimcha bilimlarga ega bo'lishingiz mumkin."
            },
            {
                id: 11,
                question: "O’quv kursni bitta to'lov bilan to'lash kerakmi yoki bo'lib-bo'lib to'lash kerakmi?",
                answer: "Biz to'lovni amalga oshirish uchun bir nechta variantni taqdim etamiz. Siz butun miqdorni birdaniga to'lashingiz mumkin, shuningdek kursni bo’lib to’lash imkoniyati ham bor."
            }
        ]
    },
    {
        id: 5,
        status: "active",
        name: "Java Backend",
        description: "Java (Spring) til asosida monolit va microservice larni qurish, Data Base, turli API, WEB dasturlarni yaratish va serverga yuklashni proektlar asosida o’rganasiz.",
        image: "/courses/course-java.svg",
        color: "#f7bfc1",
        module_count: 6,
        lesson_count: 72,
        duration: 6,
        intended_students: [
            {
                id: 1,
                title: "Boshlang’ich bilimga ega bo’lganlarga",
                description: "Dasturlash bo’yicha mutaxasis ma’lumotlar bilan ishlashni biladigan va ma’lumotlarni tahlil qilomoqchi yoki shu ma’lumotlar orqali avtomatlashtirmoqchi bo’lganlar."
            },
            {
                id: 2,
                title: "0 dan boshlamoqchi bo’lganlarga",
                description: "Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin"
            },
            {
                id: 3,
                title: "Kuchli sabr va ishtiyoqga ega bo’lgan insonlarga",
                description: "Siz o’zingizni har qanday muammoli vaziyatga nisbatan sabrli va o’z ichki motivatsiyasiga ega inson deb bilsangiz, siz nafaqat dasturchi balki har qanday kasb egasi bo’la olasiz."
            }
        ],
        course_benefits: [
            {
                id: 1,
                name: "Javada ma'lumotlar ombori bilan ishlash(jdbc)",
            },
            {
                id: 2,
                name: "Fayllarni server va databasega saqlash va olish",
            },
            {
                id: 3,
                name: "Spring security bilan ishlash",
            },
            {
                id: 4,
                name: "Spring framework(bean, core, context) spring mvc",
            },
            {
                id: 5,
                name: "Spring bootda loyiha qurish(clickup.com backend qismi)",
            },
            {
                id: 6,
                name: "Spring framework jpa yordamida ma'lumotlar ombori bilan ishlash",
            },
            {
                id: 7,
                name: "Rest full api yoza olish",
            }
        ],
        mentors: [
            {
                id: 1,
                first_name: "Hasanboy",
                last_name: "Xalilov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java Backend developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
            {
                id: 2,
                first_name: "Samandar",
                last_name: "Nosirov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
        ],
        program: [
            {
                id: 1,
                name: "program name",
                description: "program description"
            }
        ],
        faq: [
            {
                id: 1,
                question: "Kurs menga mos keladimi?",
                answer: "Dasturlash tajribasi bo'lmagan yangi boshlanuvchilar va tajribasi kam bo'lgan yangi boshlanuvchilar uchun mo'ljallangan. Agar siz kodlash asoslari bilan allaqachon tanish bo'lsangiz, unda siz bilimingizni yangilashingiz mumkin. Agar yo'q bo'lsa, biz sizga hamma narsani o'rgatamiz."
            },
            {
                id: 2,
                question: " Kursni boshlash uchun qanday talablar mavjud?",
                answer: "Kursni boshlash uchun maktab matematikasidan bilim etarli bo'ladi. Siz noldan IT kasb yonalishda barcha kerakli ko'nikmalarni o'rganishingiz mumkin bo’ladi."
            },
            {
                id: 3,
                question: "Menga kursdan tashqari yordam beriladimi?",
                answer: "Albatta! Bir yil davomida siz o'qish paytida assistentga ega bo'lasiz. Siz kurslar va hatto hozirgi vazifalaringiz haqida savollar berishingiz mumkin. Siz assistent bilan qulay aloqa kanali orqali bog'lanishingiz mumkin: pochta yoki messenjerlar."
            },
            {
                id: 4,
                question: "Qanday qilib o'qish uchun pul to'lash mumkin?",
                answer: "Siz o'qish uchun bank kartasi yokida Click, Payme va Uzumpay ilovalar orqali to'lovni to'lashingiz yoki bir martalik to'lov o'rniga oylik to'lovni amalga oshirishingiz mumkin. Shuningdek, kursni yuridik shaxs hisobidan to'lash mumkin."
            },
            {
                id: 5,
                question: "Bu qanchalik qiyin?",
                answer: "Boshlash uchun siz qanday dasturlashni bilishingiz shart emas. Kurs oddiy narsalardan boshlanadi va asta-sekin murakkablashadi. Barcha materiallar, topshiriqlar, loyihalar aniq ko'nikmalarni egallashga qaratilgan bo'lib, ular oxir-oqibat bitiruvchi uchun rejalashtirilgan kasb darajasida rivojlanadi."
            },
            {
                id: 6,
                question: "Kursni boshlash uchun ingliz tilini bilishim kerakmi?",
                answer: "Ingliz tilining maktab dasturini bilish yetarlik. Barcha mashg'ulotlar o’zbek va rus tilida olib boriladi."
            },
            {
                id: 7,
                question: "Uy vazifalarimni kim tekshiradi?",
                answer: "Uy vazifalari o'qituvchilar tomonidan tekshiriladi. Siz batafsil fikr-mulohazalarni va tavsiyalarni olasiz."
            },
            {
                id: 8,
                question: "Ishga joylashishda qanday yordam beriladi?",
                answer: "Biz sizga o'zingizni qanday taqdim etishni o'rgatamiz: rezyume va portfoliolarni loyihalash, intervyu savollari bilan shug'ullanish. Va shuningdek, biz sizga tegishli bo'sh ish o'rinlarini mustaqil ravishda qidirishni o'rgatamiz."
            },
            {
                id: 9,
                question: "Nega men ushbu dasturni o'rganishim kerak?",
                answer: "Dastur davomida siz chuqur bilimga ega bo'lasiz, mutaxassisliklarni tanlaysiz, texnologiya va vositalarni o'rganasiz va 9 oydan keyin ish topishingiz, o'z loyihalaringizni ko'tarishingiz yoki targ'ib qilishingiz mumkin. Olingan ko'nikmalar korporativ muammolarni hal qilish, jamoani rivojlantirish, o'z biznesingiz yoki shaxsiy brendingiz muammolarini hal qilish uchun qo'llanilishi mumkin."
            },
            {
                id: 10,
                question: "Agar darsni o'tkazib yuborsam nima qilishim kerak?",
                answer: "Darsda o'z vaqtida qatnasha olmaganlar uchun biz har bir darsni yozib olamiz. Shuningdek, darslar uchun taqdimotlar va o'quv materiallari mavjud bo'lib, ular yordamida siz darslarga yaxshiroq tayyorgarlik ko'rishingiz va qo'shimcha bilimlarga ega bo'lishingiz mumkin."
            },
            {
                id: 11,
                question: "O’quv kursni bitta to'lov bilan to'lash kerakmi yoki bo'lib-bo'lib to'lash kerakmi?",
                answer: "Biz to'lovni amalga oshirish uchun bir nechta variantni taqdim etamiz. Siz butun miqdorni birdaniga to'lashingiz mumkin, shuningdek kursni bo’lib to’lash imkoniyati ham bor."
            }
        ]
    },
    {
        id: 6,
        status: "active",
        name: "Data Science (AI/ML)",
        description: "Ma’lumotlar muhandisligi - injinerligi kursimiz sizga “Data Science” va AI asoslarini, “Machine Learning“ning amaliy qo’llanilishi, algoritmlar va ular bilan ishlashni o’rgatadi.",
        image: "/courses/course-ai.svg",
        color: "#a0cef8",
        module_count: 6,
        lesson_count: 72,
        duration: 6,
        intended_students: [
            {
                id: 1,
                title: "Data sciencega qizquvchilar",
                description: "Bu sohaga qiziqib, katta hajmdagi ma'lumotlarga ega bolgan va ulardan sun'iy intellek asosida ishlaydigan dasturlar orqali katta hajimdagi ma'lumotlarni tahlil qilishni (Data sciense) va ulardan foydali ma'lumotlar olimoqchil bo'lganlar"
            },
            {
                id: 2,
                title: "Boshlang’ich bilimga ega bo’lganlarga",
                description: "Dasturlash bo’yicha mutaxasis ma’lumotlar bilan ishlashni biladigan va ma’lumotlarni tahlil qilomoqchi yoki shu ma’lumotlar orqali avtomatlashtirmoqchi bo’lganlar."
            },
            {
                id: 3,
                title: "Matematik va statistiklar",
                description: "Matematiklar va statiklar katta miqdordagi ma’lumotlar bilan ishlash ulardan foydalanib tahlil qilish yoki kelajakda foydalanish uchun ma’lumotlarni bir joyga jamlamoqchi bo’lganlar"
            }
        ],
        course_benefits: [
            {
                id: 1,
                name: "Analitik fikr yuritishni",
            },
            {
                id: 2,
                name: "Manbalardan ma'lumotlarni ajratib olishni",
            },
            {
                id: 3,
                name: "Analitik modellarni yaratish",
            },
            {
                id: 4,
                name: "Data Science vositalari bilan ishlash",
            }
        ],
        mentors: [
            {
                id: 1,
                first_name: "Azamjon",
                last_name: "Nemadaliev",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Senior Data Scientist",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
            {
                id: 2,
                first_name: "Samandar",
                last_name: "Nosirov",
                image: {
                    square: "/mentors/mentor-samandar-nosirov.jpg"
                },
                profession: "Java developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet."
            },
        ],
        program: [
            {
                id: 1,
                name: "program name",
                description: "program description"
            }
        ],
        faq: [
            {
                id: 1,
                question: "Kurs menga mos keladimi?",
                answer: "Dasturlash tajribasi bo'lmagan yangi boshlanuvchilar va tajribasi kam bo'lgan yangi boshlanuvchilar uchun mo'ljallangan. Agar siz kodlash asoslari bilan allaqachon tanish bo'lsangiz, unda siz bilimingizni yangilashingiz mumkin. Agar yo'q bo'lsa, biz sizga hamma narsani o'rgatamiz."
            },
            {
                id: 2,
                question: " Kursni boshlash uchun qanday talablar mavjud?",
                answer: "Kursni boshlash uchun maktab matematikasidan bilim etarli bo'ladi. Siz noldan IT kasb yonalishda barcha kerakli ko'nikmalarni o'rganishingiz mumkin bo’ladi."
            },
            {
                id: 3,
                question: "Menga kursdan tashqari yordam beriladimi?",
                answer: "Albatta! Bir yil davomida siz o'qish paytida assistentga ega bo'lasiz. Siz kurslar va hatto hozirgi vazifalaringiz haqida savollar berishingiz mumkin. Siz assistent bilan qulay aloqa kanali orqali bog'lanishingiz mumkin: pochta yoki messenjerlar."
            },
            {
                id: 4,
                question: "Qanday qilib o'qish uchun pul to'lash mumkin?",
                answer: "Siz o'qish uchun bank kartasi yokida Click, Payme va Uzumpay ilovalar orqali to'lovni to'lashingiz yoki bir martalik to'lov o'rniga oylik to'lovni amalga oshirishingiz mumkin. Shuningdek, kursni yuridik shaxs hisobidan to'lash mumkin."
            },
            {
                id: 5,
                question: "Bu qanchalik qiyin?",
                answer: "Boshlash uchun siz qanday dasturlashni bilishingiz shart emas. Kurs oddiy narsalardan boshlanadi va asta-sekin murakkablashadi. Barcha materiallar, topshiriqlar, loyihalar aniq ko'nikmalarni egallashga qaratilgan bo'lib, ular oxir-oqibat bitiruvchi uchun rejalashtirilgan kasb darajasida rivojlanadi."
            },
            {
                id: 6,
                question: "Kursni boshlash uchun ingliz tilini bilishim kerakmi?",
                answer: "Ingliz tilining maktab dasturini bilish yetarlik. Barcha mashg'ulotlar o’zbek va rus tilida olib boriladi."
            },
            {
                id: 7,
                question: "Uy vazifalarimni kim tekshiradi?",
                answer: "Uy vazifalari o'qituvchilar tomonidan tekshiriladi. Siz batafsil fikr-mulohazalarni va tavsiyalarni olasiz."
            },
            {
                id: 8,
                question: "Ishga joylashishda qanday yordam beriladi?",
                answer: "Biz sizga o'zingizni qanday taqdim etishni o'rgatamiz: rezyume va portfoliolarni loyihalash, intervyu savollari bilan shug'ullanish. Va shuningdek, biz sizga tegishli bo'sh ish o'rinlarini mustaqil ravishda qidirishni o'rgatamiz."
            },
            {
                id: 9,
                question: "Nega men ushbu dasturni o'rganishim kerak?",
                answer: "Dastur davomida siz chuqur bilimga ega bo'lasiz, mutaxassisliklarni tanlaysiz, texnologiya va vositalarni o'rganasiz va 9 oydan keyin ish topishingiz, o'z loyihalaringizni ko'tarishingiz yoki targ'ib qilishingiz mumkin. Olingan ko'nikmalar korporativ muammolarni hal qilish, jamoani rivojlantirish, o'z biznesingiz yoki shaxsiy brendingiz muammolarini hal qilish uchun qo'llanilishi mumkin."
            },
            {
                id: 10,
                question: "Agar darsni o'tkazib yuborsam nima qilishim kerak?",
                answer: "Darsda o'z vaqtida qatnasha olmaganlar uchun biz har bir darsni yozib olamiz. Shuningdek, darslar uchun taqdimotlar va o'quv materiallari mavjud bo'lib, ular yordamida siz darslarga yaxshiroq tayyorgarlik ko'rishingiz va qo'shimcha bilimlarga ega bo'lishingiz mumkin."
            },
            {
                id: 11,
                question: "O’quv kursni bitta to'lov bilan to'lash kerakmi yoki bo'lib-bo'lib to'lash kerakmi?",
                answer: "Biz to'lovni amalga oshirish uchun bir nechta variantni taqdim etamiz. Siz butun miqdorni birdaniga to'lashingiz mumkin, shuningdek kursni bo’lib to’lash imkoniyati ham bor."
            }
        ]
    }
]