import "../style/App.scss";
import dt from "../dtBurgers/dt.json";
import { useState } from "react";
import AllBurgers from "../Components/AllBurgers/AllBurgers";
import ActiveBurgers from "../Components/ActiveBurgers/ActiveBurgers";
import ModalBurgers from "../Components/ModalBurgers/ModalBurgers";

function App() {
  const [allBurgers, setAllBurgers] = useState(dt.allBurgers);
  const [activeBurgers, setActiveBurgers] = useState(dt.activeBurgers);
  const [showModal, setShowModal] = useState(false);
  const [indexBurgerModal, setIndexBurgerModal] = useState(0);
  const [allProductsCount, setAllProductsCount] = useState(3);
  const [allPrice, setAllPrice] = useState(1034);
  function handleOpenModal(id) {
    setShowModal(true);
    setIndexBurgerModal(id - 1);
  }

  function addActiveBurger(burger) {
    const truBurger = activeBurgers.find((item) => item.title === burger.title);
    if (truBurger) return;
    const lastid = activeBurgers[activeBurgers.length - 1].id;
    burger.id = lastid + 1;
    setActiveBurgers((prevState) => [...prevState, burger]);
  }

  function editAllProductsCount(amper) {
    setAllProductsCount(allProductsCount + amper);
  }
  function editAllPrice(amper, confCost) {
    setAllPrice(amper * confCost + allPrice);
  }
  function delCards(id) {
    const newBurgersArr = allBurgers.filter((item) => item.id != id);
    setAllBurgers(newBurgersArr);
  }

  if (!allBurgers) {
    return <h1>Error 404</h1>;
  }

  return (
    <>
      <div className="conatiner">
        {showModal && (
          <ModalBurgers
            item={allBurgers[indexBurgerModal]}
            setShowModal={setShowModal}
            addActiveBurger={addActiveBurger}
          />
        )}
        <div className="cont__activeBurgers">
          <div className="container_basket">
            <div className="container_head">
              <h1>Корзина</h1>
              <h2>{allProductsCount}</h2>
            </div>
            <div className="conteiner_main">
              <ActiveBurgers
                activeBurgers={activeBurgers}
                setActiveBurgers={setActiveBurgers}
                delCards={delCards}
                editAllProductsCount={editAllProductsCount}
                editAllPrice={editAllPrice}
              />
            </div>
            <div className="container_footer">
              <h1>Итого</h1>
              <h2>{allPrice}₽</h2>
            </div>
          </div>
        </div>
        <div className="cont__allBurgers">
          <h2 className="container_cards-title">Бургеры</h2>
          <div className="cont__allBurgers-wrap">
            <AllBurgers
              allBurgers={allBurgers}
              setAllBurgers={setAllBurgers}
              handleOpenModal={handleOpenModal}
              addActiveBurger={addActiveBurger}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
