export default changeLanguage;

function changeLanguage(isRussian, isCapsed) {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {

        let isService = button.classList.contains('service-button');
        let ruValue = button.dataset.ruValue;
        let altRuValue = button.dataset.altRuValue;

        if(isRussian) {

          if (!isService && (ruValue !== 'null' || altRuValue !== 'null')) {
            if(ruValue !== 'null') button.querySelector('.value').textContent = isCapsed ? ruValue.toUpperCase() : ruValue;
            if(altRuValue !== 'null') button.querySelector('.alt-value').textContent = altRuValue;
            if(ruValue !== 'null' && altRuValue !== 'null') {
              button.querySelector('.alt-value').textContent = altRuValue;
            } else if(ruValue !== 'null' && altRuValue === 'null') {
              button.querySelector('.alt-value').textContent = '';
            }
          }

        } else {
          button.querySelector('.value').textContent = isCapsed && !button.classList.contains('service-button') ? button.dataset.engValue.toUpperCase()
                                                                                                                : button.dataset.engValue;
          button.querySelector('.alt-value').textContent = button.dataset.altEngValue !== 'null' ? button.dataset.altEngValue : '';
        }
    })
}