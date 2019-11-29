import _ from 'lodash';
import './style.css';
import button from './components/buttons/index.js'
import slide from './components/slider/index.js'

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
console.log('main index');
document.body.appendChild(component());