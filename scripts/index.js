const en = {
    "profile-description": "Full Stack Developer",
    "about": "About",
    "skills": "Skills",
    "contact": "Contact",
    "name": "Name",
    "age": "Age",
    "country": "Country",
    "city": "City",
    "english": "English",
    "portuguese": "Portuguese",
    "brazil": "Brazil",
    "dev-skills": "Skills",
    "languages": "Languages"
};

const ptBR = {
    "profile-description": "Desenvolvedor Full Stack",
    "about": "Sobre",
    "skills": "Habilidades",
    "contact": "Contato",
    "name": "Nome",
    "age": "Idade",
    "country": "País",
    "city": "Cidade",
    "english": "Inglês",
    "portuguese": "Português",
    "brazil": "Brasil",
    "dev-skills": "Habilidades",
    "languages": "Idiomas"
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

    document.getElementById("country-text").innerText = languageRes["brazil"];

    document.getElementById("profile-description").innerText = languageRes["profile-description"];
    document.getElementById("about-menu").innerText = languageRes["about"];
    document.getElementById("skills-menu").innerText = languageRes["skills"];
    document.getElementById("contact-menu").innerText = languageRes["contact"];
    document.getElementById("about-title").innerText = languageRes["about"];
    document.getElementById("skills-title").innerText = languageRes["skills"];
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