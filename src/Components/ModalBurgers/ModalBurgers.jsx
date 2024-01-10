import "./ModalBurgers.scss";
import close from "../../assets/close.svg";
export default function ModalBurgers({ item, setShowModal, addActiveBurger }) {
  return (
    <div className="modal">
      <div
        className="contentModal"
        onClick={(e) => {
          e.stopPropagation;
        }}
      >
        <div className="contentModal-head">
          <h3>{item.title}</h3>
          <img
            src={close}
            alt="#"
            className="closeModal"
            onClick={() => { 
              setShowModal(false);
            }}
          />
        </div>
        <div className="contentModal-main">
          <div className="contentModal-main-leftitem">
            <img src={item.img} alt="#" />
          </div>
          <div className="contentModal-main-rightitem">
            <p>
              Супер мясное наслаждение! Большая рубленая котлета из свежего
              говяжего мяса покорит вас своей сочностью, а хрустящие листья
              салата добавят свежести.
            </p>
            <ul>
              <li> Состав:</li>
              <li>Пшеничная булочка</li>
              <li>Котлета из говядины</li>
              <li>Красный лук</li>
              <li>Листья салата</li>
              <li>Соус горчичный</li>
              <li>520г, ккал 430</li>
            </ul>
          </div>
        </div>
        <div className="contentModal-add">
          <button onClick={() => addActiveBurger(item)}>Добавить</button>

          <div className="price">
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
