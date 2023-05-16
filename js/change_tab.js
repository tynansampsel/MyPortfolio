let item_title = document.getElementById('p_item_title');
let item_date = document.getElementById('p_item_date');
let item_image = document.getElementById('p_item_image');
let item_desc = document.getElementById('p_item_desc');


let tab_projects = document.getElementById('tab_projects');
let tab_tools = document.getElementById('tab_tools');
let tab_languages = document.getElementById('tab_languages');
let tab_education = document.getElementById('tab_education');

let nav_list = document.getElementById('n_nav_list');
let card_container = document.getElementById('card_container');
let current_card;
let content = document.getElementById('content');
let currentTab = "education";
let tab_content = document.getElementById('content');
let false_n_nav_list_text = document.getElementById('false_n_nav_list_text');





tab_projects.addEventListener('click', async () => {

    setButtons(tab_projects)
    isFirst()
    false_n_nav_list_text.innerText = "Projects";
    createCards(jsonData3.projects);
    tab_content.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
})

tab_tools.addEventListener('click', async () => {
    setButtons(tab_tools)
    isFirst()
    false_n_nav_list_text.innerText = "Tools";
    createCards(jsonData3.tools);
    tab_content.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
})

tab_education.addEventListener('click', async () => {
    setButtons(tab_education)
    isFirst()
    false_n_nav_list_text.innerText = "Education";
    createCards(jsonData3.education);
    tab_content.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
})

tab_languages.addEventListener('click', async () => {
    setButtons(tab_languages)
    isFirst()
    false_n_nav_list_text.innerText = "Languages";
    createCards(jsonData3.Languages);
    tab_content.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
})

function setButtons(activeButton) {
    turnOff_button(tab_projects);
    turnOff_button(tab_tools);
    turnOff_button(tab_languages);
    turnOff_button(tab_education);

    turnOn_button(activeButton);
}



function createCards(arrayOfData) {
    card_container.innerHTML = '';


    arrayOfData.forEach(obj => {
        let card = document.createElement("div");
        let title = document.createElement("h6");
        let text = document.createElement("p");
        let more = document.createElement("span");
        let dots = document.createElement("span");
        card.setAttribute('class', 'card')
        title.setAttribute('class', 'card_title')
        text.setAttribute('class', 'card_text')
        more.setAttribute('class', 'card_more')
        dots.setAttribute('class', 'card_dots')

        card.style.backgroundImage = `url("${obj.image}")`;
        title.innerText = obj.title;
        text.innerText = obj.text;
        more.innerText = obj.more;
        dots.innerText = '...';

        card.appendChild(title);
        card.appendChild(text);
        text.appendChild(dots);
        text.appendChild(more);

        card.addEventListener('click', async () => {

            cardClick(event.target)

        })
        card.addEventListener("animationend", () => {
            //project_display.removeAttribute('class', 'project_display_reload')
            if (event.animationName == "card_grow") {
                event.target.scrollIntoView({
                    block: 'end',
                    behavior: 'smooth',
                    inline: 'center'
                })
            } else if (event.animationName == "card_shrink") {
                console.log("shrink")
                event.target.setAttribute('class', 'card')
            }

        });
        text.addEventListener("animationend", () => {
            //project_display.removeAttribute('class', 'project_display_reload')
            let p = event.target.parentElement;
            console.log(p)
            if (event.animationName == "card_text_rise") {
                
                event.target.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                    inline: 'start'
                })
            } else if (event.animationName == "card_text_fall") {
                console.log("shrink")
                p.setAttribute('class', 'card')
            }

        });
        card_container.appendChild(card);
    });





    


}

function turnOff_tab(element) {
    element.removeAttribute('class', 'tab_active')
    element.setAttribute('class', 'tab_inactive')
}

function turnOn_tab(element) {
    element.removeAttribute('class', 'tab_inactive')
    element.setAttribute('class', 'tab_active')
}

function turnOff_button(element) {
    element.removeAttribute('class', 'active')
    element.setAttribute('class', 'inactive')
}
function turnOn_button(element) {
    element.removeAttribute('class', 'inactive')
    element.setAttribute('class', 'active')
}




function cardClick(e) {
    //If card is active, turn off
    if (e.classList.contains("card_active")) {


        console.log("T")
        current_card = null;
        e.setAttribute('class', 'card card_inactive')



        //If card is not active, turn on
    } else {
        console.log("Te")
        e.setAttribute('class', 'card card_active')

        if (current_card != null) {
            current_card.setAttribute('class', 'card card_inactive')

        }
        current_card = event.target;


    }
}


function isFirst() {
    if (content.classList.contains("item_display_initial")) {

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
const jsonData3 = {
    education: [
        {
            title: "NSCC - IT web development",
            date: "",
            image: "img/decoration_2.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "Self-learning",
            date: "",
            image: "img/decoration_2.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        }
    ],
    tools: [
        {
            title: "Unity",
            date: "",
            image: "../img/decoration_2.png",
            text: "I have experience in Unity game development,",
            more: "including creating my own game, and I have a solid understanding of C# programming. My skills in Unity and C# allow me to develop engaging and innovative games with efficiency."
        },
        {
            title: "Blender",
            date: "",
            image: "img/decoration_2.png",
            text: "I am familiar with Blender for 3D modeling,",
            more: " particularly in generating STL models. I strive to enhance my skills in Blender to create top-notch 3D models for diverse purposes."
        },
        {
            title: "Gimp",
            date: "",
            image: "img/decoration_2.png",
            text: "I am skilled in GIMP,",
            more: " an advanced image editing software, and proficient in tasks such as retouching photos and creating visual assets for different projects."
        },
        {
            title: "Photoshop",
            date: "",
            image: "img/decoration_2.png",
            text: "I have basic Photoshop skills from college",
            more: ", covering image editing and design fundamentals. I'm eager to expand my abilities in Photoshop for enhancing visuals and creating captivating designs."
        },
        {
            title: "Wordpress",
            date: "",
            image: "img/decoration_2.png",
            text: "I have experience administering WordPress websites",
            more: ", including Bobatea. I'm proficient in updating content, managing website themes, and troubleshooting common issues. With my experience, I am confident in my ability to effectively manage and maintain WordPress websites."
        }
    ],
    projects: [
        {
            title: "PlanetApp",
            date: "",
            image: "img/language_javascript.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "Lendahand",
            date: "",
            image: "img/language_javascript.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "Notepad App",
            date: "",
            image: "img/language_javascript.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "Game",
            date: "",
            image: "img/language_javascript.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        }
    ],
    Languages: [
        {
            title: "Javascript",
            date: "",
            image: "img/language_javascript.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "React JS",
            date: "",
            image: "img/language_react.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "Node JS",
            date: "",
            image: "img/language_node.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        },
        {
            title: "PHP",
            date: "",
            image: "img/language_node.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        }
    ]
}
createCards(jsonData3.projects);

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