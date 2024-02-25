import { Contanier, Popup } from "./styl";

const Modal = () => {
  return (
    <div>
      <Contanier>
        <Popup>
          <div>
            <label>
              <Popup.title>Lavozim</Popup.title>
            </label>
            <Popup.Input
              type="text"
              placeholder="write name your"
            ></Popup.Input>
          </div>
          <Popup.Stav>
            <div>
              <label>
                <Popup.title>Bir stavka</Popup.title>
              </label>
              <Popup.StavIn type="text" pl></Popup.StavIn>
            </div>
            <div>
              <label>
                <Popup.title>Yarm stavka</Popup.title>
              </label>
              <Popup.StavIn
                type="text"
                placeholder="fxgbsfgbsfg"
              ></Popup.StavIn>
            </div>
          </Popup.Stav>
          <Popup.Footer>
            <Popup.Btn1>O'chrish</Popup.Btn1>
            <Popup.Btn2>Saqlash</Popup.Btn2>
          </Popup.Footer>
        </Popup>
      </Contanier>
    </div>
  );
};
export default Modal;
