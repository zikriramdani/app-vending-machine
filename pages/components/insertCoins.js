import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { getListCoins } from "../../redux/action/coins/creator";

// Format Help
import { formatCurrency } from "../../constants/helpConstant"

const InsertCoins = ({ coins, onCoinChanged, onStockReductionData }) => {
  const coinsList = useSelector((state) => state.coins.coinsList)
  const dispatch = useDispatch();

  const fetchCoinsList = async () => {
    dispatch(getListCoins());
  };

  const [total, setTotal] = useState(coins);

  const onItemClick = value => {
    const newTotal = total + value;
    setTotal(newTotal);
    onCoinChanged(newTotal);
  };

  const onReset = () => {
    const newTotal = 0;
    setTotal(newTotal);
    onCoinChanged(newTotal);
    onStockReductionData();
  };

  useEffect(() => {
    fetchCoinsList();
    setTotal(coins);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h5>Input coins:</h5>
        </div>
      </div>
      <div className="row">
        {coinsList.map((item, i) => (
          <div className="col-6 mb-3" key={i}>
            <a className="btn btn-info w-100 p-3" onClick={() => onItemClick(item.coins)}>{formatCurrency(item.coins)}</a>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="btn btn-success w-100 p-3">
            Rp. {formatCurrency(total)}
          </div>
        </div>
        <div className="col-12 mb-3">
          <a className="btn btn-danger w-100 p-3" onClick={onReset}>Reset</a>
        </div>
      </div>
    </>
  )
}

export default InsertCoins;