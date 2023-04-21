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

let bi_p_1 = document.getElementById('bi_p_1');
let bi_p_2 = document.getElementById('bi_p_2');
let bi_p_3 = document.getElementById('bi_p_3');

let bi_s_1 = document.getElementById('bi_s_1');
let bi_s_2 = document.getElementById('bi_s_2');
let bi_s_3 = document.getElementById('bi_s_3');
let bi_s_4 = document.getElementById('bi_s_4');

let project_nav_list = document.getElementById('project_nav_list');
let skills_nav_list = document.getElementById('skills_nav_list');

let tab_education = document.getElementById('education');
let tab_project = document.getElementById('project');
let tab_skills = document.getElementById('skills');

// const data = require('../data.json')

let project = document.getElementById('project');

let currentTab = "education";

button_education.addEventListener('click', async () => {

    turnOn_tab(tab_education);
    turnOff_tab(tab_project);
    //turnOff_tab(tab_skills);
    console.log("gaaa")
    turnOn_button(button_education);
    turnOff_button(button_projects);
    turnOff_button(button_skills);

    tab_education.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
    })
})

button_projects.addEventListener('click', async () => {

    turnOn_tab(tab_project);
    turnOff_tab(tab_education);
    //turnOff_tab(tab_skills);

    turnOn_button(button_projects);
    turnOff_button(button_education);
    turnOff_button(button_skills);

    currentTab = "project";console.log("s")

    turnOn_tab(project_nav_list);
    turnOff_tab(skills_nav_list);

    let data = jsonData.project[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    item_image.style.backgroundImage = `url("${data.image}")`;

    turnOn_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOff_button(bi_p_3);
    isFirst()

    tab_project.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
    })

})

button_skills.addEventListener('click', async () => {
    turnOn_tab(tab_project);
    turnOff_tab(tab_education);
    //turnOff_tab(tab_skills);

    turnOn_button(button_skills);
    turnOff_button(button_projects);
    turnOff_button(button_education);

    currentTab = "skills";

    turnOff_tab(project_nav_list);
    turnOn_tab(skills_nav_list);

    let data = jsonData.skills[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    item_image.style.backgroundImage = `url("${data.image}")`;
    //item_image.setAttribute('src', data.image)

    turnOn_button(bi_s_1);
    turnOff_button(bi_s_2);
    turnOff_button(bi_s_3);
    turnOff_button(bi_s_4);

    isFirst()

    tab_project.scrollIntoView({
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






bi_p_1.addEventListener('click', async () => {
    console.log("bingbong")
    let data = jsonData.project[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    item_image.style.backgroundImage = `url("${data.image}")`;
    turnOn_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOff_button(bi_p_3);
    isFirst()
})

bi_p_2.addEventListener('click', async () => {
    let data = jsonData.project[1];
    

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_p_1);
    turnOn_button(bi_p_2);
    turnOff_button(bi_p_3);

    isFirst()
})

bi_p_3.addEventListener('click', async () => {
    let data = jsonData.project[2];
    

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_p_1);
    turnOff_button(bi_p_2);
    turnOn_button(bi_p_3);
    isFirst()
})

bi_s_1.addEventListener('click', async () => {
    let data = jsonData.skills[0];
    console.log(data)

    item_title.innerText = data.title
    item_desc.innerText = data.desc
    item_image.style.backgroundImage = `url("${data.image}")`;
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
    item_image.style.backgroundImage = `url("${data.image}")`;
    

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
    item_image.style.backgroundImage = `url("${data.image}")`;

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
    item_image.style.backgroundImage = `url("${data.image}")`;

    turnOff_button(bi_s_1);
    turnOff_button(bi_s_2);
    turnOff_button(bi_s_3);
    turnOn_button(bi_s_4);
    isFirst()
})




function isFirst(){
    if(project.classList.contains("item_display_initial")){

        project.removeAttribute('class', 'item_display_initial')

        project.setAttribute('class', 'item_display_first_reload')
    } else {
        project.setAttribute('class', 'item_display_reload')
    }
}


project.addEventListener("animationend", () => {
    //project_display.removeAttribute('class', 'project_display_reload')
    project.classList.remove("item_display_reload");
});




const jsonData = {
    education: [
        {
            title: "education 1",
            date: "2022 - 2023",
            image: "../img/decoration_2.png",
            desc: "beep bop cotton eye joe!"
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
            image: "../img/skills_unity.png",
            desc: "I started out scripting in LUA on roblox and then eventually moved on to C# on unity before i eventually attended NSCC and learned Javascript, PHP, and Java."
        },
        {
            title: "React",
            date: "2022 - 2023",
            image: "../img/skills_wordpress.png",
            desc: "I have built 1 complete react application with another in-progress."
        },
        {
            title: "Wordpress",
            date: "2022 - 2023",
            image: "../img/skills_wordpress.png",
            desc: "I have helped friends and family manage their wordpress websites. an example is bobatea which I administer."
        },
        {
            title: "Programs",
            date: "2022 - 2023",
            image: "../img/skills_unity.png",
            desc: "I have years of experience with Unity, blender, and gimp. I also have limited knowledge on photoshop and Illustrator"
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
        }
    ]
}