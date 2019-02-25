function toggleSourceCode(event) {
    const button = event.target;
    const targetLanguage = button.dataset.codeLang;
    const embedDiv = button.parentNode.parentNode.getElementsByClassName('source-code__embed')[0];
    const displayedLanguage = embedDiv.dataset.codeLang;
    let targetEmbed;
    for (let codeEmbed of embedDiv.children) {
        if (codeEmbed.dataset.srcCode === targetLanguage) {
            targetEmbed = codeEmbed;
            break;
        }
    }

    // no other code is open
    if (!displayedLanguage) {
        console.log('opening language');
        button.className += ' button--open';
        embedDiv.dataset.codeLang = targetLanguage;
        embedDiv.className += ' source-code__embed--open';
        targetEmbed.className += ' embed--open';
    // we're closing the language that's already open
    } else if (targetLanguage === displayedLanguage) {
        console.log('closing language');
        button.className = button.className.replace(' button--open', '');
        delete embedDiv.dataset.codeLang;
        embedDiv.className = embedDiv.className.replace(' source-code__embed--open', '');
        targetEmbed.className = targetEmbed.className.replace(' embed--open', '');
    // we're selecting a different language while the embed is already open
    } else {
        console.log('switching languages');
        // close the currently open button
        const openButton = button.parentNode.parentNode.getElementsByClassName('button--open')[0];
        openButton.className = openButton.className.replace(' button--open', '');

        button.className += ' button--open';

        const prevLanguage = embedDiv.dataset.codeLang;
        embedDiv.dataset.codeLang = targetLanguage;

        const prevEmbed = embedDiv.getElementsByClassName('embed--open')[0];
        prevEmbed.className = prevEmbed.className.replace(' embed--open', '');

        targetEmbed.className += ' embed--open';
    }
}

// add click event listeners to all source code buttons
const sourceLinks = document.getElementsByClassName('source-code__link');

for (let link of sourceLinks) {
    if (link.children[0].tagName === 'BUTTON') {
        link.children[0].addEventListener('click', toggleSourceCode);
    }
}
