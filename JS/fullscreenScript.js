let styleLink = document.querySelector('link');

styleLink.setAttribute('href', `${localStorage.getItem('mode')}Styles.css`);

window.addEventListener('focus', () => {
    document.getElementById('output').innerHTML = localStorage.getItem('markup');

});

document.getElementById('output').innerHTML = localStorage.getItem('markup');