import dom from './dom';
import Component from './Component';

export class HeaderHi {
  constructor(attrs) {
    this.step = attrs.step;
  }
  render() {
    return (
      <div>
        <img
          width={this.step*20+100}
          height={this.step*20+100}
          src="./logo.png"
        />
        <div>{this.children}</div>
      </div>
    );
  }
}
