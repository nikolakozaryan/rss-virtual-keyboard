export default function() {
    const tip = document.createElement('div');
    const switcher = document.createElement('span');
    tip.className = 'language-tip';
    tip.textContent = 'This keyboard made on Windows system. To switch the language please press LeftAlt + LeftShift or ';
    switcher.className = 'language-switcher';
    switcher.textContent = 'click here!';
    tip.append(switcher);
    document.querySelector('.container').append(tip);
}