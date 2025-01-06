type virtDomComponent = {
    tag: string,
    attrs: {
        [k: string]: string,
    },
    children: virtDomComponent[],
}

function createDOMModule(componentData: virtDomComponent) {
    const { attrs, children, tag} = componentData;
    const element = document.createElement(tag);
    for (let attribute in attrs) {
        element.setAttribute(attribute, attrs[attribute])
    }
    children.forEach(child => {
        element.appendChild(createDOMModule(child))
    })
    return element;
}

function renderComponent(root: HTMLElement, component: virtDomComponent) {
    root.appendChild(createDOMModule(component))
}