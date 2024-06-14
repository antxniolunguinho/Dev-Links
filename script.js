function toggleMode() {
    const html = document.documentElement
    // document.documentElement equivale a como se fosse
    // document.querySelector('html') porém não tem como selecionar desse jeito

    /* if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/
    html.classList.toggle('light')
    /*a classe html troca para 'light'*/

    const pfp = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        pfp.setAttribute('src', './assets/avatar-light.png')
    } else {
        pfp.setAttribute('src', './assets/avatar.png')
    }
}