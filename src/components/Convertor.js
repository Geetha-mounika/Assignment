import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";

const Convertor = () => {
  const [initialState, setState] = useState({
    currencies: ["USD", "SGD", "PHP", "EUR", "INR"],
    base: "USD",
    amount: "",
    convertTo: "INR",
    result: "",
    date: "",
  });

  const { currencies, base, amount, convertTo, result, date } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyconvertor = async () => {
        const response = await axios.get(
          `https://api.exchangeratesapi.io/access_key=a923b85967687bf54d41c363c3bf0776/latest?base=${base}`
        );
        console.log("response==>", response);
        const date = response.data.date;
        const result = (response.data.rates[convertTo] * amount).toFixed(3);
        setState({
          ...initialState,
          result,
          date,
        });
      };
      getCurrencyconvertor();
    }
  }, [amount, base, convertTo]);

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null,
    });
  };

  return (
    <div >
      <div className="row">
        <div style={{ padding: "30px", background: "#ececec" }}>
          <Card
            title="CURRENCY CONVERTOR"
            bordered={false}
            style={{ width: 550 }}
          >
            <h5>
              {amount} {base} is equivalent to{" "}
            </h5>
            <h3>
              {amount === ""
                ? "0"
                : result === null
                ? "Calculating ..."
                : result}
              {convertTo}
            </h3>
            <p>As of {amount === "" ? "" : date === null ? "" : date}</p>
            <div className="row">
              <div >
                <form >
                  <input
                    type="number"
                    value={amount}
                    onChange={onChangeInput}
                    
                  />
                  <select
                    name="base"
                    value={base}
                    onChange={handleSelect}
                    
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </form>
                <form >
                  <input
                    disabled={true}
                    value={
                      amount === ""
                        ? "0"
                        : result === null
                        ? "Calculating..."
                        : result
                    }
                    
                  />
                  <select
                    name="convertTo"
                    value={convertTo}
                    onChange={handleSelect}
                   
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div >
                <h1 onClick={handleSwap} style={{ cursor: "pointer" }}>
                  &#8595;&#8593;
                </h1>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Convertor;