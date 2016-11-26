import flatishMap from './util/flatishMap';

function getPropVal(name, attrs) {
  function pluck(...items) {
    const out = [];
    for (const item of items) {
      if (item in attrs) {
        out.push(attrs[item]);
      }
    }
    return out.join(' ');
  }
  switch(name) {
    case 'background':
      return pluck('size', 'color', 'repeat');
  }
}

function renderTag(name, content, attributes = {}) {
  name = name.replace(/([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
  let val = typeof(content) === 'string' ? content : content.join(' ');
  if (!val) {
    val = getPropVal(name, attributes);
  }
  const out = {};
  if ('animate' in attributes) {
    out['transition'] = name + ' ' + attributes['animate'];
  }
  out[name] = val;
  return out;
}

export class StyleRenderer {
  constructor(root, mountPoint) {
    this.styleTag = document.createElement('style');
    this.root = root;
    mountPoint.appendChild(this.styleTag);
  }
  render() {
    this.styleTag.innerHTML = this.renderCSS([], this.root());
  }
  renderCSS(parents, node) {
    if (node.tagName === 'rules') {
      const newParents = [...parents, node.attributes.for];
      const res = flatishMap(node.children, (el) => this.renderCSS(newParents, el));
      const parts = [];
      let propsOut = {};
      for (const elem of res) {
        if (typeof(elem) === 'string') {
          parts.push(elem);
        } else {
          const keys = Object.keys(elem);
          for (const key of keys) {
            if (key in propsOut) {
              propsOut[key] += ', ' + elem[key];
            } else {
              propsOut[key] = elem[key];
            }
          }
        }
      }
      const propsText = Object.keys(propsOut).map((key) => key + ': ' + propsOut[key] + ';').join('\n');
      const out = newParents.join(' ') + '{' + propsText + '}';
      return [out, ...parts].join('\n');
    } else if (node.domObject) {
      this.renderCSS(parents, node.render());
    } else {
      return renderTag(node.tagName, node.children, node.attributes);
    }
  }
};
