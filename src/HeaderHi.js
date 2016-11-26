import dom from './dom';
import Component from './Component';

export class HeaderHi extends Component {
  render() {
    return (
      <div>
        <pre>{this.children}</pre>
        <h3>.jsx</h3>
      </div>
    );
  }
}
