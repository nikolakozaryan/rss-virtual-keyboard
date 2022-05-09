import addFavicon from './favicon.js';
import buttons from './buttons.js';
import Button from './button.js';
import caps from './caps.js';
import changeLanguage from './language.js';
import {addSymbol, addAltSymbol} from './addSymbol.js';
import addLanguageTip from './languageTip.js';

let isRussian = localStorage.getItem('isRussian') === 'true' || false;
let isCapsed = false;
let pressed = new Set();
addFavicon();

const buttonElements = buttons.map(item => new Button(item).createButton())

function createContainer(className = 'container') {
    let container = document.createElement('div');
    container.className = className;
    return container;
}

const container = createContainer(),
      textContainer = createContainer('text-container'),
      keyboardContainer = createContainer('keyboard-container');

container.append(textContainer, keyboardContainer);
document.body.prepend(container);


const textarea = document.createElement('textarea');
textarea.placeholder = 'Here will be your text';

textContainer.append(textarea);

buttonElements.forEach(item => item.addEventListener('mousedown', (e) => {
    item.classList.add('button-pressed');
    pressed.add(item.id)
    if(item.id === 'CapsLock') {
        caps(isCapsed);
        CapsLock.classList.toggle('active-caps');
        isCapsed = !isCapsed;
    }
    if (pressed.has('ShiftLeft')) addAltSymbol(item, isCapsed)
    else addSymbol(item)
}));

buttonElements.forEach(item => item.addEventListener('mouseup', (e) => {
    item.classList.remove('button-pressed');
    pressed.delete(item.id)
    textarea.focus()
}));

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const targetButton = document.querySelector(`#${e.code}`);
    const event = new Event('mousedown');
    targetButton.dispatchEvent(event);

    pressed.add(e.code);

    if(pressed.has('AltLeft') && pressed.has('ShiftLeft')) {
        isRussian = !isRussian;
        localStorage.setItem('isRussian', isRussian)
        changeLanguage(isRussian, isCapsed);
    }
})

document.addEventListener('keyup', (e) => {
    const targetButton = document.querySelector(`#${e.code}`)
    const event = new Event('mouseup');
    targetButton.dispatchEvent(event);
    pressed.delete(e.code);
})

keyboardContainer.append(...buttonElements);
addLanguageTip();
changeLanguage(isRussian, isCapsed);

document.querySelector('.language-switcher').addEventListener('click', () => {
    isRussian = !isRussian;
    localStorage.setItem('isRussian', isRussian)
    changeLanguage(isRussian, isCapsed)
})