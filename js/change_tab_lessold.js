let button_education = document.getElementById('button_education');
let button_skills = document.getElementById('button_skills');
let button_projects = document.getElementById('button_projects');

let item_title = document.getElementById('p_item_title');
let item_date = document.getElementById('p_item_date');
let item_image = document.getElementById('p_item_image');
let item_desc = document.getElementById('p_item_desc');


let button_education_1 = document.getElementById('button_education_1');
let button_education_2 = document.getElementById('button_education_2');
let button_education_3 = document.getElementById('button_education_3');

let bi_e_1 = document.getElementById('bi_e_1');

let bi_p_1 = document.getElementById('bi_p_1');
let bi_p_2 = document.getElementById('bi_p_2');
let bi_p_3 = document.getElementById('bi_p_3');
let bi_p_4 = document.getElementById('bi_p_4');

let bi_s_1 = document.getElementById('bi_s_1');
let bi_s_2 = document.getElementById('bi_s_2');
let bi_s_3 = document.getElementById('bi_s_3');
let bi_s_4 = document.getElementById('bi_s_4');

let education_nav_list = document.getElementById('education_nav_list');
let project_nav_list = document.getElementById('project_nav_list');
let skills_nav_list = document.getElementById('skills_nav_list');

let tab_education = document.getElementById('education');
let tab_content = document.getElementById('content');
let tab_skills = document.getElementById('skills');
let card_container = document.getElementById('card_container');

let current_card;
// const data = require('../data.json')

let content = document.getElementById('content');

let currentTab = "education";

button_education.addEventListener('click', async () => {

    let card = document.createElement("div");
    let title = document.createElement("h6");
    let text = document.createElement("p");
    card.setAttribute('class', 'card')
    title.setAttribute('class', 'card_title')
    text.setAttribute('class', 'card_text')
    card.appendChild(title);
    card.appendChild(text);

    card.addEventListener('click', async () => {
        
        cardClick(event.target)
        
    })
    card.addEventListener("animationend", () => {
        //project_display.removeAttribute('class', 'project_display_reload')
        if(event.animationName = "card_grow"){
            event.target.scrollIntoView({
                block: 'end',
                behavior: 'smooth',
                inline: 'center'
            })
        } else if (event.animationName = "card_shrink"){
            console.log("shrink")
            event.target.setAttribute('class', 'card')
        }
        
    });

    title.innerText = "NSCC - It web Programming";
    text.innerText = "I began my programming";

    card_container.appendChild(card);

    tab_content.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
    })
})

function turnOff_tab(element){
    element.removeAttribute('class', 'tab_active')
    element.setAttribute('class', 'tab_inactive')
}

function turnOn_tab(element){
    element.removeAttribute('class', 'tab_inactive')
    element.setAttribute('class', 'tab_active')
}

function turnOff_button(element){
    element.removeAttribute('class', 'active')
    element.setAttribute('class', 'inactive')
}
function turnOn_button(element){
    element.removeAttribute('class', 'inactive')
    element.setAttribute('class', 'active')
}




function cardClick(e){
    //If card is active, turn off
    if(e.classList.contains("card_active")){


        console.log("T")
        current_card = null;
        e.setAttribute('class', 'card card_inactive')


    //If card is not active, turn on
    } else {
        console.log("Te")
        e.setAttribute('class', 'card card_active')

        if(current_card != null){
            current_card.setAttribute('class', 'card card_inactive')

        }
        current_card = event.target;


    }
}


function isFirst(){
    if(content.classList.contains("item_display_initial")){

        content.removeAttribute('class', 'item_display_initial')

        content.setAttribute('class', 'item_display_first_reload')
    } else {
        content.setAttribute('class', 'item_display_reload')
    }
}


content.addEventListener("animationend", () => {
    //project_display.removeAttribute('class', 'project_display_reload')
    content.classList.remove("item_display_reload");
});

