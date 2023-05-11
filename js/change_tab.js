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

// const data = require('../data.json')

let content = document.getElementById('content');

let currentTab = "education";

button_education.addEventListener('click', async () => {

    // turnOn_tab(tab_education);
    // turnOff_tab(tab_content);


    turnOn_tab(tab_content);
    //turnOff_tab(tab_education);

    //turnOff_tab(tab_skills);
    console.log("gaaa")
    turnOn_button(button_education);
    turnOff_button(button_projects);
    turnOff_button(button_skills);

    currentTab = "education";console.log("s")

    turnOn_tab(education_nav_list);
    turnOff_tab(project_nav_list);
    turnOff_tab(skills_nav_list);

    turnOn_button(bi_e_1);
    isFirst()
    let data = jsonData.education[0];

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    tab_content.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
    })
})

button_projects.addEventListener('click', async () => {

    turnOn_tab(tab_content);
    //turnOff_tab(tab_education);
    //turnOff_tab(tab_skills);

    turnOn_button(button_projects);
    turnOff_button(button_education);
    turnOff_button(button_skills);

    currentTab = "content";console.log("s")

    turnOn_tab(project_nav_list);
    turnOff_tab(skills_nav_list);
    turnOff_tab(education_nav_list);

    let data = jsonData.project[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    turnOn_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOff_button(bi_p_3);
    turnOff_button(bi_p_4);
    isFirst()

    tab_content.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
    })

})

button_skills.addEventListener('click', async () => {
    turnOn_tab(tab_content);
    //turnOff_tab(tab_education);
    //turnOff_tab(tab_skills);

    turnOn_button(button_skills);
    turnOff_button(button_projects);
    turnOff_button(button_education);

    currentTab = "skills";

    turnOff_tab(project_nav_list);
    turnOn_tab(skills_nav_list);
    turnOff_tab(education_nav_list);

    let data = jsonData.skills[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    ///item_image.style.backgroundImage = `url("${data.image}")`;
    //item_image.setAttribute('src', data.image)

    turnOn_button(bi_s_1);
    turnOff_button(bi_s_2);
    turnOff_button(bi_s_3);
    turnOff_button(bi_s_4);

    isFirst()

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



bi_e_1.addEventListener('click', async () => {
    console.log("bingbong")
    let data = jsonData.education[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;
    turnOn_button(bi_e_1);
    isFirst()
})


bi_p_1.addEventListener('click', async () => {
    console.log("bingbong")
    let data = jsonData.project[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;
    turnOn_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOff_button(bi_p_3);
    turnOff_button(bi_p_4);
    isFirst()
})

bi_p_2.addEventListener('click', async () => {
    let data = jsonData.project[1];
    

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_p_1);
    turnOn_button(bi_p_2);
    turnOff_button(bi_p_3);
    turnOff_button(bi_p_4);

    isFirst()
})

bi_p_3.addEventListener('click', async () => {
    let data = jsonData.project[2];
    

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOn_button(bi_p_3);
    turnOff_button(bi_p_4);
    isFirst()
})
bi_p_4.addEventListener('click', async () => {
    let data = jsonData.project[3];
    

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOff_button(bi_p_3);
    turnOn_button(bi_p_4);
    isFirst()
})

bi_s_1.addEventListener('click', async () => {
    let data = jsonData.skills[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;
    //item_image.setAttribute('src', data.image)

    turnOn_button(bi_s_1);
    turnOff_button(bi_s_2);
    turnOff_button(bi_s_3);
    turnOff_button(bi_s_4);

    isFirst()
})
bi_s_2.addEventListener('click', async () => {
    let data = jsonData.skills[1];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;
    

    turnOff_button(bi_s_1);
    turnOn_button(bi_s_2);
    turnOff_button(bi_s_3);
    turnOff_button(bi_s_4);
    isFirst()
})
bi_s_3.addEventListener('click', async () => {
    let data = jsonData.skills[2];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_s_1);
    turnOff_button(bi_s_2);
    turnOn_button(bi_s_3);
    turnOff_button(bi_s_4);
    isFirst()
})
bi_s_4.addEventListener('click', async () => {
    let data = jsonData.skills[3];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    //item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_s_1);
    turnOff_button(bi_s_2);
    turnOff_button(bi_s_3);
    turnOn_button(bi_s_4);
    isFirst()
})




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