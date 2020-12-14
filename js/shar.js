var texts = [
    {  logo: "logo/Carlsberg.png", 
        text: "В точности как Мадс Миккельсен в рекламной кампании Carlsberg",
        slogan: "Будь брутальным!" 
    },
    {   logo: "logo/ZateckyGus.png", 
        text: "В этом не сомневайся, ведь наш чешский друг Пан Гус уже поднял за тебя бокал пива Žatecký Gus.",
        slogan: "Все будет хорошечно!" 
    },
    {   logo: "logo/garage.png", 
        text: "Выбери свой любимый вкус S&R's Garage и почувствуй удовольствие на вкус.",
        slogan: "Расслабься!" 
    },
    {   logo: "logo/baltika.png", 
        text: "У «Балтики 6» получилось стать одним из самых титулованных сортов российского пива и завоевать престижные международные награды. И у тебя все получится!",
        slogan: "Будь уверенным!!" 
    },
    {   logo: "logo/FlashUp.png", 
        text: " Космической энергии и бодрости в новом году тебе придаст Flash Up!",
        slogan: "Решайся!" 
    },
    {   logo: "logo/Tuborg.png", 
        text: " Отличное настроение тебе подарит Tuborg — завсегдатай музыкальных фестивалей и вечеринок.",
        slogan: "Почувствуй Woo-Hoo!" 
    },
    {   logo: "logo/Blanc.png", 
        text: " Обратись к Kronenbourg 1664 Blanc — французской классике, которая покорила не одно сердце своей изысканной утонченностью.",
        slogan: "Включи свой шарм!" 
    },    
    {   logo: "logo/baltika.png", 
        text: "Подпитывайся духом соревнования на чемпионате мира по хоккею — 2021 вместе с «Балтикой 3» и «Балтикой 7».",
        slogan: "Побеждай!" 
    },
    {   logo: "logo/baltika.png", 
        text: " Бери в руки гитару, пой вместе с Семеном Слепаковым и пей замягчательное пиво «Балтика 7 Мягкое»!",
        slogan: "Будь звездой!" 
    },
    {   logo: "logo/baltika.png", 
        text: "«Балтика 0» поддержит тебя в спортивных марафонах. Просто надевай удобные кроссовки, беги или иди. Главное — верь в себя и двигайся навстречу мечте!",
        slogan: "Преодолевай дистанции!" 
    }

]

var $btnStart = document.querySelector(".js_start");
var $bigText = document.querySelector(".js_big_text");
var $logo = document.querySelector(".js_logo");
var $textShar = document.querySelector(".js_shar_text span");
var $white_text_box1 = document.querySelector(".super-shar__bottom");
var $white_text_box = document.querySelector(".super-shar__row");



var start_f = function() {
    $white_text_box1.classList.add('acitve');
    $white_text_box.classList.remove('acitve');
   
    
    $textShar.classList.remove('acitve');
    $textShar.textContent = "";
 
    var rand = texts[Math.floor(Math.random() * texts.length)];
    console.log(rand);
    console.log(texts[1].logo,texts[1].text, texts[1].slogan );
    $bigText.textContent = rand.text;
    $logo.src = rand.logo;
    $textShar.textContent = rand.slogan;
    
    function animText() {
        $textShar.classList.add('acitve');
        $white_text_box.classList.add('acitve');
    }
    setTimeout(animText, 300);

}

$btnStart.addEventListener('click', start_f); 

// $bigText $logo $textShar
