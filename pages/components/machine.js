import React from "react";
import SlotMachine from "./slotMachine";

const Machine = ({ productsList, coins, onBuy }) => {

  return (
    <>
      <div className="row">
        {productsList &&
          productsList.map((item, i) => (
            <div className="col-6 mb-3 d-flex flex-column" key={i}>
              <SlotMachine key={item.id} id={item.id} name={item.name} price={item.price} stock={item.stock} coins={coins} onBuy={onBuy} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Machine;