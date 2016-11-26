import {Component} from './Component';
import flatishMap from './util/flatishMap';

function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}


const keyMapping = {
  className: 'class',
  style: (el, arg) => {
    el.style = arg;
  },
};

export class Renderer {
  constructor(root, rootDOM) {
    this.root = root;
    this.rootDOM = rootDOM;
  }

  createElement(node, mountPoint) {
    const el = document.createElement(node.tagName);
    Object.keys(node.attributes).forEach((key) => {
      const keyAttr = keyMapping[key] || key;
      const keyVal = node.attributes[key];
      if (typeof keyAttr === 'function') {
        keyAttr(node, keyVal);
      } else {
        el.setAttribute(keyAttr, keyVal);
      }
    });
    return el;
  }

  render() {
    this.rootDOM.innerHTML = '';
    const els = this.buildDOM(this.root());
    flatishMap(els, (el) => {
      this.rootDOM.appendChild(el);
    });
  }

  displayRenderedNode(node) {
    const nel = this.createElement(node);
    flatishMap(node.children, (els) => {
      flatishMap(this.buildDOM(els), (el) => nel.appendChild(el));
    });
    return nel;
  }

  buildDOM(node) {
    console.log(node);
    if (typeof node === 'string') {
      return document.createTextNode(node);
    }
    const out = flatishMap(node, (nodePart) => {
      console.log(nodePart);
      if (typeof(nodePart) === 'string' || typeof(nodePart) === 'number') {
        const s = document.createElement('span');
        s.innerHTML = nodePart;
        return s;
      }
      return this.displayRenderedNode(nodePart.render())
    });
    return out;
  }
}