const jsonData2 = {
    education: [
        {
            title: "NSCC - IT web development",
            date: "",
            image: "../img/decoration_2.png",
            desc: "I began my studies at NSCC in 2021. Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "experience 2",
            date: "2022 - 2023",
            image: "../img/decoration_2.png",
            desc: "beep bop cotton eye joe!  ee;emrf"
        },
        {
            title: "education 3",
            date: "2022 - 2023",
            image: "../img/decoration_2.png",
            desc: "beep bop cotton eye joe 4444!"
        }
    ],
    skills: [
        {
            title: "Languages",
            date: "2022 - 2023",
            image: "img/skills_unity.png",
            desc: "I began my programming journey with LUA, a scripting language commonly used in game development on the Roblox platform. After that, I transitioned to using C# with Unity, which allowed me to develop my game development skills. Later on, I attended NSCC where I expanded my knowledge by learning several important programming languages, including JavaScript, PHP, and Java."
        },
        {
            title: "React",
            date: "2022 - 2023",
            image: "../img/skills_wordpress.png",
            desc: "I have experience building websites using React. I've built one website from scratch and worked on another fully functioning website. I'm proficient in using React components, managing state, and leveraging third-party libraries and frameworks. With my React skills, I am confident in my ability to create high-quality and scalable websites."
        },
        {
            title: "Wordpress",
            date: "2022 - 2023",
            image: "../img/skills_wordpress.png",
            desc: "I have experience administering WordPress websites, including Bobatea. I'm proficient in updating content, managing website themes, and troubleshooting common issues. With my experience, I am confident in my ability to effectively manage and maintain WordPress websites."
        },
        {
            title: "Programs",
            date: "2022 - 2023",
            image: "img/skills_unity.png",
            desc: "I have extensive experience using Unity, Blender, and GIMP. These tools have allowed me to develop my skills in 3D modeling, game development, and graphic design. I also have some knowledge of Photoshop and Illustrator, although my experience with these programs is more limited. With my skills in Unity, Blender, and GIMP, I am confident in my ability to create visually appealing and engaging digital content."
        }
    ],
    project: [
        {
            title: "Notepad",
            date: "2022 - 2023",
            image: "../img/project_notepad.png",
            desc: "A clean and minimalist notepad application i built using Electron.js. As well as the basic functionality for a notepad app, it can also remember your last unsaved session."
        },
        {
            title: "Fullstack App",
            date: "2022 - 2023",
            image: "../img/project_azure.png",
            desc: "A Fullstack application I built with the MERN stack. It will list all the known planets, as well as allow the user to add, modify, or delete them"
        },
        {
            title: "Portfolio",
            date: "2022 - 2023",
            image: "../img/project_notepad.png",
            desc: "This portfolio! I created this portfolio in less than 24 hours! Pretty impressive eh?"
        },
        {
            title: "Lendahand",
            date: "2023 - 2023",
            image: "../img/project_notepad.png",
            desc: "Lendahand is a website my team and i built while we were studying at NSCC. It's a commuity-focused website where users can request/give community members a hand."
        }
    ]
}


const jsonData = {
    education: [
        {
            title: "NSCC",
            date: "2022 - 2023",
            image: "../img/decoration_2.png",
            desc: "I began my studies at NSCC in 2021. Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "experience 2",
            date: "2022 - 2023",
            image: "../img/decoration_2.png",
            desc: "beep bop cotton eye joe!  ee;emrf"
        },
        {
            title: "education 3",
            date: "2022 - 2023",
            image: "../img/decoration_2.png",
            desc: "beep bop cotton eye joe 4444!"
        }
    ],
    skills: [
        {
            title: "Languages",
            date: "2022 - 2023",
            image: "img/skills_unity.png",
            desc: "I began my programming journey with LUA, a scripting language commonly used in game development on the Roblox platform. After that, I transitioned to using C# with Unity, which allowed me to develop my game development skills. Later on, I attended NSCC where I expanded my knowledge by learning several important programming languages, including JavaScript, PHP, and Java."
        },
        {
            title: "React",
            date: "2022 - 2023",
            image: "../img/skills_wordpress.png",
            desc: "I have experience building websites using React. I've built one website from scratch and worked on another fully functioning website. I'm proficient in using React components, managing state, and leveraging third-party libraries and frameworks. With my React skills, I am confident in my ability to create high-quality and scalable websites."
        },
        {
            title: "Wordpress",
            date: "2022 - 2023",
            image: "../img/skills_wordpress.png",
            desc: "I have experience administering WordPress websites, including Bobatea. I'm proficient in updating content, managing website themes, and troubleshooting common issues. With my experience, I am confident in my ability to effectively manage and maintain WordPress websites."
        },
        {
            title: "Programs",
            date: "2022 - 2023",
            image: "img/skills_unity.png",
            desc: "I have extensive experience using Unity, Blender, and GIMP. These tools have allowed me to develop my skills in 3D modeling, game development, and graphic design. I also have some knowledge of Photoshop and Illustrator, although my experience with these programs is more limited. With my skills in Unity, Blender, and GIMP, I am confident in my ability to create visually appealing and engaging digital content."
        }
    ],
    project: [
        {
            title: "Notepad",
            date: "2022 - 2023",
            image: "../img/project_notepad.png",
            desc: "A clean and minimalist notepad application i built using Electron.js. As well as the basic functionality for a notepad app, it can also remember your last unsaved session."
        },
        {
            title: "Fullstack App",
            date: "2022 - 2023",
            image: "../img/project_azure.png",
            desc: "A Fullstack application I built with the MERN stack. It will list all the known planets, as well as allow the user to add, modify, or delete them"
        },
        {
            title: "Portfolio",
            date: "2022 - 2023",
            image: "../img/project_notepad.png",
            desc: "This portfolio! I created this portfolio in less than 24 hours! Pretty impressive eh?"
        },
        {
            title: "Lendahand",
            date: "2023 - 2023",
            image: "../img/project_notepad.png",
            desc: "Lendahand is a website my team and i built while we were studying at NSCC. It's a commuity-focused website where users can request/give community members a hand."
        }
    ]
}