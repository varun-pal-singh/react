const reactElement = {
    type: 'a',
    props: {
        href: 'https:www.google.com',
        target: '_blank',
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

function customRender(reactElement, container){
    const domEl = document.createElement(reactElement.type)
    domEl.innerHTML = reactElement.children

    // domEl.setAttribute('href', reactElement.props.href)
    // domEl.setAttribute('target', reactElement.props.target)

    for(const prop in reactElement.props){
        if (prop == 'childen')    continue
        domEl.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domEl)
}


customRender(reactElement, mainContainer)