/* @jsx createElement */
function createElement(tagName, props, ...children) {

    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase] = value;
    });

    children.forEach((child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });

    return element;

}

const element = (
    <div>
      init
    </div>
)

document.getElementById('app').textContent('');
document.getElementById('app').appendChild(element);