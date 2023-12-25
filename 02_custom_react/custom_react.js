function customRender(reactEl, container){
    // const domEl = document.createElement(reactEl.type)
    // domEl.innerHTML = reactEl.children;
    // domEl.setAttribute("href", reactEl.props.href)
    // domEl.setAttribute("target", reactEl.props.target)
    // container.appendChild(domEl)

    const domEl = document.createElement(reactEl.type)
    domEl.innerHTML = reactEl.children
    for (const prop in reactEl.props){
        if (prop === "children") continue
        domEl.setAttribute(prop, reactEl.props[prop])
    }
    container.appendChild(domEl)
}

const reactEl = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: 'Click me to visit google',
}


const mainContainer = document.querySelector("#root");

customRender(reactEl, mainContainer)