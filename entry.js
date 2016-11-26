import dom from './src/dom';
import rand from './src/util/rand';
import {HeaderHi} from './src/HeaderHi';
import {Renderer} from './src/Renderer';
import {StyleRenderer} from './src/StyleRenderer';


let atStep = 0;

function buildDOM() {
  return (
    <div className="text">
      <HeaderHi step={atStep} className="headerHi">
        <div className="hidiv">Welcome to JSConf!</div>
        <div className="step">size: <span>{atStep}</span></div>
      </HeaderHi>
    </div>
  );
}

const myRenderer = new Renderer(buildDOM, document.body);

function ComposeStyle(props) {
  return (
    <rules for="">
      <background>white</background>
      <color>black</color>
    </rules>
  );
}

function buildStyles() {
  return (
    <rules for="body">
      <rules for="img">
        <margin>0 auto</margin>
        <display>block</display>
        <paddingTop>50px</paddingTop>
      </rules>
      <background color="#eee" />
      <fontSize>26pt</fontSize>
      <fontFamily>Helvetica</fontFamily>
      <padding animate=".2s">{`${-1*atStep*20+200}px`}</padding>
      <rules for=".text">
        <ComposeStyle />
        <textAlign>center</textAlign>
        <userSelect>none</userSelect>
        <fontSize animate="3s">{`${atStep*10+20}pt`}</fontSize>
        <rules for=".hidiv">
          <ComposeStyle />
          <left animate=".4s">{`${rand(10, 20)}px`}</left>
          <right animate=".2s">{`${rand(10, 20)}px`}</right>
          <padding>100px</padding>
          <position>relative</position>
        </rules>
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
