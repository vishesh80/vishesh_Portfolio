const about = document.getElementById("about");
const aboutPara1 = document.getElementById("aboutPara1");
const aboutPara2 = document.getElementById("aboutPara2");

const work = document.getElementById("work");
const site1Name = document.getElementById('site1Name');
const site1Ver = document.getElementsByClassName('site1ver')[0];
const site1Hor = document.getElementsByClassName('site1hor')[0];
const site1Para = document.getElementsByClassName('site1Para');
const site2Name = document.getElementById('site2Name');
const site2Ver = document.getElementsByClassName('site2ver')[0];
const site2Hor = document.getElementsByClassName('site2hor')[0];
const site2Para = document.getElementsByClassName('site2Para');
const site3Name = document.getElementById('site3Name');
const site3Ver = document.getElementsByClassName('site3ver')[0];
const site3Hor = document.getElementsByClassName('site3hor')[0];
const site3Para = document.getElementsByClassName('site3Para');

const tools = document.getElementById('tools');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const contact = document.getElementById('contact');


// Flags
let aboutFlag = true;
let aboutPara1Flag = true;

let workFlag = true;
let site1NameFlag = true;
let site1ImgsFlag = true;
let site2NameFlag = true;
let site2ImgsFlag = true;
let site3NameFlag = true;
let site3ImgsFlag = true;

let toolsFlag = true;
let card1Flag = true;
let card2Flag = true;
let card3Flag = true;

let contactFlag = true;


let radio = document.getElementById('radio');
let burger = document.getElementById('burger');
let loading = document.getElementById('loading');

let video = document.getElementById('video');
let logo = document.getElementById('logo');
let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');
let name = document.getElementById('name');


// Locking scroll when loading
function noScroll() {
    window.scrollTo(0, 0);
}
// add listener to disable scroll
window.addEventListener('scroll', noScroll);




/*---------------- Typers,fadeins ,movins------------------- */


async function aboutTyper() {
  let data = "ABOUT".split("");

  for (let d of data) {
    about.textContent = about.textContent + d;
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 130));
  }
}



async function aboutPara1Fadein() {

  aboutPara1.classList.add("fadein");
  setTimeout(() => aboutPara2.classList.add("fadein"), 700);
}







async function workTyper(){

    let data = "WORK".split("");

    for (let d of data) {
        work.textContent = work.textContent + d;
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 130));
    }
}



async function moveinImages(site)
{
    switch(site)
    {
        case 1 : {
            site1Ver.classList.remove('hideVer');
            setTimeout(() => site1Hor.classList.remove('hideHor'),500);
            break;
        }

        case 2: {
            site2Ver.classList.remove('hideVer');
            setTimeout(() => site2Hor.classList.remove('hideHor'), 500);
            break;
        }

        case 3: {
            site3Ver.classList.remove('hideVer');
            setTimeout(() => site3Hor.classList.remove('hideHor'), 500);
            break;
        }
    }
}


async function siteNameTyper(site) {
    switch (site) {
        case 1: {

            let data = "VIS Blog".split("");

            for (let d of data) {
                site1Name.textContent = site1Name.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 50));
            }

            site1Para[0].classList.add('fadein');
            setTimeout(() => site1Para[1].classList.add('fadein'), 500);
            break;
        }

        case 2: {

            let data = "Let's Donate".split("");

            for (let d of data) {
                site2Name.textContent = site2Name.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 50));
            }

            site2Para[0].classList.add('fadein');
            setTimeout(() => site2Para[1].classList.add('fadein'), 500);
            break;
        }

        case 3: {

            let data = "Expensify".split("");

            for (let d of data) {
                site3Name.textContent = site3Name.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 50));
            }

            site3Para[0].classList.add('fadein');
            setTimeout(() => site3Para[1].classList.add('fadein'), 500);
            break;
        }
    }
}







async function toolsTyper() {

    let data = "Services & Tools".split("");

    for (let d of data) {
        tools.textContent = tools.textContent + d;
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 130));
    }
}

async function cardFlipper(card) {
    switch (card) {
        case 1: {
            card1.classList.add('flip');
            break;
        }

        case 2: {
            card2.classList.add('flip');
            break;
        }

        case 3: {
            card3.classList.add('flip');
            break;
        }
    }
}



async function contactTyper() {

    let data = "Get in touch".split("");

    // Come in Burger
    burger.classList.add('comeinburger');

    for (let d of data) {
        contact.textContent = contact.textContent + d;
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 130));
    }
}





/*-------------- Scroll listener------------------- */

window.addEventListener('load',e => {

    loading.style.display = 'none';

    video.play();
    video.classList.add('videoani');
    logo.classList.add('logoani');
    sub1.classList.add('sub1ani');
    name.classList.add('nameani');
    sub2.classList.add('sub2ani');

    // Remove listener to re-enable scroll
    window.removeEventListener('scroll', noScroll);
});

setTimeout(() => window.addEventListener("scroll", (e) => {

    // About section checks
    let rect1 = about.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.45 > rect1.top && aboutFlag) {
        aboutFlag = false;
        aboutTyper();
    }

    let rect2 = aboutPara1.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.3 > rect2.top && aboutPara1Flag) {
        aboutPara1Flag = false;
        aboutPara1Fadein();
    }





    // Work section checks
    let rect3 = work.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3.top && workFlag) {
        workFlag = false;
        workTyper();
    }

    let rect4 = site1Ver.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect4.top && site1ImgsFlag) {
        site1ImgsFlag = false;
        moveinImages(1);
    }

    let rect5 = site2Ver.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect5.top && site2ImgsFlag) {
        site2ImgsFlag = false;
        moveinImages(2);
    }

    let rect6 = site3Ver.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect6.top && site3ImgsFlag) {
        site3ImgsFlag = false;
        moveinImages(3);
    }

    let rect7 = site1Name.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect7.top && site1NameFlag) {
        site1NameFlag = false;
        siteNameTyper(1);
    }

    let rect8 = site2Name.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect8.top && site2NameFlag) {
        site2NameFlag = false;
        siteNameTyper(2);
    }

    let rect9 = site3Name.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect9.top && site3NameFlag) {
        site3NameFlag = false;
        siteNameTyper(3);
    }




    // Tools section
    let rect10 = tools.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect10.top && toolsFlag) {
        toolsFlag = false;
        toolsTyper();
    }
    let rect11 = card1.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.6 > rect11.top && card1Flag) {
        card1Flag = false;
        cardFlipper(1);
    }
    let rect12 = card2.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.6 > rect12.top && card2Flag) {
        card2Flag = false;
        cardFlipper(2);
    }
    let rect13 = card3.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.6 > rect13.top && card3Flag) {
        card3Flag = false;
        cardFlipper(3);
    }


    // Contact section
    let rect14 = contact.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect14.top && contactFlag) {
        contactFlag = false;
        contactTyper();
    }

}),
1100);

//------- Burger fix

document.getElementById('burgerLinks').addEventListener('click',e => {
    radio.checked = false;
});
