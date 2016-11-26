import dom from './src/dom';
import rand from './src/util/rand';
import {HeaderHi} from './src/HeaderHi';
import {Renderer} from './src/Renderer';
import {StyleRenderer} from './src/StyleRenderer';


let atStep = 0;

function buildDOM() {
  return (
    <div className="text">
      <HeaderHi className="headerHi">
        <div className="hidiv">Welcome to JSConf!</div>
        <div className="step">At step<span>{atStep}</span></div>
      </HeaderHi>
    </div>
  );
}

const myRenderer = new Renderer(buildDOM, document.body);

function buildStyles() {
  return (
    <rules for=".text">
      <background color="orange" />
      <userSelect>none</userSelect>
      <fontSize>{`${atStep*10+10}pt`}</fontSize>
      <rules for=".hidiv">
        <margin animate=".5s">{`${rand(10, 20)}px`} 30px {`${rand(10, 20)}px`} 20px</margin>
      </rules>
    </rules>
  );
}

const myStyler = new StyleRenderer(buildStyles, document.head);

const render = () => {
  myStyler.render();
  myRenderer.render();
  atStep++;
  if (atStep > 3) atStep = 0;
};

render();
document.body.addEventListener('click', function(e) {
  render();
})
