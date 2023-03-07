const en = {
    "profile-description": "Full Stack Developer",
    "home": "Home",
    "about": "About",
    "skills": "Skills",
    "contact": "Contact",
    "name": "Name",
    "age": "Age",
    "country": "Country",
    "city": "City",
    "english": "EN",
    "portuguese": "PT",
    "brazil": "Brazil",
    "dev-skills": "Skills",
    "languages": "Languages",
    "greeting": "Welcome to my portfolio, my name is",
    "ocupation": "And i'm a Full Stack Web Developer",
    "introduction": "I have experience in designing and developing web APIs and web pages. I built this portfolio to tell about myself and show some personal projects that I developed. I hope you have a good read.",
    "introduction-first-line": "My name is Vinicius, I have always been interested in technology," +
        "with the video games I played, and much more when I started to have access to computers." +
        "This interest led me to find out how those softwares or websites worked," +
        "that seemed to complex for me when I was younger," +
        "but eventually when I decided the area I wanted to work in and started to study" +
        "everything became much clearer and I started to like it even more.",
    "introduction-second-line": "I started working with some desktop windows forms software," +
        "but as soon as I started to get in touch with the web development's world and I started to" +
        "and started to understand more about how it works I fell in love with it.",
    "introduction-third-line": "Technologies I have experience in production:",
    "introduction-fourth-line": "Some technologies that I have been working with in personal projects: ",
    "introduction-fifth-line": "Languages I speak:"
};

const ptBR = {
    "profile-description": "Desenvolvedor Full Stack",
    "home": "Início",
    "about": "Sobre",
    "skills": "Habilidades",
    "contact": "Contato",
    "name": "Nome",
    "age": "Idade",
    "country": "País",
    "city": "Cidade",
    "english": "EN",
    "portuguese": "PT",
    "brazil": "Brasil",
    "dev-skills": "Habilidades",
    "languages": "Idiomas",
    "greeting": "Seja bem vindo ao meu portfolio, meu nome é",
    "ocupation": "E eu sou um Desenvolvedor Web Full Stack",
    "introduction": "Eu tenho experiência em projetar e desenvolvedor Web APIs e páginas web." +
        "Eu construi esse portfolio para falar um pouco sobre mim e mostrar alguns projetos pessoais que eu desenvolvi. Eu esperi que você tenha uma boa leitura.",
    "introduction-first-line": "Meu nome é Vinicius, desde novo sempre me interessei por tecnologia," +
        "desde video games, e bem mais quando comecei a ter acesso a computadores." +
        "Esse interesse me levou a querer descobrir como aqueles pogramas ou sites" +
        "funcionavam," +
        "aquilo parecia complexo demais para mim quando mais novo," +
        "mas eventualmente quando decidi a área que queria atuar e comecei a estudar mais," +
        "tudo aquilo ficou bem mais claro e eu comecei a gostar ainda mais da área que eu" +
        "havia escolhido.",
    "introduction-second-line": "Comecei trabalhando com alguns softwares desktop windows forms," +
        "mas logo que comecei a ter contato com o mundo do desenvolvimento web e quando comecei a" +
        "entender mais como aquilo funcionava eu acabei me apaixonando.",
    "introduction-third-line": "Tecnologias que possuo experiência em produção:",
    "introduction-fourth-line": "Algumas tecnologias que utilizei em projetos pessoais:",
    "introduction-fifth-line": "Idiomas:"
};

function Initialize() {

    let ageElement = document.getElementById("age-text");
    ageElement.innerText = getMyAge();

    initializeLanguage();
}

function getMyAge() {
    var myBDay = new Date(1997, 9, 15);
    var diff = Date.now() - myBDay.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}

function initializeLanguage() {
    let currentLang = getLanguage();

    let languageRes = en;

    changeLanguageButton(currentLang);

    if (currentLang == "pt-BR") {
        languageRes = ptBR;
    }

    document.getElementById("en-button").innerText = languageRes["english"];
    document.getElementById("pt-button").innerText = languageRes["portuguese"];

    document.getElementById("greeting-title").innerText = languageRes["greeting"];
    document.getElementById("ocupation-title").innerText = languageRes["ocupation"];
    document.getElementById("welcome-introduction-text").innerText = languageRes["introduction"] + '😀';

    document.getElementById("introduction-first-line").innerText = languageRes["introduction-first-line"];
    document.getElementById("introduction-second-line").innerText = languageRes["introduction-second-line"];
    document.getElementById("introduction-third-line").innerText = languageRes["introduction-third-line"];
    document.getElementById("introduction-fourth-line").innerText = languageRes["introduction-fourth-line"];
    document.getElementById("introduction-fifth-line").innerText = languageRes["introduction-fifth-line"];

    document.getElementById("country-text").innerText = languageRes["brazil"];

    document.getElementById("home-menu").innerText = languageRes["home"];
    document.getElementById("about-menu").innerText = languageRes["about"];
    document.getElementById("contact-menu").innerText = languageRes["contact"];
    document.getElementById("about-title").innerText = languageRes["about"];
    document.getElementById("contact-title").innerText = languageRes["contact"];

    document.getElementById("name-label").innerText = languageRes["name"] + ":";
    document.getElementById("age-label").innerText = languageRes["age"] + ":";
    document.getElementById("country-label").innerText = languageRes["country"] + ":";
    document.getElementById("city-label").innerText = languageRes["city"] + ":";

    document.getElementById("dev-skills-title").innerText = languageRes["dev-skills"];
    document.getElementById("languages-title").innerText = languageRes["languages"];
}

function getLanguage() {
    let lang = window.localStorage.getItem("lang");

    if (lang == null || lang == "") {
        return "en";
    }

    return lang;
}

function setLanguage(language) {

    changeLanguageButton();
    window.localStorage.setItem("lang", language);
    initializeLanguage();
}

function changeLanguageButton(language) {

    if (language == "en") {
        if (!document.getElementById("en-button").classList.contains("selected")) {
            document.getElementById("en-button").classList.add("selected");
            document.getElementById("pt-button").classList.remove("selected");
        }
    }
    else if (language == "pt-BR") {
        if (!document.getElementById("pt-button").classList.contains("selected")) {
            document.getElementById("en-button").classList.remove("selected");
            document.getElementById("pt-button").classList.add("selected");
        }
    }
}