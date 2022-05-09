export default caps;

function caps(isCapsed) {   
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        let value = button.querySelector('.value');
        let isLetter = button.id.match(/^Key/) 
                    || button.id === 'Backquote'
                    || button.id === 'BracketLeft'
                    || button.id === 'BracketRight'
                    || button.id === 'Semicolon'
                    || button.id === 'Quote'
                    || button.id === 'Comma'
                    || button.id === 'Period';

        if(isLetter) {
                isCapsed ? value.innerText = value.innerText.toLowerCase()
                         : value.innerText = value.innerText.toUpperCase()
        }
    })
}