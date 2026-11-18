
// ==UserScript==
// @name         [2.2] • Arbor 𝖀𝓛𝓣ℛ𝓐!
// @author       Brune, LLMs
// @namespace    brungle.pages.dev
// @description  Modified & Exuberant Arbor!

// @version      2.2.Alpha

// @updateURL    https://raw.githubusercontent.com/BruneCoding/ArborUltra/main/arbor-ultra.user.js
// @downloadURL  https://raw.githubusercontent.com/BruneCoding/ArborUltra/main/arbor-ultra.user.js

// @match        https://sir-henry-floyd-grammar-school.uk.arbor.education/*
// @match        https://yell0wsuit.page/assets/games/subway-surfers/*
// @match        https://yell0wsuit.page/*
// @match        https://poki.com/en/g/subway-surfers
// @match        https://discord.com/*
// @match        https://*.discord.com/*
// @match        https://x.com/*
// @match        https://games.poki.com/*
// @match        https://*.gdn.poki.com/*

// @run-at       document-start

// @grant        GM_xmlhttpRequest
// @grant        GM_addElement

// @connect      *
// @connect      raw.githubusercontent.com
// @connect      brunecoding.github.io
// @connect      www.gstatic.com
// @connect      google.com
// @connect      googleusercontent.com
// @connect      googleapis.com
// @connect      ibb.co
// @connect      discordapp.com
// @connect      discordapp.net
// @connect      firestore.googleapis.com
// @connect      cdn.discordapp.com
// @connect      media.discordapp.net

// @license      MIT

// @require      https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js
// @require      https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js
// ==/UserScript==






// This ScriptSet, from vBT2.0 onwards, uses AI assisted programming to strategically develop. As a result, it has now been switched to Adjourned MIT ( AI inclusion program ).
// @ElementZero on Discord has rated this program to be 68.4% human coded ( via lines of code )

// Thank you to our Beta Testers:
// ▶ Gl1tch_gg
// ▶ MinesBuster2010
// ▶ Pittab

// Hello Arbor Members!
// ▶ Gl1tch_gg
// ▶ Harishpro
// ▶ MinesBuster2010
// ▶ ZentorXE
// ▶ ge11hp
// ▶ Pittab
// ▶ Noah
// ▶ Ola
// ▶ axelswaifu
// ▶ TomH

// If any issues follow, please contact me :D
// brunegamingyt@gmail.com

// Version Information [BETA TEST]
let version_no = '2.1'



// Arbor Console Greeting!!!
function arborUltraWhoooop() {
   const lmao = `
    _          _                   _   _   _    _
   / \\   _ __ | |__   ___  _ __   | | | | | |  | |_ _ __.__ _
  / _ \\ | '__|| '_ \\ / _ \\| '__|  | | | | | |  | __| '__/ _\` |
 / ___ \\| |   | |_) | (_) | |     | |_| | | |_ | |_| | | (_| |
/_/   \\_\\_|   |_.__/ \\___/|_|      \\___/  \\___| \\__|_|  \\.__,_|
  `;
 // console.clear()
    organiseMisCal1()
  console.log(
  `  %c${lmao}`,
    'color: #F3CC00; font-family: monospace; font-weight: bold;'
  );
  console.log(
    `%c VERSION %c vALPHA.${version_no} `,
    'background: #0F0E0E; color: #DED3C7; padding: 3px 6px; border-radius: 3px 0 0 3px; font-weight: bold; font-family: helvetica;',
    'background: #F3CC00; color: #0F0E0E; padding: 3px 6px; border-radius: 0 3px 3px 0; font-weight: bold; font-family: monospace;'
  );
}




function arborUltraYay() {
    const logo = document.querySelector(".arbor-logo__text");
    if (!logo) return;

    const events = [
        [1267, 'Arbor 𝖀𝓛𝓣ℛ𝓐 [ALPHA]'],
        [2767, 'Arbor 𝖀𝓛𝓣ℛ𝓐', arborUltraWhoooop],
        [4267, 'Arbor'],
        [6267, 'Arbor 𝖀𝓛𝓣ℛ𝓐'],
        [8267, 'Arbor 𝖀𝓛𝓣ℛ𝓐 [ALPHA]'],
        [10267, 'Arbor 𝖀𝓛𝓣ℛ𝓐'],
        [12267, '𝖀𝓛𝓣ℛ𝓐'],
        [15867, 'Arbor'],
        [16999, 'Arbor 𝖀𝓛𝓣ℛ𝓐', () => {
            arborUltraWhoooop();
            gCalendar();
            widgetSys();
        }]
    ];

    const style = document.createElement("style");
    style.textContent = `
        @keyframes arborSnapOut {
            to { opacity: 0; filter: blur(3px); transform: scale(.97); }
        }
        @keyframes arborSnapIn {
            from { opacity: 0; filter: blur(3px); transform: scale(1.015); }
            to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        .arbor-snap-particle {
            position: absolute;
            width: 3px; height: 3px;
            border-radius: 50%;
            background: #e5c85c;
            pointer-events: none;
            z-index: 999999;
            animation: arborParticle .70s ease-out forwards;
        }
        @keyframes arborParticle {
            to { transform: translate(var(--x),var(--y)) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    const change = (text, callback) => {
        const rect = logo.getBoundingClientRect();

        for (let i = 0; i < 9; i++) {
            const p = document.createElement("i");
            p.className = "arbor-snap-particle";
            p.style.left = `${rect.left + Math.random() * rect.width}px`;
            p.style.top = `${rect.top + Math.random() * rect.height}px`;
            p.style.setProperty("--x", `${(Math.random() - .5) * 65}px`);
            p.style.setProperty("--y", `${(Math.random() - .5) * 35}px`);
            document.body.appendChild(p);
            p.addEventListener("animationend", () => p.remove(), { once: true });
        }

        logo.style.animation = "arborSnapOut .24s ease-in forwards";

        setTimeout(() => {
            logo.textContent = text;
            callback?.();
            logo.style.animation = "arborSnapIn .36s ease-out forwards";
        }, 120);
    };

    events.forEach(([delay, text, callback]) =>
        setTimeout(() => change(text, callback), delay)
    );

    setTimeout(() => {
        logo.textContent = "Arbor";
        logo.style.animation = "";
        style.remove();
    }, 17400);
}








// [1] • Dark Full :D
function darkFull() {
    'use strict';
    localStorage.setItem("arborDarkMode", "true");

    // const url = "https://i.ibb.co/Z1W5npm6/Screenshot-2026-01-09-at-10-51-00.png";
    const url = "https://lh3.googleusercontent.com/ogw/AF2bZyiKOL8usSGX_TotpmdcWio4XlmwafuN1XmLmBBhQNPCYNU=s32-c-mo"; // change to any url or leave blank - this is for the
    // arbor logo loading thing, its just an image over on top that u can disable. to disable LEAVE BLANK

    const wait = setInterval(() => {
        const inner = document.querySelector(".loading-spinner__inner");
        if (!inner) return;
        clearInterval(wait);

        GM_xmlhttpRequest({
            method: "GET",
            url,
            responseType: "blob",
            onload: r => {
                const blobUrl = URL.createObjectURL(r.response);
                inner.innerHTML = "";

                const positions = [
                    "loading-spinner__circle loading-spinner__circle-left",
                    "loading-spinner__circle loading-spinner__circle-top",
                    "loading-spinner__circle loading-spinner__circle-right",
                    "loading-spinner__circle loading-spinner__circle-bottom"
                ];

                positions.forEach(cls => {
                    const wrapper = document.createElement("div");
                    wrapper.className = cls;

                    const img = document.createElement("img");
                    img.src = blobUrl;
                    img.style.borderRadius = "50%";
                    img.style.overflow = "hidden";
                    img.style.opacity = "0.167"
                    img.style.filter = "contrast(1.1) brightness(1.1) exposure(1.1) !important";
                    img.style.width = "100%";
                    img.style.height = "100%";
                    img.style.objectFit = "contain";

                    wrapper.appendChild(img);
                    inner.appendChild(wrapper);
                });
            }
        });
    }, 50);

    const style = document.createElement("style");
    style.textContent = `




#background {
    background-image: url(https://i.ibb.co/WpthBDqT/Branded.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }

.x-tip.mis-tooltip .header .title {
color: #E2E0CA !important;
}

.mis-tooltip {
background: #C6D2BA !important;
}

.mis-tooltip .header {
    background: #5D9720 !important;
}


.x-tip.mis-tooltip {
background: transparent !important;
    border-radius: 5px !important;
    overflow: hidden !important;
    border: none !important;
}
table.mis-cal tbody td span {
   color: #fffbe4 !important;
}
.x-tip.mis-tooltip .header .title {
    color: #E2E0CA !important;
    }

    .x-tip.mis-tooltip .header  {
    background: #5E9822 !important;
    }

    .system-modal-container {
    background: #28252467 !important;
    backdrop-filter: blur(15px) !important;
    }
    body.dark-mode {
        background: #0a0a0a !important;
        color: #eee !important;
    }

    .mis-htmlpanel-measure-barchart-chart-label {
    margin: 0 !important;
    }

    .mis-cal .mis-cal-day td, {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    }

    .info-panel-picture--circle {
    overflow: hidden !important;
    }

    .burger-menu__sub-nav-container, .burger-menu-container>:not(:first-child) {
   display: flex !important;
}



    .info-panel .info-panel-picture .info-panel-picture-inner {
    /* margin 3px, 92px */
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    }

    .event-box {
      border: none !important;
    }

    .side-bar-button {
    border-radius: 4px !important;
    overflow: hidden !important;
    background: rgb(21 21 21) !important;
    border: 1px solid rgba(255, 215, 0, 0.2) !important;
    color: #FFD700 !important;
    transition: all 0.3s ease !important;
    }


    .create-post-container {
        box-shadow: 0 4px 20px rgba(255, 215, 0, 0.2);
        transition: all 0.3s ease-in-out;

    }

    .create-post-container:hover {
    filter: brightness(1.05);
    box-shadow: 0 6px 25px rgba(255, 215, 0, 0.35);
    }


.column-title__name {

    color: white !important;
    font-weight: 1000 !important;
    font-family: system-ui !important;

}

.dark-mode .x-panel-default-outer-border-trl {
    border: none !important;
    display: none !important;
}

#Component_b4ca48e95dc0689e775fe38b928765ea_header-title-textEl {

color: #181818 !important;
}


sub-nav__header {
    color: #FFD700 !important;
}

.brungle-tooltip {
            position: fixed;
            padding: 12px 14px;
            border-radius: 12px;
            background: linear-gradient(to right, rgba(47, 41, 20, 0.35), rgba(8, 8, 8, 0.35));
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 30px rgba(0,0,0,0.45);
            min-width: 220px;
            max-width: 320px;
            z-index: 9999999;
            font-family: inherit;
            pointer-events: none;
            opacity: 0;
            transform: scale(0.98);
            transition: opacity 0.12s ease, transform 0.12s ease;
        }

.mis-datepicker .x-datepicker-inner .x-datepicker-selected div.x-datepicker-date {
    background-color: #5d96228c !important;
    color: #000000 !important;
    font-weight: 1000;
    scale: 1.1;
    border-radius: 2px;
    transition: all 0.25s cubic-bezier(0.22, 1, 0.26, 1);
}








/* all of the gaming-hub stuff */
@property --ss-angle{syntax:"<angle>";inherits:false;initial-value:0deg}
@property --ss-prox{syntax:"<number>";inherits:false;initial-value:0}
.ss-featured{ --ss-accent:215 223 31;--ss-highlight:244 249 135;--ss-base:24 26 9;position:relative!important;display:block!important;width:100%;height:auto!important;min-height:0!important;margin:50px 0 0!important;padding:0!important;overflow:visible!important;border:none!important;border-radius:40px!important;background:transparent!important;color:#fff;font-family:"Google Sans","Segoe UI",Roboto,Arial,sans-serif;isolation:isolate}
.ss-featured *, .ss-featured *::before, .ss-featured *::after{box-sizing:border-box}
.ss-featured button{font-family:inherit}
.ss-card{position:relative;width:100%;aspect-ratio:1738/700;min-height:240px;overflow:visible;isolation:isolate;container-type:inline-size;border-radius:40px;color:#fff;background:rgb(var(--ss-base));box-shadow:0 18px 55px rgb(0 0 0/.20);--card-mx:50%;--card-my:50%}
.ss-background{position:absolute;inset:0;z-index:-4;display:block;width:100%;height:100%;border-radius:inherit;object-fit:cover;object-position:center;opacity:.87;pointer-events:none;user-select:none}
.ss-background-wash{position:absolute;inset:0;z-index:-3;border-radius:inherit;pointer-events:none;background:linear-gradient(90deg,rgb(20 22 4/.94) 0%,rgb(20 22 4/.82) 25%,rgb(20 22 4/.57) 45%,rgb(20 22 4/.14) 68%,transparent 100%),linear-gradient(0deg,rgb(12 14 3/.40),transparent 40%,rgb(12 14 3/.08))}
.ss-background-vignette{position:absolute;inset:0;z-index:-2;border-radius:inherit;pointer-events:none;box-shadow:inset 0 0 80px rgb(0 0 0/.20),inset 0 1px 0 rgb(255 255 255/.07)}
.ss-ambient{position:absolute;z-index:-1;width:36%;aspect-ratio:1;border-radius:50%;pointer-events:none;filter:blur(65px);opacity:.13;animation:ss-ambient-drift 12s ease-in-out infinite alternate}
.ss-ambient-one{top:-35%;left:8%;background:#d7df1f}
.ss-ambient-two{right:18%;bottom:-50%;background:#d7df1f;opacity:.09;animation-delay:-5s}
@keyframes ss-ambient-drift{from{transform:translate3d(-3%,-2%,0) scale(.95)}to{transform:translate3d(8%,7%,0) scale(1.13)}}
.ss-character{position:absolute;z-index:0;right:0;bottom:0;display:block;width:auto;height:110%;max-width:60%;object-fit:contain;object-position:right bottom;transform:translate(-4.5%,6%) scale(1.03);transform-origin:right bottom;filter:sepia(.1) drop-shadow(0 10px 30px rgb(0 0 0/.45)) brightness(.8) saturate(.9);pointer-events:none;user-select:none}
.ss-content{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:5% 0 5% 5%;pointer-events:none}
.ss-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:50%;height:100%;min-width:0;pointer-events:none}
.ss-logo{display:block;width:76%;max-height:38%;height:auto;object-fit:contain;object-position:left center;filter:drop-shadow(0 5px 12px rgb(0 0 0/.18));pointer-events:none}
.ss-description{width:84%;margin:0;color:rgb(255 255 255/.88);font-size:2.1cqw;line-height:1.45;font-weight:400;letter-spacing:-.015em;text-shadow:0 2px 8px rgb(0 0 0/.35);pointer-events:none}
.ss-actions{display:flex;position:relative;align-items:center;gap:1.6cqw;width:max-content;max-width:100%;z-index:10;pointer-events:auto}
.ss-fx{--mx:50%;--my:50%;--prox:0;position:relative;isolation:isolate;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:1cqw;color:#fff!important;background:radial-gradient(circle at var(--mx) var(--my),rgb(215 223 31/.13),transparent 65%),linear-gradient(135deg,rgb(255 255 255/.095),rgb(255 255 255/.018))!important;border:1px solid rgb(225 235 95/.30)!important;border-radius:999px;box-shadow:inset 0 1px 0 rgb(255 255 255/.19),inset 0 -1px 0 rgb(255 255 255/.025),0 5px 18px rgb(0 0 0/.22),0 0 calc(var(--prox)*20px) rgb(215 223 31/calc(var(--prox)*.20));backdrop-filter:blur(18px) saturate(145%);-webkit-backdrop-filter:blur(18px) saturate(145%);cursor:pointer;-webkit-tap-highlight-color:transparent;text-decoration:none;transition:border-color .3s ease,box-shadow .3s ease,transform .25s cubic-bezier(.2,.8,.2,1),background .3s ease}
.ss-fx::before{content:"";position:absolute;inset:0;padding:1.3px;border-radius:inherit;background:conic-gradient(from var(--ss-angle),transparent 0deg,transparent 65deg,rgb(215 223 31/.18) 85deg,rgb(246 250 151/.98) 102deg,rgb(215 223 31/.45) 120deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;pointer-events:none;z-index:4;opacity:.85;animation:ss-orbit 5s linear infinite}
.ss-fx::after{content:"";position:absolute;inset:0;border-radius:inherit;z-index:0;background:radial-gradient(circle 85px at var(--mx) var(--my),rgb(244 249 135/calc(var(--prox)*.16)),transparent 100%);opacity:1;pointer-events:none}
.ss-button-orbit{position:absolute;inset:-1px;z-index:3;border-radius:inherit;pointer-events:none;overflow:hidden}
.ss-play{padding:1.15cqw 3.2cqw 1.15cqw 2cqw;min-width:100px;gap:1cqw;font-size:2.1cqw;font-weight:650;letter-spacing:-.025em;line-height:1;white-space:nowrap;transform:translateY(0)}
.ss-play-icon{position:relative;z-index:2;display:inline-flex;align-items:center;justify-content:center;width:2.6cqw;height:2.6cqw;min-width:12px;min-height:12px;color:#e6ed83;filter:drop-shadow(0 0 7px rgb(215 223 31/.28));transition:transform .3s cubic-bezier(.2,.8,.2,1),filter .3s ease}
.ss-play-icon svg{width:100%;height:100%}
.ss-play-text{position:relative;z-index:2}
.ss-play-shine{position:absolute;top:-100%;bottom:-100%;left:-60%;width:28%;z-index:2;transform:rotate(22deg);background:linear-gradient(90deg,transparent,rgb(255 255 255/.16),rgb(239 245 153/.36),rgb(255 255 255/.10),transparent);filter:blur(2px);pointer-events:none;animation:ss-shine 6s ease-in-out infinite}
.ss-play:hover,.ss-map-trigger:hover{border-color:rgb(235 242 122/.72)!important;box-shadow:inset 0 1px 0 rgb(255 255 255/.24),0 8px 28px rgb(0 0 0/.30),0 0 22px rgb(215 223 31/.12);transform:translateY(-2px)}
.ss-play:hover .ss-play-icon{transform:translateX(2px) scale(1.08);filter:drop-shadow(0 0 9px rgb(215 223 31/.55))}
.ss-play:active,.ss-map-trigger:active{transform:translateY(0) scale(.975);transition-duration:.08s}
.ss-play:focus-visible,.ss-map-trigger:focus-visible,.ss-map-option:focus-visible{outline:2px solid rgb(231 239 112/.9);outline-offset:2px}
@keyframes ss-orbit{to{--ss-angle:360deg}}
@keyframes ss-shine{0%,58%{left:-60%;opacity:0}64%{opacity:1}82%{left:135%;opacity:.75}83%,100%{left:135%;opacity:0}}


.ss-map-option.is-selected::after {
    content: "";
    margin-left: auto;
    width: 6px;
    height: 0.1px !important;
    border-radius: 50%;
    background: #e7ed8b8f !important;
    box-shadow: 0 0 8px rgb(215 223 31 / .8);
}
/* Map button: the wrapper is the anchor, so the menu sits right under the button */
.ss-map-wrap{position:relative;display:inline-flex;flex-shrink:0;z-index:11}
.ss-map-trigger{padding:1.15cqw 1.65cqw;gap:1cqw;font-size:1.9cqw;font-weight:500;line-height:1;white-space:nowrap;opacity:.835}
.ss-map-clock{position:relative;z-index:2;width:2.3cqw;height:2.3cqw;min-width:12px;min-height:12px;color:#e0e77c;filter:drop-shadow(0 0 5px rgb(215 223 31/.18))}
.ss-map-label{position:relative;z-index:2}
.ss-map-chevron{position:relative;z-index:2;width:1.8cqw;height:1.8cqw;min-width:10px;min-height:10px;color:rgb(255 255 255/.65);transition:transform .25s ease,color .25s ease}
.ss-map-trigger[aria-expanded="true"] .ss-map-chevron{transform:rotate(180deg);color:#e7ed8b}

/* Dropdown: one vertical glass panel BELOW the button.
   No border, no solid fill: only backdrop-filter blur + darkening. */
.ss-map-menu{
  position:absolute;top:calc(100% + 12px);left:0;
  width:clamp(190px,21cqw,250px);
  max-height:min(70vh,440px);overflow-y:auto;overscroll-behavior:contain;
  display:flex;flex-direction:column;gap:2px;
  padding:8px;margin:0;border-radius:20px;z-index:100;
  background:transparent!important;border:0!important;box-shadow:none!important;
  backdrop-filter:blur(24px) saturate(150%) brightness(.5)!important;
  -webkit-backdrop-filter:blur(24px) saturate(150%) brightness(.5)!important;
  transform-origin:top left;
  animation:ss-menu-in .22s cubic-bezier(.2,.8,.2,1);
  scrollbar-width:thin;scrollbar-color:rgb(255 255 255/.25) transparent
}


.ss-map-menu[hidden]{display:none!important}
.ss-map-menu::-webkit-scrollbar{width:6px}
.ss-map-menu::-webkit-scrollbar-thumb{background:rgb(255 255 255/.25);border-radius:99px}
@keyframes ss-menu-in{from{opacity:0;transform:translateY(-8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}

.ss-map-option{
  backdrop-filter: blur(4px) !important;
  display:flex;align-items:center;gap:11px;width:100%;
  margin:0;padding:10px 12px;border:0!important;border-radius:13px;
  background:transparent!important;box-shadow:none!important;
  color:rgb(255 255 255/.8);text-align:left;
  font-family:inherit;font-size:14px;font-weight:500;line-height:1;white-space:nowrap;
  cursor:pointer;-webkit-tap-highlight-color:transparent;
  transform:none!important;
  transition:background .18s ease,color .18s ease
}
.ss-pin{flex:none;width:16px;height:16px;color:rgb(255 255 255/.45);transition:color .2s ease,filter .2s ease}

/* hover: just a faint translucent lift */
.ss-map-option:hover,.ss-map-option:focus-visible{background:rgb(255 255 255/.10)!important;color:#fff}
.ss-map-option:hover .ss-pin{color:rgb(255 255 255/.9)}

/* selected: bright text, glowing pin, tiny dot on the right */
.ss-map-option.is-selected{color:#fff;background:rgb(255 255 255/.06)!important}
.ss-map-option.is-selected .ss-pin{color:#e7ed8b;filter:drop-shadow(0 0 6px rgb(215 223 31/.7))}
.ss-map-option.is-selected::after{content:"";margin-left:auto;width:6px;height:6px;border-radius:50%;background:#e7ed8b;box-shadow:0 0 8px rgb(215 223 31/.8)}

.ss-card-edge{position:absolute;inset:0;z-index:8;border:1px solid rgb(255 255 255/.075);border-radius:inherit;pointer-events:none;box-shadow:inset 0 1px 0 rgb(255 255 255/.07),inset 0 -1px 0 rgb(0 0 0/.12);background:radial-gradient(260px circle at var(--card-mx) var(--card-my),rgb(255 255 255/.02),transparent 100%);border-color:rgb(255 255 255/.025)}
.ss-fx::before{background:radial-gradient(circle 75px at var(--mx) var(--my),rgb(246 250 151/.95),rgb(215 223 31/.35) 22%,transparent 70%);opacity:var(--prox);animation:none}
.ss-card::before{content:"";position:absolute;inset:0;z-index:7;border-radius:inherit;pointer-events:none;background:radial-gradient(circle 320px at var(--card-mx) var(--card-my),rgb(255 255 255/.02),transparent 100%);opacity:1;mix-blend-mode:screen}
.ss-play-shine{opacity:0;left:-60%;animation:none}
.ss-play:hover .ss-play-shine{animation:ss-hover-shine .85s ease-out 1}
@keyframes ss-hover-shine{0%{left:-60%;opacity:0}15%{opacity:.9}100%{left:135%;opacity:0}}

@media(max-width:600px){
  .ss-featured{margin-top:24px!important}
  .ss-card{min-height:230px;border-radius:25px}
  .ss-content{padding:6% 0 6% 5%}
  .ss-copy{width:61%}
  .ss-logo{width:85%}
  .ss-description{width:92%;font-size:clamp(10px,2.7cqw,14px)}
  .ss-play{min-width:0;padding:10px 17px 10px 12px;gap:7px;font-size:clamp(12px,2.8cqw,15px)}
  .ss-play-icon{width:15px;height:15px}
  .ss-map-trigger{gap:6px;padding:10px 11px;font-size:clamp(10px,2.4cqw,13px)}
  .ss-map-clock{width:14px;height:14px}
  .ss-map-chevron{width:11px;height:11px}
  .ss-actions{gap:8px}
  .ss-character{max-width:57%}
  .ss-map-menu{width:190px;max-height:50vh;padding:6px;border-radius:16px}
  .ss-map-option{padding:10px;font-size:13px}
}
@media(prefers-reduced-motion:reduce){
  .ss-featured *,.ss-featured *::before,.ss-featured *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}
  .ss-play-shine,.ss-ambient{display:none}
}





.mis-datepicker .x-datepicker-inner .x-datepicker-selected div.x-datepicker-date:hover {
background-color: #548521ba !important;
    color: #ffffffa3 !important;
    font-weight: 100;
    scale: 1.2;
    border-radius: 5px;

}
.toggle-side-nav-button {
    background-color: #5d9622 !important;
}

#tooltip-portal {
filter: invert(54%) sepia(15%) saturate(931%) hue-rotate(60deg) brightness(100%) contrast(97%);
}
.toggle-side-nav-button:hover {
background-color: #3a6013 !important;
}
.toggle-side-nav-button rect {
        stroke: #c6d1bab0;
}
.toggle-side-nav-button .side-nav-button-arrow-icon-path {
fill: #c6d1bab0;
}

.toggle-side-nav-button .side-nav-button-line-path {
    stroke: #c6d1bab0;
}


.mis-datepicker .x-datepicker-inner div.x-datepicker-date {
transition: all 0.15s cubic-bezier(0.22, 1, 0.26, 1);
}

.mis-datepicker .x-datepicker-inner div.x-datepicker-date:hover {
background: radial-gradient(#5a922151, #f9d20200);
color: black !important;
}

.mis-cal .mis-cal-4.mis-cal-event .mis-cal-event-time .gc-arbor-event-title {
    background: #8e841d !important;
}

.gc-status {
    padding: 12px 14px !important;
    border-radius: 12px !important;
    background: linear-gradient(to right, rgba(47, 41, 20, 0.5), rgba(8, 8, 8, 0.5)) !important;
    backdrop-filter: blur(15px) !important;
    -webkit-backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45) !important;
    transform: scale(0.98);
    transition: opacity 0.12s ease, transform 0.12s ease;
}

.old-kpi-box .mis-htmlpanel-measure .mis-htmlpanel-measure-barchart .mis-htmlpanel-measure-barchart-chart .mis-htmlpanel-measure-barchart-chart-bar .mis-htmlpanel-measure-barchart-chart-bar-value {
    height: 17px;
    display: block;
    text-align: right;
    font-weight: 700;
    background-color: #7cb93b85 !important;
    margin-left: -1px;
    line-height: 17px;
    text-indent: 4px;
    padding-right: 2px;
}
        .dropdown-container {display: none !important; pointer-events: none !important;}
        .brungle-tooltip.show {
            opacity: 1;
            transform: scale(1);
        }
        .brungle-tooltip-title {
            font-size: 14px;
            font-weight: 700;
            color: #FFE500;
            margin-bottom: 2px;
            line-height: 1.2;
        }
        .brungle-tooltip-subtitle {
            font-size: 12px;
            font-weight: 500;
            color: #C6C5C3;
            line-height: 1.25;
        }


.login-overflow-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,215,0,0.06) 0%, transparent 60%),
        radial-gradient(ellipse 50% 40% at 80% 100%, rgba(255,215,0,0.03) 0%, transparent 50%),
        #0a0a0a !important;
}

.login-overflow-wrapper::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    /* up the fulham */
    z-index: 0;
}


.mis-cal .mis-cal-day td {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
}


.mis-cal-event {
    width: 14.5% !important;
    margin-left: 0px !important;
    margin-bottom: 10px !important;
}


.school-logo-button__wrapper {
min-width: 0px !important; max-height: 1000px !important
}




/* easier borders idk */
.side-bar {
    width: 85px !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
}



.keyboard-focusable-link-wrapper keyboard-focusable-link-wrapper__inset school-logo-button__wrapper {
    position: absolute;
    width: min-content !important;
    top: 0;
    min-width: 85px;
    right: 0;

}


.school-logo-button {
    display: flex !important;
    justify-content: center !important;
    width: 49% !important;
    align-items: center !important;
    height: 94% !important;
}


.school-logo-button__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 85px !important;
    bottom: 0 !important;
    position: absolute;
    min-width: 0px !important;
    max-height: 999px !important;
    /* min-width: 60px; */
    height: 100%;
    /* max-height: 48px; */
    padding: 1px;
    display: flex;
    justify-content: center;


}



.login-overflow-wrapper::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    top: -120px;
    right: -100px;
    background: radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: loginOrbFloat 8s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 0;
}

@keyframes loginOrbFloat {
    0%   { transform: translate(0, 0) scale(1); }
    100% { transform: translate(-40px, 30px) scale(1.15); }
}

.x-border-box, .x-border-box * {
    color: #ffd700d4 !important;
}

.x-datepicker-inner,
.x-datepicker-inner * {
    background-color: #C1CBB4 !important;
    color: #595350 !important;
}

.mis-datepicker .x-picker-body .date>.date-section .value {
    text-align: center;
    color: #ffd700bf;
    line-height: 30px;
}

.x-tip.mis-tooltip .content .aligned-list li span {
    color: #595350 !important;
    padding-left: 5px;
}

.x-tip.mis-tooltip .content .aligned-list li b, .x-tip.mis-tooltip .content .aligned-list li span {
    width: 50%;
    display: inline-block;
    color: #3c3735 !important;
}


.mis-datepicker .x-picker-body .date {
    font-size: 20px;
    background: #5A9221;
    color: #ffd700d4 !important;
}

.x-datepicker-column-header,
.x-datepicker-column-header-inner,
.x-datepicker-date {
    color: #595350 !important;
}


.login-container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 420px;
    background: linear-gradient(160deg, rgba(22,22,22,0.92) 0%, rgba(10,10,10,0.96) 100%);
    backdrop-filter: blur(40px) saturate(140%);
    -webkit-backdrop-filter: blur(40px) saturate(140%);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 24px;
    box-shadow:
        0 40px 100px rgba(0,0,0,0.55),
        0 0 0 1px rgba(255,255,255,0.04) inset,
        0 1px 0 rgba(255,255,255,0.06) inset;
    padding: 40px 36px 32px;
    animation: loginCardIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    overflow: hidden;
}

.login-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
    animation: loginEdgeShine 4s ease-in-out infinite;
    z-index: 2;
}

@keyframes loginEdgeShine {
    0%, 100% { left: -100%; }
    50%      { left: 100%; }
}

.login-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 120px;
    background: radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

@keyframes loginCardIn {
    0%   { opacity: 0; transform: translateY(30px) scale(0.97); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}


.login-container__header {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 32px;
    animation: loginFadeUp 0.55s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes loginFadeUp {
    0%   { opacity: 0; transform: translateY(16px); }
    100% { opacity: 1; transform: translateY(0); }
}

.login-container__school-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.login-container__school-logo img {
    width: 72px;
    height: auto;
    border-radius: 14px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.login-container__school-logo img:hover {
    transform: scale(1.06) rotate(-1deg);
    box-shadow: 0 12px 32px rgba(255,215,0,0.2);
}

.login-container__school-logo div {
    font-size: 15px;
    font-weight: 600;
    color: #c6c5c3;
    letter-spacing: 0.3px;
    line-height: 1.3;
}

.login-container__title {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 24px;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(90deg, #ffffff 0%, #FFD700 50%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: loginTitleShimmer 4s linear infinite;
    filter: drop-shadow(0 2px 6px rgba(255,215,0,0.25));
}

@keyframes loginTitleShimmer {
    to { background-position: -200% center; }
}


.login-container__center {
    position: relative;
    z-index: 1;
    animation: loginFadeUp 0.55s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.login-container__fields {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 18px;
}

.textfield-container {
    position: relative;
}

.textfield-input-wrapper {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.textfield-input-wrapper:hover {
    transform: translateY(-1px);
}

.textfield-input-wrapper::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.08);
    pointer-events: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 2;
}

.textfield-input-wrapper:focus-within::before {
    border-color: rgba(255,215,0,0.5);
    box-shadow: 0 0 0 3px rgba(255,215,0,0.1), 0 4px 20px rgba(255,215,0,0.12);
}


.textfield-input-wrapper::after {
    content: "";
    position: absolute;
    left: 0;
    top: 20%;
    bottom: 20%;
    width: 3px;
    border-radius: 0 3px 3px 0;
    background: #FFD700;
    transform: scaleY(0);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 3;
    box-shadow: 0 0 12px rgba(255,215,0,0.5);
}

.textfield-input-wrapper:focus-within::after {
    transform: scaleY(1);
}

.textfield-input.login-container__field {
    width: 100%;
    padding: 14px 16px;
    background: rgba(255,255,255,0.04) !important;
    border: none !important;
    border-radius: 12px;
    color: #eee !important;
    font-size: 15px;
    font-family: system-ui, -apple-system, sans-serif;
    outline: none;
    transition: background 0.3s ease;
    box-shadow: none !important;
}

.textfield-input.login-container__field:hover {
    background: rgba(255,255,255,0.06) !important;
}

.textfield-input.login-container__field:focus {
    background: rgba(255,255,255,0.07) !important;
}

.textfield-input.login-container__field::placeholder {
    color: rgba(255,255,255,0.3) !important;
    font-weight: 400;
    transition: color 0.2s ease;
}

.textfield-input.login-container__field:focus::placeholder {
    color: rgba(255,255,255,0.18) !important;
}


.login-container__links-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
}

.login-container__links-container .keyboard-focusable-button-wrapper {
    background: transparent !important;
    border: none !important;
    border-radius: 6px !important;
    padding: 4px 2px !important;
    cursor: pointer;
    transition: background 0.2s ease;
}

.login-container__links-container .keyboard-focusable-button-wrapper:hover {
    background: rgba(255,215,0,0.06) !important;
}

.login-container__link {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.45) !important;
    transition: color 0.25s ease;
    text-decoration: none;
}

.login-container__links-container .keyboard-focusable-button-wrapper:hover .login-container__link {
    color: #FFD700 !important;
}


.login-submit-button-wrapper {
    animation: loginFadeUp 0.55s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.login-submit-button {
    width: 100%;
    height: 48px;
    border: none !important;
    border-radius: 12px !important;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.35s ease !important;
}

.login-submit-button .btn-content {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FFD700 0%, #FFC300 50%, #E6B800 100%) !important;
    border-radius: 12px;
    position: relative;
    z-index: 1;
    transition: filter 0.3s ease, transform 0.25s ease;
}

.login-submit-button:hover .btn-content {
    filter: brightness(1.08);
    transform: scale(1.01);
}

.login-submit-button:hover {
    transform: translateY(-2px) !important;
    box-shadow:
        0 8px 30px rgba(255,215,0,0.35),
        0 0 60px rgba(255,215,0,0.1) !important;
}

.login-submit-button:active {
    transform: translateY(0) scale(0.985) !important;
    box-shadow: 0 2px 10px rgba(255,215,0,0.2) !important;
}

.login-submit-button .btn-label {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #0a0a0a !important;
    letter-spacing: 0.3px;
    text-shadow: none !important;
}


.login-submit-button .btn-content::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent);
    transform: skewX(-20deg);
    transition: none;
    z-index: 2;
    pointer-events: none;
}

.login-submit-button:hover .btn-content::after {
    animation: btnShimmer 0.8s ease forwards;
}

@keyframes btnShimmer {
    0%   { left: -100%; }
    100% { left: 150%; }
}


.login-help {
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    color: rgba(255,255,255,0.3);
    line-height: 1.5;
    animation: loginFadeUp 0.55s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.login-help a {
    color: rgba(255,255,255,0.5) !important;
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;
}

.login-help a:hover {
    color: #FFD700 !important;
}

.login-help .keyboard-focusable-link-wrapper {
    background: transparent !important;
    border: none !important;
    border-radius: 4px;
    padding: 2px 4px;
    transition: background 0.2s ease;
}

.login-help .keyboard-focusable-link-wrapper:hover {
    background: rgba(255,215,0,0.06) !important;
}


.login-container__footer {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.05);
    animation: loginFadeUp 0.55s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.login-container__footer .keyboard-focusable-link-wrapper {
    background: transparent !important;
    border: none !important;
    border-radius: 8px;
    padding: 6px 10px;
    display: inline-flex;
    transition: background 0.2s ease;
    cursor: pointer;
}

.login-container__footer .keyboard-focusable-link-wrapper:hover {
    background: rgba(255,255,255,0.04) !important;
}

.login-arbor-logo {
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(255,255,255,0.25) !important;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: color 0.25s ease;
}

.login-container__footer .keyboard-focusable-link-wrapper:hover .login-arbor-logo {
    color: rgba(255,255,255,0.45) !important;
}

.login-arbor-logo img {
    height: 18px;
    width: auto;
    opacity: 0.4;
    filter: grayscale(1) brightness(2);
    transition: opacity 0.3s ease, filter 0.3s ease;
}

.login-container__footer .keyboard-focusable-link-wrapper:hover .login-arbor-logo img {
    opacity: 0.65;
    filter: grayscale(0.5) brightness(1.5);
}


.login-container .keyboard-focusable-button-wrapper:focus-visible {
    outline: 2px solid rgba(255,215,0,0.5) !important;
    outline-offset: 2px;
    border-radius: 6px !important;
}

.login-container .keyboard-focusable-link-wrapper:focus-visible {
    outline: 2px solid rgba(255,215,0,0.5) !important;
    outline-offset: 2px;
    border-radius: 4px;
}

.textfield-input.login-container__field:focus-visible {
    outline: none !important;
}


@media (max-width: 480px) {
    .login-container {
        padding: 32px 24px 24px;
        border-radius: 20px;
        margin: 12px;
    }

    .login-container__title {
        font-size: 20px;
    }

    .login-container__links-container {
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
    }

    .login-container__school-logo img {
        width: 60px;
    }
}


@media (prefers-reduced-motion: reduce) {
    .login-container,
    .login-container__header,
    .login-container__center,
    .login-submit-button-wrapper,
    .login-help,
    .login-container__footer {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }

    .login-container::before {
        animation: none !important;
    }

    .login-overflow-wrapper::after {
        animation: none !important;
    }

    .login-container__title {
        animation: none !important;
        background-position: 0% center !important;
    }

    .login-submit-button:hover .btn-content::after {
        animation: none !important;
    }
}

        .like-btn {

            display: flex;
    align-items: center;
    gap: 6px;
    background: rgb(38 38 38) !important;
    border: 1px solid rgb(60 60 60) !important;
    color: rgb(221 221 221) !important;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-in-out !important;
        }

        .like-btn path {
        stroke: white;
        fill: none;
        transition: fill 0.3s ease, stroke 0.3s ease;
        }

        #ext-element-28 {

        display: none !important; }

        .liked {
        display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 215, 0, 0.2) !important;
    border: 1px solid rgba(255, 215, 0, 0.4)  !important;
    color: rgb(255, 215, 0) !important;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;

    transition: all 0.3s ease-in-out !important;
        }

         .liked path {
         stroke: #FFD700 !important;
         fill: #FFD700 !important;
         }

         .disliked {}
         .disliked path {
         stroke: #F99;
         fill: #F99;
         }
         .disliked-btn path {
         fill: none;
         stroke: white;
         transition: fill 0.3s ease, stroke 0.3s ease;
         }

        .arbor-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Inter", "Poppins", system-ui, sans-serif;
            user-select: none;
        }
        .arbor-logo__icon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            box-shadow: 0 6px 18px rgba(80, 120, 255, 0.25);
            transition: transform 0.25s ease;
        }
        .arbor-logo__text {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.4px;
                background: linear-gradient(135deg, #f7921f 14%, #deed21eb 20%, #f9d200 45%, #aed217f0 65%, #aed217f0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0px 2px 8px rgba(110, 170, 255, 0.35));
            position: relative;
        }

        .x-border-box, .x-border-box * {
    color: #bc9f02; !important;
    }
.btn-label {
color: white !important;
}

.mis-cal .mis-cal-4.mis-cal-event {
    border-color: #355629;
}
.mis-cal .mis-cal-day {
  scale: 1.1 !important;
    margin-left: -3vh !important;
    margin-top: 4vh !important;
}

.column-flex-wrapper {
overflow:visible !important;
}



        .kpi-box-wrapper a:hover, .kpi-box-wrapper a {
        border: none !important;
        }
        .arbor-max-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(8,8,8,0.45);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        z-index: 9999998;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
    }
    .arbor-max-backdrop.show {
        opacity: 1;
        pointer-events: all;
    }

    .arbor-max-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.96);
        width: 820px;
        max-width: 92vw;
        height: 520px;
        background: linear-gradient(135deg, rgba(47,41,20,0.55), rgba(8,8,8,0.75));
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 40px 120px rgba(0,0,0,0.65);
        z-index: 9999999;
        opacity: 0;
        transition: opacity 0.25s ease, transform 0.25s ease;
        overflow: hidden;
        font-family: "Inter", system-ui, sans-serif;
    }
    .arbor-max-popup.show {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    .arbor-max-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 22px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .arbor-max-title {
        font-size: 22px;
        font-weight: 800;
        background: linear-gradient(90deg,#fff,#ffe500,#9c5bff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
.side-bar-button--active {
background: rgba(255, 215, 0, 0.25) !important;
    transform: scale(1.01) !important;
    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
}

.side-bar-button--active .side-bar-button__icon {
background: transparent !important;
}

button.side-bar-button__wrapper[aria-label="Sign Out"]:hover .side-bar-button {
    background: rgb(255 0 0 / 15%) !important;
    transform: scale(0.999) !important;
    box-shadow: 0 4px 20px rgb(255 0 0 / 20%) !important;
    color: red !important;
}

button.side-bar-button__wrapper[aria-label="Sign Out"] .side-bar-button {
background: rgb(255 0 0 / 5%) !important;
}


button.side-bar-button__wrapper[aria-label="Sign Out"] {
margin-top: 21.3px !important;
}

    .arbor-max-refresh {
        font-size: 1vh;
        font-weight: 600;
        color: #bdbdbd;
        margin-left: 6px;
    }
    .arbor-max-close {
        background: none;
        border: none;
        color: #e5e5e5;
        font-size: 20px;
        cursor: pointer;
    }

    .arbor-max-body {
        display: flex;
        height: calc(100% - 66px);
    }

    .setting-sidebar {
        width: 220px;
        border-right: 1px solid rgba(255,255,255,0.06);
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .setting-item {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px 12px;
        border-radius: 10px;
        background: transparent;
        border: none;
        color: #ddd;
        cursor: pointer;
        transition: background 0.2s ease;
    }
    .setting-item.active,
    .setting-item:hover {
        background: rgba(255,255,255,0.08);
    }

    .setting-view {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .top-nav {
        padding: 14px 18px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .top-nav h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        color: #ffe500;
    }

    .setting-viewport {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ededed;
    }

    .fake-loader {
        animation: fadeIn 0.25s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
        .arbor-logo__text::after {
            content: "";
            position: absolute;
            top: -40%;
            left: -20%;
            width: 140%;
            height: 180%;
            background: linear-gradient(120deg, rgb(149 146 34 / 20%) 10%, rgb(245 207 8 / 5%) 35%, rgb(217 130 31 / 13%) 60%);
            transform: rotate(-10deg);
            pointer-events: none;
            mix-blend-mode: screen;
        }
        .arbor-logo__max {
            font-weight: 900;
            margin-left: 4px;
            background: linear-gradient(90deg, #6a5cff, #00d4ff, #b76bff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0px 0px 10px rgba(150, 120, 255, 0.55));
        }
        .arbor-logo:hover .arbor-logo__icon {
            transform: scale(1.08) rotate(-2deg);
        }
        .arbor-logo:hover .arbor-logo__text::after {
            animation: arborShine 1.2s ease forwards;
        }
        @keyframes arborShine {
            0% { left: -60%; opacity: 0; }
            30% { opacity: 1; }
            100% { left: 60%; opacity: 0; }
        }


.navigation-tree__item__page-link.navigation-tree__item__page-link--selected {
    background-color: #e7e3bb !important;
    box-shadow: 4px 0 0 0 #aaa722 inset !important;
    }

     .arbor-btn-primary .btn-content {

     background: #68AA22 !important;
    color: white !important;

     }

     .slideover-header {

         background: #FFD700 !important;
    color: white !important;
    border-bottom: 1px solid #00000000 !important;

     }

     .slideover-content {

         background: #201e1d !important;
    overflow: hidden auto !important;
    border-left: 2px solid #454240 !important;

     }

    .event-box * {
    border: none !important;
    }

    .kpi-box-wrapper * {
        border: none !important;
    }



    .calendar-widget-list .calendar-widget-item-color--4 .calendar-widget-item-title {
    background-color: #ae8d49;
}
.notification-header {
    background: #090909;
}
    .kpi-box-wrapper a {
    border: none !important;
    }

    .side-bar-button__wrapper .side-bar-button--active .side-bar-button__icon, .side-bar-button__wrapper:hover .side-bar-button__icon {
    background-color: #3b3515 !important;
}

    .x-border-box, .x-border-box * {    border-left: 2px transparent;}

.calendar-widget-item-location {    color: #141414 !important;
    font-weight: bold;}

    .event-box-section__wrapper {
    background: none !important;
    border: none !important;
    }

    .x-panel-bodyWrap {
        margin-top: -12px !important;
    }

    section.arbor-kpi-panel[aria-label="KPI Panel: Payments"] {
  display: none !important;
}


    .calendar-widget-item-link {
        filter: sepia(1) saturate(1.5) brightness(0.75) hue-rotate(8deg) contrast(1.1) !important;
    }

    .info-panel-header {
        background: linear-gradient(135deg, #312d12, #0f0f0e) !important;
    border-bottom: 1px solid rgba(255, 215, 0, 0.15) !important;
    }

    .calendar-widget-header {
        background: linear-gradient(135deg, #1a1a1a, #111) !important;
    border-bottom: 1px solid rgba(255, 215, 0, 0.15) !important;
    }

    .mis-htmlpanel-measure {
        position: relative;
        padding: 28px 32px;
        border-radius: 22px;
        background: linear-gradient(135deg, rgba(20,20,20,0.8), rgba(0,0,0,0.5));
        backdrop-filter: blur(24px) saturate(160%);
        box-shadow: 0 25px 60px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1);
        overflow: hidden;
        color: #fff;
        transition: transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s;
    }

    .mis-htmlpanel-measure:hover {
        transform: translateY(-6px) scale(1.015);
        box-shadow: 0 40px 90px rgba(0,0,0,0.4), 0 0 40px rgba(255,215,0,0.35);
    }

    .mis-htmlpanel-measure::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 0%, rgba(255,215,0,.35), transparent 55%);
        opacity: .45;
        pointer-events: none;
    }

    .mis-htmlpanel-measure-header .x-header-text {
        font-size: 18px;
        letter-spacing: .4px;
        font-weight: 600;
        opacity: .85;
        color: #ddd !important;
    }

    .mis-htmlpanel-measure-value {
        font-size: 64px;
        font-weight: 800;
        margin: 12px 0 20px;
        background: linear-gradient(90deg,#FFD700,#FFF700,#FFD700);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 3s linear infinite;
        filter: drop-shadow(0 6px 18px rgba(255,215,0,.45));
        cursor: pointer;
        transition: transform .25s;
    }

    .mis-htmlpanel-measure-value:active {
        transform: scale(.94);
    }

    @keyframes shimmer {
        to { background-position: -200% center; }
    }

    .mis-htmlpanel-measure-barchart-chart-bar {
        background: rgba(255,255,255,0.05);
        border-radius: 14px;
        overflow: hidden;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
    }

    .mis-htmlpanel-measure-barchart-chart-bar-value {
        height: 100%;
        transform-origin: left;
        animation: growBar 1.2s cubic-bezier(.2,.9,.2,1) forwards;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,.15),
                    0 0 22px currentColor;
        position: relative;
        color: #FFD700;
    }

    @keyframes growBar {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
    }

    .mis-htmlpanel-measure-barchart-chart-bar-value::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent, rgba(255,255,0,.45), transparent);
        transform: translateX(-100%);
        animation: sweep 2.8s infinite;
    }

    @keyframes sweep {
        60% { transform: translateX(120%); }
        100% { transform: translateX(120%); }
    }

    .mis-htmlpanel-measure-barchart-chart-label {
        margin-top: 6px;
        font-size: 13px;
        opacity: .85;
        letter-spacing: .3px;
        color: #ddd !important;
    }

    .kpi-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255,215,0,.45);
        transform: scale(0);
        animation: ripple .6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple {
        to { transform: scale(6); opacity: 0; }
    }

    .mis-property-row {
        position: relative;
        border: 1px solid rgba(255,255,255,0.1) !important;
        border-radius: 12px !important;
        margin: 8px 0 !important;
        background: linear-gradient(135deg, rgba(30,30,30,0.4), rgba(0,0,0,0.25)) !important;
        backdrop-filter: blur(12px) saturate(180%);
        transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        overflow: hidden;
        padding: 14px 20px !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08);
        color: #fff;
    }

    .mis-property-row:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.3), 0 0 25px rgba(255,215,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.15);
        border-color: rgba(255,215,0,0.4) !important;
        background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08)) !important;
    }

    .mis-property-row:active {
        transform: translateY(-1px) scale(0.995);
        transition: all 0.1s ease;
    }

    .mis-property-row::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(to bottom, #FFD700, #FFC300);
        opacity: 0;
        transition: opacity 0.3s;
    }

    .mis-property-row:hover::before { opacity: 1; }

    .mis-property-row .x-form-display-field {
        font-size: 15px;
        font-weight: 500;
        color: #fff !important;
        transition: color 0.3s;
        padding-left: 8px;
    }

    .mis-property-row:hover .x-form-display-field { color: #FFB700 !important; }

    .mis-property-row-click-effect {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,215,0,0.4), transparent);
        transform: scale(0);
        animation: propertyClick 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes propertyClick {
        0% { transform: scale(0); opacity: 0.8; }
        100% { transform: scale(3); opacity: 0; }
    }








    .dark-mode .x-panel,
    .dark-mode .x-panel-header,
    .dark-mode .x-panel-body,
    .dark-mode .info-panel,
    .dark-mode .event-box,
    .dark-mode .arbor-kpi-panel,
    .dark-mode .calendar-widget-container,
    .dark-mode .side-bar,
    .dark-mode .side-bar-button,
    .dark-mode .x-toolbar,
    .dark-mode .x-toolbar-item {
        background-color: #121212 !important;
        color: #eee !important;
        border-color: rgba(255,255,255,0.1) !important;
    }

    .dark-mode .x-panel-header {
        background: linear-gradient(135deg, #1a1a1a, #111) !important;
        border-bottom: 1px solid rgba(255,215,0,0.15) !important;
    }

    .dark-mode .info-panel {
        background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(15,15,15,0.8)) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }

    .dark-mode .info-panel-title {
        color: #FFD700 !important;
        text-shadow: 0 2px 8px rgba(255,215,0,0.3);
    }

    .dark-mode .info-panel-property-label {
        color: #aaa !important;
    }

    .dark-mode .info-panel-property-value {
        color: #FFD700 !important;
        font-weight: 600;
    }

    .dark-mode .event-box {
        background: linear-gradient(135deg, rgba(25,25,25,0.9), rgba(10,10,10,0.8)) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,215,0,0.1) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }

    .dark-mode .event-box-section__title {
        color: #FFD700 !important;
        font-weight: 600;
    }

    .dark-mode .event-box-section__contents > div > div {
        color: #ddd !important;
    }

    .dark-mode .event-box-section__contents > div > div b {
        color: #FFD700 !important;
    }

    .dark-mode .calendar-widget-container {
        background: linear-gradient(135deg, rgba(25,25,25,0.9), rgba(10,10,10,0.8)) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,215,0,0.1) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);

            min-height: 250px !important;
    max-height: 350px !important;
    height: min-content !important;
    padding-bottom: 3px !important;
    padding-top: 3px !important;
    padding-left: 2px !important;
    padding-right: 2px !important;
    }












    .dropdown-menu-url {
    color: white !important;
    }

    .dark-mode .calendar-widget-header-title {
        color: #FFD700 !important;
        font-weight: 600;
    }

    .dropdown-menu-button__wrapper {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.08)) !important;
    border: none !important;
    }

    .sub-nav__container {
    display: none !important;
    }

    .bread-crumb__folder-container span {
    color: white !important;
    }

    .dark-mode .calendar-widget-item {
        background: rgba(40,40,40,0.6) !important;
        border: 1px solid rgba(255,255,255,0.08) !important;
        transition: all 0.3s ease;
    }

    .dark-mode .calendar-widget-item:hover {
        background: rgba(255,215,0,0.1) !important;
        border-color: rgba(255,215,0,0.3) !important;
        transform: translateX(5px);
    }

    .dark-mode .calendar-widget-item-date {
        color: #FFD700 !important;
        font-weight: 500;
    }

    .dark-mode .calendar-widget-item-title {
        color: #fff !important;
    }



    .calendar-widget-item-location {
            color: #0e0e0e !important;
    }

    .dark-mode .arbor-kpi-panel {
        background: linear-gradient(135deg, rgba(25,25,25,0.9), rgba(10,10,10,0.8)) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,215,0,0.1) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }

    .dark-mode .arbor-kpi-panel-header {
        background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(20,20,20,0.8)) !important;
        color: #FFD700 !important;
        font-weight: 600;
        border: 1px solid rgba(255,215,0,0.2) !important;
        border-radius: 12px 12px 0 0 !important;
        padding: 12px 16px !important;
        transition: all 0.3s ease;
    }

    .dark-mode .arbor-kpi-panel-header:hover {
        background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08)) !important;
        border-color: rgba(255,215,0,0.4) !important;
    }

    .dark-mode .arbor-kpi-panel-header__wrapper {
        border: none !important;
        background: transparent !important;
    }

    .dark-mode .arbor-kpi-panel-header__collapse-icon {
        color: #FFD700 !important;
        filter: drop-shadow(0 0 4px rgba(255,215,0,0.5));
    }

    .dark-mode .old-kpi-box {
        background: transparent !important;
        border: none !important;
    }

    .dark-mode .kpi-box-link__wrapper {
        border-radius: 16px !important;
        overflow: hidden;
        transition: transform 0.3s ease;
        border: 1px solid rgba(255,215,0,0.1) !important;
    }

    .dark-mode .kpi-box-link__wrapper:hover {
        transform: translateY(-4px);
        border-color: rgba(255,215,0,0.3) !important;
    }

    .dark-mode .side-bar {
        background: linear-gradient(135deg, #1a1a1a, #111) !important;
        border-right: 1px solid rgba(255,215,0,0.2) !important;
    }

    .dark-mode .side-bar-button {
        background: rgba(30,30,30,0.8) !important;
        border: 1px solid rgba(255,215,0,0.2) !important;
        color: #FFD700 !important;
        transition: all 0.3s ease;
    }

    .dark-mode .side-bar-button:hover {
        background: rgba(255,215,0,0.15) !important;
        transform: scale(0.999) !important;
        box-shadow: 0 4px 20px rgba(255,215,0,0.2);
    }

    .dark-mode .side-bar-button__icon svg path {
        fill: #FFD700 !important;
    }

    .dark-mode .side-bar-button__icon .pagesICON path {
        fill: #00000000 !important;
    }

    .dark-mode .side-bar-button__text {
        color: #FFD700 !important;
    }

    .dark-mode .header {
        background: linear-gradient(135deg, #1a1a1a, #111) !important;
        border-bottom: 1px solid rgba(255,215,0,0.2) !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }

    .dark-mode .container-bar {
        background: transparent !important;
    }

    .dark-mode .top-bar {
        background: transparent !important;
    }

    .dark-mode .app-container,
    .dark-mode .app-inner-container,
    .dark-mode .page-container {
        background: #0a0a0a !important;
    }

    .dark-mode .widget-zone-column-flex-wrapper {
        background: transparent !important;
    }

    .dark-mode .main-content-wrapper {
        background: transparent !important;
    }

    .dark-mode .ext-layout-renderer-container {
        background: transparent !important;
    }

    .dark-mode .mis-ext-layout-container {
        background: transparent !important;
    }

    .dark-mode .x-component {
        background: transparent !important;
    }

    .dark-mode .x-form-item-label {
        color: #FFD700 !important;
    }

    .dark-mode .x-title-text {
        color: #FFD700 !important;
        font-weight: 600;
        text-shadow: 0 2px 4px rgba(255,215,0,0.3);
    }

    .dark-mode .mis-icon {
        color: #FFD700 !important;
    }

    .dark-mode .arbor-icon {
        color: #FFD700 !important;
    }

    .dark-mode .skip-to-content-button__wrapper {
        background: rgba(255,215,0,0.1) !important;
        color: #FFD700 !important;
        border: 1px solid rgba(255,215,0,0.3) !important;
    }

    .dark-mode .dropdown-contents-wrapper {
        background: linear-gradient(135deg, #1a1a1a, #111) !important;
        border: 1px solid rgba(255,215,0,0.2) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }

    .dark-mode .notification-header {
        color: #FFD700 !important;
        border-bottom: 1px solid rgba(255,215,0,0.2) !important;
    }

    .dark-mode .notification-button-dropdown__empty-text {
        color: #aaa !important;
    }

    .dark-mode .loading-spinner-background {
        background: rgba(10,10,10,0.9) !important;
    }

    .dark-mode .loading-spinner__text {
        color: #FFD700 !important;
    }

    .dark-mode .mis-section {
        background: transparent !important;
        border: none !important;
    }

    .dark-mode .x-panel-default-outer-border-rbl {
        border: none !important;
    }

    .dark-mode .x-panel-default-outer-border-trl {
        border: none !important;
    }

    .dark-mode .x-panel-header-title-default {
        background: transparent !important;
        border: none !important;
    }

    .dark-mode .keyboard-focusable-button-wrapper:focus,
    .dark-mode .keyboard-focusable-link-wrapper:focus {
        outline: 2px solid rgba(255,215,0,0.5) !important;
        outline-offset: 2px;
    }

    .dark-mode .keyboard-focusable-button-wrapper__inset {
        background: transparent !important;
        border: none !important;
    }

    .dark-mode .keyboard-focusable-link-wrapper__disable-default-styles {
        color: inherit !important;
        text-decoration: none !important;
    }

    .dark-mode .arbor-icon-arrow-go-right {
        color: #FFD700 !important;
    }

.mis-datepicker .x-picker-body {
    box-shadow: 0 0 6px #5a941e;
    border-radius: 5px;
    background-color: #c1ccb5;
}

.mis-datepicker .x-picker-body {
    box-shadow: 0 0 6px #5a941e;
    border-radius: 5px;
    border-radius: 13px !important;
    overflow: hidden;
    background-color: #c1ccb5;
 }
    .mis-datepicker .x-picker-body .date>.date-section .arrow {

        color: #c5d0b9 !important;
        transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }

    .mis-datepicker .x-picker-arrow {
    display: block;
    margin: 0 auto;
    filter: invert(54%) sepia(15%) saturate(931%) hue-rotate(60deg) brightness(100%) contrast(97%) !important;
    }

    #mis-datepicker-1375-date {
        background: #64913b !important;
    }

    .mis-datepicker .x-picker-body .date>.date-section .arrow:hover {
    color: #ffd700 !important;
    background-color: #5c8437 !important;
    }

    .dark-mode .x-header-text {
        color: #ddd !important;
    }

    .dark-mode .mis-htmlpanel-measure-barchart-chart label {
        color: #ddd !important;
    }

    #mis-button-1037-btnInnerEl {opacity: 0.9 !important;}

    .dark-mode-toggle-btn {
        position: fixed;
        bottom: 20px;
        opacity: 0;
        right: 20px;
        z-index: 9999;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FFD700, #FFC300);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(255,215,0,0.4);
        transition: all 0.3s ease;
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }

    .dark-mode-toggle-btn:hover {
        transform: scale(1.1) rotate(180deg);
        box-shadow: 0 6px 30px rgba(255,215,0,0.6);
    }

    .dark-mode-toggle-btn:active {
        transform: scale(0.95);
    }

    .dark-mode .x-body {
        background: #0a0a0a !important;
    }

    .dark-mode .x-panel-body-default {
        background: transparent !important;
        border: none !important;
    }

    .dark-mode .x-form-display-field-body-property-row {
        background: transparent !important;
    }

    .dark-mode .x-autocontainer-innerCt {
        background: transparent !important;
    }

    .dark-mode .x-panel-body {
        background: transparent !important;
        border: none !important;
    }

    .dark-mode .mis-clickable {
        background: transparent !important;
    }

    .dark-mode .x-form-item-body-property-row {
        background: transparent !important;
    }

    .dark-mode .x-column-layout-ct {
        background: transparent !important;
    }

    .dark-mode .x-autocontainer-outerCt {
        background: transparent !important;
    }

    .dark-mode .mis-property-row .mis-icon-right {
        color: #FFD700 !important;
    }

:root {
        --bg: #0A0A0A;
        --panel: #121212;
        --panel-2: #181818;
        --border: #222;
        --text: #eaeaea;
        --muted: #9a9a9a;
        --primary: #FFD700;
        --primary-soft: rgba(255,215,0,0.15);
        --radius: 10px;
        --fast: 0.18s;
        --slow: 0.35s;
    }

    body, .x-container, .x-autocontainer-innerCt {
        background: var(--bg) !important;
        color: var(--text) !important;
    }

    .mis-calendar-top-bar-container,
    .mis-calendar-segmeted-button-container,
    .mis-calendar-title {
        background: var(--panel) !important;
        border-radius: var(--radius);
        padding: 6px 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,.5);
        transition: transform var(--slow), box-shadow var(--slow);
    }

    .mis-calendar-top-bar-container:hover,
    .mis-calendar-segmeted-button-container:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 40px rgba(0,0,0,.7);
    }

    .mis-calendar-title b {
        color: var(--primary);
        letter-spacing: .5px;
    }

    .x-btn {
        background: linear-gradient(145deg, #151515, #0d0d0d) !important;
        border: 1px solid var(--border) !important;
        border-radius: 8px !important;
        color: var(--text) !important;
        transition: background var(--fast), transform var(--fast), box-shadow var(--fast), color var(--fast);
    }

    .x-btn:hover {
        background: linear-gradient(145deg, #1d1d1d, #111) !important;
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 6px 18px rgba(255,215,0,.15);
        color: var(--primary) !important;
    }

    .x-btn-pressed,
    .x-btn:active {
        background: var(--primary-soft) !important;
        color: var(--primary) !important;
        box-shadow: inset 0 0 0 1px var(--primary);
    }

    table.mis-cal {
        background: var(--panel) !important;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 30px 60px rgba(0,0,0,.6);
    }

    table.mis-cal thead td {
        background: var(--panel-2) !important;
        color: var(--primary);
        font-weight: 600;
        border-bottom: 1px solid var(--border);
        padding: 10px;
        transition: background var(--fast);
    }

    table.mis-cal thead td {
        background: #1f1f1f !important;
    }

    table.mis-cal tbody tr td {
        border-top: 1px solid var(--border);
        color: var(--muted);
    }

    table.mis-cal tbody tr td {
        background: rgba(255,255,255,0.015);
    }

    .mis-cal-event {
        background: linear-gradient(135deg, #1b1b1b, #101010) !important;
        border: 1px solid rgba(255,215,0,.25);
        border-radius: 4px !important;
        color: var(--text);
        box-shadow: 0 10px 30px rgba(0,0,0,.6);
        transition: transform var(--slow), box-shadow var(--slow), background var(--slow);
        overflow: hidden;
    }

    .mis-cal-event::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent, rgba(255,215,0,.15), transparent);
        opacity: 0;
        transition: opacity var(--slow);
        pointer-events: none;
    }

    .mis-cal-event:hover::before {
        opacity: 1;
    }

    .mis-cal-event:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 20px 50px rgba(255,215,0,.25);
        background: linear-gradient(135deg, #222, #141414) !important;
        z-index: 5;
    }

    .mis-cal-event-time span {
        color: var(--primary);
        font-weight: 600;
    }

    .mis-cal-event .title {
        color: #f1f1f1;
        font-weight: 500;
    }

    .mis-cal-event-small {
        opacity: .85;
        filter: saturate(.8);
    }

    .mis-cal-event-small:hover {
        opacity: 1;
        filter: saturate(1.1);
    }

    td[data-datetime] {
        transition: background var(--fast);
    }


    #ext-element-28 {
       display: block !important;
     }
     /* fixed bug for calendar item disappearing */

    td[data-datetime]:hover {
        background: rgba(255,215,0,.04);
    }

    table.mis-cal tbody td span {
        color: var(--muted);
        font-size: 12px;
    }

    .x-segmented-button-item {
        transition: transform var(--fast);
    }

    .x-segmented-button-item:hover {
        transform: scale(1.05);
    }
    `;
    document.head.appendChild(style);





    const pfpManager = {
        keyCustom: "arborCustomPFP",
        keyOriginal: "arborOriginalPFP",
        getImg() {
            return document.querySelector("img.info-panel-picture-inner");
        },
        applyCustomStyle(img) {
            img.style.margin = "0px";
            img.style.width = "100%";
            img.style.height = "100%";
        },
        applyOriginalStyle(img) {
            img.style.margin = "3px";
            img.style.width = "92px";
            img.style.height = "92px";
        },
        init() {
            const img = this.getImg();
            if (!img) return;

            if (!localStorage.getItem(this.keyOriginal)) {
                localStorage.setItem(this.keyOriginal, img.src);
            }

            const custom = localStorage.getItem(this.keyCustom);
            if (custom) {
                img.src = custom;
                this.applyCustomStyle(img);
            } else {
                this.applyOriginalStyle(img);
            }
        },
        change() {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = e => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = ev => {
                    const img = this.getImg();
                    if (!img) return;
                    const base64 = ev.target.result;
                    img.src = base64;
                    this.applyCustomStyle(img);
                    localStorage.setItem(this.keyCustom, base64);
                };
                reader.readAsDataURL(file);
            };
            input.click();
        },
        reset() {
            const img = this.getImg();
            const original = localStorage.getItem(this.keyOriginal);
            if (!img || !original) return;
            img.src = original;
            this.applyOriginalStyle(img);
            localStorage.removeItem(this.keyCustom);
        },
        handle() {
            const r = prompt("1 = Reset ur PFP \n2 = Change PFP");
            if (r === "1") this.reset();
            if (r === "2") this.change();
        }
    };

    const colorMode = {
        dark: false,
        init() {
            if (localStorage.getItem("arborDarkMode") === "true") this.enable();
            const btn = document.createElement("button");
            btn.className = "dark-mode-toggle-btn";
            btn.innerHTML = this.dark ? "☀️" : "🌙";
            btn.onclick = () => this.toggle();
            document.body.appendChild(btn);
            this.btn = btn;
        },
        toggle() {
            this.dark ? this.disable() : this.enable();
        },
        enable() {
            document.body.classList.add("dark-mode");
            this.dark = true;
            localStorage.setItem("arborDarkMode", "true");
            if (this.btn) this.btn.innerHTML = "☀️";
        },
        disable() {
            document.body.classList.remove("dark-mode");
            this.dark = false;
            localStorage.setItem("arborDarkMode", "true");
            if (this.btn) this.btn.innerHTML = "🌙";
        }
    };



    const modifySidebar3 = () => {
        const sidebar = document.querySelector(".side-bar");
        if (!sidebar) return;

        const buttons = Array.from(sidebar.querySelectorAll("button"));
        let signOutBtn = null;

        buttons.forEach(b => {
            const t = b.innerText || "";
            if (t.includes("Help Centre")) b.remove();
            if (t.includes("Sign Out")) signOutBtn = b;
        });

        if (!signOutBtn || sidebar.querySelector(".custom-pfp-btn")) return;

        const btn = document.createElement("button");
        btn.className = "keyboard-focusable-button-wrapper side-bar-button__wrapper custom-pfp-btn";
        btn.innerHTML = `
            <span class="side-bar-button">
                <div class="side-bar-button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#FFD700" d="M12 4.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 7a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.064 5.819c.132.098.302.213.505.327c.513.29 1.265.59 2.18.59s1.668-.3 2.181-.59c.203-.114.373-.229.505-.327q.282.075.559.166l.96.315c.72.237 1.264.812 1.458 1.523l.397 2.864c.075.544-.21.939-.606 1.033c-1.047.25-2.812.53-5.453.53s-4.407-.28-5.454-.53c-.395-.094-.68-.489-.606-1.033l.397-2.864A2.23 2.23 0 0 1 7.796 13.3l.96-.315q.276-.09.558-.166m.71-1.355l-.291-.287l-.402.092q-.526.12-1.044.291l-.96.315a3.72 3.72 0 0 0-2.454 2.616l-.01.04l-.408 2.95c-.161 1.164.462 2.393 1.744 2.698c1.17.279 3.052.571 5.8.571c2.749 0 4.631-.292 5.801-.57c1.282-.306 1.906-1.535 1.745-2.698l-.409-2.95l-.01-.04a3.72 3.72 0 0 0-2.455-2.617l-.959-.315q-.517-.17-1.044-.29l-.402-.093l-.29.286l-.001.001a2 2 0 0 1-.12.101a3 3 0 0 1-.41.274a2.96 2.96 0 0 1-1.445.397a2.96 2.96 0 0 1-1.445-.397a3.2 3.2 0 0 1-.53-.375"/></svg></div>
                <div class="side-bar-button__text">Custom PFP</div>
            </span>
        `;
        btn.onclick = () => pfpManager.handle();
        signOutBtn.parentNode.insertBefore(btn, signOutBtn);
    };

    const modifySidebar2 = () => {
        const sidebar = document.querySelector(".side-bar");
        if (!sidebar) return;

        const buttons = Array.from(sidebar.querySelectorAll("button"));
        let signOutBtn = null;

        buttons.forEach(b => {
            const t = b.innerText || "";
            if (t.includes("Sign Out")) signOutBtn = b;
        });

        if (!signOutBtn || sidebar.querySelector(".custom-reports-btn")) return;

        const btn = document.createElement("button");
        btn.className = "keyboard-focusable-button-wrapper side-bar-button__wrapper custom-reports-btn";
        btn.innerHTML = `
            <span class="side-bar-button">
                <div class="side-bar-button__icon"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" id="paper">
  <switch>
    <g>
      <path style="scale: 0.25;"d="M76 0H20C13.37 0 8 5.37 8 12v72c0 6.63 5.37 12 12 12h56c6.63 0 12-5.37 12-12V12c0-6.63-5.37-12-12-12zm4 84c0 2.21-1.79 4-4 4H20c-2.21 0-4-1.79-4-4V12c0-2.21 1.79-4 4-4h56c2.21 0 4 1.79 4 4v72zM64 68H32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8zm0-16H32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8zm0-16H32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8zm-32-8h16a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8z"></path>
    </g>
  </switch>
</svg>

</div>
                <div class="side-bar-button__text">Reports</div>
            </span>
        `;
        btn.onclick = () => window.location.href = "https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/student-ui/my-reports"
        signOutBtn.parentNode.insertBefore(btn, signOutBtn);
    };

const modifySidebar = () => {
        const sidebar = document.querySelector(".side-bar");
        if (!sidebar) return;

        const buttons = Array.from(sidebar.querySelectorAll("button"));
        let signOutBtn = null;

        buttons.forEach(b => {
            const t = b.innerText || "";
            if (t.includes("Help Centre")) b.remove();
            if (t.includes("My Calendar")) b.remove();
            if (t.includes("Sign Out")) signOutBtn = b;
        });

        if (!signOutBtn || sidebar.querySelector(".custom-social-btn")) return;

        const btn = document.createElement("button");
        btn.className = "keyboard-focusable-button-wrapper side-bar-button__wrapper custom-social-btn";
        btn.innerHTML = `
            <span class="side-bar-button">
                <div class="side-bar-button__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#ffd700" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6659_3130)"><path d="M10 12C10.1978 12 10.3911 11.9414 10.5556 11.8315C10.72 11.7216 10.8482 11.5654 10.9239 11.3827C10.9996 11.2 11.0194 10.9989 10.9808 10.8049C10.9422 10.6109 10.847 10.4327 10.7071 10.2929C10.5673 10.153 10.3891 10.0578 10.1951 10.0192C10.0011 9.98063 9.80004 10.0004 9.61732 10.0761C9.43459 10.1518 9.27841 10.28 9.16853 10.4444C9.05865 10.6089 9 10.8022 9 11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12ZM15 12C15.1978 12 15.3911 11.9414 15.5556 11.8315C15.72 11.7216 15.8482 11.5654 15.9239 11.3827C15.9996 11.2 16.0194 10.9989 15.9808 10.8049C15.9422 10.6109 15.847 10.4327 15.7071 10.2929C15.5673 10.153 15.3891 10.0578 15.1951 10.0192C15.0011 9.98063 14.8 10.0004 14.6173 10.0761C14.4346 10.1518 14.2784 10.28 14.1685 10.4444C14.0586 10.6089 14 10.8022 14 11C14 11.2652 14.1054 11.5196 14.2929 11.7071C14.4804 11.8946 14.7348 12 15 12ZM10 16C10.1978 16 10.3911 15.9414 10.5556 15.8315C10.72 15.7216 10.8482 15.5654 10.9239 15.3827C10.9996 15.2 11.0194 14.9989 10.9808 14.8049C10.9422 14.6109 10.847 14.4327 10.7071 14.2929C10.5673 14.153 10.3891 14.0578 10.1951 14.0192C10.0011 13.9806 9.80004 14.0004 9.61732 14.0761C9.43459 14.1518 9.27841 14.28 9.16853 14.4444C9.05865 14.6089 9 14.8022 9 15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16ZM15 16C15.1978 16 15.3911 15.9414 15.5556 15.8315C15.72 15.7216 15.8482 15.5654 15.9239 15.3827C15.9996 15.2 16.0194 14.9989 15.9808 14.8049C15.9422 14.6109 15.847 14.4327 15.7071 14.2929C15.5673 14.153 15.3891 14.0578 15.1951 14.0192C15.0011 13.9806 14.8 14.0004 14.6173 14.0761C14.4346 14.1518 14.2784 14.28 14.1685 14.4444C14.0586 14.6089 14 14.8022 14 15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16ZM5 12C5.19778 12 5.39112 11.9414 5.55557 11.8315C5.72002 11.7216 5.84819 11.5654 5.92388 11.3827C5.99957 11.2 6.01937 10.9989 5.98079 10.8049C5.9422 10.6109 5.84696 10.4327 5.70711 10.2929C5.56725 10.153 5.38907 10.0578 5.19509 10.0192C5.00111 9.98063 4.80004 10.0004 4.61732 10.0761C4.43459 10.1518 4.27841 10.28 4.16853 10.4444C4.05865 10.6089 4 10.8022 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2V2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V8H18V17ZM18 6H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V6ZM5 16C5.19778 16 5.39112 15.9414 5.55557 15.8315C5.72002 15.7216 5.84819 15.5654 5.92388 15.3827C5.99957 15.2 6.01937 14.9989 5.98079 14.8049C5.9422 14.6109 5.84696 14.4327 5.70711 14.2929C5.56725 14.153 5.38907 14.0578 5.19509 14.0192C5.00111 13.9806 4.80004 14.0004 4.61732 14.0761C4.43459 14.1518 4.27841 14.28 4.16853 14.4444C4.05865 14.6089 4 14.8022 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16Z" fill="#776E6A"></path></g><defs><clipPath id="clip0_6659_3130"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div class="side-bar-button__text">Calendar</div>
            </span>
        `;
        btn.onclick = () =>  bruh()
        signOutBtn.parentNode.insertBefore(btn, signOutBtn);
    }; // social --> DEPRECATED




    const init = () => {
        colorMode.init();
        pfpManager.init();
        modifySidebar();
        modifySidebar2()
        modifySidebar3()

    };

    const observer = new MutationObserver(() => {
        pfpManager.init();
        modifySidebar();
        modifySidebar2();
        modifySidebar3()
    });




    observer.observe(document.body, { childList: true, subtree: true });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }


    const tooltip = document.createElement("div");
    tooltip.className = "brungle-tooltip";
    tooltip.innerHTML = `
        <div class="brungle-tooltip-title"></div>
        <div class="brungle-tooltip-subtitle"></div>
    `;
    document.body.appendChild(tooltip);

    const titleEl = tooltip.querySelector(".brungle-tooltip-title");
    const subtitleEl = tooltip.querySelector(".brungle-tooltip-subtitle");

    let active = false;

    function showTooltip(title, subtitle) {
        titleEl.textContent = title || "";
        subtitleEl.textContent = subtitle || "";
        tooltip.classList.add("show");
        active = true;
    }
    function hideTooltip() {
        tooltip.classList.remove("show");
        active = false;
    }
    function moveTooltip(e) {
        if (!active) return;
        const offsetX = 80;
        const offsetY = 10;
        let x = e.clientX + offsetX;
        let y = e.clientY + offsetY;
        const rect = tooltip.getBoundingClientRect();
        if (x + rect.width > window.innerWidth - 10) x = e.clientX - rect.width - offsetX;
        if (y + rect.height > window.innerHeight - 10) y = e.clientY - rect.height - offsetY;
        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";
    }





function attachTooltip(selector, title, subtitle) {
    if (selector === ".arbor-logo") {
        arborUltraYay();
    }

    document.addEventListener("mouseover", (e) => {
        const el = e.target.closest(selector);
        if (!el) return;

        showTooltip(title, subtitle);
        const titleEl = document.querySelector(".tooltip-title");
        if (titleEl && /<\/?[a-z][\s\S]*>/i.test(title)) {
            titleEl.innerHTML = title;
        }
    });

    document.addEventListener("mousemove", (e) => {
        const el = e.target.closest(selector);
        if (!el) return;
        moveTooltip(e);
    });

    document.addEventListener("mouseout", (e) => {
        const el = e.target.closest(selector);
        if (!el) return;
        hideTooltip();
    });
}

function attachDynamicTooltip(selector, getTitle, getSubtitle) {
    document.addEventListener("mouseover", (e) => {
        const el = e.target.closest(selector);
        if (!el) return;

        const title = getTitle(el);
        showTooltip(title, getSubtitle(el));
        const titleEl = document.querySelector(".tooltip-title");
        if (titleEl && /<\/?[a-z][\s\S]*>/i.test(title)) {
            titleEl.innerHTML = title;
        }
    });

    document.addEventListener("mousemove", (e) => {
        const el = e.target.closest(selector);
        if (!el) return;
        moveTooltip(e);
    });

    document.addEventListener("mouseout", (e) => {
        const el = e.target.closest(selector);
        if (!el) return;
        hideTooltip();
    });
}

attachTooltip(".custom-reports-btn", "Reports", "Check Academic Grades / Reports");
attachTooltip(".custom-calendar-btn", "Calendar", "Check the Timetable / Google Calendar");
attachTooltip(".custom-home-btn", "Home", "Quick Dashboard");
attachTooltip(".custom-pfp-btn", "Pages", "Arbor's own `Social Media`!");
attachTooltip(".custom-games-btn", "Games", "Go to the Gaming Hub!");
attachTooltip(".custom-settings-btn", "Settings", "General & Account Personalization");

attachTooltip(".ap-title", "AP History", "Only for AP's garnered after you downloaded Arbor 𝖀𝓛𝓣ℛ𝓐");

attachTooltip(".misCal1-upload-btn", "Exam timetable", "Upload a PDF or PNG of ur exam timetable and information will be displayed in the calendar event");
attachTooltip(".misCal1-note-btn", "Notes", "Add / Edit notes for special events");

attachTooltip(".info-panel-title", "User Details", "View / Change your Username or Password!");
attachTooltip(".gc-lock-btn", "Unlock/Lock", "Unlock or Lock to change input");
attachTooltip(".x-form-field", "Google Classroom Link", "");
attachTooltip(
    ".arbor-logo",
     // "Arbor 𝕸𝓐א v1.5.5",
    `Arbor 𝖀𝓛𝓣ℛ𝓐 [vALPHA.${version_no}]`,
    "A Better Arbor by Brune"
    );




    attachDynamicTooltip(".mis-htmlpanel-measure-value", (el) => (el.textContent || "").trim(), () => "");
    attachDynamicTooltip("#aw-score-card", (el) => {
        const valueEl = el.querySelector(".aw-score-num");
        return valueEl ? (valueEl.textContent || "").trim() : "";
    }, () => "Attendance");

    attachDynamicTooltip(".calendar-widget-item", (el) => {
        const title = el.querySelector(".calendar-widget-item-title")?.textContent?.trim() || "Lesson";
        const location = el.querySelector(".calendar-widget-item-location")?.textContent?.trim() || "";
        return location ? `${title} • ${location}` : title;
    }, (el) => el.querySelector(".calendar-widget-item-date")?.textContent?.trim() || "");




















function bruh() {
    window.location.href="https://sir-henry-floyd-grammar-school.uk.arbor.education/?/my-mis-ui/calendar/"
}


function makeBold() {

    document.execCommand('bold', false, null);
}




};



// twt mods
function twitter() {
    const style = document.createElement("style");
    style.textContent = `
    @keyframes glowPulse {
        0% { filter: drop-shadow(0 0 4px #E9C63867); }
        50% { filter: drop-shadow(0 0 10px #E9C63867); }
        100% { filter: drop-shadow(0 0 4px #E9C63867); }
    }

    .r-1ye8kvj {
    max-width: 1000px !important;
    min-width: 400px !important;
}

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .brune-name-wrap {
        display:flex;
        align-items:center;
        gap:0.45vh;
    }
    .brune-check {
        width:18px;
        height:18px;
        animation: glowPulse 1.8s infinite ease-in-out;
        filter: blur(0.15px);
        transition: transform 0.3s ease;
    }
    .brune-check:hover {
        animation: spin 0.9s linear infinite, glowPulse 1.8s infinite ease-in-out;
    }
    `;
    document.head.appendChild(style);

    const checkSVG = `
    <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style="
    margin: 0;
"><g><linearGradient gradientUnits="userSpaceOnUse" id="0-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stop-color="#f4e72a"></stop><stop offset=".539" stop-color="#cd8105"></stop><stop offset=".68" stop-color="#cb7b00"></stop><stop offset="1" stop-color="#f4ec26"></stop><stop offset="1" stop-color="#f4e72a"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="0-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stop-color="#f9e87f"></stop><stop offset=".406" stop-color="#e2b719"></stop><stop offset=".989" stop-color="#e2b719"></stop></linearGradient><g clip-rule="evenodd" fill-rule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#0-a)"></path><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#0-b)"></path><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path></g></g></svg>
    `;

    const replacementName = `
    <div class="brune-name-wrap">
        <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3">Brune</span>
        ${checkSVG}
    </div>
    `;

    function apply() {
        document.querySelectorAll('a[href="/i/premium_sign_up"]').forEach(e => e.remove());

        document.querySelectorAll('span').forEach(span => {
            if (span.textContent === "@BruneY55753") {
                span.textContent = "@BruneOfficial";
            }
        });

        document.querySelectorAll('div[dir="ltr"]').forEach(el => {
            if (el.dataset.bruneDone) return;
            if (el.textContent.trim() === "Brune") {
                el.innerHTML = replacementName;
                el.dataset.bruneDone = "1";
            }
        });
    }

    apply();
    new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
};




// REPORT HANDLER
function reportHandler() {
  const STORAGE_KEY = "arbor_uploaded_report_image";

  function waitForUI() {
    const downloadBtn = document.querySelector(".arbor-btn.arbor-btn-green");
    if (!downloadBtn) {
      requestAnimationFrame(waitForUI);
      return;
    }

    if (document.getElementById("upload-report-btn")) return;

    const uploadBtn = downloadBtn.cloneNode(true);
    uploadBtn.id = "upload-report-btn";
    uploadBtn.style.filter = "hue-rotate(200deg) brightness(1.1)";
    uploadBtn.querySelector(".btn-label").textContent = "Upload Report";
    uploadBtn.querySelector(".arbor-icon").className = "arbor-icon arbor-icon-upload";

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png";
    input.style.display = "none";

    uploadBtn.onclick = () => {
      const proceed = confirm(
        "PDFs cannot be viewed here.\n\n" +
        "1. Open your PDF from your Downloads folder\n" +
        "2. Screenshot your report\n" +
        "3. Rename the screenshot to:\n\n" +
        "GradesMain.png\n\n" +
        "Press OK to upload the image.\n" +
        "Press Cancel to abort or to do set it up."
      );

      if (!proceed) return;
      input.click();
    };

    input.onchange = () => {
      const file = input.files[0];
      if (!file) return;

      if (file.name !== "GradesMain.png") {
        alert("File must be named exactly: GradesMain.png");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem(STORAGE_KEY, reader.result);
        renderViewer();
      };
      reader.readAsDataURL(file);
    };

    downloadBtn.parentElement.appendChild(uploadBtn);
    downloadBtn.parentElement.appendChild(input);

    renderViewer();
  }

  function renderViewer() {
    const container = document.querySelector(".slideover-content");
    if (!container) return;

    let viewer = document.getElementById("uploaded-report-viewer");
    if (!viewer) {
      viewer = document.createElement("div");
      viewer.id = "uploaded-report-viewer";
      viewer.style.marginTop = "16px";
      viewer.style.width = "100%";
      viewer.style.border = "1px solid #d0d0d0";
      viewer.style.borderRadius = "6px";
      viewer.style.overflow = "hidden";
      container.appendChild(viewer);
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      viewer.innerHTML = "PDFs cannot be viewed here.\n\n" +
        "1. Open your PDF from your Downloads folder\n" +
        "2. Screenshot your report\n" +
        "3. Rename the screenshot to:\n\n" +
        "GradesMain.png\n\n" +
        "Press OK to upload the image.\n" +
        "Press Cancel to abort or to do set it up.";
      return;
    }

    viewer.innerHTML = `<img src="${stored}" style="width:100%;height:auto;display:block;">`;
  }

let a = true;

const monitor = setInterval(() => {
    if (a) {
        waitForUI();
    } else {

        clearInterval(monitor);
    }
}, 1500);

};




// defunct: arbor gc
function arborGC() {
    'use strict';
    const PREFIX = "arbor_gc_link_";

  function subjectIdFromOverview() {
    const m = location.href.match(/overview\/id\/(\d+)/);
    return m ? m[1] : null;
  }

  function injectOverviewRow() {
    const subjectId = subjectIdFromOverview();
    if (!subjectId) return;
    if (document.querySelector(".gc-row")) return;

    const labels = [...document.querySelectorAll(".x-form-item-label-text")];
    const lastLesson = labels.find(l => l.textContent.trim() === "Last lesson");
    if (!lastLesson) return;

    const anchor = lastLesson.closest(".mis-property-row");
    if (!anchor) return;

    const key = PREFIX + subjectId;

    const row = document.createElement("div");
    row.className =
      "x-field mis-property-row x-form-item x-form-item-property-row x-column x-field-property-row x-column-form-item gc-row";
    row.style.cssText =
      "margin:0;border-width:0 0 1px;padding:14px 0;display:flex;align-items:center;gap:12px;cursor:pointer";

    row.innerHTML = `
      <label class="x-form-item-label x-form-item-label-property-row x-form-item-label-right x-unselectable"
        style="flex:1;padding-right:20px">
        <span class="x-form-item-label-inner x-form-item-label-inner-property-row" style="width:100%">
          <span class="x-form-item-label-text">Google Classroom</span>
        </span>
      </label>

      <div class="x-form-item-body x-form-item-body-property-row"
        style="flex:1;display:flex;align-items:center;gap:8px">
        <input
          type="text"
          class="x-form-field x-form-text"
          placeholder="Paste Classroom link"
          style="flex:1;padding:8px 10px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff"
        />
        <button
          class="gc-lock-btn"
          style="display:none;background:none;border:none;font-size:16px;cursor:pointer;color:#fff"
        >🔒</button>
      </div>
    `;

    anchor.after(row);

    const input = row.querySelector("input");
    const btn = row.querySelector(".gc-lock-btn");

    function lock(v) {
      input.value = v;
      input.readOnly = true;
      btn.style.display = "inline";
      localStorage.setItem(key, v);
    }

    function unlock() {
      input.readOnly = false;
      btn.textContent = "🔓";
      localStorage.removeItem(key);
    }

    const saved = localStorage.getItem(key);
    if (saved) lock(saved);

    input.addEventListener("keydown", e => {
      if (e.key === "Enter" && !input.readOnly && input.value.trim()) {
        lock(input.value.trim());
        e.preventDefault();
      }
    });

    row.addEventListener("click", () => {
      if (input.readOnly && localStorage.getItem(key)) {
        window.open(localStorage.getItem(key), "_blank");
      }
    });

    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (input.readOnly) unlock();
      else if (input.value.trim()) lock(input.value.trim());
    });
  }

  function injectDashboardButtons() {
    if (!location.href.includes("/students/home-ui/dashboard")) return;

    const entries = Object.entries(localStorage)
      .filter(([k, v]) => k.startsWith(PREFIX) && v);

    if (!entries.length) return;

    document.querySelectorAll(".mis-property-row").forEach(row => {
      if (row.querySelector(".variable-classroom-btn")) return;

      const btn = document.createElement("button");
      btn.className = "variable-classroom-btn";
      btn.textContent = "Classroom";
      btn.style.cssText =
        "margin-right:10px;padding:4px 8px;font-size:12px;border-radius:4px;border:none;background:#5865f2;color:#fff;cursor:pointer";

      btn.addEventListener("click", e => {
        e.stopPropagation();
        window.open(entries[0][1], "_blank");
      });

      const label = row.querySelector(".x-form-item-label");
      if (label) label.prepend(btn);
    });
  }

  const obs = new MutationObserver(() => {
    injectOverviewRow();
    injectDashboardButtons();
  });

  obs.observe(document.body, { childList: true, subtree: true });

  injectOverviewRow();
  injectDashboardButtons();
    console.log("Script 3 loaded");
}


//G calendar
function gCalendar() {
    'use strict';


    if (!/(^|\.)sir-henry-floyd-grammar-school\.uk.arbor.education$/.test(location.hostname)) return;

    const CALENDAR_ICS =
        'https://calendar.google.com/calendar/ical/' +
        'sirhenryfloyd.co.uk_sr9lu5jpq68g7410a7hf5im28c%40group.calendar.google.com' +
        '/public/basic.ics';

    const CHECK_INTERVAL = 500;


    let googleEvents = [];
    let lastTimetableSignature = '';
    let calendarLoaded = false;


    const style = document.createElement('style');
    style.textContent = `


        .gc-arbor-event {
            display: block !important;
            position: relative !important;

            width: calc(100% - 10px) !important;

            box-sizing: border-box !important;
            padding-bottom: 4px !important;




            transition:
                transform 0.15s cubic-bezier(.2,.8,.2,1),
                box-shadow 0.15s cubic-bezier(.2,.8,.2,1) !important;

            z-index: 100 !important;
        }

        .gc-arbor-event:hover {
            transform: translateY(-1px) !important;
            background: #ecead1 !important;
        }


.gc-arbor-event-title {
    font-weight: 700 !important;
    font-size: 13px !important;
    margin: 0 !important;
    padding: 2px 4px 2px 4px !important;
    word-break: break-word !important;
    overflow: hidden;
    opacity: 1;
    min-height: 30%;
    width: 100%;
    display: flex !important;
    justify-content: left;
    align-items: center;
    color: #fbf9e0 !important;
    background-color: #a8a421 !important;
}


        /*
         * Time
         */
.gc-arbor-event-time {
    display: block !important;
    margin-top: 4px !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    background: #ecead1 !important;
    height: 100%;
    margin: 0 !important;
    padding: 4px !important;
    color: #4c6941 !important;
}

        /*
         * Location
         */
        .gc-arbor-event-location {
            display: block !important;

            margin-top: 3px !important;

            font-size: 10px !important;

            color: #595350 !important;
            opacity: 0.65 !important;

            word-break: break-word !important;
        }

        /*
         * Description
         */
.gc-arbor-event-description {
    display: block !important;
    margin-top: 5px !important;
    font-size: 10px !important;
    color: #446338 !important;
    background: #ecead1 !important;
    margin: 0 !important;
    padding: 4px !important;
    padding-left: 4px !important;
    white-space: pre-line !important;
    word-break: break-word !important;
}

        /*
         * The row containing our events.
         */
        .gc-arbor-calendar-row {
            position: relative !important;
        }

        /*
         * Cell containing Google Calendar events.
         */
        .gc-arbor-calendar-cell {
            vertical-align: top !important;

            padding: 4px !important;


            box-sizing: border-box !important;

        }

        /*
         * Small label above the events.
         */


.xqvv {
    width: 67.5% !important;
    margin-left: 0%;
    background: #ecead1 !important;
    min-height: 40px;
    margin-left: 16.25% !important;
    margin-right: 16.25% !important;
    border-radius: 6px !important;
    border-color: #655b27 !important;
    transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1) !important;
    margin-bottom: 6px !important;
}
.xqvv:hover {
scale: 1.05 !important;
border-color: #ab9401 !important;
}

.gc-arbor-calendar-label {
    color: #ffffff !important;
    padding: 6.5px 5px 5px 5px !important;

    display: flex !important;
    justify-content: center !important;
    align-items: center !important;

    font-size: 12px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;

    overflow: visible !important;

    cursor: default;
}


.gc-arbor-calendar-label .calendar-icon {
    display: inline-block;
    margin-right: 4px;

    transition:
        transform 300ms cubic-bezier(.16, 1, .3, 1),
        filter 300ms ease;

    transform-origin: center bottom;
}


.gc-arbor-calendar-label .wave-letter {
    display: inline-block;

    transform:
        translateY(0)
        scale(1)
        rotate(0deg);

    transform-origin: center bottom;

    transition:
        transform 120ms cubic-bezier(.16, 1, .3, 1);

    will-change: transform;
}

        /*
         * Loading status.
         */
        .gc-status {
            position: fixed !important;
    right: 15px !important;
    bottom: 15px !important;
    z-index: 999999 !important;
    padding: 8px 11px !important;
    color: #eec801 !important;
    opacity: .92 !important;
    border-radius: 12px !important;
    background: linear-gradient(to right, rgba(47, 41, 20, 0.5), rgba(8, 8, 8, 0.5)) !important;
    backdrop-filter: blur(15px) !important;
    -webkit-backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45) !important;
        }

        /*
         * Make sure our table row doesn't inherit
         * weird Arbor event positioning.
         */
        tr.gc-arbor-calendar-row td {
            height: auto !important;
            min-height: 0 !important;
        }
    `;

    document.head.appendChild(style);

    /****************************************************************
     * STATUS
     ****************************************************************/

    function status(message, timeout = 2500) {

        let el = document.querySelector('.gc-status');

        if (!el) {
            el = document.createElement('div');
            el.className = 'gc-status';
            document.body.appendChild(el);
        }

        el.textContent = message;

        if (timeout) {
            setTimeout(() => {
                if (el && el.textContent === message) {
                    el.remove();
                }
            }, timeout);
        }
    }


    function fetchCalendar() {

        status('Wait, im loading! (GCalendar)', 0);

        GM_xmlhttpRequest({
            method: 'GET',
            url: CALENDAR_ICS,

            onload: function (response) {

                if (
                    response.status < 200 ||
                    response.status >= 300
                ) {
                    console.error(
                        '[Arbor Calendar] Calendar request failed:',
                        response.status
                    );

                    status('❌ Method patched gng. inform Brune');

                    return;
                }

                try {

                    googleEvents =
                        parseICS(response.responseText);

                    calendarLoaded = true;

                    console.log(
                        '',
                        googleEvents.length,
                        'calendar occurrences'
                    );

                    status(
                        `Gosh! loaded ${googleEvents.length} GCalendar events.`
                    );

                    render();

                } catch (error) {

                    console.error(
                        '[Arbor Calendar] ICS parsing error:',
                        error
                    );

                    status('❌ parsing failed. they prob changed stuff');
                }
            },

            onerror: function (error) {

                console.error(
                    '[Arbor Calendar] Network error:',
                    error
                );

                status('❌ network error bud / for u or GCalendar');
            }
        });
    }

    /****************************************************************
     * ICS PARSER
     ****************************************************************/

    function unfoldICS(text) {

        return text
            .replace(/\r\n/g, '\n')
            .replace(/\r/g, '\n')
            .replace(/\n[ \t]/g, '');
    }

    function unescapeICS(value) {

        return value
            .replace(/\\n/gi, '\n')
            .replace(/\\,/g, ',')
            .replace(/\\;/g, ';')
            .replace(/\\\\/g, '\\');
    }

    function parseICS(text) {

        const lines =
            unfoldICS(text).split('\n');

        const events = [];

        let current = null;

        for (const rawLine of lines) {

            const line =
                rawLine.trimEnd();

            if (line === 'BEGIN:VEVENT') {

                current = {};

                continue;
            }

            if (line === 'END:VEVENT') {

                if (
                    current &&
                    current.summary &&
                    current.start
                ) {
                    events.push(current);
                }

                current = null;

                continue;
            }

            if (!current) {
                continue;
            }

            const colon =
                line.indexOf(':');

            if (colon === -1) {
                continue;
            }

            const property =
                line.substring(0, colon);

            const value =
                unescapeICS(
                    line.substring(colon + 1)
                );

            const name =
                property
                    .split(';')[0]
                    .toUpperCase();

            if (name === 'SUMMARY') {

                current.summary = value;

            } else if (name === 'DESCRIPTION') {

                current.description = value;

            } else if (name === 'LOCATION') {

                current.location = value;

            } else if (name === 'UID') {

                current.uid = value;

            } else if (name === 'DTSTART') {

                current.startRaw = value;

                current.startIsDate =
                    property
                        .toUpperCase()
                        .includes('VALUE=DATE');

                current.start =
                    parseICSDate(
                        value,
                        current.startIsDate
                    );

            } else if (name === 'DTEND') {

                current.endRaw = value;

                current.endIsDate =
                    property
                        .toUpperCase()
                        .includes('VALUE=DATE');

                current.end =
                    parseICSDate(
                        value,
                        current.endIsDate
                    );

            } else if (name === 'RRULE') {

                current.rrule = value;

            } else if (name === 'EXDATE') {

                if (!current.exdates) {
                    current.exdates = [];
                }

                current.exdates.push(value);
            }
        }

        return expandRecurringEvents(events);
    }

    /****************************************************************
     * ICS DATE PARSING
     ****************************************************************/

    function parseICSDate(value, isDateOnly) {

        if (!value) {
            return null;
        }

        if (isDateOnly) {

            const year =
                Number(value.substring(0, 4));

            const month =
                Number(value.substring(4, 6)) - 1;

            const day =
                Number(value.substring(6, 8));

            return new Date(
                year,
                month,
                day
            );
        }

        const year =
            Number(value.substring(0, 4));

        const month =
            Number(value.substring(4, 6)) - 1;

        const day =
            Number(value.substring(6, 8));

        const hour =
            Number(value.substring(9, 11));

        const minute =
            Number(value.substring(11, 13));

        const second =
            Number(value.substring(13, 15));

        /*
         * UTC timestamp.
         */
        if (value.endsWith('Z')) {

            return new Date(
                Date.UTC(
                    year,
                    month,
                    day,
                    hour,
                    minute,
                    second
                )
            );
        }

        /*
         * Floating/local timestamp.
         */
        return new Date(
            year,
            month,
            day,
            hour,
            minute,
            second
        );
    }

    /****************************************************************
     * RRULE
     *
     * This expands common Google Calendar recurrence rules.
     ****************************************************************/

    function parseRRULE(ruleText) {

        const result = {
            freq: null,
            interval: 1,
            count: null,
            byday: [],
            until: null
        };

        for (
            const part
            of ruleText.split(';')
        ) {

            const equals =
                part.indexOf('=');

            if (equals === -1) {
                continue;
            }

            const key =
                part.substring(0, equals)
                    .toUpperCase();

            const value =
                part.substring(equals + 1);

            if (key === 'FREQ') {

                result.freq =
                    value.toUpperCase();

            } else if (key === 'INTERVAL') {

                result.interval =
                    Number(value) || 1;

            } else if (key === 'COUNT') {

                result.count =
                    Number(value) || null;

            } else if (key === 'BYDAY') {

                result.byday =
                    value
                        .split(',')
                        .map(x => x.toUpperCase());

            } else if (key === 'UNTIL') {

                result.until =
                    parseICSDate(
                        value,
                        false
                    );
            }
        }

        return result;
    }

    function dayCodeToNumber(code) {

        const map = {
            SU: 0,
            MO: 1,
            TU: 2,
            WE: 3,
            TH: 4,
            FR: 5,
            SA: 6
        };

        return map[code];
    }

    function dateKey(date) {

        return [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, '0'),
            String(date.getDate()).padStart(2, '0')
        ].join('-');
    }

    function isExcluded(event, date) {

        if (!event.exdates) {
            return false;
        }

        const key =
            dateKey(date);

        return event.exdates.some(raw => {

            const parsed =
                parseICSDate(
                    raw.replace(/^[^:]*:/, ''),
                    raw.includes('VALUE=DATE')
                );

            return parsed &&
                dateKey(parsed) === key;
        });
    }

    function expandRecurringEvents(events) {

        const result = [];

        /*
         * Only expand a sensible window around the current date.
         * This keeps the userscript fast.
         */
        const rangeStart = new Date();

        rangeStart.setMonth(
            rangeStart.getMonth() - 12
        );

        const rangeEnd = new Date();

        rangeEnd.setMonth(
            rangeEnd.getMonth() + 24
        );

        for (const event of events) {

            if (!event.rrule) {

                result.push(event);

                continue;
            }

            const rule =
                parseRRULE(event.rrule);

            if (!rule.freq) {

                result.push(event);

                continue;
            }

            const duration =
                event.end && event.start
                    ? event.end.getTime() -
                      event.start.getTime()
                    : 0;

            const originalStart =
                new Date(event.start);

            let occurrences = 0;

            /*
             * DAILY
             */
            if (rule.freq === 'DAILY') {

                const current =
                    new Date(originalStart);

                let safety = 0;

                while (
                    current <= rangeEnd &&
                    safety < 5000
                ) {

                    if (
                        current >= rangeStart &&
                        (!rule.until ||
                            current <= rule.until) &&
                        !isExcluded(event, current)
                    ) {

                        result.push({
                            ...event,
                            start: new Date(current),
                            end: new Date(
                                current.getTime() +
                                duration
                            )
                        });

                        occurrences++;
                    }

                    if (
                        rule.count &&
                        occurrences >= rule.count
                    ) {
                        break;
                    }

                    current.setDate(
                        current.getDate() +
                        rule.interval
                    );

                    safety++;
                }

                continue;
            }

            if (rule.freq === 'WEEKLY') {

                const firstWeek =
                    new Date(originalStart);

                firstWeek.setDate(
                    firstWeek.getDate() -
                    firstWeek.getDay()
                );

                firstWeek.setHours(
                    originalStart.getHours(),
                    originalStart.getMinutes(),
                    originalStart.getSeconds(),
                    0
                );

                const days =
                    rule.byday.length
                        ? rule.byday
                            .map(dayCodeToNumber)
                            .filter(n => n !== undefined)
                        : [originalStart.getDay()];

                let week =
                    new Date(firstWeek);

                let safety = 0;

                while (
                    week <= rangeEnd &&
                    safety < 1000
                ) {

                    for (const dayNumber of days) {

                        const occurrence =
                            new Date(week);

                        occurrence.setDate(
                            week.getDate() +
                            dayNumber
                        );

                        occurrence.setHours(
                            originalStart.getHours(),
                            originalStart.getMinutes(),
                            originalStart.getSeconds(),
                            0
                        );

                        /*
                         * Don't create occurrences
                         * before the original event.
                         */
                        if (
                            occurrence < originalStart
                        ) {
                            continue;
                        }

                        if (
                            occurrence < rangeStart ||
                            occurrence > rangeEnd
                        ) {
                            continue;
                        }

                        if (
                            rule.until &&
                            occurrence > rule.until
                        ) {
                            continue;
                        }

                        if (
                            isExcluded(
                                event,
                                occurrence
                            )
                        ) {
                            continue;
                        }

                        result.push({
                            ...event,
                            start:
                                new Date(occurrence),
                            end:
                                new Date(
                                    occurrence.getTime() +
                                    duration
                                )
                        });

                        occurrences++;

                        if (
                            rule.count &&
                            occurrences >=
                            rule.count
                        ) {
                            break;
                        }
                    }

                    if (
                        rule.count &&
                        occurrences >=
                        rule.count
                    ) {
                        break;
                    }

                    week.setDate(
                        week.getDate() +
                        7 * rule.interval
                    );

                    safety++;
                }

                continue;
            }

            /*
             * MONTHLY
             */
            if (rule.freq === 'MONTHLY') {

                const current =
                    new Date(originalStart);

                let safety = 0;

                while (
                    current <= rangeEnd &&
                    safety < 500
                ) {

                    if (
                        current >= rangeStart &&
                        (!rule.until ||
                            current <= rule.until) &&
                        !isExcluded(
                            event,
                            current
                        )
                    ) {

                        result.push({
                            ...event,
                            start:
                                new Date(current),
                            end:
                                new Date(
                                    current.getTime() +
                                    duration
                                )
                        });

                        occurrences++;
                    }

                    if (
                        rule.count &&
                        occurrences >= rule.count
                    ) {
                        break;
                    }

                    current.setMonth(
                        current.getMonth() +
                        rule.interval
                    );

                    safety++;
                }

                continue;
            }

            /*
             * Unknown recurrence:
             * keep the original event rather
             * than silently deleting it.
             */
            result.push(event);
        }

        return result;
    }

    /****************************************************************
     * ARBOR HELPERS
     ****************************************************************/

    function getArborDays() {

        return [
            ...document.querySelectorAll(
                '.mis-calendar-date[data-date]'
            )
        ];
    }

    function getDayDate(dayElement) {

        const value =
            dayElement.dataset.date;

        if (!value) {
            return null;
        }

        const [
            year,
            month,
            day
        ] =
            value
                .split('-')
                .map(Number);

        return new Date(
            year,
            month - 1,
            day
        );
    }

    /****************************************************************
     * FIND THE CORRECT COLUMN
     ****************************************************************/

    function getColumnIndex(dayElement) {

        const parent =
            dayElement.parentElement;

        if (!parent) {
            return -1;
        }

        return [
            ...parent.children
        ].indexOf(dayElement);
    }

    /****************************************************************
     * CREATE EVENT BLOCK
     ****************************************************************/

    function createCalendarEvent(event) {

        const block =
            document.createElement('div');

        block.className =
            'gc-arbor-event xqvv mis-cal-event mis-cal-4';

        /*
         * Title
         */
        const title =
            document.createElement('div');

        title.className =
            'gc-arbor-event-title';

        title.textContent =
            event.summary;

        block.appendChild(title);

        /*
         * Time
         */
        const time =
            document.createElement('div');

        time.className =
            'gc-arbor-event-time';

        time.textContent =
            formatEventTime(event);

        block.appendChild(time);

        /*
         * Location
         */
        if (event.location) {

            const location =
                document.createElement('div');

            location.className =
                'gc-arbor-event-location';

            location.textContent =
                '📍 ' +
                event.location;

            block.appendChild(location);
        }

        /*
         * Description
         */
        if (event.description) {

            const description =
                document.createElement('div');

            description.className =
                'gc-arbor-event-description';

            description.textContent =
                cleanDescription(
                    event.description
                );

            block.appendChild(description);
        }

        /*
         * Tooltip containing all useful information.
         */
        block.title =
            [
                event.summary,
                formatEventTime(event),
                event.location
                    ? '📍 ' + event.location
                    : '',
                event.description || ''
            ]
            .filter(Boolean)
            .join('\n');

        return block;
    }

    function cleanDescription(description) {

        return description
            .replace(/\r\n/g, '\n')
            .replace(/\r/g, '\n')
            .trim();
    }

    /****************************************************************
     * INSERT EVENT ROW
     *
     * This creates a NEW ROW at the bottom of Arbor's
     * timetable table.
     *
     * Each Google Calendar event is placed into the
     * appropriate day's column.
     ****************************************************************/

    function renderCalendarRow(
        table,
        dayElements
    ) {

        /*
         * Remove an old row first.
         */
        table
            .querySelectorAll(
                '.gc-arbor-calendar-row'
            )
            .forEach(row => row.remove());

        /*
         * Find tbody.
         */
        let tbody =
            table.querySelector('tbody');

        if (!tbody) {
            tbody =
                document.createElement('tbody');

            table.appendChild(tbody);
        }

        /*
         * Create one row for Google Calendar.
         */
        const row =
            document.createElement('tr');

        row.className =
            'gc-arbor-calendar-row';

        /*
         * Determine how many columns the
         * table actually has.
         */
        const headerRow =
            dayElements[0]
                ?.parentElement;

        const columnCount =
            headerRow
                ? headerRow.children.length
                : Math.max(
                    ...dayElements.map(
                        getColumnIndex
                    )
                ) + 1;

        /*
         * Create cells for every table column.
         */
        const cells = [];

        for (
            let i = 0;
            i < columnCount;
            i++
        ) {




            if (i == 0 ) {
            const cell =
                document.createElement('td');

            cell.className =
                'gc-arbor-calendar-cell controls';

            cell.innerHTML = `
            <div id="container-1012-innerCt" data-ref="innerCt" role="presentation" class="x-autocontainer-innerCt" style="display:flex !important;align-items:center !important;padding: 12px 8px 12px 8px !important;justify-content: center;gap:6px !important;">

  <a class="x-btn-default-small x-btn mis-button mis-calendar-navigation-button mis-calendar-navigation-button-prev x-unselectable" hidefocus="on" unselectable="on" role="button" aria-hidden="false" aria-disabled="false" id="mis-button-1015" tabindex="0" data-componentid="mis-button-1015" style="background:rgba(255,255,255,.16) !important;border:1px solid rgba(255,255,255,.28) !important;border-radius:10px !important;box-shadow:0 2px 8px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.35) !important;backdrop-filter:blur(18px) saturate(150%) !important;-webkit-backdrop-filter:blur(18px) saturate(150%) !important;overflow:hidden !important;transition:all 180ms cubic-bezier(.22,1,.36,1) !important;" onclick="nah()">

    <span id="mis-button-1015-btnWrap" data-ref="btnWrap" role="presentation" unselectable="on" class="x-btn-wrap x-btn-wrap-default-small" style="background:transparent !important;">

      <span id="mis-button-1015-btnEl" data-ref="btnEl" role="presentation" unselectable="on" class="x-btn-button x-btn-button-default-small x-btn-text x-btn-button-center" style="background:transparent !important;">

        <span id="mis-button-1015-btnIconEl" data-ref="btnIconEl" role="presentation" unselectable="on" class="x-btn-icon-el x-btn-icon-el-default-small" style="background:transparent !important;">
        </span>

        <span id="mis-button-1015-btnInnerEl" data-ref="btnInnerEl" unselectable="on" class="x-btn-inner x-btn-inner-default-small" style="background:transparent !important;color: #ebc600 !important;font-weight:400 !important;font-size:17px !important;">
          &lt;
        </span>

      </span>
    </span>
  </a>

  <a class="x-btn-default-small x-btn mis-button mis-calendar-today-button x-unselectable x-focus x-btn-focus x-btn-default-small-focus" hidefocus="on" unselectable="on" role="button" aria-hidden="false" aria-disabled="false" id="mis-button-1013" tabindex="0" data-componentid="mis-button-1013" style="background:rgba(255,255,255,.16) !important;border:1px solid rgba(255,255,255,.28) !important;border-radius:10px !important;box-shadow:0 2px 8px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.35) !important;backdrop-filter:blur(18px) saturate(150%) !important;-webkit-backdrop-filter:blur(18px) saturate(150%) !important;overflow:hidden !important;transition:all 180ms cubic-bezier(.22,1,.36,1) !important;" onclick="nah()">

    <span id="mis-button-1013-btnWrap" data-ref="btnWrap" role="presentation" unselectable="on" class="x-btn-wrap x-btn-wrap-default-small" style="background:transparent !important;">

      <span id="mis-button-1013-btnEl" data-ref="btnEl" role="presentation" unselectable="on" class="x-btn-button x-btn-button-default-small x-btn-text x-btn-button-center" style="background:transparent !important;">

        <span id="mis-button-1013-btnIconEl" data-ref="btnIconEl" role="presentation" unselectable="on" class="x-btn-icon-el x-btn-icon-el-default-small" style="background:transparent !important;">
        </span>

        <span id="mis-button-1013-btnInnerEl" data-ref="btnInnerEl" unselectable="on" class="x-btn-inner x-btn-inner-default-small" style="background:transparent !important;color: #f3cc00 !important;font-weight:500 !important;">
          Today
        </span>

      </span>
    </span>
  </a>





  <a class="x-btn-default-small x-btn mis-button mis-calendar-navigation-button mis-calendar-navigation-button-next x-unselectable" hidefocus="on" unselectable="on" role="button" aria-hidden="false" aria-disabled="false" id="mis-button-1016" tabindex="0" data-componentid="mis-button-1016" style="background:rgba(255,255,255,.16) !important;border:1px solid rgba(255,255,255,.28) !important;color: #a8a421 !important;border-radius:10px !important;box-shadow:0 2px 8px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.35) !important;backdrop-filter:blur(18px) saturate(150%) !important;-webkit-backdrop-filter:blur(18px) saturate(150%) !important;overflow:hidden !important;transition:all 180ms cubic-bezier(.22,1,.36,1) !important;" onclick="nah()">

    <span id="mis-button-1016-btnWrap" data-ref="btnWrap" role="presentation" unselectable="on" class="x-btn-wrap x-btn-wrap-default-small" style="background:transparent !important;/* color: red !important; */">

      <span id="mis-button-1016-btnEl" data-ref="btnEl" role="presentation" unselectable="on" class="x-btn-button x-btn-button-default-small x-btn-text x-btn-button-center" style="background:transparent !important;">

        <span id="mis-button-1016-btnIconEl" data-ref="btnIconEl" role="presentation" unselectable="on" class="x-btn-icon-el x-btn-icon-el-default-small" style="background:transparent !important;">
        </span>

        <span id="mis-button-1016-btnInnerEl" data-ref="btnInnerEl" unselectable="on" class="x-btn-inner x-btn-inner-default-small" style="background:transparent !important;color: #edc700 !important;font-weight:400 !important;font-size:17px !important;">
          &gt;
        </span>

      </span>
    </span>
  </a>

</div>
            `
cell.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      organiseMisCal1()
        setTimeout(() => {

            const scrollToCalendar = () => {
                const target = document.querySelector('.gc-arbor-calendar-cell');

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    return true;
                }

                return false;
            };

   
            if (scrollToCalendar()) return;

            const observer = new MutationObserver(() => {
                if (scrollToCalendar()) {
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

        }, 1000);

    });
});
            cells.push(cell);

            row.appendChild(cell);
            }
            const cell =
                document.createElement('td');

            cell.className =
                'gc-arbor-calendar-cell';

            cells.push(cell);

            row.appendChild(cell);
        }

   
        for (const dayElement of dayElements) {

            const columnIndex =
                getColumnIndex(dayElement);

            if (
                columnIndex < 0 ||
                !cells[columnIndex]
            ) {
                continue;
            }

            const dayDate =
                getDayDate(dayElement);

            if (!dayDate) {
                continue;
            }

          
            const dayEvents =
                googleEvents.filter(
                    event =>
                        sameDate(
                            event.start,
                            dayDate
                        )
                );

            if (!dayEvents.length) {
                continue;
            }

      
            const label =
                document.createElement('div');

            label.className =
                'gc-arbor-calendar-label';

            label.innerHTML = `
            <span class="calendar-icon">
            <img alt="" src="data:image/png;base64,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" style="
    width: 10px;
    height: 10px;
    overflow: hidden;
    margin: 0;
    transform: translate(0px, 1px);
    padding: 0;
">


            </span>
    <span class="calendar-text">Calendar</span>
            `

            cells[columnIndex]
                .appendChild(label);

            /*
             * Stack all events vertically.
             */
            for (const event of dayEvents) {

                const block =
                    createCalendarEvent(event);

                cells[columnIndex]
                    .appendChild(block);
            }
        }

        /*
         * Only add the row if at least one
         * calendar event was actually placed.
         */
        if (
            row.querySelector(
                '.gc-arbor-event'
            )
        ) {

            tbody.appendChild(row);
        }
    }

    /****************************************************************
     * GROUP DAYS BY TABLE
     ****************************************************************/

    function groupDaysByTable(days) {

        const groups =
            new Map();

        for (const day of days) {

            const table =
                day.closest('table');

            if (!table) {
                continue;
            }

            if (!groups.has(table)) {
                groups.set(table, []);
            }

            groups
                .get(table)
                .push(day);
        }

        return groups;
    }

    /****************************************************************
     * DATE HELPERS
     ****************************************************************/

    function sameDate(a, b) {

        return (
            a.getFullYear() ===
                b.getFullYear() &&

            a.getMonth() ===
                b.getMonth() &&

            a.getDate() ===
                b.getDate()
        );
    }

    /****************************************************************
     * FORMAT TIME
     ****************************************************************/

    function formatTime(date) {

        if (!date) {
            return '';
        }

        return date.toLocaleTimeString(
            'en-GB',
            {
                hour: '2-digit',
                minute: '2-digit'
            }
        );
    }

    function formatEventTime(event) {

        if (event.startIsDate) {
            return 'All day';
        }

        if (!event.end) {
            return formatTime(event.start);
        }

        return (
            formatTime(event.start) +
            ' – ' +
            formatTime(event.end)
        );
    }

    /****************************************************************
     * RENDER
     ****************************************************************/
    function nah() {
     alert("ALO")
     }
    function render() {

        if (!calendarLoaded) {
            return;
        }

        const days =
            getArborDays();

        if (!days.length) {



            return;
        }

        /*
         * Group all visible Arbor dates by table.
         */
        const groups =
            groupDaysByTable(days);

        /*
         * Create one Google Calendar row
         * at the bottom of each timetable.
         */
        for (
            const [table, tableDays]
            of groups
        ) {

            renderCalendarRow(
                table,
                tableDays
            );
        }


    }

    /****************************************************************
     * DETECT ARBOR CHANGES
     ****************************************************************/
(() => {
    'use strict';

    const LABEL_SELECTOR = '.gc-arbor-calendar-label';
    const TEXT_SELECTOR = '.calendar-text';

    const activeLabels = new Set();

    function setupCalendarWave(label) {

        if (!label || activeLabels.has(label)) return;

        const text = label.querySelector(TEXT_SELECTOR);

        if (!text) return;

        activeLabels.add(label);

        // Prevent the script from wrapping the text again
        if (text.dataset.waveReady === 'true') return;

        text.dataset.waveReady = 'true';

        // Turn Calendar into individual letters
        const characters = [...text.textContent];

        text.textContent = '';

        characters.forEach(char => {

            const letter = document.createElement('span');

            letter.className = 'wave-letter';

            letter.textContent = char === ' '
                ? '\u00A0'
                : char;

            text.appendChild(letter);
        });

        // Store letters directly on the label
        label._waveLetters = [
            ...text.querySelectorAll('.wave-letter')
        ];

        label._mouseX = -9999;
        label._mouseY = -9999;

        // Mouse movement
        label.addEventListener('mousemove', event => {

            label._mouseX = event.clientX;
            label._mouseY = event.clientY;

        });

        // Reset when leaving
        label.addEventListener('mouseleave', () => {

            label._mouseX = -9999;
            label._mouseY = -9999;

        });
    }


    /*
     * Find ALL calendar labels currently on the page
     */
    function setupAllLabels() {

        document
            .querySelectorAll(LABEL_SELECTOR)
            .forEach(setupCalendarWave);

    }


    /*
     * One animation loop for ALL calendar labels.
     *
     * This is much better than creating a requestAnimationFrame
     * loop for every individual calendar.
     */
    function animate() {

        activeLabels.forEach(label => {

            // Remove labels that no longer exist
            if (!document.contains(label)) {
                activeLabels.delete(label);
                return;
            }

            const letters = label._waveLetters;

            if (!letters) return;

            const mouseX = label._mouseX;
            const mouseY = label._mouseY;

            letters.forEach((letter, index) => {

                const rect = letter.getBoundingClientRect();

                const centerX =
                    rect.left + rect.width / 2;

                const centerY =
                    rect.top + rect.height / 2;


                // Distance from mouse to letter
                const distance = Math.hypot(
                    mouseX - centerX,
                    mouseY - centerY
                );


                /*
                 * How far the wave reaches.
                 */
                const radius = 55;


                let strength =
                    1 - distance / radius;


                // Clamp between 0 and 1
                strength = Math.max(
                    0,
                    Math.min(1, strength)
                );


                /*
                 * Smooth the wave.
                 *
                 * This gives a much softer falloff
                 * than a simple linear calculation.
                 */
                strength =
                    strength *
                    strength *
                    (3 - 2 * strength);


                /*
                 * SCALE
                 *
                 * Normal = 1
                 * Maximum = 1.55
                 */
                const scale =
                    1 + strength * 0.55;


                /*
                 * LIFT
                 *
                 * Letters rise slightly toward
                 * the cursor.
                 */
                const lift =
                    -strength * 4;


                /*
                 * Slight sideways movement.
                 */
                const spread =
                    strength * 0.6;


                /*
                 * Tiny rotation gives the wave
                 * a more organic feel.
                 */
                const rotation =
                    Math.sin(index * 1.7) *
                    strength *
                    2.5;


                letter.style.transform = `
                    translateY(${lift}px)
                    translateX(${spread}px)
                    scale(${scale})
                    rotate(${rotation}deg)
                `;

            });

        });


        requestAnimationFrame(animate);
    }


    /*
     * Arbor dynamically creates/removes elements,
     * so watch the whole page.
     */
    const observer = new MutationObserver(mutations => {

        for (const mutation of mutations) {

            if (mutation.type !== 'childList') continue;

            mutation.addedNodes.forEach(node => {

                if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                }


                // The added node itself
                if (node.matches?.(LABEL_SELECTOR)) {
                    setupCalendarWave(node);
                }


                // Or labels somewhere inside it
                node
                    .querySelectorAll?.(LABEL_SELECTOR)
                    .forEach(setupCalendarWave);

            });

        }

    });


    /*
     * Start observing as soon as the body exists.
     */
    function start() {

        setupAllLabels();

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        requestAnimationFrame(animate);
    }


    /*
     * Userscripts can execute before the page is
     * completely ready, so don't assume body exists.
     */
    if (document.body) {
        start();
    } else {
        document.addEventListener(
            'DOMContentLoaded',
            start,
            { once: true }
        );
    }

})();
    function getTimetableSignature() {

        return [
            ...document.querySelectorAll(
                '.mis-calendar-date[data-date]'
            )
        ]
            .map(
                el =>
                    el.dataset.date
            )
            .join('|');
    }

    function watchArbor() {

        setInterval(() => {

            const signature =
                getTimetableSignature();

            if (
                signature &&
                signature !==
                    lastTimetableSignature
            ) {

                lastTimetableSignature =
                    signature;

                /*
                 * Give Arbor a moment to finish
                 * constructing the timetable.
                 */
                setTimeout(
                    render,
                    300
                );
            }

        }, CHECK_INTERVAL);
    }

    function start() {

 

        fetchCalendar();

        watchArbor();

        /*
         * Arbor can finish loading its timetable
         * after document-idle.
         */
        setTimeout(
            render,
            1000
        );

        setTimeout(
            render,
            3000
        );

        setTimeout(
            render,
            6000
        );
    }

    start();

}



// maintenance mode stuf
function maintenanceMode() {
    'use strict';

    function applyMaintenanceStyle() {
        const heading = [...document.querySelectorAll('h1')]
            .find(el => el.textContent.trim() === 'Maintenance time!');

        if (!heading || document.querySelector('#gc-maintenance-style')) return;

        const container = heading.closest('.app-inner-container');
        if (!container) return;

        const style = document.createElement('style');
        style.id = 'gc-maintenance-style';

        style.textContent = `
            html,
            body {
                min-height: 100%;
            }

            body {
                background: #C1CBB4 !important;
                overflow-x: hidden;
            }

            .app-inner-container {
                min-height: 100vh !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                position: relative !important;
                overflow: hidden !important;
                background: #C1CBB4 !important;
            }

            .app-inner-container::before,
            .app-inner-container::after {
                content: "";
                position: absolute;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.16;
                filter: blur(2px);
                animation: gc-maintenance-float 9s ease-in-out infinite alternate;
            }

            .app-inner-container::before {
                width: 420px;
                height: 420px;
                top: -180px;
                left: -160px;
                background: #ffffff;
            }

            .app-inner-container::after {
                width: 520px;
                height: 520px;
                right: -220px;
                bottom: -250px;
                background: #ffffff;
                animation-delay: -4s;
            }

            .page-container {
                width: 100% !important;
                max-width: 900px !important;
                position: relative !important;
                z-index: 2 !important;
                animation: gc-maintenance-page 700ms cubic-bezier(.2,.8,.2,1) both;
            }

            .gaming-hub * { overflow: visible !important; }
            .gaming-hub { overflow: visible !important; }

            .column-flex-wrapper {
                min-width: unset !important;
                width: 100% !important;
            }

            .main-content-wrapper {
                background: rgba(255,255,255,.82) !important;
                border: 1px solid rgba(89,83,80,.12) !important;
                border-radius: 22px !important;
                padding: 48px 52px !important;
                box-sizing: border-box !important;
                box-shadow: 0 20px 60px rgba(89,83,80,.12) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                animation: gc-maintenance-card 900ms cubic-bezier(.2,.8,.2,1) both;
            }

            .column-title {
                margin-bottom: 18px !important;
            }

            .column-title__name {
                margin: 0 !important;
                color: #595350 !important;
                font-size: clamp(28px, 4vw, 44px) !important;
                line-height: 1.1 !important;
                font-weight: 800 !important;
                letter-spacing: -0.035em !important;
                animation: gc-maintenance-title 900ms cubic-bezier(.2,.8,.2,1) 150ms both;
            }

            .arbor-simple-text {
                color: #595350 !important;
                font-size: 15px !important;
                line-height: 1.7 !important;
                animation: gc-maintenance-text 900ms cubic-bezier(.2,.8,.2,1) 300ms both;
            }

            .arbor-simple-text p {
                margin: 10px 0 !important;
            }

            .arbor-simple-text a {
                color: #595350 !important;
                font-weight: 700 !important;
                text-decoration: none !important;
                position: relative !important;
                transition: opacity 180ms ease !important;
            }

            .arbor-simple-text a::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -3px;
                height: 2px;
                background: #595350;
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 220ms cubic-bezier(.2,.8,.2,1);
            }

            .arbor-simple-text a:hover {
                opacity: .7 !important;
            }

            .arbor-simple-text a:hover::after {
                transform: scaleX(1);
            }

            @keyframes gc-maintenance-page {
                from {
                    opacity: 0;
                    transform: translateY(18px);
                }

                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes gc-maintenance-card {
                from {
                    opacity: 0;
                    transform: scale(.97);
                }

                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            @keyframes gc-maintenance-title {
                from {
                    opacity: 0;
                    transform: translateY(12px);
                    letter-spacing: .02em;
                }

                to {
                    opacity: 1;
                    transform: translateY(0);
                    letter-spacing: -.035em;
                }
            }

            @keyframes gc-maintenance-text {
                from {
                    opacity: 0;
                    transform: translateY(8px);
                }

                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes gc-maintenance-float {
                from {
                    transform: translate3d(0, 0, 0) scale(1);
                }

                to {
                    transform: translate3d(25px, 20px, 0) scale(1.08);
                }
            }

            @media (max-width: 600px) {
                .page-container {
                    padding: 18px !important;
                    box-sizing: border-box !important;
                }

                .main-content-wrapper {
                    padding: 34px 26px !important;
                    border-radius: 18px !important;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: 1ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 1ms !important;
                }
            }
        `;

        document.head.appendChild(style);
    }

    applyMaintenanceStyle();

    new MutationObserver(applyMaintenanceStyle).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}



// widget system
function widgetSys() {
  'use strict';

  const CONFIG = {
    studentKpiId: 1751,
    // gl1tch_gg check ur student id in the arbor link. Aarul's is 2066 for example. mine is 1751. chane the student kpi id above to urs.

    refreshIntervalMs: 10 * 60 * 1000,

    apHistoryKey: 'aw_ap_history_v1',
    apModeKey: 'aw_ap_mode_v1',   // remembers the last range picked in the AP dropdown
    weeklyBuckets: 6,
    monthlyBuckets: 6,


    attKey: 'aw_att_v1',
    attModeKey: 'aw_att_mode_v1',
    attStartKey: 'aw_att_start_v1',
    attSnoozeKey: 'aw_att_snooze',
    attLookbackDays: 14,
    attPromptEveryMs: 5 * 60 * 1000,

    // Optional: a URL that returns the same JSON as HOLIDAY_JSON below (same-origin or CORS-enabled).
    // Leave '' to just use the built-in list. If the URL loads, it replaces the built-in list.
    holidayUrl: ''
  };

  // =================================================================
  // 0. SCHOOL HOLIDAYS (JSON)
  //    Days inside any range below are never asked about by the popup, and show
  //    greyed-out/blue in the calendar (hover shows the name).
  //    Format: { "from": "YYYY-MM-DD", "to": "YYYY-MM-DD", "name": "...", "type": "holiday|bank|inset" }
  //    (inclusive, weekends inside a range don't matter). Source: Insignis Academy Trust 2026-27.
  //    To add/change a holiday just edit this JSON. Check the dates against your school's calendar!
  // =================================================================
  const HOLIDAY_JSON = `
  {
    "holidays": [
      { "from": "2026-09-01", "to": "2026-09-03", "name": "Inset (training) days", "type": "inset" },

      { "from": "2026-10-19", "to": "2026-10-30", "name": "October half term",    "type": "holiday" },

      { "from": "2026-12-21", "to": "2026-12-24", "name": "Christmas holiday",    "type": "holiday" },
      { "from": "2026-12-25", "to": "2026-12-25", "name": "Christmas Day",        "type": "bank" },
      { "from": "2026-12-28", "to": "2026-12-28", "name": "Boxing Day (bank holiday)", "type": "bank" },
      { "from": "2026-12-29", "to": "2026-12-31", "name": "Christmas holiday",    "type": "holiday" },

      { "from": "2027-01-01", "to": "2027-01-01", "name": "New Year's Day",       "type": "bank" },

      { "from": "2027-02-15", "to": "2027-02-19", "name": "February half term",   "type": "holiday" },

      { "from": "2027-03-26", "to": "2027-03-26", "name": "Good Friday",          "type": "bank" },
      { "from": "2027-03-29", "to": "2027-03-29", "name": "Easter Monday",        "type": "bank" },
      { "from": "2027-03-30", "to": "2027-04-09", "name": "Easter holiday",       "type": "holiday" },

      { "from": "2027-05-03", "to": "2027-05-03", "name": "Early May bank holiday", "type": "bank" },
      { "from": "2027-05-31", "to": "2027-05-31", "name": "Spring bank holiday",  "type": "bank" },
      { "from": "2027-06-01", "to": "2027-06-04", "name": "May half term",        "type": "holiday" },

      { "from": "2027-07-22", "to": "2027-08-29", "name": "Summer holiday",       "type": "holiday" },
      { "from": "2027-08-30", "to": "2027-08-30", "name": "Summer bank holiday",  "type": "bank" },
      { "from": "2027-08-31", "to": "2027-08-31", "name": "Summer holiday",       "type": "holiday" }
    ]
  }`;

  // parsed list: [{ from, to, name, type }]
  let holidays = [];
  function parseHolidays(src) {
    try {
      const obj = typeof src === 'string' ? JSON.parse(src) : src;
      const list = Array.isArray(obj) ? obj : (obj && obj.holidays) || [];
      return list
        .filter((h) => h && /^\d{4}-\d{2}-\d{2}$/.test(h.from) && /^\d{4}-\d{2}-\d{2}$/.test(h.to || h.from))
        .map((h) => ({ from: h.from, to: h.to || h.from, name: h.name || 'School holiday', type: h.type || 'holiday' }));
    } catch (e) {
      console.warn('[Attendance Widget] Bad holiday JSON:', e);
      return [];
    }
  }
  holidays = parseHolidays(HOLIDAY_JSON);

  // YYYY-MM-DD strings compare correctly as plain strings
  function holidayFor(ds) {
    for (let i = 0; i < holidays.length; i++) {
      if (ds >= holidays[i].from && ds <= holidays[i].to) return holidays[i];
    }
    return null;
  }

  // Optional external JSON (CONFIG.holidayUrl). Falls back silently to the built-in list.
  async function loadExternalHolidays() {
    if (!CONFIG.holidayUrl) return;
    try {
      const res = await fetch(CONFIG.holidayUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('status ' + res.status);
      const list = parseHolidays(await res.json());
      if (list.length) {
        holidays = list;
        const root = document.getElementById(ROOT_ID);
        if (root) renderAttendance(root);
        checkPrompt();
      }
    } catch (e) {
      console.warn('[Attendance Widget] Could not load holiday JSON from URL, using built-in list:', e);
    }
  }

  // console helper: setHolidays({holidays:[...]}) or setHolidays('json string')
  window.setHolidays = function (src) {
    const list = parseHolidays(src);
    if (!list.length) return console.warn('No valid holidays found in that JSON.');
    holidays = list;
    const root = document.getElementById(ROOT_ID);
    if (root) renderAttendance(root);
    checkPrompt();
  };

  const STYLE_ID = 'aw-widget-styles';
  const ROOT_ID = 'aw-widget-root';

  // Chart geometry (viewBox units). PAD_X keeps the first/last data point away
  // from the card edge; the line is extended flat out to the edges.
  const CH_W = 340, CH_H = 150, CH_PAD_TOP = 14, CH_PAD_BOTTOM = 4, CH_PAD_X = 16;

  const CSS = `
  /* NOTE: the old fixed "height:31vh" on .ap-wrap was removed. On small screens
     (e.g. a Chromebook at 100% zoom) 31vh was shorter than the card's 300px
     min-height, so the border ring (sized to the wrapper) stopped part-way down
     and appeared to cut through the middle of the card. */
  :root{
    --ap-gold:#ffd700;
    --ap-gold-soft:#ffc94d;
    --ap-amber:#ffb400;
    --ap-text:#f5f3ea;
    --ap-text-dim:#a29c86;
    --ap-bg-0:#0b0a06;
    --ap-bg-1:#141008;
  }

  /* ---- layout: row that never lets the AP widget overlap the left column ---- */
  #${ROOT_ID} .aw-row{
    position:relative;
    display:flex;
    flex-direction:row;
    align-items:stretch;
    gap:14px;
    width:100%;
    overflow:hidden;           /* clip instead of overlapping */
  }
  /* when there isn't room, fade the clipped edge out to the right */
  #${ROOT_ID} .aw-row.is-overflowing{

  }
  #${ROOT_ID} .aw-left{
    flex:1 1 300px;
    min-width:300px;
    display:flex;
    flex-direction:column;
    gap:14px;
  }
  #${ROOT_ID} .ap-wrap{
    flex:1 1 340px;
    min-width:340px;
    max-width:380px;
    max-height: 310px;
    display:flex;
    align-self:stretch;
  }

  /* ---- animated glint border shell ---- */
  .ap-border{
    position:relative;
    flex:1;
    display:flex;
    min-height:300px;
    border-radius:22px;
    padding:1.5px;
    box-shadow:0 0 20px rgba(255,199,0,0.04);
  }

  /* ---- shared cursor glow: border ring + ambient (every card) ----
     Ring strength follows cursor distance: 42.5% right next to a card, fading to
     22.5% far away; only the card under the cursor goes to 100%. */
  .fx-host > .fx-ring{
    --angle:120deg;
    position:absolute !important;
    inset:0 !important;
    z-index:3 !important;
    border-radius:inherit;
    padding:var(--fx-ring-width, 1px);   /* ring thickness */
    pointer-events:none;
    background:conic-gradient(from var(--angle) at 50% 50%,
      rgba(255,215,0,0.48) 0deg,
      rgba(255,180,0,0.04) 55deg,
      transparent 130deg,
      transparent 230deg,
      rgba(255,215,0,0.28) 300deg,
      rgba(255,215,0,0.48) 360deg);
    -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite:xor;
            mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask-composite:exclude;
    opacity:var(--fx-ring-o, var(--fx-ring-rest, 0.225));
    transition:opacity .35s cubic-bezier(.22,1,.36,1) !important;
  }

  .ap-wrap .fx-ring { padding: var(--fx-ring-width, 2px) !important; }
  .fx-host:hover > .fx-ring{ opacity:1; }
  .fx-host > .fx-ambient{
    position:absolute !important;
    inset:0 !important;
    z-index:0 !important;
    border-radius:inherit;
    pointer-events:none;
    mix-blend-mode:screen;
    background:radial-gradient(circle at center, transparent 0%, transparent 100%);
  }

  .ap-card{
    position:relative;
    flex:1;
    display:flex;
    flex-direction:column;
    min-height:300px;
    overflow:hidden;
    border-radius:20.5px;
    padding:0;
    background:linear-gradient(150deg, var(--ap-bg-1), var(--ap-bg-0) 70%);
    backdrop-filter:blur(12px) saturate(140%);
    border:1px solid rgba(255,215,0,0.12);
    box-shadow:0 14px 34px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.03);
    isolation:isolate;
  }
  .ap-card > *{ position:relative; z-index:2; }

  .ap-ambient{
    position:absolute !important;
    inset:0;
    z-index:1 !important;
    pointer-events:none;
    background:radial-gradient(circle at 50% 40%, transparent 0%, transparent 100%);
    mix-blend-mode:screen;
    transition:background .05s linear;
  }

  .ap-title{
    font-size:16px;
    font-weight:600;
    color:#ffd700d9;
    text-shadow:0 2px 8px rgba(255,215,0,0.3);
    letter-spacing:-0.01em;
    margin:0;
    white-space:nowrap;
  }
  .ap-pill{
    position:relative;
    overflow:hidden;
    display:flex;
    align-items:center;
    gap:6px;
    flex-shrink:0;
    white-space:nowrap;
    padding:7px 13px;
    border-radius:999px;
    border:1px solid rgba(255,215,0,0.28);
    background:rgba(255,215,0,0.06);
    color:var(--ap-gold-soft);
    font-size:11.5px;
    font-weight:600;
    cursor:pointer;
    user-select:none;
  }
  .ap-pill span, .ap-pill svg{ position:relative; z-index:1; }
  .ap-pill svg{ width:10px; height:10px; stroke:var(--ap-gold-soft); }
  .ap-glow-disc{
    position:absolute;
    top:50%; left:50%;
    width:130px; height:70px;
    filter:brightness(1.2) contrast(1.2) !important;
    transform:translate(-50%,-50%);
    border-radius:50%;
    pointer-events:none;
    z-index:0;
    background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),
      rgba(255,230,140,1) 0%, rgba(255,200,0,0.6) 32%, transparent 72%);
    opacity:var(--go,0);
    mix-blend-mode:screen;
  }

  .ap-menu{
    position:fixed !important;
    min-width:150px;
    background:rgba(10,8,4,0.98);
    border:1px solid rgba(255,215,0,0.25);
    border-radius:10px;
    padding:4px;
    box-shadow:0 10px 30px rgba(0,0,0,0.55);
    display:none;
    z-index:2147483000 !important;
  }
  .ap-menu.open{ display:block; }
  .ap-menu button{
    display:block;
    width:100%;
    text-align:left;
    padding:7px 10px;
    border-radius:7px;
    border:none;
    background:transparent;
    color:var(--ap-text);
    font-size:12px;
    cursor:pointer;
  }
  .ap-menu button:hover{ background:rgba(255,215,0,0.08); }
  .ap-menu button.active{ color:var(--ap-gold); font-weight:600; }

  .ap-stat{
    display:flex;
    align-items:baseline;
    gap:8px;
    margin:6px 0 2px;
    padding:0 24px;
  }
  .ap-stat-num{
    font-size:40px;
    font-weight:700;
    color:var(--ap-text);
    letter-spacing:-0.02em;
    line-height:1;
    text-shadow:0 0 22px rgba(255,215,0,0.25);
  }
  .ap-stat-label{
    font-size:13px;
    color:var(--ap-text-dim) !important;
    font-weight:500;
  }

  /* ---- chart: fills whatever space is left, no transforms needed ---- */
  .ap-chart-wrap{
    position:relative;
    flex:1 1 auto;
    min-height:130px;
    margin:12px 0 0;
    overflow:visible;
  }
  .ap-chart-wrap svg{
    position:absolute;
    inset:0;
    display:block;
    width:100%;
    height:100%;
    overflow:visible;
    opacity:0.725;
  }
  .ap-chart-wrap svg path{ vector-effect:non-scaling-stroke; }

  /* HTML markers (instead of SVG circles) so they stay round at any size */
  .ap-guide{
    position:absolute; top:0; bottom:0; width:0;
    border-left:1px dashed rgba(255,255,255,0.3);
    opacity:0; pointer-events:none;
  }
  .ap-dot-halo, .ap-dot{
    position:absolute; border-radius:50%;
    transform:translate(-50%,-50%);
    opacity:0; pointer-events:none;
  }
  .ap-dot-halo{ width:14px; height:14px; background:rgba(255,215,0,0.3); }
  .ap-dot{ width:7px; height:7px; background:#ffd700; }

  .ap-tooltip{
    position:absolute;
    transform:translate(-50%, calc(-100% - 14px));
    padding:7px 12px;
    color:var(--ap-text);
    font-size:11.5px;
    white-space:nowrap;
    pointer-events:none;
    opacity:0;
    z-index:5;

    border-radius: 12px;
    background: linear-gradient(to right, rgba(47, 41, 20, 0.35), rgba(8, 8, 8, 0.35)) !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45) !important;

    transition: all 0.15s cubic-bezier(.2,.8,.2,1) !important;
  }
.ap-menu {
   border-radius: 12px;
    background: linear-gradient(to right, rgba(47, 41, 20, 0.35), rgba(8, 8, 8, 0.35)) !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45) !important;
    transition: all 0.15s cubic-bezier(.2,.8,.2,1) !important;
    }
  * {
      transition: all 0.05s cubic-bezier(.2,.8,.2,1) !important;
      }
  .ap-tooltip.visible{ opacity:1; }
  .ap-tooltip b{ color:var(--ap-gold); font-weight:700; }

  /* label bar: normal flow at the bottom of the card, so it can never drift */
  .ap-months{
    flex:0 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:34px;
    padding:0 ${(CH_PAD_X / CH_W * 100).toFixed(3)}%;
    background:#31290ab5;
    backdrop-filter:blur(45px);
    border-top:1px solid rgba(255,215,0,0.1);
  }
  .ap-months span{
    position:relative;
    width:0;
    display:flex;
    justify-content:center;
    white-space:nowrap;
    font-size:10.5px;
    color:var(--ap-text-dim);
    font-weight:500;
  }

  /* ---- root widget container ---- */
  #${ROOT_ID}{
    --aw-gold:#ffd700;
    --aw-green:#3ddc84;
    --aw-green-dim:rgba(61,220,132,0.15);
    --aw-red:#ff6b5b;
    --aw-red-dim:#ff000050;
    --aw-text:#f2f2ee;
    --aw-text-dim:#8a8a85;
    display:flex !important;
    flex-direction:column !important;
    gap:14px !important;
    width:705px;
    min-width:50% !important;
    max-width:65% !important;
    height:min-content !important;
    margin:0 0 10px !important;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif !important;
    box-sizing:border-box !important;
  }
  #${ROOT_ID} *{ box-sizing:border-box; }

  #${ROOT_ID} .aw-card{
    position:relative !important;
    overflow:hidden !important;
    border-radius:16px !important;
    padding:24px 22px 24px !important;
    background:linear-gradient(135deg, rgba(24,24,24,0.85), rgba(8,8,8,0.9)) !important;
    backdrop-filter:blur(12px) saturate(140%) !important;
    border:1px solid rgba(255,215,0,0.12) !important;
    box-shadow:0 14px 34px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.03) !important;
    transition:box-shadow .4s ease !important;
  }
  #${ROOT_ID} .aw-card:hover{
    box-shadow:0 14px 34px rgba(0,0,0,0.4), 0 0 20px rgba(255,215,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.04);
  }
  #${ROOT_ID} .aw-card > *{ position:relative; z-index:1; }
  #${ROOT_ID} .aw-glow-ambient{
    position:absolute !important; inset:-2px; pointer-events:none; z-index:0 !important;
    background:radial-gradient(circle at center, transparent 0%, transparent 100%);
    filter:blur(8px) brightness(1.375) !important; mix-blend-mode:screen;
  }

  #${ROOT_ID} #aw-attendance-card{ flex:auto !important; min-width:300px !important; padding:0px !important; }
  #${ROOT_ID} #aw-score-card{
    min-width:220px !important;
    display:flex !important;
    height:min-content !important;
    flex-direction:column !important;
    justify-content:center !important;
    flex:auto !important;
  }

  #${ROOT_ID} .aw-head{
    position:relative;
    flex:0 0 auto;
    display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;
    padding:17px 24px 13px 24px !important; height:52.5px !important;
    background:linear-gradient(135deg, #312d12, #0f0f0e) !important;
    border-bottom:1px solid rgba(255,215,0,0.15) !important;
  }
  #${ROOT_ID} .aw-title{
    font-size:16px; font-weight:600; letter-spacing:-0.01em; margin:0;
    color:#ffd700d9 !important;
    text-shadow:0 2px 8px rgba(255,215,0,0.3);
  }
  #${ROOT_ID} .aw-month{
    position:relative; overflow:hidden; display:flex; align-items:center; gap:6px;
    padding:6px 12px; border-radius:999px; border:1px solid rgba(255,215,0,0.18);
    background:rgba(255,215,0,0.04); color:var(--aw-gold); font-size:12px; font-weight:500; cursor:pointer;
  }
  #${ROOT_ID} .aw-month span, #${ROOT_ID} .aw-month svg{ position:relative; z-index:1; }
  #${ROOT_ID} .aw-month svg{ width:10px; height:10px; stroke:var(--aw-gold); }

  #${ROOT_ID} .aw-glow-disc{
    position:absolute; top:50%; left:50%; width:76px; height:76px; transform:translate(-50%,-50%);
    border-radius:50%; pointer-events:none; z-index:0;
    filter:brightness(1.675) contrast(1.75);
    background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),
      rgba(255,225,120,0.9) 0%, rgba(255,200,0,0.4) 30%, transparent 70%);
    opacity:var(--go,0); mix-blend-mode:screen;
  }

  #${ROOT_ID} .aw-grid{ display:grid; grid-template-columns:repeat(7,1fr); gap:8px 4px; padding:6px 24px 24px 24px !important; }
  #${ROOT_ID} .aw-daylabel{ font-size:10.5px; color:var(--aw-text-dim); text-align:center; font-weight:500; padding-bottom:2px; }
  #${ROOT_ID} .aw-cell{ width:26px; height:26px; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center; }
  #${ROOT_ID} .aw-cell svg{ width:11px; height:11px; }
  #${ROOT_ID} .aw-present{ background:var(--aw-green-dim); }
  #${ROOT_ID} .aw-present svg{ stroke:var(--aw-green); }
  #${ROOT_ID} .aw-absent{ background:var(--aw-red-dim); }
  #${ROOT_ID} .aw-absent svg{ stroke:var(--aw-red); }
  #${ROOT_ID} .aw-weekend{ background:rgba(255,255,255,0.035); }
  #${ROOT_ID} .aw-weekend svg{ stroke:var(--aw-text-dim); opacity:.55; }

  #${ROOT_ID} .aw-score-num{ font-size:34px !important; font-weight:650 !important; color:#ffd700 !important; letter-spacing:-0.02em !important; line-height:1 !important; }
  #${ROOT_ID} .aw-score-num sup{ font-size:16px; color:var(--aw-text-dim); font-weight:500; top:-0.6em; }
  #${ROOT_ID} .aw-score-label{ font-size:10.5px; color:var(--aw-text-dim) !important; white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;}
  #${ROOT_ID} .aw-compare{ display:flex; align-items:center; gap:8px; margin-top:0px;     overflow: hidden;
    margin: 0px !important;
    text-overflow: ellipsis;}
  #${ROOT_ID} .aw-delta{ display:flex; align-items:center; gap:4px; padding:4px 9px; border-radius:999px; font-size:11.5px; font-weight:600; }
  #${ROOT_ID} .aw-delta.up{ background:var(--aw-green-dim); color:var(--aw-green);     margin: 0px !important;}
  #${ROOT_ID} .aw-delta.down{ background:var(--aw-red-dim); color:var(--aw-red); }
  #${ROOT_ID} .aw-delta svg{ width:9px; height:9px; stroke:currentColor; }
  #${ROOT_ID} .aw-last{ font-size:10px; color:var(--aw-text-dim) !important;     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;}

  #${ROOT_ID} .aw-bar-track{ position:relative; margin-top:16px; height:6px; border-radius:999px; background:rgba(255,255,255,0.06); overflow:hidden; }
  #${ROOT_ID} .aw-bar-fill{ height:100%; border-radius:999px; background:linear-gradient(270deg, #ffd700, #f2c205); opacity:0.725 !important; }
  #${ROOT_ID} .aw-bar-prev{ position:absolute; top:-3px; width:2px; height:12px; background:rgba(255,255,255,0.45); border-radius:1px; }

  #${ROOT_ID} #ap-svg path{ transition:d .25s ease; }

  /* ---- profile picture: subtle 3D tilt toward the cursor, lift + gold glow ----
     --pt-x / --pt-y : tilt (deg)     --pt-l : lift (0-1)
     --pt-g : glow strength (0-1)     --pt-px / --pt-py : cursor position on the picture (%)
     All set from JS (section 10b). */
  .info-panel-picture.aw-pic{
    --pt-x:0deg; --pt-y:0deg; --pt-l:0; --pt-g:0; --pt-px:50%; --pt-py:50%;
    transform:perspective(650px)
              translateY(calc(var(--pt-l) * -5px))
              rotateX(var(--pt-x)) rotateY(var(--pt-y))
              scale(calc(1 + var(--pt-l) * 0.04)) !important;
    transform-style:preserve-3d;
    will-change:transform;
    transition:transform .14s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease !important;
    box-shadow:
      0 calc(var(--pt-l) * 14px) calc(var(--pt-l) * 26px) rgba(0,0,0,calc(var(--pt-l) * 0.45)),
      0 0 calc(6px + var(--pt-g) * 26px) rgba(255,215,0,calc(var(--pt-g) * 0.5)) !important;
  }
  .info-panel-picture.aw-pic::after{
    content:'';
    position:absolute; inset:0;
    border-radius:inherit;
    pointer-events:none;
    z-index:2;
    mix-blend-mode:screen;
    background:radial-gradient(circle at var(--pt-px) var(--pt-py),
      rgba(255,225,130,calc(var(--pt-g) * 0.45)) 0%, rgba(255,200,0,calc(var(--pt-g) * 0.12)) 38%, transparent 70%);
    box-shadow:inset 0 0 0 1.5px rgba(255,215,0,calc(0.12 + var(--pt-g) * 0.5));
  }
  @media (prefers-reduced-motion: reduce){
    .info-panel-picture.aw-pic{ transform:none !important; }
  }
  `;

  // =================================================================
  // 1a. ATTENDANCE + POPUP STYLES (loaded after CSS so these rules win)
  // =================================================================
  const ATT_CSS = `
  /* ---- attendance grid ---- */
  #${ROOT_ID} #aw-grid{ gap:6px 4px !important; padding:6px 24px 8px 24px !important; }
  #${ROOT_ID} .aw-cell{
    width:34px; height:34px; border-radius:50%; margin:0 auto;
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px;
    background:rgba(255,255,255,0.035);
    color:var(--aw-text-dim);
    cursor:pointer; user-select:none; position:relative;
  }
  #${ROOT_ID} .aw-cell .aw-dn{ font-size:11px; font-weight:500; line-height:1; }
  #${ROOT_ID} .aw-cell.has-icon .aw-dn{ font-size:8.5px; opacity:.65; }
  #${ROOT_ID} .aw-cell svg{ width:10px; height:10px; }
  #${ROOT_ID} .aw-cell.aw-empty{ visibility:hidden; pointer-events:none; }
  #${ROOT_ID} .aw-cell.aw-disabled{ cursor:default; opacity:.4; }
  #${ROOT_ID} .aw-cell.aw-weekend{ background:transparent; }
  #${ROOT_ID} .aw-cell.aw-holiday{ background:rgba(110,140,255,0.13); color:#9db2ff; cursor:default; opacity:.75; }
  #${ROOT_ID} .aw-cell.aw-present{ background:var(--aw-green-dim); color:var(--aw-green); }
  #${ROOT_ID} .aw-cell.aw-present svg{ stroke:var(--aw-green); opacity:1; }
  #${ROOT_ID} .aw-cell.aw-absent{ background:var(--aw-red-dim); color:var(--aw-red); }
  #${ROOT_ID} .aw-cell.aw-absent svg{ stroke:var(--aw-red); opacity:1; }
  #${ROOT_ID} .aw-cell.aw-other{ background:rgba(255,180,0,0.15); color:#ffb400; }
  #${ROOT_ID} .aw-cell.aw-other svg{ stroke:#ffb400; opacity:1; }
  #${ROOT_ID} .aw-cell.aw-today{ box-shadow:inset 0 0 0 1px rgba(255,215,0,0.45); }
  #${ROOT_ID} .aw-cell:not(.aw-disabled):not(.aw-empty):hover{ background-color:rgba(255,215,0,0.12); }
  #${ROOT_ID} .aw-cell.aw-holiday:hover{ background-color:rgba(110,140,255,0.13); }
  #${ROOT_ID} .aw-cell.aw-present:not(.aw-disabled):hover{ background-color:rgba(61,220,132,0.26); }
  #${ROOT_ID} .aw-cell.aw-absent:not(.aw-disabled):hover{ background-color:#ff000070; }
  #${ROOT_ID} .aw-cell.aw-other:not(.aw-disabled):hover{ background-color:rgba(255,180,0,0.28); }
  #${ROOT_ID} .aw-editing .aw-cell:not(.aw-disabled):not(.aw-empty){ outline:1px dashed rgba(255,215,0,0.35); outline-offset:1px; }

  #${ROOT_ID} .aw-foot{
    display:flex; align-items:center; justify-content:space-between;
    padding:0 14px 12px 24px; min-height:28px;
  }
  #${ROOT_ID} .aw-sum{ font-size:10.5px; color:var(--aw-text-dim); letter-spacing:.01em; }
  #${ROOT_ID} .aw-pen{
    width:24px; height:24px; padding:0; border:none; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    background:transparent; color:var(--aw-text-dim); opacity:.4; cursor:pointer;
  }
  #${ROOT_ID} .aw-pen svg{ width:12px; height:12px; }
  #${ROOT_ID} .aw-pen:hover{ opacity:1; color:var(--aw-gold); background:rgba(255,215,0,0.08); }
  #${ROOT_ID} .aw-editing .aw-pen{ opacity:1; color:var(--aw-gold); background:rgba(255,215,0,0.14); }

  /* day tooltip (lives on <body>, so the card's overflow can't clip it) */
  .aw-tip{
    position:fixed; z-index:2147483001; pointer-events:none; max-width:240px;
    padding:7px 11px; border-radius:12px;
    font:11.5px/1.35 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color:var(--ap-text);
    background:linear-gradient(to right, rgba(47,41,20,0.55), rgba(8,8,8,0.55));
    backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px);
    border:1px solid rgba(255,255,255,0.08);
    box-shadow:0 10px 30px rgba(0,0,0,0.45);
    opacity:0; transform:translate(-50%, calc(-100% - 8px));
  }
  .aw-tip.visible{ opacity:1; }
  .aw-tip small{ display:block; color:var(--ap-text-dim); font-size:10.5px; }
  .aw-tip b{ font-weight:600; }
  .aw-tip .t-p{ color:#3ddc84; } .aw-tip .t-a{ color:#ff6b5b; } .aw-tip .t-o{ color:#ffb400; } .aw-tip .t-h{ color:#9db2ff; }

  /* day editor popover */
  .aw-editor{ min-width:170px; }
  .aw-ed-title{ font-size:10.5px; color:var(--ap-text-dim); padding:4px 10px 6px; }
  .aw-editor .aw-ed-reason{ display:none; gap:4px; padding:4px 4px 2px; }
  .aw-editor.reasoning .aw-ed-reason{ display:flex; }
  .aw-editor .aw-ed-reason input{
    flex:1; min-width:0; padding:6px 8px; border-radius:7px; border:none; outline:none;
    background:rgba(255,255,255,0.08); color:var(--ap-text); font-size:12px;
  }
  .aw-editor .aw-ed-reason button{ width:auto; padding:6px 9px; color:var(--ap-gold); }

  /* ---- "are you in?" popup ---- */
  #aw-notify{
    position:fixed; right:18px; bottom:18px; z-index:2147483000;
    width:300px; padding:14px 16px 14px; border-radius:16px; border:none;
    font:13px/1.35 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color:#fbf1f1;
    background:rgba(130,26,26,0.38);
    backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);
    box-shadow:0 12px 32px rgba(0,0,0,0.35);
    opacity:0; transform:translateY(14px); pointer-events:none;
    transition:opacity .35s cubic-bezier(.22,1,.36,1), transform .35s cubic-bezier(.22,1,.36,1) !important;
  }
  #aw-notify.show{ opacity:1; transform:none; pointer-events:auto; }
  #aw-notify .aw-n-title{ font-size:14px; font-weight:600; padding-right:18px; }
  #aw-notify .aw-n-sub{ font-size:11.5px; color:rgba(251,241,241,0.62); margin-top:2px; }
  #aw-notify .aw-n-x{
    position:absolute; top:8px; right:10px; width:20px; height:20px; padding:0;
    border:none; background:transparent; color:rgba(251,241,241,0.5);
    font-size:16px; line-height:1; cursor:pointer; border-radius:50%;
  }
  #aw-notify .aw-n-x:hover{ color:#fff; background:rgba(255,255,255,0.1); }
  #aw-notify .aw-n-actions{
    display:flex; align-items:stretch; margin-top:12px;
    border-radius:10px; overflow:hidden;
    background:rgba(255,255,255,0.15);
  }
  #aw-notify .aw-n-actions button{
    flex:1; padding:9px 0; border:none; background:transparent; color:#fbf1f1;
    font:inherit; font-size:12.5px; font-weight:500; cursor:pointer;
    box-shadow:inset 0 -2px 0 transparent;
  }
  #aw-notify .aw-n-actions i{ flex:0 0 1px; align-self:center; height:16px; background:rgba(255,255,255,0.22); }
  #aw-notify .aw-n-actions button.y:hover{ background:rgba(61,220,132,0.2);  color:#3ddc84; box-shadow:inset 0 -2px 0 #3ddc84; }
  #aw-notify .aw-n-actions button.n:hover{ background:rgba(255,107,91,0.2);  color:#ff8a7d; box-shadow:inset 0 -2px 0 #ff6b5b; }
  #aw-notify .aw-n-actions button.o:hover{ background:rgba(255,180,0,0.2);   color:#ffc94d; box-shadow:inset 0 -2px 0 #ffb400; }
  #aw-notify .aw-n-actions button.s:hover{ background:rgba(255,180,0,0.2);   color:#ffc94d; box-shadow:inset 0 -2px 0 #ffb400; }
  #aw-notify .aw-n-actions button.b:hover{ background:rgba(255,255,255,0.1); }
  #aw-notify .aw-n-actions input{
    flex:2.4; min-width:0; padding:9px 12px; border:none; outline:none;
    background:transparent; color:#fff; font:inherit; font-size:12.5px;
  }
  #aw-notify .aw-n-actions input::placeholder{ color:rgba(251,241,241,0.45); }
  @media (prefers-reduced-motion: reduce){ #aw-notify{ transition:none !important; } }
  `;

  // =================================================================
  // 1b. LOADING SPINNER (Arbor's own .loading-spinner — its markup is untouched)
  //     CSS: gold corner vignette, animated "Loading...", staged fade-out.
  //     JS:  tags spinners that were actually visible (so hidden-on-creation ones
  //          never flash) and keeps the per-letter split alive even when Arbor
  //          rewrites the text, which is what used to make it go static.
  //     Tune the pulse speed with --ls-period.
  // =================================================================
  const SPINNER_CSS = `
  :root{ --ls-period:1.2s; }

  /* tag: this spinner has been on screen (animationstart is caught below) */
  .loading-spinner:not(.loading-spinner--hide)::before{
    content:''; position:absolute; width:0; height:0; overflow:hidden; pointer-events:none;
    animation:aw-ls-seen .01s both;
  }
  @keyframes aw-ls-seen{ from{opacity:0} to{opacity:0} }

  /* corner vignette: soft dark edges, faint gold light in the corners */
  .loading-spinner::after{
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(circle at 0% 0%,     rgba(255,215,0,.12), transparent 32%),
      radial-gradient(circle at 100% 0%,   rgba(255,215,0,.07), transparent 32%),
      radial-gradient(circle at 0% 100%,   rgba(255,215,0,.07), transparent 32%),
      radial-gradient(circle at 100% 100%, rgba(255,215,0,.12), transparent 32%),
      radial-gradient(ellipse 120% 105% at 50% 50%, transparent 46%, rgba(10,8,2,.45) 82%, rgba(4,3,0,.8) 100%);
    animation:aw-ls-vignette calc(var(--ls-period) * 2) ease-in-out infinite;
  }
  @keyframes aw-ls-vignette{
    0%,100%{ opacity:.7; scale:1; }
    50%    { opacity:1;  scale:1.03; }
  }

  /* "Loading..." : each letter hops up to 5px in a left-to-right wave */
  .aw-ls-ch{
    display:inline-block;
    white-space:pre;
  }
  /* !important so nothing Arbor sets can freeze the wave while it's visible */
  .loading-spinner:not(.loading-spinner--hide) .aw-ls-ch{
    animation:aw-ls-bounce var(--ls-period) ease-in-out infinite !important;
    animation-delay:calc(var(--i, 0) * 0.09s - var(--ls-period)) !important;
  }
  @keyframes aw-ls-bounce{
    0%, 55%, 100%{ transform:translateY(0); }
    25%          { transform:translateY(-5px); }
  }

  /* ---- exit, staged ----
     1. letters pop up then sink + blur away, left to right (wave continues)
     2. circles dissolve outward
     3. vignette opens
     4. the whole layer fades last
     Overrides Arbor's display:none until the fade has finished. */
  .loading-spinner--hide[data-aw-seen]{
    pointer-events:none;
    animation:aw-ls-out 1.3s cubic-bezier(.4,0,.2,1) forwards;
  }
  @keyframes aw-ls-out{
    0%    { display:block; visibility:visible; opacity:1; }
    55%   { opacity:1; }
    99.9% { display:block; visibility:visible; opacity:0; }
    100%  { display:none;  visibility:hidden;  opacity:0; }
  }
  .loading-spinner--hide[data-aw-seen] .aw-ls-ch{
    animation:aw-ls-ch-out .6s cubic-bezier(.55,0,.8,.3) calc(var(--i, 0) * 0.04s) both !important;
  }
  @keyframes aw-ls-ch-out{
    0%   { opacity:1; transform:translateY(0)     scale(1);    filter:blur(0); }
    30%  { opacity:1; transform:translateY(-7px)  scale(1.08); filter:blur(0); }
    100% { opacity:0; transform:translateY(12px)  scale(.5);   filter:blur(6px); }
  }
  .loading-spinner--hide[data-aw-seen] .loading-spinner__inner{
    animation:aw-ls-inner-out .9s cubic-bezier(.5,0,.2,1) .12s both;
  }
  @keyframes aw-ls-inner-out{
    from{ opacity:1; scale:1;    filter:blur(0); }
    to  { opacity:0; scale:1.6;  filter:blur(12px); }
  }
  .loading-spinner--hide[data-aw-seen]::after{
    animation:aw-ls-vig-out 1s cubic-bezier(.4,0,.2,1) .2s both;
  }
  @keyframes aw-ls-vig-out{
    from{ opacity:1; scale:1; }
    to  { opacity:0; scale:1.25; }
  }

  @media (prefers-reduced-motion: reduce){
    .loading-spinner:not(.loading-spinner--hide) .aw-ls-ch{ animation:none !important; }
    .loading-spinner::after{ animation:none; }
  }
  `;

  // Split "Loading..." into per-letter spans. The old version remembered the text
  // it had split and bailed out if Arbor wrote the same string again, even though
  // that write had already wiped our spans, so the animation went static. Now we
  // check whether the spans are really in the DOM.
  function isSplit(el) {
    if (!el.firstChild) return false;
    for (let n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType !== 1 || !n.classList.contains('aw-ls-ch')) return false;
    }
    return true;
  }

  function splitLoadingText(spinner) {
    const el = spinner.querySelector('.loading-spinner__text');
    if (!el || isSplit(el)) return;
    const text = el.textContent;
    if (!text) return;
    el.setAttribute('aria-label', text);
    const frag = document.createDocumentFragment();
    Array.from(text).forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'aw-ls-ch';
      span.style.setProperty('--i', i);
      span.textContent = ch;
      frag.appendChild(span);
    });
    el.textContent = '';
    el.appendChild(frag);
  }

  function watchSpinner(spinner) {
    splitLoadingText(spinner);
    if (spinner._awObs) return;
    // Watching the whole spinner (not just the text node) also survives Arbor
    // replacing the text element itself. Our own re-split is a no-op next time round.
    spinner._awObs = new MutationObserver(() => splitLoadingText(spinner));
    spinner._awObs.observe(spinner, { childList: true, characterData: true, subtree: true });
  }

  function initLoadingSpinner() {
    const style = document.createElement('style');
    style.id = 'aw-spinner-styles';
    style.textContent = SPINNER_CSS;
    (document.head || document.documentElement).appendChild(style);

    document.addEventListener('animationstart', (e) => {
      if (e.animationName === 'aw-ls-seen' && e.target.setAttribute) {
        e.target.setAttribute('data-aw-seen', '1');
        watchSpinner(e.target);
      }
    }, true);
    document.addEventListener('animationend', (e) => {
      if (e.animationName === 'aw-ls-out' && e.target.removeAttribute) e.target.removeAttribute('data-aw-seen');
    }, true);
  }
  initLoadingSpinner();

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS + ATT_CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  // =================================================================
  // 2. WIDGET MARKUP
  // =================================================================
  const PEN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>';

  const WIDGET_HTML = `
<div class="aw-row" id="aw-row">
  <div class="aw-left">
    <div class="aw-card fx-host" id="aw-attendance-card">
      <div class="fx-ring"></div>
      <div class="aw-glow-ambient" style="background: radial-gradient(circle at 0% 85.0625%, rgba(255, 215, 0, 0) 0%, transparent 80%);"></div>
      <div class="aw-head">
        <h2 class="aw-title">Class attendance</h2>
        <button class="aw-month" type="button" id="aw-pill">
          <div class="aw-glow-disc" style="--gx: 4.849268859166138%; --gy: 71.48049062400892%; --go: 0;"></div>
          <span id="aw-pill-label">Month</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
      <div class="aw-grid" id="aw-grid"></div>
      <div class="aw-foot">
        <div class="aw-sum" id="aw-att-sum"></div>
        <button class="aw-pen" type="button" id="aw-pen" title="Edit attendance" aria-label="Edit attendance">${PEN_ICON}</button>
      </div>
    </div>

    <div class="aw-card fx-host" id="aw-score-card">
      <div class="fx-ring"></div>
      <div class="aw-glow-ambient" style="background: radial-gradient(circle at 0% 0%, rgba(255, 215, 0, 0) 0%, transparent 80%);"></div>
      <div class="aw-score-num" id="aw-score-num">&hellip;<sup>%</sup></div>
      <div style="display:flex; flex-direction:row; gap:5px; justify-content:space-between; width:100%; align-items:center;">
        <div class="aw-score-label" id="aw-score-label">Overall attendance</div>
        <div class="aw-compare" style="margin-top:-4px;">
          <div class="aw-delta up" id="aw-delta" style="margin-left:5px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            <span id="aw-delta-text">&ndash;</span>
          </div>
          <div class="aw-last" id="aw-last-text">Loading&hellip;</div>
        </div>
      </div>
      <div class="aw-bar-track">
        <div class="aw-bar-fill" id="aw-bar-fill" style="width:0%"></div>
        <div class="aw-bar-prev" id="aw-bar-prev" style="left:0%"></div>
      </div>
    </div>
  </div>

  <div class="ap-wrap">
    <div class="ap-border fx-host" id="ap-border">
      <div class="fx-ring"></div>
      <div class="ap-card" id="ap-card">
        <div class="ap-ambient" id="ap-ambient"></div>

        <div class="aw-head">
          <h2 class="ap-title">Achievement points</h2>
          <button class="ap-pill" type="button" id="ap-pill">
            <div class="ap-glow-disc" style="--gx: 1.778206480017289%; --gy: 63.215847673008085%; --go: 0;"></div>
            <span id="ap-pill-label">Month</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>

        <div class="ap-stat">
          <div class="ap-stat-num" id="ap-avg">&hellip;</div>
          <div class="ap-stat-label" id="ap-stat-label">points this term</div>
        </div>

        <div class="ap-chart-wrap" id="ap-chart-wrap">
          <svg id="ap-svg" viewBox="0 0 ${CH_W} ${CH_H}" preserveAspectRatio="none">
            <path id="ap-area" fill="rgba(255, 215, 0, 0.15)"></path>
            <path id="ap-line-glow" stroke="rgba(255, 215, 0, 0.4)" stroke-width="6" fill="none"></path>
            <path id="ap-line" stroke="#ffd700" stroke-width="2" fill="none"></path>
          </svg>
          <div class="ap-guide" id="ap-guide"></div>
          <div class="ap-dot-halo" id="ap-dot-halo"></div>
          <div class="ap-dot" id="ap-dot"></div>
          <div class="ap-tooltip" id="ap-tooltip"></div>
        </div>

        <div class="ap-months" id="ap-months"></div>
      </div>
    </div>
  </div>
</div>
  `;

  // =================================================================
  // 3. AUTH TOKEN DISCOVERY
  // =================================================================
  function findAuthToken() {
    const JWT_RE = /^eyJ[\w-]+\.[\w-]+\./;
    const KEY_HINTS = /token|jwt|auth/i;
    const scan = (storage) => {
      try {
        for (let i = 0; i < storage.length; i++) {
          const key = storage.key(i);
          if (!KEY_HINTS.test(key)) continue;
          const val = storage.getItem(key);
          if (!val) continue;
          if (JWT_RE.test(val)) return val;
          try {
            const parsed = JSON.parse(val);
            if (parsed && typeof parsed === 'object') {
              for (const k of Object.keys(parsed)) {
                if (typeof parsed[k] === 'string' && JWT_RE.test(parsed[k])) return parsed[k];
              }
            }
          } catch (e) { /* not JSON, ignore */ }
        }
      } catch (e) { /* storage inaccessible */ }
      return null;
    };
    return scan(window.localStorage) || scan(window.sessionStorage) || null;
  }

  // =================================================================
  // 4. KPI FETCH + PARSE
  // =================================================================
  async function fetchKpiJson() {
    const url = `/students/student/kpis/id/${CONFIG.studentKpiId}/`;
    const headers = { accept: 'application/json, text/plain, */*' };
    const token = findAuthToken();
    if (token) headers.authorization = 'Bearer ' + token;
    const res = await fetch(url, { method: 'GET', credentials: 'include', cache: 'no-store', headers });
    if (!res.ok) throw new Error('KPI request failed with status ' + res.status);
    return res.json();
  }

  function parseMeasureHtml(html) {
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    const valueEl = wrap.querySelector('.mis-htmlpanel-measure-value');
    const mainValue = valueEl ? parseFloat(valueEl.textContent) : null;
    const bars = Array.from(wrap.querySelectorAll('.mis-htmlpanel-measure-barchart-chart')).map((chart) => {
      const labelEl = chart.querySelector('.mis-htmlpanel-measure-barchart-chart-label');
      const barEl = chart.querySelector('.mis-htmlpanel-measure-barchart-chart-bar-value');
      const label = labelEl ? labelEl.textContent.trim() : '';
      let barPercent = null;
      if (barEl) {
        const title = barEl.getAttribute('title') || barEl.textContent;
        const n = parseFloat(title);
        if (!Number.isNaN(n)) barPercent = n;
      }
      return { label, barPercent };
    });
    return { mainValue, bars };
  }

  function extractPointsFromLabel(text) {
    const m = text && text.match(/(-?\d+)/);
    return m ? parseInt(m[1], 10) : null;
  }

  function extractKpiData(json) {
    const items = (json && json.items) || [];
    const findParsed = (startsWith) => {
      const item = items.find((i) => i.fields && i.fields.title && i.fields.title.value.startsWith(startsWith));
      if (!item) return null;
      return { title: item.fields.title.value, ...parseMeasureHtml(item.fields.html.value) };
    };

    const attendanceRaw = findParsed('Attendance');
    let attendance = null;
    if (attendanceRaw) {
      const yearBar = attendanceRaw.bars.find((b) => /^year$/i.test(b.label.trim()));
      const otherBar = attendanceRaw.bars.find((b) => b !== yearBar);
      attendance = { title: attendanceRaw.title, score: attendanceRaw.mainValue, yearBar, otherBar };
    }

    const achievementRaw = findParsed('Achievement Points');
    let achievement = null;
    if (achievementRaw) {
      const lastTermBar = achievementRaw.bars.find((b) => /last term/i.test(b.label));
      achievement = {
        thisTerm: achievementRaw.mainValue,
        lastTerm: lastTermBar ? extractPointsFromLabel(lastTermBar.label) : null,
      };
    }

    return { attendance, achievement };
  }

  // =================================================================
  // 5. ACHIEVEMENT HISTORY (localStorage)
  // =================================================================
  function loadApLog() {
    try {
      const raw = localStorage.getItem(CONFIG.apHistoryKey);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveApLog(log) {
    try {
      localStorage.setItem(CONFIG.apHistoryKey, JSON.stringify(log));
    } catch (e) { /* non-fatal */ }
  }

  function toDateStr(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function todayKey() { return toDateStr(new Date()); }
  function parseDateStr(s) {
    const p = s.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function addDays(d, n) {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  }

  function recordApSnapshot(total) {
    const log = loadApLog();
    if (total == null) return log;
    const today = todayKey();
    const last = log[log.length - 1];
    if (!last) {
      log.push({ date: today, total });
    } else if (last.date === today) {
      last.total = total;
    } else if (last.total !== total) {
      log.push({ date: today, total });
    }
    saveApLog(log);
    return log;
  }

  function startOfWeek(d) {
    const date = new Date(d);
    const day = (date.getDay() + 6) % 7; // 0 = Monday
    date.setDate(date.getDate() - day);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  const AP_MODES = [
    { id: 'this_month', label: 'Month', granularity: 'daily-month' },
    { id: 'this_week', label: 'week', granularity: 'daily-week' },
    { id: '6w', label: '6 weeks', granularity: 'weekly', count: 6 },
    { id: '3m', label: '3 months', granularity: 'monthly', count: 3 },
    { id: '6m', label: '6 months', granularity: 'monthly', count: 6 },
    { id: '1y', label: 'Year', granularity: 'monthly', count: 12 },
  //     { id: '1y', label: 'All time', granularity: 'monthly', count: 36 }
  ];
  const DEFAULT_AP_MODE = 'this_month';

  function loadApMode() {
    try {
      const saved = localStorage.getItem(CONFIG.apModeKey);
      if (saved && AP_MODES.some((m) => m.id === saved)) return saved;
    } catch (e) { /* storage unavailable */ }
    return DEFAULT_AP_MODE;
  }
  function saveApMode(id) {
    try { localStorage.setItem(CONFIG.apModeKey, id); } catch (e) { /* non-fatal */ }
  }

  function generateBuckets(mode) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (mode.granularity === 'daily-month') {
      const out = [];
      for (let d = new Date(today.getFullYear(), today.getMonth(), 1); d <= today; d.setDate(d.getDate() + 1)) {
        out.push({ dateStr: toDateStr(d), label: String(d.getDate()) });
      }
      return out;
    }

    if (mode.granularity === 'daily-week') {
      const out = [];
      for (let d = startOfWeek(today); d <= today; d.setDate(d.getDate() + 1)) {
        out.push({ dateStr: toDateStr(d), label: d.toLocaleDateString('en-GB', { weekday: 'short' }) });
      }
      return out;
    }

    if (mode.granularity === 'weekly') {
      const out = [];
      const thisWeekStart = startOfWeek(today);
      for (let i = mode.count - 1; i >= 0; i--) {
        const start = new Date(thisWeekStart);
        start.setDate(start.getDate() - i * 7);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        out.push({ dateStr: toDateStr(end), label: start.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) });
      }
      return out;
    }

    const out = [];
    for (let i = mode.count - 1; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const endOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
      out.push({ dateStr: toDateStr(endOfMonth), label: d.toLocaleString('en-GB', { month: 'short' }) });
    }
    return out;
  }

  function buildApSeries(log, currentTotal, modeId) {
    const mode = AP_MODES.find((m) => m.id === modeId) || AP_MODES[0];
    const buckets = generateBuckets(mode);
    const sorted = [...log].sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    const series = buckets.map((b) => {
      let total = null;
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (sorted[i].date <= b.dateStr) { total = sorted[i].total; break; }
      }
      if (total == null) total = sorted.length ? sorted[0].total : (currentTotal != null ? currentTotal : 0);
      return { m: b.label, v: total };
    });

    if (series.length && currentTotal != null) {
      series[series.length - 1].v = currentTotal;
    }
    return series;
  }

  // =================================================================
  // 6. MANUAL ATTENDANCE
  //    Data: localStorage[CONFIG.attKey] = { 'YYYY-MM-DD': { s, n, t } }
  //      s = 'p' present | 'a' absent | 'o' other (n holds the reason)
  //    - click an unmarked weekday  -> marked present
  //    - click a marked day, or any day while the pen is on -> small editor
  //    - hover a day -> tooltip (shows the reason for "other")
  //    - days inside a holiday range (section 0) are skipped by the popup and
  //      shown in blue; you can still edit them if you already marked one.
  // =================================================================
  const CHECK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  const X_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  const Q_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4.5"></path><line x1="12" y1="18.6" x2="12" y2="18.7"></line></svg>';

  const ATT_MODES = [
    { id: 'week', label: 'Week' },
    { id: '2w', label: '2 weeks' },
    { id: 'month', label: 'Month' },
    { id: 'last_month', label: 'Last month' },
    { id: '6w', label: '6 weeks' },
  ];
  const DEFAULT_ATT_MODE = 'month';

  function loadAtt() {
    try {
      const p = JSON.parse(localStorage.getItem(CONFIG.attKey) || '{}');
      return p && typeof p === 'object' && !Array.isArray(p) ? p : {};
    } catch (e) { return {}; }
  }
  function saveAtt(map) {
    try { localStorage.setItem(CONFIG.attKey, JSON.stringify(map)); } catch (e) { /* non-fatal */ }
  }
  function setAtt(dateStr, state, note) {
    const map = loadAtt();
    if (!state) delete map[dateStr];
    else map[dateStr] = { s: state, n: state === 'o' ? (note || '') : '', t: Date.now() };
    saveAtt(map);
  }
  function loadAttMode() {
    try {
      const saved = localStorage.getItem(CONFIG.attModeKey);
      if (saved && ATT_MODES.some((m) => m.id === saved)) return saved;
    } catch (e) { /* storage unavailable */ }
    return DEFAULT_ATT_MODE;
  }
  function saveAttMode(id) {
    try { localStorage.setItem(CONFIG.attModeKey, id); } catch (e) { /* non-fatal */ }
  }

  // Earliest day the popup will ask about. First run: Monday of this week, so a
  // fresh install can still ask about earlier days this week. Change it any time
  // from the console: setAttendanceStart('2026-09-01')
  function getAttStart() {
    try {
      const saved = localStorage.getItem(CONFIG.attStartKey);
      if (saved) return parseDateStr(saved);
      const mon = startOfWeek(new Date());
      localStorage.setItem(CONFIG.attStartKey, toDateStr(mon));
      return mon;
    } catch (e) { return startOfWeek(new Date()); }
  }
  window.setAttendanceStart = function (dateStr) {
    try { localStorage.setItem(CONFIG.attStartKey, dateStr); } catch (e) { /* non-fatal */ }
    checkPrompt();
  };
  window.ExportAttendanceData = function () {
    const data = loadAtt();
    const rows = Object.keys(data).sort().map((d) => ({
      date: d,
      status: { p: 'present', a: 'absent', o: 'other' }[data[d].s] || data[d].s,
      reason: data[d].n || '',
    }));
    console.table(rows);
    return data;
  };

  const fmtLong = (ds) => parseDateStr(ds).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });
  const fmtShortDay = (ds) => parseDateStr(ds).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });

  const attState = { mode: loadAttMode(), editing: false };

  // Which Monday-to-Sunday block to draw, and which dates in it are "in range"
  // (month views leave the days from other months blank).
  function attRange(modeId) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const wk = startOfWeek(today);
    let from, to;
    if (modeId === 'week') { from = wk; to = addDays(wk, 6); }
    else if (modeId === '2w') { from = addDays(wk, -7); to = addDays(wk, 6); }
    else if (modeId === '6w') { from = addDays(wk, -35); to = addDays(wk, 6); }
    else if (modeId === 'last_month') {
      from = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      to = new Date(today.getFullYear(), today.getMonth(), 0);
    } else {
      from = new Date(today.getFullYear(), today.getMonth(), 1);
      to = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    }
    return { from, to, gridStart: startOfWeek(from), gridEnd: addDays(startOfWeek(to), 6) };
  }

  function renderAttendance(root) {
    const grid = root.querySelector('#aw-grid');
    if (!grid) return;
    const att = loadAtt();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = toDateStr(today);
    const r = attRange(attState.mode);
    const frag = document.createDocumentFragment();
    const counts = { p: 0, a: 0, o: 0 };

    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach((d) => {
      const el = document.createElement('div');
      el.className = 'aw-daylabel';
      el.textContent = d;
      frag.appendChild(el);
    });

    for (let d = new Date(r.gridStart); d <= r.gridEnd; d = addDays(d, 1)) {
      const cell = document.createElement('div');
      if (d < r.from || d > r.to) {
        cell.className = 'aw-cell aw-empty';
        frag.appendChild(cell);
        continue;
      }
      const ds = toDateStr(d);
      const rec = att[ds];
      const dow = d.getDay();
      const weekend = dow === 0 || dow === 6;
      const hol = holidayFor(ds);
      let cls = 'aw-cell', icon = '';

      if (rec && rec.s === 'p') { cls += ' aw-present'; icon = CHECK_ICON; counts.p++; }
      else if (rec && rec.s === 'a') { cls += ' aw-absent'; icon = X_ICON; counts.a++; }
      else if (rec && rec.s === 'o') { cls += ' aw-other'; icon = Q_ICON; counts.o++; }
      else if (weekend) cls += ' aw-weekend';
      else if (hol) cls += ' aw-holiday';

      if (d > today || (weekend && !rec) || (hol && !rec)) cls += ' aw-disabled';
      if (ds === todayStr) cls += ' aw-today';
      if (icon) cls += ' has-icon';

      cell.className = cls;
      cell.dataset.date = ds;
      cell.innerHTML = `<span class="aw-dn">${d.getDate()}</span>${icon}`;
      frag.appendChild(cell);
    }

    grid.textContent = '';
    grid.appendChild(frag);

    const bits = [`${counts.p} in`];
    if (counts.a) bits.push(`${counts.a} absent`);
    if (counts.o) bits.push(`${counts.o} other`);
    root.querySelector('#aw-att-sum').textContent = bits.join(' · ');
  }

  function afterAttChange(root) {
    if (root) renderAttendance(root);
    checkPrompt();
  }

  // ---- hover tooltip ----
  let attTip = null;
  function getAttTip() {
    if (attTip && attTip.isConnected) return attTip;
    attTip = document.createElement('div');
    attTip.className = 'aw-tip';
    document.body.appendChild(attTip);
    return attTip;
  }
  function showAttTip(cell) {
    const ds = cell.dataset.date;
    const rec = loadAtt()[ds];
    const hol = holidayFor(ds);
    const tip = getAttTip();
    tip.textContent = '';
    const head = document.createElement('b');
    head.textContent = fmtLong(ds);
    tip.appendChild(head);
    const line = document.createElement('small');
    if (rec && rec.s === 'p') { line.className = 't-p'; line.textContent = 'In school'; }
    else if (rec && rec.s === 'a') { line.className = 't-a'; line.textContent = 'Absent'; }
    else if (rec && rec.s === 'o') { line.className = 't-o'; line.textContent = rec.n ? 'Other: ' + rec.n : 'Other (no reason given)'; }
    else if (hol) { line.className = 't-h'; line.textContent = hol.name; }
    else line.textContent = 'Not marked';
    tip.appendChild(line);
    const r = cell.getBoundingClientRect();
    tip.style.left = clamp(r.left + r.width / 2, 130, window.innerWidth - 130) + 'px';
    tip.style.top = r.top + 'px';
    tip.classList.add('visible');
  }
  function hideAttTip() { if (attTip) attTip.classList.remove('visible'); }

  // ---- day editor popover ----
  let attEditor = null;
  function closeAttEditor() { if (attEditor) attEditor.classList.remove('open', 'reasoning'); }

  function openAttEditor(root, cell) {
    const ds = cell.dataset.date;
    const cur = loadAtt()[ds];
    if (!attEditor || !attEditor.isConnected) {
      attEditor = document.createElement('div');
      attEditor.className = 'ap-menu aw-editor';
      document.body.appendChild(attEditor);
    }
    const ed = attEditor;
    ed.classList.remove('reasoning');
    ed.innerHTML =
      '<div class="aw-ed-title"></div>' +
      `<button type="button" data-s="p"${cur && cur.s === 'p' ? ' class="active"' : ''}>In school</button>` +
      `<button type="button" data-s="a"${cur && cur.s === 'a' ? ' class="active"' : ''}>Absent</button>` +
      `<button type="button" data-s="o"${cur && cur.s === 'o' ? ' class="active"' : ''}>Other&hellip;</button>` +
      (cur ? '<button type="button" data-s="">Clear</button>' : '') +
      '<div class="aw-ed-reason"><input type="text" maxlength="120" placeholder="Reason&hellip;"><button type="button" data-s="save">Save</button></div>';
    ed.querySelector('.aw-ed-title').textContent = fmtLong(ds);
    const input = ed.querySelector('input');
    input.value = cur && cur.s === 'o' ? cur.n || '' : '';

    const commit = (state, note) => {
      setAtt(ds, state, note);
      closeAttEditor();
      hideAttTip();
      afterAttChange(root);
    };
    ed.onclick = (e) => {
      const b = e.target.closest('button[data-s]');
      if (!b) return;
      e.stopPropagation();
      const s = b.dataset.s;
      if (s === 'o') { ed.classList.add('reasoning'); input.focus(); input.select(); }
      else if (s === 'save') commit('o', input.value.trim());
      else commit(s || null);
    };
    input.onkeydown = (e) => {
      if (e.key === 'Enter') commit('o', input.value.trim());
      else if (e.key === 'Escape') closeAttEditor();
    };

    ed.classList.add('open');
    const r = cell.getBoundingClientRect();
    const w = ed.offsetWidth, h = ed.offsetHeight;
    let top = r.bottom + 6;
    if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
    ed.style.top = top + 'px';
    ed.style.left = clamp(r.left + r.width / 2 - w / 2, 8, window.innerWidth - w - 8) + 'px';
    ed.style.right = 'auto';
  }

  function initAttendanceUI(root) {
    const grid = root.querySelector('#aw-grid');
    const card = root.querySelector('#aw-attendance-card');

    grid.addEventListener('click', (e) => {
      const cell = e.target.closest('.aw-cell[data-date]');
      if (!cell || cell.classList.contains('aw-disabled')) return;
      e.__awKeep = true;
      const ds = cell.dataset.date;
      if (!loadAtt()[ds] && !attState.editing) {
        setAtt(ds, 'p');
        hideAttTip();
        afterAttChange(root);
        return;
      }
      hideAttTip();
      openAttEditor(root, cell);
    });
    grid.addEventListener('mouseover', (e) => {
      const cell = e.target.closest('.aw-cell[data-date]');
      if (cell && !cell.classList.contains('aw-empty')) showAttTip(cell);
    });
    grid.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('.aw-cell[data-date]')) hideAttTip();
    });
    grid.addEventListener('mouseleave', hideAttTip);
    window.addEventListener('scroll', () => { hideAttTip(); closeAttEditor(); }, { passive: true, capture: true });

    document.addEventListener('click', (e) => {
      if (e.__awKeep) return;
      if (attEditor && attEditor.contains(e.target)) return;
      closeAttEditor();
    });

    root.querySelector('#aw-pen').addEventListener('click', () => {
      attState.editing = !attState.editing;
      card.classList.toggle('aw-editing', attState.editing);
      closeAttEditor();
    });

    // range dropdown (same look as the achievement points one)
    const pill = root.querySelector('#aw-pill');
    const pillLabel = root.querySelector('#aw-pill-label');
    const cur = ATT_MODES.find((m) => m.id === attState.mode) || ATT_MODES[2];
    pillLabel.textContent = cur.label;

    const menu = document.createElement('div');
    menu.className = 'ap-menu';
    menu.innerHTML = ATT_MODES.map(
      (m) => `<button type="button" data-mode="${m.id}"${m.id === attState.mode ? ' class="active"' : ''}>${m.label}</button>`
    ).join('');
    document.body.appendChild(menu);

    const closeMenu = () => menu.classList.remove('open');
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('open')) { closeMenu(); return; }
      const r = pill.getBoundingClientRect();
      menu.style.top = (r.bottom + 6) + 'px';
      menu.style.left = 'auto';
      menu.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
      menu.classList.add('open');
    });
    document.addEventListener('click', closeMenu);
    window.addEventListener('scroll', closeMenu, { passive: true, capture: true });
    window.addEventListener('resize', closeMenu, { passive: true });

    menu.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        attState.mode = btn.dataset.mode;
        saveAttMode(attState.mode);
        menu.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
        pillLabel.textContent = btn.textContent;
        closeMenu();
        renderAttendance(root);
      });
    });

    renderAttendance(root);
  }

  // =================================================================
  // 6b. "ARE YOU IN?" POPUP (bottom-right, any Arbor page)
  //     Asks about today (Mon-Fri, by device date) first, then any earlier
  //     weekday still unmarked since the tracking start date. Yes / No save
  //     straight away; Other asks for a reason and stores a "?".
  //     The x snoozes it for the rest of this browser session.
  //     Weekends and days in the holiday JSON (section 0) are never asked about.
  // =================================================================
  const notify = { el: null, current: null, snoozed: false };
  try { notify.snoozed = sessionStorage.getItem(CONFIG.attSnoozeKey) === '1'; } catch (e) { /* ignore */ }

  function pendingDates() {
    const att = loadAtt();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = getAttStart();
    const out = [];
    for (let i = 0; i <= CONFIG.attLookbackDays; i++) {
      const d = addDays(today, -i);
      if (d < start) break;
      const dow = d.getDay();
      if (dow === 0 || dow === 6) continue;
      const ds = toDateStr(d);
      if (holidayFor(ds)) continue;   // school holiday / bank holiday / inset: don't ask
      if (!att[ds]) out.push(ds);
    }
    return out;
  }

  function getNotifyEl() {
    if (notify.el && notify.el.isConnected) return notify.el;
    ensureStyles();
    const el = document.createElement('div');
    el.id = 'aw-notify';
    document.body.appendChild(el);
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-a]');
      if (!b) return;
      const a = b.dataset.a;
      if (a === 'close') {
        notify.snoozed = true;
        try { sessionStorage.setItem(CONFIG.attSnoozeKey, '1'); } catch (err) { /* ignore */ }
        el.classList.remove('show');
        notify.current = null;
      }
      else if (a === 'p' || a === 'a') answerNotify(a);
      else if (a === 'o') renderNotifyReason();
      else if (a === 'save') submitNotifyReason();
      else if (a === 'back') renderNotifyMain();
    });
    el.addEventListener('keydown', (e) => {
      if (e.target.tagName !== 'INPUT') return;
      if (e.key === 'Enter') submitNotifyReason();
      else if (e.key === 'Escape') renderNotifyMain();
    });
    notify.el = el;
    return el;
  }

  function renderNotifyMain() {
      if (location.hostname === "sir-henry-floyd-grammar-school.uk.arbor.education") return;
    const el = getNotifyEl();
    const ds = notify.current;
    if (!ds) return;
    const isToday = ds === todayKey();
    const more = pendingDates().length - 1;
    el.innerHTML =
      '<button class="aw-n-x" type="button" data-a="close" aria-label="Dismiss">&times;</button>' +
      '<div class="aw-n-title"></div><div class="aw-n-sub"></div>' +
      '<div class="aw-n-actions">' +
        '<button type="button" class="y" data-a="p">Yes</button><i></i>' +
        '<button type="button" class="n" data-a="a">No</button><i></i>' +
        '<button type="button" class="o" data-a="o">Other</button>' +
      '</div>';
    el.querySelector('.aw-n-title').textContent = isToday ? 'Are u in today in sch?' : 'Were u in on ' + fmtShortDay(ds) + '?';
    el.querySelector('.aw-n-sub').textContent =
      (isToday ? fmtLong(ds) : 'Not marked yet') + (more > 0 ? ' · ' + more + ' more after this' : '');
    requestAnimationFrame(() => el.classList.add('show'));
  }

  function renderNotifyReason() {
    const el = getNotifyEl();
    const ds = notify.current;
    if (!ds) return;
    el.innerHTML =
      '<button class="aw-n-x" type="button" data-a="close" aria-label="Dismiss">&times;</button>' +
      '<div class="aw-n-title">What\u2019s the reason?</div><div class="aw-n-sub"></div>' +
      '<div class="aw-n-actions">' +
        '<input type="text" maxlength="120" placeholder="e.g. dentist, trip, ill\u2026">' +
        '<i></i><button type="button" class="s" data-a="save">Save</button>' +
        '<i></i><button type="button" class="b" data-a="back">Back</button>' +
      '</div>';
    el.querySelector('.aw-n-sub').textContent = fmtLong(ds);
    el.querySelector('input').focus();
  }

  function submitNotifyReason() {
    const input = notify.el && notify.el.querySelector('input');
    answerNotify('o', input ? input.value.trim() : '');
  }

  function answerNotify(state, note) {
    const ds = notify.current;
    if (!ds) return;
    setAtt(ds, state, note);
    notify.current = null;
    notify.el.classList.remove('show');
    const root = document.getElementById(ROOT_ID);
    if (root) renderAttendance(root);
    setTimeout(checkPrompt, 450);   // move on to the next unmarked day, if any
  }

  function checkPrompt() {
    if (!document.body || notify.snoozed) return;
    const q = pendingDates();
    if (notify.current) {
      if (q.includes(notify.current)) return;   // still waiting on this one
      notify.current = null;                    // it was marked elsewhere (e.g. the widget) or is now a holiday
    }
    if (!q.length) {
      if (notify.el) notify.el.classList.remove('show');
      return;
    }
    notify.current = q[0];
    renderNotifyMain();
  }

  // =================================================================
  // 7. LIVE DATA APPLICATION
  // =================================================================
  function applyAttendance(root, attendance) {
    if (!attendance || attendance.score == null) return;
    const score = attendance.score;
    root.querySelector('#aw-score-num').innerHTML = Math.round(score) + '<sup>%</sup>';
    root.querySelector('#aw-score-label').textContent = attendance.title || 'Overall attendance';
    root.querySelector('#aw-bar-fill').style.width = score + '%';

    const other = attendance.otherBar;
    if (other && other.barPercent != null) {
      const delta = Math.round((score - other.barPercent) * 10) / 10;
      root.querySelector('#aw-bar-prev').style.left = other.barPercent + '%';
      root.querySelector('#aw-last-text').textContent = `vs ${other.barPercent}% (${other.label})`;

      const deltaEl = root.querySelector('#aw-delta');
      const deltaText = root.querySelector('#aw-delta-text');
      const isDown = delta < 0;
      deltaEl.classList.toggle('down', isDown);
      deltaEl.classList.toggle('up', !isDown);
      deltaEl.querySelector('svg polyline').setAttribute(
        'points',
        isDown ? '6 9 12 15 18 9' : '18 15 12 9 6 15'
      );
      deltaText.textContent = (delta >= 0 ? '+' : '') + delta + '%';
    } else {
      root.querySelector('#aw-last-text').textContent = '';
    }
  }

  function applyAchievementStat(root, achievement) {
    if (!achievement) return;
    root.querySelector('#ap-avg').textContent = achievement.thisTerm != null ? achievement.thisTerm : '—';
  }

  // =================================================================
  // 8. ACHIEVEMENT CHART RENDERING
  //    - Data points are inset from the left/right edges (CH_PAD_X) and the
  //      line runs flat out to both edges, so edge points are never clipped.
  //    - Dot/guide/tooltip are HTML positioned in %, so they stay perfectly
  //      aligned with the line at any zoom level or window size.
  //    - The tooltip is clamped inside the chart so it can't be cut off.
  //    - Hover work is rAF-batched and only runs when the nearest point changes.
  // =================================================================
  const chartState = { mode: loadApMode(), points: [], currentTotal: 0, hoverIdx: -1 };
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  function smoothSegments(pts) {
    let d = '';
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i], p1 = pts[i + 1];
      const midX = (p0.x + p1.x) / 2;
      d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  }

  function renderApChart(root, log, currentTotal) {
    if (currentTotal != null) chartState.currentTotal = currentTotal;
    const data = buildApSeries(log, chartState.currentTotal, chartState.mode);

    const max = Math.max(chartState.currentTotal || 0, ...data.map((d) => d.v), 1);
    const min = 0;
    const range = (max - min) || 1;
    const innerW = CH_W - CH_PAD_X * 2;

    const points = data.map((d, i) => ({
      x: data.length > 1 ? CH_PAD_X + (i / (data.length - 1)) * innerW : CH_W / 2,
      y: CH_PAD_TOP + (1 - (d.v - min) / range) * (CH_H - CH_PAD_TOP - CH_PAD_BOTTOM),
      ...d,
    }));
    chartState.points = points;
    chartState.hoverIdx = -1;

    const first = points[0];
    const last = points[points.length - 1];
    // flat lead-in on the left, flat lead-out on the right
    const linePath =
      `M 0 ${first.y} L ${first.x} ${first.y}` +
      smoothSegments(points) +
      ` L ${CH_W} ${last.y}`;
    const areaPath = `${linePath} L ${CH_W} ${CH_H} L 0 ${CH_H} Z`;

    root.querySelector('#ap-line').setAttribute('d', linePath);
    root.querySelector('#ap-line-glow').setAttribute('d', linePath);
    root.querySelector('#ap-area').setAttribute('d', areaPath);

    // Labels sit in zero-width spans so each is centred exactly under its point.
    const monthsRow = root.querySelector('#ap-months');
    const frag = document.createDocumentFragment();
    const maxLabels = 8;
    const step = Math.max(1, Math.ceil(data.length / maxLabels));
    data.forEach((d, i) => {
      const s = document.createElement('span');
      s.textContent = (i % step === 0 || i === data.length - 1) ? d.m : '';
      frag.appendChild(s);
    });
    monthsRow.textContent = '';
    monthsRow.appendChild(frag);

    showApPoint(root, points.length - 1);
  }

  function showApPoint(root, index) {
    const p = chartState.points[index];
    if (!p) return;
    const guide = root.querySelector('#ap-guide');
    const dot = root.querySelector('#ap-dot');
    const halo = root.querySelector('#ap-dot-halo');
    const tooltip = root.querySelector('#ap-tooltip');
    const wrap = root.querySelector('#ap-chart-wrap');

    const xPct = (p.x / CH_W) * 100;
    const yPct = (p.y / CH_H) * 100;

    guide.style.left = xPct + '%'; guide.style.opacity = 1;
    dot.style.left = xPct + '%'; dot.style.top = yPct + '%'; dot.style.opacity = 1;
    halo.style.left = xPct + '%'; halo.style.top = yPct + '%'; halo.style.opacity = 1;

    const html = `${p.m} &middot; <b>${p.v} point${p.v === 1 ? '' : 's'}</b>`;
    if (tooltip._html !== html) {
      tooltip.innerHTML = html;
      tooltip._html = html;
    }

    const wrapW = wrap.clientWidth;
    const tipW = tooltip.offsetWidth;
    const margin = 8;
    const centre = clamp((p.x / CH_W) * wrapW, tipW / 2 + margin, wrapW - tipW / 2 - margin);
    tooltip.style.left = centre + 'px';
    tooltip.style.top = yPct + '%';
    tooltip.classList.add('visible');
  }

  function initApChartInteraction(root) {
    const wrap = root.querySelector('#ap-chart-wrap');
    let rect = null, raf = null, clientX = 0;
    const invalidate = () => { rect = null; };

    wrap.addEventListener('mousemove', (e) => {
      clientX = e.clientX;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (!rect) rect = wrap.getBoundingClientRect();
        const relX = ((clientX - rect.left) / rect.width) * CH_W;
        let nearest = 0, best = Infinity;
        const pts = chartState.points;
        for (let i = 0; i < pts.length; i++) {
          const dist = Math.abs(pts[i].x - relX);
          if (dist < best) { best = dist; nearest = i; }
        }
        if (nearest === chartState.hoverIdx) return;   // nothing to redraw
        chartState.hoverIdx = nearest;
        showApPoint(root, nearest);
      });
    }, { passive: true });

    wrap.addEventListener('mouseleave', () => {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      rect = null;
      chartState.hoverIdx = -1;
      showApPoint(root, chartState.points.length - 1);
    });

    window.addEventListener('scroll', invalidate, { passive: true, capture: true });
    window.addEventListener('resize', invalidate, { passive: true });
    // keep the tooltip clamped correctly when the window/zoom changes
    if (window.ResizeObserver) {
      new ResizeObserver(() => {
        invalidate();
        showApPoint(root, chartState.hoverIdx >= 0 ? chartState.hoverIdx : chartState.points.length - 1);
      }).observe(wrap);
    }
  }

  // =================================================================
  // 8b. OVERFLOW GUARD
  //     The AP widget never overlaps the left column. If the row is too
  //     narrow (zoomed in / small window) the right edge is clipped and
  //     faded out instead.
  // =================================================================
  function initOverflowFade(root) {
    const row = root.querySelector('#aw-row');
    if (!row) return;

    const IGNORE_PX = 40;   // overflow smaller than this: no fade at all (raise to fade later)
    const MAX_FADE = 90;    // widest the fade ever gets
    let lastFade = -1, raf = null;

    const apply = () => {
      raf = null;
      const overflow = row.scrollWidth - row.clientWidth;
      const fade = overflow <= IGNORE_PX ? 0 : Math.min(MAX_FADE, overflow - IGNORE_PX);
      if (fade === lastFade) return;   // don't touch the mask if nothing changed
      lastFade = fade;
      if (!fade) {
        row.classList.remove('is-overflowing');
        row.style.webkitMaskImage = '';
        row.style.maskImage = '';
        return;
      }
      const mask = `linear-gradient(to right, #000 calc(100% - ${fade}px), transparent 100%)`;
      row.classList.add('is-overflowing');
      row.style.webkitMaskImage = mask;
      row.style.maskImage = mask;
    };
    const check = () => { if (!raf) raf = requestAnimationFrame(apply); };

    apply();
    window.addEventListener('resize', check, { passive: true });
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(check);
      ro.observe(row);
      ro.observe(root);
    }
  }

  // =================================================================
  // 9. RANGE DROPDOWN (choice is saved and restored next visit)
  // =================================================================
  function initApModeMenu(root, onChange) {
    const pill = root.querySelector('#ap-pill');
    const pillLabel = root.querySelector('#ap-pill-label');

    // show the remembered range on the pill straight away
    const current = AP_MODES.find((m) => m.id === chartState.mode) || AP_MODES[0];
    pillLabel.textContent = current.label;

    const menu = document.createElement('div');
    menu.className = 'ap-menu';
    menu.innerHTML = AP_MODES.map(
      (m) => `<button type="button" data-mode="${m.id}"${m.id === chartState.mode ? ' class="active"' : ''}>${m.label}</button>`
    ).join('');
    document.body.appendChild(menu);

    function positionMenu() {
      const r = pill.getBoundingClientRect();
      menu.style.top = (r.bottom + 6) + 'px';
      menu.style.left = 'auto';
      menu.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
    }

    function closeMenu() { if (menu.classList.contains('open')) menu.classList.remove('open'); }

    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('open')) { closeMenu(); return; }
      positionMenu();
      menu.classList.add('open');
    });
    document.addEventListener('click', closeMenu);
    window.addEventListener('scroll', closeMenu, { passive: true, capture: true });
    window.addEventListener('resize', closeMenu, { passive: true });

    menu.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        chartState.mode = btn.dataset.mode;
        saveApMode(chartState.mode);   // overwrites the previous default
        menu.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
        pillLabel.textContent = btn.textContent;
        closeMenu();
        onChange();
      });
    });
  }

  // =================================================================
  // 10. CURSOR GLOW (unified — covers both .aw-card and .ap-card)
  //
  //     Same visuals as before, much cheaper:
  //      - card/button positions are measured in ONE batch and cached, only
  //        re-measured on scroll / resize / layout change (previously every card
  //        was measured and then written to in turn, forcing a layout per card
  //        per mouse move)
  //      - one rAF per frame, however many mouse events arrive
  //      - styles are only written when the (quantised) value actually changed
  //      - cards that are off-screen are skipped
  // =================================================================
  const GLOW = {
    BUTTON_MAX_DIST: 150,
    CONTAINER_MAX_DIST: 260,
    MAX_DISC_OPACITY: 0.24,
    MAX_CONTAINER_OPACITY: 0.05,
    RING_FALLOFF_PX: 420,   // distance (from the card edge) at which the ring reaches its floor
  };
  const GLOW_AMBIENT_SEL = '.aw-glow-ambient, .ap-ambient, .fx-ambient';
  const GLOW_EMPTY_BG = 'radial-gradient(circle at center, transparent 0%, transparent 100%)';
  const FAR = -99999;
  // Arbor's own cards that get the same glow (nothing else about them is touched).
  const EXTERNAL_CARD_SELECTORS = ['.info-panel', '.event-box', '.calendar-widget-container'];
  const glowState = {
    x: FAR, y: FAR, raf: null, bound: false,
    floor: 0.225, ceil: 0.425,
    hosts: [], discs: [], dirty: true, resetCache: false, ro: null,
  };

  function scheduleGlow() {
    if (!glowState.raf) glowState.raf = requestAnimationFrame(updateGlow);
  }

  // adjustBorderGlow(min, max): border glow strength while the cursor is NOT on a card.
  //   min = cursor far away, max = cursor right next to the card (both 0-100).
  //   The one card the cursor is actually on always goes to 100.
  function adjustBorderGlow(min, max) {
    const lo = clamp(Number(min), 0, 100);
    if (Number.isNaN(lo)) return;
    let hi = max == null ? glowState.ceil * 100 : clamp(Number(max), 0, 100);
    if (Number.isNaN(hi)) hi = glowState.ceil * 100;
    hi = Math.max(hi, lo);
    glowState.floor = lo / 100;
    glowState.ceil = hi / 100;
    document.documentElement.style.setProperty('--fx-ring-rest', String(lo / 100));
    glowState.resetCache = true;
    scheduleGlow();
  }
  window.adjustBorderGlow = adjustBorderGlow;   // also callable from the console
  adjustBorderGlow(22.5, 42.5);                  // <- min, max: change to taste

  // Adds a ring + ambient overlay (absolutely positioned, so no layout change)
  // to Arbor's own widgets. Idempotent: safe to call on every DOM mutation.
  function decorateExternalCards() {
    document.querySelectorAll(EXTERNAL_CARD_SELECTORS.join(',')).forEach((el) => {
      if (el.closest('#' + ROOT_ID)) return;
      if (!el.classList.contains('fx-host')) {
        el.classList.add('fx-host');
        if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      }
      if (!el.querySelector(':scope > .fx-ring')) {
        const ambient = document.createElement('div');
        ambient.className = 'fx-ambient';
        const ring = document.createElement('div');
        ring.className = 'fx-ring';
        el.appendChild(ambient);
        el.appendChild(ring);
      }
    });
  }

  // Rebuild the list of glow targets only when the set of elements really changed.
  function syncGlowTargets() {
    const hostEls = document.querySelectorAll('.fx-host');
    const discEls = document.querySelectorAll('#' + ROOT_ID + ' .aw-glow-disc, #' + ROOT_ID + ' .ap-glow-disc');

    let same = hostEls.length === glowState.hosts.length && discEls.length === glowState.discs.length;
    if (same) {
      for (let i = 0; i < hostEls.length; i++) {
        const h = glowState.hosts[i];
        // also catches a card whose ring/ambient got replaced by Arbor re-rendering it
        if (h.el !== hostEls[i] || !h.el.isConnected || !h.ring.isConnected) { same = false; break; }
      }
    }
    if (same) return;

    if (glowState.ro) glowState.ro.disconnect();
    if (window.ResizeObserver && !glowState.ro) {
      glowState.ro = new ResizeObserver(() => { glowState.dirty = true; scheduleGlow(); });
    }

    glowState.hosts = Array.from(hostEls).map((el) => ({
      el,
      ring: el.querySelector(':scope > .fx-ring'),
      ambient: el.querySelector(GLOW_AMBIENT_SEL),
      l: 0, t: 0, r: 0, b: 0, w: 0, h: 0,
      angle: null, o: null, amb: null,
    })).filter((h) => h.ring || h.ambient);
    // keep the length check honest for hosts that were filtered out
    glowState.hosts.forEach((h) => { if (!h.ring) h.ring = h.el; });

    glowState.discs = Array.from(discEls).map((el) => ({
      el, parent: el.parentElement,
      cx: 0, cy: 0, gx: null, gy: null, go: null,
    }));

    if (glowState.ro) {
      glowState.hosts.forEach((h) => glowState.ro.observe(h.el));
      glowState.discs.forEach((d) => glowState.ro.observe(d.parent));
    }
    glowState.dirty = true;
    scheduleGlow();
  }

  // All layout reads happen here, together, with no writes in between.
  function measureGlow() {
    glowState.dirty = false;
    const hosts = glowState.hosts, discs = glowState.discs;
    for (let i = 0; i < hosts.length; i++) {
      const h = hosts[i];
      const r = h.el.getBoundingClientRect();
      h.l = r.left; h.t = r.top; h.r = r.right; h.b = r.bottom; h.w = r.width; h.h = r.height;
    }
    for (let i = 0; i < discs.length; i++) {
      const d = discs[i];
      const r = d.parent.getBoundingClientRect();
      d.cx = r.left + r.width / 2;
      d.cy = r.top + r.height / 2;
    }
  }

  function updateGlow() {
    glowState.raf = null;
    if (glowState.dirty) measureGlow();

    const mouseX = glowState.x, mouseY = glowState.y;
    const hosts = glowState.hosts, discs = glowState.discs;
    const floor = glowState.floor, ceil = glowState.ceil;
    const vh = window.innerHeight, vw = window.innerWidth;
    const force = glowState.resetCache;
    glowState.resetCache = false;
    const RAD = 180 / Math.PI;

    // ---- cards: ambient light + border ring ----
    for (let i = 0; i < hosts.length; i++) {
      const h = hosts[i];
      if (!h.w || !h.h) continue;
      if (h.b < 0 || h.t > vh || h.r < 0 || h.l > vw) continue;   // off-screen: skip
      if (force) { h.angle = null; h.o = null; h.amb = null; }

      const cx = h.l + h.w / 2;
      const cy = h.t + h.h / 2;

      if (h.ambient) {
        const dist = Math.hypot(mouseX - cx, mouseY - cy);
        const intensity = Math.max(0, 1 - clamp(dist / GLOW.CONTAINER_MAX_DIST, 0, 1));
        let bg;
        if (intensity <= 0) {
          bg = GLOW_EMPTY_BG;
        } else {
          const relX = Math.round(clamp(((mouseX - h.l) / h.w) * 100, 0, 100) * 4) / 4;
          const relY = Math.round(clamp(((mouseY - h.t) / h.h) * 100, 0, 100) * 4) / 4;
          const alpha = Math.round(GLOW.MAX_CONTAINER_OPACITY * intensity * 1000) / 1000;
          bg = `radial-gradient(circle at ${relX}% ${relY}%, rgba(255,215,0,${alpha}) 0%, rgba(255,180,0,${Math.round(alpha * 0.4 * 10000) / 10000}) 35%, transparent 75%)`;
        }
        if (bg !== h.amb) { h.amb = bg; h.ambient.style.background = bg; }
      }

      if (h.ring && h.ring !== h.el) {
        const angle = Math.round(Math.atan2(mouseY - cy, mouseX - cx) * RAD + 90);

        // distance from the cursor to the card's edge (0 while inside the card)
        const dx = Math.max(h.l - mouseX, 0, mouseX - h.r);
        const dy = Math.max(h.t - mouseY, 0, mouseY - h.b);
        const t = 1 - clamp(Math.hypot(dx, dy) / GLOW.RING_FALLOFF_PX, 0, 1);
        const eased = t * t * (3 - 2 * t);   // smoothstep: gentle at both ends
        // (the card under the cursor is lifted to 100% by the :hover rule in the CSS)
        const o = Math.round((floor + (ceil - floor) * eased) * 200) / 200;

        if (angle !== h.angle) { h.angle = angle; h.ring.style.setProperty('--angle', angle + 'deg'); }
        if (o !== h.o) { h.o = o; h.ring.style.setProperty('--fx-ring-o', String(o)); }
      }
    }

    // ---- button glow discs ----
    for (let i = 0; i < discs.length; i++) {
      const d = discs[i];
      if (force) { d.gx = null; d.gy = null; d.go = null; }
      const dx = mouseX - d.cx, dy = mouseY - d.cy;
      const dist = Math.hypot(dx, dy);
      const intensity = Math.max(0, 1 - dist / GLOW.BUTTON_MAX_DIST);
      const go = Math.round(intensity * GLOW.MAX_DISC_OPACITY * 500) / 500;

      if (go === 0) {
        // invisible: just make sure it's off, no need to track direction
        if (d.go !== 0) { d.go = 0; d.el.style.setProperty('--go', 0); }
        continue;
      }
      let ux = 0, uy = 0;
      if (dist > 0.001) { ux = dx / dist; uy = dy / dist; }
      const gx = Math.round(clamp(50 + 50 * ux, 0, 100) * 2) / 2;
      const gy = Math.round(clamp(50 + 50 * uy, 0, 100) * 2) / 2;
      if (gx !== d.gx) { d.gx = gx; d.el.style.setProperty('--gx', gx + '%'); }
      if (gy !== d.gy) { d.gy = gy; d.el.style.setProperty('--gy', gy + '%'); }
      if (go !== d.go) { d.go = go; d.el.style.setProperty('--go', go); }
    }

    updatePicture(mouseX, mouseY);
  }

  // =================================================================
  // 10b. PROFILE PICTURE: subtle 3D tilt toward the cursor, lift + shading
  //      Runs inside the same rAF as the card glow.
  //      - ambient glow is dimmed right down (PIC.GLOW_STRENGTH)
  //      - border ring is unchanged
  //      - NEW: shadow system on top of the picture. The side tilting away from
  //        the viewer darkens (a gradient across the face + a soft edge vignette),
  //        and the drop shadow underneath shifts opposite the tilt, so the
  //        rotation reads as real depth.
  //      Tune with PIC below.
  // =================================================================
  const PIC = {
    SELECTOR: '.info-panel-picture',
    MAX_TILT_DEG: 18,     // maximum rotation
    TILT_RANGE_PX: 380,   // how far away the picture starts reacting
    GLOW_RANGE_PX: 160,   // how close before the glow starts to appear
    GLOW_STRENGTH: 0.2,   // 1 = old ambient glow, lower = dimmer (border ring unaffected)
    SHADE_STRENGTH: 0.35, // darkness of the face shading at full tilt (0-1)
    VIGNETTE_STRENGTH: 0.15, // soft edge darkening that grows with tilt (0-1)
    CAST_PX: 10,          // how far the drop shadow slides at full tilt
  };

  const PIC_CSS = `
  .info-panel-picture.aw-pic{
    --pt-a:0deg; --pt-s:0; --pt-sx:0; --pt-sy:0;
    box-shadow:
      /* cast shadow: slides away from the cursor, grows with lift */
      calc(var(--pt-sx) * 1px) calc(var(--pt-sy) * 1px + var(--pt-l) * 12px)
        calc(8px + var(--pt-l) * 22px) rgba(0,0,0,calc(0.15 + var(--pt-l) * 0.4)),
      /* ambient glow: heavily dimmed */
      0 0 calc(3px + var(--pt-g) * 12px) rgba(255,215,0,calc(var(--pt-g) * ${(0.5 * 0.2).toFixed(3)})) !important;
  }
  /* face shading: dark on the side that tilts away from the viewer */
  .info-panel-picture.aw-pic::before{
    content:'';
    position:absolute; inset:0;
    border-radius:inherit;
    pointer-events:none;
    z-index:2;
    background:
      linear-gradient(var(--pt-a),
        transparent 30%,
        rgba(0,0,0,calc(var(--pt-s) * ${PIC_SHADE()})) 100%),
      radial-gradient(circle at 50% 50%,
        transparent 55%,
        rgba(0,0,0,calc(var(--pt-s) * ${PIC_VIG()})) 100%);
  }
  /* highlight: much dimmer than before; the border ring is unchanged */
  .info-panel-picture.aw-pic::after{
    background:radial-gradient(circle at var(--pt-px) var(--pt-py),
      rgba(255,225,130,calc(var(--pt-g) * ${(0.45 * 0.2).toFixed(3)})) 0%,
      rgba(255,200,0,calc(var(--pt-g) * ${(0.12 * 0.2).toFixed(3)})) 38%,
      transparent 70%) !important;
  }
  `;
  function PIC_SHADE() { return PIC.SHADE_STRENGTH; }
  function PIC_VIG() { return PIC.VIGNETTE_STRENGTH; }

  const picState = { el: null, vars: {}, styled: false };

  function setPicVar(name, value) {
    if (picState.vars[name] === value) return;
    picState.vars[name] = value;
    picState.el.style.setProperty(name, value);
  }

  function updatePicture(mx, my) {
    if (!picState.styled) {
      const st = document.createElement('style');
      st.id = 'aw-pic-styles';
      st.textContent = PIC_CSS;
      document.head.appendChild(st);   // after the main CSS, so these rules win
      picState.styled = true;
    }

    let el = picState.el;
    if (!el || !el.isConnected) {
      el = document.querySelector(PIC.SELECTOR);
      if (!el) { picState.el = null; return; }
      picState.el = el;
      picState.vars = {};
      el.classList.add('aw-pic');
      // the overlays are absolutely positioned inside the picture
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    }

    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = mx - cx, dy = my - cy;
    const dist = Math.hypot(dx, dy);
    const radius = Math.min(r.width, r.height) / 2;
    const over = dist <= radius;                       // cursor on the circle

    // tilt: strongest when close, easing out to 0 at TILT_RANGE_PX
    const infl = 1 - clamp((dist - radius) / PIC.TILT_RANGE_PX, 0, 1);
    const k = infl * infl * (3 - 2 * infl);
    const nx = clamp(dx / (radius + 60), -1, 1);
    const ny = clamp(dy / (radius + 60), -1, 1);
    const rotY = Math.round(nx * PIC.MAX_TILT_DEG * k * 10) / 10;    // right of centre -> turn right
    const rotX = Math.round(-ny * PIC.MAX_TILT_DEG * k * 10) / 10;   // below centre -> tip down toward it

    // lift + glow (glow dimmed via the CSS above, ring untouched)
    const near = 1 - clamp((dist - radius) / PIC.GLOW_RANGE_PX, 0, 1);
    const lift = over ? 1 : Math.round(near * near * 0.35 * 100) / 100;
    const glow = over ? 1 : Math.round(near * 0.45 * 100) / 100;

    // shading: dark side = the side tipping away (toward the cursor)
    const shadeAngle = Math.round(Math.atan2(dx, -dy) * 180 / Math.PI);   // CSS gradient angle
    const shade = Math.round(k * 100) / 100;
    const castX = Math.round(-nx * k * PIC.CAST_PX * 10) / 10;           // shadow slides away from cursor
    const castY = Math.round(-ny * k * PIC.CAST_PX * 10) / 10;

    const px = Math.round(clamp(((mx - r.left) / r.width) * 100, 0, 100));
    const py = Math.round(clamp(((my - r.top) / r.height) * 100, 0, 100));

    setPicVar('--pt-x', rotX + 'deg');
    setPicVar('--pt-y', rotY + 'deg');
    setPicVar('--pt-l', String(lift));
    setPicVar('--pt-g', String(glow));
    setPicVar('--pt-px', px + '%');
    setPicVar('--pt-py', py + '%');
    setPicVar('--pt-a', shadeAngle + 'deg');
    setPicVar('--pt-s', String(shade));
    setPicVar('--pt-sx', String(castX));
    setPicVar('--pt-sy', String(castY));
  }

  function initGlowEffects(root) {
    if (glowState.bound) return;   // one global listener, covers every card
    glowState.bound = true;

    function onMove(e) {
      glowState.x = e.clientX; glowState.y = e.clientY;
      scheduleGlow();   // one update per frame, however many events arrive
    }
    function onLayoutChange() { glowState.dirty = true; scheduleGlow(); }
    function reset() {
      // park the cursor far away: everything falls back to its resting state
      glowState.x = FAR; glowState.y = FAR;
      scheduleGlow();
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onLayoutChange, { passive: true, capture: true });
    window.addEventListener('resize', onLayoutChange, { passive: true });
    window.addEventListener('load', onLayoutChange, { passive: true });
    document.documentElement.addEventListener('mouseleave', reset);
    window.addEventListener('blur', reset);

    syncGlowTargets();
  }

  // =================================================================
  // 11. DATA REFRESH CYCLE
  // =================================================================
  async function refreshData(root) {
    let kpi = null;
    try {
      const json = await fetchKpiJson();
      kpi = extractKpiData(json);
    } catch (err) {
      console.warn('[Attendance Widget] Failed to fetch KPI data:', err);
    }

    if (kpi && kpi.attendance) applyAttendance(root, kpi.attendance);

    let apLog = loadApLog();
    let currentTotal = null;
    if (kpi && kpi.achievement) {
      applyAchievementStat(root, kpi.achievement);
      currentTotal = kpi.achievement.thisTerm;
      apLog = recordApSnapshot(currentTotal);
    }
    renderApChart(root, apLog, currentTotal);
    renderAttendance(root);   // also rolls the calendar over at midnight
    glowState.dirty = true;   // content changed, sizes may have too
    scheduleGlow();
  }

  // =================================================================
  // 12. MOUNT + ARBOR SPA WATCHER
  // =================================================================
  function findStatsSection() {
    return document.querySelector('section.arbor-kpi-panel[aria-label*="Statistics"]');
  }

  function findPanelByHeading(text) {
    const titles = document.querySelectorAll('.x-title-text');
    for (const t of titles) {
      if (t.textContent.trim() === text) return t.closest('.x-panel.mis-section');
    }
    return null;
  }

  function hide(el) {
    if (el && el.style.display !== 'none') el.style.display = 'none';
  }

  function mountWidget(assignmentsPanel) {
    ensureStyles();
    const root = document.createElement('div');
    root.id = ROOT_ID;
    root.innerHTML = WIDGET_HTML;
    assignmentsPanel.parentNode.insertBefore(root, assignmentsPanel);

    initAttendanceUI(root);
    initGlowEffects(root);
    initApChartInteraction(root);
    initOverflowFade(root);
    initApModeMenu(root, () => renderApChart(root, loadApLog(), chartState.currentTotal));

    refreshData(root);
    setInterval(() => refreshData(root), CONFIG.refreshIntervalMs);
  }

  function tryRun() {
    const stats = findStatsSection();
    const coursesPanel = findPanelByHeading('My Courses');
    const assignmentsPanel = findPanelByHeading('Assignments that are due');

    if (stats) hide(stats.closest('.x-component.x-column') || stats);
    if (coursesPanel) hide(coursesPanel);

    if (assignmentsPanel && !document.getElementById(ROOT_ID)) {
      mountWidget(assignmentsPanel);
    }

    // Only on the dashboard (where our widget lives).
    if (document.getElementById(ROOT_ID)) {
      decorateExternalCards();
      syncGlowTargets();
      glowState.dirty = true;   // Arbor changed the DOM: positions may have moved
      scheduleGlow();
    }
  }

  let debounceId = null;
  const observer = new MutationObserver((records) => {
    // ignore churn we caused ourselves (spinner letters, widget internals, popups)
    let relevant = false;
    for (let i = 0; i < records.length; i++) {
      const t = records[i].target;
      if (!t || !t.closest || !t.closest('#' + ROOT_ID + ', .loading-spinner, .ap-menu, #aw-notify, .aw-tip')) { relevant = true; break; }
    }
    if (!relevant) return;
    if (debounceId) clearTimeout(debounceId);
    debounceId = setTimeout(tryRun, 150);
  });
  function startWatching() {
    observer.observe(document.body, { childList: true, subtree: true });
    tryRun();
    loadExternalHolidays();   // no-op unless CONFIG.holidayUrl is set
    // attendance popup: runs on every Arbor page, not just the dashboard
    setTimeout(checkPrompt, 1500);
    setInterval(checkPrompt, CONFIG.attPromptEveryMs);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checkPrompt(); });
  }
  if (document.body) startWatching();
  else document.addEventListener('DOMContentLoaded', startWatching);
}




// sidebar sys
function sidebarSys() {
    'use strict';

    const style = document.createElement("style");
    style.textContent = `
    html, body {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
    }



    .calendar-widget-list .calendar-widget-item-color--1 .calendar-widget-item-date {
    background-color: #b96e16;
}


.calendar-widget-list .calendar-widget-item-color--1 .calendar-widget-item-title  {    color: #796B3F !important;}
.calendar-widget-list .calendar-widget-item-color--1 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--1 .calendar-widget-item-title {
    background-color: #fabe78
}

.calendar-widget-list .calendar-widget-item-color--2 .calendar-widget-item-date {
    background-color: #ddbe05
}

.calendar-widget-list .calendar-widget-item-color--2 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--2 .calendar-widget-item-title {
    background-color: #fdec73
}

.calendar-widget-list .calendar-widget-item-color--3 .calendar-widget-item-date {
    background-color: #839e12
}

.calendar-widget-list .calendar-widget-item-color--3 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--3 .calendar-widget-item-title {
    background-color: #cfe574
}

.calendar-widget-list .calendar-widget-item-color--4 .calendar-widget-item-date {
    background-color: #4e801a
}

.calendar-widget-list .calendar-widget-item-color--4 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--4 .calendar-widget-item-title {
    background-color: #a4cc7a
}

.calendar-widget-list .calendar-widget-item-color--5 .calendar-widget-item-date {
    background-color: #839e12
}

.calendar-widget-list .calendar-widget-item-color--5 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--5 .calendar-widget-item-title {
    background-color: #cfe574
}

.calendar-widget-list .calendar-widget-item-color--6 .calendar-widget-item-date {
    background-color: #839e12
}

.calendar-widget-list .calendar-widget-item-color--6 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--6 .calendar-widget-item-title {
    background-color: #cfe574
}

.calendar-widget-list .calendar-widget-item-color--7 .calendar-widget-item-date {
    background-color: #839e12
}

.calendar-widget-list .calendar-widget-item-color--7 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--7 .calendar-widget-item-title {
    background-color: #cfe574
}

.calendar-widget-list .calendar-widget-item-color--8 .calendar-widget-item-date {
    background-color: #839e12
}

.calendar-widget-list .calendar-widget-item-color--8 .calendar-widget-item-location,.calendar-widget-list .calendar-widget-item-color--8 .calendar-widget-item-title {
    background-color: #cfe574
}

    .event-box, .calendar-widget-container, .info-panel {
    margin-bottom: 14px !important;
    }


    .info-panel .info-panel-header {
    padding: 17px 24px 13px 130px !important;
    height: 52.5px !important;
}

.info-panel-title {
font-size: 16px !important;
}

    *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
        background: transparent !important;
    }

    * {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
    }

    .cursor-glow-disc {
    mask: radial-gradient(circle at center,
                            transparent 0,
                            transparent 24px,
                            #000 24px,
                            #000 100%) !important;
    }

    .side-bar-button__icon {
    background: transparent !important; }
.side-bar-button__icon svg {
    width: 17.5px !important;
    height: 17.5px !important;
}

.side-bar-button__wrapper.b-nav-active .side-bar-button__icon,
.side-bar-button__wrapper:hover .side-bar-button__icon {
    background-color: #fcd40004 !important;
    width: 50px;
    height: 50px;
    backdrop-filter: blur(1px);
}

#header-container {
    background: none !important;
    position: absolute;
    margin-bottom: 10vh;}


    .app-inner-container { margin-top: 62px; }

.dark-mode .header {
height: calc(5vh + 10px) !important ;
    margin-bottom: 2.5px !important;
}


.dark-mode .top-bar {
    position: absolute !important;
    top: 0 !important;
    z-index: 9999 !important;
    left: 0 !important;
    width: 100vw !important;
    backdrop-filter: blur(9px) !important;
    background: linear-gradient(120deg, rgba(15, 15, 15, 0.55) 0%, rgba(8, 8, 8, 0.6) 55%, rgba(255, 215, 0, 0.04) 100%) !important;
    height: calc(5vh + 10px) !important;
    }


.dark-mode .side-bar-button {
    border: 1px solid rgb(255 215 0 / 10%) !important;
    aspect-ratio: 1 / 1 !important;
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    backdrop-filter: blur(2px);
    background: rgba(30, 30, 30, 0.13) !important;
}

.side-bar .side-bar-button__wrapper:hover {
background: transparent !important;
background-color: transparent !important;
}

    .dark-mode .side-bar-button.b-nav-active {
        transform: translateY(-0.5px) !important;
            background: rgba(255, 215, 0, 0.05) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.1);
    }
.side-bar-button {
transition: all 0.3s cubic-bezier(0.23, 0.14, 0.62, 0.93);
}

    .dark-mode .side-bar-button:hover {
    background: rgba(255, 215, 0, 0.1) !important;
    }

    .side-bar-button__wrapper.b-nav-active,
    .side-bar-button__wrapper:hover {
        background: transparent !important;
    }

    .side-bar-button__wrapper.b-nav-active:hover svg {
    transform: scale(1.15);
}

td {
    border: 1px solid #e0bd0214 !important;
    }
.dark-mode .calendar-widget-item {
border: none !important }

.info-panel .info-panel-picture {

background: none !important;
border: 2px solid transparent !important;
}

    .b-cursor-glow-ambient {
    background: radial-gradient(circle at 0% 54.7619%, rgba(255, 215, 0, 0.043) 0%, transparent 80%);
    display: none;
}
    .dark-mode .side-bar {
        background: linear-gradient(135deg, #12121250, #0a0a0a) !important;
        border-right: 1px solid transparent !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        padding-bottom: 12px !important;
        align-items: center !important;
    }

    .dark-mode .side-bar-button__text {
        display: none;
    }

    .side-bar .side-bar-button__wrapper {
        width: 50px !important;
    }

    .side-bar button {
        margin: 0px !important;
        aspect-ratio: 1 / 1;
        width: 50px !important;
        border-radius: 50% !important;
        scale: 1.1;
        height: 50px !important;
    }

    .dark-mode .kpi-box-link__wrapper { border: none !important; }
.dark-mode-toggle-btn {
display: none !important;
    position: fixed;
    top: 1.3vh;
    left: 2.5vh;
    opacity: 0.5;
    filter: blur(13px);
    z-index: 9999;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FFD700, #FFC300);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
    transition: all 0.3s ease;
    font-size: 20px;
    color: #000;
    font-weight: bold;
}


.mis-property-row::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(135deg, rgb(255 215 0 / 1%), rgb(255 215 0 / 1%)) !important;
    opacity: 0;
    transition: opacity 0.3s;
}


.mis-property-row:hover {
    transform: scale(0.975);
    border-left: none !important;
    box-shadow: 0 12px 30px rgb(255 159 0 / 14%), 0 0 25px rgba(255, 215, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    border-color: rgb(183 154 0 / 40%) !important;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.08)) !important;
    }

.dark-mode .app-container, .dark-mode .app-inner-container, .dark-mode .page-container {
    background: #0a0a0a !important;
    height: 100vh;
}
    .b-sidebar-inner {
        position: relative;
        width: min-content;
        display: flex;
        background: radial-gradient(#ffd70005, #ffd70005);
        border-radius: 64px !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px !important;
        scale: 1.05;
        height: min-content;
    }

    /* top spacer + bottom wrapper both flex:1 so the main group stays centred */
    .b-sidebar-spacer {
        flex: 1;
        width: 100%;
        pointer-events: none;
    }

    .b-sidebar-bottom-wrap {
        flex: 1;
        margin-top: 10vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 20px;
        box-sizing: border-box;
    }


    .dark-mode .arbor-kpi-panel {
    overflow: hidden;
    border-radius: 13px;
    background: linear-gradient(113deg, rgb(25 25 25 / 78%), rgb(10 10 10 / 81%)) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgb(255 215 0 / 11%) !important;
    box-shadow: 0 8px 32px #ffd7000d;
}

    .mis-htmlpanel-measure:hover {
    transform: scale(1.005) !important;
    box-shadow: 0 0 13px rgb(255 236 0 / 24%), 0 0 0 rgb(72 61 2 / 60%) !important;
}


.dark-mode .mis-section {
    display: none !important;
    }

    .event-box {
    /* display: none !important; */
    }

    .main-content-wrapper {
    padding: 14px 14px 14px 7px;
    background: #fff;
    flex: 1;
}

.arrow-go-right {
opacity: 0.67 !important;
scale: 0.67 !important;
transition: all 0.275s cubic-bezier(0.23, 0.14, 0.62, 0.93);
}
.arrow-go-right:hover {
opacity: 0.925 !important;
transform: translateX(2px) !important;
scale: 0.875 !important;
}

.widget-zone-column-flex-wrapper {
    flex: 1;
    overflow: hidden auto;
    width: 100px;
    min-height: 100%;
    padding: 14px 7px 14px 14px;
}

    .dark-mode .info-panel, .dark-mode .calendar-widget-container, .event-box  {
    border-radius: 16px !important;
    overflow: hidden !important;
    }

.pagesICON path {
fill: none !important;
}

.pagesICON path:hover {
fill: none !important;
}

.social-pages-main {
width: 100%;
height: calc(100% - 64px);
border: none;
padding: none;
margin: none;
}

    .mis-htmlpanel-measure {

    padding: 18px 28px;
    border-radius: 17px;
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.5));
    backdrop-filter: blur(5px) saturate(150%);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    color: #fff;
    transition: transform .5s cubic-bezier(0.23, 0.14, 0.62, 0.93), box-shadow .5s;
}

    .side-bar > div {
        position: relative !important;
    }

    .cursor-glow-ambient {
        position: absolute;
        inset: -4px;
        border-radius: 64px;
        pointer-events: none;
        z-index: 1;
        background: radial-gradient(circle at center, transparent 0%, transparent 100%);
        transition: background 0.1s;
        opacity: 0.9;
        filter: blur(3px);
        mix-blend-mode: screen;
    }

    .keyboard-focusable-button-wrapper {
        position: relative !important;
    }

    .cursor-glow-disc {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 51px;
        height: 51px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        background: radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%),
                    rgba(255, 225, 120, 1) 0%,
                    rgba(255, 200, 0, 0.6) 30%,
                    transparent 70%);
        opacity: var(--glow-opacity, 0);
        mix-blend-mode: screen;
        transition: opacity 0.08s ease, background 0.05s;
    }

    .top-bar-glow-border {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 999999999999999999999999999;
        background: radial-gradient(circle at var(--tb-glow-x, 50%) 100%,
                    rgba(255, 225, 120, 0.9) 0%,
                    rgba(255, 200, 0, 0.5) 25%,
                    transparent 60%);
        mask: linear-gradient(to top, #000 0, #000 2px, transparent 2px, transparent 100%);
        -webkit-mask: linear-gradient(to top, #000 0, #000 2px, transparent 2px, transparent 100%);
        opacity: var(--tb-glow-opacity, 0);
        mix-blend-mode: screen;
        transition: opacity 0.08s ease, background 0.05s;
    }
    `;
    document.head.appendChild(style);

    const pfpManager = {
        keyCustom: "arborCustomPFP",
        keyOriginal: "arborOriginalPFP",
        getImg() {
            return document.querySelector("img.info-panel-picture-inner");
        },
        applyCustomStyle(img) {
            img.style.margin = "0px";
            img.style.width = "100%";
            img.style.height = "100%";
        },
        applyOriginalStyle(img) {
            img.style.margin = "3px";
            img.style.width = "92px";
            img.style.height = "92px";
        },
        init() {
            const img = this.getImg();
            if (!img) return;

            if (!localStorage.getItem(this.keyOriginal)) {
                localStorage.setItem(this.keyOriginal, img.src);
            }

            const custom = localStorage.getItem(this.keyCustom);
            if (custom) {
                img.src = custom;
                this.applyCustomStyle(img);
            } else {
                this.applyOriginalStyle(img);
            }
        },
        change() {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = e => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = ev => {
                    const img = this.getImg();
                    if (!img) return;
                    const base64 = ev.target.result;
                    img.src = base64;
                    this.applyCustomStyle(img);
                    localStorage.setItem(this.keyCustom, base64);
                };
                reader.readAsDataURL(file);
            };
            input.click();
        },
        reset() {
            const img = this.getImg();
            const original = localStorage.getItem(this.keyOriginal);
            if (!img || !original) return;
            img.src = original;
            this.applyOriginalStyle(img);
            localStorage.removeItem(this.keyCustom);
        },
        handle() {
            const r = prompt("1 = Reset PFP\n2 = Change PFP");
            if (r === "1") this.reset();
            if (r === "2") this.change();
        }
    };



















    const BURGER_SELECTOR = ".burger-menu-container";
const BURGER_MARKER = "bCustomButtons";

function styleBurgerButton(btn, isSignOut = false) {
    btn.style.cssText += `
        width:100%;
        box-sizing:border-box;
        min-height:46px;
        padding:0 12px;
        border:1px solid transparent;
        border-radius:9px;
        background:transparent;
        color:${isSignOut ? "#d98a8e" : "#e8e8e8"};
        transition:background 180ms ease,border-color 180ms ease,box-shadow 180ms ease,color 180ms ease;
    `;

    const content = btn.querySelector(".side-bar-button");
    if (content) {
        content.style.cssText += `
            display:flex;
            align-items:center;
            gap:13px;
            width:100%;
        `;
    }

    const text = btn.querySelector(".side-bar-button__text");
    if (text) {
        text.style.cssText = `
            width:auto !important;
            overflow:visible;
            flex:1 !important;
            color:inherit;
        `;
    }

    btn.addEventListener("mouseenter", () => {
        btn.style.background = "rgba(210,55,65,0.08)";
        btn.style.borderColor = "rgba(210,55,65,0.16)";
        btn.style.color = "#ff777f";
        btn.style.boxShadow = "0 2px 12px rgba(180,35,45,0.10)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.background = "transparent";
        btn.style.borderColor = "transparent";
        btn.style.color = isSignOut ? "#d98a8e" : "#e8e8e8";
        btn.style.boxShadow = "none";
    });

    return btn;
}

function buildBurgerButtons() {
    const burger = document.querySelector(BURGER_SELECTOR);
    if (!burger || burger.dataset[BURGER_MARKER] === "true") return;

    const originalHome = burger.querySelector(':scope > button[aria-label="Home"]');
    const originalSignOut = burger.querySelector(':scope > button[aria-label="Sign Out"]');

    if (!originalHome || !originalSignOut) return;

    const originalSignOutParent = originalSignOut.parentElement;

    burger.querySelectorAll(":scope > *").forEach(element => {
        if (element !== originalHome && element !== originalSignOut) {
            element.remove();
        }
    });

    const homeButton = makeButton("burger-home", HOME_SVG, "Home", () => {
        location.href = HOME_URL;
    });

    const calendarButton = makeButton("burger-calendar", CALENDAR_SVG, "Calendar", () => {
        location.href = CALENDAR_URL;
    });

    const reportsButton = makeButton("burger-reports", REPORTS_SVG, "Reports", () => {
        location.href = REPORTS_URL;
    });

    const gamesButton = makeButton("burger-games", GAMES_SVG, "Games", () => {
        openGames();
    });

    const socialButton = makeButton("burger-social", PFP_SVG, "Social", () => {
        openSocial();
    });

    [
        homeButton,
        calendarButton,
        reportsButton,
        gamesButton,
        socialButton
    ].forEach(button => {
        styleBurgerButton(button);
    });

    styleBurgerButton(originalSignOut, true);

    burger.replaceChildren(
        calendarButton,
        homeButton,
        reportsButton,
        gamesButton,
        socialButton,
        originalSignOut
    );

    originalSignOut.style.marginTop = "auto";

    burger.style.display = "flex";
    burger.style.flexDirection = "column";
    burger.style.alignItems = "stretch";
    burger.style.gap = "5px";
    burger.style.padding = "10px 8px";
    burger.style.boxSizing = "border-box";

    burger.dataset[BURGER_MARKER] = "true";
}

const burgerButtonObserver = new MutationObserver(() => {
    buildBurgerButtons();
});

burgerButtonObserver.observe(document.body, {
    childList: true,
    subtree: true
});

buildBurgerButtons();


// sidebar button sysmem
const SIDEBAR_SELECTOR = ".side-bar";
const MARKER_CLASS = "b-sidebar-inner";
const BUILT_FLAG = "bCustomized";
const ACTIVE_CLASS = "b-nav-active";
const GAMING_CLASS = "gaming-hub";
const SOCIAL_CLASS = "social-pages"
const PAGE_CONTAINER_SELECTOR = ".page-container";

const HOME_URL = "https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/home-ui/dashboard";
const CALENDAR_URL = "https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/my-mis-ui/calendar/";
const REPORTS_URL = "https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/student-ui/my-reports";

const HOME_MATCH = "/students/home-ui/";
const CALENDAR_MATCH = "/students/my-mis-ui/calendar";
const REPORTS_MATCH = "/students/student-ui/my-reports";

const HOME_SVG = `<svg viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg" fill="#ffd700"><path d="M20.5886 7.22008L13.3972 0.915623C12.738 0.325982 11.8846 0 11.0001 0C10.1156 0 9.2622 0.325982 8.60296 0.915623L1.41157 7.22008C1.03087 7.56056 0.727069 7.97824 0.520403 8.44531C0.313736 8.91237 0.208944 9.41811 0.213004 9.92884V20.4043C0.213004 21.3579 0.591836 22.2725 1.26616 22.9468C1.94048 23.6212 2.85506 24 3.8087 24H18.1915C19.1451 24 20.0597 23.6212 20.734 22.9468C21.4084 22.2725 21.7872 21.3579 21.7872 20.4043V9.91685C21.7895 9.40814 21.6839 8.90471 21.4773 8.43984C21.2707 7.97496 20.9678 7.55922 20.5886 7.22008ZM13.3972 21.6029H8.60296V15.61C8.60296 15.2922 8.72924 14.9873 8.95402 14.7625C9.17879 14.5378 9.48365 14.4115 9.80153 14.4115H12.1987C12.5165 14.4115 12.8214 14.5378 13.0462 14.7625C13.2709 14.9873 13.3972 15.2922 13.3972 15.61V21.6029ZM19.3901 20.4043C19.3901 20.7222 19.2638 21.027 19.039 21.2518C18.8142 21.4766 18.5094 21.6029 18.1915 21.6029H15.7944V15.61C15.7944 14.6564 15.4155 13.7418 14.7412 13.0675C14.0669 12.3932 13.1523 12.0143 12.1987 12.0143H9.80153C8.84789 12.0143 7.93331 12.3932 7.25899 13.0675C6.58466 13.7418 6.20583 14.6564 6.20583 15.61V21.6029H3.8087C3.49082 21.6029 3.18596 21.4766 2.96119 21.2518C2.73641 21.027 2.61014 20.7222 2.61014 20.4043V9.91685C2.61035 9.74667 2.6468 9.57849 2.71707 9.4235C2.78733 9.2685 2.8898 9.13025 3.01765 9.01793L10.209 2.72546C10.4278 2.5333 10.709 2.42733 11.0001 2.42733C11.2912 2.42733 11.5724 2.5333 11.7911 2.72546L18.9825 9.01793C19.1104 9.13025 19.2129 9.2685 19.2831 9.4235C19.3534 9.57849 19.3898 9.74667 19.3901 9.91685V20.4043Z"></path></svg>`;

const CALENDAR_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#ffd700" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6659_3130)"><path d="M10 12C10.1978 12 10.3911 11.9414 10.5556 11.8315C10.72 11.7216 10.8482 11.5654 10.9239 11.3827C10.9996 11.2 11.0194 10.9989 10.9808 10.8049C10.9422 10.6109 10.847 10.4327 10.7071 10.2929C10.5673 10.153 10.3891 10.0578 10.1951 10.0192C10.0011 9.98063 9.80004 10.0004 9.61732 10.0761C9.43459 10.1518 9.27841 10.28 9.16853 10.4444C9.05865 10.6089 9 10.8022 9 11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12ZM15 12C15.1978 12 15.3911 11.9414 15.5556 11.8315C15.72 11.7216 15.8482 11.5654 15.9239 11.3827C15.9996 11.2 16.0194 10.9989 15.9808 10.8049C15.9422 10.6109 15.847 10.4327 15.7071 10.2929C15.5673 10.153 15.3891 10.0578 15.1951 10.0192C15.0011 9.98063 14.8 10.0004 14.6173 10.0761C14.4346 10.1518 14.2784 10.28 14.1685 10.4444C14.0586 10.6089 14 10.8022 14 11C14 11.2652 14.1054 11.5196 14.2929 11.7071C14.4804 11.8946 14.7348 12 15 12ZM10 16C10.1978 16 10.3911 15.9414 10.5556 15.8315C10.72 15.7216 10.8482 15.5654 10.9239 15.3827C10.9996 15.2 11.0194 14.9989 10.9808 14.8049C10.9422 14.6109 10.847 14.4327 10.7071 14.2929C10.5673 14.153 10.3891 14.0578 10.1951 14.0192C10.0011 13.9806 9.80004 14.0004 9.61732 14.0761C9.43459 14.1518 9.27841 14.28 9.16853 14.4444C9.05865 14.6089 9 14.8022 9 15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16ZM15 16C15.1978 16 15.3911 15.9414 15.5556 15.8315C15.72 15.7216 15.8482 15.5654 15.9239 15.3827C15.9996 15.2 16.0194 14.9989 15.9808 14.8049C15.9422 14.6109 15.847 14.4327 15.7071 14.2929C15.5673 14.153 15.3891 14.0578 15.1951 14.0192C15.0011 13.9806 14.8 14.0004 14.6173 14.0761C14.4346 14.1518 14.2784 14.28 14.1685 14.4444C14.0586 14.6089 14 14.8022 14 15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16ZM5 12C5.19778 12 5.39112 11.9414 5.55557 11.8315C5.72002 11.7216 5.84819 11.5654 5.92388 11.3827C5.99957 11.2 6.01937 10.9989 5.98079 10.8049C5.9422 10.6109 5.84696 10.4327 5.70711 10.2929C5.56725 10.153 5.38907 10.0578 5.19509 10.0192C5.00111 9.98063 4.80004 10.0004 4.61732 10.0761C4.43459 10.1518 4.27841 10.28 4.16853 10.4444C4.05865 10.6089 4 10.8022 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2V2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V8H18V17ZM18 6H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V6ZM5 16C5.19778 16 5.39112 15.9414 5.55557 15.8315C5.72002 15.7216 5.84819 15.5654 5.92388 15.3827C5.99957 15.2 6.01937 14.9989 5.98079 14.8049C5.9422 14.6109 5.84696 14.4327 5.70711 14.2929C5.56725 14.153 5.38907 14.0578 5.19509 14.0192C5.00111 13.9806 4.80004 14.0004 4.61732 14.0761C4.43459 14.1518 4.27841 14.28 4.16853 14.4444C4.05865 14.6089 4 14.8022 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16Z"></path></g><defs><clipPath id="clip0_6659_3130"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>`;

const REPORTS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD805" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text preview-icon pagesICON"><path d="M8 2v4"></path><path d="M12 2v4"></path><path d="M16 2v4"></path><rect width="16" height="18" x="4" y="4" rx="2"></rect><path d="M8 10h6"></path><path d="M8 14h8"></path><path d="M8 18h5"></path></svg>`

const GAMES_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD805"><path d="M17.5 6h-11A4.5 4.5 0 0 0 2 10.5v3A4.5 4.5 0 0 0 6.5 18c1.4 0 2.2-.6 3-1.5.5-.6 1-1 2-1h1c1 0 1.5.4 2 1 .8.9 1.6 1.5 3 1.5a4.5 4.5 0 0 0 4.5-4.5v-3A4.5 4.5 0 0 0 17.5 6zm2.5 7.5a2.5 2.5 0 0 1-2.5 2.5c-.6 0-1-.3-1.5-.8-.9-1-1.8-1.7-3.5-1.7h-1c-1.7 0-2.6.7-3.5 1.7-.5.5-.9.8-1.5.8A2.5 2.5 0 0 1 4 13.5v-3A2.5 2.5 0 0 1 6.5 8h11a2.5 2.5 0 0 1 2.5 2.5v3zM9 9.5H8v1H7v1h1v1h1v-1h1v-1H9v-1zm6.5.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5zm2 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5z"/></svg>`;

const PFP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD805" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users preview-icon pagesICON"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>`

const SETTINGS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD805" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="pagesICON lucide lucide-settings preview-icon"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>`

let sideBarRefs = { home: null, calendar: null, reports: null, games: null, pfp: null, settings: null };
let gamingActive = false;




function makeButton(className, svg, label, onClick) {
    const btn = document.createElement("button");

    btn.className = `keyboard-focusable-button-wrapper keyboard-focusable-button-wrapper__inset side-bar-button__wrapper ${className}`;

    btn.innerHTML = `
        <span class="side-bar-button" tabindex="-1" role="presentation">
            <div class="side-bar-button__icon">${svg}</div>
            <div class="side-bar-button__text">${label}</div>
        </span>
    `;

    if (onClick) btn.addEventListener("click", onClick);

    if (document.querySelector(".burger-menu-container")) {
        btn.style.cssText += `
            width:100%;
            box-sizing:border-box;
            border-radius:9px;
            transition:background 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        `;

        btn.addEventListener("mouseenter", () => {
            btn.style.background = "rgba(210,55,65,0.09)";
            btn.style.borderColor = "rgba(210,55,65,0.18)";
            btn.style.boxShadow = "0 2px 12px rgba(180,35,45,0.10)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.background = "transparent";
            btn.style.borderColor = "transparent";
            btn.style.boxShadow = "none";
        });
    }

    return btn;
}



function findOriginalSignOutButton(sideBar) {
    const buttons = Array.from(sideBar.querySelectorAll("button"));
    return buttons.find(b => (b.innerText || "").includes("Sign Out")) || null;
}

function openSettings() {
    window.dispatchEvent(new CustomEvent("arbor-open-settings"));
}

function goTo(url) {
    if (!url) return;
    if (window.location.href === url) {
        window.location.reload();
        return;
    }
    window.location.href = url;
}



























// gaming-hub
const GAMING_HUB_URL = "https://brunecoding.github.io/ArborUltra/gaming-hub.html";

let gamesFrame = null;
let gamesLoadId = 0;
let gamesSyncInterval = null;

let gamesImageQueue = [];
let gamesImageActive = 0;

const GAMES_IMAGE_LIMIT = 6;
const GAMES_MAX_IMAGE_SIZE = 8 * 1024 * 1024;
const GAMES_PREFETCH_TIMEOUT = 10000;
const GAMES_TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

const GAMES_IMAGE_URL_PATTERN = /https?:\/\/[^\s"'`()<>\\,;]+/gi;
const GAMES_IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|ico|avif|bmp)(?:[?#]|$)/i;
const GAMES_IMAGE_HOSTS =
  /^https?:\/\/(?:[^/]*\.dmcdn\.net\/|images\.unsplash\.com\/|www\.google\.com\/s2\/favicons)/i;

const gamesImageCache = new Map();
const gamesImagePending = new Map();

function fetchGamingHub() {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "GET",
      url: GAMING_HUB_URL + "?v=" + Date.now(),
      timeout: 30000,
      headers: { "Cache-Control": "no-cache" },
      onload(response) {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.responseText);
        } else {
          reject(new Error("HTTP " + response.status));
        }
      },
      onerror() {
        reject(new Error("Network error"));
      },
      ontimeout() {
        reject(new Error("Request timed out"));
      }
    });
  });
}

function getPageNonce() {
  const element = document.querySelector("script[nonce],style[nonce]");

  return element
    ? element.nonce || element.getAttribute("nonce") || ""
    : "";
}

function getArborUsername() {
  try {
    const user = JSON.parse(
      localStorage.getItem("daCurrentUser") || "{}"
    );

    return String(
      user.display_name || user.username || "there"
    ).trim() || "there";
  } catch {
    return "there";
  }
}

function resolveHubURL(value) {
  if (!value || typeof value !== "string") return value;

  value = value.trim();

  if (
    !value ||
    value.startsWith("data:") ||
    value.startsWith("blob:") ||
    value.startsWith("#") ||
    value.startsWith("javascript:")
  ) {
    return value;
  }

  if (
    /^https:\/\/www\.google\.com\/s2\/favicons\?/i.test(value) &&
    /domain=poki\.com/i.test(value)
  ) {
    return "https://poki.com/favicon.ico";
  }

  try {
    return new URL(value, GAMING_HUB_URL).href;
  } catch {
    return value;
  }
}

function queueImageTask(task) {
  return new Promise(resolve => {
    gamesImageQueue.push({ task, resolve });
    processImageQueue();
  });
}

function processImageQueue() {
  while (
    gamesImageActive < GAMES_IMAGE_LIMIT &&
    gamesImageQueue.length > 0
  ) {
    const item = gamesImageQueue.shift();

    gamesImageActive++;

    Promise.resolve()
      .then(item.task)
      .then(item.resolve)
      .catch(() => item.resolve(null))
      .finally(() => {
        gamesImageActive--;
        processImageQueue();
      });
  }
}

function guessImageMime(url) {
  const match = /\.(png|jpe?g|gif|webp|svg|ico|avif|bmp)(?:[?#]|$)/i.exec(url);

  if (!match) return "";

  const ext = match[1].toLowerCase();

  if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  if (ext === "svg") return "image/svg+xml";
  if (ext === "ico") return "image/x-icon";

  return "image/" + ext;
}

function getImageDataURL(url) {
  url = resolveHubURL(url);

  if (!url || !/^https?:\/\//i.test(url)) {
    return Promise.resolve(null);
  }

  if (gamesImageCache.has(url)) {
    return Promise.resolve(gamesImageCache.get(url));
  }

  if (gamesImagePending.has(url)) {
    return gamesImagePending.get(url);
  }

  const promise = new Promise(resolve => {
    GM_xmlhttpRequest({
      method: "GET",
      url,
      responseType: "blob",
      timeout: 20000,

      onload(response) {
        let blob = response.response;

        if (
          response.status < 200 ||
          response.status >= 300 ||
          !blob ||
          !blob.size ||
          blob.size > GAMES_MAX_IMAGE_SIZE
        ) {
          console.warn("Image request failed:", url, response.status);
          resolve(null);
          return;
        }

        const guessed = guessImageMime(url);

        if (!blob.type || !blob.type.startsWith("image/")) {
          if (!guessed) {
            resolve(null);
            return;
          }

          blob = new Blob([blob], { type: guessed });
        }

        const reader = new FileReader();

        reader.onload = () => {
          if (typeof reader.result === "string") {
            gamesImageCache.set(url, reader.result);
            resolve(reader.result);
          } else {
            resolve(null);
          }
        };

        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      },

      onerror() {
        console.warn("Image network error:", url);
        resolve(null);
      },

      ontimeout() {
        console.warn("Image request timed out:", url);
        resolve(null);
      }
    });
  }).finally(() => {
    gamesImagePending.delete(url);
  });

  gamesImagePending.set(url, promise);
  return promise;
}

function isProxyableImageURL(url) {
  return GAMES_IMAGE_EXT.test(url) || GAMES_IMAGE_HOSTS.test(url);
}

async function inlineKnownImages(html) {
  const found = new Map();

  for (const match of html.matchAll(GAMES_IMAGE_URL_PATTERN)) {
    const raw = match[0];
    const url = raw.replace(/&amp;/g, "&");

    if (isProxyableImageURL(url)) {
      found.set(raw, url);
    }
  }

  if (!found.size) return html;

  const unique = [...new Set(found.values())];

  const tasks = unique.map(url =>
    queueImageTask(() => getImageDataURL(url))
  );

  await Promise.race([
    Promise.all(tasks),
    new Promise(resolve => setTimeout(resolve, GAMES_PREFETCH_TIMEOUT))
  ]);

  let output = html;

  [...found.entries()]
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([raw, url]) => {
      const data = gamesImageCache.get(url);

      if (data) {
        output = output.split(raw).join(data);
      }
    });

  return output;
}

function hubFrameShim(config) {
  const PIXEL = config.pixel;
  const HUB_URL = config.hubUrl;
  const cache = new Map();
  const waiting = new Map();
  const nativeSetAttribute = Element.prototype.setAttribute;
  const nativeGetAttribute = Element.prototype.getAttribute;
  const imgSrc = Object.getOwnPropertyDescriptor(
    HTMLImageElement.prototype,
    "src"
  );
  const BACKGROUND_URL = /url\(\s*(['"]?)(.*?)\1\s*\)/gi;
  const SKIP_TAGS = /^(SCRIPT|STYLE|META|LINK|HEAD|TITLE|BR|NOSCRIPT)$/;
  const backgroundPending = new Set();
  let backgroundRunning = false;
  let pseudoStyle = null;
  let pseudoCounter = 0;

  function absolute(value) {
    try {
      return new URL(String(value).trim(), HUB_URL).href;
    } catch (error) {
      return String(value);
    }
  }

  function shouldProxy(value) {
    if (typeof value !== "string") return false;

    value = value.trim();

    if (!value) return false;
    if (/^(data:|blob:|#|javascript:|about:)/i.test(value)) return false;

    return /^https?:\/\//i.test(absolute(value));
  }

  function firstSrcsetUrl(value) {
    if (!value) return null;

    const first = String(value).split(",")[0].trim();

    return first ? first.split(/\s+/)[0] : null;
  }

  function requestImage(url, callback) {
    if (cache.has(url)) {
      callback(cache.get(url));
      return;
    }

    if (waiting.has(url)) {
      waiting.get(url).push(callback);
      return;
    }

    waiting.set(url, [callback]);

    window.parent.postMessage(
      { type: "arbor-img-request", url: url },
      "*"
    );
  }

  window.addEventListener("message", event => {
    if (event.source !== window.parent) return;

    const data = event.data;

    if (!data || data.type !== "arbor-img-response") return;

    const result = data.data || null;
    const callbacks = waiting.get(data.id) || [];

    cache.set(data.id, result);
    waiting.delete(data.id);

    callbacks.forEach(callback => callback(result));
  });

  function applyImage(element, value) {
    if (!shouldProxy(value)) {
      element.__arborUrl = null;
      imgSrc.set.call(element, value);
      return;
    }

    const url = absolute(value);

    element.__arborUrl = url;
    imgSrc.set.call(element, PIXEL);

    requestImage(url, data => {
      if (element.__arborUrl !== url) return;
      if (data) imgSrc.set.call(element, data);
    });
  }

  function applySrcset(element, value) {
    const first = firstSrcsetUrl(value);

    if (!shouldProxy(first)) {
      nativeSetAttribute.call(element, "srcset", value);
      return;
    }

    if (element.tagName === "IMG") {
      element.removeAttribute("srcset");
      applyImage(element, first);
      return;
    }

    const url = absolute(first);

    element.__arborUrl = url;
    nativeSetAttribute.call(element, "srcset", PIXEL);

    requestImage(url, data => {
      if (element.__arborUrl !== url) return;
      if (data) nativeSetAttribute.call(element, "srcset", data);
    });
  }

  function processMedia(element) {
    if (element.tagName === "IMG") {
      const raw =
        nativeGetAttribute.call(element, "data-arbor-src") ||
        nativeGetAttribute.call(element, "src") ||
        firstSrcsetUrl(nativeGetAttribute.call(element, "srcset"));

      if (!shouldProxy(raw)) return;
      if (element.__arborUrl && element.__arborUrl === absolute(raw)) return;

      element.removeAttribute("data-arbor-src");

      if (element.hasAttribute("srcset")) {
        element.removeAttribute("srcset");
      }

      applyImage(element, raw);
      return;
    }

    if (element.tagName === "SOURCE") {
      const attribute = nativeGetAttribute.call(element, "srcset");
      const first = firstSrcsetUrl(attribute);

      if (!shouldProxy(first)) return;
      if (element.__arborUrl === absolute(first)) return;

      applySrcset(element, attribute);
    }
  }

  function scanImages(root) {
    const elements = [];

    if (root.nodeType === 1 && /^(IMG|SOURCE)$/.test(root.tagName)) {
      elements.push(root);
    }

    if (root.querySelectorAll) {
      root.querySelectorAll("img,source").forEach(element => {
        elements.push(element);
      });
    }

    elements.forEach(processMedia);
  }

  function addPseudoRule(element, pseudo, value) {
    if (!pseudoStyle) {
      pseudoStyle = document.createElement("style");

      if (config.nonce) {
        pseudoStyle.setAttribute("nonce", config.nonce);
      }

      (document.head || document.documentElement).appendChild(pseudoStyle);
    }

    let id = nativeGetAttribute.call(element, "data-arbor-pseudo");

    if (!id) {
      id = "p" + ++pseudoCounter;
      nativeSetAttribute.call(element, "data-arbor-pseudo", id);
    }

    pseudoStyle.appendChild(
      document.createTextNode(
        '[data-arbor-pseudo="' + id + '"]' + pseudo +
        "{background-image:" + value + " !important;}\n"
      )
    );
  }

  function proxyBackground(element, pseudo) {
    let value;

    try {
      value = getComputedStyle(element, pseudo).backgroundImage;
    } catch (error) {
      return;
    }

    if (!value || value === "none") return;

    const urls = [];

    value.replace(BACKGROUND_URL, (match, quote, url) => {
      if (shouldProxy(url) && urls.indexOf(url) === -1) {
        urls.push(url);
      }

      return match;
    });

    if (!urls.length) return;

    const store = element.__arborBackgrounds || (element.__arborBackgrounds = {});
    const key = pseudo || "self";
    const signature = urls.join("|");

    if (store[key] === signature) return;

    store[key] = signature;

    const resolved = {};
    let remaining = urls.length;

    function finish() {
      let output = value;

      urls.forEach(url => {
        if (resolved[url]) {
          output = output.split(url).join(resolved[url]);
        }
      });

      if (output === value) return;

      if (!pseudo) {
        element.style.setProperty("background-image", output, "important");
        return;
      }

      addPseudoRule(element, pseudo, output);
    }

    urls.forEach(url => {
      requestImage(absolute(url), data => {
        resolved[url] = data;
        remaining--;

        if (remaining === 0) finish();
      });
    });
  }

  function runBackgrounds() {
    if (backgroundRunning) return;

    backgroundRunning = true;

    function step() {
      const batch = [];

      for (const element of backgroundPending) {
        batch.push(element);
        backgroundPending.delete(element);

        if (batch.length >= 150) break;
      }

      batch.forEach(element => {
        if (!element.isConnected) return;

        proxyBackground(element, null);
        proxyBackground(element, "::before");
        proxyBackground(element, "::after");
      });

      if (backgroundPending.size) {
        setTimeout(step, 16);
      } else {
        backgroundRunning = false;
      }
    }

    step();
  }

  function enqueueBackgrounds(root, deep) {
    if (root.nodeType === 1 && !SKIP_TAGS.test(root.tagName)) {
      backgroundPending.add(root);
    }

    if (deep && root.querySelectorAll) {
      root.querySelectorAll("*").forEach(element => {
        if (!SKIP_TAGS.test(element.tagName)) {
          backgroundPending.add(element);
        }
      });
    }

    if (backgroundPending.size) runBackgrounds();
  }

  function rewriteMarkup(html) {
    return html.replace(
      /(<img\b[^>]*?)\ssrc=(["'])(https?:\/\/[^"']*)\2/gi,
      (match, head, quote, url) =>
        head + " src=" + quote + PIXEL + quote +
        " data-arbor-src=" + quote + url + quote
    );
  }

  Object.defineProperty(HTMLImageElement.prototype, "src", {
    configurable: true,
    enumerable: imgSrc.enumerable,
    get() {
      return this.__arborUrl || imgSrc.get.call(this);
    },
    set(value) {
      applyImage(this, value);
    }
  });

  [HTMLImageElement, HTMLSourceElement].forEach(constructor => {
    const descriptor = Object.getOwnPropertyDescriptor(
      constructor.prototype,
      "srcset"
    );

    if (!descriptor || !descriptor.set) return;

    Object.defineProperty(constructor.prototype, "srcset", {
      configurable: true,
      enumerable: descriptor.enumerable,
      get() {
        return descriptor.get.call(this);
      },
      set(value) {
        applySrcset(this, value);
      }
    });
  });

  Element.prototype.setAttribute = function (name, value) {
    const key = String(name).toLowerCase();

    if (this instanceof HTMLImageElement && key === "src") {
      applyImage(this, value);
      return;
    }

    if (
      (this instanceof HTMLImageElement ||
        this instanceof HTMLSourceElement) &&
      key === "srcset"
    ) {
      applySrcset(this, value);
      return;
    }

    return nativeSetAttribute.call(this, name, value);
  };

  try {
    const innerHTML = Object.getOwnPropertyDescriptor(
      Element.prototype,
      "innerHTML"
    );

    Object.defineProperty(Element.prototype, "innerHTML", {
      configurable: true,
      enumerable: innerHTML.enumerable,
      get() {
        return innerHTML.get.call(this);
      },
      set(value) {
        innerHTML.set.call(
          this,
          typeof value === "string" ? rewriteMarkup(value) : value
        );
      }
    });

    const insertAdjacentHTML = Element.prototype.insertAdjacentHTML;

    Element.prototype.insertAdjacentHTML = function (position, html) {
      return insertAdjacentHTML.call(
        this,
        position,
        typeof html === "string" ? rewriteMarkup(html) : html
      );
    };
  } catch (error) {
    console.warn("Markup patch failed:", error);
  }

  function start() {
    scanImages(document);
    enqueueBackgrounds(document.documentElement, true);

    new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;

            scanImages(node);
            enqueueBackgrounds(node, true);
          });

          return;
        }

        const target = mutation.target;

        if (!target || target.nodeType !== 1) return;

        if (
          /^(IMG|SOURCE)$/.test(target.tagName) &&
          (mutation.attributeName === "src" ||
            mutation.attributeName === "srcset")
        ) {
          processMedia(target);
        }

        if (
          mutation.attributeName === "class" ||
          mutation.attributeName === "style"
        ) {
          enqueueBackgrounds(target, false);
        }
      });
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset", "class", "style"]
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
}

function prepareHubDocument(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("base").forEach(element => {
    element.remove();
  });

  const nonce = getPageNonce();

  const hubData = JSON.stringify({
    username: getArborUsername(),
    embedded: true
  }).replace(/</g, "\\u003c");

  const shimConfig = JSON.stringify({
    pixel: GAMES_TRANSPARENT_PIXEL,
    hubUrl: GAMING_HUB_URL,
    nonce: nonce
  }).replace(/</g, "\\u003c");

  const bootstrap = `
    <script${nonce ? ` nonce="${nonce}"` : ""}>
      (${hubFrameShim.toString()})(${shimConfig});

      window.ARBOR_HUB = ${hubData};

      window.addEventListener("message", function(event) {
        if (event.source !== window.parent) return;
        if (!event.data || event.data.type !== "arbor-user") return;

        const username = String(event.data.username || "there");

        window.ARBOR_HUB.username = username;

        window.dispatchEvent(
          new CustomEvent("arbor-user-updated", {
            detail: { username: username }
          })
        );

        window.parent.postMessage({
          type: "arbor-user-ack"
        }, "*");
      });

      window.parent.postMessage({
        type: "arbor-hub-ready"
      }, "*");
    <\/script>
  `;

  doc.head.insertAdjacentHTML("afterbegin", bootstrap);

  if (nonce) {
    doc.querySelectorAll("script:not([nonce])").forEach(script => {
      script.setAttribute("nonce", nonce);
    });
  }

  const attributes = [
    "src",
    "href",
    "poster",
    "data-src",
    "data-poster"
  ];

  doc.querySelectorAll("*").forEach(element => {
    attributes.forEach(attribute => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(
          attribute,
          resolveHubURL(element.getAttribute(attribute))
        );
      }
    });

    ["srcset", "data-srcset"].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;

      const entries = element.getAttribute(attribute).split(",");

      element.setAttribute(
        attribute,
        entries.map(entry => {
          const parts = entry.trim().split(/\s+/);
          parts[0] = resolveHubURL(parts[0]);
          return parts.join(" ");
        }).join(", ")
      );
    });
  });

  return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
}

function makeGamesFrame() {
  const frame = document.createElement("iframe");

  frame.className = "gaming-hub-frame";

  frame.setAttribute(
    "sandbox",
    "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
  );

  frame.setAttribute("allow", "fullscreen; autoplay");
  frame.setAttribute("loading", "eager");

  Object.assign(frame.style, {
    display: "block",
    width: "100%",
    height: "calc(100vh - 80px)",
    border: "0",
    background: "#0a0a0a"
  });

  return frame;
}

function syncHubUsername() {
  if (!gamesFrame || !gamesFrame.contentWindow) return;

  try {
    gamesFrame.contentWindow.postMessage({
      type: "arbor-user",
      username: getArborUsername()
    }, "*");
  } catch (error) {
    console.error("Username sync failed:", error);
  }
}

function startUsernameSync() {
  if (gamesSyncInterval) {
    clearInterval(gamesSyncInterval);
  }

  syncHubUsername();

  let attempts = 0;

  gamesSyncInterval = setInterval(() => {
    if (!gamesFrame || !gamesFrame.isConnected) {
      clearInterval(gamesSyncInterval);
      gamesSyncInterval = null;
      return;
    }

    syncHubUsername();
    attempts++;

    if (attempts >= 40) {
      clearInterval(gamesSyncInterval);
      gamesSyncInterval = null;
    }
  }, 1000);
}

function setGamesSpinner(visible) {
  const spinner = document.querySelector("div.loading-spinner");

  if (!spinner) return;

  if (visible) {
    spinner.classList.remove("loading-spinner--hide");
  } else {
    spinner.classList.add("loading-spinner--hide");
  }
}

function destroyGameStuff() {
  gamesLoadId++;

  if (gamesSyncInterval) {
    clearInterval(gamesSyncInterval);
    gamesSyncInterval = null;
  }

  gamesImageQueue.forEach(item => item.resolve(null));
  gamesImageQueue.length = 0;

  gamesImageCache.clear();
  gamesImagePending.clear();

  if (gamesFrame) {
    gamesFrame.srcdoc = "";
    gamesFrame.remove();
    gamesFrame = null;
  }
}

window.addEventListener("message", event => {
  if (!gamesFrame) return;
  if (event.source !== gamesFrame.contentWindow) return;

  const data = event.data;

  if (!data) return;

  if (data.type === "arbor-hub-ready") {
    startUsernameSync();
  }

  if (data.type === "arbor-user-ack") {
    syncHubUsername();
  }

  if (data.type === "arbor-img-request" && typeof data.url === "string") {
    const source = event.source;
    const requestLoadId = gamesLoadId;
    const url = data.url;

    queueImageTask(() => getImageDataURL(url)).then(result => {
      if (requestLoadId !== gamesLoadId) return;

      try {
        source.postMessage({
          type: "arbor-img-response",
          id: url,
          data: result
        }, "*");
      } catch (error) {
        console.warn("Image response failed:", url);
      }
    });
  }
});

window.addEventListener(
  "daCurrentUserUpdated",
  syncHubUsername
);

window.addEventListener("storage", event => {
  if (event.key === "daCurrentUser") {
    syncHubUsername();
  }
});

async function loadGameStuff() {
  const container = document.querySelector(
    PAGE_CONTAINER_SELECTOR
  );

  if (!container) return;

  destroyGameStuff();

  setGamesSpinner(true);

  const loadId = gamesLoadId;
  let srcdocAssigned = false;

  container.innerHTML = "";

  const frame = makeGamesFrame();

  gamesFrame = frame;
  container.appendChild(frame);

  frame.addEventListener("load", () => {
    if (loadId !== gamesLoadId || gamesFrame !== frame) return;
    if (!srcdocAssigned) return;

    setGamesSpinner(false);
    syncHubUsername();
  });

  try {
    const html = await fetchGamingHub();

    if (loadId !== gamesLoadId || !frame.isConnected) return;

    const preparedHTML = prepareHubDocument(html);
    const inlinedHTML = await inlineKnownImages(preparedHTML);

    if (loadId !== gamesLoadId || !frame.isConnected) return;

    srcdocAssigned = true;
    frame.srcdoc = inlinedHTML;

  } catch (error) {
    console.error("Gaming hub failed:", error);

    if (loadId === gamesLoadId && frame.isConnected) {
      srcdocAssigned = true;
      frame.srcdoc = `
        <body style="
          background:#0a0a0a;
          color:#aaa;
          font-family:Arial,sans-serif;
          padding:30px;
        ">
          <h3>Gaming hub failed to load</h3>
          <p>${String(error.message || error)}</p>
          <button onclick="parent.location.reload()">Retry</button>
        </body>
      `;
    }
  }
}










































let socialActive = false;

function updateActiveStates() {
    const href = window.location.href;

    if (gamingActive || socialActive) {
        setActive(sideBarRefs.home, false);
        setActive(sideBarRefs.calendar, false);
        setActive(sideBarRefs.reports, false);
        setActive(sideBarRefs.games, gamingActive);
        setActive(sideBarRefs.social, socialActive);
        return;
    }

    if (href.includes() == "#games") {
        setActive(sideBarRefs.home, false);
        setActive(sideBarRefs.calendar, false);
        setActive(sideBarRefs.reports, false);
        setActive(sideBarRefs.games, true);
        setActive(sideBarRefs.social, false);
        return;
    }

    setActive(sideBarRefs.home, href.includes(HOME_MATCH));
    setActive(sideBarRefs.calendar, href.includes(CALENDAR_MATCH));
    setActive(sideBarRefs.reports, href.includes(REPORTS_MATCH));
    setActive(sideBarRefs.games, false);
    setActive(sideBarRefs.social, false);
}

function loadGames() {
    location.hash = "#games";
}

function loadSocial() {
    location.hash = "#social";
}

function openGames() {
    if (!location.hash.startsWith("#games")) return;

    const container = document.querySelector(PAGE_CONTAINER_SELECTOR);
    if (!container) return;
    leaveSocial();
    gamingActive = true;
    container.innerHTML = "";
    container.classList.add(GAMING_CLASS);
    updateActiveStates();
    loadGameStuff();
}

function leaveGames() {
    if (!gamingActive) return;
    if (location.hash.startsWith("#games")) return;
    gamingActive = false;
    destroyGameStuff();
    const container = document.querySelector(PAGE_CONTAINER_SELECTOR);
    if (container) container.classList.remove(GAMING_CLASS);
    updateActiveStates();
}

const SOCIAL_SOURCES = {
   arbor: "https://ray.githubusercontent.com/BruneCoding/Ray-Browser/Codebase/index.html",
    nova: "https://brunecoding.github.io/Arbor-Pages/nova.html"
};

function getChatProvider() {
    const saved = (localStorage.getItem("chatProvider") || "").toLowerCase();
        console.log("will adamson aint letting me properly use nova, so wait till Arbor Pages!")
        localStorage.setItem("chatProvider","arbor");
    if (saved === "arbor" || saved === "nova" || saved === "other") return saved;
    localStorage.setItem("chatProvider", "arbor");
    return "arbor";
}

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url,
            timeout: 20000,
            onload: r => {
                if (r.status >= 200 && r.status < 300) {
                    resolve(r.responseText);
                } else {
                    reject(new Error("HTTP " + r.status));
                }
            },
            onerror: reject,
            ontimeout: reject
        });
    });
}

function makeSocialFrame() {
    const frame = document.createElement("iframe");
    frame.className = "social-pages-main";
    frame.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-forms allow-popups"
    );

    const s = frame.style;
    s.setProperty("display", "block", "important");
    s.setProperty("width", "100%", "important");
    s.setProperty("height", "calc(100vh - 80px)", "important");
    s.setProperty("border", "0", "important");
    s.setProperty("background", "#090909", "important");

    return frame;
}

function prepareFrame(frame, baseUrl) {
    try {
        const doc = frame.contentDocument;
        if (!doc) return;

        let base = doc.querySelector("base");

        if (!base) {
            base = doc.createElement("base");
            doc.head.prepend(base);
        }

        base.href = baseUrl;

        const scripts = [...doc.querySelectorAll("script")].map(old => {
            const script = {
                attributes: [...old.attributes].map(a => [a.name, a.value]),
                code: old.textContent
            };
            old.remove();
            return script;
        });

        for (const item of scripts) {
            const script = doc.createElement("script");

            for (const [name, value] of item.attributes) {
                script.setAttribute(name, value);
            }

            if (!script.src) {
                script.textContent = item.code;
            }

            (doc.body || doc.head || doc.documentElement).appendChild(script);
        }
    } catch (e) {
        console.error("Social page initialization failed:", e);
    }
}

function openSocial() {
    if (!location.hash.startsWith("#social")) return;

    const container = document.querySelector(PAGE_CONTAINER_SELECTOR);
    if (!container) return;

    leaveGames();
    socialActive = true;
    container.innerHTML = "";
    container.classList.add(SOCIAL_CLASS);

    const frame = makeSocialFrame();
    container.appendChild(frame);
    updateActiveStates();

    const provider = getChatProvider();

    const url = provider === "other"
        ? localStorage.getItem("chatProviderUrl")
        : SOCIAL_SOURCES[provider];

    if (!url) {
        frame.srcdoc = "<body style='background:#090909;color:#aaa;font-family:sans-serif'>No custom provider set.</body>";
        return;
    }

    fetchHtml(url)
        .then(html => {
            if (!socialActive || !frame.isConnected) return;

            frame.addEventListener("load", () => {
                prepareFrame(frame, url);
            }, { once: true });

            frame.srcdoc = html;
        })
        .catch(error => {
            console.error("social is boom boom. pls ", error);

            if (frame.isConnected) {
                frame.srcdoc = "<body style='background:#090909;color:#aaa;font-family:sans-serif'>pls check console. social became boom boom</body>";
            }
        });
}

function leaveSocial() {
    if (!socialActive) return;
    if (location.hash.startsWith("#social")) return;

    socialActive = false;

    const container = document.querySelector(PAGE_CONTAINER_SELECTOR);

    if (container) {
        container.classList.remove(SOCIAL_CLASS);
    }

    updateActiveStates();
}

setTimeout(() => {
    window.addEventListener("hashchange", () => {
        const hash = location.hash;
        if (hash.startsWith("#games")) openGames();
        else if (hash.startsWith("#social")) openSocial();
        else {
            leaveGames();
            leaveSocial();
        }
    });
}, 900);


































































function buildMainInner() {
    const inner = document.createElement("div");
    inner.className = MARKER_CLASS;

    const glow = document.createElement("div");
    glow.className = "b-cursor-glow-ambient";
    inner.appendChild(glow);

    const homeBtn = makeButton("custom-home-btn", HOME_SVG, "Home", () => goTo(HOME_URL));
    inner.appendChild(homeBtn);
    sideBarRefs.home = homeBtn;

    const calendarBtn = makeButton("custom-calendar-btn", CALENDAR_SVG, "Calendar", () => goTo(CALENDAR_URL));
    inner.appendChild(calendarBtn);
    sideBarRefs.calendar = calendarBtn;

    const reportsBtn = makeButton("custom-reports-btn", REPORTS_SVG, "Reports", () => goTo(REPORTS_URL));
    inner.appendChild(reportsBtn);
    sideBarRefs.reports = reportsBtn;

    const gamesBtn = makeButton("custom-games-btn", GAMES_SVG, "Games", loadGames);
    inner.appendChild(gamesBtn);
    sideBarRefs.games = gamesBtn;

    return inner;
}

function buildBottomInner() {
    const inner = document.createElement("div");
    inner.className = `${MARKER_CLASS} b-sidebar-inner--bottom`;

    const glow = document.createElement("div");
    glow.className = "b-cursor-glow-ambient";
    inner.appendChild(glow);

    const pfpBtn = makeButton("custom-pfp-btn", PFP_SVG, "Pages", loadSocial);
    inner.appendChild(pfpBtn);
    sideBarRefs.pfp = pfpBtn;
    sideBarRefs.social = pfpBtn;

    const settingsBtn = makeButton("custom-settings-btn", SETTINGS_SVG, "Settings", openSettings);
    inner.appendChild(settingsBtn);
    sideBarRefs.settings = settingsBtn;

    return inner;
}

function buildSideBarContent(sideBar) {
    const realSignOut = findOriginalSignOutButton(sideBar);
    if (realSignOut) realSignOut.remove();

    const frag = document.createDocumentFragment();

    const spacer = document.createElement("div");
    spacer.className = "b-sidebar-spacer";
    frag.appendChild(spacer);

    frag.appendChild(buildMainInner());

    const bottomWrap = document.createElement("div");
    bottomWrap.className = "b-sidebar-bottom-wrap";
    bottomWrap.appendChild(buildBottomInner());
    frag.appendChild(bottomWrap);

    return frag;
}

function setActive(btn, isActive) {
    if (!btn) return;
    const span = btn.querySelector(".side-bar-button");
    if (isActive) {
        btn.classList.add(ACTIVE_CLASS);
        if (span) {
            span.classList.add(ACTIVE_CLASS);
            span.classList.add("side-bar-button--active");
        }
    } else {
        btn.classList.remove(ACTIVE_CLASS);
        if (span) {
            span.classList.remove(ACTIVE_CLASS);
            span.classList.remove("side-bar-button--active");
        }
    }
}



function applyToSideBar(sideBar) {
    if (sideBar.dataset[BUILT_FLAG] === "1") return;

    sidebarObserver.disconnect();
    sideBar.innerHTML = "";
    sideBar.appendChild(buildSideBarContent(sideBar));
    sideBar.dataset[BUILT_FLAG] = "1";
    sidebarObserver.observe(document.body, { childList: true, subtree: true });

    initGlow();
    initTopBarGlow();
    updateActiveStates();
}

function scan() {
    const sideBar = document.querySelector(SIDEBAR_SELECTOR);
    if (sideBar) applyToSideBar(sideBar);
    updateActiveStates();
}

const sidebarObserver = new MutationObserver(scan);
sidebarObserver.observe(document.body, { childList: true, subtree: true });

window.addEventListener("popstate", leaveGames);
window.addEventListener("hashchange", leaveGames);

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
} else {
    scan();
}









    const BUTTON_MAX_DIST = 200;
    const CONTAINER_MAX_DIST = 300;
    const MAX_BORDER_OPACITY = 0.35;
    const MAX_CONTAINER_OPACITY = 0.05;

    let mouseX = 0, mouseY = 0;
    let rafId = null;
    let glowGroups = [];
    let glowObserver = null;
    let glowInitialized = false;

    const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

    function ensureGlowElements() {
        const sideBar = document.querySelector('.side-bar');
        if (!sideBar) return false;

        const inners = Array.from(sideBar.querySelectorAll('.b-sidebar-inner'));
        if (!inners.length) return false;

        glowGroups = inners.map(inner => {
            let ambient = inner.querySelector(':scope > .cursor-glow-ambient');
            if (!ambient) {
                ambient = document.createElement('div');
                ambient.className = 'cursor-glow-ambient';
                inner.insertBefore(ambient, inner.firstChild);
            }

            const wrappers = Array.from(inner.querySelectorAll('.keyboard-focusable-button-wrapper'));
            wrappers.forEach(wrapper => {
                if (!wrapper.querySelector(':scope > .cursor-glow-disc')) {
                    const disc = document.createElement('div');
                    disc.className = 'cursor-glow-disc';
                    wrapper.insertBefore(disc, wrapper.firstChild);
                }
            });

            return { container: inner, ambient, wrappers };
        });

        return true;
    }

    function updateGlow() {
        if (!glowGroups.length || glowGroups.some(g => !g.container.isConnected)) {
            if (!ensureGlowElements()) return;
        }

        glowGroups.forEach(group => {
            const containerRect = group.container.getBoundingClientRect();
            const relX = ((mouseX - containerRect.left) / containerRect.width) * 100;
            const relY = ((mouseY - containerRect.top) / containerRect.height) * 100;
            const containerX = clamp(relX, 0, 100);
            const containerY = clamp(relY, 0, 100);

            const centerX = containerRect.left + containerRect.width / 2;
            const centerY = containerRect.top + containerRect.height / 2;
            const distToCenter = Math.hypot(mouseX - centerX, mouseY - centerY);
            let containerIntensity = 1 - clamp(distToCenter / CONTAINER_MAX_DIST, 0, 1);
            containerIntensity = Math.max(0, containerIntensity);

            const alpha = MAX_CONTAINER_OPACITY * containerIntensity;
            group.ambient.style.background = `radial-gradient(circle at ${containerX}% ${containerY}%,
                rgba(255, 215, 0, ${alpha}) 0%,
                transparent 80%)`;

            group.wrappers.forEach(wrapper => {
                const disc = wrapper.querySelector(':scope > .cursor-glow-disc');
                if (!disc) return;

                const rect = wrapper.getBoundingClientRect();
                const btnCenterX = rect.left + rect.width / 2;
                const btnCenterY = rect.top + rect.height / 2;

                const dx = mouseX - btnCenterX;
                const dy = mouseY - btnCenterY;
                const dist = Math.hypot(dx, dy);

                let unitX = 0, unitY = 0;
                if (dist > 0.001) {
                    unitX = dx / dist;
                    unitY = dy / dist;
                }

                let glowX = 50 + 50 * unitX;
                let glowY = 50 + 50 * unitY;
                glowX = clamp(glowX, 0, 100);
                glowY = clamp(glowY, 0, 100);

                const intensity = Math.max(0, 1 - dist / BUTTON_MAX_DIST);
                const opacity = intensity * MAX_BORDER_OPACITY + 0.1;

                disc.style.setProperty('--glow-x', `${glowX}%`);
                disc.style.setProperty('--glow-y', `${glowY}%`);
                disc.style.setProperty('--glow-opacity', opacity);
            });
        });
    }

    let topBarGlowEl = null;
    let topBarEl = null;
    const TOPBAR_MAX_DIST = 520;
    const MAX_TOPBAR_OPACITY = 0.55;

    function ensureTopBarGlowElement() {
        const topBar = document.querySelector('.top-bar');
        if (!topBar) return false;
        topBarEl = topBar;

        let existing = topBar.querySelector(':scope > .top-bar-glow-border');
        if (!existing) {
            existing = document.createElement('div');
            existing.className = 'top-bar-glow-border';
            topBar.appendChild(existing);
        }
        topBarGlowEl = existing;
        return true;
    }

    function updateTopBarGlow() {
        if (!topBarEl || !topBarGlowEl) {
            if (!ensureTopBarGlowElement()) return;
        }

        const rect = topBarEl.getBoundingClientRect();
        const relX = clamp(((mouseX - rect.left) / rect.width) * 100, 0, 100);

        const barBottom = rect.top + rect.height;
        const distFromBar = Math.abs(mouseY - barBottom);
        const intensity = Math.max(0, 1 - distFromBar / TOPBAR_MAX_DIST);
        const opacity = intensity * MAX_TOPBAR_OPACITY;

        topBarGlowEl.style.setProperty('--tb-glow-x', `${relX}%`);
        topBarGlowEl.style.setProperty('--tb-glow-opacity', opacity);
    }

    function resetTopBarGlow() {
        if (topBarGlowEl) topBarGlowEl.style.setProperty('--tb-glow-opacity', '0');
    }

    function initTopBarGlow() {
        if (!ensureTopBarGlowElement()) {
            const obs = new MutationObserver(() => {
                if (ensureTopBarGlowElement()) {
                    obs.disconnect();
                    updateTopBarGlow();
                }
            });
            obs.observe(document.body, { childList: true, subtree: true });
        }
    }

    function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
            updateGlow();
            updateTopBarGlow();
        });
    }

    function resetGlow() {
        glowGroups.forEach(group => {
            group.wrappers.forEach(wrapper => {
                const disc = wrapper.querySelector(':scope > .cursor-glow-disc');
                if (disc) disc.style.setProperty('--glow-opacity', '0');
            });
            if (group.ambient) {
                group.ambient.style.background = 'radial-gradient(circle at center, transparent 0%, transparent 100%)';
            }
        });
        resetTopBarGlow();
    }

    function onScroll() {
        if (mouseX || mouseY) {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                updateGlow();
                updateTopBarGlow();
            });
        }
    }

    function initGlow() {
        if (glowInitialized) {
            glowGroups = [];
            updateGlow();
            return;
        }
        glowInitialized = true;

        if (!ensureGlowElements()) {
            glowObserver = new MutationObserver(() => {
                if (ensureGlowElements()) {
                    glowObserver.disconnect();
                    glowObserver = null;
                    updateGlow();
                }
            });
            glowObserver.observe(document.body, { childList: true, subtree: true });
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseleave', resetGlow);
        window.addEventListener('blur', resetGlow);
        window.addEventListener('scroll', onScroll, { passive: true });

        updateGlow();
        updateTopBarGlow();
    }
}


// report fixed
function fixedReport() {
  'use strict';

  const LIST_URL = (yearId) => `/students/student-ui/my-reports/academic-year-id/${yearId}?format=javascript`;
  const DOWNLOAD_URL = (id) => `/externally-generated-report-card/download/id/${id}/?format=json`;

  const EASE = 'cubic-bezier(.22,1,.36,1)';
  const RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  // pdf.js without a Web Worker (CSP-safe): the worker file is @require'd, so run it on the main thread
  if (window.pdfjsLib) {
    const w = window['pdfjs-dist/build/pdf.worker'];
    if (w && !window.pdfjsWorker) window.pdfjsWorker = w;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  // Debug helper: window.arxRaw[reportId] holds every text row the script read from that PDF
  window.arxRaw = window.arxRaw || {};

  // =====================================================================
  // Data helpers
  // =====================================================================
  function findToken() {
    for (const store of [localStorage, sessionStorage]) {
      try {
        for (let i = 0; i < store.length; i++) {
          const v = store.getItem(store.key(i));
          if (!v) continue;
          const m = v.match(/eyJ[\w-]+\.[\w-]+\.[\w-]+/);
          if (m) return m[0];
        }
      } catch (e) { /* storage blocked */ }
    }
    return null;
  }

  async function getJSON(url) {
    const headers = { accept: 'application/json, text/plain, */*' };
    let res = await fetch(url, { credentials: 'same-origin', headers });
    if (res.status === 401 || res.status === 403) {
      const token = findToken();
      if (token) res = await fetch(url, { credentials: 'same-origin', headers: { ...headers, authorization: 'Bearer ' + token } });
    }
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    return res.json();
  }

  function walk(node, visit) {
    if (Array.isArray(node)) return node.forEach((n) => walk(n, visit));
    if (node && typeof node === 'object') {
      visit(node);
      Object.values(node).forEach((v) => walk(v, visit));
    }
  }

  async function loadYear(yearId) {
    const data = await getJSON(LIST_URL(yearId));
    const years = [], reports = [], seen = new Set();
    walk(data, (n) => {
      if (n.componentName === 'Arbor.selector.PageToggle' && n.props && n.props.options) {
        n.props.options.forEach((o) => {
          const m = String(o.value).match(/academic-year-id\/(\d+)/);
          if (m && !years.some((y) => y.id === m[1])) years.push({ id: m[1], label: String(o.label) });
        });
      }
      if (n.componentName === 'Arbor.container.PropertyRow' && n.props && n.props.url &&
          n.props.url.includes('/view-student-report-card/report-card/')) {
        const id = n.props.url.split('/').pop().split('_')[1];
        if (seen.has(id)) return;
        seen.add(id);
        reports.push({
          id,
          title: String(n.props.value || 'Report'),
          date: String(n.props.fieldLabel || '').replace(/\u00a0/g, ' ').trim(),
        });
      }
    });
    return { years, reports };
  }

  async function fetchPdf(reportId) {
    const res = await fetch(DOWNLOAD_URL(reportId), {
      method: 'POST',
      credentials: 'same-origin',
      headers: { accept: '*/*', 'content-type': 'application/json', 'x-requested-with': 'XMLHttpRequest' },
      body: JSON.stringify({ fields: {} }),
    });
    if (!res.ok) throw new Error(`Download request failed (${res.status})`);
    const json = await res.json();
    const url = json && json.action_params && json.action_params.downloadUrl;
    if (!url) throw new Error('No download URL in response');
    let file;
    try {
      file = await fetch(url, { credentials: 'same-origin' });
    } catch (e) {
      const err = new Error('Blocked fetching the file (CSP/network)');
      err.fallbackUrl = url;
      throw err;
    }
    if (!file.ok) throw new Error(`File fetch failed (${file.status})`);
    return { blob: await file.blob(), url };
  }

  // Rebuild rows of cells from pdf.js text items using x/y positions
  async function extractPages(pdf) {
    const pages = [];
    for (let p = 1; p <= pdf.numPages; p++) {
      const page = await pdf.getPage(p);
      const content = await page.getTextContent();
      const items = content.items
        .filter((it) => it.str && it.str.trim())
        .map((it) => ({ t: it.str, x: it.transform[4], y: it.transform[5], w: it.width || 0, hh: it.height || 10 }));
      items.sort((a, b) => b.y - a.y || a.x - b.x);
      const lines = [];
      items.forEach((it) => {
        const last = lines[lines.length - 1];
        if (last && Math.abs(last.y - it.y) <= 3) last.items.push(it);
        else lines.push({ y: it.y, items: [it] });
      });
      const rows = lines.map((L) => {
        L.items.sort((a, b) => a.x - b.x);
        const cells = [];
        let prevEnd = null;
        L.items.forEach((it) => {
          const thr = Math.max(9, it.hh * 1.1);
          const c = cells[cells.length - 1];
          if (c && it.x - prevEnd <= thr) c.t += (it.x - prevEnd > 1 ? ' ' : '') + it.t;
          else cells.push({ t: it.t, x: it.x });
          prevEnd = it.x + it.w;
          cells[cells.length - 1].x2 = prevEnd;
        });
        cells.forEach((c) => { c.t = c.t.replace(/\s+/g, ' ').trim(); c.cx = (c.x + c.x2) / 2; });
        return cells.filter((c) => c.t);
      }).filter((r) => r.length);
      pages.push(rows);
    }
    return pages;
  }

  // =====================================================================
  // Report parsing (9 = top grade)
  // =====================================================================
  function gradeOf(t) {
    t = String(t).trim();
    let m = t.match(/^([1-9])\s*([+\-−])?$/);
    if (m) return { raw: t, v: +m[1] + (m[2] === '+' ? 0.25 : m[2] ? -0.25 : 0) };
    m = t.match(/^([1-9])\s*[–\-\/]\s*([1-9])$/);
    if (m) return { raw: t, v: (+m[1] + +m[2]) / 2 };
    return null;
  }

  const SUBJECT_WORDS = /\b(english|literature|language|maths?|mathematics|further|science|sciences|physics|chemistry|biology|geography|history|games|pe|physical|art|design|technology|music|drama|french|spanish|german|latin|greek|mandarin|chinese|italian|computer|computing|ict|business|economics|psychology|sociology|politics|religious|religion|rs|re|pshe|citizenship|food|nutrition|textiles|media|photography|dance|statistics|classics|philosophy|ethics|theology|dt)\b/i;
  const TEACHER_RE = /\b(?:Mr|Mrs|Miss|Ms|Mx|Dr|Prof)\.?\s+[A-Z][\w'’\-]*\.?(?:\s+[A-Z][\w'’\-]*\.?)?/g;

  function isPerson(x) {
    if (/^(mr|mrs|miss|ms|mx|dr|prof)\b/i.test(x)) return true;
    if (SUBJECT_WORDS.test(x)) return false;
    if (/^[A-Z]\.?\s+[A-Z][a-z'’\-]+/.test(x)) return true;                    // J Smith
    if (/^[A-Z][a-z'’\-]+,\s*[A-Z]/.test(x)) return true;                      // Smith, J
    if (/^[A-Z][a-z'’\-]+(\s+[A-Z][a-z'’\-]+){1,2}$/.test(x)) return true;     // John Smith
    return false;
  }

  // Turns "Geography: Year 11: 11A/Ge Miss Hancox" into "Geography", or null if it isn't a subject
  function cleanSubject(t) {
    let x = String(t).replace(TEACHER_RE, ' ');
    x = x.split(':')[0];
    x = x.replace(/\([^)]*\)/g, ' ')
      .replace(/\b\d{1,2}[A-Za-z]{1,3}\s*\/\s*[A-Za-z0-9]+\b/g, ' ')
      .replace(/\b(year|yr)\s*\d+\b/gi, ' ');
    x = x.replace(/\s+/g, ' ').replace(/^[\s\-–,.;/]+|[\s\-–,.;/]+$/g, '');
    if (!/[A-Za-z]{3}/.test(x) || x.length > 40) return null;
    if (gradeOf(x)) return null;
    if (/^(subject|teacher|class|set|name|target|current|grade|effort|attitude|comment|attendance|report|page|year|form)\b/i.test(x)) return null;
    if (isPerson(x)) return null;
    return x;
  }

  const norm = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const subjectKey = (n) => norm(n).replace(/^mathematics$/, 'maths').replace(/^physical education$/, 'pe');

  function parseReport(pages) {
    const rows = pages.flat();
    const info = rows.map((row) => ({ row, gi: row.map((c, i) => (gradeOf(c.t) ? i : -1)).filter((i) => i >= 0) }));
    const raw = [];

    info.forEach((o, ri) => {
      if (!o.gi.length) return;
      const pre = o.row.slice(0, o.gi[0]).map((c) => c.t);
      const list = pre.map(cleanSubject).filter(Boolean);
      let name = list.find((n) => SUBJECT_WORDS.test(n));
      if (!name) {
        // the subject may sit on a line above the grades (with the teacher below it)
        for (let k = ri - 1; k >= Math.max(0, ri - 3); k--) {
          if (info[k].gi.length) break;
          const l = info[k].row.map((c) => cleanSubject(c.t)).filter(Boolean).find((n) => SUBJECT_WORDS.test(n));
          if (l) { name = l; break; }
        }
      }
      if (!name) name = list[0];
      if (!name) return;
      raw.push({ name, cells: o.gi.map((i) => ({ cx: o.row[i].cx, g: gradeOf(o.row[i].t) })) });
    });

    // grade columns, found by x position so missing cells don't shift anything
    const xs = [];
    raw.forEach((r) => r.cells.forEach((c) => xs.push(c.cx)));
    xs.sort((a, b) => a - b);
    const cols = [];
    xs.forEach((x) => {
      const last = cols[cols.length - 1];
      if (last && x - last.max <= 18) { last.max = x; last.sum += x; last.n++; }
      else cols.push({ max: x, sum: x, n: 1 });
    });
    cols.forEach((c) => (c.cx = c.sum / c.n));

    // column titles from the header row above the first data row
    const firstRi = info.findIndex((o) => o.gi.length);
    let hdr = null;
    for (let k = firstRi - 1; k >= Math.max(0, firstRi - 6); k--) {
      if (info[k].gi.length) break;
      const r = info[k].row;
      if (r.length >= 2 && (!hdr || r.length > hdr.length)) hdr = r;
    }
    const used = new Set();
    const labels = cols.map((c, i) => {
      let lab = 'Grade ' + (i + 1);
      if (hdr) {
        let best = null, bd = 70;
        hdr.forEach((h2) => { const d = Math.abs(h2.cx - c.cx); if (d < bd) { bd = d; best = h2; } });
        if (best) lab = best.t;
      }
      let u = lab, n = 2;
      while (used.has(norm(u))) u = lab + ' ' + n++;
      used.add(norm(u));
      return u;
    });

    const subjects = [], keys = new Set();
    raw.forEach((r) => {
      const grades = new Array(cols.length).fill(null);
      r.cells.forEach((c) => {
        let bi = 0, bd = Infinity;
        cols.forEach((col, i) => { const d = Math.abs(col.cx - c.cx); if (d < bd) { bd = d; bi = i; } });
        if (!grades[bi]) grades[bi] = c.g;
      });
      let name = r.name, key = subjectKey(name), n = 2;
      while (keys.has(key)) { name = r.name + ' (' + n + ')'; key = subjectKey(name); n++; }
      keys.add(key);
      subjects.push({ name, key, grades });
    });
    return { subjects, labels };
  }

  // =====================================================================
  // DOM + animation helpers (no innerHTML, no inline style attributes: CSP-safe)
  // =====================================================================
  function anim(el, frames, opts) {
    if (RM || !el || !el.animate) return null;
    return el.animate(frames, Object.assign({ duration: 220, easing: EASE, fill: 'backwards' }, opts));
  }
  const fade = (el, delay = 0) =>
    anim(el, [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { delay });

  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) {
      for (const [k, v] of Object.entries(props)) {
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'css') {
          for (const [ck, cv] of Object.entries(v)) {
            if (ck.startsWith('--')) el.style.setProperty(ck, cv); else el.style[ck] = cv;
          }
        } else if (k.startsWith('on')) el[k] = v;
        else el.setAttribute(k, v);
      }
    }
    kids.flat().forEach((c) => c != null && c !== false && el.append(c));
    return el;
  }
  const NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs, ...kids) {
    const el = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs || {})) el.setAttribute(k, v);
    kids.flat().forEach((c) => c != null && el.append(c));
    return el;
  }
  const chevron = () =>
    s('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      s('polyline', { points: '6 9 12 15 18 9' }));

  const loader = (text) => h('div', { class: 'arx-msg' }, h('span', { class: 'arx-spin' }), h('span', { class: 'lt', text }));
  const setLoader = (el, text) => { const l = el.querySelector('.lt'); if (l) l.textContent = text; };
  const fmt = (v) => String(Math.round(v * 100) / 100);
  const sign = (d) => (Math.abs(d) < 0.005 ? '0' : (d > 0 ? '+' : '−') + fmt(Math.abs(d)));
  const chip = (g, big) => h('span', { class: 'arx-g' + (big ? ' lg' : ''), text: g.raw });
  function deltaPill(diff) {
    if (diff == null) return h('span', { class: 'arx-d n', text: '—' });
    const k = Math.abs(diff) < 0.005 ? 'n' : diff > 0 ? 'u' : 'd';
    return h('span', { class: 'arx-d ' + k, text: (k === 'u' ? '▲ ' : k === 'd' ? '▼ ' : '') + sign(diff) });
  }

  // =====================================================================
  // Components
  // =====================================================================
  const openMenus = new Set();
  document.addEventListener('mousedown', (e) => {
    openMenus.forEach((m) => { if (!m.el.contains(e.target)) m.close(); });
  });

  function Dropdown(options, value, onChange, o = {}) {
    let opts = options, val = value, isOpen = false;
    const label = h('span', { class: 'lbl' });
    const btn = h('button', { class: 'arx-pill', type: 'button' }, label, chevron());
    const menu = h('div', { class: 'arx-menu' + (o.left ? ' l' : '') });
    const el = h('div', { class: 'arx-dd' }, btn, menu);
    menu.style.display = 'none';
    const api = { el, close, set, setOptions };

    function render() {
      const cur = opts.find((x) => String(x.value) === String(val));
      label.textContent = cur ? cur.label : opts[0] ? opts[0].label : '—';
      menu.textContent = '';
      opts.forEach((x) => {
        const it = h('div', { class: 'arx-mi' + (String(x.value) === String(val) ? ' sel' : ''), text: x.label });
        it.onclick = () => { val = x.value; render(); close(); if (onChange) onChange(x.value); };
        menu.append(it);
      });
    }
    function open() {
      if (isOpen) return;
      isOpen = true; openMenus.add(api);
      menu.style.display = 'block'; el.classList.add('open');
      anim(menu, [{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }], { duration: 160 });
    }
    function close() {
      if (!isOpen) return;
      isOpen = false; openMenus.delete(api); el.classList.remove('open');
      menu.style.display = 'none';
    }
    function set(v) { val = v; render(); }
    function setOptions(op, v) { opts = op; if (v !== undefined) val = v; render(); }
    btn.onclick = () => (isOpen ? close() : open());
    render();
    return api;
  }

  function Segmented(options, value, onChange) {
    let val = value;
    const ind = h('span', { class: 'ind' });
    const btns = options.map((o) => {
      const b = h('button', { type: 'button', class: 'arx-seg-b', text: o.label });
      b.onclick = () => { val = o.value; layout(); if (onChange) onChange(o.value); };
      return { o, b };
    });
    const el = h('div', { class: 'arx-seg' }, ind, btns.map((x) => x.b));
    function layout() {
      const cur = btns.find((x) => x.o.value === val);
      btns.forEach((x) => x.b.classList.toggle('on', x === cur));
      if (!cur || !cur.b.offsetWidth) return;
      ind.style.width = cur.b.offsetWidth + 'px';
      ind.style.transform = `translateX(${cur.b.offsetLeft}px)`;
    }
    if (window.ResizeObserver) new ResizeObserver(layout).observe(el);
    return { el, layout };
  }

  // Step-line chart in the dashboard style. cfg.idle = keep the latest point/tooltip visible when not hovering.
  function Chart(cfg) {
    const H = cfg.height || 160, PX = 14, PY = 16;
    const svg = s('svg', { height: H });
    const guide = h('div', { class: 'arx-guide' });
    const tip = h('div', { class: 'arx-tip' });
    const plot = h('div', { class: 'arx-plot' }, svg, guide, tip);
    plot.style.height = H + 'px';
    const xl = h('div', { class: 'arx-xl' });
    const el = h('div', { class: 'arx-chart' }, plot, xl);
    let W = 0, dots = [], lo = 1, hi = 9;
    const n = () => cfg.labels.length;
    const X = (i) => (n() < 2 ? W / 2 : PX + (i * (W - 2 * PX)) / (n() - 1));
    const Y = (v) => H - PY - ((v - lo) / (hi - lo)) * (H - 2 * PY);

    function stepPath(pts, bleed) {
      let d = bleed ? `M 0 ${pts[0].y} L ${pts[0].x} ${pts[0].y}` : `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i], m = (a.x + b.x) / 2;
        d += ` C ${m} ${a.y}, ${m} ${b.y}, ${b.x} ${b.y}`;
      }
      if (bleed) d += ` L ${W} ${pts[pts.length - 1].y}`;
      return d;
    }

    function hide() {
      guide.style.opacity = '0';
      tip.style.opacity = '0';
      dots.forEach((x) => (x.d.style.opacity = '0'));
    }
    function idleOrHide() { if (cfg.idle && n()) showAt(n() - 1); else hide(); }

    function showAt(i) {
      if (!n()) return;
      const x = X(i);
      guide.style.left = x + 'px';
      guide.style.opacity = '1';
      tip.textContent = '';
      tip.append(h('div', { class: 'th', text: (cfg.tips || cfg.labels)[i] }));
      const rows = [];
      dots.forEach(({ se, d }) => {
        const v = se.vals[i];
        if (v == null) { d.style.opacity = '0'; return; }
        d.style.opacity = '1';
        d.style.left = x + 'px';
        d.style.top = Y(v) + 'px';
        rows.push({ se, v });
      });
      rows.sort((a, b) => b.v - a.v).forEach(({ se, v }) => {
        tip.append(h('div', { class: 'tr' },
          cfg.single ? null : h('i', { css: { background: se.color } }),
          h('span', { text: cfg.single ? 'Average' : se.name }),
          h('b', { text: fmt(v) })));
      });
      const flip = x > W / 2;
      tip.style.left = (flip ? x - 12 : x + 12) + 'px';
      tip.style.transform = flip ? 'translateX(-100%)' : 'none';
      tip.style.top = Math.max(4, Math.min(8, H - tip.offsetHeight - 4)) + 'px';
      tip.style.opacity = rows.length ? '1' : '0';
    }

    function draw() {
      svg.textContent = '';
      svg.setAttribute('width', W);
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      plot.querySelectorAll('.arx-dot').forEach((d) => d.remove());
      dots = [];

      const all = [];
      cfg.series.forEach((se) => { if (se.on !== false) se.vals.forEach((v) => v != null && all.push(v)); });
      lo = 1; hi = 9;
      if (all.length) {
        lo = Math.max(1, Math.floor(Math.min(...all)) - 1);
        hi = Math.min(9, Math.ceil(Math.max(...all)) + 1);
        if (hi - lo < 3) { lo = Math.max(1, hi - 3); hi = Math.min(9, lo + 3); }
      }
      for (let g = Math.ceil(lo); g <= hi; g++) {
        svg.append(
          s('line', { x1: 0, x2: W, y1: Y(g), y2: Y(g), stroke: 'rgba(255,255,255,.06)' }),
          s('text', { x: 0, y: Y(g) - 4, fill: 'rgba(255,255,255,.35)', 'font-size': 11 }, String(g)));
      }

      cfg.series.forEach((se) => {
        if (se.on === false) return;
        const pts = [];
        se.vals.forEach((v, i) => { if (v != null) pts.push({ x: X(i), y: Y(v) }); });
        if (!pts.length) return;
        const d = stepPath(pts, !!cfg.single);
        if (cfg.single) svg.append(s('path', { d: d + ` L ${W} ${H} L 0 ${H} Z`, fill: 'rgba(232,194,0,.07)' }));
        svg.append(s('path', { d, fill: 'none', stroke: se.color, 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
        pts.forEach((p) => svg.append(s('circle', { cx: p.x, cy: p.y, r: 2.5, fill: se.color })));
        const dot = h('div', { class: 'arx-dot' });
        dot.style.setProperty('--c', se.color);
        plot.append(dot);
        dots.push({ se, d: dot });
      });

      xl.textContent = '';
      const step = Math.ceil(n() / Math.max(2, Math.floor(W / 90)));
      cfg.labels.forEach((t, i) => {
        if ((n() - 1 - i) % step) return;
        const sp = h('span', { text: t });
        sp.style.left = Math.min(W - 30, Math.max(30, X(i))) + 'px';
        xl.append(sp);
      });
      idleOrHide();
    }

    plot.addEventListener('pointermove', (e) => {
      const r = plot.getBoundingClientRect();
      const i = n() < 2 ? 0 : Math.round((e.clientX - r.left - PX) / ((W - 2 * PX) / (n() - 1)));
      showAt(Math.max(0, Math.min(n() - 1, i)));
    });
    plot.addEventListener('pointerleave', idleOrHide);
    new ResizeObserver(() => {
      const w = Math.floor(plot.clientWidth);
      if (w && w !== W) { W = w; draw(); }
    }).observe(plot);

    return { el, update: (patch) => { Object.assign(cfg, patch); if (W) draw(); } };
  }

  // =====================================================================
  // Styles
  // =====================================================================
  const CSS = `
    html.arx-on .main-content-wrapper > .ext-layout-renderer-container { display: none !important; }
    @keyframes arx-rot { to { transform: rotate(360deg); } }
    #arx-root { --tx:#ececea; --mu:#a6a6a0; --di:#7f7f79; --ln:rgba(255,255,255,.08); --ln2:rgba(255,255,255,.16);
      --ac:#e8c200; --c1:#151516; --c0:#0b0b0c; --hd:#1b1a15;
      display:flex; flex-direction:column; gap:14px; margin:16px 0; color:var(--tx);
      font-size:14px; line-height:1.4; box-sizing:border-box; }
    #arx-root *, #arx-root *::before, #arx-root *::after { box-sizing:border-box; }
    #arx-root button { font:inherit; }

    #arx-root .arx-card { border-radius:12px !important; border:1px solid var(--ln);
      background:linear-gradient(155deg,var(--c1),var(--c0)); }
    #arx-root .arx-head { display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;
      padding:14px 20px; border-radius:19px 19px 0 0; border-bottom:1px solid var(--ln);
      background:linear-gradient(135deg,var(--hd),#101011); }
    #arx-root .arx-head.solo { border-bottom:0; border-radius:19px; }
    #arx-root .arx-title { margin:0; font-size:18px; font-weight:600; color:var(--tx); }
    #arx-root .arx-ctl { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
    #arx-root .arx-cpad { padding:18px 20px 20px; }
    #arx-root .arx-stack { display:flex; flex-direction:column; gap:14px; }
    #arx-root .arx-two { display:grid; grid-template-columns:repeat(auto-fit,minmax(360px,1fr)); gap:14px; }

    #arx-root .arx-pill { display:inline-flex; align-items:center; gap:8px; padding:7px 14px; border-radius:999px;
      border:1px solid var(--ln2); background:rgba(255,255,255,.03); backdrop-filter: blur(4px) !important; color:var(--tx); cursor:pointer;
      transition:background .16s ${EASE}, border-color .16s ${EASE}; }
    #arx-root .arx-pill:hover { background:rgba(255,255,255,.07); }
    #arx-root .arx-pill svg { width:13px; height:13px; color:var(--mu); transition:transform .2s ${EASE}; }
    #arx-root .arx-dd { position:relative; }
    #arx-root .arx-dd.open .arx-pill svg { transform:rotate(180deg); }
    #arx-root .arx-menu { position:absolute; right:0; top:calc(100% + 6px); z-index:60; min-width:100%; max-height:300px; overflow:auto;
      padding:5px; border-radius:14px; background:#15151650; border:1px solid var(--ln2);backdrop-filter: blur(4px) !important; box-shadow:0 12px 30px rgba(0,0,0,.55); }


    #arx-root .arx-menu.l { right:auto; left:0; }
    #arx-root .arx-mi { padding:8px 12px; border-radius:9px; color:var(--mu); cursor:pointer; white-space:nowrap;
      transition:background .14s ${EASE}, color .14s ${EASE}; }
    #arx-root .arx-mi:hover { background:rgba(255,255,255,.06); color:var(--tx); }
    #arx-root .arx-mi.sel { color:var(--ac); }

    #arx-root .arx-seg { position:relative; display:inline-flex; padding:3px; border-radius:999px;
      border:1px solid var(--ln2); background:rgba(255,255,255,.03); }
    #arx-root .arx-seg .ind { position:absolute; top:3px; bottom:3px; left:0; width:0; border-radius:999px;
      background:rgba(255,255,255,.09); transition:transform .22s ${EASE}, width .22s ${EASE}; }
    #arx-root .arx-seg-b { position:relative; z-index:1; border:0; background:transparent; color:var(--mu);
      padding:6px 14px; border-radius:999px; cursor:pointer; transition:color .16s ${EASE}; }
    #arx-root .arx-seg-b:hover { color:var(--tx); }
    #arx-root .arx-seg-b.on { color:var(--ac); }

    #arx-root .arx-btn { border:1px solid var(--ln2); background:rgba(255,255,255,.03); color:var(--tx);
      border-radius:999px; padding:5px 12px; cursor:pointer; transition:background .16s ${EASE}; }
    #arx-root .arx-btn:hover { background:rgba(255,255,255,.08); }
    #arx-root .arx-zoom { display:inline-flex; align-items:center; gap:6px; }
    #arx-root .arx-zoom .zoom { min-width:44px; text-align:center; color:var(--mu); font-size:13px; }

    #arx-root .arx-notice { padding:10px 16px; border-radius:12px; color:var(--mu); background:rgba(255,255,255,.03); border:1px solid var(--ln); }
    #arx-root .arx-msg { display:flex; align-items:center; gap:10px; padding:14px 4px; color:var(--mu); }
    #arx-root .arx-msg.err { color:#f08a84; }
    #arx-root .arx-msg a { color:var(--ac); }
    #arx-root .arx-spin { width:14px; height:14px; border-radius:50%; border:2px solid rgba(255,255,255,.15);
      border-top-color:var(--mu); animation:arx-rot .8s linear infinite; flex:0 0 auto; }
    #arx-root .arx-empty { padding:36px 16px; text-align:center; color:var(--di); }

    /* reports */
    #arx-root .arx-grid { display:flex; gap:14px; align-items:flex-start; flex-wrap:wrap; }
    #arx-root .arx-list { flex:0 0 300px; max-width:100%; display:flex; flex-direction:column; gap:8px; }
    #arx-root .arx-item { padding:12px 16px; border-radius:14px; border:1px solid var(--ln); cursor:pointer;
      background:rgba(255,255,255,.02); transition:background .16s ${EASE}, border-color .16s ${EASE}; }
    #arx-root .arx-item:hover { background:rgba(255,255,255,.05); border-color:var(--ln2); }
    #arx-root .arx-item.active { border-color:rgba(232,194,0,.5); background:rgba(232,194,0,.05); }
    #arx-root .arx-item .t { font-weight:600; font-size:15px; color:var(--tx); }
    #arx-root .arx-item .d { font-size:13px; color:var(--mu); margin-top:2px; }
    #arx-root .arx-viewer { flex:1 1 440px; min-width:0; }
    #arx-root .arx-vbar { display:flex; align-items:center; gap:8px; flex-wrap:wrap; padding:12px 16px;
      border-radius:19px 19px 0 0; border-bottom:1px solid var(--ln); background:linear-gradient(135deg,var(--hd),#101011); }
    #arx-root .arx-vbar .ttl { flex:1 1 140px; min-width:0; font-weight:600; font-size:16px;
      overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #arx-root .arx-vbody { max-height:78vh; overflow:auto; padding:14px; }
    #arx-root .arx-vbody canvas { display:block; margin:0 auto 12px; border-radius:6px; background:#fff; max-width:none; }

    /* grade chip + delta */
    #arx-root .arx-g { display:inline-flex; align-items:center; justify-content:center; min-width:34px; padding:3px 10px;
      border-radius:999px; font-weight:600; font-size:14px; white-space:nowrap;
      background:rgba(255,255,255,.07); border:1px solid var(--ln); color:var(--tx); }
    #arx-root .arx-g.lg { min-width:46px; font-size:18px; padding:4px 14px; }
    #arx-root .arx-d { display:inline-flex; align-items:center; padding:2px 9px; border-radius:999px; font-size:13px; font-weight:600; white-space:nowrap; }
    #arx-root .arx-d.u { color:#7fd49a; background:rgba(127,212,154,.12); }
    #arx-root .arx-d.d { color:#f08a84; background:rgba(240,138,132,.12); }
    #arx-root .arx-d.n { color:var(--di); background:rgba(255,255,255,.05); }

    /* chart */
    #arx-root .arx-plot { position:relative; width:100%; }
    #arx-root .arx-plot svg { display:block; overflow:visible; }
    #arx-root .arx-guide { position:absolute; top:0; bottom:0; width:1px; opacity:0; pointer-events:none;
      background:rgba(255,255,255,.2); transition:left .14s ${EASE}, opacity .14s ${EASE}; }
    #arx-root .arx-dot { position:absolute; width:9px; height:9px; margin:-4.5px 0 0 -4.5px; border-radius:50%; opacity:0;
      pointer-events:none; background:var(--c); box-shadow:0 0 0 3px rgba(11,11,12,.9);
      transition:left .14s ${EASE}, top .14s ${EASE}, opacity .14s ${EASE}; }
    #arx-root .arx-tip { position:absolute; top:6px; z-index:3; opacity:0; pointer-events:none; padding:8px 12px; border-radius:10px;
      background:rgba(21,21,22,.96); border:1px solid var(--ln2); font-size:13px; white-space:nowrap;
      transition:left .14s ${EASE}, opacity .14s ${EASE}; }
    #arx-root .arx-tip .th { color:var(--mu); margin-bottom:4px; }
    #arx-root .arx-tip .tr { display:flex; align-items:center; gap:7px; line-height:1.5; }
    #arx-root .arx-tip .tr i { width:8px; height:8px; border-radius:50%; flex:0 0 auto; }
    #arx-root .arx-tip .tr b { margin-left:auto; padding-left:16px; color:var(--tx); }
    #arx-root .arx-xl { position:relative; height:22px; margin-top:10px; }
    #arx-root .arx-xl span { position:absolute; top:0; transform:translateX(-50%); font-size:13px; color:var(--mu); white-space:nowrap; }

    /* overview */
    #arx-root .arx-stat { display:flex; align-items:baseline; flex-wrap:wrap; gap:6px 14px; padding:18px 20px 0; }
    #arx-root .arx-stat .num { font-size:52px; font-weight:600; line-height:1; }
    #arx-root .arx-stat .lab { color:var(--mu); font-size:15px; }
    #arx-root .arx-chips { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px; }
    #arx-root .arx-chip { display:inline-flex; align-items:center; gap:7px; padding:5px 12px; border-radius:999px; cursor:pointer;
      border:1px solid var(--ln); background:transparent; color:var(--di); font-size:13px;
      transition:background .16s ${EASE}, color .16s ${EASE}, border-color .16s ${EASE}; }
    #arx-root .arx-chip i { width:9px; height:9px; border-radius:50%; opacity:.35; transition:opacity .16s ${EASE}; }
    #arx-root .arx-chip.on { color:var(--tx); background:rgba(255,255,255,.05); border-color:var(--ln2); }
    #arx-root .arx-chip.on i { opacity:1; }
    #arx-root .arx-bd { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:12px; }
    #arx-root .arx-sc { padding:14px 16px; border-radius:14px; border:1px solid var(--ln); background:rgba(255,255,255,.02);
      transition:border-color .16s ${EASE}; }
    #arx-root .arx-sc:hover { border-color:var(--ln2); }
    #arx-root .arx-sc .nm { font-weight:600; margin-bottom:10px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #arx-root .arx-sc .rw { display:flex; align-items:center; justify-content:space-between; gap:8px; }
    #arx-root .mbars { display:flex; align-items:flex-end; gap:4px; height:34px; margin-top:12px; }
    #arx-root .mbars i { flex:1; min-width:3px; border-radius:2px; background:rgba(255,255,255,.18); }
    #arx-root .mbars i:last-child { background:rgba(255,255,255,.55); }

    /* compare */
    #arx-root .arx-cmpbar { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:18px; color:var(--mu); }
    #arx-root .arx-tiles { display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:10px; margin-bottom:16px; }
    #arx-root .arx-tile { padding:12px 16px; border-radius:14px; border:1px solid var(--ln); background:rgba(255,255,255,.02); }
    #arx-root .arx-tile .v { font-size:26px; font-weight:600; line-height:1.15; }
    #arx-root .arx-tile.u .v { color:#7fd49a; }
    #arx-root .arx-tile.d .v { color:#f08a84; }
    #arx-root .arx-tile .l { font-size:13px; color:var(--mu); margin-top:2px; }
    #arx-root .arx-crows { overflow:auto; }
    #arx-root .arx-cr { display:grid; grid-template-columns:minmax(120px,1.4fr) 64px minmax(120px,2fr) 64px 84px; gap:12px;
      align-items:center; min-width:540px; padding:10px 6px; border-bottom:1px solid var(--ln); }
    #arx-root .arx-cr.hd { color:var(--di); font-size:12.5px; letter-spacing:.06em; text-transform:uppercase; }
    #arx-root .arx-cr .nm { font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #arx-root .arx-cr .c { text-align:center; }
    #arx-root .arx-cb { display:flex; flex-direction:column; gap:4px; }
    #arx-root .arx-cb .tr { height:5px; border-radius:99px; background:rgba(255,255,255,.06); overflow:hidden; }
    #arx-root .arx-cb .tr i { display:block; height:100%; border-radius:99px; }
    #arx-root .arx-cb .tr.a i { background:rgba(255,255,255,.28); }
    #arx-root .arx-cb .tr.b i { background:rgba(255,255,255,.8); }
  `;
  try {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(CSS);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  } catch (e) {
    const st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  // =====================================================================
  // State + loading
  // =====================================================================
  const state = {
    years: [], yearId: null, reports: [], active: null,
    cache: new Map(), yearCache: new Map(),
    zoom: 1, mode: 'reports', scope: 'year', measure: null, cmpA: null, cmpB: null,
    vtok: 0, mtok: 0, dtok: 0, notice: '', started: false,
  };
  let root, content, noticeEl, modeSeg, scopeDD, yearDD, listEl, viewEl;

  const yStart = (label) => parseInt(String(label), 10) || 0;
  const startYear = () => { const n = new Date(); return n.getMonth() >= 7 ? n.getFullYear() : n.getFullYear() - 1; };
  const shortLabel = (r) => { const t = r.date || r.title; return t.length > 14 ? t.slice(0, 13) + '…' : t; };
  const fullLabel = (r) => r.title + (r.date ? ' · ' + r.date : '');

  async function loadYearCached(id) {
    id = String(id);
    if (state.yearCache.has(id)) return state.yearCache.get(id);
    const { years, reports } = await loadYear(id);
    if (years.length && !state.years.length) state.years = years.slice().sort((a, b) => yStart(b.label) - yStart(a.label));
    const label = (state.years.find((y) => y.id === id) || {}).label || '';
    reports.forEach((r) => { r.yearId = id; r.yearLabel = label; });
    state.yearCache.set(id, reports);
    return reports;
  }

  function chrono(rs) {
    const t = rs.map((r) => Date.parse(r.date));
    const ok = t.every((x) => !isNaN(x));
    const idn = (r) => Number(r.id) || 0;
    return rs.map((r, i) => ({ r, t: t[i] }))
      .sort((a, b) => (ok ? a.t - b.t || idn(a.r) - idn(b.r) : idn(a.r) - idn(b.r)))
      .map((x) => x.r);
  }

  async function reportsForScope() {
    let all = [];
    if (state.scope === 'all') { for (const y of state.years) all.push(...(await loadYearCached(y.id))); }
    else all = state.reports.slice();
    const seen = new Set();
    return chrono(all.filter((r) => !seen.has(r.id) && seen.add(r.id)));
  }

  async function getReport(r) {
    if (state.cache.has(r.id)) return state.cache.get(r.id);
    if (!window.pdfjsLib) throw new Error('pdf.js did not load');
    const { blob, url } = await fetchPdf(r.id);
    const buf = await blob.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf.slice(0)), isEvalSupported: false }).promise;
    const entry = { blob, url, pdf, pages: null, parsed: null };
    state.cache.set(r.id, entry);
    return entry;
  }
  async function ensureParsed(r, entry) {
    if (!entry.pages) {
      entry.pages = await extractPages(entry.pdf);
      entry.parsed = parseReport(entry.pages);
      window.arxRaw[r.id] = entry.pages.flat().map((row) => row.map((c) => c.t));
    }
    return entry;
  }

  // ---------- analysis ----------
  function measureOptions(list) {
    const out = [];
    list.forEach((x) => {
      if (!x.parsed) return;
      x.parsed.labels.forEach((l) => { const k = norm(l); if (!out.some((o) => o.value === k)) out.push({ value: k, label: l }); });
    });
    return out;
  }
  function defaultMeasure(opts) {
    const pref = opts.find((o) => /(current|working|actual|achiev|attain|result|progress)/i.test(o.label));
    return (pref || opts[0] || { value: null }).value;
  }
  function compile(list, mk) {
    const reps = [], cols = [];
    list.forEach((x) => {
      if (!x.parsed) return;
      const ci = x.parsed.labels.findIndex((l) => norm(l) === mk);
      if (ci >= 0 && x.parsed.subjects.some((sj) => sj.grades[ci])) { reps.push(x); cols.push(ci); }
    });
    const map = new Map();
    reps.forEach((x, ri) => {
      x.parsed.subjects.forEach((sj) => {
        const g = sj.grades[cols[ri]];
        if (!g) return;
        if (!map.has(sj.key)) map.set(sj.key, { key: sj.key, name: sj.name, vals: new Array(reps.length).fill(null), raws: new Array(reps.length).fill('') });
        const m = map.get(sj.key);
        m.name = sj.name; m.vals[ri] = g.v; m.raws[ri] = g.raw;
      });
    });
    const subjects = [...map.values()];
    const avg = reps.map((_, ri) => {
      const v = subjects.map((sj) => sj.vals[ri]).filter((x) => x != null);
      return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
    });
    return { reps, subjects, avg };
  }
  function trendOf(vals) {
    let li = -1, prev = null;
    for (let i = vals.length - 1; i >= 0; i--) {
      if (vals[i] == null) continue;
      if (li < 0) li = i; else { prev = vals[i]; break; }
    }
    return { li, last: li >= 0 ? vals[li] : null, diff: li >= 0 && prev != null ? vals[li] - prev : null };
  }

  async function loadScopeData(my, status) {
    setLoader(status, 'Loading reports…');
    const reports = await reportsForScope();
    if (my !== state.mtok) return null;
    const list = [];
    for (let i = 0; i < reports.length; i++) {
      setLoader(status, `Reading reports ${i + 1}/${reports.length}…`);
      try {
        const e = await ensureParsed(reports[i], await getReport(reports[i]));
        list.push({ r: reports[i], parsed: e.parsed });
      } catch (err) {
        console.warn('[Arbor Report Viewer]', reports[i].title, err);
        list.push({ r: reports[i], parsed: null });
      }
      if (my !== state.mtok) return null;
    }
    return list;
  }

  // =====================================================================
  // View: Reports
  // =====================================================================
  function viewReports() {
    const grid = h('div', { class: 'arx-grid' });
    listEl = h('div', { class: 'arx-list' });
    viewEl = h('div', { class: 'arx-viewer arx-card' });
    viewEl.style.display = 'none';
    grid.append(listEl, viewEl);
    if (!state.reports.length) listEl.append(h('div', { class: 'arx-empty', text: 'No report cards found for this year.' }));
    state.reports.forEach((r, i) => {
      const item = h('div', { class: 'arx-item', tabindex: '0' },
        h('div', { class: 't', text: r.title }), h('div', { class: 'd', text: r.date }));
      item.onclick = () => openReport(r);
      item.onkeydown = (e) => { if (e.key === 'Enter') openReport(r); };
      r._el = item;
      listEl.append(item);
      fade(item, Math.min(i * 20, 120));
    });
    return grid;
  }

  async function openReport(r) {
    const my = ++state.vtok;
    state.active = r;
    state.reports.forEach((x) => x._el && x._el.classList.toggle('active', x === r));
    const wasHidden = viewEl.style.display === 'none';
    viewEl.style.display = 'block';
    viewEl.textContent = '';
    const body = h('div', { class: 'arx-vbody' }, loader(`Fetching "${r.title}"…`));
    viewEl.append(h('div', { class: 'arx-vbar' }, h('span', { class: 'ttl', text: r.title })), body);
    if (wasHidden) fade(viewEl);
    if (viewEl.scrollIntoView) viewEl.scrollIntoView({ behavior: 'auto', block: 'nearest' });
    try {
      const entry = await getReport(r);
      if (my !== state.vtok) return;
      renderViewer(r, entry);
    } catch (e) {
      if (my !== state.vtok) return;
      body.textContent = '';
      const msg = h('div', { class: 'arx-msg err', text: 'Error: ' + e.message });
      if (e.fallbackUrl) msg.append(' ', h('a', { href: e.fallbackUrl, target: '_blank', rel: 'noopener', text: 'Open file directly' }));
      body.append(msg);
      console.error('[Arbor Report Viewer]', e);
    }
  }

  function renderViewer(r, entry) {
    viewEl.textContent = '';
    const body = h('div', { class: 'arx-vbody' });
    const zoomLbl = h('span', { class: 'zoom' });
    const bMinus = h('button', { class: 'arx-btn', type: 'button', text: '−', 'aria-label': 'Zoom out' });
    const bPlus = h('button', { class: 'arx-btn', type: 'button', text: '+', 'aria-label': 'Zoom in' });
    const zoomBox = h('span', { class: 'arx-zoom' }, bMinus, zoomLbl, bPlus);

    async function draw() {
      const dt = ++state.dtok;
      zoomLbl.textContent = Math.round(state.zoom * 100) + '%';
      body.textContent = '';
      try { await drawPages(entry.pdf, body, dt); }
      catch (e) {
        body.textContent = '';
        body.append(h('div', { class: 'arx-msg err', text: 'Error: ' + e.message }));
        console.error('[Arbor Report Viewer]', e);
      }
    }
    const zoom = (d) => { state.zoom = Math.min(3, Math.max(0.4, +(state.zoom + d).toFixed(2))); draw(); };
    bMinus.onclick = () => zoom(-0.2);
    bPlus.onclick = () => zoom(0.2);

    const dl = h('button', { class: 'arx-btn', type: 'button', text: 'Download' });
    dl.onclick = () => {
      const u = URL.createObjectURL(new Blob([entry.blob], { type: 'application/pdf' }));
      const a = h('a', { href: u, download: (r.title || 'report').replace(/[^\w\- ]+/g, '') + '.pdf' });
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 5000);
    };
    const close = h('button', { class: 'arx-btn', type: 'button', text: '×', 'aria-label': 'Close' });
    close.onclick = () => {
      state.vtok++; state.active = null;
      viewEl.style.display = 'none';
      state.reports.forEach((x) => x._el && x._el.classList.remove('active'));
    };

    viewEl.append(h('div', { class: 'arx-vbar' }, h('span', { class: 'ttl', text: r.title }), zoomBox, dl, close), body);
    draw();
  }

  async function drawPages(pdf, body, dt) {
    const width = Math.max(300, body.clientWidth - 28) * state.zoom;
    const dpr = window.devicePixelRatio || 1;
    for (let p = 1; p <= pdf.numPages; p++) {
      if (dt !== state.dtok) return;
      const page = await pdf.getPage(p);
      const base = page.getViewport({ scale: 1 });
      const vp = page.getViewport({ scale: width / base.width });
      const canvas = h('canvas');
      canvas.width = Math.floor(vp.width * dpr);
      canvas.height = Math.floor(vp.height * dpr);
      canvas.style.width = Math.floor(vp.width) + 'px';
      canvas.style.height = Math.floor(vp.height) + 'px';
      await page.render({
        canvasContext: canvas.getContext('2d'), viewport: vp,
        transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null,
      }).promise;
      if (dt !== state.dtok) return;
      body.append(canvas);
      fade(canvas);
    }
  }

  // =====================================================================
  // View: Overview
  // =====================================================================
  const PALETTE = ['#e8c547', '#8ab4f8', '#81c995', '#f28b82', '#c58af9', '#fdba74', '#78d9ec', '#f48fb1', '#a8b5a2', '#d0d0cc', '#b39ddb', '#ffab91'];

  function asyncView(render) {
    const box = h('div', { class: 'arx-stack' });
    const status = loader('Loading reports…');
    box.append(status);
    const my = state.mtok;
    loadScopeData(my, status).then((list) => { if (list) render(box, list); }).catch((e) => {
      box.textContent = '';
      box.append(h('div', { class: 'arx-msg err', text: 'Error: ' + e.message }));
      console.error('[Arbor Report Viewer]', e);
    });
    return box;
  }
  const viewOverview = () => asyncView(renderOverview);
  const viewCompare = () => asyncView(renderCompare);

  function renderOverview(box, list) {
    box.textContent = '';
    const mopts = measureOptions(list);
    if (!mopts.some((o) => o.value === state.measure)) state.measure = defaultMeasure(mopts);
    const data = compile(list, state.measure);
    if (!data.reps.length) {
      box.append(h('div', { class: 'arx-card' }, h('div', { class: 'arx-empty', text: 'No grades recognised in these reports yet. In the browser console, run copy(JSON.stringify(arxRaw)) to share what the script reads.' })));
      return;
    }
    const mdd = mopts.length > 1 ? Dropdown(mopts, state.measure, (v) => { state.measure = v; renderOverview(box, list); }) : null;
    const labels = data.reps.map((x) => shortLabel(x.r));
    const tips = data.reps.map((x) => fullLabel(x.r));
    const tr = trendOf(data.avg);

    // overall average
    const chartA = Chart({ labels, tips, single: true, idle: true, height: 150, series: [{ name: 'Average', color: '#e8c200', vals: data.avg }] });
    const cardA = h('div', { class: 'arx-card' },
      h('div', { class: 'arx-head' }, h('h2', { class: 'arx-title', text: 'Overall average' }), mdd ? mdd.el : null),
      h('div', { class: 'arx-stat' },
        h('span', { class: 'num', text: tr.last != null ? tr.last.toFixed(1) : '—' }),
        h('div', { class: 'lab', text: 'average · ' + data.reps[Math.max(0, tr.li)].r.title }),
        tr.diff != null ? deltaPill(tr.diff) : null),
      h('div', { class: 'arx-cpad' }, chartA.el));

    // all subjects (tooltip only on hover)
    const series = data.subjects.map((sj, i) => ({ name: sj.name, color: PALETTE[i % PALETTE.length], vals: sj.vals, on: true }));
    const chartB = Chart({ labels, tips, series, idle: false, height: 300 });
    const chips = h('div', { class: 'arx-chips' }, series.map((se) => {
      const c = h('button', { class: 'arx-chip on', type: 'button' }, h('i', { css: { background: se.color } }), se.name);
      c.onclick = () => { se.on = !se.on; c.classList.toggle('on', se.on); chartB.update({ series }); };
      return c;
    }));
    const cardB = h('div', { class: 'arx-card' },
      h('div', { class: 'arx-head' }, h('h2', { class: 'arx-title', text: 'Subjects' })),
      h('div', { class: 'arx-cpad' }, chips, chartB.el));

    // breakdown
    const sorted = data.subjects.slice().sort((a, b) => (trendOf(b.vals).last || 0) - (trendOf(a.vals).last || 0));
    const bd = h('div', { class: 'arx-bd' }, sorted.map((sj) => {
      const t = trendOf(sj.vals);
      const bars = h('div', { class: 'mbars' }, sj.vals.map((v, k) => {
        const b = h('i', { title: tips[k] + (v != null ? ': ' + sj.raws[k] : '') });
        b.style.height = (v == null ? 0 : Math.max(8, (v / 9) * 100)) + '%';
        return b;
      }));
      return h('div', { class: 'arx-sc' },
        h('div', { class: 'nm', text: sj.name, title: sj.name }),
        h('div', { class: 'rw' }, t.last != null ? chip({ raw: sj.raws[t.li] }, true) : h('span', { text: '—' }), deltaPill(t.diff)),
        bars);
    }));
    const cardC = h('div', { class: 'arx-card' },
      h('div', { class: 'arx-head' }, h('h2', { class: 'arx-title', text: 'Subject breakdown' })),
      h('div', { class: 'arx-cpad' }, bd));

    box.append(h('div', { class: 'arx-two' }, cardA, cardB), cardC);
    fade(cardA); fade(cardB, 40); fade(cardC, 80);
    const skipped = list.length - data.reps.length;
    if (skipped > 0) box.append(h('div', { class: 'arx-notice', text: `${skipped} report${skipped > 1 ? 's' : ''} had no recognisable grades for this column and ${skipped > 1 ? 'were' : 'was'} left out.` }));
  }

  // =====================================================================
  // View: Compare
  // =====================================================================
  function renderCompare(box, list) {
    box.textContent = '';
    const mopts = measureOptions(list);
    if (!mopts.some((o) => o.value === state.measure)) state.measure = defaultMeasure(mopts);
    const reps = compile(list, state.measure).reps;
    if (reps.length < 2) {
      box.append(h('div', { class: 'arx-card' }, h('div', { class: 'arx-empty', text: 'You need at least two reports with recognisable grades to compare. Try the "All years" scope.' })));
      return;
    }
    const ids = reps.map((x) => String(x.r.id));
    if (!ids.includes(String(state.cmpA))) state.cmpA = ids[ids.length - 2];
    if (!ids.includes(String(state.cmpB))) state.cmpB = ids[ids.length - 1];
    const ropts = reps.map((x) => ({ value: String(x.r.id), label: fullLabel(x.r) }));
    const res = h('div');
    const ddA = Dropdown(ropts, state.cmpA, (v) => { state.cmpA = v; draw(); }, { left: true });
    const ddB = Dropdown(ropts, state.cmpB, (v) => { state.cmpB = v; draw(); }, { left: true });
    const mdd = mopts.length > 1 ? Dropdown(mopts, state.measure, (v) => { state.measure = v; renderCompare(box, list); }) : null;

    const tile = (cls, label, value) => h('div', { class: 'arx-tile ' + cls }, h('div', { class: 'v', text: value }), h('div', { class: 'l', text: label }));
    const mkBar = (v, cls) => {
      const f = h('i');
      f.style.width = (v == null ? 0 : (v / 9) * 100) + '%';
      return h('div', { class: 'tr ' + cls }, f);
    };

    function draw() {
      res.textContent = '';
      const A = reps.find((x) => String(x.r.id) === String(state.cmpA));
      const B = reps.find((x) => String(x.r.id) === String(state.cmpB));
      if (!A || !B) return;
      const ca = compile([A], state.measure), cb = compile([B], state.measure);
      const map = new Map();
      ca.subjects.forEach((sj) => map.set(sj.key, { name: sj.name, a: sj.vals[0], ar: sj.raws[0], b: null, br: '' }));
      cb.subjects.forEach((sj) => {
        let o = map.get(sj.key);
        if (!o) { o = { name: sj.name, a: null, ar: '', b: null, br: '' }; map.set(sj.key, o); }
        o.name = sj.name; o.b = sj.vals[0]; o.br = sj.raws[0];
      });
      const rows = [...map.values()].sort((x, y) => (y.b == null ? -1 : y.b) - (x.b == null ? -1 : x.b));
      const diffs = rows.filter((o) => o.a != null && o.b != null).map((o) => o.b - o.a);
      const up = diffs.filter((d) => d > 0.01).length;
      const down = diffs.filter((d) => d < -0.01).length;
      const avgD = diffs.length ? diffs.reduce((a, b) => a + b, 0) / diffs.length : 0;

      const tl = h('div', { class: 'arx-tiles' },
        tile('u', 'Improved', String(up)),
        tile('', 'Unchanged', String(diffs.length - up - down)),
        tile('d', 'Declined', String(down)),
        tile(avgD > 0.005 ? 'u' : avgD < -0.005 ? 'd' : '', 'Average change', sign(avgD)));

      const crows = h('div', { class: 'arx-crows' },
        h('div', { class: 'arx-cr hd' },
          h('span', { text: 'Subject' }), h('span', { class: 'c', text: shortLabel(A.r) }),
          h('span', { text: '' }), h('span', { class: 'c', text: shortLabel(B.r) }), h('span', { class: 'c', text: 'Change' })),
        rows.map((o) => h('div', { class: 'arx-cr' },
          h('span', { class: 'nm', text: o.name, title: o.name }),
          h('span', { class: 'c' }, o.a != null ? chip({ raw: o.ar }) : '—'),
          h('div', { class: 'arx-cb' }, mkBar(o.a, 'a'), mkBar(o.b, 'b')),
          h('span', { class: 'c' }, o.b != null ? chip({ raw: o.br }) : '—'),
          h('span', { class: 'c' }, deltaPill(o.a != null && o.b != null ? o.b - o.a : null)))));
      res.append(tl, crows);
      fade(res);
    }

    const card = h('div', { class: 'arx-card' },
      h('div', { class: 'arx-head' }, h('h2', { class: 'arx-title', text: 'Compare reports' }), mdd ? mdd.el : null),
      h('div', { class: 'arx-cpad' },
        h('div', { class: 'arx-cmpbar' }, h('span', { text: 'From' }), ddA.el, h('span', { text: 'to' }), ddB.el),
        res));
    box.append(card);
    fade(card);
    draw();
  }

  // =====================================================================
  // Shell
  // =====================================================================
  function syncHead() {
    scopeDD.el.style.display = state.mode === 'reports' ? 'none' : '';
    yearDD.el.style.display = state.mode !== 'reports' && state.scope === 'all' ? 'none' : '';
  }

  function renderMode() {
    state.vtok++; state.mtok++;
    content.textContent = '';
    noticeEl.style.display = state.notice && state.mode === 'reports' ? 'block' : 'none';
    noticeEl.textContent = state.notice;
    const v = state.mode === 'overview' ? viewOverview() : state.mode === 'compare' ? viewCompare() : viewReports();
    content.append(v);
    fade(v);
  }

  function setMode(m) { state.mode = m; syncHead(); renderMode(); }

  async function selectYear(id) {
    state.yearId = String(id);
    yearDD.set(state.yearId);
    state.active = null;
    state.vtok++; state.mtok++;
    content.textContent = '';
    content.append(loader('Loading…'));
    try {
      state.reports = await loadYearCached(id);
      renderMode();
    } catch (e) {
      content.textContent = '';
      content.append(h('div', { class: 'arx-msg err', text: 'Error: ' + e.message }));
      console.error('[Arbor Report Viewer]', e);
    }
  }

  async function init() {
    content.append(loader('Loading…'));
    try {
      const m = location.href.match(/academic-year-id\/(\d+)/);
      await loadYearCached(m ? m[1] : 2);
      const cs = startYear();
      let cands = state.years.filter((y) => yStart(y.label) <= cs);
      if (!cands.length) cands = state.years.slice();
      let chosen = null;
      for (const y of cands.slice(0, 6)) {
        const r = await loadYearCached(y.id);
        if (r.length) { chosen = y; break; }
      }
      if (!chosen) chosen = cands[0] || { id: m ? m[1] : '2', label: '' };
      if (cands[0] && chosen.id !== cands[0].id) state.notice = `Can't find ${cands[0].label} reports yet, so ${chosen.label} has been loaded.`;
      yearDD.setOptions(state.years.map((y) => ({ value: y.id, label: y.label })), chosen.id);
      await selectYear(chosen.id);
    } catch (e) {
      content.textContent = '';
      content.append(h('div', { class: 'arx-msg err', text: 'Error: ' + e.message }));
      console.error('[Arbor Report Viewer]', e);
      state.started = false;
    }
  }

  function build() {
    modeSeg = Segmented(
      [{ value: 'reports', label: 'Reports' }, { value: 'overview', label: 'Overview' }, { value: 'compare', label: 'Compare' }],
      state.mode, setMode);
    scopeDD = Dropdown([{ value: 'year', label: 'Selected year' }, { value: 'all', label: 'All years' }], state.scope,
      (v) => { state.scope = v; syncHead(); renderMode(); });
    yearDD = Dropdown([], '', (v) => { state.notice = ''; selectYear(v); });
    noticeEl = h('div', { class: 'arx-notice' });
    noticeEl.style.display = 'none';
    content = h('div', { class: 'arx-content' });
    root = h('div', { id: 'arx-root' },
      h('div', { class: 'arx-card' },
        h('div', { class: 'arx-head solo' },
          h('h2', { class: 'arx-title', text: 'Report cards' }),
          h('div', { class: 'arx-ctl' }, modeSeg.el, scopeDD.el, yearDD.el))),
      noticeEl, content);
    syncHead();
  }

  // Arbor is a single-page app: mount on My Reports, unmount elsewhere
  function tick() {
    const on = location.href.includes('my-reports');
    const host = document.querySelector('.main-content-wrapper');
    if (!on || !host) {
      document.documentElement.classList.remove('arx-on');
      if (root && root.isConnected) root.remove();
      return;
    }
    if (!root) build();
    if (!host.contains(root)) {
      const title = host.querySelector('.column-title');
      if (title && title.parentNode === host) title.after(root);
      else host.prepend(root);
      document.documentElement.classList.add('arx-on');
      fade(root);
      modeSeg.layout();
    }
    if (!state.started) { state.started = true; init(); }
  }
  setInterval(tick, 700);
  tick();
}



// better navs
function betterNav() {
    'use strict';

    const STYLE_ID = 'brune-better-navigation-style';

    function addStyles() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = STYLE_ID;

        style.textContent = `
            .burger-menu-container {
                box-sizing: border-box !important;
                width: 248px !important;
                min-width: 248px !important;
                padding: 14px 10px !important;
                gap: 13.5px !important;
                align-items: center !important;
                -webkit-backdrop-filter: blur(7px) saturate(140%) !important;
                backdrop-filter: blur(7px) saturate(140%) !important;
                border: 1px solid rgba(255, 255, 255, .09) !important;
                border-radius: 18px !important;
                box-shadow: 0 16px 44px rgba(0, 0, 0, .28) !important;
                color: #f4f2fa !important;
                left: 10px;
                top: 62px;




                background: rgb(20 20 27 / 29%) !important;
    backdrop-filter: blur(18px) saturate(140%) !important;
    -webkit-backdrop-filter: blur(18px) saturate(140%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
            }


             .burger-menu__sub-nav-container, .burger-menu-container>:not(:first-child) {
   display: flex !important;
   }
.burger-menu-button__wrapper {    transform: translate(8vh, 0px); }


            .burger-menu-container .side-bar-button__wrapper {
                display: flex !important;
                width: 100% !important;
                min-height: 46px !important;
                box-sizing: border-box !important;
                align-items: center !important;
                justify-content: flex-start !important;
                padding: 0 13px !important;
                border: 1px solid transparent !important;
                border-radius: 12px !important;
                background: transparent !important;
                color: inherit !important;
                text-align: left !important;
                cursor: pointer !important;
                transition: background .18s ease,
                            border-color .18s ease,
                            transform .18s ease !important;
            }


            .burger-menu__sub-nav-container, .burger-menu-container>:not(:first-child) {
    display: flex !important;
}

            .burger-menu-container .side-bar-button__wrapper:active {
                transform: scale(.985) !important;
            }

            .burger-menu__sub-nav-container, .burger-menu-container>:not(:first-child) { display: flex !important; }

            .burger-menu-container .side-bar-button {
                width: 100% !important;
                color: inherit !important;

                display: flex !important;
    flex-direction: row;
    justify-content: space-around;
    align-items: center !important;
    border-radius: 2px !important;
    padding: 10px;
    gap: 0px !important;
    scale: 0.9;
            }

            .burger-menu-container .side-bar-button__icon {
                display: inline-flex !important;
                flex: 0 0 22px !important;
                width: 22px !important;
                height: 22px !important;
                align-items: center !important;
                justify-content: center !important;
            }

            .burger-menu-container .side-bar-button__icon svg {
                display: block !important;
                width: 20px !important;
                height: 20px !important;
            }

            .burger-menu-container .side-bar-button__text {
                display: block !important;
                flex: 1 1 auto !important;
                min-width: 0 !important;
                color: #f4f2fa !important;
                font: 500 14px/1.35 -apple-system,
                      BlinkMacSystemFont, "Segoe UI", sans-serif !important;
                letter-spacing: .1px !important;
                white-space: nowrap !important;
                opacity: 1 !important;
                visibility: visible !important;
            }

            .burger-menu-container .dropdown-container,
            .burger-menu-container .dropdown-field-wrapper,
            .burger-menu-container .burger-menu__navigation-container {
                width: 100% !important;
            }

            .burger-menu-container .navigation-root__item__wrapper {
                width: 100% !important;
                min-height: 42px !important;
                border-radius: 10px !important;
                color: #e9e5f2 !important;
            }

            .burger-menu-container button:focus-visible {
                outline: 2px solid #b58aff !important;
                outline-offset: 2px !important;
            }

            @media (max-width: 520px) {
                .burger-menu-container {
                    width: min(248px, calc(100vw - 24px)) !important;
                    min-width: 0 !important;
                }
            }
        `;

        document.head.appendChild(style);
    }

    function enhanceMenu(menu) {
        if (!menu) return;

        // Apply inline styles when the menu appears.
        menu.setAttribute('style', [
            'background: rgba(20, 20, 27, .88)',
            'backdrop-filter: blur(18px) saturate(140%)',
            '-webkit-backdrop-filter: blur(18px) saturate(140%)',
            'display: flex',
            'flex-direction: column',
            'align-items: stretch'
        ].join('; ') + ';');

        menu.querySelectorAll('.side-bar-button__wrapper')
            .forEach((button) => {
                if (!button.hasAttribute('style')) {
                    button.setAttribute(
                        'style',
                        'width: 100%; box-sizing: border-box;     border: 1px transparent solid !important; background: none !important;'

                    );
                }

                const label = button.querySelector(
                    '.side-bar-button__text'
                );
                label.setAttribute('style', '    width: min-content !important; overflow: hidden;flex: none !important;')

                if (label) {
                    const name = label.textContent.trim();

                    if (name) {
                        label.setAttribute('aria-label', name);
                        button.setAttribute('aria-label', name);
                    }

                    return;
                }

                const icon = button.querySelector(
                    '.side-bar-button__icon'
                );

                if (!icon) return;

                const svg = icon.querySelector('svg');
                const pathData = svg ? svg.innerHTML : '';
                let name = '';

                if (/M20\.5886|M20\.588/i.test(pathData)) {
                    name = 'Home';
                } else if (/clip0_6659_3130|M10 12C0\.19778/i.test(pathData)) {
                    name = 'My Calendar';
                } else if (/M9\.29 13\.29|M9\.29/i.test(pathData)) {
                    name = 'Help Centre';
                } else if (/M10\.5899 11|M10\.589/i.test(pathData)) {
                    name = 'Sign Out';
                }

                if (name) {
                    const text = document.createElement('span');

                    text.className = 'side-bar-button__text';
                    text.textContent = name;

                    button.querySelector('.side-bar-button')
                        ?.appendChild(text);
                    button.querySelector('.side-bar-button').setAttribute('style','border-radius: 0px !important;display: flex !important;flex-direction: row;justify-content: space-around;align-items: center !important;padding: 10px;gap: 0px !important;scale: 0.9;');

                    button.setAttribute('aria-label', name);
                }
            });
    }

    function run() {
        addStyles();

        document.querySelectorAll('.burger-menu-container')
            .forEach(enhanceMenu);
    }

    run();

    const observer = new MutationObserver(() => run());

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });
}




// welcome settings
function settings() {
  'use strict';

  if (window.__settingsUserscript) return;

  const BUTTON_TEXT = "Settings";

  const pfpManager = {
    keyCustom: "arborCustomPFP",
    keyOriginal: "arborOriginalPFP",
    getImg() {
      return document.querySelector("img.info-panel-picture-inner");
    },
    getCustom() {
      try { return localStorage.getItem(this.keyCustom); } catch (e) { return null; }
    },
    getOriginal() {
      try { return localStorage.getItem(this.keyOriginal); } catch (e) { return null; }
    },
    current() {
      const img = this.getImg();
      return this.getCustom() || this.getOriginal() || (img && img.src) || "";
    },
    applyCustomStyle(img) {
      img.style.margin = "0px";
      img.style.width = "100%";
      img.style.height = "100%";
    },
    applyOriginalStyle(img) {
      img.style.margin = "3px";
      img.style.width = "92px";
      img.style.height = "92px";
    },
    init() {
      const img = this.getImg();
      if (!img) return false;

      try {
        if (!localStorage.getItem(this.keyOriginal) && !this.getCustom()) {
          localStorage.setItem(this.keyOriginal, img.src);
        }
      } catch (e) {}

      const custom = this.getCustom();
      if (custom) {
        if (img.src !== custom) img.src = custom;
        this.applyCustomStyle(img);
      } else {
        this.applyOriginalStyle(img);
      }
      return true;
    },
    shrink(dataUrl, size) {
      return new Promise((res) => {
        const im = new Image();
        im.onload = () => {
          const s = Math.min(im.width, im.height);
          const c = document.createElement("canvas");
          c.width = c.height = size;
          const ctx = c.getContext("2d");
          ctx.drawImage(im, (im.width - s) / 2, (im.height - s) / 2, s, s, 0, 0, size, size);
          res(c.toDataURL("image/jpeg", 0.9));
        };
        im.onerror = () => res(dataUrl);
        im.src = dataUrl;
      });
    },
    readFile(file) {
      return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onload = (e) => res(e.target.result);
        reader.onerror = () => rej(new Error("read failed"));
        reader.readAsDataURL(file);
      });
    },
    async setFromFile(file) {
      if (!file || !file.type || file.type.indexOf("image/") !== 0) {
        return { ok: false, error: "That file isn't an image." };
      }
      let data;
      try {
        data = await this.shrink(await this.readFile(file), 256);
      } catch (e) {
        return { ok: false, error: "Couldn't read that file." };
      }
      try {
        localStorage.setItem(this.keyCustom, data);
      } catch (e) {
        return { ok: false, error: "Couldn't save that picture. Try a smaller image." };
      }
      const img = this.getImg();
      if (img) {
        img.src = data;
        this.applyCustomStyle(img);
      }
      return { ok: true };
    },
    resetToOriginal() {
      if (!this.getCustom()) return false;
      const img = this.getImg();
      const original = this.getOriginal();
      try { localStorage.removeItem(this.keyCustom); } catch (e) {}
      if (img && original) {
        img.src = original;
        this.applyOriginalStyle(img);
      }
      return true;
    }
  };

  pfpManager.init();
  new MutationObserver(() => {
    const img = pfpManager.getImg();
    const custom = pfpManager.getCustom();
    if (img && custom && img.src !== custom) pfpManager.init();
    else if (img && !pfpManager.getOriginal()) pfpManager.init();
  }).observe(document.documentElement, { childList: true, subtree: true });

  const STUDENT_URL = "/auth/current-user-settings/format/json?from=session.initialiseSession";
  let studentCache = null;

  function decodeJwt(token) {
    try {
      const p = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(decodeURIComponent(escape(atob(p))));
    } catch (e) { return {}; }
  }

  async function getStudent(force) {
    if (studentCache && !force) return studentCache;
    const r = await fetch(STUDENT_URL, {
      credentials: "same-origin",
      headers: { accept: "application/json, text/plain, */*" }
    });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const j = await r.json();
    const it = (j.items && j.items[0]) || {};
    const jwt = decodeJwt(it.jwt || "");
    const sid = /student-id\/(\d+)/.exec(it.calendarUrl || "");
    studentCache = {
      name: it.display_name || "Unknown",
      username: jwt.email || "—",
      studentId: sid ? sid[1] : "—",
      userId: it.userId != null ? String(it.userId) : "—",
      school: it.organizationName || "—",
      type: it.user_type || "—",
      language: (it.availableLanguages && it.availableLanguages[it.language]) || it.language || "—"
    };
    return studentCache;
  }



const SECTIONS = Object.assign({
    themes: `
      <section class="settings-section">
        <h3 class="settings-section-title">Themes</h3>
        <p class="settings-section-desc">Choose the atmosphere of your workspace.</p>
      </section>
    `,
    accent: `
      <section class="settings-section">
        <h3 class="settings-section-title">Accent colour</h3>
        <p class="settings-section-desc">A little colour goes a long way.</p>
      </section>
    `,
    animations: `
      <section class="settings-section">
        <h3 class="settings-section-title">Animations</h3>
        <p class="settings-section-desc">Fine-tune the motion throughout your workspace.</p>
      </section>
    `,
    behaviour: `
      <section class="settings-section">
        <h3 class="settings-section-title">Behaviour</h3>
        <p class="settings-section-desc">Make Arbor work the way you prefer.</p>
      </section>
    `,
    navLayout: `
      <section class="settings-section">
        <h3 class="settings-section-title">Navigation & Layout</h3>
        <p class="settings-section-desc">Shape your workspace and navigation.</p>
      </section>
    `,
    importExport: `
      <section class="settings-section">
        <h3 class="settings-section-title">Import & Export</h3>
        <p class="settings-section-desc">Manage your saved preferences and configurations.</p>
      </section>
    `,
    account: `
      <section class="settings-section" style="padding:0;border:0">

        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:26px">
          <div>
            <h3 class="settings-section-title">Your account</h3>
            <p class="settings-section-desc" style="margin:5px 0 0">Personal details</p>
          </div>
          <span style="font-size:10px;color:#77796d;letter-spacing:1px">01 — PROFILE</span>
        </div>

        <div class="profile-card loading" style="background:transparent;border:0;overflow:visible">

          <div style="display:flex;align-items:center;gap:19px;padding:5px 0 25px;border-bottom:1px solid #ffffff12">

            <button class="avatar" data-action="pfp" title="Change profile picture" aria-label="Change profile picture" style="position:relative;width:88px;height:88px;min-width:88px;padding:0;overflow:hidden;border-radius:50%;border:2px solid #d7df1f55;background:#25251e;cursor:pointer">
              <img class="avatar-img" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%"/>
              <span class="avatar-fallback"></span>
              <span class="avatar-edit">
                <svg viewBox="0 0 24 24"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                <span>Edit</span>
              </span>
            </button>

            <div class="profile-id" style="flex:1;min-width:0">
              <div style="font-size:10px;color:#929382;letter-spacing:1.3px;font-weight:600;margin-bottom:7px">[NOT PUBLIC]</div>
              <div class="profile-name" data-field="name" style="font-size:23px;font-weight:650;letter-spacing:-.8px;color:#f0eee5;line-height:1.2">Loading…</div>
              <div class="profile-user" data-field="username" style="margin-top:5px;font-size:13px;color:#8b8d80"></div>
              <span class="profile-badge" data-field="type" style="display:inline-block;margin-top:10px;padding:4px 9px;border-radius:20px;background:#d7df1f12;color:#d7df1f;font-size:10px;font-weight:600;letter-spacing:.3px"></span>
            </div>

          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;margin:24px 0 8px">
            <div style="font-size:11px;color:#e1dfd4;font-weight:650;letter-spacing:.3px">Personal information</div>
            <div style="font-size:10px;color:#696b61">ACCOUNT DETAILS</div>
          </div>

          <div style="display:flex;flex-direction:column">

            <div style="display:flex;align-items:center;justify-content:space-between;gap:15px;padding:15px 0;border-bottom:1px solid #ffffff0b">
              <div>
                <div style="font-size:12px;color:#e1dfd4;font-weight:550">Student ID</div>
                <div style="font-size:10px;color:#73766c;margin-top:4px">Arbor student reference</div>
              </div>
              <div data-field="studentId" style="font-size:12px;color:#b9b9a9;text-align:right;overflow-wrap:anywhere">—</div>
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;gap:15px;padding:15px 0;border-bottom:1px solid #ffffff0b">
              <div>
                <div style="font-size:12px;color:#e1dfd4;font-weight:550">User ID</div>
                <div style="font-size:10px;color:#73766c;margin-top:4px">unique user reference.</div>
              </div>
              <div data-field="userId" style="font-size:12px;color:#b9b9a9;text-align:right;overflow-wrap:anywhere">—</div>
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;gap:15px;padding:15px 0;border-bottom:1px solid #ffffff0b">
              <div>
                <div style="font-size:12px;color:#e1dfd4;font-weight:550">School</div>
                <div style="font-size:10px;color:#73766c;margin-top:4px">self explanatory</div>
              </div>
              <div data-field="school" style="font-size:12px;color:#b9b9a9;text-align:right;max-width:55%;overflow-wrap:anywhere">—</div>
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;gap:15px;padding:15px 0">
              <div>
                <div style="font-size:12px;color:#e1dfd4;font-weight:550">Language</div>
                <div style="font-size:10px;color:#73766c;margin-top:4px">Arbor's set account language</div>
              </div>
              <div data-field="language" style="font-size:12px;color:#b9b9a9;text-align:right">—</div>
            </div>

          </div>

          <div class="profile-error" hidden style="margin-top:12px;color:#e58b78;font-size:11px"></div>

          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:19px;padding-top:17px;border-top:1px solid #ffffff12">
            <div style="font-size:11px;color:#77796d">Profile picture</div>
            <div style="display:flex;gap:8px">
              <button class="btn primary" data-action="pfp" style="padding:8px 13px;border:1px solid #d7df1f40;border-radius:6px;background:#d7df1f12;color:#d7df1f;font-size:11px;cursor:pointer">Change picture</button>
              <button class="btn" data-action="refresh-profile" style="padding:8px 13px;border:1px solid #ffffff14;border-radius:6px;background:#ffffff06;color:#b9b9a9;font-size:11px;cursor:pointer">↻ Refresh</button>
            </div>
          </div>

        </div>

      </section>
    `
});





  const SCRIPTS = Object.assign({
    themes: (r) => {
      const c = r.querySelectorAll(".theme-card");
      c.forEach((el) => el.addEventListener("click", () => {
        c.forEach((x) => x.classList.remove("selected"));
        el.classList.add("selected");
      }));
    },
    accent: (r) => {
      const s = r.querySelectorAll(".swatch");
      s.forEach((el) => el.addEventListener("click", () => {
        s.forEach((x) => x.classList.remove("selected"));
        el.classList.add("selected");
      }));
    },
    animations: (r) => {
      const t = r.querySelector(".toggle");
      if (t) t.addEventListener("click", () => t.classList.toggle("off"));
    },
    navLayout: (r) => {
      const c = r.querySelectorAll(".table-card");
      c.forEach((el) => el.addEventListener("click", () => {
        c.forEach((x) => x.classList.remove("selected"));
        el.classList.add("selected");
      }));
    },
    account: (r) => {
      loadProfile(r, false);
    }
  });

  const ACTIONS = {
    pfp: () => openPfp(),
    "refresh-profile": (el, e, a) => loadProfile(a.body, true)
  };

  function refreshAvatar(r) {
    const img = r.querySelector(".avatar-img");
    const fb = r.querySelector(".avatar-fallback");
    if (!img) return;
    const src = pfpManager.current();
    const name = (studentCache && studentCache.name) || "?";
    fb.textContent = name.trim().charAt(0).toUpperCase();
    if (src) {
      img.src = src;
      img.style.display = "block";
      fb.style.display = "none";
      img.onerror = () => { img.style.display = "none"; fb.style.display = "grid"; };
    } else {
      img.style.display = "none";
      fb.style.display = "grid";
    }
  }

  async function loadProfile(r, force) {
    const card = r.querySelector(".profile-card");
    const err = r.querySelector(".profile-error");
    const set = (k, v) => r.querySelectorAll('[data-field="' + k + '"]').forEach((n) => { n.textContent = v; });
    refreshAvatar(r);
    if (card && (force || !studentCache)) card.classList.add("loading");
    try {
      if (err) err.hidden = true;
      const s = await getStudent(force);
      set("name", s.name);
      set("username", s.username);
      set("type", s.type);
      set("studentId", s.studentId);
      set("userId", s.userId);
      set("school", s.school);
      set("language", s.language);
      refreshAvatar(r);
      if (card) card.classList.remove("loading");
      if (force) toast("Profile info refreshed");
    } catch (e) {
      if (card) card.classList.remove("loading");
      set("name", "Couldn't load profile");
      if (err) { err.hidden = false; err.textContent = "Failed to fetch student info (" + e.message + "). Are you logged in?"; }
    }
  }

  let cfg = {
    title: "Settings",
    categories: [
      {
        id: "general",
        label: "General",
        subcategories: [
          { id: "appearance", label: "Appearance", content: ["themes", "accent", "animations"] },
          { id: "behaviour", label: "Behaviour", content: ["behaviour"] },
          { id: "layout", label: "Nav & Layout", content: ["navLayout"] },
          { id: "io", label: "Import / Export", content: ["importExport"] }
        ]
      },
      { id: "account", label: "Account", content: ["account"] }
    ]
  };

  const CSS = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .layer { position: fixed; inset: 0; overflow: hidden; font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif; color: #f2f3f5; }
    .backdrop { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); opacity: 0; transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .vignette { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at center, transparent 42%, rgba(0, 0, 0, 0.6) 100%); opacity: 0; transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .stage { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 24px; }
    .layer.open .backdrop, .layer.open .vignette { opacity: 1; }

    .pop { position: relative; width: 100%; max-width: 820px; opacity: 0; transform: translateY(8px) scale(0.97); transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .layer.open .pop { opacity: 1; transform: none; transition: none; animation: popIn 0.375s cubic-bezier(0.3, 0.6, 0.4, 1) both; }
    @keyframes popIn {
      0% { opacity: 0; transform: translateY(36px) scale(0.78); }
      22% { opacity: 1; }
      50% { transform: translateY(-8px) scale(1.04); }
      72% { transform: translateY(3px) scale(0.99); }
      88% { transform: translateY(-1px) scale(1.004); }
      100% { opacity: 1; transform: none; }
    }

    .settings-modal {
      position: relative;
      background:
        radial-gradient(circle at var(--g1x, 15%) var(--g1y, 20%), #aed21709, transparent 40%),
        radial-gradient(circle at var(--g2x, 85%) var(--g2y, 80%), #f7921f07, transparent 45%),
        #0b0c10ba;
      display: flex;
      width: 100%;
      height: 570px;
      max-height: calc(100vh - 48px);
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid rgba(255, 215, 0, 0.09);
      backdrop-filter: blur(24px) saturate(140%);
      -webkit-backdrop-filter: blur(24px) saturate(140%);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35), 0 0 70px rgba(255, 215, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 60px rgba(255, 215, 0, 0.012);
    }

    .edge {
      position: absolute; inset: 0; z-index: 5; border-radius: 24px; padding: 1px; pointer-events: none;
      background: radial-gradient(240px circle at var(--mx, -999px) var(--my, -999px), rgb(255 246 196 / 20%), transparent 70%);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
    }

    .settings-sidebar { width: 250px; flex-shrink: 0; padding: 24px 14px; background: #17150C50; border-right: 1px solid #FFD70012; overflow-y: auto; }
    .settings-title { font-size: 22px; font-weight: 600; padding: 0 10px 22px; color: #f5c518; text-shadow: 0 0 14px rgba(255, 215, 0, 0.22); }

    .settings-nav-item {
      position: relative; display: flex; align-items: center; gap: 12px; width: 100%;
      padding: 11px 12px; margin-bottom: 4px; border: 1px solid transparent; border-radius: 12px;
      background: transparent; color: #f2f3f5; font: inherit; font-size: 14px; font-weight: 500; cursor: pointer;
      transition: all 0.15s cubic-bezier(0.06, -0.06, 0.54, 1.06) !important;
    }
    .settings-nav-item:hover { background: #17150C90; backdrop-filter: blur(4px); transform: translateX(2px); }
    .settings-nav-item:active { transform: translateX(1px) scale(0.985); }
    .settings-nav-item.active { background: rgba(255, 215, 0, 0.0075); border-color: rgba(255, 215, 0, 0.035); color: #FFD700; text-shadow: 0 0 12px rgba(255, 215, 0, 0.25); }
    .settings-nav-icon { aspect-ratio: 1/1; display: flex; flex-direction: column; justify-column: center; align-items: center; border-radius: 2px; overflow: hidden; width: 18px; height: 18px; border-radius: 5px; opacity: 0.8; transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .settings-nav-icon svg { stroke-width: 2.5px !important; }
    .settings-nav-item:hover .settings-nav-icon { opacity: 1; transform: scale(1.06); }
    .settings-nav-chevron { margin-left: auto; width: 7px; height: 7px; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; transform: rotate(45deg); opacity: 0.7; transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .settings-nav-item.open .settings-nav-chevron { transform: rotate(-135deg); }

    .settings-subnav { display: none; padding: 8px 0 12px 46px; }
    .settings-subnav.open { display: block; }
    .settings-subnav-item { display: block; padding: 8px 0; font-size: 13px; color: #8d919b; cursor: pointer; transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .settings-subnav-item:hover { color: #f2f3f5; transform: translateX(2px); }
    .settings-subnav-item.active { color: #FFD700; font-weight: 600; text-shadow: 0 0 10px rgba(255, 215, 0, 0.22); }

    .settings-content { position: relative; flex: 1; padding: 24px 28px; overflow-y: auto; }
    .settings-body > * { animation: secIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) both; }
    .settings-body > *:nth-child(2) { animation-delay: 0.04s; }
    .settings-body > *:nth-child(3) { animation-delay: 0.08s; }
    .settings-body > *:nth-child(4) { animation-delay: 0.12s; }
    @keyframes secIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }

    .settings-close {
      position: absolute; top: 20px; right: 20px; z-index: 2; width: 32px; height: 32px; border-radius: 50%;
      border: 1px solid #FFD70012; background: rgba(255, 255, 255, 0.05); color: #8d919b; cursor: pointer;
      display: grid; place-items: center;
      transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .settings-close svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
    .settings-close:hover { color: #FFD700; background: rgba(255, 215, 0, 0.08); border-color: rgba(255, 215, 0, 0.3); }
    .settings-close:hover svg { transform: rotate(90deg); }
    .settings-close:active { transform: scale(0.92); }


.section-index {
    color: #65665d;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 1px;
    white-space: nowrap;
}


.settings-section {
    position: relative;
    padding: 27px 0 30px;
    border-bottom: 1px solid rgba(255, 215, 0, .075);
}

.settings-section:first-of-type {
    padding-top: 2px;
}

.settings-section:last-of-type {
    border-bottom: 0;
    padding-bottom: 8px;
}

.settings-section-title {
    position: relative;
    width: fit-content;
    margin: 0;
    color: #f1f0e9;
    font-size: 15px;
    font-weight: 650;
    letter-spacing: -.35px;
    line-height: 1.4;
}

.settings-section-title::before {
    content: "";
    position: absolute;
    left: -13px;
    top: 4px;
    width: 3px;
    height: 12px;
    border-radius: 4px;
    background: #e6c52b;
    opacity: .85;
    box-shadow: 0 0 12px #e6c52b55;
}

.settings-section-desc {
    max-width: 480px;
    margin: 5px 0 19px;
    color: #777b84;
    font-size: 12.5px;
    font-weight: 400;
    line-height: 1.65;
    letter-spacing: .05px;
}

.settings-section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.settings-section-head .settings-section-desc {
    margin-bottom: 0;
}

.settings-section + .settings-section {
    margin-top: 2px;
}

/* Subtle interaction */
.settings-section button {
    transition: background .2s ease, border-color .2s ease,
                transform .2s ease, color .2s ease;
}

.settings-section button:focus-visible {
    outline: 1px solid #e6c52b;
    outline-offset: 3px;
}

/* Profile */
.profile-card {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 215, 0, .12);
    border-radius: 13px;
    background: linear-gradient(145deg, #ffffff07, #ffffff02 65%);
}

.profile-banner {
    height: 76px;
    background:
        radial-gradient(ellipse at 18% 100%, #c5a51c20, transparent 55%),
        linear-gradient(110deg, #d4b32312, transparent 70%);
    border-bottom: 1px solid #ffffff08;
}

.profile-main {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 20px;
    margin-top: -27px;
}

.profile-id {
    padding-top: 27px;
}

.profile-name {
    color: #f3f0e6;
    font-size: 16px;
    font-weight: 650;
    letter-spacing: -.4px;
}

.profile-user {
    margin-top: 3px;
    color: #858994;
    font-size: 12px;
}

.profile-badge {
    display: inline-flex;
    margin-top: 8px;
    padding: 3px 8px;
    border: 1px solid #e6c52b30;
    border-radius: 5px;
    background: #e6c52b0b;
    color: #dfc34e;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .3px;
}

.avatar {
    position: relative;
    flex-shrink: 0;
    width: 65px;
    height: 65px;
    padding: 0;
    overflow: hidden;
    border: 3px solid #171810;
    border-radius: 50%;
    background: #25251c;
    cursor: pointer;
}

.avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
}

.avatar-edit {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background: #000a;
    color: white;
    font-size: 9px;
    opacity: 0;
    transition: opacity .2s;
}

.avatar-edit svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
}

.avatar:hover .avatar-edit {
    opacity: 1;
}

.profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    margin: 22px 20px 0;
    overflow: hidden;
    border: 1px solid #ffffff0a;
    border-radius: 8px;
    background: #ffffff0a;
}

.profile-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    padding: 13px 14px;
    background: #151610;
}

.profile-item.wide {
    grid-column: span 2;
}

.profile-label {
    color: #777b80;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .7px;
    text-transform: uppercase;
}

.profile-value {
    overflow: hidden;
    color: #deddd5;
    font-size: 12px;
    text-overflow: ellipsis;
}

.profile-error {
    margin: 14px 20px 0;
    color: #e58b78;
    font-size: 12px;
}

.profile-actions {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 17px 20px 19px;
}

.profile-actions .btn {
    padding: 9px 13px;
    border: 1px solid #ffffff14;
    border-radius: 7px;
    background: #ffffff06;
    color: #c9c8c0;
    font-size: 11px;
    cursor: pointer;
}

.profile-actions .btn.primary {
    border-color: #e6c52b40;
    background: #e6c52b12;
    color: #e9d16a;
}

.profile-actions .btn:hover {
    border-color: #e6c52b55;
    background: #e6c52b16;
}

    .theme-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 16px; }
    .theme-card, .table-card { position: relative; border: 1px solid #FFD70012; cursor: pointer; transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .theme-card { border-radius: 14px; overflow: hidden; background: rgba(255, 255, 255, 0.05); }
    .theme-card:hover, .table-card:hover { transform: translateY(-2px); border-color: rgba(255, 215, 0, 0.18); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25); }
    .theme-card:active, .table-card:active { transform: scale(0.985); }
    .theme-card.selected { border-color: rgba(255, 215, 0, 0.55); box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.55), 0 0 24px rgba(255, 215, 0, 0.12); }
    .theme-preview { height: 104px; margin: 8px 8px 0; border-radius: 8px 8px 0 0; background: rgba(255, 255, 255, 0.08); padding: 8px; display: flex; flex-direction: column; gap: 6px; }
    .theme-preview-dots { display: flex; gap: 3px; }
    .theme-preview-dots span { width: 5px; height: 5px; border-radius: 50%; background: rgba(255, 255, 255, 0.09); }
    .theme-preview-block { flex: 1; border-radius: 5px; background: rgba(255, 255, 255, 0.09); transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .theme-card:hover .theme-preview-block { background: rgba(255, 255, 255, 0.13); }
    .theme-label { display: flex; align-items: center; gap: 10px; padding: 12px 14px; font-size: 13px; font-weight: 500; background: rgba(0, 0, 0, 0.2); }
    .radio { width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #8d919b; flex-shrink: 0; transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .theme-card:hover .radio { border-color: #f2f3f5; }
    .theme-card.selected .radio { background: #FFD700; border-color: #FFD700; box-shadow: inset 0 0 0 3px #1a1600; }

    .swatch-group { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
    .swatch-row { display: flex; align-items: center; gap: 12px; }
    .swatch { width: 20px; height: 20px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .swatch:hover { transform: scale(1.14); }
    .swatch:active { transform: scale(0.94); }
    .swatch.selected { border-color: #f2f3f5; box-shadow: 0 0 0 2px #0b0c10; }
    .swatch-navy { background: #23254a; }
    .swatch-red { background: #ef4444; }
    .swatch-green { background: #22c55e; }
    .swatch-blue { background: #3b82f6; }
    .swatch-purple { background: #a855f7; }
    .swatch-gold { background: #FFD700; }
    .custom-color { display: flex; align-items: center; gap: 12px; font-size: 12px; color: #8d919b; }
    .custom-color-input { position: relative; padding: 6px 12px; border-radius: 10px; background: rgba(255, 255, 255, 0.05); border: 1px solid #FFD70012; color: #f2f3f5; font-size: 13px; transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .custom-color-input:hover { border-color: rgba(255, 215, 0, 0.25); background: rgba(255, 255, 255, 0.07); }

    .toggle { position: relative; width: 44px; height: 24px; border-radius: 999px; background: #FFD700; cursor: pointer; transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .toggle:hover { box-shadow: 0 0 12px rgba(255, 215, 0, 0.25); }
    .toggle::after { content: ""; position: absolute; top: 3px; right: 3px; width: 18px; height: 18px; border-radius: 50%; background: #1a1600; transition: right 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .toggle.off { background: rgba(255, 255, 255, 0.12); }
    .toggle.off:hover { box-shadow: none; }
    .toggle.off::after { right: 23px; background: #8d919b; }

    .table-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 16px; }
    .table-card { height: 110px; padding: 12px; border-radius: 14px 14px 0 0; background: rgba(255, 255, 255, 0.05); display: flex; flex-direction: column; gap: 8px; }
    .table-card.selected { border-color: rgba(255, 215, 0, 0.55); box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.55); }
    .table-card-row { height: 12px; border-radius: 4px; background: rgba(255, 255, 255, 0.09); }

    .profile-card { position: relative; margin-top: 16px; border-radius: 18px; overflow: hidden; border: 1px solid #FFD70012; background: rgba(255, 255, 255, 0.035); }
    .profile-banner { height: 72px; background: linear-gradient(120deg, rgba(255, 215, 0, 0.26), rgba(247, 146, 31, 0.15) 55%, rgba(174, 210, 23, 0.12)); }
    .profile-main { display: flex; align-items: flex-start; gap: 16px; padding: 0 22px; }
    .avatar {
      position: relative; width: 84px; height: 84px; flex-shrink: 0; margin-top: -36px; border-radius: 50%; overflow: hidden; cursor: pointer; padding: 0;
      border: 3px solid #0e0f13; background: #17150C; box-shadow: 0 0 0 1.5px rgba(255, 215, 0, 0.4), 0 8px 22px rgba(0, 0, 0, 0.4);
      transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .avatar:hover { transform: scale(1.04); box-shadow: 0 0 0 1.5px #FFD700, 0 0 24px rgba(255, 215, 0, 0.22); }
    .avatar:active { transform: scale(0.97); }
    .avatar:focus-visible { outline: 2px solid #FFD700; outline-offset: 3px; }
    .avatar-img { display: none; width: 100%; height: 100%; object-fit: cover; }
    .avatar-fallback { width: 100%; height: 100%; display: grid; place-items: center; font-size: 32px; font-weight: 600; color: #FFD700; }
    .avatar-edit { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 11px; font-weight: 600; color: #fff; background: rgba(0, 0, 0, 0.55); opacity: 0; transition: opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1); }
    .avatar-edit svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; transform: translateY(4px); transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1); }
    .avatar:hover .avatar-edit, .avatar:focus-visible .avatar-edit { opacity: 1; }
    .avatar:hover .avatar-edit svg, .avatar:focus-visible .avatar-edit svg { transform: none; }
    .profile-id { flex: 1; min-width: 0; padding-top: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
    .profile-name { max-width: 100%; font-size: 17px; font-weight: 600; line-height: 1.3; color: #f2f3f5; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .profile-user { max-width: 100%; font-size: 13px; color: #8d919b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .profile-user:empty { display: none; }
    .profile-badge { display: inline-block; margin-top: 8px; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; text-transform: capitalize; color: #FFD700; background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.25); }
    .profile-badge:empty { display: none; }
    .profile-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; padding: 20px 22px 0; }
    .profile-item { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; padding: 11px 14px; border-radius: 12px; background: rgba(255, 255, 255, 0.04); border: 1px solid #FFD70012; min-width: 0; transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .profile-item:hover { border-color: rgba(255, 215, 0, 0.2); background: rgba(255, 255, 255, 0.055); }
    .profile-item.wide { grid-column: 1 / -1; }
    .profile-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #8d919b; }
    .profile-value { max-width: 100%; font-size: 14px; font-weight: 500; color: #f2f3f5; word-break: break-word; }
    .profile-actions { display: flex; gap: 10px; margin-top: 20px; padding: 14px 22px; border-top: 1px solid #FFD70012; background: rgba(0, 0, 0, 0.12); }
    .profile-error { margin: 14px 22px 0; padding: 10px 12px; border-radius: 10px; font-size: 12px; color: #ffb4b4; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); }
    .profile-error[hidden] { display: none; }

    .profile-card.loading .profile-name,
    .profile-card.loading .profile-value { color: transparent; user-select: none; border-radius: 6px; background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.05) 75%); background-size: 200% 100%; animation: shimmer 1.3s linear infinite; }
    .profile-card.loading .profile-name { min-width: 150px; }
    .profile-card.loading .profile-value { min-width: 64px; }
    @keyframes shimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }

    .btn { position: relative; font: inherit; font-size: 13px; font-weight: 500; padding: 9px 16px; border-radius: 10px; cursor: pointer; color: #f2f3f5; background: rgba(255, 255, 255, 0.06); border: 1px solid #FFD70018; transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .btn:not(:disabled):hover { background: rgba(255, 215, 0, 0.08); border-color: rgba(255, 215, 0, 0.3); color: #FFD700; }
    .btn:not(:disabled):active { transform: scale(0.97); }
    .btn:focus-visible { outline: 2px solid #FFD700; outline-offset: 2px; }
    .btn:disabled { opacity: 0.38; cursor: not-allowed; }
    .btn.primary { background: #FFD700; color: #1a1600; border-color: #FFD700; font-weight: 600; }
    .btn.primary:not(:disabled):hover { background: #ffe033; box-shadow: 0 0 16px rgba(255, 215, 0, 0.3); color: #1a1600; }
    .btn.danger { color: #c9a9a9; }
    .btn.danger:not(:disabled):hover { color: #ff9b9b; background: rgba(239, 68, 68, 0.08); border-color: rgba(239, 68, 68, 0.4); }
    .btn.danger.armed { color: #fff; background: rgba(239, 68, 68, 0.85); border-color: transparent; animation: armed 0.25s cubic-bezier(0.3, 0.6, 0.4, 1); }
    .btn.danger.armed:not(:disabled):hover { color: #fff; background: rgba(239, 68, 68, 0.95); border-color: transparent; }
    @keyframes armed { 0% { transform: scale(0.94); } 60% { transform: scale(1.03); } 100% { transform: none; } }

    .pfp-layer { position: absolute; inset: 0; z-index: 10; display: grid; place-items: center; visibility: hidden; pointer-events: none; transition: visibility 0s linear 0.2s; }
    .pfp-layer.open { visibility: visible; pointer-events: auto; transition-delay: 0s; }
    .pfp-scrim { position: absolute; inset: 0; background: rgba(5, 5, 8, 0.55); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); opacity: 0; transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
    .pfp-layer.open .pfp-scrim { opacity: 1; }
    .pfp-dialog {
      position: relative; width: 340px; max-width: calc(100% - 32px); padding: 24px 24px 20px; border-radius: 20px;
      background: linear-gradient(180deg, rgba(255, 215, 0, 0.04), transparent 40%), #101116;
      border: 1px solid rgba(255, 215, 0, 0.14);
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.06);
      opacity: 0; transform: translateY(10px) scale(0.97);
      transition: opacity 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .pfp-layer.open .pfp-dialog { opacity: 1; transform: none; }
    .pfp-dialog.busy { pointer-events: none; }
    .pfp-x { position: absolute; top: 14px; right: 14px; width: 28px; height: 28px; border-radius: 50%; border: 1px solid transparent; background: transparent; color: #8d919b; cursor: pointer; display: grid; place-items: center; transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
    .pfp-x svg { width: 12px; height: 12px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
    .pfp-x:hover { background: rgba(255, 255, 255, 0.07); color: #f2f3f5; }
    .pfp-x:hover svg { transform: rotate(90deg); }
    .pfp-x:focus-visible { outline: 2px solid #FFD700; outline-offset: 2px; }
    .pfp-title { font-size: 16px; font-weight: 600; color: #f5c518; }
    .pfp-sub { font-size: 12.5px; color: #8d919b; margin-top: 3px; }
    .pfp-preview { position: relative; width: 112px; height: 112px; margin: 20px auto 20px; border-radius: 50%; overflow: hidden; background: #17150C; box-shadow: 0 0 0 1.5px rgba(255, 215, 0, 0.4), 0 10px 28px rgba(0, 0, 0, 0.45); }
    .pfp-preview-img { display: none; width: 100%; height: 100%; object-fit: cover; }
    .pfp-preview-img.swap { animation: pfpSwap 0.35s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .pfp-preview-fb { width: 100%; height: 100%; display: grid; place-items: center; font-size: 40px; font-weight: 600; color: #FFD700; }
    .pfp-dialog.busy .pfp-preview { animation: pfpPulse 0.9s ease-in-out infinite; }
    @keyframes pfpSwap { from { opacity: 0; transform: scale(1.1); } to { opacity: 1; transform: none; } }
    @keyframes pfpPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }
    .pfp-drop { padding: 16px 14px; border-radius: 14px; border: 1.5px dashed rgba(255, 215, 0, 0.22); background: rgba(255, 255, 255, 0.025); text-align: center; font-size: 13px; color: #8d919b; cursor: pointer; transition: border-color 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.18s cubic-bezier(0.4, 0, 0.2, 1), color 0.18s cubic-bezier(0.4, 0, 0.2, 1), transform 0.18s cubic-bezier(0.4, 0, 0.2, 1); }
    .pfp-drop b { font-weight: 600; color: #f2f3f5; }
    .pfp-drop small { display: block; margin-top: 4px; font-size: 11.5px; opacity: 0.7; }
    .pfp-drop:hover, .pfp-drop:focus-visible { border-color: rgba(255, 215, 0, 0.5); background: rgba(255, 215, 0, 0.04); color: #f2f3f5; outline: none; }
    .pfp-drop.over { border-color: #FFD700; background: rgba(255, 215, 0, 0.08); color: #f2f3f5; transform: scale(1.015); }
    .pfp-actions { display: flex; gap: 10px; margin-top: 16px; }
    .pfp-actions .btn { flex: 1; padding: 10px 12px; }

    .toast { position: absolute; left: 50%; bottom: 22px; z-index: 30; padding: 10px 16px; border-radius: 999px; font-size: 13px; font-weight: 500; white-space: nowrap; pointer-events: none; color: #f2f3f5; background: rgba(23, 21, 12, 0.96); border: 1px solid rgba(255, 215, 0, 0.25); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); opacity: 0; transform: translate(-50%, 10px); transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
    .toast.show { opacity: 1; transform: translate(-50%, 0); }
    .toast.error { color: #ffb4b4; border-color: rgba(239, 68, 68, 0.45); }

    .settings-content::-webkit-scrollbar, .settings-sidebar::-webkit-scrollbar { width: 6px; }
    .settings-content::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }

    .settings-nav-item::before, .theme-card::before, .table-card::before, .custom-color-input::before, .settings-close::before {
      content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px; pointer-events: none;
      background: radial-gradient(100px circle at var(--mx, -999px) var(--my, -999px), rgba(255, 215, 0, 0.22), transparent 70%);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
    }

    @media (prefers-reduced-motion: reduce) {
      .layer.open .pop { animation: none; }
      .pfp-dialog, .pfp-scrim, .toast, .avatar, .avatar-edit svg { transition-duration: 0.01s; }
      .pfp-preview-img.swap, .pfp-dialog.busy .pfp-preview, .btn.danger.armed, .profile-card.loading .profile-name, .profile-card.loading .profile-value { animation: none; }
    }
  `;

  const host = document.createElement("div");
  host.style.cssText = "position:fixed;inset:0;z-index:2147483000;display:none;";
  const root = host.attachShadow({ mode: "open" });
  root.innerHTML = `
    <style>${CSS}</style>
    <div class="layer">
      <div class="backdrop"></div>
      <div class="vignette"></div>
      <div class="stage">
        <div class="pop">
          <div class="settings-modal">
            <aside class="settings-sidebar">
              <h2 class="settings-title"></h2>
              <nav class="settings-nav"></nav>
            </aside>
            <main class="settings-content">
              <button class="settings-close" aria-label="Close">
                <svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
              </button>
              <div class="settings-body"></div>
            </main>
            <div class="pfp-layer">
              <div class="pfp-scrim"></div>
              <div class="pfp-dialog" role="dialog" aria-modal="true" aria-label="Profile picture">
                <button class="pfp-x" aria-label="Close">
                  <svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
                </button>
                <h4 class="pfp-title">Profile picture stuf</h4>
                <p class="pfp-sub">Upload or go back to OG. GIFs are allowed ( up to a limit )</p>
                <div class="pfp-preview">
                  <img class="pfp-preview-img" alt="" />
                  <span class="pfp-preview-fb"></span>
                </div>
                <div class="pfp-drop" tabindex="0" role="button" aria-label="Choose an image">
                  Drop an image here or <b>browse</b>
                  <small>Cropped to a square automatically</small>
                </div>
                <input class="pfp-input" type="file" accept="image/*" hidden />
                <div class="pfp-actions">
                  <button class="btn danger" data-pfp="reset">Reset to original</button>
                  <button class="btn primary" data-pfp="browse">Upload new</button>
                </div>
              </div>
            </div>
            <div class="toast" role="status" aria-live="polite"></div>
          </div>
          <div class="edge"></div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(host);

  const $ = (s) => root.querySelector(s);
  const layer = $(".layer");
  const stage = $(".stage");
  const modal = $(".settings-modal");
  const edge = $(".edge");
  const nav = $(".settings-nav");
  const body = $(".settings-body");
  const titleEl = $(".settings-title");
  const closeBtn = $(".settings-close");

  const pfpLayer = $(".pfp-layer");
  const pfpDialog = $(".pfp-dialog");
  const pfpPrev = $(".pfp-preview-img");
  const pfpFb = $(".pfp-preview-fb");
  const pfpDrop = $(".pfp-drop");
  const pfpInput = $(".pfp-input");
  const pfpResetBtn = $('[data-pfp="reset"]');
  const pfpBrowseBtn = $('[data-pfp="browse"]');
  const toastEl = $(".toast");

  let pfpIsOpen = false;
  let resetArmed = false;
  let resetTimer = null;
  let toastTimer = null;

  function toast(msg, isError) {
    toastEl.textContent = msg;
    toastEl.classList.toggle("error", !!isError);
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
  }

  function armReset(on) {
    resetArmed = on;
    clearTimeout(resetTimer);
    pfpResetBtn.classList.toggle("armed", on);
    pfpResetBtn.textContent = on ? "Confirm reset" : "Reset to original";
    if (on) resetTimer = setTimeout(() => armReset(false), 3000);
  }

  function syncPfp(animate) {
    const src = pfpManager.current();
    const name = (studentCache && studentCache.name) || "?";
    pfpFb.textContent = name.trim().charAt(0).toUpperCase();
    if (src) {
      pfpPrev.src = src;
      pfpPrev.style.display = "block";
      pfpFb.style.display = "none";
      pfpPrev.onerror = () => { pfpPrev.style.display = "none"; pfpFb.style.display = "grid"; };
    } else {
      pfpPrev.style.display = "none";
      pfpFb.style.display = "grid";
    }
    if (animate) {
      pfpPrev.classList.remove("swap");
      void pfpPrev.offsetWidth;
      pfpPrev.classList.add("swap");
    }
    const hasCustom = !!pfpManager.getCustom();
    pfpResetBtn.disabled = !hasCustom;
    if (!hasCustom && resetArmed) armReset(false);
  }

  function openPfp() {
    if (pfpIsOpen) return;
    syncPfp(false);
    pfpIsOpen = true;
    pfpLayer.classList.add("open");
    setTimeout(() => pfpBrowseBtn.focus({ preventScroll: true }), 60);
  }

  function closePfp() {
    if (!pfpIsOpen) return;
    pfpIsOpen = false;
    armReset(false);
    pfpDrop.classList.remove("over");
    pfpLayer.classList.remove("open");
  }

  async function handlePfpFile(file) {
    if (!file) return;
    pfpDialog.classList.add("busy");
    const result = await pfpManager.setFromFile(file);
    pfpDialog.classList.remove("busy");
    pfpInput.value = "";
    if (result.ok) {
      syncPfp(true);
      refreshAvatar(body);
      toast("Profile picture updated");
    } else {
      toast(result.error, true);
    }
  }

  pfpBrowseBtn.addEventListener("click", () => pfpInput.click());
  pfpDrop.addEventListener("click", () => pfpInput.click());
  pfpDrop.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pfpInput.click();
    }
  });
  pfpInput.addEventListener("change", () => handlePfpFile(pfpInput.files[0]));

  ["dragenter", "dragover"].forEach((t) => pfpDrop.addEventListener(t, (e) => {
    e.preventDefault();
    pfpDrop.classList.add("over");
  }));
  pfpDrop.addEventListener("dragleave", () => pfpDrop.classList.remove("over"));
  pfpDrop.addEventListener("drop", (e) => {
    e.preventDefault();
    pfpDrop.classList.remove("over");
    handlePfpFile(e.dataTransfer && e.dataTransfer.files[0]);
  });

  pfpResetBtn.addEventListener("click", () => {
    if (!resetArmed) {
      armReset(true);
      return;
    }
    armReset(false);
    if (pfpManager.resetToOriginal()) {
      syncPfp(true);
      refreshAvatar(body);
      toast("Reset to your original picture");
    }
  });

  $(".pfp-x").addEventListener("click", closePfp);
  $(".pfp-scrim").addEventListener("mousedown", closePfp);

  const api = {
    body,
    root,
    pfp: pfpManager,
    getStudent,
    open: (b) => open(b),
    close: () => close(),
    toggle: (b) => toggle(b),
    toast,
    openPfp,
    setConfig: (json) => render(json),
    addSections: (obj) => Object.assign(SECTIONS, obj),
    addScripts: (obj) => Object.assign(SCRIPTS, obj),
    addActions: (obj) => Object.assign(ACTIONS, obj),
    openCategory: (c, s) => openCat(c, s),
    run: (code) => {
      try { return new Function("api", "body", "root", code)(api, body, root); }
      catch (e) { console.error("[settings] run error:", e); }
    }
  };

  const resolve = (list) => [].concat(list || []).map((k) => (k in SECTIONS ? SECTIONS[k] : k)).join("");

  function runInlineScripts(container) {
    container.querySelectorAll("script").forEach((old) => {
      const code = old.textContent;
      old.remove();
      api.run(code);
    });
  }

  function show(content, catId, subId) {
    body.innerHTML = resolve(content);
    [].concat(content || []).forEach((k) => {
      if (SCRIPTS[k]) {
        try { SCRIPTS[k](body, api); } catch (e) { console.error("[settings] script '" + k + "' failed:", e); }
      }
    });
    runInlineScripts(body);
    nav.querySelectorAll(".settings-nav-item").forEach((b) => b.classList.toggle("active", b.dataset.cat === catId));
    nav.querySelectorAll(".settings-subnav-item").forEach((s) => s.classList.toggle("active", s.dataset.cat === catId && s.dataset.sub === subId));
    body.parentElement.scrollTop = 0;
  }

  body.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el || !body.contains(el)) return;
    const fn = ACTIONS[el.dataset.action];
    if (fn) {
      try { fn(el, e, api); } catch (err) { console.error("[settings] action failed:", err); }
    }
  });

  function openCat(catId, subId) {
    const cat = cfg.categories.find((c) => c.id === catId);
    if (!cat) return;
    const subs = cat.subcategories || [];
    nav.querySelectorAll(".settings-nav-item").forEach((b) => b.classList.toggle("open", b.dataset.cat === catId && subs.length > 0));
    nav.querySelectorAll(".settings-subnav").forEach((s) => s.classList.toggle("open", s.dataset.cat === catId));
    if (subs.length) {
      const sub = subs.find((s) => s.id === subId) || subs[0];
      show(sub.content, cat.id, sub.id);
    } else {
      show(cat.content, cat.id, null);
    }
  }

  function render(config) {
    cfg = config || cfg;
    titleEl.textContent = cfg.title || "Settings";
    nav.innerHTML = "";
    cfg.categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "settings-nav-item";
      btn.dataset.cat = cat.id;

      let iconHtml = "";
      if (cat.label === "General") {
        iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer preview-icon"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>';
      } else if (cat.label === "Account") {
        iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round preview-icon" style="stroke-width: 2.5px !important;"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>';
      }

      btn.innerHTML = '<span class="settings-nav-icon">' + iconHtml + '</span><span class="label"></span>' +
        (cat.subcategories && cat.subcategories.length ? '<span class="settings-nav-chevron"></span>' : "");
      btn.querySelector(".label").textContent = cat.label;
      btn.addEventListener("click", () => openCat(cat.id));
      nav.appendChild(btn);
      if (cat.subcategories && cat.subcategories.length) {
        const wrap = document.createElement("div");
        wrap.className = "settings-subnav";
        wrap.dataset.cat = cat.id;
        cat.subcategories.forEach((sub) => {
          const item = document.createElement("span");
          item.className = "settings-subnav-item";
          item.dataset.cat = cat.id;
          item.dataset.sub = sub.id;
          item.textContent = sub.label;
          item.addEventListener("click", () => openCat(cat.id, sub.id));
          wrap.appendChild(item);
        });
        nav.appendChild(wrap);
      }
    });
    if (cfg.categories.length) openCat(cfg.categories[0].id);
  }

  const GLOW = ".settings-nav-item, .theme-card, .table-card, .custom-color-input, .settings-close";
  modal.addEventListener("mousemove", (e) => {
    modal.querySelectorAll(GLOW).forEach((el) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
  modal.addEventListener("mouseleave", () => {
    modal.querySelectorAll(GLOW).forEach((el) => {
      el.style.setProperty("--mx", "-999px");
      el.style.setProperty("--my", "-999px");
    });
  });

  let tx = 0.5, ty = 0.5, ta = 0;
  let cx = 0.5, cy = 0.5, ca = 0;
  let raf = 0;

  function applyBg() {
    const k1 = 0.35 * ca;
    const k2 = 0.3 * ca;
    modal.style.setProperty("--g1x", 15 + (cx * 100 - 15) * k1 + "%");
    modal.style.setProperty("--g1y", 20 + (cy * 100 - 20) * k1 + "%");
    modal.style.setProperty("--g2x", 85 + (cx * 100 - 85) * k2 + "%");
    modal.style.setProperty("--g2y", 80 + (cy * 100 - 80) * k2 + "%");
  }

  function tick() {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    ca += (ta - ca) * 0.1;
    applyBg();
    if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 || Math.abs(ta - ca) > 0.001) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = 0;
    }
  }

  function kick() {
    if (!raf) raf = requestAnimationFrame(tick);
  }

  layer.addEventListener("mousemove", (e) => {
    const r = modal.getBoundingClientRect();
    tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    ty = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    ta = 1;
    edge.style.setProperty("--mx", e.clientX - r.left + "px");
    edge.style.setProperty("--my", e.clientY - r.top + "px");
    kick();
  });

  layer.addEventListener("mouseleave", () => {
    ta = 0;
    edge.style.setProperty("--mx", "-999px");
    edge.style.setProperty("--my", "-999px");
    kick();
  });

  let isOpen = false;
  let activeBtn = null;
  let hideTimer = null;

  const isSettingsBtn = (el) => {
    const t = el && el.querySelector && el.querySelector(".side-bar-button__text");
    return !!t && t.textContent.trim().toLowerCase() === BUTTON_TEXT.toLowerCase();
  };
  const findBtn = () => [].slice.call(document.querySelectorAll(".side-bar-button")).find(isSettingsBtn) || null;

  function open(btn) {
    if (isOpen) return;
    clearTimeout(hideTimer);
    activeBtn = btn || findBtn();
    if (activeBtn) activeBtn.classList.add("b-nav-active");
    host.style.display = "block";
    void layer.offsetWidth;
    layer.classList.add("open");
    isOpen = true;
  }

  function close() {
    if (!isOpen) return;
    closePfp();
    if (activeBtn) activeBtn.classList.remove("b-nav-active");
    layer.classList.remove("open");
    isOpen = false;
    hideTimer = setTimeout(() => { host.style.display = "none"; }, 150);
  }

  function toggle(btn) {
    if (isOpen) close();
    else open(btn);
  }

  closeBtn.addEventListener("click", close);
  stage.addEventListener("mousedown", (e) => { if (e.target === stage) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (pfpIsOpen) closePfp();
    else close();
  });
  document.addEventListener("click", (e) => {
    const btn = e.target && e.target.closest && e.target.closest(".side-bar-button");
    if (btn && isSettingsBtn(btn)) toggle(btn);
  }, true);

  render(cfg);

  window.__settingsUserscript = api;
}




// announcement sys
function showAnnouncement(type, name, disclaimer, header, info1, hasImage, base64, info2, footer, version, force) {
  const MAX_SHOWS = 3;
  const ID = 'aw-announce';

  const isUpdate = Number(type) === 2;
  const storeKey = 'aw_announce_' + (isUpdate ? 'update' : 'announcement');
  const ver = String(version == null ? '1' : version);

  if (!force) {
    let rec = null;
    try { rec = JSON.parse(localStorage.getItem(storeKey) || 'null'); } catch (e) { rec = null; }
    if (!rec || rec.v !== ver) rec = { v: ver, n: 0 };
    if (rec.n >= MAX_SHOWS) return false;
    rec.n++;
    try { localStorage.setItem(storeKey, JSON.stringify(rec)); } catch (e) { /* non-fatal */ }
  }

  const old = document.getElementById(ID);
  if (old) old.remove();

  const T = isUpdate
    ? { rgb: '255,215,0', main: '#ffd700', soft: '#ffc94d', badge: 'UPDATE LOG', bg1: '#17130a', bg0: '#0b0a06', head: '#312d12' }
    : { rgb: '197,10,19',  main: '#c50a13', soft: '#ff4d55', badge: 'DEVELOPER ANNOUNCEMENT', bg1: '#1a0a0b', bg0: '#0b0506', head: '#3a0d10' };
  const c = (a) => `rgba(${T.rgb},${a})`;

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\n/g, '<br>');

  const arrow = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
  const linkLabel = (u) => {
    try {
      const x = new URL(u);
      let t = x.hostname.replace(/^www\./, '') + (x.pathname + x.search).replace(/\/$/, '');
      try { t = decodeURIComponent(t); } catch (e) { /* keep encoded */ }
      return t.length > 42 ? t.slice(0, 41) + '…' : t;
    } catch (e) { return u; }
  };
  const rich = (s) => esc(s).replace(/https?:\/\/(?:(?!&quot;|&lt;|&gt;|&#39;)[^\s<])+/g, (m) => {
    let url = m, tail = '';
    const t = /(?:[.,;:!?)\]}]|&#39;)+$/.exec(url);
    if (t) { tail = t[0]; url = url.slice(0, url.length - tail.length); }
    const plain = url.replace(/&amp;/g, '&');
    return `<a class="aw-link" href="${url}" target="_blank" rel="noopener noreferrer" title="${url}"><span>${esc(linkLabel(plain))}</span>${arrow}</a>${tail}`;
  });

  const font = `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif`;
  const ring = (deg) =>
    `conic-gradient(from ${deg}deg at 50% 50%, ${c(0.95)} 0deg, ${c(0.12)} 60deg, transparent 140deg, transparent 220deg, ${c(0.4)} 300deg, ${c(0.95)} 360deg)`;

  const disclaimerHtml = disclaimer
    ? `<div style="margin:0 0 16px;padding:9px 12px;border-radius:10px;font-size:11.5px;line-height:1.4;color:${T.soft};background:${c(0.08)};border:1px solid ${c(0.25)};">${rich(disclaimer)}</div>` : '';
  const headerHtml = header
    ? `<p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:#f2efe9;">${rich(header)}</p>` : '';
  const info1Html = info1
    ? `<p style="margin:0 0 16px;font-size:13px;line-height:1.6;color:#b9b4a8;">${rich(info1)}</p>` : '';
  let imgHtml = '';
  if (hasImage && base64) {
    const src = /^data:/.test(base64) ? base64 : 'data:image/png;base64,' + base64;
    imgHtml = `<img src="${src}" alt="" style="display:block;width:100%;max-height:260px;object-fit:cover;border-radius:12px;margin:0 0 16px;border:1px solid ${c(0.25)};box-shadow:0 8px 24px rgba(0,0,0,0.4);">`;
  }
  const info2Html = info2
    ? `<p style="margin:0 0 16px;font-size:13px;line-height:1.6;color:#b9b4a8;">${rich(info2)}</p>` : '';
  const footerHtml = footer
    ? `<div style="margin-top:6px;padding-top:12px;border-top:1px solid ${c(0.15)};font-size:11px;line-height:1.5;color:#8a8579;">${rich(footer)}</div>` : '';

  const root = document.createElement('div');
  root.id = ID;
  root.setAttribute('style',
    `position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;padding:20px;` +
    `background:radial-gradient(circle at 50% 40%, ${c(0.14)}, rgba(0,0,0,0.78) 70%);` +
    `backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);` +
    `opacity:0;transition:opacity .35s ease;font-family:${font};`);

  root.innerHTML = `
    <style>
      #${ID} .aw-link{display:inline-flex;align-items:center;gap:5px;max-width:100%;padding:1px 9px 2px;margin:0 1px;border-radius:999px;font-size:.94em;font-weight:600;line-height:1.5;color:${T.soft};background:${c(0.1)};border:1px solid ${c(0.3)};text-decoration:none;word-break:break-all;transition:background .15s ease, box-shadow .15s ease, transform .15s ease, color .15s ease;}
      #${ID} .aw-link:hover{color:#fff;background:${c(0.24)};box-shadow:0 0 14px ${c(0.35)};transform:translateY(-1px);}
      #${ID} .aw-link svg{flex:none;opacity:.8;}
    </style>
    <div id="${ID}-ring" style="position:relative;width:100%;max-width:520px;max-height:88vh;display:flex;border-radius:22px;padding:1.5px;background:${ring(120)};box-shadow:0 0 60px ${c(0.18)}, 0 24px 60px rgba(0,0,0,0.6);transform:translateY(14px) scale(.97);opacity:0;transition:transform .45s cubic-bezier(.22,1,.36,1), opacity .45s ease;">
      <div id="${ID}-card" style="position:relative;flex:1;display:flex;flex-direction:column;min-width:0;overflow:hidden;border-radius:20.5px;background:linear-gradient(150deg, ${T.bg1}, ${T.bg0} 70%);isolation:isolate;">
        <div id="${ID}-amb" style="position:absolute;inset:0;pointer-events:none;z-index:0;mix-blend-mode:screen;background:radial-gradient(circle at 50% 30%, ${c(0.07)}, transparent 70%);"></div>

        <div style="position:relative;z-index:1;flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px;background:linear-gradient(135deg, ${T.head}, #0f0f0e);border-bottom:1px solid ${c(0.2)};">
          <span style="font-size:10.5px;font-weight:700;letter-spacing:.14em;color:${T.soft};padding:4px 10px;border-radius:999px;background:${c(0.1)};border:1px solid ${c(0.3)};">${T.badge}</span>
          <button id="${ID}-x" type="button" aria-label="Close" style="width:26px;height:26px;padding:0;border:none;border-radius:50%;background:transparent;color:#8a8579;font-size:18px;line-height:1;cursor:pointer;">&times;</button>
        </div>

        <div style="position:relative;z-index:1;flex:1 1 auto;overflow-y:auto;padding:22px 24px 8px;">
          <h2 style="margin:0 0 14px;font-size:22px;font-weight:650;letter-spacing:-0.01em;color:${T.soft};text-shadow:0 2px 14px ${c(0.45)};">${esc(name)}</h2>
          ${disclaimerHtml}${headerHtml}${info1Html}${imgHtml}${info2Html}${footerHtml}
        </div>

        <div style="position:relative;z-index:1;flex:0 0 auto;padding:12px 24px 20px;">
          <button id="${ID}-ok" type="button" style="width:100%;padding:11px 0;border-radius:12px;border:1px solid ${c(0.4)};background:${c(0.14)};color:${T.soft};font:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s ease, box-shadow .15s ease;">Got it</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(root);

  const ringEl = root.querySelector('#' + ID + '-ring');
  const ambEl = root.querySelector('#' + ID + '-amb');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    root.style.opacity = '1';
    ringEl.style.opacity = '1';
    ringEl.style.transform = 'none';
  }));

  let raf = null, mx = 0, my = 0;
  const onMove = (e) => {
    mx = e.clientX; my = e.clientY;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      const r = ringEl.getBoundingClientRect();
      const deg = Math.round(Math.atan2(my - (r.top + r.height / 2), mx - (r.left + r.width / 2)) * 180 / Math.PI + 90);
      ringEl.style.background = ring(deg);
      const px = Math.max(0, Math.min(100, ((mx - r.left) / r.width) * 100));
      const py = Math.max(0, Math.min(100, ((my - r.top) / r.height) * 100));
      ambEl.style.background = `radial-gradient(circle at ${px}% ${py}%, ${c(0.16)} 0%, ${c(0.05)} 35%, transparent 70%)`;
    });
  };
  document.addEventListener('mousemove', onMove, { passive: true });

  const close = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('keydown', onKey);
    root.style.opacity = '0';
    ringEl.style.opacity = '0';
    ringEl.style.transform = 'translateY(10px) scale(.98)';
    setTimeout(() => root.remove(), 380);
  };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  root.addEventListener('mousedown', (e) => { if (e.target === root) close(); });
  root.querySelector('#' + ID + '-x').onclick = close;

  const ok = root.querySelector('#' + ID + '-ok');
  ok.onclick = close;
  ok.onmouseenter = () => { ok.style.background = c(0.26); ok.style.boxShadow = `0 0 18px ${c(0.3)}`; };
  ok.onmouseleave = () => { ok.style.background = c(0.14); ok.style.boxShadow = 'none'; };
  const x = root.querySelector('#' + ID + '-x');
  x.onmouseenter = () => { x.style.color = '#fff'; x.style.background = 'rgba(255,255,255,0.1)'; };
  x.onmouseleave = () => { x.style.color = '#8a8579'; x.style.background = 'transparent'; };
  return true;
}


// create announcement sys
function createAnnouncement() {
  const ID = 'aw-creator';
  const DRAFT = 'aw_creator_draft';
  const old = document.getElementById(ID);
  if (old) old.remove();

  const blank = () => ({ type: 2, name: '', disclaimer: '', header: '', info1: '', info2: '', footer: '', version: 1, force: false, image: '' });
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(DRAFT) || '{}') || {}; } catch (e) { saved = {}; }
  const S = Object.assign(blank(), saved);

  const font = `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif`;
  const root = document.createElement('div');
  root.id = ID;
  root.setAttribute('style',
    `position:fixed;inset:0;z-index:999990;display:flex;align-items:center;justify-content:center;padding:20px;` +
    `background:rgba(0,0,0,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);font-family:${font};`);

  root.innerHTML = `
    <style>
      #${ID} *{box-sizing:border-box}
      #${ID} .p{width:100%;max-width:660px;max-height:92vh;overflow:auto;border-radius:18px;background:#121212;border:1px solid rgba(255,255,255,.1);color:#e8e6e1;box-shadow:0 24px 70px rgba(0,0,0,.6)}
      #${ID} .h{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:#181818;border-bottom:1px solid rgba(255,255,255,.08);font-size:15px}
      #${ID} .x{width:26px;height:26px;padding:0;border:0;border-radius:50%;background:transparent;color:#8a8579;font-size:18px;cursor:pointer}
      #${ID} .x:hover{color:#fff;background:rgba(255,255,255,.1)}
      #${ID} .b{padding:18px 20px 20px;display:flex;flex-direction:column;gap:14px}
      #${ID} label{display:flex;flex-direction:column;gap:5px;font-size:11.5px;font-weight:600;letter-spacing:.03em;color:#a8a396}
      #${ID} label small{font-weight:400;color:#6f6b61}
      #${ID} input[type=text],#${ID} select,#${ID} textarea{width:100%;padding:9px 11px;border-radius:9px;border:1px solid rgba(255,255,255,.1);background:#0c0c0c;color:#e8e6e1;font:inherit;font-size:13px;font-weight:400;letter-spacing:0;outline:none}
      #${ID} textarea{resize:vertical;line-height:1.5}
      #${ID} input:focus,#${ID} select:focus,#${ID} textarea:focus{border-color:#ffd700;box-shadow:0 0 0 2px rgba(255,215,0,.15)}
      #${ID} .r2{display:grid;grid-template-columns:2fr 1fr;gap:12px}
      #${ID} .chk{flex-direction:row;align-items:center;gap:8px;font-weight:500;letter-spacing:0}
      #${ID} .img{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;border:1px dashed rgba(255,255,255,.14);background:#0c0c0c}
      #${ID} .img-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:12px;color:#a8a396}
      #${ID} .thumb{display:none;max-width:100%;max-height:140px;border-radius:9px;border:1px solid rgba(255,255,255,.12);object-fit:cover}
      #${ID} .btns{display:flex;flex-wrap:wrap;gap:8px}
      #${ID} .btn{padding:9px 14px;border-radius:9px;border:1px solid rgba(255,215,0,.35);background:rgba(255,215,0,.1);color:#ffd700;font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;transition:background .15s ease}
      #${ID} .btn:hover{background:rgba(255,215,0,.22)}
      #${ID} .btn.g{border-color:rgba(255,255,255,.14);background:rgba(255,255,255,.05);color:#cfcabd}
      #${ID} .btn.g:hover{background:rgba(255,255,255,.12)}
      #${ID} .out{font-family:ui-monospace,Consolas,monospace;font-size:11.5px;color:#9be39b}
      #${ID} .hint{font-size:11.5px;line-height:1.5;color:#6f6b61}
      #${ID} .warn{color:#ff9a4d}
    </style>
    <div class="p">
      <div class="h"><b>Announcement Creator</b><button class="x" type="button" data-a="close" aria-label="Close">&times;</button></div>
      <div class="b">
        <div class="r2">
          <label>Type
            <select data-f="type"><option value="1">1 · Announcement (red)</option><option value="2">2 · Update log (gold)</option></select>
          </label>
          <label>Version <input type="text" data-f="version" placeholder="9"></label>
        </div>
        <label>Title <input type="text" data-f="name" placeholder="vALPHA.2.1"></label>
        <label>Disclaimer <small>(optional)</small><textarea data-f="disclaimer" rows="2"></textarea></label>
        <label>Header <small>(optional)</small><textarea data-f="header" rows="2" placeholder="So, What is NEW?"></textarea></label>
        <label>Info 1 <small>links turn into buttons automatically</small><textarea data-f="info1" rows="4"></textarea></label>
        <div class="img">
          <label style="gap:8px">Image <small>(optional, shown between info 1 and info 2)</small></label>
          <div class="img-row">
            <input type="file" accept="image/*" data-a="file">
            <button class="btn g" type="button" data-a="rmimg">Remove image</button>
            <span data-r="imginfo"></span>
          </div>
          <img class="thumb" data-r="thumb" alt="">
        </div>
        <label>Info 2 <small>(optional)</small><textarea data-f="info2" rows="4"></textarea></label>
        <label>Footer <small>(optional)</small><textarea data-f="footer" rows="2"></textarea></label>
        <label class="chk"><input type="checkbox" data-f="force"> Force show every time (ignores the show limit)</label>
        <label>Generated code <textarea class="out" data-r="out" rows="5" readonly></textarea></label>
        <div class="btns">
          <button class="btn" type="button" data-a="preview">Preview</button>
          <button class="btn" type="button" data-a="print">Print to console</button>
          <button class="btn" type="button" data-a="copy">Copy code</button>
          <button class="btn g" type="button" data-a="clear">Clear all</button>
        </div>
        <div class="hint">Preview ignores the show limit. To show an announcement to everyone again, bump the version number. Press Copy code (or Print to console), then paste the line into your script.</div>
      </div>
    </div>`;
  document.body.appendChild(root);
  ['keydown', 'keyup', 'keypress'].forEach((ev) => root.addEventListener(ev, (e) => e.stopPropagation()));

  const $ = (q) => root.querySelector(q);
  const out = $('[data-r="out"]');
  const thumb = $('[data-r="thumb"]');
  const imginfo = $('[data-r="imginfo"]');

  function lit(s) {
    return "'" + String(s == null ? '' : s)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\r?\n/g, '\\n')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029') + "'";
  }
  function gen() {
    const v = String(S.version == null ? '' : S.version).trim();
    const verCode = /^\d+(\.\d+)?$/.test(v) ? v : lit(v);
    return 'showAnnouncement(' + [
      Number(S.type) === 1 ? 1 : 2,
      lit(S.name), lit(S.disclaimer), lit(S.header), lit(S.info1),
      S.image ? 'true' : 'false', lit(S.image),
      lit(S.info2), lit(S.footer), verCode, S.force ? 'true' : 'false',
    ].join(', ') + ');';
  }
  function update() {
    out.value = gen();
    if (S.image) {
      thumb.src = S.image;
      thumb.style.display = 'block';
      const kb = Math.round(S.image.length / 1024);
      imginfo.textContent = kb + ' KB of code';
      imginfo.className = kb > 400 ? 'warn' : '';
      if (kb > 400) imginfo.textContent += ' (large, try a smaller image)';
    } else {
      thumb.removeAttribute('src');
      thumb.style.display = 'none';
      imginfo.textContent = 'No image';
      imginfo.className = '';
    }
    try { localStorage.setItem(DRAFT, JSON.stringify(S)); } catch (e) { /* non-fatal */ }
  }
  function fill() {
    root.querySelectorAll('[data-f]').forEach((n) => {
      const k = n.dataset.f;
      if (n.type === 'checkbox') n.checked = !!S[k]; else n.value = S[k];
    });
  }
  root.querySelectorAll('[data-f]').forEach((n) => {
    const k = n.dataset.f;
    const h = () => {
      S[k] = n.type === 'checkbox' ? n.checked : n.value;
      if (k === 'type') S.type = Number(n.value);
      update();
    };
    n.addEventListener('input', h);
    n.addEventListener('change', h);
  });

  function readImage(file) {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onerror = () => rej(new Error('read failed'));
      fr.onload = () => {
        const raw = fr.result;
        if (file.type === 'image/gif' || file.type === 'image/svg+xml') return res(raw);
        const img = new Image();
        img.onerror = () => rej(new Error('not an image'));
        img.onload = () => {
          const k = Math.min(1, 900 / img.width);
          const cv = document.createElement('canvas');
          cv.width = Math.max(1, Math.round(img.width * k));
          cv.height = Math.max(1, Math.round(img.height * k));
          cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
          let data = cv.toDataURL('image/webp', 0.85);
          if (data.indexOf('data:image/webp') !== 0) data = cv.toDataURL('image/jpeg', 0.85);
          res(data);
        };
        img.src = raw;
      };
      fr.readAsDataURL(file);
    });
  }

  function print() {
    const code = gen();
    console.log('%c[Announcement Creator] copy the line below into your script', 'color:#ffd700;font-weight:bold;');
    console.log(code);
    return code;
  }
  function copyText(text) {
    return new Promise((res) => {
      const fb = () => {
        const t = document.createElement('textarea');
        t.value = text;
        t.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(t);
        t.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        t.remove();
        res(ok);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => res(true), fb);
      else fb();
    });
  }
  function flash(btn, text) {
    const orig = btn.dataset.orig || btn.textContent;
    btn.dataset.orig = orig;
    btn.textContent = text;
    setTimeout(() => { btn.textContent = orig; }, 1400);
  }

  root.addEventListener('click', async (e) => {
    const b = e.target.closest('[data-a]');
    if (!b) return;
    const a = b.dataset.a;
    if (a === 'close') root.remove();
    else if (a === 'preview') {
      showAnnouncement(Number(S.type) === 1 ? 1 : 2, S.name || 'Untitled', S.disclaimer, S.header, S.info1, !!S.image, S.image, S.info2, S.footer, S.version, true);
    }
    else if (a === 'print') { print(); flash(b, 'Printed'); }
    else if (a === 'copy') {
      const code = print();
      const ok = await copyText(code);
      flash(b, ok ? 'Copied!' : 'Copy failed');
    }
    else if (a === 'rmimg') { S.image = ''; const f = $('[data-a="file"]'); if (f) f.value = ''; update(); }
    else if (a === 'clear') {
      if (!confirm('Clear everything in the creator?')) return;
      Object.assign(S, blank());
      const f = $('[data-a="file"]'); if (f) f.value = '';
      fill(); update();
    }
  });

  $('[data-a="file"]').addEventListener('change', async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    imginfo.textContent = 'Processing…';
    try { S.image = await readImage(f); } catch (err) { S.image = ''; imginfo.textContent = 'Could not read that image'; return; }
    update();
  });

  fill();
  update();
  return 'Creator opened. Fill it in, then press Copy code.';
}

(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).createAnnouncement = createAnnouncement;









const SST_VERSION = 'suite-4';
const SST_DEBUG = { console: false, alerts: false, panel: false };
const SST_BRUNE_MODE = 'restyle';
const SST_EDITION_KEY = 'sstimer.edition';
const SST_EDITION = (() => { try { return localStorage.getItem(SST_EDITION_KEY) === 'legacy' ? 'legacy' : 'lite'; } catch (e) { return 'lite'; } })();

const SST_POKI_RE = /^https:\/\/poki\.com\/[a-z-]+\/g\/subway-surfers/i;
const SST_YELL_PREFIX = 'https://yell0wsuit.page/assets/games/subway-surfers/';
const SST_HOST = location.hostname;
const SST_IS_TOP = (() => { try { return window.top === window; } catch (e) { return false; } })();
const SST_ON_POKI_PAGE = SST_POKI_RE.test(location.href);
const SST_ON_YELL = location.href.startsWith(SST_YELL_PREFIX);
const SST_IS_POKI_FRAME = !SST_IS_TOP && /(^|\.)poki\.com$/.test(SST_HOST);
const SST_WANTED = SST_ON_POKI_PAGE || SST_ON_YELL || SST_IS_POKI_FRAME;
const SST_PAGE = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
const SST_WHERE = (SST_IS_TOP ? 'TOP' : 'FRAME') + ':' + SST_HOST;

function sstHostsTimer() {
  if (SST_IS_TOP) return SST_ON_POKI_PAGE || SST_ON_YELL;
  if (SST_ON_YELL) {
    try { return !String(window.parent.location.href).startsWith(SST_YELL_PREFIX); } catch (e) { return true; }
  }
  return false;
}
const SST_HOSTS = SST_WANTED && sstHostsTimer();

function sstAncestors() {
  const out = [];
  try { let w = window; while (w !== w.parent) { w = w.parent; out.push(w); } } catch (e) {}
  return out;
}

function sstSend(msg) {
  sstAncestors().forEach(a => { try { a.postMessage(msg, '*'); } catch (e) {} });
  if (SST_HOSTS) { try { window.postMessage(msg, '*'); } catch (e) {} }
}

function sstStr(d) {
  try { const s = typeof d === 'string' ? d : JSON.stringify(d); return s.length > 600 ? s.slice(0, 600) + '…' : s; }
  catch (e) { return String(d); }
}

const sstBuf = [];
let sstPanel = null, sstPanelBody = null;

function sstPanelAppend(line) {
  const d = document.createElement('div');
  d.textContent = line;
  d.style.cssText = 'white-space:pre-wrap;word-break:break-word;border-bottom:1px solid #1d2a20;padding:1px 0';
  sstPanelBody.append(d);
  while (sstPanelBody.childNodes.length > 400) sstPanelBody.firstChild.remove();
  sstPanelBody.scrollTop = sstPanelBody.scrollHeight;
}

function sstPanelEnsure() {
  if (sstPanel || !SST_DEBUG.panel || !document.body) return;
  sstPanel = document.createElement('div');
  sstPanel.id = 'sst-debug';
  sstPanel.style.cssText = 'position:fixed;left:8px;bottom:8px;width:min(620px,70vw);max-height:40vh;display:flex;flex-direction:column;background:rgba(0,0,0,.9);color:#cfe9d6;font:11px/1.35 ui-monospace,Consolas,monospace;border:1px solid #22d05a;border-radius:8px;z-index:2147483647;overflow:hidden';
  ['keydown', 'keyup', 'keypress', 'pointerdown', 'pointerup', 'mousedown', 'touchstart', 'wheel'].forEach(t =>
    sstPanel.addEventListener(t, e => e.stopPropagation()));

  const bar = document.createElement('div');
  bar.style.cssText = 'display:flex;gap:6px;align-items:center;padding:4px 6px;background:#0b1a10;border-bottom:1px solid #22d05a';
  const title = document.createElement('b');
  title.textContent = 'SST debug ' + SST_VERSION;
  title.style.cssText = 'flex:1;color:#22d05a';
  const mk = (txt, fn) => {
    const b = document.createElement('button');
    b.textContent = txt;
    b.style.cssText = 'background:#102016;color:#cfe9d6;border:1px solid #2f5a3b;border-radius:4px;padding:1px 8px;font:inherit;cursor:pointer';
    b.addEventListener('click', fn);
    return b;
  };
  sstPanelBody = document.createElement('div');
  sstPanelBody.style.cssText = 'overflow:auto;padding:4px 6px;min-height:40px';
  bar.append(title,
    mk('Copy', () => { try { navigator.clipboard.writeText(sstBuf.join('\n')); } catch (e) { console.log(sstBuf.join('\n')); } }),
    mk('Clear', () => { sstBuf.length = 0; sstPanelBody.textContent = ''; }),
    mk('Show/Hide', () => { sstPanelBody.style.display = sstPanelBody.style.display === 'none' ? '' : 'none'; })
  );
  sstPanel.append(bar, sstPanelBody);
  sstPanelBody.style.display = 'none';
  document.body.append(sstPanel);
  sstBuf.forEach(sstPanelAppend);
}

function sstPanelPush(line) {
  sstBuf.push(line);
  if (sstBuf.length > 400) sstBuf.shift();
  if (!sstPanelBody) sstPanelEnsure();
  if (sstPanelBody) sstPanelAppend(line);
}

if (SST_HOSTS) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sstPanelEnsure);
  else sstPanelEnsure();

  const seen = new Map();
  let gdnHooked = false, gdnWatch = false;
  window.addEventListener('message', e => {
    const d = e.data;
    if (!d || typeof d !== 'object') return;
    if (d.__sst === true) {
      if (d.type === 'log') sstPanelPush(String(d.msg));
      else if (d.type === 'ctx') { try { gdnHooked = gdnHooked || /\.gdn\.poki\.com$/.test(new URL(d.href).hostname); } catch (er) {} }
      return;
    }
    if (!gdnWatch && /\.gdn\.poki\.com$/.test(String(e.origin).replace(/^https?:\/\//, ''))) {
      gdnWatch = true;
      setTimeout(() => {
        if (!gdnHooked) sstLog('NOTICE: the hook is NOT running in the game frame (*.gdn.poki.com). Add  // @match https://*.gdn.poki.com/*  to the userscript header. Using the Poki native-message fallback meanwhile.', undefined, 'need-gdn-match', true);
      }, 8000);
    }
    let sig;
    try {
      sig = String(d.type || d.event || Object.keys(d).slice(0, 5).join(','));
      const c = d.content;
      if (c && typeof c === 'object') {
        const sub = c.event || (c.payload && (c.payload.action || c.payload.event)) || '';
        if (sub) sig += ' / ' + sub;
      }
    } catch (er) { return; }
    if (seen.size > 120 && !seen.has(sig)) return;
    const n = (seen.get(sig) || 0) + 1;
    seen.set(sig, n);
    if (n === 1) sstLog('msg: first foreign message "' + sig + '" from ' + e.origin, sstStr(d).slice(0, 240));
  }, false);
}

const sstAlerted = new Set();
function sstLog(msg, data, alertKey, force) {
  const line = '[' + new Date().toISOString().slice(11, 23) + '] [' + SST_WHERE + '] ' + msg + (data === undefined ? '' : ' ' + sstStr(data));
  if (!SST_WANTED) { if (SST_DEBUG.console) console.log('[SST] ' + msg); return; }
  if (SST_DEBUG.console) console.log('%c[SST]', 'color:#22d05a;font-weight:bold', line);
  if (SST_HOSTS) sstPanelPush(line);
  else sstSend({ __sst: true, type: 'log', msg: line });
  if (alertKey && (SST_DEBUG.alerts || force) && !sstAlerted.has(alertKey)) {
    sstAlerted.add(alertKey);
    setTimeout(() => { try { alert('[SST ' + SST_WHERE + ']\n' + msg + (data === undefined ? '' : '\n' + sstStr(data))); } catch (e) {} }, 50);
  }
}

(function earlyPokiHook() {
  'use strict';
  if (!SST_WANTED) return;
  const PAGE = SST_PAGE;

  let gm = '';
  try { if (typeof GM_info !== 'undefined') gm = GM_info.script.name + ' v' + GM_info.script.version + ' [' + GM_info.scriptHandler + ']'; } catch (e) {}
  sstLog('hook: script loaded ' + SST_VERSION, {
    href: location.href, isTop: SST_IS_TOP, hostsTimer: SST_HOSTS, readyState: document.readyState,
    hasPokiSDK: !!PAGE.PokiSDK, unsafeWindow: typeof unsafeWindow !== 'undefined',
    script: gm || 'n/a (@grant none)', edition: SST_EDITION
  }, 'hook-loaded');

  if (SST_IS_TOP && SST_ON_POKI_PAGE) { sstLog('hook: skipped on the poki.com top page (the game frames do the hooking)'); return; }
  if (PAGE.__sstHookInstalled) {
    sstLog('hook: ALREADY INSTALLED by ' + PAGE.__sstHookInstalled + '. A second copy of this script is running in this window (duplicate userscript?)', undefined, 'hook-dup');
    return;
  }
  PAGE.__sstHookInstalled = SST_VERSION;

  const NAMES = ['gameplayStart', 'gameplayStop', 'commercialBreak'];
  const called = {};
  const measureSigs = new Set();

  const fwd = (type, extra) => sstSend({ __sst: true, type, href: location.href, ...extra });
  sstSend({ __sst: true, type: 'ctx', href: location.href });

  const wrapFn = (name, orig) => function () {
    called[name] = (called[name] || 0) + 1;
    sstLog('hook: PokiSDK.' + name + '() called (#' + called[name] + ')', undefined, 'call-' + name);
    try { fwd(name); } catch (e) {}
    return orig.apply(this, arguments);
  };

  const wrapMeasure = orig => function () {
    const args = Array.from(arguments);
    const sig = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' | ');
    if (!measureSigs.has(sig)) {
      measureSigs.add(sig);
      sstLog('hook: PokiSDK.measure(' + sig + ')', undefined, 'measure-' + sig.replace(/[^a-z0-9]/gi, '-').slice(0, 40));
    }
    if (/revive.*key|key.*revive|measure\(revive/i.test(sig)) {
      try { fwd('key'); } catch (e) {}
    } else if (/\bcoin\b/i.test(sig) && !/purchase|shop/i.test(sig)) {
      try { fwd('coin'); } catch (e) {}
    }
    return orig.apply(this, arguments);
  };

  const patch = sdk => {
    if (!sdk || (typeof sdk !== 'object' && typeof sdk !== 'function')) return sdk;
    if (sdk.__sstIframe) return sdk;
    let keys = '?';
    try { keys = Object.keys(sdk).slice(0, 30); } catch (e) {}
    sstLog('hook: patching PokiSDK object', { keys }, 'sdk-seen');
    try {
      NAMES.forEach(name => {
        const cur = sdk[name];
        if (typeof cur === 'function') {
          sdk[name] = wrapFn(name, cur);
          sstLog('hook: wrapped ' + name);
        } else {
          let held = cur;
          Object.defineProperty(sdk, name, {
            configurable: true, enumerable: true,
            get: () => held,
            set: v => { held = typeof v === 'function' ? wrapFn(name, v) : v; sstLog('hook: wrapped ' + name + ' (assigned later)'); }
          });
          sstLog('hook: ' + name + ' not a function yet, armed a setter');
        }
      });
      if (typeof sdk.measure === 'function') {
        sdk.measure = wrapMeasure(sdk.measure);
        sstLog('hook: wrapped measure');
      } else {
        let heldM = sdk.measure;
        Object.defineProperty(sdk, 'measure', {
          configurable: true, enumerable: true,
          get: () => heldM,
          set: v => { heldM = typeof v === 'function' ? wrapMeasure(v) : v; sstLog('hook: wrapped measure (assigned later)'); }
        });
        sstLog('hook: measure not a function yet, armed a setter');
      }
      Object.defineProperty(sdk, '__sstIframe', { value: true });
      return sdk;
    } catch (e) {
      sstLog('hook: direct patch failed (' + e.message + '), falling back to Proxy');
      try {
        return new Proxy(sdk, {
          get(t, p, r) {
            const v = Reflect.get(t, p, r);
            if (typeof v === 'function' && (NAMES.includes(p) || p === 'measure')) {
              const w = p === 'measure' ? wrapMeasure(v) : wrapFn(String(p), v);
              return function () { return w.apply(t, arguments); };
            }
            return v;
          }
        });
      } catch (e2) { sstLog('hook: Proxy failed too: ' + e2.message); }
    }
    return sdk;
  };

  let _sdk;
  try { _sdk = PAGE.PokiSDK ? patch(PAGE.PokiSDK) : undefined; } catch (e) { sstLog('hook: initial patch threw ' + e.message); }
  try {
    Object.defineProperty(PAGE, 'PokiSDK', {
      configurable: true,
      get: () => _sdk,
      set: v => { sstLog('hook: page assigned window.PokiSDK', typeof v); _sdk = patch(v); }
    });
    sstLog('hook: window.PokiSDK accessor installed');
  } catch (e) {
    sstLog('hook: COULD NOT install PokiSDK accessor: ' + e.message, undefined, 'hook-accessor-fail');
  }

  setTimeout(() => {
    let pokiGlobals = [];
    try { pokiGlobals = Object.keys(PAGE).filter(k => /poki/i.test(k)); } catch (e) {}
    sstLog('hook: 10s status', {
      sdkSeen: !!_sdk, calls: called, pokiGlobals,
      pokiScripts: [...document.scripts].map(s => s.src).filter(s => /poki|sdk/i.test(s)).slice(0, 6)
    }, 'hook-10s');
  }, 10000);
})();

/* ============================================================
   LITE EDITION — minimal, performance-optimized timer
   ============================================================ */
function speedrunTimerLite() {
  'use strict';

  if (window.top !== window) return;
  if (SST_PAGE.__sstimerLoadedLite) return;
  SST_PAGE.__sstimerLoadedLite = SST_VERSION;

  const KEY = 'sstimer.lite.v1';
  const LS = window.localStorage;

  const DEF = {
    mode: 'normal',
    pos: { x: 16, y: 16 },
    showFps: true,
    showLoc: true,
    showPrev: true,
    showReal: false,
    dashSide: 'left',
    glass: false,
    endDelay: 6,
    fmt: { hours: 'auto', decimals: 2, padMin: false },
    look: {
      font: "'Segoe UI', system-ui, sans-serif",
      size: 52, width: 260, radius: 6, decScale: 55,
      color: '#22d05a', bad: '#e5342b', bg: '#0d0d0d', opacity: 90
    },
    cap: { video: false, keep: 5, mbps: 1.5, fps: 30, height: 720 },
    css: '',
    best: {},
    prev: null
  };

  const clone = o => JSON.parse(JSON.stringify(o));
  const merge = (a, b) => {
    for (const k in b) {
      if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k] && typeof a[k] === 'object') merge(a[k], b[k]);
      else a[k] = b[k];
    }
    return a;
  };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad = n => String(n).padStart(2, '0');

  let S = clone(DEF);
  try { const raw = LS.getItem(KEY); if (raw) merge(S, JSON.parse(raw)); } catch (e) {}
  if (!S.best || typeof S.best !== 'object') S.best = {};
  const save = () => { try { LS.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

  let state = 'idle', gameMs = 0, gameAt = 0, realStart = 0, realEnd = 0, lastStop = 0, endT = 0, invalid = false;
  let raf = 0, lastRender = 0;
  const now = () => performance.now();
  const active = () => state === 'running' || state === 'paused';
  const gameTime = () => state === 'running' ? gameMs + now() - gameAt : gameMs;
  const realTime = () => state === 'idle' ? 0 : (state === 'finished' ? realEnd : now()) - realStart;

  const fmt = ms => {
    ms = Math.max(0, ms);
    const d = S.fmt.decimals;
    const tot = Math.floor(ms / 1000);
    let h = Math.floor(tot / 3600), m = Math.floor(tot % 3600 / 60);
    const s = tot % 60;
    const showH = S.fmt.hours === 'always' || (S.fmt.hours === 'auto' && h > 0);
    let main;
    if (showH) main = h + ':' + pad(m) + ':' + pad(s);
    else { m += h * 60; main = (S.fmt.padMin ? pad(m) : m) + ':' + pad(s); }
    const dec = d ? '.' + String(Math.floor(ms % 1000)).padStart(3, '0').slice(0, d) : '';
    return [main, dec];
  };

  const fmtD = ms => {
    const sign = ms < 0 ? '-' : '+';
    const a = Math.abs(ms) / 1000;
    if (a >= 60) return sign + Math.floor(a / 60) + ':' + (a % 60).toFixed(1).padStart(4, '0');
    return sign + a.toFixed(1);
  };

  let frameHref = '';
  const readTheme = () => {
    const candidates = [location.href, frameHref, document.referrer];
    for (const href of candidates) {
      if (!href) continue;
      try {
        const u = new URL(href, location.href);
        for (const k of ['theme', 'city', 'location', 'map']) {
          let raw = u.searchParams.get(k);
          if (!raw && u.hash) {
            const hp = new URLSearchParams(u.hash.replace(/^#\??/, ''));
            raw = hp.get(k);
          }
          if (!raw) {
            const pm = u.pathname.match(/(?:theme|city)[=\/](\d+(?:-[^\/?#]*)?)/i);
            if (pm) raw = decodeURIComponent(pm[1]);
          }
          if (!raw) continue;
          try { raw = decodeURIComponent(raw); } catch (e) {}
          const m = raw.match(/^(\d+)-(.*)$/);
          if (m) return { theme: Number(m[1]), city: m[2].replace(/[-_+]+/g, ' ').trim() };
          if (/^\d+$/.test(raw)) return { theme: Number(raw), city: '' };
        }
      } catch (e) {}
    }
    return { theme: null, city: '' };
  };

  let runCtx = { theme: null, city: '' };

  let dbq = null;
  const dbp = () => dbq || (dbq = new Promise((res, rej) => {
    const r = indexedDB.open('sstimerLite', 1);
    r.onupgradeneeded = () => {
      const db = r.result;
      if (!db.objectStoreNames.contains('runs')) db.createObjectStore('runs', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('shots')) db.createObjectStore('shots', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('videos')) db.createObjectStore('videos', { keyPath: 'id' });
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));

  const tx = async (names, mode, fn) => {
    const db = await dbp();
    return new Promise((res, rej) => {
      const t = db.transaction(names, mode);
      let out;
      const q = fn(t);
      if (q && 'onsuccess' in q) q.onsuccess = () => { out = q.result; };
      t.oncomplete = () => res(out);
      t.onerror = t.onabort = () => rej(t.error);
    });
  };
  const st = (n, mode, fn) => tx(n, mode, t => fn(t.objectStore(n)));

  const cap = { stream: null, track: null, rec: null };
  const capOn = () => !!(cap.track && cap.track.readyState === 'live');

  let mime;
  const pickMime = () => {
    if (mime === undefined) mime = ['video/webm;codecs=h264', 'video/webm;codecs=vp8', 'video/webm;codecs=vp9', 'video/webm'].find(m => MediaRecorder.isTypeSupported(m)) || '';
    return mime;
  };

  const startRec = () => {
    if (!S.cap.video || !capOn() || cap.rec) return;
    try {
      const opt = { videoBitsPerSecond: Math.max(0.5, S.cap.mbps) * 1e6 };
      if (pickMime()) opt.mimeType = pickMime();
      const r = new MediaRecorder(cap.stream, opt);
      r.c = [];
      r.ondataavailable = e => { if (e.data && e.data.size) r.c.push(e.data); };
      r.start(4000);
      cap.rec = r;
    } catch (e) {}
  };

  const stopRec = () => new Promise(res => {
    const r = cap.rec;
    cap.rec = null;
    if (!r || r.state === 'inactive') return res(null);
    r.onstop = () => res(r.c.length ? new Blob(r.c, { type: r.mimeType }) : null);
    r.stop();
  });

  const dropRec = () => {
    const r = cap.rec;
    cap.rec = null;
    if (r && r.state !== 'inactive') {
      r.ondataavailable = null;
      r.onstop = null;
      try { r.stop(); } catch (e) {}
    }
  };

  const grabShot = () => {
    const job = (async () => {
      if (!capOn()) return null;
      let src, w, h, v = null;
      if (window.ImageCapture) {
        src = await new ImageCapture(cap.track).grabFrame();
        w = src.width;
        h = src.height;
      } else {
        v = document.createElement('video');
        v.muted = true;
        v.srcObject = cap.stream;
        await v.play();
        await new Promise(r => v.requestVideoFrameCallback ? v.requestVideoFrameCallback(r) : setTimeout(r, 250));
        src = v;
        w = v.videoWidth;
        h = v.videoHeight;
      }
      if (!w) return null;
      const k = Math.min(1, 960 / w);
      const c = document.createElement('canvas');
      c.width = Math.round(w * k);
      c.height = Math.round(h * k);
      c.getContext('2d', { alpha: false }).drawImage(src, 0, 0, c.width, c.height);
      if (src.close) src.close();
      if (v) { v.pause(); v.srcObject = null; }
      return new Promise(r => c.toBlob(r, 'image/jpeg', 0.72));
    })().catch(() => null);
    return Promise.race([job, new Promise(r => setTimeout(() => r(null), 1500))]);
  };

  const disableCapture = () => {
    dropRec();
    if (cap.stream) cap.stream.getTracks().forEach(t => t.stop());
    cap.stream = cap.track = null;
    paint();
  };

  const enableCapture = async () => {
    try {
      const fps = S.cap.fps;
      const height = S.cap.height;
      const s = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: { ideal: fps, max: fps },
          width: { ideal: Math.round(height * 16 / 9), max: Math.round(height * 16 / 9) },
          height: { ideal: height, max: height }
        },
        audio: false,
        preferCurrentTab: true, selfBrowserSurface: 'include', surfaceSwitching: 'exclude'
      });
      cap.stream = s;
      cap.track = s.getVideoTracks()[0];
      cap.track.addEventListener('ended', disableCapture);
      paint();
    } catch (e) {}
  };

  const toggleCapture = async () => {
    if (capOn()) disableCapture();
    else await enableCapture();
  };

  const saveRun = async (run, shot, video) => {
    try {
      await tx(['runs', 'shots', 'videos'], 'readwrite', t => {
        t.objectStore('runs').put(run);
        if (shot) t.objectStore('shots').put({ id: run.id, blob: shot });
        if (video) t.objectStore('videos').put({ id: run.id, blob: video });
      });
      const runs = (await st('runs', 'readonly', s => s.getAll())).sort((a, b) => b.id - a.id);
      const old = runs.filter(r => r.vid).slice(Math.max(1, S.cap.keep));
      if (old.length) {
        await tx(['runs', 'videos'], 'readwrite', t => {
          old.forEach(r => {
            t.objectStore('videos').delete(r.id);
            r.vid = false;
            t.objectStore('runs').put(r);
          });
        });
      }
    } catch (e) {}
  };

  let root, menu, dash, mainEl, decEl, realRow, realV, locRow, locV, prevRow, prevV, fpsRow, fpsV, baseStyle, userStyle;
  let dashOpen = false, dashRuns = [], urls = [];
  let fpsRaf = 0, fpsFrames = 0, fpsLast = 0, fpsLocal = 0, frameFps = 0, frameFpsAt = 0;

  const setT = (e, t) => { if (e && e.textContent !== t) e.textContent = t; };

  const paint = () => {
    if (!root) return;
    root.classList.toggle('bad', !!invalid);
    root.classList.toggle('rec', !!cap.rec);
  };

  const renderPrev = () => {
    if (!root) return;
    const p = S.prev, none = !p || p.d == null;
    setT(prevV, none ? '—' : fmtD(p.d));
    prevV.className = none ? '' : (p.d <= 0 ? 'ahead' : 'behind');
  };

  const currentFps = () => (frameFpsAt && now() - frameFpsAt < 2000) ? frameFps : fpsLocal;

  const renderFps = () => {
    if (!root || !fpsV) return;
    const v = currentFps();
    setT(fpsV, v ? v + ' fps' : '—');
    const c = !v ? '' : v >= 55 ? 'fps-good' : v >= 30 ? 'fps-mid' : 'fps-low';
    if (fpsV.className !== c) fpsV.className = c;
  };

  const fpsTick = t => {
    fpsRaf = 0;
    if (!S.showFps) return;
    fpsFrames++;
    const dt = t - fpsLast;
    if (dt >= 1000) {
      fpsLocal = Math.round(fpsFrames * 1000 / dt);
      fpsFrames = 0;
      fpsLast = t;
      renderFps();
    }
    fpsRaf = requestAnimationFrame(fpsTick);
  };

  const startFps = () => {
    if (fpsRaf || !S.showFps) return;
    fpsFrames = 0;
    fpsLast = now();
    fpsRaf = requestAnimationFrame(fpsTick);
  };

  const stopFps = () => {
    if (fpsRaf) cancelAnimationFrame(fpsRaf);
    fpsRaf = 0;
  };

  const render = () => {
    if (!root) return;
    const t = now();
    if (t - lastRender < 50) return;
    lastRender = t;
    const a = fmt(S.showReal && !active() ? realTime() : gameTime());
    setT(mainEl, a[0]);
    setT(decEl, a[1]);
    if (S.showReal && active()) setT(realV, fmt(realTime()).join(''));
    if (S.showLoc) {
      const c = (active() || state === 'finished') ? runCtx : readTheme();
      setT(locV, c.city || (c.theme != null ? 'Theme ' + c.theme : '—'));
      if (locRow) locRow.style.display = (c.city || c.theme != null) ? '' : 'none';
    }
  };

  const loop = () => {
    raf = 0;
    render();
    if (state === 'running' || (state === 'paused' && S.showReal)) raf = requestAnimationFrame(loop);
  };
  const kick = () => {
    render();
    paint();
    if ((state === 'running' || (state === 'paused' && S.showReal)) && !raf) raf = requestAnimationFrame(loop);
  };

  const snap = {};
  const lastStr = new Map();
  const REL = /coin|keys?/i;
  const SKIP = /keyboard|keyframe|keycode|bind/i;
  const COIN = /coin/i, KEYR = /keys?/i;
  let rebaseDone = false;

  const flat = (o, p, out, d, b) => {
    if (typeof o === 'number') {
      if (o === o && REL.test(p) && !SKIP.test(p)) out[p] = o;
      return;
    }
    if (!o || typeof o !== 'object' || d > 5 || b.n <= 0) return;
    for (const k in o) {
      if (--b.n <= 0) break;
      flat(o[k], p + '.' + k, out, d + 1, b);
    }
  };

  const scan = (k, v, init) => {
    if (!REL.test(k) && !REL.test(v)) return;
    if (lastStr.get(k) === v) return;
    lastStr.set(k, v);
    let o;
    try { o = JSON.parse(v); } catch (e) { o = Number(v); }
    const out = {};
    flat(o, k, out, 0, { n: 2000 });
    for (const p in out) {
      const n = out[p], q = snap[p];
      snap[p] = n;
      if (init || q === undefined) continue;
      if (COIN.test(p) && n > q) onCoin();
      else if (KEYR.test(p) && n < q) onKey();
    }
  };

  const rebase = () => {
    if (S.mode === 'normal') return;
    try {
      for (let i = 0; i < LS.length; i++) {
        const k = LS.key(i);
        if (k === KEY) continue;
        const v = LS.getItem(k);
        if (v && v.length < 50000) scan(k, v, true);
      }
    } catch (e) {}
  };

  const begin = () => {
    if (state === 'finished') resetRun();
    clearTimeout(endT);
    if (state === 'idle') {
      realStart = now(); gameMs = 0; invalid = false;
      runCtx = readTheme();
      if (S.cap.video && capOn()) startRec();
    }
    if (state !== 'running') { gameAt = now(); state = 'running'; }
    if (!rebaseDone) { rebase(); rebaseDone = true; }
    kick();
  };

  const resetRun = () => {
    clearTimeout(endT);
    dropRec();
    state = 'idle'; gameMs = 0; realStart = 0; realEnd = 0; invalid = false;
    rebaseDone = false;
    unshow();
    kick();
  };

  const halt = () => {
    if (state !== 'running') return;
    gameMs += now() - gameAt;
    lastStop = now();
    state = 'paused';
    clearTimeout(endT);
    endT = setTimeout(finish, S.endDelay * 1000);
    kick();
  };

  const finalize = async run => {
    const vp = stopRec();
    let shot = null;
    if (capOn()) shot = await grabShot();
    const video = await vp;
    run.shot = !!shot;
    run.vid = !!video;
    saveRun(run, shot, video);
    if (dashOpen) refreshDash();
  };

  const finish = () => {
    if (state === 'running') halt();
    if (state !== 'paused') return;
    clearTimeout(endT);
    const t = gameMs;
    if (t < 3000) { resetRun(); return; }
    state = 'finished';
    realEnd = lastStop;
    const ctx = runCtx.city ? runCtx : readTheme();
    const run = {
      id: Date.now(), mode: S.mode, game: t, real: realEnd - realStart,
      valid: !invalid, reason: invalid || null, shot: false, vid: false,
      theme: ctx.theme, city: ctx.city
    };
    if (!invalid) {
      const b = S.best[S.mode];
      S.prev = { t, d: b == null ? null : t - b };
      if (b == null || t < b) S.best[S.mode] = t;
    }
    save();
    renderPrev();
    closeMenu();
    showcase();
    kick();
    setTimeout(() => { run.valid = !invalid; run.reason = invalid || null; finalize(run); }, 500);
  };

  const invalidate = r => {
    if (!invalid && state !== 'idle') { invalid = r; paint(); }
  };
  const onCoin = () => { if (S.mode !== 'normal') invalidate('coin'); };
  const onKey = () => { if (S.mode === 'nocoinskeys') invalidate('key'); };

  const oa = Response.prototype.arrayBuffer;
  Response.prototype.arrayBuffer = function () {
    const u = this.url;
    return oa.call(this).then(b => { return b; });
  };

  const os = AudioBufferSourceNode.prototype.start;
  AudioBufferSourceNode.prototype.start = function (when, off) {
    if (S.mode !== 'normal' && !invalid && active()) {
      try {
        const b = this.buffer;
        if (b) {
          const s = (b.url || 'buf:' + b.length + ':' + b.sampleRate).toLowerCase();
          if (/revive/.test(s)) onKey();
          else if (/\bcoin\b/.test(s)) onCoin();
          else if (/\bkey\b/.test(s)) onKey();
        }
      } catch (e) {}
    }
    return os.apply(this, arguments);
  };

  const op = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () {
    if (S.mode !== 'normal' && !invalid && active()) {
      try {
        const s = (this.currentSrc || this.src || '').toLowerCase();
        if (/revive/.test(s)) onKey();
        else if (/\bcoin\b/.test(s)) onCoin();
        else if (/\bkey\b/.test(s)) onKey();
      } catch (e) {}
    }
    return op.apply(this, arguments);
  };

  const origSet = Storage.prototype.setItem;
  Storage.prototype.setItem = function (k, v) {
    const r = origSet.apply(this, arguments);
    if (this === LS && k !== KEY && S.mode !== 'normal' && !invalid) {
      try {
        const s = String(v);
        if (s.length < 50000) scan(k, s, false);
      } catch (e) {}
    }
    return r;
  };

  const handleEvent = (type, via) => {
    switch (type) {
      case 'gameplayStart': begin(); break;
      case 'gameplayStop': halt(); break;
      case 'commercialBreak': if (active()) finish(); break;
      case 'reset': resetRun(); break;
    }
  };

  window.addEventListener('message', e => {
    const d = e.data;
    if (!d || typeof d !== 'object') return;
    if (d.__sst === true) {
      if (d.type === 'log') return;
      if (d.type === 'fps') {
        const n = Number(d.fps);
        if (n >= 0 && n < 1000) { frameFps = Math.round(n); frameFpsAt = now(); renderFps(); }
        return;
      }
      if (d.href) frameHref = d.href;
      if (d.type === 'coin') { onCoin(); return; }
      if (d.type === 'key') { onKey(); return; }
      handleEvent(d.type, 'hook');
      return;
    }
    if (typeof d.type === 'string' && /poki/i.test(d.type) && d.content && typeof d.content === 'object') {
      const c = d.content, names = [];
      if (typeof c.event === 'string') names.push(c.event);
      if (c.payload && typeof c.payload.action === 'string') names.push(c.payload.action);
      if (c.payload && typeof c.payload.event === 'string') names.push(c.payload.event);
      for (const n of names) {
        if (/gameplay[\s_-]?start/i.test(n)) handleEvent('gameplayStart', 'poki-native');
        else if (/gameplay[\s_-]?stop/i.test(n)) handleEvent('gameplayStop', 'poki-native');
        else if (/^commercial[\s_-]?break$/i.test(n)) handleEvent('commercialBreak', 'poki-native');
        else if (/revive/i.test(n)) onKey();
        else if (/\bcoin\b/i.test(n)) onCoin();
      }
    }
  }, false);

  window.sstimer = {
    start: begin, stop: halt, finish, reset: resetRun,
    coin: onCoin, key: onKey,
    dashboard: () => openDash(),
    get fps() { return currentFps(); },
    get state() { return state; }
  };

  const el = (t, c, txt) => {
    const e = document.createElement(t);
    if (c) e.className = c;
    if (txt != null) e.textContent = txt;
    return e;
  };

  const host = () => {
    const f = document.fullscreenElement;
    return f && f.tagName !== 'CANVAS' && f.tagName !== 'VIDEO' ? f : (document.body || document.documentElement);
  };

  const setVars = e => {
    if (!e) return;
    const L = S.look;
    const h = String(L.bg).replace('#', '');
    const r = parseInt(h.slice(0, 2), 16) || 0, g = parseInt(h.slice(2, 4), 16) || 0, b = parseInt(h.slice(4, 6), 16) || 0;
    e.style.setProperty('--c', L.color);
    e.style.setProperty('--bad', L.bad);
    e.style.setProperty('--w', L.width + 'px');
    e.style.setProperty('--size', L.size + 'px');
    e.style.setProperty('--ds', L.decScale / 100);
    e.style.setProperty('--r', L.radius + 'px');
    e.style.setProperty('--font', L.font);
    e.style.setProperty('--bg', `rgba(${r},${g},${b},${L.opacity / 100})`);
    e.dataset.glass = S.glass ? '1' : '0';
  };

  const apply = () => {
    setVars(root);
    setVars(menu);
    setVars(dash);
    userStyle.textContent = S.css;
    if (realRow) realRow.style.display = S.showReal ? '' : 'none';
    if (locRow) locRow.style.display = S.showLoc ? '' : 'none';
    if (prevRow) prevRow.style.display = S.showPrev ? '' : 'none';
    if (fpsRow) fpsRow.style.display = S.showFps ? '' : 'none';
    if (S.showFps) { startFps(); renderFps(); } else stopFps();
    renderPrev();
    place();
    kick();
  };

  const place = () => {
    const w = root.offsetWidth, h = root.offsetHeight;
    S.pos.x = clamp(S.pos.x, 0, Math.max(0, innerWidth - w));
    S.pos.y = clamp(S.pos.y, 0, Math.max(0, innerHeight - h));
    if (!root.classList.contains('show')) {
      root.style.left = S.pos.x + 'px';
      root.style.top = S.pos.y + 'px';
    }
  };

  let showT = 0;
  const showcase = () => {
    clearTimeout(showT);
    root.classList.add('show');
    root.style.left = '50%';
    root.style.top = '16px';
    paint();
    showT = setTimeout(unshow, 10000);
  };

  function unshow() {
    clearTimeout(showT);
    if (!root || !root.classList.contains('show')) return;
    root.classList.remove('show');
    root.style.left = S.pos.x + 'px';
    root.style.top = S.pos.y + 'px';
  }

  const closeMenu = () => { if (menu && menu.isConnected) menu.remove(); };

  const btn = (txt, fn, c) => {
    const b = el('button', 'sst-btn' + (c ? ' ' + c : ''), txt);
    b.addEventListener('click', fn);
    return b;
  };

  const field = (lab, path, type, o = {}) => {
    const w = el('label', 'sst-f');
    w.append(el('span', '', lab));
    let i, out = null;
    if (type === 'select') {
      i = el('select');
      o.opts.forEach(([v, t]) => { const p = el('option', '', t); p.value = v; i.append(p); });
      i.value = get(S, path);
    } else {
      i = el('input');
      i.type = type;
      Object.assign(i, o.attr || {});
      if (type === 'checkbox') i.checked = get(S, path);
      else i.value = get(S, path);
    }
    i.addEventListener('input', () => {
      let v;
      if (type === 'checkbox') v = i.checked;
      else if (type === 'number' || type === 'range' || o.num) v = Number(i.value);
      else v = i.value;
      if (typeof v === 'number' && v !== v) return;
      set(S, path, v);
      save();
      apply();
      if (out) out.textContent = o.label ? o.label(v) : String(v);
    });
    w.append(i);
    if (type === 'range') {
      out = el('em', 'sst-val', o.label ? o.label(Number(i.value)) : i.value);
      w.append(out);
    }
    return w;
  };

  const get = (o, p) => p.split('.').reduce((a, k) => a[k], o);
  const set = (o, p, v) => {
    const k = p.split('.');
    const l = k.pop();
    k.reduce((a, x) => a[x], o)[l] = v;
  };

  const MODES = [
    ['normal', 'Normal', 'Starts and stops with gameplay'],
    ['nocoins', 'No Coins, Keys', 'Turns red when a coin is collected'],
    ['nocoinskeys', 'No Coins, No Keys', 'Turns red on a coin or a key revive']
  ];
  const modeName = id => (MODES.find(m => m[0] === id) || [0, id])[1];

  const displayPane = () => {
    const p = el('div');
    p.append(
      sec('Timer',
        field('Real time (includes pauses)', 'showReal', 'checkbox'),
        field('Previous run', 'showPrev', 'checkbox'),
        field('Location from URL', 'showLoc', 'checkbox'),
        field('FPS counter', 'showFps', 'checkbox'),
        field('End delay (s)', 'endDelay', 'number', { attr: { min: 0, max: 60, step: 0.5 } })
      ),
      sec('Format',
        field('Hours', 'fmt.hours', 'select', { opts: [['auto', 'Auto'], ['always', 'Always'], ['never', 'Never']] }),
        field('Decimals', 'fmt.decimals', 'select', { num: true, opts: [[0, '0'], [1, '1'], [2, '2'], [3, '3']] }),
        field('Pad minutes', 'fmt.padMin', 'checkbox')
      ),
      sec('Appearance',
        field('Glass effect', 'glass', 'checkbox'),
        field('Font', 'look.font', 'text'),
        field('Size', 'look.size', 'number', { attr: { min: 12, max: 200 } }),
        field('Width', 'look.width', 'number', { attr: { min: 120, max: 800 } }),
        field('Decimal size %', 'look.decScale', 'number', { attr: { min: 20, max: 100 } }),
        field('Corner radius', 'look.radius', 'number', { attr: { min: 0, max: 40 } }),
        field('Color', 'look.color', 'color'),
        field('Penalty color', 'look.bad', 'color'),
        field('Background', 'look.bg', 'color'),
        field('Opacity', 'look.opacity', 'range', { attr: { min: 0, max: 100 }, label: v => v + '%' })
      ),
      sec('Dashboard',
        field('Side', 'dashSide', 'select', { opts: [['left', 'Left'], ['right', 'Right']] })
      )
    );
    const ta = el('textarea');
    ta.value = S.css;
    ta.placeholder = '#sst-root { }';
    ta.spellcheck = false;
    ta.addEventListener('input', () => { S.css = ta.value; save(); userStyle.textContent = S.css; });
    const taWrap = el('div', 'sst-ta');
    taWrap.append(ta);
    p.append(sec('Custom CSS', taWrap));
    const bar = el('div', 'sst-acts');
    bar.append(
      btn('Reset position', () => { S.pos = { x: 16, y: 16 }; save(); place(); }),
      btn('Reset settings', () => {
        const keep = { best: S.best, prev: S.prev };
        S = clone(DEF);
        S.best = keep.best;
        S.prev = keep.prev;
        save(); apply(); renderMenu();
      }, 'dng')
    );
    p.append(bar);
    return p;
  };

  const capturePane = () => {
    const p = el('div');
    const row = el('div', 'sst-f');
    const lab = el('span', '', 'Screen capture');
    const label = () => capOn() ? 'Turn off' : 'Turn on';
    const b = btn(label(), async () => { await toggleCapture(); b.textContent = label(); });
    row.append(lab, b);
    p.append(
      sec('Status', row),
      sec('Recording',
        field('Record video', 'cap.video', 'checkbox'),
        field('Frame rate', 'cap.fps', 'select', { num: true, opts: [[15, '15'], [24, '24'], [30, '30'], [60, '60']] }),
        field('Resolution', 'cap.height', 'select', { num: true, opts: [[480, '480p'], [720, '720p'], [1080, '1080p']] }),
        field('Quality (Mbps)', 'cap.mbps', 'number', { attr: { min: 0.5, max: 12, step: 0.5 } }),
        field('Videos to keep', 'cap.keep', 'number', { attr: { min: 1, max: 100 } })
      )
    );
    return p;
  };

  const editionPane = () => {
    const p = el('div');
    const g = el('div', 'sst-grp');
    const mk = (label, value, desc) => {
      const r = el('div', 'sst-mode' + (SST_EDITION === value ? ' on' : ''));
      const t = el('div');
      t.append(el('b', '', label), el('small', '', desc));
      r.append(el('span', 'sst-dot'), t);
      r.addEventListener('click', () => {
        try { localStorage.setItem(SST_EDITION_KEY, value); } catch (e) {}
        location.reload();
      });
      return r;
    };
    g.append(
      mk('Lite (recommended)', 'lite', 'Minimal, performance-optimized. No theme music, no cheats, no fullscreen replacement.'),
      mk('Legacy (full)', 'legacy', 'All original features including theme music, cheats, and fullscreen frame replacement. May lag on Chromebooks.')
    );
    const s = el('section', 'sst-sec');
    s.append(el('div', 'sst-h', 'Edition'), g);
    p.append(s);
    return p;
  };

  const modePane = () => {
    const p = el('div');
    const g = el('div', 'sst-grp');
    const items = [];
    MODES.forEach(([id, name, desc]) => {
      const r = el('div', 'sst-mode' + (S.mode === id ? ' on' : ''));
      const t = el('div');
      t.append(el('b', '', name), el('small', '', desc));
      r.append(el('span', 'sst-dot'), t);
      r.addEventListener('click', () => {
        S.mode = id;
        save();
        items.forEach(([x, m]) => x.classList.toggle('on', m === id));
      });
      items.push([r, id]);
      g.append(r);
    });
    const s = el('section', 'sst-sec');
    s.append(el('div', 'sst-h', 'Run mode'), g);
    p.append(s);
    return p;
  };

  const sec = (title, ...rows) => {
    const w = el('section', 'sst-sec');
    if (title) w.append(el('div', 'sst-h', title));
    const g = el('div', 'sst-grp');
    g.append(...rows);
    w.append(g);
    return w;
  };

  let tab = 'd';

  const renderMenu = () => {
    menu.textContent = '';
    const head = el('div', 'sst-mh');
    const ttl = el('div', 'sst-mt');
    ttl.append(el('b', '', 'Speedrun timer'), el('span', 'sst-ed', SST_EDITION === 'lite' ? 'Lite' : 'Legacy'));
    head.append(ttl, btn('×', closeMenu, 'sst-x'));
    const tabs = el('div', 'sst-tabs');
    [['d', 'Display'], ['c', 'Capture'], ['m', 'Mode'], ['e', 'Edition']].forEach(([id, name]) => {
      const t = el('div', 'sst-tab' + (tab === id ? ' on' : ''), name);
      t.addEventListener('click', () => { tab = id; renderMenu(); });
      tabs.append(t);
    });
    const body = el('div', 'sst-body');
    body.append(tab === 'd' ? displayPane() : tab === 'c' ? capturePane() : tab === 'm' ? modePane() : editionPane());
    const ft = el('div', 'sst-foot');
    ft.style.flexWrap = 'wrap';
    ft.style.gap = '6px';
    ft.append(btn('Start', begin), btn('Stop', halt), btn('Reset', resetRun), btn('Dashboard', openDash, 'pri'));
    menu.append(head, tabs, body, ft);
  };

  const openMenu = () => {
    renderMenu();
    host().append(menu);
    const r = root.getBoundingClientRect();
    const m = menu.getBoundingClientRect();
    let x = r.right + 8;
    if (x + m.width > innerWidth - 8) x = r.left - m.width - 8;
    if (x < 8) x = clamp(r.left, 8, Math.max(8, innerWidth - m.width - 8));
    const y = Math.max(8, Math.min(r.top, innerHeight - m.height - 8));
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
  };

  const download = (blob, name) => {
    const u = URL.createObjectURL(blob);
    const a = el('a');
    a.href = u;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 5000);
  };

  const stamp = r => new Date(r.id).toISOString().slice(0, 19).replace(/[:T]/g, '-');

  const refreshDash = async () => {
    try {
      dashRuns = (await st('runs', 'readonly', s => s.getAll())).sort((a, b) => b.id - a.id);
    } catch (e) { dashRuns = []; }
    if (dashOpen) renderDash();
  };

  const openDetail = async r => {
    let shot = null, video = null;
    try {
      const res = await Promise.all([
        r.shot ? st('shots', 'readonly', s => s.get(r.id)) : null,
        r.vid ? st('videos', 'readonly', s => s.get(r.id)) : null
      ]);
      shot = res[0] && res[0].blob;
      video = res[1] && res[1].blob;
    } catch (e) {}
    const wrapEl = el('div', 'sst-detail');
    const box = el('div', 'sst-dbox');
    const u = [];
    const url = b => { const x = URL.createObjectURL(b); u.push(x); return x; };
    const close = () => { u.forEach(x => URL.revokeObjectURL(x)); wrapEl.remove(); };
    let mediaEl;
    if (video) {
      mediaEl = el('video');
      mediaEl.src = url(video);
      mediaEl.controls = true;
      mediaEl.autoplay = true;
      mediaEl.loop = true;
    } else if (shot) {
      mediaEl = el('img');
      mediaEl.src = url(shot);
    } else mediaEl = el('div', 'sst-none', 'No capture');
    const info = el('div', 'sst-di');
    const kv = el('div', 'sst-kv');
    const add = (k, v) => { const d = el('div'); d.append(el('span', '', k), el('em', '', v)); kv.append(d); };
    add('Mode', modeName(r.mode));
    add('Location', r.city || 'Not recorded');
    add('Real time', fmt(r.real).join(''));
    add('Result', r.valid ? 'Valid' : 'Invalid (' + r.reason + ')');
    add('Date', new Date(r.id).toLocaleString());
    info.append(el('b', r.valid ? '' : 'bad', fmt(r.game).join('')), kv);
    const bar = el('div', 'sst-db');
    if (video) bar.append(btn('Download video', () => download(video, 'run-' + stamp(r) + '.webm')));
    if (shot) bar.append(btn('Download screenshot', () => download(shot, 'run-' + stamp(r) + '.jpg')));
    const del = el('button', 'sst-btn dng', 'Delete run');
    let armed = false;
    del.addEventListener('click', async () => {
      if (!armed) { armed = true; del.textContent = 'Confirm delete'; return; }
      try {
        await tx(['runs', 'shots', 'videos'], 'readwrite', t => {
          ['runs', 'shots', 'videos'].forEach(n => t.objectStore(n).delete(r.id));
        });
      } catch (e) {}
      close();
      refreshDash();
    });
    bar.append(del, btn('Close', close));
    box.append(mediaEl, info, bar);
    wrapEl.append(box);
    wrapEl.addEventListener('click', e => { if (e.target === wrapEl) close(); });
    dash.append(wrapEl);
  };

  const thumb = th => {
    st('shots', 'readonly', s => s.get(Number(th.dataset.id))).then(m => {
      if (!m || !dashOpen || !th.isConnected) return;
      const u = URL.createObjectURL(m.blob);
      urls.push(u);
      const img = el('img');
      img.decoding = 'async';
      img.src = u;
      th.prepend(img);
    }).catch(() => {});
  };

  const renderDash = () => {
    urls.forEach(u => URL.revokeObjectURL(u));
    urls = [];
    dash.textContent = '';
    const dw = el('div', 'sst-dw');
    const head = el('div', 'sst-dh');
    const ttl = el('div', 'sst-dt');
    ttl.append(el('h2', '', 'Runs'), el('div', 'sst-dsub', dashRuns.length + ' runs'));
    head.append(
      ttl,
      btn(capOn() ? 'Capture off' : 'Capture on', toggleCapture),
      btn('Export JSON', () => download(new Blob([JSON.stringify(dashRuns, null, 2)], { type: 'application/json' }), 'runs.json')),
      btn('Close', closeDash, 'pri')
    );
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      thumb(e.target);
    }), { root: dash, rootMargin: '300px' });
    const grid = el('div', 'sst-grid');
    const pending = [];
    dashRuns.forEach(r => {
      const c = el('div', 'sst-card' + (r.valid ? '' : ' bad'));
      const th = el('div', 'sst-th', r.shot ? '' : 'No capture');
      if (r.shot) { th.dataset.id = r.id; pending.push(th); }
      const bd = el('div', 'sst-bdg');
      if (!r.valid) bd.append(el('span', 'sst-b bad', 'Invalid: ' + r.reason));
      if (r.vid) bd.append(el('span', 'sst-b', 'Video'));
      th.append(bd);
      const ci = el('div', 'sst-ci');
      ci.append(
        el('div', 'sst-ct', fmt(r.game).join('')),
        el('div', 'sst-cs', new Date(r.id).toLocaleString())
      );
      c.append(th, ci);
      c.addEventListener('click', () => openDetail(r));
      grid.append(c);
    });
    if (!dashRuns.length) grid.append(el('div', 'sst-none', 'No runs yet.'));
    dw.append(head, grid);
    dash.append(dw);
    pending.forEach(t => obs.observe(t));
  };

  const openDash = async () => {
    closeMenu();
    if (!dash) {
      dash = el('div');
      dash.id = 'sst-dash';
      dash.dataset.side = S.dashSide;
      ['keydown', 'keyup', 'keypress', 'pointerdown', 'pointerup', 'mousedown', 'touchstart', 'wheel'].forEach(t =>
        dash.addEventListener(t, e => e.stopPropagation())
      );
      setVars(dash);
    }
    host().append(dash);
    dashOpen = true;
    await refreshDash();
  };

  const closeDash = () => {
    dashOpen = false;
    urls.forEach(u => URL.revokeObjectURL(u));
    urls = [];
    if (dash) dash.remove();
  };

  const CSS = `
#sst-root{position:fixed;z-index:2147483647;width:var(--w);box-sizing:border-box;padding:8px 14px 10px;background:var(--bg);border:1px solid rgba(255,255,255,.07);border-radius:var(--r);box-shadow:0 8px 24px rgba(0,0,0,.4);color:#fff;font-family:var(--font);cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none;contain:layout style;transform-origin:top center}
#sst-root.drag{cursor:grabbing}
#sst-root.show{transform:translateX(-50%) scale(1.6)}
#sst-root.rec::before{content:'';position:absolute;left:7px;top:7px;width:7px;height:7px;border-radius:50%;background:var(--bad);box-shadow:0 0 8px var(--bad)}
.sst-time{text-align:right;line-height:1.05;white-space:nowrap;font-variant-numeric:tabular-nums;color:var(--c)}
.sst-main{font-size:var(--size);font-weight:600}
.sst-dec{font-size:calc(var(--size) * var(--ds));font-weight:600}
#sst-root.bad .sst-time{color:var(--bad)}
.sst-row{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:13px;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.07);line-height:1.3}
.sst-row>span{color:#9aa2aa}
.sst-row b{font-weight:600;font-variant-numeric:tabular-nums;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sst-row b.ahead{color:var(--c)}
.sst-row b.behind{color:var(--bad)}
.sst-row b.fps-good{color:var(--c)}
.sst-row b.fps-mid{color:#f2c14e}
.sst-row b.fps-low{color:var(--bad)}
#sst-root[data-glass="1"]{backdrop-filter:blur(8px) saturate(1.4);-webkit-backdrop-filter:blur(8px) saturate(1.4);border-color:rgba(255,255,255,.15)}
#sst-menu{position:fixed;z-index:2147483647;width:320px;max-height:78vh;display:flex;flex-direction:column;background:#0e1012;border:1px solid #252a2f;border-radius:14px;color:#e8eaec;font:13px/1.35 'Segoe UI',system-ui,sans-serif;box-shadow:0 18px 48px rgba(0,0,0,.55);overflow:hidden}
.sst-mh{display:flex;align-items:flex-start;gap:10px;padding:14px 14px 10px}
.sst-mt{flex:1;min-width:0}
.sst-mt b{display:block;font-size:15px;font-weight:600}
.sst-ed{display:inline-block;margin-top:2px;padding:1px 8px;border-radius:999px;background:#1b1f23;border:1px solid #252a2f;color:#8b939b;font-size:11px}
.sst-btn.sst-x{width:28px;height:28px;padding:0;margin:0;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;border-radius:8px}
.sst-tabs{display:flex;gap:2px;margin:0 14px;padding:3px;background:#090a0b;border:1px solid #252a2f;border-radius:10px}
.sst-tab{flex:1;padding:6px 0;text-align:center;cursor:pointer;color:#8b939b;border-radius:7px;font-weight:500}
.sst-tab:hover{color:#d6dade}
.sst-tab.on{background:#1b1f23;color:#fff;box-shadow:inset 0 -2px 0 var(--c)}
.sst-body{flex:1;min-height:0;overflow:auto;padding:4px 14px 14px;scrollbar-width:none}
.sst-body::-webkit-scrollbar,#sst-dash::-webkit-scrollbar,.sst-dbox::-webkit-scrollbar{display:none}
.sst-sec{margin-top:14px}
.sst-h{margin:0 0 6px 2px;font-size:12px;font-weight:600;color:#a4abb2}
.sst-grp{background:#15181b;border:1px solid #252a2f;border-radius:10px;overflow:hidden}
.sst-grp>*+*{border-top:1px solid #252a2f}
.sst-f{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 10px;min-height:36px;margin:0}
.sst-f>span{flex:1;min-width:0}
.sst-f input:not([type=checkbox]):not([type=range]):not([type=color]),.sst-f select,.sst-ta textarea,.sst-btn,#sst-dash select{background:#0e1012;border:1px solid #2f353b;color:#e8eaec;border-radius:7px;font:inherit;padding:4px 8px;outline:none}
.sst-f input:focus,.sst-f select:focus,.sst-ta textarea:focus,#sst-dash select:focus{border-color:var(--c)}
.sst-f input[type=number]{width:76px}
.sst-f input[type=text]{width:150px}
.sst-f input[type=color]{width:38px;height:24px;padding:1px;background:none;border:1px solid #2f353b;border-radius:6px;cursor:pointer}
.sst-f input[type=range]{width:100px;padding:0;accent-color:var(--c)}
.sst-val{flex:none;min-width:62px;text-align:right;font-style:normal;color:#8b939b;font-variant-numeric:tabular-nums}
.sst-f input[type=checkbox]{appearance:none;-webkit-appearance:none;flex:none;width:34px;height:20px;margin:0;padding:0;border:0;border-radius:10px;background:#2a3036;position:relative;cursor:pointer;transition:background .15s}
.sst-f input[type=checkbox]::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#aab1b8;transition:transform .15s,background .15s}
.sst-f input[type=checkbox]:checked{background:var(--c)}
.sst-f input[type=checkbox]:checked::after{transform:translateX(14px);background:#fff}
.sst-ta{padding:8px}
.sst-ta textarea{width:100%;height:90px;font-family:ui-monospace,Consolas,monospace;font-size:12px;resize:vertical;border-radius:6px}
.sst-btn{cursor:pointer;padding:6px 12px;font-weight:500;transition:border-color .12s,background .12s,color .12s}
.sst-btn:hover{border-color:#566069;background:#1b1f23}
.sst-btn.pri{background:var(--c);border-color:var(--c);color:#06120a}
.sst-btn.pri:hover{filter:brightness(1.1);background:var(--c)}
.sst-btn.dng:hover{border-color:var(--bad);color:var(--bad)}
.sst-f .sst-btn{margin:0;padding:4px 12px}
.sst-acts{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.sst-foot{padding:10px 14px 14px;border-top:1px solid #252a2f;display:flex}
.sst-foot .sst-btn{flex:1;padding:8px 12px}
.sst-mode{display:flex;gap:10px;padding:10px;cursor:pointer;align-items:flex-start;transition:background .12s}
.sst-mode:hover{background:#181c20}
.sst-mode b{display:block;font-weight:500}
.sst-mode small{display:block;color:#8b939b;margin-top:2px}
.sst-dot{flex:none;width:12px;height:12px;border-radius:50%;border:1.5px solid #59616a;margin-top:3px}
.sst-mode.on .sst-dot{border-color:var(--c);background:radial-gradient(circle,var(--c) 0 3px,transparent 4px)}
#sst-dash{position:fixed;top:0;bottom:0;width:min(420px,90vw);z-index:2147483646;background:#08090a;color:#e8eaec;font:13px/1.35 'Segoe UI',system-ui,sans-serif;overflow:auto;scrollbar-width:none;border-right:1px solid #252a2f}
#sst-dash[data-side="right"]{right:0;left:auto;border-right:0;border-left:1px solid #252a2f}
#sst-dash[data-side="left"]{left:0;right:auto}
.sst-dw{padding:0 16px 24px}
.sst-dh{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px 0 12px;background:#08090a;border-bottom:1px solid #252a2f}
.sst-dt{margin-right:auto}
.sst-dt h2{margin:0;font-size:20px;font-weight:600}
.sst-dsub{color:#8b939b;margin-top:2px;font-size:12px}
.sst-dh .sst-btn{margin:0;padding:4px 10px;font-size:12px}
.sst-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding-top:12px}
.sst-card{background:#15181b;border:1px solid #252a2f;border-radius:10px;overflow:hidden;cursor:pointer;transition:border-color .12s}
.sst-card:hover{border-color:#4a525a}
.sst-card.bad{border-color:#3a2220}
.sst-th{position:relative;aspect-ratio:16/9;background:#0a0b0c;display:flex;align-items:center;justify-content:center;color:#4a525a;font-size:11px}
.sst-th img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.sst-bdg{position:absolute;z-index:1;top:6px;left:6px;right:6px;display:flex;flex-wrap:wrap;gap:4px}
.sst-b{padding:1px 6px;border-radius:999px;font-size:10px;font-weight:600;background:rgba(0,0,0,.7);color:#e2e5e8}
.sst-b.bad{background:var(--bad);color:#fff}
.sst-ci{padding:8px 10px 10px}
.sst-ct{font-size:20px;font-weight:600;color:var(--c);font-variant-numeric:tabular-nums}
.sst-card.bad .sst-ct{color:var(--bad)}
.sst-cs{color:#8b939b;font-size:11px;margin-top:4px}
.sst-none{color:#8b939b;padding:32px 16px;text-align:center;grid-column:1/-1;font-size:12px}
.sst-detail{position:fixed;inset:0;z-index:3;background:rgba(0,0,0,.86);display:flex;align-items:center;justify-content:center;padding:20px}
.sst-dbox{background:#0e1012;border:1px solid #252a2f;border-radius:14px;max-width:min(900px,100%);max-height:100%;overflow:auto;padding:12px;scrollbar-width:none}
.sst-dbox video,.sst-dbox img{max-width:100%;max-height:56vh;display:block;margin:0 auto;border-radius:8px}
.sst-di{margin:12px 0 10px}
.sst-di>b{display:block;font-size:26px;font-weight:600;color:var(--c);font-variant-numeric:tabular-nums}
.sst-di>b.bad{color:var(--bad)}
.sst-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px 16px;margin-top:8px}
.sst-kv span{display:block;color:#8b939b;font-size:11px}
.sst-kv em{font-style:normal;font-size:12px}
.sst-db{display:flex;flex-wrap:wrap;gap:6px}
.sst-db .sst-btn{margin:0;padding:5px 10px;font-size:12px}
`;

  const init = () => {
    baseStyle = el('style');
    baseStyle.textContent = CSS;
    userStyle = el('style');
    document.documentElement.append(baseStyle, userStyle);

    root = el('div');
    root.id = 'sst-root';
    const time = el('div', 'sst-time');
    mainEl = el('span', 'sst-main', '0:00');
    decEl = el('span', 'sst-dec', '.00');
    time.append(mainEl, decEl);
    realRow = el('div', 'sst-row');
    realV = el('b');
    realRow.append(el('span', '', 'Real Time'), realV);
    locRow = el('div', 'sst-row');
    locV = el('b');
    locRow.append(el('span', '', 'Location'), locV);
    prevRow = el('div', 'sst-row');
    prevV = el('b');
    prevRow.append(el('span', '', 'Previous Run'), prevV);
    fpsRow = el('div', 'sst-row');
    fpsV = el('b', '', '—');
    fpsRow.append(el('span', '', 'FPS'), fpsV);
    root.append(time, realRow, locRow, prevRow, fpsRow);

    menu = el('div');
    menu.id = 'sst-menu';
    ['keydown', 'keyup', 'keypress', 'pointerdown', 'pointerup', 'mousedown', 'touchstart', 'wheel'].forEach(t =>
      menu.addEventListener(t, e => e.stopPropagation())
    );

    host().append(root);

    let dn = null;
    root.addEventListener('contextmenu', e => e.preventDefault());
    root.addEventListener('pointerdown', e => {
      if (e.button !== 0 || root.classList.contains('show')) return;
      e.stopPropagation();
      e.preventDefault();
      closeMenu();
      const r = root.getBoundingClientRect();
      dn = {
        x: e.clientX, y: e.clientY, ox: e.clientX - r.left, oy: e.clientY - r.top, moved: false,
        t: setTimeout(() => { if (dn && !dn.moved) { openMenu(); } }, 500)
      };
      try { root.setPointerCapture(e.pointerId); } catch (_) {}
    });
    root.addEventListener('pointermove', e => {
      if (!dn || dn.moved === undefined) return;
      if (!dn.moved) {
        if (Math.hypot(e.clientX - dn.x, e.clientY - dn.y) < 6) return;
        dn.moved = true;
        clearTimeout(dn.t);
        root.classList.add('drag');
      }
      S.pos.x = clamp(e.clientX - dn.ox, 0, Math.max(0, innerWidth - root.offsetWidth));
      S.pos.y = clamp(e.clientY - dn.oy, 0, Math.max(0, innerHeight - root.offsetHeight));
      root.style.left = S.pos.x + 'px';
      root.style.top = S.pos.y + 'px';
    });
    const end = () => {
      if (!dn) return;
      clearTimeout(dn.t);
      if (dn.moved) save();
      root.classList.remove('drag');
      dn = null;
    };
    root.addEventListener('pointerup', end);
    root.addEventListener('pointercancel', end);

    document.addEventListener('pointerdown', e => {
      if (menu.isConnected && !menu.contains(e.target) && !root.contains(e.target)) closeMenu();
    }, true);

    window.addEventListener('keydown', e => {
      if (e.key === 'F7') { e.preventDefault(); e.stopPropagation(); dashOpen ? closeDash() : openDash(); return; }
      if (dashOpen) {
        if (e.key === 'Escape') closeDash();
        e.stopPropagation();
      }
    }, true);
    ['keyup', 'keypress'].forEach(t => window.addEventListener(t, e => { if (dashOpen) e.stopPropagation(); }, true));

    document.addEventListener('fullscreenchange', () => {
      const h = host();
      h.append(root);
      if (menu.isConnected) h.append(menu);
      if (dashOpen) h.append(dash);
    });

    window.addEventListener('resize', place);

    apply();

    setInterval(() => { if (state === 'idle' && S.showLoc) render(); }, 1000);
    ['popstate', 'hashchange'].forEach(t => window.addEventListener(t, () => { if (state === 'idle') render(); }));
  };

  init();
}

/* ============================================================
   LEGACY EDITION — full original timer (music, cheats, etc.)
   ============================================================ */
function speedrunTimerLegacy() {
  'use strict';

  const startFpsReporter = (intervalMs = 500) => {
    if (window.__sstFpsReporter) return;
    window.__sstFpsReporter = true;
    let frames = 0;
    let last = performance.now();
    const tick = t => {
      frames++;
      const dt = t - last;
      if (dt >= intervalMs) {
        const fps = Math.round(frames * 1000 / dt);
        frames = 0;
        last = t;
        try { window.top.postMessage({ __sst: true, type: 'fps', fps }, '*'); } catch (e) {}
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (window.top !== window) {
    startFpsReporter();
    return;
  }

  sstLog('timer: speedrunTimer() entered', {
    readyState: document.readyState, hasBody: !!document.body,
    timerElementsAlreadyInDom: document.querySelectorAll('#sst-root').length
  }, 'timer-enter');
  if (SST_PAGE.__sstimerLoaded) {
    sstLog('timer: DUPLICATE speedrunTimer() call blocked (already loaded by ' + SST_PAGE.__sstimerLoaded + ')', undefined, 'timer-dup');
    return;
  }
  SST_PAGE.__sstimerLoaded = SST_VERSION;
  const INST = Math.random().toString(36).slice(2, 7);

  const KEY = 'sstimer.v2';
  const LS = window.localStorage;
  const origSet = Storage.prototype.setItem;

  const DEF = {
    mode: 'normal',
    pos: { x: 16, y: 16 },
    show: { game: true, real: false, prev: true, city: true, fps: false },
    fmt: { hours: 'auto', decimals: 2, padMin: false },
    look: {
      font: "'Segoe UI', system-ui, sans-serif",
      size: 52, width: 260, radius: 6, decScale: 55,
      color: '#22d05a', bad: '#e5342b', bg: '#0d0d0d', opacity: 90,
      theme: 'flat'
    },
    cap: { shot: false, video: true, keep: 5, mbps: 1.5, fps: 30, height: 720 },
    det: { coinRe: 'coin', keyRe: 'key', coin: [], key: [] },
    endDelay: 6,
    showSecs: 10,
    css: '',
    best: {},
    prev: null,
    perf: { recordingReducesWork: true }
  };

  const clone = o => JSON.parse(JSON.stringify(o));
  const merge = (a, b) => {
    for (const k in b) {
      if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k] && typeof a[k] === 'object') merge(a[k], b[k]);
      else a[k] = b[k];
    }
    return a;
  };
  const get = (o, p) => p.split('.').reduce((a, k) => a[k], o);
  const set = (o, p, v) => {
    const k = p.split('.');
    const l = k.pop();
    k.reduce((a, x) => a[x], o)[l] = v;
  };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad = n => String(n).padStart(2, '0');

  let S = clone(DEF);
  try {
    const raw = LS.getItem(KEY) || LS.getItem('sstimer.v1');
    if (raw) merge(S, JSON.parse(raw));
  } catch (e) {}
  if (!S.best || typeof S.best !== 'object') S.best = {};
  if (!S._cityMig) { S.show.city = true; S._cityMig = true; }
  const save = () => { try { origSet.call(LS, KEY, JSON.stringify(S)); } catch (e) {} };

  let state = 'idle', gameMs = 0, gameAt = 0, realStart = 0, realEnd = 0, lastStop = 0, endT = 0, invalid = false, raf = 0, dbg = SST_DEBUG.console;
  const now = () => performance.now();
  const active = () => state === 'running' || state === 'paused';
  const gameTime = () => state === 'running' ? gameMs + now() - gameAt : gameMs;
  const realTime = () => state === 'idle' ? 0 : (state === 'finished' ? realEnd : now()) - realStart;

  const prettyCity = s => {
    let c = String(s).replace(/[-_+]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (c && c === c.toLowerCase()) c = c.replace(/(^|\s)(\p{L})/gu, (_, a, b) => a + b.toUpperCase());
    return c;
  };

  let frameHref = '';
  const themeSources = () => {
    const out = [];
    try { out.push(['page.href', location.href]); } catch (e) {}
    if (frameHref) out.push(['frame.reported', frameHref]);
    try {
      document.querySelectorAll('iframe').forEach(f => {
        const s = f.getAttribute('src') || f.src;
        if (s) out.push(['iframe#' + (f.id || f.className || '?'), s]);
      });
    } catch (e) {}
    if (document.referrer) out.push(['referrer', document.referrer]);
    return out;
  };

  const THEME_KEYS = ['theme', 'city', 'location', 'map'];
  const parseTheme = href => {
    let raw = '';
    try {
      const u = new URL(href, location.href);
      for (const k of THEME_KEYS) { raw = u.searchParams.get(k) || ''; if (raw) break; }
      if (!raw && u.hash) {
        const hp = new URLSearchParams(u.hash.replace(/^#\??/, ''));
        for (const k of THEME_KEYS) { raw = hp.get(k) || ''; if (raw) break; }
      }
      if (!raw) {
        const pm = u.pathname.match(/(?:theme|city)[=\/](\d+(?:-[^\/?#]*)?)/i);
        if (pm) raw = decodeURIComponent(pm[1]);
      }
    } catch (e) {}
    try { raw = decodeURIComponent(raw); } catch (e) {}
    const m = raw.match(/^(\d+)-(.*)$/);
    if (m) return { theme: Number(m[1]), city: prettyCity(m[2]) };
    if (/^\d+$/.test(raw)) return { theme: Number(raw), city: '' };
    return null;
  };

  const readTheme = () => {
    for (const [label, href] of themeSources()) {
      const r = parseTheme(href);
      if (r) return { theme: r.theme, city: r.city, from: label };
    }
    return { theme: null, city: '', from: '' };
  };

  let runCtx = { theme: null, city: '' };

  const fmt = ms => {
    ms = Math.max(0, ms);
    const d = S.fmt.decimals;
    const tot = Math.floor(ms / 1000);
    let h = Math.floor(tot / 3600), m = Math.floor(tot % 3600 / 60);
    const s = tot % 60;
    const showH = S.fmt.hours === 'always' || (S.fmt.hours === 'auto' && h > 0);
    let main;
    if (showH) main = h + ':' + pad(m) + ':' + pad(s);
    else { m += h * 60; main = (S.fmt.padMin ? pad(m) : m) + ':' + pad(s); }
    const dec = d ? '.' + String(Math.floor(ms % 1000)).padStart(3, '0').slice(0, d) : '';
    return [main, dec];
  };

  const fmtD = ms => {
    const sign = ms < 0 ? '-' : '+';
    const a = Math.abs(ms) / 1000;
    if (a >= 60) return sign + Math.floor(a / 60) + ':' + (a % 60).toFixed(1).padStart(4, '0');
    return sign + a.toFixed(1);
  };

  const MODES = [
    ['normal', 'Normal', 'Starts and stops with gameplay'],
    ['nocoins', 'No Coins, Keys', 'Turns red when a coin is collected'],
    ['nocoinskeys', 'No Coins, No Keys', 'Turns red on a coin or a key revive']
  ];
  const modeName = id => (MODES.find(m => m[0] === id) || [0, id])[1];

  let dbq = null;
  const dbp = () => dbq || (dbq = new Promise((res, rej) => {
    const r = indexedDB.open('sstimer', 2);
    r.onupgradeneeded = () => {
      const db = r.result, t = r.transaction;
      ['runs', 'shots', 'videos'].forEach(n => { if (!db.objectStoreNames.contains(n)) db.createObjectStore(n, { keyPath: 'id' }); });
      if (db.objectStoreNames.contains('media')) {
        const rq = t.objectStore('media').openCursor();
        rq.onsuccess = () => {
          const c = rq.result;
          if (c) {
            const m = c.value;
            if (m.shot) t.objectStore('shots').put({ id: m.id, blob: m.shot });
            if (m.video) t.objectStore('videos').put({ id: m.id, blob: m.video });
            c.continue();
          } else db.deleteObjectStore('media');
        };
      }
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));

  const tx = async (names, mode, fn) => {
    const db = await dbp();
    return new Promise((res, rej) => {
      const t = db.transaction(names, mode);
      let out;
      const q = fn(t);
      if (q && 'onsuccess' in q) q.onsuccess = () => { out = q.result; };
      t.oncomplete = () => res(out);
      t.onerror = t.onabort = () => rej(t.error);
    });
  };
  const st = (n, mode, fn) => tx(n, mode, t => fn(t.objectStore(n)));

  const cap = { stream: null, track: null, rec: null };
  const capOn = () => !!(cap.track && cap.track.readyState === 'live');

  const setFps = f => {
    if (!capOn()) return;
    try { cap.track.applyConstraints({ frameRate: f }).catch(() => {}); } catch (e) {}
  };

  const perfActive = () => capOn() && S.perf.recordingReducesWork;
  const isRecording = () => !!cap.rec;

  let mime;
  const pickMime = () => {
    if (mime === undefined) mime = ['video/webm;codecs=h264', 'video/webm;codecs=vp8', 'video/webm;codecs=vp9', 'video/webm'].find(m => MediaRecorder.isTypeSupported(m)) || '';
    return mime;
  };

  const startRec = () => {
    if (!S.cap.video || !capOn() || cap.rec) return;
    try {
      setFps(S.cap.fps);
      const opt = { videoBitsPerSecond: Math.max(0.5, S.cap.mbps) * 1e6 };
      if (pickMime()) opt.mimeType = pickMime();
      const r = new MediaRecorder(cap.stream, opt);
      r.c = [];
      r.ondataavailable = e => { if (e.data && e.data.size) r.c.push(e.data); };
      r.start(4000);
      cap.rec = r;
    } catch (e) { console.warn('[timer] recorder failed', e); }
    paint();
    applyPerfMode();
  };

  const stopRec = () => new Promise(res => {
    const r = cap.rec;
    cap.rec = null;
    paint();
    applyPerfMode();
    if (!r || r.state === 'inactive') return res(null);
    r.onstop = () => res(r.c.length ? new Blob(r.c, { type: r.mimeType }) : null);
    r.stop();
  });

  const dropRec = () => {
    const r = cap.rec;
    cap.rec = null;
    if (r && r.state !== 'inactive') {
      r.ondataavailable = null;
      r.onstop = null;
      try { r.stop(); } catch (e) {}
    }
    setFps(1);
    paint();
    applyPerfMode();
  };

  const grabShot = () => {
    const job = (async () => {
      if (!capOn()) return null;
      let src, w, h, v = null;
      if (window.ImageCapture) {
        src = await new ImageCapture(cap.track).grabFrame();
        w = src.width;
        h = src.height;
      } else {
        v = document.createElement('video');
        v.muted = true;
        v.srcObject = cap.stream;
        await v.play();
        await new Promise(r => v.requestVideoFrameCallback ? v.requestVideoFrameCallback(r) : setTimeout(r, 250));
        src = v;
        w = v.videoWidth;
        h = v.videoHeight;
      }
      if (!w) return null;
      const k = Math.min(1, 960 / w);
      const c = document.createElement('canvas');
      c.width = Math.round(w * k);
      c.height = Math.round(h * k);
      c.getContext('2d', { alpha: false }).drawImage(src, 0, 0, c.width, c.height);
      if (src.close) src.close();
      if (v) { v.pause(); v.srcObject = null; }
      return new Promise(r => c.toBlob(r, 'image/jpeg', 0.72));
    })().catch(() => null);
    return Promise.race([job, new Promise(r => setTimeout(() => r(null), 1500))]);
  };

  const disableCapture = () => {
    dropRec();
    if (cap.stream) cap.stream.getTracks().forEach(t => t.stop());
    cap.stream = cap.track = null;
    paint();
    applyPerfMode();
    if (dashOpen) renderDash();
  };

  const enableCapture = async () => {
    try {
      const fps = S.cap.fps;
      const height = S.cap.height;
      const s = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: { ideal: fps, max: fps },
          width: { ideal: Math.round(height * 16 / 9), max: Math.round(height * 16 / 9) },
          height: { ideal: height, max: height }
        },
        audio: false,
        preferCurrentTab: true, selfBrowserSurface: 'include', surfaceSwitching: 'exclude'
      });
      cap.stream = s;
      cap.track = s.getVideoTracks()[0];
      cap.track.addEventListener('ended', disableCapture);
      setFps(1);
      paint();
      applyPerfMode();
      if (dashOpen) renderDash();
    } catch (e) { console.warn('[timer] capture denied', e); }
  };

  const toggleCapture = async () => {
    if (capOn()) disableCapture();
    else await enableCapture();
  };

  const prune = async () => {
    const runs = (await st('runs', 'readonly', s => s.getAll())).sort((a, b) => b.id - a.id);
    const old = runs.filter(r => r.vid).slice(Math.max(1, S.cap.keep));
    if (!old.length) return;
    await tx(['runs', 'videos'], 'readwrite', t => {
      old.forEach(r => {
        t.objectStore('videos').delete(r.id);
        r.vid = false;
        t.objectStore('runs').put(r);
      });
    });
  };

  const saveRun = async (run, shot, video) => {
    try {
      await tx(['runs', 'shots', 'videos'], 'readwrite', t => {
        t.objectStore('runs').put(run);
        if (shot) t.objectStore('shots').put({ id: run.id, blob: shot });
        if (video) t.objectStore('videos').put({ id: run.id, blob: video });
      });
      await prune();
      if (dashOpen) refreshDash();
    } catch (e) { console.warn('[timer] save failed', e); }
  };

  const deleteVideos = async () => {
    try {
      const runs = await st('runs', 'readonly', s => s.getAll());
      await tx(['runs', 'videos'], 'readwrite', t => {
        t.objectStore('videos').clear();
        runs.forEach(r => {
          if (r.vid) {
            r.vid = false;
            t.objectStore('runs').put(r);
          }
        });
      });
    } catch (e) {}
    await refreshDash();
  };

  let root, menu, dash, mainEl, decEl, realRow, realV, cityRow, cityV, prevRow, prevV, fpsRow, fpsV, capBtn, baseStyle, userStyle, io = null;
  let tab = 'd', showT = 0, animT = 0, soundIv = 0, dashOpen = false, dashRuns = [], dashVids = { n: 0, mb: 0 }, urls = [], listening = false;
  let fpsRaf = 0, fpsFrames = 0, fpsLast = 0, fpsLocal = 0, frameFps = 0, frameFpsAt = 0;
  let perfMode = 'normal';
  const NOCITY = '__none';
  const dFilter = { mode: 'all', ok: 'all', city: 'all', sort: 'new' };

  const setT = (e, t) => { if (e.textContent !== t) e.textContent = t; };

  const paint = () => {
    if (!root) return;
    root.classList.toggle('bad', !!invalid);
    root.classList.toggle('rec', !!cap.rec);
    root.classList.toggle('capon', capOn());
    if (invalid) root.title = 'Invalid: ' + invalid;
    else root.title = 'timer instance ' + INST;
    if (dbg) {
      const badColor = getComputedStyle(root).getPropertyValue('--bad').trim();
      if (!root.__sstLoggedBad) {
        root.__sstLoggedBad = true;
        sstLog('timer: invalid color = ' + badColor);
      }
    }
  };

  const renderPrev = () => {
    if (!root) return;
    const p = S.prev, none = !p || p.d == null;
    setT(prevV, none ? '—' : fmtD(p.d));
    prevV.className = none ? '' : (p.d <= 0 ? 'ahead' : 'behind');
  };

  const currentFps = () => (frameFpsAt && now() - frameFpsAt < 2000) ? frameFps : fpsLocal;

  const renderFps = () => {
    if (!root || !fpsV) return;
    const v = currentFps();
    setT(fpsV, v ? v + ' fps' : '—');
    const c = !v ? '' : v >= 55 ? 'fps-good' : v >= 30 ? 'fps-mid' : 'fps-low';
    if (fpsV.className !== c) fpsV.className = c;
  };

  const fpsTick = t => {
    fpsRaf = 0;
    if (!S.show.fps || perfMode === 'recording') return;
    fpsFrames++;
    const dt = t - fpsLast;
    if (dt >= 1000) {
      fpsLocal = Math.round(fpsFrames * 1000 / dt);
      fpsFrames = 0;
      fpsLast = t;
      renderFps();
    }
    fpsRaf = requestAnimationFrame(fpsTick);
  };

  const startFps = () => {
    if (fpsRaf || !S.show.fps || perfMode === 'recording') return;
    fpsFrames = 0;
    fpsLast = now();
    fpsRaf = requestAnimationFrame(fpsTick);
  };

  const stopFps = () => {
    if (fpsRaf) cancelAnimationFrame(fpsRaf);
    fpsRaf = 0;
  };

  let lastRenderMs = 0;
  const render = () => {
    if (!root) return;
    const t = now();
    if (perfMode === 'recording' && t - lastRenderMs < 100) return;
    lastRenderMs = t;
    const g = S.show.game, r = S.show.real;
    const a = fmt(!g && r ? realTime() : gameTime());
    setT(mainEl, a[0]);
    setT(decEl, a[1]);
    if (g && r) setT(realV, fmt(realTime()).join(''));
    if (S.show.city && perfMode !== 'recording') {
      const c = (active() || state === 'finished') ? runCtx : readTheme();
      setT(cityV, c.city || (c.theme != null ? 'Theme ' + c.theme : '—'));
      cityRow.style.display = (c.city || c.theme != null) ? '' : 'none';
    }
  };

  const needLoop = () => state === 'running' || (state === 'paused' && S.show.real);
  const loop = () => {
    raf = 0;
    render();
    if (needLoop()) raf = requestAnimationFrame(loop);
  };
  const kick = () => {
    render();
    paint();
    if (needLoop() && !raf) raf = requestAnimationFrame(loop);
  };

  const snap = {};
  const lastStr = new Map();
  const REL = /coin|keys?/i;
  const SKIP = /keyboard|keyframe|keycode|bind/i;
  const COIN = /coin/i, KEYR = /keys?/i;
  let rebaseDone = false;

  const flat = (o, p, out, d, b) => {
    if (typeof o === 'number') {
      if (o === o && REL.test(p) && !SKIP.test(p)) out[p] = o;
      return;
    }
    if (!o || typeof o !== 'object' || d > 5 || b.n <= 0) return;
    for (const k in o) {
      if (--b.n <= 0) break;
      flat(o[k], p + '.' + k, out, d + 1, b);
    }
  };

  const scan = (k, v, init) => {
    if (!REL.test(k) && !REL.test(v)) return;
    if (lastStr.get(k) === v) return;
    lastStr.set(k, v);
    let o;
    try { o = JSON.parse(v); } catch (e) { o = Number(v); }
    const out = {};
    flat(o, k, out, 0, { n: 2000 });
    for (const p in out) {
      const n = out[p], q = snap[p];
      snap[p] = n;
      if (init || q === undefined) continue;
      if (COIN.test(p) && n > q) { if (dbg) console.log('[timer] coin', p, q, '->', n); onCoin(); }
      else if (KEYR.test(p) && n < q) { if (dbg) console.log('[timer] key', p, q, '->', n); onKey(); }
    }
  };

  const rebase = () => {
    if (S.mode === 'normal') return;
    try {
      for (let i = 0; i < LS.length; i++) {
        const k = LS.key(i);
        if (k === KEY) continue;
        const v = LS.getItem(k);
        if (v && v.length < 50000) scan(k, v, true);
      }
    } catch (e) {}
  };

  const begin = () => {
    sstLog('timer: BEGIN (state was ' + state + ')', undefined, 'timer-begin');
    if (state === 'finished') resetRun();
    clearTimeout(endT);
    if (state === 'idle') {
      realStart = now(); gameMs = 0; invalid = false;
      runCtx = readTheme();
      sstLog('timer: location at run start', { theme: runCtx.theme, city: runCtx.city, from: runCtx.from, sources: themeSources() });
      if (S.cap.video && capOn()) startRec();
    }
    if (state !== 'running') { gameAt = now(); state = 'running'; }
    if (!rebaseDone) { rebase(); rebaseDone = true; }
    kick();
  };

  const resetRun = () => {
    clearTimeout(endT);
    dropRec();
    state = 'idle'; gameMs = 0; realStart = 0; realEnd = 0; invalid = false;
    rebaseDone = false;
    unshow();
    kick();
  };

  const halt = () => {
    if (state !== 'running') return;
    sstLog('timer: HALT at ' + fmt(gameMs + now() - gameAt).join(''), undefined, 'timer-halt');
    gameMs += now() - gameAt;
    lastStop = now();
    state = 'paused';
    clearTimeout(endT);
    endT = setTimeout(finish, S.endDelay * 1000);
    kick();
  };

  const finalize = async run => {
    const vp = stopRec();
    let shot = null;
    if (S.cap.shot && capOn()) {
      setFps(S.cap.fps);
      shot = await grabShot();
    }
    const video = await vp;
    if (!cap.rec) setFps(1);
    run.shot = !!shot;
    run.vid = !!video;
    saveRun(run, shot, video);
  };

  const finish = () => {
    sstLog('timer: finish() called (state=' + state + ')');
    if (state === 'running') halt();
    if (state !== 'paused') return;
    clearTimeout(endT);
    const t = gameMs;
    if (t < 3000) { sstLog('timer: run under 3s discarded (' + Math.round(t) + 'ms)', undefined, 'timer-short'); resetRun(); return; }
    sstLog('timer: run FINISHED ' + fmt(t).join(''), undefined, 'timer-finished');
    state = 'finished';
    realEnd = lastStop;
    const ctx = runCtx.city ? runCtx : readTheme();
    const run = {
      id: Date.now(), mode: S.mode, game: t, real: realEnd - realStart,
      valid: !invalid, reason: invalid || null, shot: false, vid: false,
      theme: ctx.theme, city: ctx.city
    };
    if (!invalid) {
      const b = S.best[S.mode];
      S.prev = { t, d: b == null ? null : t - b };
      if (b == null || t < b) S.best[S.mode] = t;
    }
    save();
    renderPrev();
    closeMenu();
    showcase();
    kick();
    setTimeout(() => {
      run.valid = !invalid;
      run.reason = invalid || null;
      finalize(run);
    }, 500);
  };

  const invalidate = r => {
    if (!invalid && state !== 'idle') { invalid = r; paint(); }
  };
  const onCoin = () => { if (S.mode !== 'normal') invalidate('coin'); };
  const onKey = () => { if (S.mode === 'nocoinskeys') invalidate('key'); };

  const sounds = new Map();
  const cls = new Map();
  const re = { coin: null, key: null };
  const compile = () => {
    cls.clear();
    ['coin', 'key'].forEach(k => {
      try { re[k] = S.det[k + 'Re'] ? new RegExp(S.det[k + 'Re'], 'i') : null; } catch (e) { re[k] = null; }
    });
  };
  const kindOf = sig => {
    let k = cls.get(sig);
    if (k === undefined) {
      const s = sig.toLowerCase();
      k = S.det.coin.includes(sig) ? 'coin'
        : S.det.key.includes(sig) ? 'key'
        : /revive/.test(s) ? 'key'
        : /\bcoin\b/.test(s) && !/revive/.test(s) ? 'coin'
        : re.coin && re.coin.test(sig) && !/revive/.test(sig) ? 'coin'
        : re.key && re.key.test(sig) ? 'key'
        : null;
      if (cls.size > 500) cls.clear();
      cls.set(sig, k);
    }
    return k;
  };

  const watch = () => listening || (S.mode !== 'normal' && !invalid && (state === 'running' || state === 'paused'));

  const onSound = (sig, dur, loop) => {
    if (loop || dur > 4) return;
    if (listening) {
      let e = sounds.get(sig);
      if (!e) {
        e = { sig, n: 0, t: 0 };
        sounds.set(sig, e);
        if (sounds.size > 60) sounds.delete(sounds.keys().next().value);
      }
      e.n++;
      e.t = now();
    }
    if (S.mode === 'normal' || invalid || !active()) return;
    const k = kindOf(sig);
    if (k === 'coin') { if (dbg) console.log('[timer] coin sound', sig); onCoin(); }
    else if (k === 'key') { if (dbg) console.log('[timer] key sound', sig); onKey(); }
  };

  try {
    const abUrl = new WeakMap(), bufUrl = new WeakMap(), baseOf = new WeakMap();

    const oa = Response.prototype.arrayBuffer;
    Response.prototype.arrayBuffer = function () {
      const u = this.url;
      return oa.call(this).then(b => { if (u) abUrl.set(b, u); return b; });
    };

    const osend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
      if (this.responseType === 'arraybuffer') {
        this.addEventListener('load', () => {
          try { if (this.response) abUrl.set(this.response, this.responseURL); } catch (e) {}
        });
      }
      return osend.apply(this, arguments);
    };

    const BAC = window.BaseAudioContext || window.AudioContext;
    const od = BAC.prototype.decodeAudioData;
    BAC.prototype.decodeAudioData = function (ab, ok, err) {
      const u = abUrl.get(ab);
      const tag = b => { if (b && u) bufUrl.set(b, u); return b; };
      const p = od.call(this, ab, ok ? b => ok(tag(b)) : undefined, err);
      return p && p.then ? p.then(tag) : p;
    };

    const baseSig = b => {
      let s = baseOf.get(b);
      if (!s) {
        const u = bufUrl.get(b);
        s = u && !u.startsWith('blob:') ? u.split('?')[0].split('/').slice(-2).join('/') : 'buf:' + b.length + ':' + b.sampleRate;
        baseOf.set(b, s);
      }
      return s;
    };

    const os = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (when, off) {
      if (watch()) {
        try {
          const b = this.buffer;
          if (b) onSound(off ? baseSig(b) + '@' + Number(off).toFixed(2) : baseSig(b), b.duration, this.loop);
        } catch (e) {}
      }
      return os.apply(this, arguments);
    };

    const op = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      if (watch()) {
        try {
          const s = this.currentSrc || this.src || '';
          const sig = s && !s.startsWith('blob:') ? s.split('?')[0].split('/').slice(-2).join('/') : 'media:' + Math.round((this.duration || 0) * 100);
          onSound(sig, this.duration || 0, this.loop);
        } catch (e) {}
      }
      return op.apply(this, arguments);
    };
  } catch (e) { console.warn('[timer] audio hook failed', e); }

  Storage.prototype.setItem = function (k, v) {
    const r = origSet.apply(this, arguments);
    if (this === LS && k !== KEY && S.mode !== 'normal' && !invalid) {
      try {
        const s = String(v);
        if (s.length < 50000) scan(k, s, false);
      } catch (e) {}
    }
    return r;
  };

  const handleEvent = (type, via) => {
    sstLog('timer: event "' + type + '" via ' + via + ' (state=' + state + ')', undefined, 'ev-' + type);
    switch (type) {
      case 'gameplayStart': begin(); break;
      case 'gameplayStop': halt(); break;
      case 'commercialBreak': if (active()) finish(); break;
      case 'reset': resetRun(); break;
    }
  };

  window.addEventListener('message', e => {
    const d = e.data;
    if (!d || typeof d !== 'object') return;
    if (d.__sst === true) {
      if (d.type === 'log') return;
      if (d.type === 'fps') {
        if (perfMode === 'recording') return;
        const n = Number(d.fps);
        if (n >= 0 && n < 1000) {
          frameFps = Math.round(n);
          frameFpsAt = now();
          renderFps();
        }
        return;
      }
      if (d.href) frameHref = d.href;
      if (d.type === 'ctx') { sstLog('timer: game frame reported its URL', d.href); return; }
      if (d.type === 'coin') { onCoin(); return; }
      if (d.type === 'key') { onKey(); return; }
      handleEvent(d.type, 'hook');
      return;
    }
    if (typeof d.type === 'string' && /poki/i.test(d.type) && d.content && typeof d.content === 'object') {
      const c = d.content, names = [];
      if (typeof c.event === 'string') names.push(c.event);
      if (c.payload && typeof c.payload.action === 'string') names.push(c.payload.action);
      if (c.payload && typeof c.payload.event === 'string') names.push(c.payload.event);
      if (d.type !== 'pokiMessageSdkDetails') {
        try { const m = JSON.stringify(c).slice(0, 1500).match(/gameplay[ _-]?(start|stop)|commercialBreak|revive|coin/i); if (m) names.push(m[0]); } catch (er) {}
      }
      for (const n of names) {
        const via = 'poki-native:' + d.type + '/' + n;
        if (/gameplay[\s_-]?start/i.test(n)) handleEvent('gameplayStart', via);
        else if (/gameplay[\s_-]?stop/i.test(n)) handleEvent('gameplayStop', via);
        else if (/^commercial[\s_-]?break$/i.test(n)) handleEvent('commercialBreak', via);
        else if (/revive/i.test(n)) onKey();
        else if (/\bcoin\b/i.test(n)) onCoin();
      }
    }
  }, false);

  window.sstimer = {
    start: begin, stop: halt, finish, reset: resetRun, dismiss: () => unshow(),
    coin: onCoin, key: onKey, sounds,
    theme: readTheme, sources: themeSources,
    dashboard: () => openDash(),
    get fps() { return currentFps(); },
    get debug() { return dbg; },
    set debug(v) { dbg = !!v; },
    get state() { return state; }
  };

  const el = (t, c, txt) => {
    const e = document.createElement(t);
    if (c) e.className = c;
    if (txt != null) e.textContent = txt;
    return e;
  };

  const host = () => {
    const f = document.fullscreenElement;
    return f && f.tagName !== 'CANVAS' && f.tagName !== 'VIDEO' ? f : (document.body || document.documentElement);
  };

  const setVars = e => {
    if (!e) return;
    const L = S.look;
    const h = String(L.bg).replace('#', '');
    const r = parseInt(h.slice(0, 2), 16) || 0, g = parseInt(h.slice(2, 4), 16) || 0, b = parseInt(h.slice(4, 6), 16) || 0;
    const alpha = S.look.theme === 'glass' ? Math.max(0.35, L.opacity / 100) : L.opacity / 100;
    e.style.setProperty('--c', L.color);
    e.style.setProperty('--bad', L.bad);
    e.style.setProperty('--w', L.width + 'px');
    e.style.setProperty('--size', L.size + 'px');
    e.style.setProperty('--ds', L.decScale / 100);
    e.style.setProperty('--r', L.radius + 'px');
    e.style.setProperty('--font', L.font);
    e.style.setProperty('--bg', `rgba(${r},${g},${b},${alpha})`);
    const effectiveTheme = perfMode === 'recording' ? 'flat' : (S.look.theme || 'flat');
    e.dataset.theme = effectiveTheme;
  };

  const applyPerfMode = () => {
    const newMode = isRecording() ? 'recording' : 'normal';
    if (newMode === perfMode) return;
    perfMode = newMode;
    if (perfMode === 'recording') {
      stopFps();
      if (root) root.classList.add('perf');
      if (realRow) realRow.style.display = 'none';
      if (cityRow) cityRow.style.display = 'none';
      if (fpsRow) fpsRow.style.display = 'none';
    } else {
      if (root) root.classList.remove('perf');
      if (S.show.game && S.show.real) realRow.style.display = '';
      if (S.show.city) cityRow.style.display = '';
      if (S.show.fps) { fpsRow.style.display = ''; startFps(); }
    }
    setVars(root);
    setVars(menu);
    setVars(dash);
    sstLog('timer: perf mode = ' + perfMode);
  };

  const apply = () => {
    compile();
    setVars(root);
    setVars(menu);
    setVars(dash);
    userStyle.textContent = S.css;
    realRow.style.display = S.show.game && S.show.real && perfMode !== 'recording' ? '' : 'none';
    cityRow.style.display = S.show.city && perfMode !== 'recording' ? '' : 'none';
    prevRow.style.display = S.show.prev ? '' : 'none';
    fpsRow.style.display = S.show.fps && perfMode !== 'recording' ? '' : 'none';
    if (S.show.fps && perfMode !== 'recording') { startFps(); renderFps(); } else stopFps();
    renderPrev();
    place();
    kick();
  };

  const place = () => {
    const w = root.offsetWidth, h = root.offsetHeight;
    S.pos.x = clamp(S.pos.x, 0, Math.max(0, innerWidth - w));
    S.pos.y = clamp(S.pos.y, 0, Math.max(0, innerHeight - h));
    if (!root.classList.contains('show')) {
      root.style.left = S.pos.x + 'px';
      root.style.top = S.pos.y + 'px';
    }
  };

  const showcase = () => {
    clearTimeout(showT);
    clearTimeout(animT);
    if (perfMode === 'recording') {
      root.classList.remove('anim');
      root.classList.add('show');
      root.style.left = '50%';
      root.style.top = '16px';
      paint();
      if (S.showSecs > 0) showT = setTimeout(unshow, S.showSecs * 1000);
      return;
    }
    root.classList.add('anim', 'show');
    root.style.left = '50%';
    root.style.top = '16px';
    paint();
    if (S.showSecs > 0) showT = setTimeout(unshow, S.showSecs * 1000);
  };

  function unshow() {
    clearTimeout(showT);
    if (!root || !root.classList.contains('show')) return;
    root.classList.remove('show');
    root.style.left = S.pos.x + 'px';
    root.style.top = S.pos.y + 'px';
    clearTimeout(animT);
    if (perfMode !== 'recording') animT = setTimeout(() => root.classList.remove('anim'), 1200);
    else root.classList.remove('anim');
  }

  const closeMenu = () => {
    clearInterval(soundIv);
    listening = false;
    if (menu && menu.isConnected) menu.remove();
  };

  const btn = (txt, fn, c) => {
    const b = el('button', 'sst-btn' + (c ? ' ' + c : ''), txt);
    b.addEventListener('click', fn);
    return b;
  };

  const sec = (title, ...rows) => {
    const w = el('section', 'sst-sec');
    if (title) w.append(el('div', 'sst-h', title));
    const g = el('div', 'sst-grp');
    g.append(...rows);
    w.append(g);
    return w;
  };

  const field = (lab, path, type, o = {}) => {
    const w = el('label', 'sst-f');
    w.append(el('span', '', lab));
    let i, out = null;
    if (type === 'select') {
      i = el('select');
      o.opts.forEach(([v, t]) => { const p = el('option', '', t); p.value = v; i.append(p); });
      i.value = get(S, path);
    } else {
      i = el('input');
      i.type = type;
      Object.assign(i, o.attr || {});
      if (type === 'checkbox') i.checked = get(S, path);
      else i.value = get(S, path);
    }
    i.addEventListener('input', () => {
      let v;
      if (type === 'checkbox') v = i.checked;
      else if (type === 'number' || type === 'range' || o.num) v = Number(i.value);
      else v = i.value;
      if (typeof v === 'number' && v !== v) return;
      set(S, path, v);
      save();
      apply();
      if (out) out.textContent = o.label ? o.label(v) : String(v);
    });
    w.append(i);
    if (type === 'range') {
      out = el('em', 'sst-val', o.label ? o.label(Number(i.value)) : i.value);
      w.append(out);
    }
    return w;
  };

  const displayPane = () => {
    const p = el('div');
    p.append(
      sec('Timer',
        field('In-game time', 'show.game', 'checkbox'),
        field('Real time (includes pauses)', 'show.real', 'checkbox'),
        field('Previous run', 'show.prev', 'checkbox'),
        field('Location from URL', 'show.city', 'checkbox'),
        field('FPS counter', 'show.fps', 'checkbox'),
        field('End delay (s)', 'endDelay', 'number', { attr: { min: 0, max: 60, step: 0.5 } }),
        field('Center display time', 'showSecs', 'range', { attr: { min: 0, max: 60, step: 1 }, label: v => v === 0 ? 'Until closed' : v + 's' })
      ),
      sec('Format',
        field('Hours', 'fmt.hours', 'select', { opts: [['auto', 'Auto'], ['always', 'Always'], ['never', 'Never']] }),
        field('Decimals', 'fmt.decimals', 'select', { num: true, opts: [[0, '0'], [1, '1'], [2, '2'], [3, '3']] }),
        field('Pad minutes', 'fmt.padMin', 'checkbox')
      ),
      sec('Appearance',
        field('Theme', 'look.theme', 'select', { opts: [['flat', 'Flat'], ['glass', 'Liquid Glass']] }),
        field('Font', 'look.font', 'text'),
        field('Size', 'look.size', 'number', { attr: { min: 12, max: 200 } }),
        field('Width', 'look.width', 'number', { attr: { min: 120, max: 800 } }),
        field('Decimal size %', 'look.decScale', 'number', { attr: { min: 20, max: 100 } }),
        field('Corner radius', 'look.radius', 'number', { attr: { min: 0, max: 40 } }),
        field('Color', 'look.color', 'color'),
        field('Penalty color', 'look.bad', 'color'),
        field('Background', 'look.bg', 'color'),
        field('Opacity', 'look.opacity', 'range', { attr: { min: 0, max: 100 }, label: v => v + '%' })
      ),
      sec('Performance',
        field('Reduce work while recording', 'perf.recordingReducesWork', 'checkbox')
      )
    );

    const ta = el('textarea');
    ta.value = S.css;
    ta.placeholder = '#sst-root { }';
    ta.spellcheck = false;
    ta.addEventListener('input', () => { S.css = ta.value; save(); userStyle.textContent = S.css; });
    const taWrap = el('div', 'sst-ta');
    taWrap.append(ta);
    p.append(sec('Custom CSS', taWrap));

    const bar = el('div', 'sst-acts');
    bar.append(
      btn('Reset position', () => { S.pos = { x: 16, y: 16 }; save(); place(); }),
      btn('Reset settings', () => {
        const keep = { best: S.best, prev: S.prev };
        S = clone(DEF);
        S.best = keep.best;
        S.prev = keep.prev;
        save(); apply(); renderMenu();
      }, 'dng')
    );
    p.append(bar);
    return p;
  };

  const capturePane = () => {
    const p = el('div');
    const row = el('div', 'sst-f');
    const lab = el('span', '', 'Screen capture');
    const label = () => capOn() ? 'Turn off' : 'Turn on';
    const b = btn(label(), async () => { await toggleCapture(); b.textContent = label(); });
    row.append(lab, b);
    const note = el('small', 'sst-note', 'Default 720p/30fps. Recording temporarily reduces timer work and forces a flat theme to keep gameplay smooth.');
    p.append(
      sec('Status', row),
      note,
      sec('Recording',
        field('Screenshot at run end', 'cap.shot', 'checkbox'),
        field('Record video', 'cap.video', 'checkbox'),
        field('Frame rate', 'cap.fps', 'select', { num: true, opts: [[15, '15'], [24, '24'], [30, '30'], [60, '60']] }),
        field('Resolution (on enable)', 'cap.height', 'select', { num: true, opts: [[480, '480p'], [720, '720p'], [1080, '1080p']] }),
        field('Quality (Mbps)', 'cap.mbps', 'number', { attr: { min: 0.5, max: 12, step: 0.5 } }),
        field('Videos to keep', 'cap.keep', 'number', { attr: { min: 1, max: 100 } })
      )
    );
    return p;
  };

  const soundSection = () => {
    const w = el('section', 'sst-sec');
    w.append(el('div', 'sst-h', 'Detection'));
    const d = el('details', 'sst-grp sst-det');
    const body = el('div', 'sst-det-b');
    d.append(el('summary', '', 'Sound detection'), body);
    body.append(
      el('small', 'sst-note', 'Keep this open, collect a coin or use a key, then tag the sound that lights up.'),
      field('Coin pattern', 'det.coinRe', 'text'),
      field('Key pattern', 'det.keyRe', 'text')
    );

    const list = el('div', 'sst-snd');
    const rows = new Map();
    const paintRow = (r, sig) => {
      r.row.classList.toggle('c', S.det.coin.includes(sig));
      r.row.classList.toggle('k', S.det.key.includes(sig));
    };
    const tog = (kind, sig, r) => {
      const a = S.det[kind];
      const i = a.indexOf(sig);
      if (i >= 0) a.splice(i, 1);
      else {
        a.push(sig);
        const o = S.det[kind === 'coin' ? 'key' : 'coin'];
        const j = o.indexOf(sig);
        if (j >= 0) o.splice(j, 1);
      }
      cls.clear();
      save();
      paintRow(r, sig);
    };

    const bar = el('div', 'sst-acts');
    bar.append(
      btn('Clear list', () => { sounds.clear(); rows.clear(); list.textContent = ''; }),
      btn('Untag all', () => {
        S.det.coin = []; S.det.key = []; cls.clear(); save();
        rows.forEach((r, s) => paintRow(r, s));
      })
    );
    body.append(bar, list);

    const refresh = () => {
      if (!menu.isConnected) { clearInterval(soundIv); listening = false; return; }
      sounds.forEach(e => {
        let r = rows.get(e.sig);
        if (!r) {
          const row = el('div', 'sst-s');
          const name = el('span', 'sst-sn', e.sig);
          name.title = e.sig;
          const cnt = el('span', 'sst-sc');
          const bc = el('button', 'sst-mini', 'Coin');
          const bk = el('button', 'sst-mini', 'Key');
          row.append(name, cnt, bc, bk);
          r = { row, cnt };
          bc.addEventListener('click', () => tog('coin', e.sig, r));
          bk.addEventListener('click', () => tog('key', e.sig, r));
          rows.set(e.sig, r);
          list.prepend(row);
          paintRow(r, e.sig);
        }
        r.cnt.textContent = '×' + e.n;
        r.row.classList.toggle('hit', now() - e.t < 700);
      });
    };

    d.addEventListener('toggle', () => {
      clearInterval(soundIv);
      if (d.open) {
        listening = true;
        soundIv = setInterval(refresh, 400);
        refresh();
      } else listening = false;
    });

    w.append(d);
    return w;
  };

  const modePane = () => {
    const p = el('div');
    const g = el('div', 'sst-grp');
    const items = [];
    MODES.forEach(([id, name, desc]) => {
      const r = el('div', 'sst-mode' + (S.mode === id ? ' on' : ''));
      const t = el('div');
      t.append(el('b', '', name), el('small', '', desc));
      r.append(el('span', 'sst-dot'), t);
      r.addEventListener('click', () => {
        S.mode = id;
        save();
        items.forEach(([x, m]) => x.classList.toggle('on', m === id));
      });
      items.push([r, id]);
      g.append(r);
    });
    const s = el('section', 'sst-sec');
    s.append(el('div', 'sst-h', 'Run mode'), g);
    p.append(s, soundSection());
    return p;
  };

  const locText = c => {
    if (c.city) return c.theme != null ? c.city + ' (theme ' + c.theme + ')' : c.city;
    if (c.theme != null) return 'Theme ' + c.theme + ', no city';
    return 'No theme in the URL';
  };

  const renderMenu = () => {
    clearInterval(soundIv);
    listening = false;
    menu.textContent = '';

    const ctx = readTheme();
    const head = el('div', 'sst-mh');
    const ttl = el('div', 'sst-mt');
    const loc = el('span', 'sst-loc' + (ctx.city ? ' on' : ''));
    loc.append(el('i'), el('span', '', locText(ctx)));
    ttl.append(el('b', '', 'Speedrun timer'), loc);
    head.append(ttl, btn('×', closeMenu, 'sst-x'));

    const tabs = el('div', 'sst-tabs');
    [['d', 'Display'], ['c', 'Capture'], ['m', 'Mode']].forEach(([id, name]) => {
      const t = el('div', 'sst-tab' + (tab === id ? ' on' : ''), name);
      t.addEventListener('click', () => { tab = id; renderMenu(); });
      tabs.append(t);
    });

    const body = el('div', 'sst-body');
    body.append(tab === 'd' ? displayPane() : tab === 'c' ? capturePane() : modePane());

    const ft = el('div', 'sst-foot');
    ft.style.flexWrap = 'wrap';
    ft.style.gap = '6px';
    ft.append(btn('Start', begin), btn('Stop', halt), btn('Reset', resetRun), btn('Open dashboard', openDash, 'pri'));

    menu.append(head, tabs, body, ft);
  };

  const openMenu = () => {
    renderMenu();
    host().append(menu);
    const r = root.getBoundingClientRect();
    const m = menu.getBoundingClientRect();
    let x = r.right + 8;
    if (x + m.width > innerWidth - 8) x = r.left - m.width - 8;
    if (x < 8) x = clamp(r.left, 8, Math.max(8, innerWidth - m.width - 8));
    const y = Math.max(8, Math.min(r.top, innerHeight - m.height - 8));
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
  };

  const download = (blob, name) => {
    const u = URL.createObjectURL(blob);
    const a = el('a');
    a.href = u;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 5000);
  };

  const stamp = r => new Date(r.id).toISOString().slice(0, 19).replace(/[:T]/g, '-');
  const cityKey = r => r.city ? r.city.toLowerCase() : NOCITY;
  const cityName = r => r.city || 'No location';

  const refreshDash = async () => {
    try {
      dashRuns = (await st('runs', 'readonly', s => s.getAll())).sort((a, b) => b.id - a.id);
      const v = await st('videos', 'readonly', s => s.getAll());
      dashVids = { n: v.length, mb: v.reduce((a, x) => a + x.blob.size, 0) / 1048576 };
    } catch (e) {
      dashRuns = [];
      dashVids = { n: 0, mb: 0 };
    }
    if (dashOpen) renderDash();
  };

  const openDetail = async r => {
    let shot = null, video = null;
    try {
      const res = await Promise.all([
        r.shot ? st('shots', 'readonly', s => s.get(r.id)) : null,
        r.vid ? st('videos', 'readonly', s => s.get(r.id)) : null
      ]);
      shot = res[0] && res[0].blob;
      video = res[1] && res[1].blob;
    } catch (e) {}
    const wrapEl = el('div', 'sst-detail');
    const box = el('div', 'sst-dbox');
    const u = [];
    const url = b => { const x = URL.createObjectURL(b); u.push(x); return x; };
    const close = () => { u.forEach(x => URL.revokeObjectURL(x)); wrapEl.remove(); };
    let mediaEl;
    if (video) {
      mediaEl = el('video');
      mediaEl.src = url(video);
      mediaEl.controls = true;
      mediaEl.autoplay = true;
      mediaEl.loop = true;
    } else if (shot) {
      mediaEl = el('img');
      mediaEl.src = url(shot);
    } else mediaEl = el('div', 'sst-none', 'No capture for this run');

    const info = el('div', 'sst-di');
    const kv = el('div', 'sst-kv');
    const add = (k, v) => { const d = el('div'); d.append(el('span', '', k), el('em', '', v)); kv.append(d); };
    add('Mode', modeName(r.mode));
    add('Location', r.city || 'Not recorded');
    if (r.theme != null) add('Theme', String(r.theme));
    add('Real time', fmt(r.real).join(''));
    add('Result', r.valid ? 'Valid' : 'Invalid (' + r.reason + ')');
    add('Date', new Date(r.id).toLocaleString());
    info.append(el('b', r.valid ? '' : 'bad', fmt(r.game).join('')), kv);

    const bar = el('div', 'sst-db');
    if (video) bar.append(btn('Download video', () => download(video, 'run-' + stamp(r) + '.webm')));
    if (shot) bar.append(btn('Download screenshot', () => download(shot, 'run-' + stamp(r) + '.jpg')));
    const del = el('button', 'sst-btn dng', 'Delete run');
    let armed = false;
    del.addEventListener('click', async () => {
      if (!armed) { armed = true; del.textContent = 'Confirm delete'; return; }
      try {
        await tx(['runs', 'shots', 'videos'], 'readwrite', t => {
          ['runs', 'shots', 'videos'].forEach(n => t.objectStore(n).delete(r.id));
        });
      } catch (e) {}
      close();
      refreshDash();
    });
    bar.append(del, btn('Close', close));
    box.append(mediaEl, info, bar);
    wrapEl.append(box);
    wrapEl.addEventListener('click', e => { if (e.target === wrapEl) close(); });
    dash.append(wrapEl);
  };

  const thumb = th => {
    st('shots', 'readonly', s => s.get(Number(th.dataset.id))).then(m => {
      if (!m || !dashOpen || !th.isConnected) return;
      const u = URL.createObjectURL(m.blob);
      urls.push(u);
      const img = el('img');
      img.decoding = 'async';
      img.src = u;
      th.prepend(img);
    }).catch(() => {});
  };

  const SORTS = {
    new: (a, b) => b.id - a.id,
    old: (a, b) => a.id - b.id,
    fast: (a, b) => a.game - b.game,
    slow: (a, b) => b.game - a.game
  };

  const renderDash = () => {
    const sy = dash.scrollTop;
    if (io) io.disconnect();
    urls.forEach(u => URL.revokeObjectURL(u));
    urls = [];
    dash.textContent = '';
    const dw = el('div', 'sst-dw');

    const base = dashRuns.filter(r =>
      (dFilter.mode === 'all' || r.mode === dFilter.mode) &&
      (dFilter.ok === 'all' || (dFilter.ok === 'valid') === r.valid)
    );

    const groups = new Map();
    dashRuns.forEach(r => {
      const k = cityKey(r);
      if (!groups.has(k)) groups.set(k, { key: k, label: cityName(r), n: 0, best: null });
    });
    base.forEach(r => {
      const g = groups.get(cityKey(r));
      g.n++;
      if (r.valid && (g.best == null || r.game < g.best)) g.best = r.game;
    });
    if (dFilter.city !== 'all' && !groups.has(dFilter.city)) dFilter.city = 'all';
    const hasCity = [...groups.keys()].some(k => k !== NOCITY);

    const list = base.filter(r => dFilter.city === 'all' || cityKey(r) === dFilter.city).sort(SORTS[dFilter.sort] || SORTS.new);
    const ok = list.filter(r => r.valid);
    const pb = ok.length ? Math.min(...ok.map(r => r.game)) : null;
    const avg = ok.length ? ok.reduce((a, r) => a + r.game, 0) / ok.length : null;
    const tot = list.reduce((a, r) => a + r.real, 0);

    const head = el('div', 'sst-dh');
    const ttl = el('div', 'sst-dt');
    ttl.append(el('h2', '', 'Runs'), el('div', 'sst-dsub', list.length + ' of ' + dashRuns.length + ' shown'));
    const dv = el('button', 'sst-btn', 'Delete recordings');
    let armed = false;
    dv.addEventListener('click', async () => {
      if (!dashVids.n) return;
      if (!armed) {
        armed = true;
        dv.textContent = 'Confirm delete all';
        setTimeout(() => { if (dv.isConnected) { armed = false; dv.textContent = 'Delete recordings'; } }, 4000);
        return;
      }
      await deleteVideos();
    });
    head.append(
      ttl,
      btn(capOn() ? 'Turn capture off' : 'Turn capture on', toggleCapture),
      dv,
      btn('Export JSON', () => download(
        new Blob([JSON.stringify(dashRuns.map(r => ({ ...r, date: new Date(r.id).toISOString() })), null, 2)], { type: 'application/json' }),
        'runs.json'
      )),
      btn('Close', closeDash, 'pri')
    );

    const seg = (key, opts) => {
      const s = el('div', 'sst-seg');
      opts.forEach(([v, t]) => {
        const b = el('button', dFilter[key] === v ? 'on' : '', t);
        b.addEventListener('click', () => { dFilter[key] = v; renderDash(); });
        s.append(b);
      });
      return s;
    };
    const sel = (key, label, opts) => {
      const w = el('label', 'sst-sl');
      const s = el('select');
      opts.forEach(([v, t]) => { const o = el('option', '', t); o.value = v; s.append(o); });
      s.value = dFilter[key];
      s.addEventListener('change', () => { dFilter[key] = s.value; renderDash(); });
      w.append(el('span', '', label), s);
      return w;
    };
    const fb = el('div', 'sst-fb');
    fb.append(
      seg('ok', [['all', 'All'], ['valid', 'Valid'], ['invalid', 'Invalid']]),
      sel('mode', 'Mode', [['all', 'All modes'], ...MODES.map(m => [m[0], m[1]])]),
      sel('sort', 'Sort', [['new', 'Newest'], ['old', 'Oldest'], ['fast', 'Fastest'], ['slow', 'Slowest']])
    );

    let chips = null;
    if (hasCity) {
      chips = el('div', 'sst-chips');
      const chip = (key, label, n, best) => {
        const c = el('button', 'sst-chip' + (dFilter.city === key ? ' on' : ''));
        c.append(el('span', '', label), el('small', '', n + (best == null ? '' : ' runs, best ' + fmt(best).join(''))));
        c.addEventListener('click', () => { dFilter.city = key; renderDash(); });
        return c;
      };
      const allBest = base.filter(r => r.valid).reduce((a, r) => a == null || r.game < a ? r.game : a, null);
      chips.append(chip('all', 'All locations', base.length, allBest));
      [...groups.values()]
        .sort((a, b) => (a.key === NOCITY) - (b.key === NOCITY) || b.n - a.n || a.label.localeCompare(b.label))
        .forEach(g => chips.append(chip(g.key, g.label, g.n, g.best)));
    }

    const stat = (l, v) => { const d = el('div', 'sst-st'); d.append(el('span', '', l), el('b', '', v)); return d; };
    const stats = el('div', 'sst-stats');
    stats.append(
      stat('Runs', String(list.length)),
      stat('Valid', String(ok.length)),
      stat(dFilter.city === 'all' ? 'Best' : 'Best here', pb == null ? '—' : fmt(pb).join('')),
      stat('Average', avg == null ? '—' : fmt(avg).join('')),
      stat('Total time', fmt(tot).join('')),
      stat('Recordings', dashVids.n + ' (' + dashVids.mb.toFixed(1) + ' MB)')
    );

    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      thumb(e.target);
    }), { root: dash, rootMargin: '300px' });
    io = obs;

    const grid = el('div', 'sst-grid');
    const pending = [];
    list.forEach(r => {
      const c = el('div', 'sst-card' + (r.valid ? '' : ' bad'));
      const th = el('div', 'sst-th', r.shot ? '' : 'No capture');
      if (r.shot) { th.dataset.id = r.id; pending.push(th); }
      const bd = el('div', 'sst-bdg');
      if (r.valid && r.game === pb) bd.append(el('span', 'sst-b pb', 'PB'));
      if (!r.valid) bd.append(el('span', 'sst-b bad', 'Invalid: ' + r.reason));
      if (r.vid) bd.append(el('span', 'sst-b', 'Video'));
      th.append(bd);

      const ci = el('div', 'sst-ci');
      const meta = el('div', 'sst-meta');
      meta.append(el('span', 'sst-tag', modeName(r.mode)));
      if (r.city) {
        const cb = el('button', 'sst-tag city', r.city);
        cb.title = 'Show only this location';
        cb.addEventListener('click', e => { e.stopPropagation(); dFilter.city = cityKey(r); renderDash(); });
        meta.append(cb);
      }
      if (r.theme != null) meta.append(el('span', 'sst-tag', 'Theme ' + r.theme));
      const delta = r.valid && pb != null && r.game !== pb ? fmtD(r.game - pb) : '';
      ci.append(
        el('div', 'sst-ct', fmt(r.game).join('')),
        meta,
        el('div', 'sst-cs', new Date(r.id).toLocaleString() + (delta ? '   ' + delta : ''))
      );
      c.append(th, ci);
      c.addEventListener('click', () => openDetail(r));
      grid.append(c);
    });
    if (!list.length) grid.append(el('div', 'sst-none', dashRuns.length ? 'No runs match these filters' : 'No runs yet. Finish a run and it shows up here.'));

    dw.append(head, fb);
    if (chips) dw.append(chips);
    dw.append(stats, grid);
    dash.append(dw);
    dash.scrollTop = sy;
    pending.forEach(t => obs.observe(t));
  };

  const openDash = async () => {
    closeMenu();
    if (!dash) {
      dash = el('div');
      dash.id = 'sst-dash';
      ['keydown', 'keyup', 'keypress', 'pointerdown', 'pointerup', 'mousedown', 'touchstart', 'wheel'].forEach(t =>
        dash.addEventListener(t, e => e.stopPropagation())
      );
      setVars(dash);
    }
    host().append(dash);
    dashOpen = true;
    await refreshDash();
  };

  const closeDash = () => {
    dashOpen = false;
    if (io) io.disconnect();
    urls.forEach(u => URL.revokeObjectURL(u));
    urls = [];
    if (dash) dash.remove();
  };

  const CSS = `
#sst-root{position:fixed;z-index:2147483647;width:var(--w);box-sizing:border-box;padding:8px 14px 10px;background:var(--bg);border:1px solid rgba(255,255,255,.07);border-radius:var(--r);box-shadow:0 8px 24px rgba(0,0,0,.4);color:#fff;font-family:var(--font);cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none;transform-origin:top center;transform:translateX(0) scale(1);contain:layout style}
#sst-root.drag{cursor:grabbing}
#sst-root.anim{transition:left 1.1s cubic-bezier(.65,0,.35,1),top 1.1s cubic-bezier(.65,0,.35,1),transform 1.1s cubic-bezier(.65,0,.35,1)}
#sst-root.show{transform:translateX(-50%) scale(1.9)}
#sst-root.rec::before{content:'';position:absolute;left:7px;top:7px;width:7px;height:7px;border-radius:50%;background:var(--bad);box-shadow:0 0 8px var(--bad)}
.sst-time{text-align:right;line-height:1.05;white-space:nowrap;font-variant-numeric:tabular-nums;color:var(--c);text-shadow:0 0 18px color-mix(in srgb,var(--c) 35%,transparent)}
.sst-main{font-size:var(--size);font-weight:600;letter-spacing:-.01em}
.sst-dec{font-size:calc(var(--size) * var(--ds));font-weight:600}
#sst-root.bad .sst-time{color:var(--bad);text-shadow:0 0 18px color-mix(in srgb,var(--bad) 35%,transparent)}
.sst-row{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:13px;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.07);line-height:1.3}
.sst-row>span{color:#9aa2aa;font-weight:500}
.sst-row b{font-weight:600;font-variant-numeric:tabular-nums;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sst-row b.ahead{color:var(--c)}
.sst-row b.behind{color:var(--bad)}
.sst-row b.fps-good{color:var(--c)}
.sst-row b.fps-mid{color:#f2c14e}
.sst-row b.fps-low{color:var(--bad)}
.sst-capoff{display:none;width:100%;margin-top:6px;padding:3px 6px;background:#1b1b1b;border:1px solid #333;border-radius:4px;color:#e6e6e6;font:12px/1.3 var(--font);cursor:pointer;box-sizing:border-box}
.sst-capoff:hover{border-color:#555}
#sst-root.show.capon .sst-capoff{display:block}
.sst-dismiss{display:none;position:absolute;top:-9px;right:-9px;z-index:1;width:18px;height:18px;padding:0;align-items:center;justify-content:center;border-radius:50%;background:#1b1b1b;border:1px solid #444;color:#e6e6e6;font:13px/1 var(--font);cursor:pointer}
.sst-dismiss:hover{background:var(--bad);border-color:var(--bad);color:#fff}
#sst-root.show .sst-dismiss{display:flex}
.sst-badge{display:none;position:absolute;top:6px;right:8px;font:10px/1 var(--font);font-weight:700;letter-spacing:.05em;color:#fff;background:var(--bad);padding:2px 6px;border-radius:4px}
#sst-root.bad .sst-badge{display:inline-block}

#sst-root.perf *,#sst-root.perf .sst-time{text-shadow:none!important}
#sst-root.perf{box-shadow:none!important;border-color:rgba(255,255,255,.12)!important}
#sst-root.perf .sst-row{display:none!important}
#sst-root.perf.anim{transition:none!important}

#sst-menu,#sst-dash{--ui:'Segoe UI',system-ui,-apple-system,sans-serif;--bg0:#0e1012;--panel:#15181b;--panel2:#1b1f23;--line:#252a2f;--mute:#8b939b;--txt:#e8eaec}
#sst-menu *,#sst-dash *{box-sizing:border-box}

#sst-menu{position:fixed;z-index:2147483647;width:320px;max-height:78vh;display:flex;flex-direction:column;background:var(--bg0);border:1px solid var(--line);border-radius:14px;color:var(--txt);font:13px/1.35 var(--ui);box-shadow:0 18px 48px rgba(0,0,0,.55);overflow:hidden}
.sst-mh{display:flex;align-items:flex-start;gap:10px;padding:14px 14px 10px}
.sst-mt{flex:1;min-width:0}
.sst-mt b{display:block;font-size:15px;font-weight:600}
.sst-loc{display:inline-flex;align-items:center;gap:6px;margin-top:3px;color:var(--mute);font-size:12px;max-width:100%}
.sst-loc span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sst-loc i{flex:none;width:7px;height:7px;border-radius:50%;background:#3a4047}
.sst-loc.on{color:#cfd4d9}
.sst-loc.on i{background:var(--c)}
.sst-btn.sst-x{width:28px;height:28px;padding:0;margin:0;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;border-radius:8px}
.sst-tabs{display:flex;gap:2px;margin:0 14px;padding:3px;background:#090a0b;border:1px solid var(--line);border-radius:10px}
.sst-tab{flex:1;padding:6px 0;text-align:center;cursor:pointer;color:var(--mute);border-radius:7px;font-weight:500;transition:color .12s,background .12s}
.sst-tab:hover{color:#d6dade}
.sst-tab.on{background:var(--panel2);color:#fff;box-shadow:inset 0 -2px 0 var(--c)}
.sst-body{flex:1;min-height:0;overflow:auto;padding:4px 14px 14px;scrollbar-width:none}
.sst-body::-webkit-scrollbar,#sst-dash::-webkit-scrollbar,.sst-dbox::-webkit-scrollbar,.sst-snd::-webkit-scrollbar{display:none}
.sst-sec{margin-top:14px}
.sst-h{margin:0 0 6px 2px;font-size:12px;font-weight:600;color:#a4abb2}
.sst-grp{background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden}
.sst-grp>*+*{border-top:1px solid var(--line)}
.sst-f{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 10px;min-height:36px;margin:0}
.sst-f>span{flex:1;min-width:0}
.sst-note{display:block;color:var(--mute);margin:8px 2px 0;line-height:1.4}
.sst-det-b .sst-note{margin:0 0 6px}

.sst-f input:not([type=checkbox]):not([type=range]):not([type=color]),.sst-f select,.sst-ta textarea,.sst-btn,#sst-dash select{background:var(--bg0);border:1px solid #2f353b;color:var(--txt);border-radius:7px;font:inherit;padding:4px 8px;outline:none}
.sst-f input:focus,.sst-f select:focus,.sst-ta textarea:focus,#sst-dash select:focus{border-color:var(--c)}
.sst-f input[type=number]{width:76px}
.sst-f input[type=text]{width:150px}
.sst-f input[type=color]{width:38px;height:24px;padding:1px;background:none;border:1px solid #2f353b;border-radius:6px;cursor:pointer}
.sst-f input[type=range]{width:100px;padding:0;accent-color:var(--c)}
.sst-val{flex:none;min-width:62px;text-align:right;font-style:normal;color:var(--mute);font-variant-numeric:tabular-nums}
.sst-f input[type=checkbox]{appearance:none;-webkit-appearance:none;flex:none;width:34px;height:20px;margin:0;padding:0;border:0;border-radius:10px;background:#2a3036;position:relative;cursor:pointer;transition:background .15s}
.sst-f input[type=checkbox]::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#aab1b8;transition:transform .15s,background .15s}
.sst-f input[type=checkbox]:checked{background:var(--c)}
.sst-f input[type=checkbox]:checked::after{transform:translateX(14px);background:#fff}
.sst-ta{padding:8px}
.sst-ta textarea{width:100%;height:90px;font-family:ui-monospace,Consolas,monospace;font-size:12px;resize:vertical;border-radius:6px}

.sst-btn{cursor:pointer;padding:6px 12px;font-weight:500;transition:border-color .12s,background .12s,color .12s}
.sst-btn:hover{border-color:#566069;background:var(--panel2)}
.sst-btn.pri{background:var(--c);border-color:var(--c);color:#06120a}
.sst-btn.pri:hover{filter:brightness(1.1);background:var(--c)}
.sst-btn.dng:hover{border-color:var(--bad);color:var(--bad)}
.sst-f .sst-btn{margin:0;padding:4px 12px}
.sst-acts{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.sst-det-b .sst-acts{margin-top:8px}
.sst-foot{padding:10px 14px 14px;border-top:1px solid var(--line);display:flex}
.sst-foot .sst-btn{flex:1;padding:8px 12px}
html {overflow: hidden !important;}
.sst-mode{display:flex;gap:10px;padding:10px;cursor:pointer;align-items:flex-start;transition:background .12s}
.sst-mode:hover{background:#181c20}
.sst-mode b{display:block;font-weight:500}
.sst-mode small{display:block;color:var(--mute);margin-top:2px}
.sst-dot{flex:none;width:12px;height:12px;border-radius:50%;border:1.5px solid #59616a;margin-top:3px}
.sst-mode.on .sst-dot{border-color:var(--c);background:radial-gradient(circle,var(--c) 0 3px,transparent 4px)}

.sst-det summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:10px;font-weight:500}
.sst-det summary::-webkit-details-marker{display:none}
.sst-det summary::after{content:'+';color:var(--mute);font-size:16px;line-height:1}
.sst-det[open] summary::after{content:'−'}
.sst-det-b{padding:8px 10px 10px}
.sst-det-b .sst-f{padding:4px 0;min-height:0}
.sst-snd{max-height:170px;overflow:auto;scrollbar-width:none;margin-top:8px}
.sst-s{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;border:1px solid transparent}
.sst-s.hit{background:var(--panel2);border-color:#333b42}
.sst-s.c{box-shadow:inset 3px 0 0 var(--c)}
.sst-s.k{box-shadow:inset 3px 0 0 var(--bad)}
.sst-sn{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sst-sc{color:var(--mute);font-size:11px}
.sst-mini{background:var(--bg0);border:1px solid #2f353b;color:var(--txt);border-radius:5px;font:inherit;font-size:11px;padding:1px 7px;cursor:pointer}
.sst-mini:hover{border-color:#566069}

#sst-dash{position:fixed;inset:0;z-index:2147483646;background:rgba(8,9,10,.97);color:var(--txt);font:13px/1.35 var(--ui);overflow:auto;scrollbar-width:none}
.sst-dw{max-width:1320px;margin:0 auto;padding:0 28px 48px}
.sst-dh{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:20px 0 14px;background:#08090a;border-bottom:1px solid var(--line)}
.sst-dt{margin-right:auto}
.sst-dt h2{margin:0;font-size:22px;font-weight:600;letter-spacing:-.01em}
.sst-dsub{color:var(--mute);margin-top:2px}
.sst-dh .sst-btn{margin:0}
.sst-fb{display:flex;flex-wrap:wrap;gap:10px;align-items:center;padding:16px 0 12px}
.sst-seg{display:inline-flex;gap:2px;padding:3px;background:var(--panel);border:1px solid var(--line);border-radius:10px}
.sst-seg button{background:none;border:0;color:var(--mute);padding:5px 14px;border-radius:7px;font:inherit;font-weight:500;cursor:pointer}
.sst-seg button:hover{color:#d6dade}
.sst-seg button.on{background:#262c31;color:#fff;box-shadow:inset 0 -2px 0 var(--c)}
.sst-sl{display:inline-flex;align-items:center;gap:8px;color:var(--mute)}
#sst-dash select{padding:6px 10px;background:var(--panel)}
.sst-chips{display:flex;flex-wrap:wrap;gap:8px;padding:2px 0 14px}
.sst-chip{display:inline-flex;align-items:baseline;gap:8px;padding:7px 14px;border:1px solid var(--line);border-radius:999px;background:var(--panel);color:#d3d8dc;font:inherit;font-weight:500;cursor:pointer;transition:border-color .12s}
.sst-chip small{color:var(--mute);font-size:11px;font-weight:400;font-variant-numeric:tabular-nums}
.sst-chip:hover{border-color:#4a525a}
.sst-chip.on{border-color:var(--c);color:#fff;box-shadow:inset 0 0 0 1px var(--c)}
.sst-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;padding:4px 0 18px}
.sst-st{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:12px 14px}
.sst-st span{display:block;color:var(--mute);margin-bottom:4px}
.sst-st b{display:block;color:var(--c);font-size:21px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.sst-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px}
.sst-card{background:var(--panel);border:1px solid var(--line);border-radius:12px;overflow:hidden;cursor:pointer;transition:border-color .12s}
.sst-card:hover{border-color:#4a525a}
.sst-card.bad{border-color:#3a2220}
.sst-th{position:relative;aspect-ratio:16/9;background:#0a0b0c;display:flex;align-items:center;justify-content:center;color:#4a525a}
.sst-th img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.sst-bdg{position:absolute;z-index:1;top:8px;left:8px;right:8px;display:flex;flex-wrap:wrap;gap:4px}
.sst-b{padding:2px 8px;border-radius:999px;font-size:11px;font-weight:600;background:rgba(0,0,0,.7);color:#e2e5e8}
.sst-b.pb{background:#f2c14e;color:#2a1d00}
.sst-b.bad{background:var(--bad);color:#fff}
.sst-ci{padding:10px 12px 12px}
.sst-ct{font-size:24px;font-weight:600;color:var(--c);font-variant-numeric:tabular-nums}
.sst-card.bad .sst-ct{color:var(--bad)}
.sst-meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.sst-tag{padding:2px 8px;border-radius:6px;background:var(--panel2);border:1px solid var(--line);color:#c1c7cd;font:inherit;font-size:12px}
button.sst-tag.city{cursor:pointer;color:#e8eaec;border-color:#38414a}
button.sst-tag.city:hover{border-color:var(--c)}
.sst-cs{color:var(--mute);font-size:12px;margin-top:8px;white-space:pre}
.sst-none{color:var(--mute);padding:48px 24px;text-align:center;grid-column:1/-1}

.sst-detail{position:fixed;inset:0;z-index:3;background:rgba(0,0,0,.86);display:flex;align-items:center;justify-content:center;padding:24px}
.sst-dbox{background:var(--bg0);border:1px solid var(--line);border-radius:14px;max-width:min(1100px,100%);max-height:100%;overflow:auto;padding:14px;scrollbar-width:none}
.sst-dbox video,.sst-dbox img{max-width:100%;max-height:62vh;display:block;margin:0 auto;border-radius:8px}
.sst-di{margin:14px 0 12px}
.sst-di>b{display:block;font-size:28px;font-weight:600;color:var(--c);font-variant-numeric:tabular-nums}
.sst-di>b.bad{color:var(--bad)}
.sst-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px 18px;margin-top:10px}
.sst-kv span{display:block;color:var(--mute);font-size:12px}
.sst-kv em{font-style:normal}
.sst-db{display:flex;flex-wrap:wrap;gap:6px}
.sst-db .sst-btn{margin:0}
@media (max-width:640px){.sst-dw{padding:0 14px 32px}.sst-grid{grid-template-columns:1fr 1fr}}

[data-theme="glass"]{
  background: rgba(255,255,255,0.02) !important;
  backdrop-filter: blur(0.5px) url(#sst-lg-filter) blur(1px) saturate(1.5) brightness(1.1);
  -webkit-backdrop-filter: blur(8px) saturate(1.8) brightness(1.15) contrast(1.05);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.15),
    inset 1.5px 1.5px 0 rgba(255,255,255,.5),
    inset 0 0 12px rgba(255,255,255,.2),
    0 8px 32px rgba(0,0,0,.2);
  border: 0;
}
[data-theme="glass"]{--bg0:rgba(255,255,255,.03);--panel:rgba(255,255,255,.04);--panel2:rgba(255,255,255,.06);--line:rgba(255,255,255,.12)}
[data-theme="glass"] .sst-f input:not([type=checkbox]):not([type=range]):not([type=color]),[data-theme="glass"] .sst-f select,[data-theme="glass"] .sst-ta textarea,[data-theme="glass"] .sst-btn,[data-theme="glass"] #sst-dash select{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.18)}
[data-theme="glass"] .sst-dbox{
  background: rgba(255,255,255,0.02) !important;
  backdrop-filter: blur(0.5px) url(#sst-lg-filter) blur(1px) saturate(1.5) brightness(1.1);
  -webkit-backdrop-filter: blur(8px) saturate(1.8) brightness(1.15) contrast(1.05);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.15),
    inset 1.5px 1.5px 0 rgba(255,255,255,.5),
    inset 0 0 12px rgba(255,255,255,.2),
    0 8px 32px rgba(0,0,0,.2);
  border: 0;
}
@supports not (backdrop-filter: blur(1px)) {
  [data-theme="glass"] { background: rgba(18,18,24,.97) !important; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
`;

  const init = () => {
    const pre = document.querySelectorAll('#sst-root').length;
    sstLog('timer: init(), timer elements already in DOM: ' + pre + (pre ? '  <-- ANOTHER SCRIPT/OLD VERSION IS ALSO INJECTING A TIMER' : ''), undefined, pre ? 'timer-preexisting' : undefined);
    baseStyle = el('style');
    baseStyle.textContent = CSS;
    userStyle = el('style');
    document.documentElement.append(baseStyle, userStyle);

    const svgNs = 'http://www.w3.org/2000/svg';
    const defs = document.createElementNS(svgNs, 'svg');
    defs.setAttribute('width', '0');
    defs.setAttribute('height', '0');
    defs.style.position = 'absolute';
    defs.setAttribute('aria-hidden', 'true');
    defs.innerHTML = `<filter id="sst-lg-filter" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
      <feImage x="0" y="0" width="420" height="280" href="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22420%22%20height%3D%22280%22%20viewBox%3D%220%200%20420%20280%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22Y%22%20x1%3D%220%22%20x2%3D%220%22%20y1%3D%223%25%22%20y2%3D%2297%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230F0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22X%22%20x1%3D%222%25%22%20x2%3D%2298%25%22%20y1%3D%220%22%20y2%3D%220%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23F00%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22%23808080%22%2F%3E%3Cg%20filter%3D%22blur(2px)%22%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22%23000080%22%2F%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22url(%23Y)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22url(%23X)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3Crect%20x%3D%2222%22%20y%3D%2222%22%20width%3D%22376%22%20height%3D%22236%22%20rx%3D%2228%22%20ry%3D%2228%22%20fill%3D%22%23808080%22%20filter%3D%22blur(22px)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" result="displacementMap" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="245" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" result="displacedR" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="243" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" result="displacedG" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="241" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" result="displacedB" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
      <feBlend in="displacedR" in2="displacedG" mode="screen" result="rg" />
      <feBlend in="rg" in2="displacedB" mode="screen" />
    </filter>`;
    document.documentElement.append(defs);

    root = el('div');
    root.id = 'sst-root';
    root.dataset.sstInst = INST;
    root.dataset.sstVer = SST_VERSION;
    root.title = 'timer instance ' + INST;
    const time = el('div', 'sst-time');
    mainEl = el('span', 'sst-main', '0:00');
    decEl = el('span', 'sst-dec', '.00');
    time.append(mainEl, decEl);
    realRow = el('div', 'sst-row');
    realV = el('b');
    realRow.append(el('span', '', 'Real Time'), realV);
    cityRow = el('div', 'sst-row');
    cityV = el('b');
    cityRow.append(el('span', '', 'Location'), cityV);
    prevRow = el('div', 'sst-row');
    prevV = el('b');
    prevRow.append(el('span', '', 'Previous Run'), prevV);
    fpsRow = el('div', 'sst-row');
    fpsV = el('b', '', '—');
    fpsRow.append(el('span', '', 'FPS'), fpsV);
    capBtn = el('button', 'sst-capoff', 'Turn capture off');
    capBtn.addEventListener('pointerdown', e => e.stopPropagation());
    capBtn.addEventListener('click', e => { e.stopPropagation(); disableCapture(); });
    const dismissBtn = el('button', 'sst-dismiss', '×');
    dismissBtn.title = 'Dismiss';
    dismissBtn.setAttribute('aria-label', 'Dismiss');
    dismissBtn.addEventListener('pointerdown', e => e.stopPropagation());
    dismissBtn.addEventListener('click', e => { e.stopPropagation(); unshow(); });
    root.append(time, realRow, cityRow, prevRow, fpsRow, capBtn, dismissBtn);

    menu = el('div');
    menu.id = 'sst-menu';
    ['keydown', 'keyup', 'keypress', 'pointerdown', 'pointerup', 'mousedown', 'touchstart', 'wheel'].forEach(t =>
      menu.addEventListener(t, e => e.stopPropagation())
    );

    host().append(root);

    let dn = null;
    root.addEventListener('contextmenu', e => e.preventDefault());
    root.addEventListener('pointerdown', e => {
      if (e.button !== 0 || root.classList.contains('show')) return;
      e.stopPropagation();
      e.preventDefault();
      closeMenu();
      const r = root.getBoundingClientRect();
      dn = {
        x: e.clientX, y: e.clientY, ox: e.clientX - r.left, oy: e.clientY - r.top, moved: false, held: false,
        t: setTimeout(() => { if (dn && !dn.moved) { dn.held = true; openMenu(); } }, 500)
      };
      try { root.setPointerCapture(e.pointerId); } catch (_) {}
    });
    root.addEventListener('pointermove', e => {
      if (!dn || dn.held) return;
      if (!dn.moved) {
        if (Math.hypot(e.clientX - dn.x, e.clientY - dn.y) < 6) return;
        dn.moved = true;
        clearTimeout(dn.t);
        root.classList.add('drag');
      }
      S.pos.x = clamp(e.clientX - dn.ox, 0, Math.max(0, innerWidth - root.offsetWidth));
      S.pos.y = clamp(e.clientY - dn.oy, 0, Math.max(0, innerHeight - root.offsetHeight));
      root.style.left = S.pos.x + 'px';
      root.style.top = S.pos.y + 'px';
    });
    const end = () => {
      if (!dn) return;
      clearTimeout(dn.t);
      if (dn.moved) save();
      root.classList.remove('drag');
      dn = null;
    };
    root.addEventListener('pointerup', end);
    root.addEventListener('pointercancel', end);

    root.addEventListener('pointerenter', () => { if (root.classList.contains('show')) clearTimeout(showT); });
    root.addEventListener('pointerleave', () => {
      if (!root.classList.contains('show')) return;
      clearTimeout(showT);
      if (S.showSecs > 0) showT = setTimeout(unshow, 3000);
    });

    document.addEventListener('pointerdown', e => {
      if (menu.isConnected && !menu.contains(e.target) && !root.contains(e.target)) closeMenu();
    }, true);

    window.addEventListener('keydown', e => {
      if (e.key === 'F7') { e.preventDefault(); e.stopPropagation(); dashOpen ? closeDash() : openDash(); return; }
      if (dashOpen) {
        if (e.key === 'Escape') closeDash();
        e.stopPropagation();
      }
    }, true);
    ['keyup', 'keypress'].forEach(t => window.addEventListener(t, e => { if (dashOpen) e.stopPropagation(); }, true));

    document.addEventListener('fullscreenchange', () => {
      const h = host();
      h.append(root);
      if (menu.isConnected) h.append(menu);
      if (dashOpen) h.append(dash);
    });

    window.addEventListener('resize', place);

    applyPerfMode();
    apply();
    sstLog('timer: UI created, instance ' + INST, { parent: root.parentNode && root.parentNode.tagName, inDom: root.isConnected }, 'timer-created');

    const audit = tag => {
      const roots = [...document.querySelectorAll('#sst-root')];
      const info = roots.map(r => r.dataset.sstInst ? 'ours:' + r.dataset.sstInst + '@' + r.dataset.sstVer : 'FOREIGN (no tag, from another script)');
      sstLog('timer: audit ' + tag + ': ' + roots.length + ' timer element(s)', info, roots.length > 1 ? 'timer-multi' : undefined);
    };
    setTimeout(() => audit('1.5s'), 1500);
    setTimeout(() => audit('5s'), 5000);

    setInterval(() => { if (state === 'idle' && S.show.city) render(); }, 1000);
    ['popstate', 'hashchange'].forEach(t => window.addEventListener(t, () => { if (state === 'idle') render(); }));
  };

  init();
}

function bruneFullscreenFrame() {
  if (SST_PAGE.__bruneLoaded) { sstLog('brune: already loaded (duplicate script?)', undefined, 'brune-dup'); return; }
  SST_PAGE.__bruneLoaded = true;

  const CUSTOM_CLASS = 'brune-custom-game-frame';
  const WINDOW_MS = 20000;
  const started = Date.now();
  let customFrame = null, observer = null, lastCount = -1;

  const FULL = {
    position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
    border: 'none', margin: '0', padding: '0', maxWidth: 'none', maxHeight: 'none',
    zIndex: '2147483000'
  };
  const styleOk = f => f.style.position === 'fixed' && f.style.zIndex === '2147483000' && f.style.width === '100vw';
  const cleanOthers = keep => document.querySelectorAll('iframe').forEach(f => { if (f !== keep) f.remove(); });

  sstLog('brune: started, mode=' + SST_BRUNE_MODE);

  function setup() {
    if (customFrame) return;
    const frames = [...document.querySelectorAll('iframe')];
    if (frames.length !== lastCount) {
      lastCount = frames.length;
      sstLog('brune: iframes on page: ' + frames.length, frames.map(f => ({
        id: f.id, cls: f.className, src: (f.src || '').slice(0, 100), sandbox: f.getAttribute('sandbox')
      })));
    }
    const original = frames.find(f => f.id === 'game-element' && f.src.startsWith('https://games.poki.com/'));
    if (!original) {
      if (Date.now() - started >= WINDOW_MS) sstLog('brune: NO game iframe found within ' + WINDOW_MS + 'ms', undefined, 'brune-notfound');
      return;
    }
    sstLog('brune: found game iframe', { src: original.src.slice(0, 140), sandbox: original.getAttribute('sandbox'), allow: original.allow }, 'brune-found');
    if (SST_BRUNE_MODE === 'restyle') {
      customFrame = original;
      Object.assign(original.style, FULL);
      original.allowFullscreen = true;
      cleanOthers(original);
      initialObserver.disconnect();
      setInterval(() => {
        if (!original.isConnected) return;
        if (!styleOk(original)) Object.assign(original.style, FULL);
        cleanOthers(original);
      }, 700);
      sstLog('brune: original iframe restyled to fullscreen (not recreated)');
      return;
    }
    customFrame = document.createElement('iframe');
    customFrame.className = CUSTOM_CLASS;
    customFrame.src = original.src;
    customFrame.id = 'brune-game-frame';
    customFrame.allowFullscreen = true;
    customFrame.allow = original.allow;
    customFrame.name = original.name;
    customFrame.scrolling = 'no';
    if (original.hasAttribute('sandbox')) customFrame.setAttribute('sandbox', original.getAttribute('sandbox'));
    Object.assign(customFrame.style, FULL);
    document.body.appendChild(customFrame);
    cleanOthers(customFrame);
    initialObserver.disconnect();
    observer?.disconnect();
    observer = new MutationObserver(() => {
      cleanOthers(customFrame);
      if (!customFrame.isConnected) document.body.appendChild(customFrame);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    sstLog('brune: replacement iframe created (original removed)');
  }

  const initialObserver = new MutationObserver(setup);
  initialObserver.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'id'] });
  setup();
  setTimeout(() => {
    initialObserver.disconnect();
    if (!customFrame) sstLog('brune: search window ended, nothing done');
  }, WINDOW_MS);
}

(function cheats() {
  'use strict';
  if (SST_EDITION !== 'legacy') return;
  const COINS = 999999999;
  const KEYS = 999999999;
  const BOOST_COUNT = 999999;
  const RETRY_MS = 10;
  const MAX_RETRIES = 100;
  const STORAGE = { game: 'GameSettings', shop: 'ShopSettings', board: 'BoardSettings' };
  let retries = 0;
  let reloading = false;
  function read(key) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch { return null; } }
  function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function enhanceSave() {
    if (reloading) return false;
    let changed = false;
    const game = read(STORAGE.game);
    const shop = read(STORAGE.shop);
    const board = read(STORAGE.board);
    if (game?.currencies) {
      if (game.currencies.coins !== COINS) { game.currencies.coins = COINS; changed = true; }
      if (game.currencies.keys !== KEYS) { game.currencies.keys = KEYS; changed = true; }
      if (changed) write(STORAGE.game, game);
    }
    let shopChanged = false;
    if (shop?.purchased) {
      const purchased = shop.purchased;
      if (!purchased.characters.includes('jake')) { purchased.characters.push('jake'); shopChanged = true; }
      if (!purchased.boards.includes('hoverboard')) { purchased.boards.push('hoverboard'); shopChanged = true; }
      const boosts = purchased.boosts;
      if (boosts?.consumables) {
        for (const key of Object.keys(boosts.consumables)) { if (boosts.consumables[key] !== BOOST_COUNT) { boosts.consumables[key] = BOOST_COUNT; shopChanged = true; } }
      }
      if (boosts?.permanents) {
        for (const key of Object.keys(boosts.permanents)) { if (boosts.permanents[key] !== BOOST_COUNT) { boosts.permanents[key] = BOOST_COUNT; shopChanged = true; } }
      }
      if (shopChanged) write(STORAGE.shop, shop);
    }
    if (board && board.name !== 'hoverboard') { board.name = 'hoverboard'; write(STORAGE.board, board); changed = true; }
    if (changed || shopChanged) {
      console.log('[Brune] Save enhanced. Reloading game...');
      reloading = true;
      location.reload();
      return true;
    }
    return Boolean(game?.currencies && shop?.purchased && board);
  }
  const timer = setInterval(() => {
    retries++;
    if (enhanceSave() || retries >= MAX_RETRIES) clearInterval(timer);
  }, RETRY_MS);
  enhanceSave();
})();

(function themeMusic() {
  'use strict';
  if (SST_EDITION !== 'legacy') return;
  if (location.hostname === 'sir-henry-floyd-grammar-school.uk.arbor.education') return;
  if (window.__themeMusic) return;

  const TARGET = 'transylvania/audio-basic/theme.ogg';
  const ORIGINAL_THEME = 'https://5dd312fa-015f-11ea-ad56-9cb6d0d995f7.gdn.poki.com/ec5c789a-69d7-476d-aa4e-1a0064850d79/bundles/transylvania/audio-basic/theme.ogg';
  const DB_NAME = 'ThemeMusicLibrary';
  const STORE_NAME = 'tracks';
  const VOLUME_KEY = 'themeMusicVolume';
  const APPEARANCE_KEY = 'themeMusicAppearance';
  let volume = Number(localStorage.getItem(VOLUME_KEY) ?? 0.7);
  volume = Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 0.7));
  let appearance = localStorage.getItem(APPEARANCE_KEY) || 'glass';
  if (!['glass', 'minimal'].includes(appearance)) appearance = 'glass';
  let tracks = [];
  let current = -1;
  let media = null;
  let originalMode = false;
  let db = null;
  let root;

  const isThemeRequest = value => {
    try {
      const url = new URL(
        value instanceof Request ? value.url :
        typeof value === 'object' && value?.url ? value.url :
        String(value),
        location.href
      );
      return url.pathname.toLowerCase().includes(TARGET);
    } catch {
      return String(value).toLowerCase().includes(TARGET);
    }
  };

  if (!XMLHttpRequest.prototype.__themeMusicPatched) {
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      this.__themeMusicBlocked = isThemeRequest(url);
      return originalOpen.call(this, method, url, ...args);
    };
    XMLHttpRequest.prototype.send = function(...args) {
      if (this.__themeMusicBlocked) { this.abort(); return; }
      return originalSend.apply(this, args);
    };
    XMLHttpRequest.prototype.__themeMusicPatched = true;
  }

  if (!window.__themeMusicFetchPatched && window.fetch) {
    const originalFetch = window.fetch;
    window.fetch = function(resource, ...args) {
      if (isThemeRequest(resource)) return Promise.reject(new DOMException('Theme blocked', 'AbortError'));
      return originalFetch.call(this, resource, ...args);
    };
    window.__themeMusicFetchPatched = true;
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE_NAME)) {
          request.result.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        }
      };
      request.onsuccess = () => { db = request.result; resolve(db); };
      request.onerror = () => reject(request.error);
    });
  }

  function storageAction(mode, action) {
    return new Promise((resolve, reject) => {
      if (!db) { reject(new Error('Storage unavailable')); return; }
      const transaction = db.transaction(STORE_NAME, mode);
      const request = action(transaction.objectStore(STORE_NAME));
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      transaction.onabort = () => reject(transaction.error);
    });
  }

  function setStatus(message) {
    const status = root?.querySelector('#tm-status');
    if (status) status.textContent = message;
  }

  function update() {
    if (!root) return;
    const now = root.querySelector('#tm-now');
    const list = root.querySelector('#tm-list');
    const play = root.querySelector('#tm-play');
    now.textContent = originalMode ? 'Original theme' : current >= 0 && tracks[current] ? tracks[current].name : 'No song will play';
    play.textContent = media && !media.paused ? 'Ⅱ' : '▶';
    list.replaceChildren();
    tracks.forEach((track, index) => {
      const item = document.createElement('div');
      item.className = 'tm-track' + (index === current && !originalMode ? ' active' : '');
      item.textContent = track.name;
      item.title = track.name;
      item.onclick = () => playTrack(index);
      list.appendChild(item);
    });
  }

  function stopMedia() {
    if (media) {
      media.pause();
      media.removeAttribute('src');
      media.load();
      media.remove();
      media = null;
    }
    originalMode = false;
    update();
  }

  function applyVolume() {
    if (media) media.volume = volume;
    const slider = root?.querySelector('#tm-volume');
    const value = root?.querySelector('#tm-volume-value');
    if (slider) slider.value = String(Math.round(volume * 100));
    if (value) value.textContent = `${Math.round(volume * 100)}%`;
  }

  function playTrack(index) {
    if (!tracks.length) return;
    current = (index + tracks.length) % tracks.length;
    stopMedia();
    const track = tracks[current];
    const isVideo = track.file.type.startsWith('video/');
    media = document.createElement(isVideo ? 'video' : 'audio');
    media.style.display = 'none';
    media.preload = 'auto';
    media.src = track.url;
    media.volume = volume;
    document.body.appendChild(media);
    media.onended = () => { if (tracks.length) playTrack(current + 1); };
    media.onerror = () => setStatus('Unable to play file');
    media.onplay = () => { update(); setStatus(isVideo ? 'Playing video audio' : 'Playing'); };
    media.onpause = update;
    media.play().catch(() => setStatus('Press play to start'));
    update();
  }

  function playOriginal() {
    stopMedia();
    current = -1;
    originalMode = true;
    media = new Audio(ORIGINAL_THEME);
    media.volume = volume;
    media.preload = 'auto';
    media.onended = () => { originalMode = false; update(); setStatus('Original theme finished'); };
    media.onerror = () => { originalMode = false; update(); setStatus('Original theme unavailable'); };
    media.onplay = () => { update(); setStatus('Original theme playing'); };
    media.onpause = update;
    media.play().catch(() => setStatus('Press play to start'));
    update();
  }

  function clearPlaylist() {
    stopMedia();
    tracks.forEach(track => URL.revokeObjectURL(track.url));
    tracks = [];
    current = -1;
    update();
    setStatus('No song will play');
  }

  async function saveLibrary() {
    if (!tracks.length) { setStatus('Nothing to save'); return; }
    try {
      await storageAction('readwrite', store => store.clear());
      for (const track of tracks) {
        await storageAction('readwrite', store => store.add({ name: track.name, file: track.file }));
      }
      setStatus('Library saved');
    } catch { setStatus('Unable to save library'); }
  }

  async function loadLibrary() {
    try {
      const saved = await storageAction('readonly', store => store.getAll());
      saved.forEach(item => {
        tracks.push({ file: item.file, name: item.name, url: URL.createObjectURL(item.file) });
      });
      update();
      if (tracks.length) setStatus(`${tracks.length} saved tracks`);
    } catch { setStatus('Storage unavailable'); }
  }

  async function clearStorage() {
    try {
      await storageAction('readwrite', store => store.clear());
      clearPlaylist();
      setStatus('Storage cleared');
    } catch { setStatus('Unable to clear storage'); }
  }

  function setAppearance(value) {
    appearance = value;
    root.dataset.appearance = appearance;
    root.querySelector('#tm-appearance').textContent = appearance === 'glass' ? 'Liquid Glass' : 'Minimal';
    localStorage.setItem(APPEARANCE_KEY, appearance);
  }

  function createUI() {
    const host = document.createElement('div');
    host.id = 'theme-music';
    host.dataset.appearance = appearance;
    host.innerHTML = `
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <filter id="lg-filter" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
          <feImage x="0" y="0" width="420" height="280"
            href="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22420%22%20height%3D%22280%22%20viewBox%3D%220%200%20420%20280%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22Y%22%20x1%3D%220%22%20x2%3D%220%22%20y1%3D%223%25%22%20y2%3D%2297%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230F0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22X%22%20x1%3D%222%25%22%20x2%3D%2298%25%22%20y1%3D%220%22%20y2%3D%220%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23F00%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22%23808080%22%2F%3E%3Cg%20filter%3D%22blur(2px)%22%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22%23000080%22%2F%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22url(%23Y)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22url(%23X)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3Crect%20x%3D%2222%22%20y%3D%2222%22%20width%3D%22376%22%20height%3D%22236%22%20rx%3D%2228%22%20ry%3D%2228%22%20fill%3D%22%23808080%22%20filter%3D%22blur(22px)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            result="displacementMap" />
          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="245" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" result="displacedR" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="243" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" result="displacedG" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" />
          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="241" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" result="displacedB" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          <feBlend in="displacedR" in2="displacedG" mode="screen" result="rg" />
          <feBlend in="rg" in2="displacedB" mode="screen" />
        </filter>
      </svg>

      <style>
        #theme-music { position: fixed; right: 12px; bottom: 12px; z-index: 2147483647; font-family: Arial, sans-serif; color: white; }
        #theme-music * { box-sizing: border-box; }
        .liquid-glass {
          border-radius: 50px;
          background: rgba(255, 255, 255, 0);
          backdrop-filter: blur(0.5px) url(#lg-filter) blur(1px) saturate(1.5) brightness(1.1);
          -webkit-backdrop-filter: blur(8px) saturate(1.8) brightness(1.15) contrast(1.05);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.15), inset 1.5px 1.5px 0 rgba(255,255,255,.5), inset 0 0 12px rgba(255,255,255,.2), 0 8px 32px rgba(0,0,0,.2);
        }
        #tm-trigger { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border: 0; color: white; cursor: pointer; font-size: 17px; background: rgba(255,255,255,.08); }
        #tm-panel { display: none; position: absolute; right: 0; bottom: 48px; width: 260px; padding: 14px; border-radius: 24px; background: rgba(255,255,255,.035); }
        #tm-panel.open { display: block; }
        #tm-title { font-size: 12px; font-weight: 700; letter-spacing: .5px; margin: 0 0 13px; }
        #tm-now { font-size: 11px; color: #ffffffd9; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 12px 2px; }
        #tm-add, #tm-controls button, #tm-actions button, #tm-storage button, #tm-appearance { color: white; border: 1px solid #ffffff30; background: rgba(255,255,255,.08); cursor: pointer; border-radius: 50px; padding: 8px; font: inherit; font-size: 10px; }
        #tm-add { width: 100%; }
        #tm-controls { display: flex; gap: 8px; margin: 12px 0; }
        #tm-controls button { flex: 1; font-size: 14px; }
        #tm-volume-row { display: flex; align-items: center; gap: 9px; margin: 12px 2px; font-size: 11px; }
        #tm-volume { flex: 1; min-width: 0; accent-color: white; cursor: pointer; }
        #tm-volume-value { width: 32px; text-align: right; color: #ffffffb0; }
        #tm-actions, #tm-storage { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin-top: 8px; }
        #tm-list { max-height: 125px; overflow-y: auto; margin-top: 8px; scrollbar-width: thin; scrollbar-color: #ffffff55 transparent; }
        .tm-track { padding: 7px 9px; border-radius: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; font-size: 10px; color: #ffffffa8; }
        .tm-track:hover { background: #ffffff15; }
        .tm-track.active { color: white; background: #ffffff25; }
        #tm-status { font-size: 9px; color: #ffffff85; margin: 10px 2px 0; }
        #tm-file { display: none; }
        #theme-music[data-appearance="minimal"] .liquid-glass { backdrop-filter: none; -webkit-backdrop-filter: none; background: rgba(18,18,24,.97); box-shadow: 0 5px 22px #0008; border: 1px solid #ffffff25; }
        #theme-music[data-appearance="minimal"] #tm-trigger { background: rgba(18,18,24,.97); border: 1px solid #ffffff30; }
        #theme-music[data-appearance="minimal"] #tm-panel { background: rgba(18,18,24,.98); }
        @media (prefers-reduced-motion: reduce) { #theme-music * { transition: none !important; } }
      </style>

      <div id="tm-panel" class="liquid-glass">
        <div id="tm-title">THEME MUSIC</div>
        <button id="tm-add">＋ Add music / videos</button>
        <input id="tm-file" type="file" multiple accept="audio/*,video/*,.mp3,.ogg,.wav,.m4a,.mp4,.webm,.aac,.flac">
        <div id="tm-now">No song will play</div>
        <div id="tm-controls">
          <button id="tm-prev">⏮</button>
          <button id="tm-play">▶</button>
          <button id="tm-next">⏭</button>
        </div>
        <div id="tm-volume-row">
          <span>Volume</span>
          <input id="tm-volume" type="range" min="0" max="100" value="${Math.round(volume * 100)}">
          <span id="tm-volume-value">${Math.round(volume * 100)}%</span>
        </div>
        <div id="tm-list"></div>
        <div id="tm-actions">
          <button id="tm-clear">Clear</button>
          <button id="tm-reset">Reset Original</button>
        </div>
        <div id="tm-storage">
          <button id="tm-save">Save Library</button>
          <button id="tm-clear-storage">Clear Storage</button>
        </div>
        <button id="tm-appearance" style="width:100%;margin-top:9px">Liquid Glass</button>
        <div id="tm-status">Ready</div>
      </div>
      <button id="tm-trigger" class="liquid-glass" title="Theme Music">♫</button>
    `;
    document.body.appendChild(host);
    return host;
  }

  function init() {
    if (!document.body) { requestAnimationFrame(init); return; }
    root = createUI();
    const panel = root.querySelector('#tm-panel');
    root.querySelector('#tm-trigger').onclick = () => { panel.classList.toggle('open'); };
    root.querySelector('#tm-add').onclick = () => { root.querySelector('#tm-file').click(); };
    root.querySelector('#tm-file').onchange = event => {
      const files = Array.from(event.target.files || []);
      files.forEach(file => {
        tracks.push({ file, name: file.name.replace(/\.[^.]+$/, ''), url: URL.createObjectURL(file) });
      });
      update();
      if (current === -1 && tracks.length) playTrack(0);
      setStatus(`${tracks.length} tracks`);
      event.target.value = '';
    };
    root.querySelector('#tm-play').onclick = () => {
      if (!media) { if (tracks.length) playTrack(0); return; }
      if (media.paused) media.play().catch(() => setStatus('Press play to start'));
      else media.pause();
    };
    root.querySelector('#tm-prev').onclick = () => { if (tracks.length) playTrack(current - 1); };
    root.querySelector('#tm-next').onclick = () => { if (tracks.length) playTrack(current + 1); };
    root.querySelector('#tm-clear').onclick = clearPlaylist;
    root.querySelector('#tm-reset').onclick = playOriginal;
    root.querySelector('#tm-save').onclick = saveLibrary;
    root.querySelector('#tm-clear-storage').onclick = clearStorage;
    root.querySelector('#tm-volume').oninput = event => {
      volume = Number(event.target.value) / 100;
      localStorage.setItem(VOLUME_KEY, String(volume));
      applyVolume();
    };
    root.querySelector('#tm-appearance').onclick = () => { setAppearance(appearance === 'glass' ? 'minimal' : 'glass'); };
    setAppearance(appearance);
    applyVolume();
    update();
    openDatabase().then(loadLibrary).catch(() => setStatus('Storage unavailable'));
    window.__themeMusic = {
      get playlist() { return tracks.map(track => track.name); },
      stop() { if (media) media.pause(); },
      clear: clearPlaylist,
      reset: playOriginal
    };
    window.addEventListener('pagehide', () => {
      if (media) media.pause();
      tracks.forEach(track => URL.revokeObjectURL(track.url));
    }, { once: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();

function startSpeedrunSuite() {
  sstLog('suite: startSpeedrunSuite()', {
    version: SST_VERSION, edition: SST_EDITION, href: location.href, isTop: SST_IS_TOP,
    onPokiPage: SST_ON_POKI_PAGE, onYell: SST_ON_YELL, hostsTimer: SST_HOSTS
  }, 'suite-start');

  SST_PAGE.sstDump = () => {
    const roots = [...document.querySelectorAll('#sst-root')].map(r => r.dataset.sstInst ? 'ours:' + r.dataset.sstInst : 'FOREIGN (no tag)');
    const info = {
      version: SST_VERSION, edition: SST_EDITION, where: SST_WHERE, hostsTimer: SST_HOSTS, timerElements: roots,
      iframes: [...document.querySelectorAll('iframe')].map(f => ({ id: f.id, src: (f.src || '').slice(0, 100) })),
      timerState: window.sstimer ? window.sstimer.state : 'no timer object'
    };
    console.log('[SST dump]', info);
    return info;
  };

  if (!SST_WANTED) { sstLog('suite: not a speedrun page, doing nothing'); return; }
  if (!SST_HOSTS) { sstLog('suite: this window does not host the timer (hook only)'); return; }

  try {
    if (SST_EDITION === 'legacy') speedrunTimerLegacy();
    else speedrunTimerLite();
  } catch (e) { sstLog('suite: timer() THREW: ' + e.message + ' ' + (e.stack || '').split('\n')[1], undefined, 'timer-threw'); console.error('[timer] failed to start', e); }

  if (SST_ON_POKI_PAGE && SST_EDITION === 'legacy') {
    try { bruneFullscreenFrame(); } catch (e) { sstLog('suite: bruneFullscreenFrame() THREW: ' + e.message, undefined, 'brune-threw'); console.error('[Brune] failed', e); }
  }
}

if (SST_WANTED) startSpeedrunSuite();







// Discord 𝖀𝓛𝓣ℛ𝓐 [NOT SUPPORTED | ABOUT TO BE DEPRECATED]
function discordUltra() {}

// https://greasyfork.org/en/scripts/601672-discord-%F0%9D%96%80%F0%9D%93%9B%F0%9D%93%A3%E2%84%9B%F0%9D%93%90
// discord ultra moved.


// remove the weird stuf
function removeWeird() {
    if (!/(^|\.)discord\.com$/.test(location.hostname)) return;
    const fix = () => {
        document.querySelectorAll("video.img_df39b2").forEach(video => {
            video.classList.remove("img_df39b2");
            video.setAttribute("style",`width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                object-position: center !important;`)
        });
    };

    fix();

    new MutationObserver(fix).observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"]
    });

    setInterval(fix, 500);
}

// toggle 3 btns for dc
function buttonToggle() {
setTimeout(() => {
    (() => {
        if (!/(^|\.)discord\.com$/.test(location.hostname)) return;

        const ID = "brune-account-controls";
        const STYLE_ID = `${ID}-style`;

        document.getElementById(ID)?.remove();
        document.getElementById(STYLE_ID)?.remove();

        let timer;
        let hovered = false;

        const css = `

            video.img_df39b2 {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                object-position: center !important;
            }

            #${ID} {
                display: inline-flex !important;
                align-items: center !important;
                flex: 0 0 auto !important;
                position: relative !important;
                z-index: 999999 !important;
                min-width: 32px !important;
                overflow: visible !important;
            }

            #${ID} .brune-menu-toggle {
                width: 32px !important;
                min-width: 32px !important;
                height: 32px !important;
                flex: 0 0 32px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 0 !important;
                border: 0 !important;
                border-radius: 8px !important;
                background: transparent !important;
                color: #b5bac1 !important;
                cursor: pointer !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: relative !important;
                z-index: 1000000 !important;
            }

            #${ID} .brune-menu-toggle:hover {
                background: #ffffff12 !important;
                color: white !important;
            }

            #${ID} .brune-menu-toggle svg {
                display: block !important;
                width: 20px !important;
                height: 20px !important;
                min-width: 20px !important;
                min-height: 20px !important;
                overflow: visible !important;
            }

            #${ID} .brune-controls {
                display: flex !important;
                align-items: center !important;
                gap: 2px !important;
                flex: 0 0 auto !important;
                width: max-content !important;
                max-width: 0 !important;
                overflow: hidden !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                transform: translateX(8px) !important;
                transition: max-width .3s ease, opacity .2s ease, transform .3s ease !important;
            }

            #${ID}.is-expanded .brune-controls {
                max-width: 420px !important;
                opacity: 1 !important;
                visibility: visible !important;
                pointer-events: auto !important;
                transform: translateX(0) !important;
            }

            #${ID} .brune-controls > .buttons__37e49 {
                display: flex !important;
                align-items: center !important;
                flex: 0 0 auto !important;
                width: max-content !important;
                max-width: none !important;
                overflow: visible !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
            }

            #${ID} .brune-controls > .buttons__37e49 > * {
                flex: 0 0 auto !important;
            }

            #${ID}.is-expanded .brune-menu-toggle {
                transform: rotate(90deg) !important;
            }
        `;

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = css;
        document.head.appendChild(style);

        function setup() {
            document.querySelectorAll(
                ".container__37e49 > .accountPopoutButtonWrapper__37e49"
            ).forEach(profile => {
                const account = profile.parentElement;
                if (!account || account.querySelector(`#${ID}`)) return;

                const buttons = account.querySelector(":scope > .buttons__37e49");
                if (!buttons) return;

                const wrapper = document.createElement("div");
                wrapper.id = ID;

                const toggle = document.createElement("button");
                toggle.type = "button";
                toggle.className = "brune-menu-toggle";
                toggle.title = "More account controls";
                toggle.setAttribute("aria-label", "More account controls");
                toggle.setAttribute("aria-expanded", "false");
                toggle.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5" cy="12" r="2"/>
                        <circle cx="12" cy="12" r="2"/>
                        <circle cx="19" cy="12" r="2"/>
                    </svg>
                `;

                const controls = document.createElement("div");
                controls.className = "brune-controls";

                wrapper.append(toggle, controls);
                profile.insertAdjacentElement("afterend", wrapper);
                controls.appendChild(buttons);

                function close() {
                    wrapper.classList.remove("is-expanded");
                    toggle.setAttribute("aria-expanded", "false");
                }

                toggle.addEventListener("click", event => {
                    event.preventDefault();
                    event.stopPropagation();

                    const open = !wrapper.classList.contains("is-expanded");
                    wrapper.classList.toggle("is-expanded", open);
                    toggle.setAttribute("aria-expanded", String(open));

                    clearTimeout(timer);
                    if (open) {
                        timer = setTimeout(() => {
                            if (!hovered) close();
                        }, 3000);
                    }
                });

                wrapper.addEventListener("mouseenter", () => {
                    hovered = true;
                    clearTimeout(timer);
                });

                wrapper.addEventListener("mouseleave", () => {
                    hovered = false;
                    if (wrapper.classList.contains("is-expanded")) {
                        timer = setTimeout(close, 3000);
                    }
                });
            });
        }

        setup();

        new MutationObserver(() => requestAnimationFrame(setup)).observe(
            document.documentElement,
            { childList: true, subtree: true }
        );
    })();
}, 18767);
}







// custom rpc saves ( vencord only! )
function initCustomRpcProfiles() {
  if (!/(^|\.)discord\.com$/.test(location.hostname)) return;

  const STORE_KEY = "customrpc_profiles_v1";
  const STREAM_LABEL = "Stream Link (Twitch or YouTube, only if activity type is Streaming)";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const hasOwn = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const log = (...a) => console.log("[RPC profiles]", ...a);

  let applying = false;
  let currentModal = null;
  let uploading = false;
  let armedSelect = null;
  const pending = {};
  let flushTimer = null;

  const LABEL_TO_KEY = {
    "Activity Type": "type",
    "Application ID": "appID",
    "Application Name": "appName",
    "Detail (line 1)": "details",
    "Detail URL": "detailsURL",
    "State (line 2)": "state",
    "State URL": "stateURL",
    [STREAM_LABEL]: "streamLink",
    "Party Size": "partySize",
    "Maximum Party Size": "partyMaxSize",
    "Large Image URL/Key": "imageBig",
    "Large Image Text": "imageBigTooltip",
    "Large Image clickable URL": "imageBigURL",
    "Small Image URL/Key": "imageSmall",
    "Small Image Text": "imageSmallTooltip",
    "Small Image clickable URL": "imageSmallURL",
    "Button1 Text": "buttonOneText",
    "Button1 URL": "buttonOneURL",
    "Button2 Text": "buttonTwoText",
    "Button2 URL": "buttonTwoURL",
    "Timestamp Mode": "timestampMode",
    "Start Timestamp (in milliseconds)": "startTime",
    "End Timestamp (in milliseconds)": "endTime"
  };
  const KEY_TO_LABEL = {};
  Object.entries(LABEL_TO_KEY).forEach(([l, k]) => (KEY_TO_LABEL[k] = l));
  const TYPE_VALUES = { Playing: 0, Streaming: 1, Listening: 2, Watching: 3, Competing: 5 };
  const TIMESTAMP_VALUES = { "None": 0, "Since discord open": 1, "Same as your current time": 2, "Custom": 3 };
  const NUMERIC_KEYS = new Set(["partySize", "partyMaxSize", "startTime", "endTime"]);
  const IMAGE_LABELS = { "Large Image URL/Key": true, "Small Image URL/Key": true };

  const keyForLabel = (label) =>
    label.startsWith("Stream Link") ? "streamLink" : hasOwn(LABEL_TO_KEY, label) ? LABEL_TO_KEY[label] : undefined;
  const nameOf = (map, v) => Object.keys(map).find((k) => map[k] === Number(v));

  const getPlugin = () => window.Vencord?.Plugins?.plugins?.CustomRPC;
  const getStore = () => window.Vencord?.Settings?.plugins?.CustomRPC;

  function convert(key, raw) {
    if (key === "type") return hasOwn(TYPE_VALUES, raw) ? TYPE_VALUES[raw] : undefined;
    if (key === "timestampMode") return hasOwn(TIMESTAMP_VALUES, raw) ? TIMESTAMP_VALUES[raw] : undefined;
    if (NUMERIC_KEYS.has(key)) {
      const n = Number(raw);
      return Number.isFinite(n) ? n : 0;
    }
    return raw == null ? "" : String(raw);
  }

  function normalizeProfile(obj) {
    const out = {};
    Object.entries(obj || {}).forEach(([k, v]) => {
      if (hasOwn(KEY_TO_LABEL, k) && !hasOwn(LABEL_TO_KEY, k)) {
        let val = v == null ? "" : String(v);
        if (k === "type" && nameOf(TYPE_VALUES, v) && val !== "" && !isNaN(Number(v))) val = nameOf(TYPE_VALUES, v);
        if (k === "timestampMode" && nameOf(TIMESTAMP_VALUES, v) && val !== "" && !isNaN(Number(v))) val = nameOf(TIMESTAMP_VALUES, v);
        out[KEY_TO_LABEL[k]] = val;
      } else {
        out[k] = v == null ? "" : String(v);
      }
    });
    return out;
  }

  const persist = (d) => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(d)); } catch (e) { console.warn("[RPC profiles] save failed", e); }
  };
  const load = () => {
    let d = { active: null, profiles: {} };
    try {
      const p = JSON.parse(localStorage.getItem(STORE_KEY));
      if (p && p.profiles) d = p;
    } catch (e) {}
    let changed = false;
    Object.keys(d.profiles).forEach((n) => {
      const norm = normalizeProfile(d.profiles[n]);
      if (JSON.stringify(norm) !== JSON.stringify(d.profiles[n])) {
        d.profiles[n] = norm;
        changed = true;
      }
    });
    if (changed) persist(d);
    return d;
  };

  const wave = encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='12' viewBox='0 0 40 12'><path d='M0 0H40V6Q30 12 20 6T0 6Z'/></svg>"
  );
  const style = document.createElement("style");
  style.id = "rpcp-style";
  style.textContent = `
    .rpcp-bar{display:flex;flex-direction:column;gap:8px;margin-top:10px}
    .rpcp-row,.rpcp-imgrow{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
    .rpcp-imgrow{margin-top:6px}
    .rpcp-imgrow span,.rpcp-status{font-size:12px;color:var(--text-subtle,#b5bac1)}
    .rpcp-bar label{font-size:12px;font-weight:600;color:var(--text-subtle,#b5bac1);text-transform:uppercase}
    .rpcp-bar select,.rpcp-bar input[type=text],.rpcp-bar textarea{background:var(--background-base-lower,#1e1f22);color:var(--text-default,#dbdee1);
      border:1px solid var(--border-subtle,#3f4147);border-radius:6px;padding:5px 8px;font-size:13px;outline:none;font-family:inherit}
    .rpcp-bar select,.rpcp-bar input[type=text]{min-width:140px}
    .rpcp-bar textarea{width:100%;min-height:110px;resize:vertical;font-family:var(--font-code,monospace);box-sizing:border-box}
    .rpcp-bar button,.rpcp-imgrow button{background:var(--background-mod-subtle,#4e5058);color:var(--text-default,#fff);border:0;border-radius:6px;
      padding:6px 10px;font-size:13px;font-weight:600;cursor:pointer;transition:filter .15s}
    .rpcp-bar button:hover,.rpcp-imgrow button:hover{filter:brightness(1.2)}
    .rpcp-bar button.rpcp-danger:hover{background:#da373c}
    .rpcp-bar button.rpcp-primary{background:#5865f2;color:#fff}
    .rpcp-banner{position:absolute;top:0;left:0;right:0;z-index:9999;padding:11px 16px;background:#23a55a;color:#fff;
      font:600 13px/1.2 var(--font-primary,sans-serif);text-align:center;pointer-events:none;
      animation:rpcp-in .6s cubic-bezier(.2,.9,.3,1.15) forwards, rpcp-out .8s ease-in 1.9s forwards}
    .rpcp-banner.rpcp-error{background:#da373c;animation:rpcp-in .6s cubic-bezier(.2,.9,.3,1.15) forwards, rpcp-out .8s ease-in 5s forwards}
    .rpcp-banner::after{content:"";position:absolute;left:0;right:0;bottom:-11px;height:12px;background:#23a55a;
      -webkit-mask:url("data:image/svg+xml,${wave}") repeat-x 0 0/40px 12px;mask:url("data:image/svg+xml,${wave}") repeat-x 0 0/40px 12px;
      animation:rpcp-wave 1s linear infinite}
    .rpcp-banner.rpcp-error::after{background:#da373c}
    @keyframes rpcp-wave{to{-webkit-mask-position:40px 0;mask-position:40px 0}}
    @keyframes rpcp-in{from{transform:translateY(-120%)}60%{transform:translateY(6%)}to{transform:translateY(0)}}
    @keyframes rpcp-out{to{opacity:0;filter:blur(10px);transform:translateY(-16px) scale(1.06);letter-spacing:7px}}
  `;
  document.head.appendChild(style);

  function banner(modal, text, isError) {
    modal.querySelectorAll(".rpcp-banner").forEach((b) => b.remove());
    if (getComputedStyle(modal).position === "static") modal.style.position = "relative";
    const b = document.createElement("div");
    b.className = "rpcp-banner" + (isError ? " rpcp-error" : "");
    b.textContent = (isError ? "✕ " : "✓ ") + text;
    b.addEventListener("animationend", (e) => { if (e.animationName === "rpcp-out") b.remove(); });
    modal.appendChild(b);
  }

  const wrappers = (modal) => [...modal.querySelectorAll(".vc-customRPC-settings-single")];
  const labelOf = (w) => w.querySelector("h5")?.textContent.trim() || "";
  const textInputOf = (w) => w.querySelector('input[type="text"]');
  const comboOf = (w) => w.querySelector('[role="combobox"]');
  const comboValue = (cb) => cb.querySelector("span")?.textContent.trim() || "";
  const fieldValue = (w) => {
    const input = textInputOf(w);
    if (input) return input.value;
    const cb = comboOf(w);
    return cb ? comboValue(cb) : undefined;
  };

  function readFields(modal) {
    const out = {};
    wrappers(modal).forEach((w) => {
      const label = labelOf(w);
      const v = fieldValue(w);
      if (label && v !== undefined) out[label] = v;
    });
    return out;
  }

  function setText(input, val) {
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    input.focus();
    setter.call(input, val);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }));
    input.dispatchEvent(new FocusEvent("blur"));
  }

  function press(el) {
    const r = el.getBoundingClientRect();
    const base = {
      bubbles: true, cancelable: true, composed: true, view: window, button: 0,
      clientX: r.left + r.width / 2, clientY: r.top + r.height / 2,
      pointerId: 1, pointerType: "mouse", isPrimary: true
    };
    const seq = [
      ["pointerover", PointerEvent, 0], ["pointerenter", PointerEvent, 0], ["mouseover", MouseEvent, 0],
      ["pointerdown", PointerEvent, 1], ["mousedown", MouseEvent, 1],
      ["pointerup", PointerEvent, 0], ["mouseup", MouseEvent, 0],
      ["click", MouseEvent, 0]
    ];
    seq.forEach(([t, C, b]) => el.dispatchEvent(new C(t, { ...base, buttons: b, detail: t === "click" ? 1 : 0 })));
  }

  const kb = (el, k, code, kc) =>
    ["keydown", "keyup"].forEach((t) =>
      el.dispatchEvent(new KeyboardEvent(t, { key: k, code, keyCode: kc, which: kc, bubbles: true, cancelable: true }))
    );

  const visible = (el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  function findOption(text) {
    const opts = [...document.querySelectorAll('[role="option"]')].filter(visible);
    let hit = opts.find((o) => o.textContent.trim() === text);
    if (hit) return hit;
    const leaf = [...document.querySelectorAll('[role="listbox"] *')].find(
      (o) => visible(o) && o.children.length === 0 && o.textContent.trim() === text
    );
    return leaf ? leaf.closest('[role="option"]') || leaf : null;
  }

  async function viaVencord(wrapper, label, text) {
    const key = keyForLabel(label);
    const store = getStore();
    const v = convert(key, text);
    if (!store || v === undefined) return false;
    try {
      store[key] = v;
    } catch (e) {
      return false;
    }
    await sleep(350);
    return comboValue(comboOf(wrapper)) === text;
  }

  async function viaClicks(wrapper, text) {
    const cb = comboOf(wrapper);
    const field = cb.closest('[data-mana-component="select-input-field"]') || cb.parentElement;
    const targets = [field, cb, field.querySelector(".selectButton__0edde"), field.querySelector("button")].filter(Boolean);
    for (const t of targets) {
      press(t);
      await sleep(250);
      let opt = findOption(text);
      if (!opt) {
        cb.focus();
        kb(cb, "ArrowDown", "ArrowDown", 40);
        await sleep(200);
        opt = findOption(text);
      }
      if (!opt) {
        kb(cb, "Enter", "Enter", 13);
        await sleep(200);
        opt = findOption(text);
      }
      if (opt) {
        press(opt);
        await sleep(300);
        if (comboValue(cb) === text) return true;
      }
      kb(cb, "Escape", "Escape", 27);
      await sleep(120);
    }
    return comboValue(cb) === text;
  }

  async function setSelect(wrapper, label, text) {
    if (comboValue(comboOf(wrapper)) === text) return true;
    if (await viaVencord(wrapper, label, text)) {
      log("select via Vencord store:", label, "=", text);
      return true;
    }
    if (await viaClicks(wrapper, text)) {
      log("select via clicks:", label, "=", text);
      return true;
    }
    log("select FAILED:", label, "=", text);
    return false;
  }

  function lookup(fields, label) {
    if (hasOwn(fields, label)) return fields[label];
    if (label.startsWith("Stream Link")) {
      const k = Object.keys(fields).find((x) => x.startsWith("Stream Link"));
      if (k) return fields[k];
    }
    return undefined;
  }

  async function applyPass(modal, fields) {
    for (const w of wrappers(modal)) {
      const label = labelOf(w);
      const want = lookup(fields, label);
      if (want !== undefined && comboOf(w)) await setSelect(w, label, want);
    }
    await sleep(350);
    for (const w of wrappers(modal)) {
      const label = labelOf(w);
      const want = lookup(fields, label);
      const input = textInputOf(w);
      if (input && want !== undefined && !input.disabled && input.value !== want) {
        setText(input, want);
        await sleep(30);
      }
    }
    await sleep(350);
  }

  function mismatches(modal, fields) {
    const bad = [];
    wrappers(modal).forEach((w) => {
      const label = labelOf(w);
      const want = lookup(fields, label);
      if (want === undefined) return;
      const input = textInputOf(w);
      if (input && input.disabled) return;
      const cur = fieldValue(w);
      if (cur !== undefined && cur !== want) bad.push(label);
    });
    return bad;
  }

  function writeStore(fields) {
    const store = getStore();
    if (!store) return 0;
    let n = 0;
    Object.entries(fields).forEach(([label, raw]) => {
      const k = keyForLabel(label);
      if (!k) return;
      const v = convert(k, raw);
      if (v === undefined) return;
      try {
        store[k] = v;
        n++;
      } catch (e) {
        console.warn("[RPC profiles] write failed", k, e);
      }
    });
    return n;
  }

  function restartRpc() {
    try {
      getPlugin()?.start?.();
    } catch (e) {
      console.warn("[RPC profiles] restart failed", e);
    }
  }

  let applyToken = 0;
  async function applyFields(modal, fields) {
    const mine = ++applyToken;
    while (applying) await sleep(40);
    if (mine !== applyToken) return null;
    applying = true;
    try {
      const written = writeStore(fields);
      log("wrote", written, "of", Object.keys(fields).length, "fields to store");
      if (!written) return ["no fields matched the plugin's settings (check console)"];
      await sleep(400);

      let bad = mismatches(modal, fields);
      if (bad.length) {
        await applyPass(modal, fields);
        bad = mismatches(modal, fields);
      }
      restartRpc();
      return bad;
    } finally {
      applying = false;
    }
  }

  function patchField(label, value) {
    const d = load();
    if (!d.active || !d.profiles[d.active]) return false;
    if (d.profiles[d.active][label] === value) return false;
    d.profiles[d.active][label] = value;
    persist(d);
    return true;
  }

  function flush() {
    const labels = Object.keys(pending);
    if (!labels.length) return;
    let changed = false;
    labels.forEach((l) => {
      if (patchField(l, pending[l])) changed = true;
      delete pending[l];
    });
    if (changed && currentModal?.isConnected) banner(currentModal, `Saved to “${load().active}”`);
  }

  function queueField(label, value) {
    pending[label] = value;
    clearTimeout(flushTimer);
    flushTimer = setTimeout(flush, 600);
  }

  const inBar = (t) => t instanceof Element && t.closest(".rpcp-bar, .rpcp-imgrow");

  const onInput = (e) => {
    if (!e.isTrusted || applying || !currentModal?.isConnected) return;
    const t = e.target;
    if (!(t instanceof Element) || !currentModal.contains(t) || inBar(t)) return;
    const w = t.closest(".vc-customRPC-settings-single");
    if (!w) return;
    const label = labelOf(w);
    const input = textInputOf(w);
    if (label && input) queueField(label, input.value);
  };

  const onClick = (e) => {
    if (!e.isTrusted || applying || !currentModal?.isConnected) return;
    const t = e.target;
    if (!(t instanceof Element) || inBar(t)) return;
    if (currentModal.contains(t)) {
      const w = t.closest(".vc-customRPC-settings-single");
      if (w && comboOf(w)) armedSelect = w;
      return;
    }
    if (armedSelect && t.closest('[role="option"], [role="listbox"]')) {
      const w = armedSelect;
      armedSelect = null;
      setTimeout(() => {
        if (!w.isConnected) return;
        const v = fieldValue(w);
        if (v !== undefined) queueField(labelOf(w), v);
      }, 400);
    }
  };

  const onKey = (e) => {
    if (!e.isTrusted || applying || !currentModal?.isConnected) return;
    if (e.key !== "Enter" && e.key !== " ") return;
    const t = e.target;
    if (!(t instanceof Element)) return;
    const w = t.closest(".vc-customRPC-settings-single");
    if (w && comboOf(w) && currentModal.contains(w)) {
      setTimeout(() => {
        const v = fieldValue(w);
        if (v !== undefined) queueField(labelOf(w), v);
      }, 500);
    }
  };

  document.addEventListener("input", onInput, true);
  document.addEventListener("click", onClick, true);
  document.addEventListener("keyup", onKey, true);

  async function prepareImage(file) {
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = () => rej(new Error("Not a valid image"));
        img.src = url;
      });
      const scale = Math.min(1, 1024 / Math.max(img.naturalWidth, img.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      return file.type === "image/jpeg" ? canvas.toDataURL("image/jpeg", 0.92) : canvas.toDataURL("image/png");
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async function uploadImage(modal, wrapper, file) {
    if (uploading) return;
    const RestAPI = window.Vencord?.Webpack?.Common?.RestAPI;
    if (!RestAPI) return banner(modal, "Can't upload: Vencord API not found", true);
    const idWrap = wrappers(modal).find((w) => labelOf(w) === "Application ID");
    const appID = (idWrap && textInputOf(idWrap)?.value.trim()) || "";
    if (!/^\d{17,20}$/.test(appID)) return banner(modal, "Set a valid Application ID first", true);
    if (!file || !file.type.startsWith("image/")) return banner(modal, "That's not an image", true);

    uploading = true;
    try {
      banner(modal, "Uploading image...");
      const image = await prepareImage(file);
      const name = "rpc_" + Date.now().toString(36);
      const res = await RestAPI.post({
        url: `/oauth2/applications/${appID}/assets`,
        body: { name, image, type: "1" }
      });
      const assetName = res?.body?.name || name;
      const input = textInputOf(wrapper);
      if (input) setText(input, assetName);
      patchField(labelOf(wrapper), assetName);
      banner(modal, `Uploaded as “${assetName}”`);
    } catch (e) {
      const msg = e?.body?.message || e?.message || "unknown error";
      banner(modal, `Upload failed: ${msg}${e?.status ? ` (${e.status})` : ""}`, true);
    } finally {
      uploading = false;
    }
  }

  async function readClipboardImage() {
    const items = await navigator.clipboard.read();
    for (const item of items) {
      const type = item.types.find((t) => t.startsWith("image/"));
      if (type) {
        const blob = await item.getType(type);
        return new File([blob], "pasted." + type.split("/")[1], { type });
      }
    }
    return null;
  }

  const onPaste = (e) => {
    if (!currentModal?.isConnected) return;
    const t = e.target;
    if (!(t instanceof Element) || !currentModal.contains(t) || inBar(t)) return;
    const w = t.closest(".vc-customRPC-settings-single");
    if (!w || !IMAGE_LABELS[labelOf(w)]) return;
    const file = [...(e.clipboardData?.files || [])].find((f) => f.type.startsWith("image/"));
    if (!file) return;
    e.preventDefault();
    e.stopPropagation();
    uploadImage(currentModal, w, file);
  };
  document.addEventListener("paste", onPaste, true);

  const mkBtn = (text, cls) =>
    Object.assign(document.createElement("button"), { textContent: text, type: "button", className: cls || "" });

  function addImageTools(modal) {
    wrappers(modal).forEach((w) => {
      if (!IMAGE_LABELS[labelOf(w)] || w.querySelector(".rpcp-imgrow")) return;
      const row = document.createElement("div");
      row.className = "rpcp-imgrow";
      const up = mkBtn("Upload image");
      const paste = mkBtn("Paste image");
      const hint = Object.assign(document.createElement("span"), { textContent: "or press Ctrl+V while the field is focused" });
      const fi = Object.assign(document.createElement("input"), { type: "file", accept: "image/*" });
      fi.style.display = "none";
      up.addEventListener("click", () => { fi.value = ""; fi.click(); });
      fi.addEventListener("change", () => {
        const f = fi.files?.[0];
        if (f) uploadImage(modal, w, f);
      });
      paste.addEventListener("click", async () => {
        try {
          const f = await readClipboardImage();
          if (!f) return banner(modal, "No image in clipboard", true);
          uploadImage(modal, w, f);
        } catch (e) {
          banner(modal, "Clipboard blocked, use Ctrl+V in the field", true);
        }
      });
      row.append(up, paste, hint, fi);
      w.appendChild(row);
    });
  }

  const csvEscape = (v) => {
    const s = String(v ?? "");
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };

  function toCsv(profiles) {
    const rows = [["profile", "field", "value"]];
    Object.entries(profiles).forEach(([name, fields]) =>
      Object.entries(fields).forEach(([f, v]) => rows.push([name, f, v]))
    );
    return rows.map((r) => r.map(csvEscape).join(",")).join("\r\n");
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') {
          if (text[i + 1] === '"') { cell += '"'; i++; } else q = false;
        } else cell += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(cell); cell = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(cell);
        cell = "";
        rows.push(row);
        row = [];
      } else cell += c;
    }
    if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
    return rows.filter((r) => r.some((c) => c !== ""));
  }

  function parseImport(text) {
    const t = text.replace(/^\uFEFF/, "").trim();
    if (!t) throw new Error("Nothing to import");
    if (t[0] === "{" || t[0] === "[") {
      let obj = JSON.parse(t);
      if (Array.isArray(obj)) {
        const map = {};
        obj.forEach((p, i) => {
          if (p && typeof p === "object") map[p.name || `Imported ${i + 1}`] = p.fields || p;
        });
        obj = map;
      }
      if (obj.profiles && typeof obj.profiles === "object") obj = obj.profiles;
      const vals = Object.values(obj);
      const out = {};
      if (vals.length && vals.every((v) => v && typeof v === "object")) {
        Object.entries(obj).forEach(([n, f]) => (out[n] = normalizeProfile(f)));
      } else {
        out["Imported"] = normalizeProfile(obj);
      }
      return out;
    }
    const rows = parseCsv(t);
    if (rows.length < 2) throw new Error("Invalid CSV");
    const head = rows[0].map((h) => h.trim().toLowerCase());
    const pi = head.indexOf("profile");
    const fi = head.indexOf("field");
    const vi = head.indexOf("value");
    if (pi < 0 || fi < 0 || vi < 0) throw new Error("CSV needs profile,field,value columns");
    const raw = {};
    rows.slice(1).forEach((r) => {
      const name = r[pi]?.trim();
      const field = r[fi];
      if (!name || !field) return;
      (raw[name] = raw[name] || {})[field] = r[vi] ?? "";
    });
    const out = {};
    Object.entries(raw).forEach(([n, f]) => (out[n] = normalizeProfile(f)));
    return out;
  }

  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (err) {}
      ta.remove();
      return ok;
    }
  }

  function buildBar(modal) {
    const bar = document.createElement("div");
    bar.className = "rpcp-bar";

    const row1 = document.createElement("div");
    row1.className = "rpcp-row";
    const row2 = document.createElement("div");
    row2.className = "rpcp-row";
    const row3 = document.createElement("div");
    row3.className = "rpcp-row";
    row3.style.display = "none";

    const lbl = Object.assign(document.createElement("label"), { textContent: "Profile" });
    const sel = document.createElement("select");
    const btnNew = mkBtn("+ New");
    const btnDel = mkBtn("Delete", "rpcp-danger");
    const nameInput = Object.assign(document.createElement("input"), { type: "text", placeholder: "Profile name, Enter to create" });
    nameInput.style.display = "none";
    const status = Object.assign(document.createElement("span"), { className: "rpcp-status" });

    const btnExpJson = mkBtn("Export JSON");
    const btnExpCsv = mkBtn("Export CSV");
    const btnCopy = mkBtn("Copy");
    const btnImpFile = mkBtn("Import File");
    const btnPaste = mkBtn("Paste Import");
    const fileInput = Object.assign(document.createElement("input"), { type: "file", accept: ".json,.csv,.txt,application/json,text/csv,text/plain" });
    fileInput.style.display = "none";

    const area = document.createElement("textarea");
    area.placeholder = "Paste JSON or CSV here";
    const btnApply = mkBtn("Import", "rpcp-primary");
    const btnCancel = mkBtn("Cancel");

    const refresh = () => {
      const d = load();
      sel.innerHTML = "";
      Object.keys(d.profiles).forEach((n) => {
        const o = document.createElement("option");
        o.value = o.textContent = n;
        sel.appendChild(o);
      });
      sel.value = d.active;
    };

    const exportData = () => {
      const d = load();
      return { active: d.active, profiles: d.profiles };
    };

    async function loadProfile(name) {
      const d = load();
      const fields = d.profiles[name];
      if (!fields) return;
      clearTimeout(flushTimer);
      Object.keys(pending).forEach((k) => delete pending[k]);
      status.textContent = "Applying...";
      const bad = await applyFields(modal, fields);
      if (bad === null) return;
      if (!bad.length) {
        status.textContent = `Loaded “${name}”`;
        banner(modal, `Loaded “${name}”`);
      } else {
        status.textContent = `Not applied: ${bad.join(", ")}`;
        banner(modal, `Loaded “${name}”, but didn't apply: ${bad.join(", ")}`, true);
      }
    }

    async function doImport(text) {
      let incoming;
      try {
        incoming = parseImport(text);
      } catch (e) {
        return banner(modal, "Import failed: " + e.message, true);
      }
      const names = Object.keys(incoming);
      if (!names.length) return banner(modal, "No profiles found", true);
      const d = load();
      names.forEach((n) => (d.profiles[n] = incoming[n]));
      d.active = names[0];
      persist(d);
      refresh();
      row3.style.display = "none";
      area.value = "";
      await loadProfile(d.active);
    }

    sel.addEventListener("change", async () => {
      flush();
      const d = load();
      d.active = sel.value;
      persist(d);
      await loadProfile(d.active);
    });

    btnNew.addEventListener("click", () => {
      nameInput.style.display = "";
      nameInput.value = "";
      nameInput.focus();
    });

    nameInput.addEventListener("keydown", (e) => {
      e.stopPropagation();
      if (e.key === "Escape") nameInput.style.display = "none";
      if (e.key !== "Enter") return;
      const name = nameInput.value.trim();
      if (!name) return;
      flush();
      const d = load();
      if (d.profiles[name]) return banner(modal, `“${name}” already exists`, true);
      d.profiles[name] = readFields(modal);
      d.active = name;
      persist(d);
      nameInput.style.display = "none";
      refresh();
      banner(modal, `Created “${name}”`);
    });

    btnDel.addEventListener("click", async () => {
      const d = load();
      if (Object.keys(d.profiles).length <= 1) return banner(modal, "Can't delete the last profile", true);
      delete d.profiles[d.active];
      d.active = Object.keys(d.profiles)[0];
      persist(d);
      refresh();
      await loadProfile(d.active);
    });

    btnExpJson.addEventListener("click", () => {
      flush();
      download("customrpc-profiles.json", JSON.stringify(exportData(), null, 2), "application/json");
      banner(modal, "Exported JSON");
    });

    btnExpCsv.addEventListener("click", () => {
      flush();
      download("customrpc-profiles.csv", toCsv(exportData().profiles), "text/csv");
      banner(modal, "Exported CSV");
    });

    btnCopy.addEventListener("click", async () => {
      flush();
      const ok = await copyText(JSON.stringify(exportData(), null, 2));
      banner(modal, ok ? "Copied to clipboard" : "Copy failed", !ok);
    });

    btnImpFile.addEventListener("click", () => {
      fileInput.value = "";
      fileInput.click();
    });

    fileInput.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => doImport(String(reader.result));
      reader.onerror = () => banner(modal, "Could not read file", true);
      reader.readAsText(file);
    });

    btnPaste.addEventListener("click", () => {
      row3.style.display = row3.style.display === "none" ? "" : "none";
      if (row3.style.display !== "none") area.focus();
    });

    ["keydown", "keyup", "keypress", "paste", "copy", "cut"].forEach((t) =>
      area.addEventListener(t, (e) => e.stopPropagation())
    );

    btnApply.addEventListener("click", () => doImport(area.value));
    btnCancel.addEventListener("click", () => {
      row3.style.display = "none";
      area.value = "";
    });

    row1.append(lbl, sel, btnNew, nameInput, btnDel, status);
    row2.append(btnExpJson, btnExpCsv, btnCopy, btnImpFile, btnPaste, fileInput);
    const btnWrap = document.createElement("div");
    btnWrap.className = "rpcp-row";
    btnWrap.append(btnApply, btnCancel);
    const col = document.createElement("div");
    col.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%";
    col.append(area, btnWrap);
    row3.appendChild(col);

    bar.append(row1, row2, row3);
    refresh();
    return bar;
  }

  function tryInject() {
    const root = document.querySelector(".vc-customRPC-settings-root");
    if (!root) return;
    const modal = root.closest('[data-mana-component="modal"]');
    if (!modal) return;

    addImageTools(modal);
    if (modal.querySelector(".rpcp-bar")) return;

    currentModal = modal;
    const d = load();
    if (!d.active || !d.profiles[d.active]) {
      if (!d.profiles["Default"]) d.profiles["Default"] = readFields(modal);
      d.active = d.profiles[d.active] ? d.active : Object.keys(d.profiles)[0];
      persist(d);
    }
    const bar = buildBar(modal);
    const host = modal.querySelector(".vc-plugin-modal-info");
    if (host) host.prepend(bar);
    else root.parentElement.insertBefore(bar, root);
    log("bar injected");
  }

  const observer = new MutationObserver(tryInject);
  observer.observe(document.body, { childList: true, subtree: true });
  tryInject();

  return function destroy() {
    observer.disconnect();
    clearTimeout(flushTimer);
    document.removeEventListener("input", onInput, true);
    document.removeEventListener("click", onClick, true);
    document.removeEventListener("keyup", onKey, true);
    document.removeEventListener("paste", onPaste, true);
    document.querySelectorAll(".rpcp-bar,.rpcp-banner,.rpcp-imgrow").forEach((e) => e.remove());
    style.remove();
  };
}



// making columns
function organiseMisCal1() {
  const NOTES_KEY = 'misCal1Notes:v1';
  const EXAMS_KEY = 'misCal1Exams:v1';
  const AUTO_KEY = 'misCal1AutoInfo:v1';
  const SPECIAL = 'mis-cal-1';
  const SPECIAL_SHARE = 0.45;

  const PDFJS = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js';
  const PDFJS_WORKER = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  const TESS = 'https://unpkg.com/tesseract.js@5.1.1/dist/tesseract.min.js';

  const S = (window.__misCal1State = window.__misCal1State || { popover: null, panel: null });

  const svg = (paths, extra = '') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths}</svg>`;
  const ICON_NOTE = svg('<path d="M5 3.5h10l4 4V20.5H5z"/><path d="M8.5 12h7M8.5 16h4.5"/>');
  const ICON_UPLOAD = svg('<path d="M12 15.5V4M7.5 8.5 12 4l4.5 4.5"/><path d="M4.5 15v4.5h15V15"/>');

  if (!document.getElementById('misCal1-styles')) {
    const st = document.createElement('style');
    st.id = 'misCal1-styles';
    st.textContent = `
      .misCal1-note-btn{position:absolute;top:3px;right:3px;width:20px;height:20px;display:flex;align-items:center;justify-content:center;
        border-radius:5px;cursor:pointer;z-index:5;transition:background .15s;

        display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    background-color: #7452336e !important;
    align-items: center !important;
    backdrop-filter: blur(1px) !important;

}
      .misCal1-note-btn:hover{background:#000}
      .misCal1-note-btn svg{width:12px;height:12px}
      .misCal1-note-preview{position:absolute;left:4px;right:4px;bottom:4px;max-height:75%;overflow:hidden;padding:5px 7px;
            background: #6e4210db;
    backdrop-filter: blur(4px);color:#f3f4f6;font:11px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif;border-radius:5px;
        word-break:break-word;box-shadow:0 1px 4px rgba(0,0,0,.35)}
      .misCal1-note-preview strong{    color: #f3f4f6 !important;font-weight:600}
      .misCal1-note-preview div {     color: #f3f4f6 !important; }
      .misCal1-note-preview .misCal1-manual{white-space:pre-wrap;margin-top:3px;padding-top:3px;border-top:1px solid rgba(255,255,255,.18); color: #ddd3c7ab !important;}
      .misCal1-popover,.misCal1-panel{

          background: #181818b3 !important;
    color: #eae7e7 !important;
    border: 1px solid #202020 !important;
    backdrop-filter: blur(2px) !important;

      position:fixed;z-index:99999;padding:10px;background:#fff;color:#1f2937;border:1px solid #cbd5e1;
        border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.25);font:12px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif}
      .misCal1-popover{width:240px}
      .misCal1-panel{width:270px}
      .misCal1-popover .misCal1-h,.misCal1-panel .misCal1-h{font-weight:600;font-size:13px;margin-bottom:8px}
      .misCal1-auto{
      background: #626a7573 !important;
    color: #f3f4f675 !important;

      background:#1f2937;color:#f3f4f6;border-radius:5px;padding:5px 7px;margin-bottom:6px;white-space:pre-wrap}
      .misCal1-popover textarea{
      background: #626a7573 !important;
    color: #f3f4f680 !important;
      width:100%;box-sizing:border-box;resize:vertical;font:12px system-ui,sans-serif;padding:5px;border:1px solid #cbd5e150;border-radius:5px}
      .misCal1-bar{display:flex;gap:6px;justify-content:flex-end;margin-top:8px}
      .misCal1-btn{cursor:pointer;padding:4px 10px;border:1px solid #cbd5e1;border-radius:5px;background:#f8fafc;color:#1f2937;font:12px system-ui,sans-serif}
      .misCal1-btn:hover{background:#e2e8f0}
      .misCal1-btn.primary{background:#1f2937;border-color:#1f2937;color:#fff}
      .misCal1-btn.primary:hover{background:#000}
      .misCal1-upload-btn{display:inline-flex !important;align-items:center;justify-content:center;vertical-align:middle;width:32px;height:28px;
        margin:0 5px;border-radius:5px;background:#1f2937;color:#f9fafb !important;cursor:pointer;border:1px solid #1f2937;box-sizing:border-box;
        text-decoration:none;transition:background .15s}
      .misCal1-upload-btn:hover,.misCal1-upload-btn.open{background:#000}
      .misCal1-upload-btn svg{width:16px;height:16px}
      .misCal1-drop{display:flex;align-items:center;gap:10px;padding:12px;border:1.5px dashed #94a3b8;border-radius:8px;cursor:pointer;color:#334155}
      .misCal1-drop:hover,.misCal1-drop.drag{background:#f1f5f9;border-color:#1f2937}
      .misCal1-drop svg{width:22px;height:22px;flex:none}
      .misCal1-drop small{color:#64748b}
      .misCal1-switch{display:flex;align-items:center;gap:8px;margin:10px 0 6px;cursor:pointer;user-select:none}
      .misCal1-switch input{position:absolute;opacity:0;pointer-events:none}
      .misCal1-switch .track{position:relative;width:30px;height:17px;border-radius:9px;background:#94a3b8;transition:background .15s;flex:none}
      .misCal1-switch .track::after{content:"";position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff;transition:transform .15s}
      .misCal1-switch input:checked + .track{background:#1f2937}
      .misCal1-switch input:checked + .track::after{transform:translateX(13px)}
      .misCal1-switch input:focus-visible + .track{outline:2px solid #2563eb;outline-offset:2px}
      .misCal1-status{min-height:16px;color:#475569;margin:4px 0 8px}
      .misCal1-status.err{color:#b91c1c}
    `;
    document.head.appendChild(st);
  }

  const imp = (el, props) => Object.keys(props).forEach(k => el.style.setProperty(k, props[k], 'important'));

  const readJSON = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const writeJSON = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { console.warn('[misCal1] storage failed', e); } };
  const loadNotes = () => readJSON(NOTES_KEY, {});
  const saveNote = (id, text) => {
    const notes = loadNotes();
    if (text && text.trim()) notes[id] = text; else delete notes[id];
    writeJSON(NOTES_KEY, notes);
  };
  const loadExams = () => readJSON(EXAMS_KEY, []);
  const autoOn = () => readJSON(AUTO_KEY, true) !== false;

  const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
  const toMin = s => { const m = s.match(/(\d{1,2}):(\d{2})/); return m ? +m[1] * 60 + +m[2] : 0; };
  const pad = n => String(n).padStart(2, '0');
  const niceDuration = d => {
    const m = (d || '').match(/(\d{1,2}):(\d{2})/);
    if (!m) return '';
    const h = +m[1], mi = +m[2];
    return (h ? h + 'h' : '') + (h && mi ? ' ' : '') + (mi ? mi + 'm' : '');
  };
  const TYPOS = [[/georgraphy/gi, 'Geography']];

  const dedupeHalves = str => {
    const w = str.split(' ').filter(Boolean);
    if (w.length % 2 === 0) {
      const h = w.length / 2;
      if (w.slice(0, h).join(' ').toLowerCase() === w.slice(h).join(' ').toLowerCase()) return w.slice(0, h).join(' ');
    }
    return w.join(' ');
  };

  const parseExams = raw => {
    const text = raw.replace(/\s+/g, ' ').trim().split(/Please note|Please check/i)[0];
    const re = /(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*,?\s+(\d{1,2})\s+([A-Za-z]{3})[a-z]*\s+(\d{4})\s+(\d{1,2}:\d{2})\s+(\d{1,2}:\d{2})/g;
    const hits = [...text.matchAll(re)];
    return hits.map((m, i) => {
      const rest = text.slice(m.index + m[0].length, i + 1 < hits.length ? hits[i + 1].index : undefined);
      const tail = rest.match(/(\d{1,2}:\d{2})\s+([A-Za-z0-9]+\/[A-Za-z0-9]+)\s+([A-Za-z]?\d+)/);
      let name = rest.replace(tail ? tail[0] : '', ' ')
        .replace(/In House Exam:?/gi, ' ')
        .replace(/Year\s*\d+/gi, ' ')
        .replace(/Trials\s*-?/gi, ' ')
        .replace(/\s+/g, ' ').replace(/^[\s-]+|[\s-]+$/g, '');
      name = dedupeHalves(name);
      TYPOS.forEach(([a, b]) => { name = name.replace(a, b); });
      const mon = MONTHS[m[2].toLowerCase()];
      if (!mon) return null;
      return {
        date: `${m[3]}-${pad(mon)}-${pad(+m[1])}`,
        startStr: m[4], endStr: m[5],
        start: toMin(m[4]), end: toMin(m[5]),
        subject: name || 'Exam',
        duration: tail ? tail[1] : '',
        location: tail ? tail[2] : '',
        seat: tail ? tail[3] : ''
      };
    }).filter(Boolean);
  };

  const getLib = name => {
    const scopes = [window, globalThis];
    try { if (typeof unsafeWindow !== 'undefined') scopes.push(unsafeWindow); } catch (e) {}
    for (const sc of scopes) { try { if (sc && sc[name]) return sc[name]; } catch (e) {} }
    return null;
  };

  const loadScript = src => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Could not load ' + src + ' (blocked by the page or offline?)'));
    document.head.appendChild(s);
  });

  const extractText = async file => {
    const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
    if (isPdf) {
      let pdfjs = getLib('pdfjsLib');
      if (!pdfjs) {
        await loadScript(PDFJS);
        pdfjs = getLib('pdfjsLib');
      }
      if (!pdfjs) throw new Error('pdf.js loaded but is not accessible. Add the @require lines to your userscript header.');
      if (!getLib('pdfjsWorker')) {
        try { await loadScript(PDFJS_WORKER); } catch (e) { console.warn('[misCal1] ' + e.message); }
      }
      try { pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc || PDFJS_WORKER; } catch (e) {}
      const buf = new Uint8Array(await file.arrayBuffer());
      const pdf = await pdfjs.getDocument({ data: buf, disableFontFace: true, useSystemFonts: false, isEvalSupported: false }).promise;
      let out = '';
      for (let p = 1; p <= pdf.numPages; p++) {
        const tc = await (await pdf.getPage(p)).getTextContent();
        out += tc.items.map(i => i.str).join(' ') + ' ';
      }
      if (!out.trim()) throw new Error('This PDF has no readable text (it may be a scan). Try a PNG instead.');
      return out;
    }
    if (file.type.startsWith('image/')) {
      let T = getLib('Tesseract');
      if (!T) {
        try { await loadScript(TESS); } catch (e) { throw new Error(e.message + ' Upload the PDF instead.'); }
        T = getLib('Tesseract');
      }
      if (!T) throw new Error('Tesseract is not available. Upload the PDF instead.');
      try {
        const { data } = await T.recognize(file, 'eng');
        return data.text;
      } catch (e) {
        throw new Error('PNG reading was blocked by the page (' + (e.message || e) + '). Upload the PDF instead.');
      }
    }
    throw new Error('Please choose a PDF or an image (PNG).');
  };

  const infoLines = ex => {
    const lines = [];
    if (ex.seat) lines.push(['Seat: ', ex.seat]);
    if (ex.location) lines.push(['Room: ', ex.location]);
    lines.push(['', `${ex.startStr}\u2013${ex.endStr}`]);
    if (ex.duration) lines.push(['', niceDuration(ex.duration)]);
    return lines;
  };

  const table = document.querySelector('table.mis-cal-day');
  if (!table) return false;
  const wrapper = table.parentElement;
  const eventRow = table.querySelector('tbody > tr');
  if (!eventRow) return false;

  const dayCells = [...eventRow.children].slice(1);
  const headCells = [...table.querySelectorAll('thead td')].slice(1);
  const allEvents = td => [...td.querySelectorAll('.mis-cal-event')];

  if (!dayCells.some(td => allEvents(td).some(e => e.classList.contains(SPECIAL)))) return false;

  const wrapW = wrapper.getBoundingClientRect().width;
  const tableTop = table.getBoundingClientRect().top;
  const headH = table.tHead ? table.tHead.getBoundingClientRect().height : 0;
  const timeRows = [...table.querySelectorAll('tbody > tr')].filter(r => r.querySelector('td[data-datetime]'));
  const lastRow = timeRows[timeRows.length - 1];
  const bodyBottom = lastRow ? lastRow.getBoundingClientRect().bottom - tableTop : table.getBoundingClientRect().height;

  const minutes = ev => {
    const m = (ev.querySelector('.mis-cal-event-time span')?.textContent || '').match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
    return m ? { start: +m[1] * 60 + +m[2], end: +m[3] * 60 + +m[4] } : { start: 0, end: 0 };
  };

  const makeCol = (cls, leftPct, widthPct, css) => {
    const c = document.createElement('div');
    c.className = 'misCal1-col ' + cls;
    imp(c, {
      position: 'absolute',
      top: headH + 'px',
      height: Math.max(0, bodyBottom - headH) + 'px',
      width: widthPct + '%',
      'margin-left': leftPct + '%',
      'box-sizing': 'border-box',
      'pointer-events': 'none'
    });
    if (css) c.style.cssText += css;
    return c;
  };

  const fill = (col, events) => {
    const laneEnds = [];
    events.forEach(ev => {
      let lane = laneEnds.findIndex(e => e <= ev._t.start);
      if (lane === -1) { lane = laneEnds.length; laneEnds.push(ev._t.end); }
      else laneEnds[lane] = ev._t.end;
      ev._lane = lane;
    });
    const lanes = Math.max(1, laneEnds.length);
    events.forEach(ev => {
      imp(ev, {
        position: 'absolute',
        left: '0px',
        right: 'auto',
        top: (ev._top - headH) + 'px',
        width: (100 / lanes - 3) + '%',
        'margin-left': (ev._lane * 100 / lanes + 1.5) + '%',
        'min-width': '0',
        'max-width': 'none',
        transform: 'none',
        float: 'none',
        'box-sizing': 'border-box',
        'pointer-events': 'auto'
      });
      col.appendChild(ev);
    });
  };

  const closePopover = () => { if (S.popover) { S.popover.remove(); S.popover = null; } };
  const closePanel = () => {
    if (S.panel) { S.panel.remove(); S.panel = null; }
    document.querySelectorAll('.misCal1-upload-btn.open').forEach(b => b.classList.remove('open'));
  };

  const refreshPreview = ev => {
    const id = ev.dataset.eventid;
    const manual = loadNotes()[id] || '';
    const ex = autoOn() ? ev._exam : null;

    const t = ev.querySelector('.title');
    if (t) {
      if (t.dataset.orig === undefined) t.dataset.orig = t.textContent.replace(/\u00a0/g, ' ');
      t.textContent = ex ? ex.subject : t.dataset.orig;
    }

    let prev = ev.querySelector('.misCal1-note-preview');
    if (!ex && !manual) { if (prev) prev.remove(); return; }
    if (!prev) {
      prev = document.createElement('div');
      prev.className = 'misCal1-note-preview';
      ev.appendChild(prev);
    }
    prev.textContent = '';
    if (ex) infoLines(ex).forEach(([label, val]) => {
      const row = document.createElement('div');
      if (label) { const s = document.createElement('strong'); s.textContent = label + val; row.appendChild(s); }
      else row.textContent = val;
      prev.appendChild(row);
    });
    if (manual) {
      const m = document.createElement('div');
      m.className = ex ? 'misCal1-manual' : '';
      m.style.whiteSpace = 'pre-wrap';
      m.textContent = manual;
      prev.appendChild(m);
    }
  };

  const openPopover = (ev, anchor) => {
    closePopover();
    const id = ev.dataset.eventid;
    const ex = autoOn() ? ev._exam : null;
    const pop = document.createElement('div');
    pop.className = 'misCal1-popover';

    const title = document.createElement('div');
    title.className = 'misCal1-h';
    title.textContent = 'Notes: ' + (ex ? ex.subject : (ev.querySelector('.title')?.dataset.orig || id));
    pop.appendChild(title);

    if (ex) {
      const a = document.createElement('div');
      a.className = 'misCal1-auto';
      a.textContent = infoLines(ex).map(([l, v]) => l + v).join('\n');
      pop.appendChild(a);
    }

    const ta = document.createElement('textarea');
    ta.value = loadNotes()[id] || '';
    ta.rows = 4;
    ta.placeholder = 'Add your own note\u2026';
    pop.appendChild(ta);

    const bar = document.createElement('div');
    bar.className = 'misCal1-bar';
    const mk = (label, fn, cls) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'misCal1-btn' + (cls ? ' ' + cls : '');
      b.textContent = label;
      b.addEventListener('click', e => { e.stopPropagation(); fn(); });
      return b;
    };
    bar.append(
      mk('Clear', () => { saveNote(id, ''); refreshPreview(ev); closePopover(); }),
      mk('Cancel', closePopover),
      mk('Save', () => { saveNote(id, ta.value); refreshPreview(ev); closePopover(); }, 'primary')
    );
    pop.appendChild(bar);

    pop.addEventListener('mousedown', e => e.stopPropagation());
    pop.addEventListener('click', e => e.stopPropagation());
    document.body.appendChild(pop);
    S.popover = pop;

    const r = anchor.getBoundingClientRect();
    pop.style.left = Math.max(4, Math.min(r.left, window.innerWidth - 255)) + 'px';
    pop.style.top = Math.max(4, Math.min(r.bottom + 4, window.innerHeight - pop.offsetHeight - 8)) + 'px';
    ta.focus();
  };

  const addNotesButton = ev => {
    if (!ev.querySelector('.misCal1-note-btn')) {
      const btn = document.createElement('span');
      btn.className = 'misCal1-note-btn';
      btn.title = 'Add / edit note';
      btn.setAttribute('role', 'button');
      btn.innerHTML = ICON_NOTE;
      ['click', 'mousedown', 'mouseup'].forEach(t =>
        btn.addEventListener(t, e => { e.stopPropagation(); if (t === 'click') openPopover(ev, btn); }));
      ev.appendChild(btn);
    }
    imp(ev, { overflow: 'hidden' });
    ev.querySelectorAll('.title').forEach(t => {
      t.style.setProperty('overflow-wrap', 'anywhere', 'important');
      t.style.setProperty('white-space', 'normal', 'important');
    });
    refreshPreview(ev);
  };

  const openPanel = btn => {
    closePopover();
    closePanel();
    btn.classList.add('open');
    const panel = document.createElement('div');
    panel.className = 'misCal1-panel';
    panel.innerHTML = `
      <div class="misCal1-h">Exam timetable</div>
      <label class="misCal1-drop">${ICON_UPLOAD}<span>Choose a PDF or PNG<br><small>or drop it here</small></span>
        <input type="file" accept=".pdf,application/pdf,image/*" hidden></label>
      <label class="misCal1-switch"><input type="checkbox"><span class="track"></span><span>Show exam info in notes</span></label>
      <div class="misCal1-status" role="status" aria-live="polite"></div>
      <button type="button" class="misCal1-btn misCal1-clear">Remove loaded timetable</button>`;
    const input = panel.querySelector('input[type=file]');
    const toggle = panel.querySelector('.misCal1-switch input');
    const status = panel.querySelector('.misCal1-status');
    const drop = panel.querySelector('.misCal1-drop');
    const clear = panel.querySelector('.misCal1-clear');

    const setStatus = (msg, err) => { status.textContent = msg; status.classList.toggle('err', !!err); };
    const count = () => loadExams().length;
    const idle = () => setStatus(count() ? `${count()} exam${count() === 1 ? '' : 's'} loaded.` : 'No timetable loaded yet.');
    toggle.checked = autoOn();
    idle();

    const handle = async file => {
      if (!file) return;
      setStatus(file.type.startsWith('image/') ? 'Reading image\u2026 this can take a few seconds.' : 'Reading PDF\u2026');
      try {
        const exams = parseExams(await extractText(file));
        if (!exams.length) throw new Error('No exams found. Try a clearer file or the original PDF.');
        writeJSON(EXAMS_KEY, exams);
        writeJSON(AUTO_KEY, true);
        toggle.checked = true;
        organiseMisCal1();
        setStatus(`Loaded ${exams.length} exams.`);
      } catch (err) {
        console.error('[misCal1] upload failed:', err);
        setStatus(err.message || 'Could not read that file.', true);
      }
    };

    input.addEventListener('change', () => { handle(input.files[0]); input.value = ''; });
    ['dragenter', 'dragover'].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.add('drag'); }));
    ['dragleave', 'drop'].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.remove('drag'); }));
    drop.addEventListener('drop', e => handle(e.dataTransfer.files[0]));
    toggle.addEventListener('change', () => { writeJSON(AUTO_KEY, toggle.checked); organiseMisCal1(); });
    clear.addEventListener('click', () => {
      try { localStorage.removeItem(EXAMS_KEY); } catch (e) {}
      organiseMisCal1();
      idle();
    });

    panel.addEventListener('mousedown', e => e.stopPropagation());
    document.body.appendChild(panel);
    S.panel = panel;

    const r = btn.getBoundingClientRect();
    panel.style.left = Math.max(4, Math.min(r.right - 270, window.innerWidth - 280)) + 'px';
    panel.style.top = Math.min(r.bottom + 6, window.innerHeight - panel.offsetHeight - 8) + 'px';
  };

  const seg = document.querySelector('.mis-calendar-segmeted-button-container');
  if (seg && !document.querySelector('.misCal1-upload-btn')) {
    const btn = document.createElement('a');
    btn.className = 'misCal1-upload-btn';
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', 'Upload exam timetable');
    btn.title = 'Upload exam timetable (PDF or PNG)';
    btn.innerHTML = ICON_UPLOAD;
    btn.style.float = getComputedStyle(seg).float;
    const toggle = e => {
      e.stopPropagation();
      S.panel ? closePanel() : openPanel(btn);
    };
    btn.addEventListener('click', toggle);
    btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); } });
    btn.addEventListener('mousedown', e => e.stopPropagation());
    seg.insertAdjacentElement('afterend', btn);
  }

  if (!window.__misCal1DocClick) {
    window.__misCal1DocClick = true;
    document.addEventListener('mousedown', () => { closePopover(); closePanel(); });
  }

  const exams = loadExams();
  dayCells.forEach((td, i) => {
    const events = allEvents(td);
    events.forEach(ev => {
      if (ev.dataset.misCalTop === undefined) ev.dataset.misCalTop = parseFloat(ev.style.top) || 0;
      ev._top = parseFloat(ev.dataset.misCalTop);
      ev._t = minutes(ev);
      td.appendChild(ev);
    });
    td.querySelectorAll(':scope > .misCal1-col, :scope > .misCal1-lane').forEach(c => c.remove());

    const byTime = (a, b) => a._t.start - b._t.start || a._t.end - b._t.end;
    const normal = events.filter(e => !e.classList.contains(SPECIAL)).sort(byTime);
    const special = events.filter(e => e.classList.contains(SPECIAL)).sort(byTime);

    const date = headCells[i]?.dataset.date;
    const pool = exams.filter(x => x.date === date);
    special.forEach(ev => {
      let best = null, bestD = 46;
      pool.forEach(x => {
        const d = Math.abs(x.start - ev._t.start);
        if (!x._used && d < bestD) { best = x; bestD = d; }
      });
      if (best) best._used = true;
      ev._exam = best;
    });

    const colW = (headCells[i] || td).getBoundingClientRect().width;
    const colPct = wrapW ? (colW / wrapW) * 100 : 100 / 6;

    if (!special.length) {
      const only = makeCol('misCal1-col-normal', 0, colPct);
      td.insertBefore(only, td.firstChild);
      fill(only, normal);
      return;
    }

    const specialW = colPct * SPECIAL_SHARE;
    const normalW = colPct - specialW;

    const left = makeCol('misCal1-col-normal', 0, normalW);
    const right = makeCol('misCal1-col-special', normalW, specialW,
      'background:rgba(31,41,55,.07);border-left:1px dashed rgba(31,41,55,.35);');
    td.insertBefore(right, td.firstChild);
    td.insertBefore(left, td.firstChild);

    fill(left, normal);
    fill(right, special);
    special.forEach(addNotesButton);
  });

  return true;
}











async function saveCurrentUser() {
    const STORAGE_KEY = "daCurrentUser";

    try {
        const response = await fetch(
            "/auth/current-user-settings/format/json?from=session.initialiseSession",
            {
                method: "GET",
                credentials: "same-origin",
                headers: {
                    accept: "application/json, text/plain, */*",
                    "cache-control": "no-cache",
                    pragma: "no-cache"
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Arbor returned ${response.status}`);
        }

        const result = await response.json();

        if (!result.success || !Array.isArray(result.items) || !result.items[0]) {
            throw new Error("Invalid Arbor user response");
        }

        const userData = { ...result.items[0] };

        delete userData.jwt;

        const currentData = localStorage.getItem(STORAGE_KEY);
        const newData = JSON.stringify(userData);

        if (currentData === newData) {
            return false;
        }

        localStorage.setItem(STORAGE_KEY, newData);

        window.dispatchEvent(new CustomEvent("daCurrentUserUpdated", {
            detail: userData
        }));

        return true;

    } catch (error) {
        console.error("[Arbor Ultra] Could not save current user:", error);
        return false;
    }
}



async function initialiseArborUltraUser() {
    await saveCurrentUser();
}

initialiseArborUltraUser();







const onArbor = location.hostname === 'sir-henry-floyd-grammar-school.uk.arbor.education';
const onDiscord = /(^|\.)discord\.com$/.test(location.hostname);

function runAll() {

    organiseMisCal1()
    darkFull()
    twitter()
    reportHandler()
    arborGC()
  if (onArbor) {
    gCalendar()
      widgetSys()


const existingScript = document.querySelector('script[nonce]');
if (!existingScript) {
    console.log('No script tag with nonce found on the page, cannot inject speculation rules');
} else {

    const nonce = existingScript.nonce;

    const s = document.createElement('script');
    s.type = 'speculationrules';
    s.nonce = nonce;
    s.textContent = JSON.stringify({
        prefetch: [{
            source: 'list',
            urls: ['https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/my-mis-ui/calendar/', ,'https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/student-ui/my-reports', 'https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/my-mis-ui/my-account', 'https://sir-henry-floyd-grammar-school.uk.arbor.education/?/students/home-ui/dashboard']
        }]
    });

    document.head.appendChild(s);
    console.log('');
}


  }
    maintenanceMode()
    
    sidebarSys()
    fixedReport()
    betterNav()
    settings()


    startSpeedrunSuite()

    discordUltra()
    removeWeird()
    buttonToggle()

    runAnnouncements()

    initCustomRpcProfiles()
}

function runAnnouncements() {

    if (onArbor) {

   showAnnouncement(2, 'Welcome to 2.1', 'Beta has now transitioned to Alpha!', 'vALPHA.2.0 Changelog:', '▶ Subway Surfers MULTIPLAYER! Join lobbies and play with friends, in a multitude of gamemodes and options. Customise your character and show off your ranks on the leaderboard and your custom profile!', true, 'data:image/webp;base64,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', '▶ Play Subway Suffers [HORROR]!', 'ARBOR PAGES is currently in development. Working on adding social interaction with other Arbor users! ( powered by Nova and Brungle Chats ). ', 21, false);


      if (onDiscord) {
      }
   }

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAll);
    window.addEventListener("load", () => {
    setTimeout(arborUltraYay, 1200);
    });
} else {
    runAll();
    window.addEventListener("load", () => {
    setTimeout(arborUltraYay, 1200);
    });
}




