import "./AllBurgers.scss";
import { v4 as uuidv4 } from 'uuid';
export default function AllBurgers({ allBurgers, handleOpenModal, addActiveBurger }) {
  return (
    <div>
      {allBurgers.map((item) => (
        <div
          className="burgers__card"
          key={uuidv4()}
          onClick={() => {
            handleOpenModal(item.id);
          }} 
        >
          <div className="burgers__card-wrap">
          <div className="burgers__card-head">
              <img src={item.img} alt="#" />
            </div>
            <div className="burgers__card-body">
              <span className="price">{item.price}</span>
              <span className="title">{item.title}</span>
              <span className="massa">{item.massa}</span>
            </div>
            <div className="burgers__card-footer">
              <a href="#" onClick={() => {addActiveBurger(item)}}>Добавить</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
