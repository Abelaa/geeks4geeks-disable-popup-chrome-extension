
document.body.onload = () => {
    style = document.createElement('style')
    style.innerHTML = `
        .spinner-loading-overlay { display: none !important; }
        .login-modal-div { display: none !important; }
    `
    document.body.appendChild(style)
}
