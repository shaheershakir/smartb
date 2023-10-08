import "./ImageLinkForm.css";

function ImageLinkForm({ InputChange, ButtonSubmit }) {
  return (
    <div>
      <p className="f3">
        {"This magic brain will dectect faces in your pictures. give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={InputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white"
            style={{ backgroundColor: "var(--primary)" }}
            onClick={ButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
