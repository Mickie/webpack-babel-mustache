export function redirect(href) {
    window.location.href = href;
}

export function reloadContent(template, wrapper){
    wrapper.innerHTML = template;
}

