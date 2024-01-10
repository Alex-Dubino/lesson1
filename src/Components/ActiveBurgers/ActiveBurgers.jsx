import "./ActiveBurgers.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ActiveBurgers({
  activeBurgers,
  delCards,
  editAllProductsCount,
  editAllPrice,
  confCost,
  id,
}) {
  const [num, setNum] = useState(1);

  function editCount(amper) {
    if (String(amper) === "-1" && num === 1) {
      delCards(id);
    }
    const result = num + amper;
    editAllProductsCount(amper);
    setNum(result);
    editAllPrice(confCost, amper);
  }
  return (
    <div>
      {activeBurgers.map((item) => (
        <div className="container_card" key={uuidv4()}>
          <div className="container_card-wrap">
            <div className="wr-content">
              <div className="wr-img">
                <img src={item.img} alt="#" />
              </div>

              <div className="info_func">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="massa">{item.massa}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
            <div className="wt_button">
              <button
                onClick={() => {
                  editCount(-1);
                }}
              >
                -
              </button>
              <span>{num}</span>
              <button
                onClick={() => {
                  editCount(+1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
