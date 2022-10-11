import React from "react";

// Format Help
import { formatCurrency } from "../../constants/helpConstant"

const SlotMachine = ({ id, name, price, stock, coins, onBuy }) => {
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{name || "Name " + id}</h5>
          <p className="card-text mb-0">Rp. {formatCurrency(price || "")}</p>
          <small>stock : {stock || "0"}</small>

          {(() => {
            if (stock >= 1){
              return<>
                  {(() => {
                    if (price <= coins ){
                      return<><a onClick={() => {onBuy(price, id)}} className="btn btn-primary w-100" >Beli</a></>
                    }

                    return<><div className="btn btn-secondary w-100">Coin belum cukup</div></>
                  })()}
                </>
              }

              return<><div className="btn btn-dark w-100">Stok habis</div></>
          })()}
        </div>
      </div>
    </>
  );
};

export default SlotMachine;