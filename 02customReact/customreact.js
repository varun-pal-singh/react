const customRender = (reactElement, container) => {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    container.appendChild(domElement);
    */

    const domEle = document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.childern;
    for(const prop in reactElement.props){
       if(prop === "children") continue;
       domEle.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domEle);
}

const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: "_blank",
    },
    childern: "click me to visit google",
}


const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);