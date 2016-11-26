
class Tag {
  constructor(target, attributes, children) {
    if (!target) {
      throw new Error("<TagName> cannot be null");
    }
    this.attributes = attributes || {};
    this.children = children;
    if (typeof target === 'string') {
      this.tagName = target;
    } else {
      this.domObject = new target(attributes);
      this.tagName = 'div';
    }
  }
  render() {
    if (this.domObject) {
      this.domObject.children = this.children;
      this.children = this.domObject.render();
    }
    return this;
  }
}

export default function dom(tagName, attributes, ...children) {
  return new Tag(tagName, attributes, children);
}
