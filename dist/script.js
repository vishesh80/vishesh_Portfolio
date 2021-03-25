const about = document.getElementById("about");
const aboutPara1 = document.getElementById("aboutPara1");
const aboutPara2 = document.getElementById("aboutPara2");

const exp0h = document.getElementById("exp0h");
const exp0s1 = document.getElementById('exp0s1');
const exp0s2 = document.getElementById('exp0s2');
const exp0__banner = document.getElementById('exp0__banner');

const work = document.getElementById("work");

const siteNeg1Name = document.getElementById('site-1Name');
const siteNeg1Ver = document.getElementsByClassName('site-1ver')[0];
const siteNeg1Hor = document.getElementsByClassName('site-1hor')[0];
const siteNeg1Para = document.getElementsByClassName('site-1Para');
const siteNeg2Name = document.getElementById('site-2Name');
const siteNeg2Ver = document.getElementsByClassName('site-2ver')[0];
const siteNeg2Hor = document.getElementsByClassName('site-2hor')[0];
const siteNeg2Para = document.getElementsByClassName('site-2Para');
const site0Name = document.getElementById('site0Name');
const site0Ver = document.getElementsByClassName('site0ver')[0];
const site0Hor = document.getElementsByClassName('site0hor')[0];
const site0Para = document.getElementsByClassName('site0Para');

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

let expFlag0 = true;

let workFlag = true;
let siteNeg1NameFlag = true;
let siteNeg1ImgsFlag = true;
let siteNeg2NameFlag = true;
let siteNeg2ImgsFlag = true;
let site0NameFlag = true;
let site0ImgsFlag = true;
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
let lock = true;


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







async function workTyper() {

    let data = "PROJECTS".split("");

    for (let d of data) {
        work.textContent = work.textContent + d;
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 130));
    }
}



async function moveinImages(site) {
    switch (site) {
        case -2: {
            siteNeg2Ver.classList.remove('hideVer');
            setTimeout(() => siteNeg2Hor.classList.remove('hideHor'), 500);
            break;
        }

        case -1: {
            siteNeg1Ver.classList.remove('hideVer');
            setTimeout(() => siteNeg1Hor.classList.remove('hideHor'), 500);
            break;
        }

        case 0: {
            site0Ver.classList.remove('hideVer');
            setTimeout(() => site0Hor.classList.remove('hideHor'), 500);
            break;
        }

        case 1: {
            site1Ver.classList.remove('hideVer');
            setTimeout(() => site1Hor.classList.remove('hideHor'), 500);
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

        case -2: {

            let data = "Brickview Studios".split("");

            for (let d of data) {
                siteNeg2Name.textContent = siteNeg2Name.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 50));
            }

            siteNeg2Para[0].classList.add('fadein');
            setTimeout(() => siteNeg2Para[1].classList.add('fadein'), 500);
            break;
        }

        case -1: {

            let data = "Sarvogyan".split("");

            for (let d of data) {
                siteNeg1Name.textContent = siteNeg1Name.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 50));
            }

            siteNeg1Para[0].classList.add('fadein');
            setTimeout(() => siteNeg1Para[1].classList.add('fadein'), 500);
            break;
        }

        case 0: {

            let data = "EDUBRITE".split("");

            for (let d of data) {
                site0Name.textContent = site0Name.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 50));
            }

            site0Para[0].classList.add('fadein');
            setTimeout(() => site0Para[1].classList.add('fadein'), 500);
            break;
        }

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



async function expAni(exp) {

    let dash = document.createElement('span');
    dash.textContent = "_";
    dash.classList.add('dash');

    let exp0h_tc = "Full Stack Engineer".split("");
    let exp0s1_tc = "Brickview Studios • Internship".split("");
    let exp0s2_tc = "Sept 2020 - Feb 2021 • 6 months".split("");

    switch (exp) {

        case 0: {
            exp0__banner.classList.add('fadein');
            exp0h.parentElement.append(dash);
            for (let d of exp0h_tc) {
                exp0h.textContent = exp0h.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 35));
            }
            exp0h.parentElement.removeChild(dash);

            exp0s1.parentElement.append(dash);
            for (let d of exp0s1_tc) {
                exp0s1.textContent = exp0s1.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 35));
            }
            exp0s1.parentElement.removeChild(dash);

            exp0s2.parentElement.append(dash);
            for (let d of exp0s2_tc) {
                exp0s2.textContent = exp0s2.textContent + d;
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 35));
            }

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

window.addEventListener('load', e => {

    if (lock) {
        lock = false;

        loading.style.display = 'none';
        video.classList.add('videoani');
        logo.classList.add('logoani');
        sub1.classList.add('sub1ani');
        name.classList.add('nameani');
        sub2.classList.add('sub2ani');
        // Remove listener to re-enable scroll
        window.removeEventListener('scroll', noScroll);
    }
});
setTimeout(() => {

    if (lock) {
        lock = false;

        loading.style.display = 'none';
        video.classList.add('videoani');
        logo.classList.add('logoani');
        sub1.classList.add('sub1ani');
        name.classList.add('nameani');
        sub2.classList.add('sub2ani');
        // Remove listener to re-enable scroll
        window.removeEventListener('scroll', noScroll);
    }
}, 12000);





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

    // Exp section checks
    let rect2_1 = exp0__banner.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.45 > rect2_1.top && expFlag0) {
        expFlag0 = false;
        expAni(0);
    }


    // Work section checks
    let rect3 = work.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3.top && workFlag) {
        workFlag = false;
        workTyper();
    }

    let rect3_1 = siteNeg2Ver.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3_1.top && siteNeg2ImgsFlag) {
        siteNeg2ImgsFlag = false;
        moveinImages(-2);
    }

    let rect3_2 = siteNeg1Ver.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3_2.top && siteNeg1ImgsFlag) {
        siteNeg1ImgsFlag = false;
        moveinImages(-1);
    }

    let rect3_3 = site0Ver.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3_3.top && site0ImgsFlag) {
        site0ImgsFlag = false;
        moveinImages(0);
    }

    let rect3_4 = siteNeg2Name.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3_4.top && siteNeg2NameFlag) {
        siteNeg2NameFlag = false;
        siteNameTyper(-2);
    }

    let rect3_5 = siteNeg1Name.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3_5.top && siteNeg1NameFlag) {
        siteNeg1NameFlag = false;
        siteNameTyper(-1);
    }

    let rect3_6 = site0Name.getBoundingClientRect();
    if (innerHeight - innerHeight * 0.4 > rect3_6.top && site0NameFlag) {
        site0NameFlag = false;
        siteNameTyper(0);
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

document.getElementById('burgerLinks').addEventListener('click', e => {
    radio.checked = false;
});
