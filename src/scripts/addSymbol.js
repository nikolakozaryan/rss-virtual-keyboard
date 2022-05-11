export {addSymbol, addAltSymbol};

function addSymbol(button) {
    const textarea = document.querySelector('textarea')
    let letter = button.querySelector('.value').textContent;
    let code = button.id;
    let curPosition = textarea.selectionStart;
    if(!button.classList.contains('service-button')) {
        if(curPosition !== textarea.value.length) {
            textarea.value = textarea.value.slice(0, curPosition) + letter + textarea.value.slice(curPosition)
            textarea.selectionStart = textarea.selectionEnd = curPosition + 1;
        } else textarea.value += letter;
    }
        let symbolToAdd;
        switch(code) {
            case 'Tab': 
                symbolToAdd = '\t';
                break;
            case 'Space':
                symbolToAdd = '\u00A0';
                break;
            case 'Enter': 
                symbolToAdd = '\n';
                break;
            case 'ArrowLeft':
                symbolToAdd = '\u2190';
                break;
            case 'ArrowRight':
                symbolToAdd = '\u2192';
                break;
            case 'ArrowUp': 
                symbolToAdd = '\u2191';
                break;
            case 'ArrowDown': 
                symbolToAdd = '\u2193';
                break;
            case 'Backspace':
                curPosition -= 2;
                symbolToAdd = '';
                backspaceChar();
                break;
            case 'Delete':
                curPosition--;
                symbolToAdd = '';
                deleteChar();
                break;
            default: symbolToAdd = '';
        }
        if(curPosition !== textarea.value.length) {
            textarea.value = textarea.value.slice(0, curPosition) + symbolToAdd + textarea.value.slice(curPosition)
            textarea.selectionStart = textarea.selectionEnd = curPosition + 1;
        } else textarea.value += symbolToAdd;
}

function addAltSymbol(button, isCapsed) {
    if(!button.classList.contains('service-button')) {
        let textarea = document.querySelector('textarea');
        let symbol = button.querySelector('.alt-value').textContent;    
        let letter = button.querySelector('.value').textContent;
        if(symbol) {
            textarea.value += symbol
        } else {
            textarea.value += isCapsed ? letter.toLowerCase() : letter.toUpperCase();
        } 
    }
}

function backspaceChar() {
    const textarea = document.querySelector('textarea');
    let curPosition = textarea.selectionStart;
    if(curPosition === textarea.value.length) {
        textarea.value = textarea.value.slice(0, curPosition - 1)
    } else {
        textarea.value = textarea.value.slice(0, curPosition - 1) + textarea.value.slice(curPosition)
    }
    textarea.selectionStart = textarea.selectionEnd = curPosition - 1
}

function deleteChar() {
    const textarea = document.querySelector('textarea')
    let curPosition = textarea.selectionStart;
    if(curPosition !== textarea.value.length) {
        textarea.value = textarea.value.slice(0, curPosition) + textarea.value.slice(curPosition + 1)
    }
    textarea.selectionStart = textarea.selectionEnd = curPosition
}