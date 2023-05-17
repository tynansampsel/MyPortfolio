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

    let card_bottom_spacer = document.createElement("div");
    card_bottom_spacer.setAttribute('class', 'card_bottom_spacer')

    arrayOfData.forEach(obj => {
        let card = document.createElement("div");
        
        let title = document.createElement("h6");
        let text = document.createElement("p");
        let link = document.createElement("a");
        let more = document.createElement("span");
        let dots = document.createElement("span");
        card.setAttribute('class', 'card')
        title.setAttribute('class', 'card_title')
        link.setAttribute('class', 'card_link')
        text.setAttribute('class', 'card_text')
        more.setAttribute('class', 'card_more')
        dots.setAttribute('class', 'card_dots')
        

        card.style.backgroundImage = `url("${obj.image}")`;
        title.innerText = obj.title;
        text.innerText = obj.text;
        more.innerText = obj.more;
        dots.innerText = '...';
        link.innerText = obj.link_name ? obj.link_name : '';
        link.setAttribute('href', obj.link ? obj.link : '')
        link.setAttribute('target', '_blank')

        card.appendChild(title);
        card.appendChild(text);
        title.appendChild(link);
        text.appendChild(dots);
        text.appendChild(more);

        card.addEventListener('click', async () => {
            
            if(!event.target.classList.contains("card_link")){
                cardClick(event.target)

            }

        })
        card.addEventListener("animationend", () => {
            //project_display.removeAttribute('class', 'project_display_reload')
            if (event.animationName == "card_grow") {
                event.target.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                    inline: 'end'
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
                
                event.target.parentElement.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                    inline: 'end'
                })
            } else if (event.animationName == "card_text_fall") {
                console.log("shrink")
                p.setAttribute('class', 'card')
            }

        });
        card_container.appendChild(card);
        card_container.appendChild(card_bottom_spacer);
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
            image: "img/edu_nscc.png",
            text: "I started attending NSCC in 2020 and",
            more: " am very glad I made that choice. I originally wanted to do game design but chose web programming, and have come to love building and working on websites, and especially working with Javascript and React."
        },
        {
            title: "Self-learning",
            date: "",
            image: "img/tool_unity.png",
            text: "I started my love for programming when",
            more: " I was a kid where i would dissasemble other people's code and see how everything worked. it was like a puzzle to unravel. I eventually grew from Roblox to Unity where I went on to make countless small projects with C#."
        }
    ],
    tools: [
        {
            title: "Unity",
            date: "",
            image: "img/tool_unity.png",
            text: "I have experience in Unity game development",
            more: "including creating my own game, and I have a solid understanding of C# programming. My skills in Unity and C# allow me to develop engaging and innovative games with efficiency."
        },
        {
            title: "Blender",
            date: "",
            image: "img/tool_blender.png",
            text: "I am familiar with Blender for 3D modeling",
            more: " particularly in generating STL models. I strive to enhance my skills in Blender to create top-notch 3D models for diverse purposes."
        },
        {
            title: "Gimp",
            date: "",
            image: "img/tool_gimp.png",
            text: "I am skilled in GIMP,",
            more: " an advanced image editing software, and proficient in tasks such as retouching photos and creating visual assets for different projects."
        },
        {
            title: "Photoshop",
            date: "",
            image: "img/tool_photoshop.png",
            text: "I have basic Photoshop skills from college",
            more: ", covering image editing and design fundamentals. I'm eager to expand my abilities in Photoshop for enhancing visuals and creating captivating designs."
        },
        {
            title: "Wordpress",
            date: "",
            image: "img/tool_wordpress.png",
            text: "I have experience administering WordPress websites",
            more: ", including Bobatea. I'm proficient in updating content, managing website themes, and troubleshooting common issues. With my experience, I am confident in my ability to effectively manage and maintain WordPress websites."
        }
    ],
    projects: [
        {
            title: "PlanetApp",
            date: "",
            image: "img/noimage.png",
            text: "A Fullstack demo application I built",
            more: " with the MERN stack. It lists all the known planets, as well as allow the user to add, modify, or delete any of them."
        },
        {
            title: "Lendahand",
            link_name: "lendahand.onrender.com",
            link: "https://lendahand.onrender.com/",
            date: "",
            image: "img/app_lendahand.png",
            text: "Lendahand is a website my team and I",
            more: " built while we were studying at NSCC. It's a community-focused website where users can request/give local community members a hand."
        },
        {
            title: "Notepad App",
            date: "",
            image: "img/noimage.png",
            text: "A clean and minimalist notepad",
            more: " application i built using Electron.js. As well as the basic functionality for a notepad app, it can also remember your last unsaved session."
        },
        {
            title: "Game",
            date: "",
            image: "img/tool_unity.png",
            text: "I began my studies at NSCC in 2021. ",
            more: "Although i didn't plan on going to college for web programming, i've come to love it."
        }
    ],
    Languages: [
        {
            title: "Javascript",
            date: "",
            image: "img/lang_javascript.png",
            text: "I started working with javascript",
            more: " during my time at NSCC where I built many applications from a bus-tracker to a fullstack application."
        },
        {
            title: "React JS",
            date: "",
            image: "img/lang_react.png",
            text: "I started working with React js during",
            more: " my second year at NSCC where i've come to love working with it. My dream job in the web-programming field would be working with React directly."
        },
        {
            title: "Node JS",
            date: "",
            image: "img/lang_node.png",
            text: "I have been using Nodejs for the last 2 years",
            more: " nearly every day and have grown very confident working with it."
        },
        {
            title: "C#",
            date: "",
            image: "img/lang_csharp.png",
            text: "I have grown a special love for C#",
            more: " since my days working with unity and while I was attending NSCC I was surprised to find out its also used for web-development. Since then I've made countless games with the language and during my time at NSCC an application."
        },
        {
            title: "Java",
            date: "",
            image: "img/lang_java.png",
            text: "Java has come easy to me since I already",
            more: " have some experience in C#. Although I only have a basic understanding of the language, It is easy enough to pick back up any time I've needed to use it or help someone with it."
        },
        {
            title: "PHP",
            date: "",
            image: "img/lang_php.png",
            text: "I learned PHP during my time at NSCC",
            more: " and while i have working knowledge of it, im not the biggest fan of the language."
        }
    ]
}
createCards(jsonData3.projects);

