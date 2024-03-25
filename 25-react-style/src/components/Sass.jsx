import "../styles/SassComponent.scss";

export default function Sass() {
  return (
    <>
      <h4>sass 사용</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        {/* button.btn{BUTTON$}*3 */}
        <button className="btn orangered">BTN1</button>
        <button className="btn btn--opacity">BTN2</button>
        <button className="btn btn--blue">BTN3</button>
      </div>
    </>
  );
}