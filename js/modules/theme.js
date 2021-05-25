let   currentTheme = "dark";
const sunSVG       = `<svg class="header__icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>`;
const moonSVG      = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`;

const dark = {
    "--bg-color":             `#161722`,
    "--items-bg-color":       `#25273c`,
    "--primary-text-color":   `#cacde8`,
    "--secondary-text-color": `#777a92`,
    "--accent-color":         `#494C6B`,
    "--mobile-bg":  `url("../images/bg-mobile-dark.jpg")`,
    "--desktop-bg": `url("../images/bg-desktop-dark.jpg")`,
};

const light = {
    "--bg-color":             `#FAFAFA`,
    "--items-bg-color":       `#FFFFFF`,
    "--primary-text-color":   `#494C6B`,
    "--secondary-text-color": `#9495A5`,
    "--accent-color":         `#E3E4F1`,
    "--mobile-bg":  `url("../images/bg-mobile-light.jpg")`,
    "--desktop-bg": `url("../images/bg-desktop-light.jpg")`,
};

function changeThemeTo(theme) {
    for (let prop in theme){
        document.querySelector(':root').style.setProperty(prop, theme[prop]);
    }
};

export function changeTheme(button) {
    if(currentTheme === "dark") {
        changeThemeTo(light);
        button.innerHTML = moonSVG;
        currentTheme = "light";
    } else {
        changeThemeTo(dark);
        button.innerHTML = sunSVG;
        currentTheme = "dark";
    }
};
