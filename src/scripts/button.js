export default class Button {
    constructor({engValue, altEngValue, ruValue, altRuValue, isServiceButton, eventCode}) {
        this.engValue = engValue,
        this.altEngValue = altEngValue,
        this.ruValue = ruValue,
        this.altRuValue = altRuValue,
        this.isServiceButton = isServiceButton,
        this.eventCode = eventCode
    }

    createButton() {
        const button = document.createElement('div');
        const value = document.createElement('div');
        const altValue = document.createElement('div');
        button.className = `button ${this.isServiceButton ? 'service-button' : ''}`
        button.id = this.eventCode
        button.dataset.engValue = this.engValue
        button.dataset.altEngValue = this.altEngValue
        button.dataset.ruValue = this.ruValue
        button.dataset.altRuValue = this.altRuValue
        value.className = 'value';
        value.innerText = this.engValue;
        altValue.className = 'alt-value'
        altValue.innerText = this.altEngValue ? this.altEngValue : '';

        button.append(value, altValue);

        return button;
    }
}