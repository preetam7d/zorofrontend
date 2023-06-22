import React, { useContext, useReducer, useState } from 'react';

const Cartdata = React.createContext();
const Shipingdata = React.createContext();
const Paymentdata = React.createContext();
const Countdata = React.createContext();
const Orderdata = React.createContext();

export const useCartdata = () => {
  return useContext(Cartdata);
}

export const useShipingdata = () => {
  return useContext(Shipingdata);
}

export const usePaymentdata = () => {
  return useContext(Paymentdata);
}

export const useCountdata = () => {
  return useContext(Countdata);
}

export const useOrderdata = () => {
  return useContext(Orderdata);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return action.payload;
    case 'removefromcart':
      return []
  }
};

const shipreducer = (state, action) => {
  switch (action.type) {
    case 'shipping':
      return action.payload
  }
};

export default function Context({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);
  const [shippings, shipdispatch] = useReducer(shipreducer, []);
  const [payment, setpayment] = useState('');
  const [count, setcount] = useState(1);
  const [orderdata, setorderdata] = useState();
  return (
    <Cartdata.Provider value={{ cart, dispatch }}>
      <Shipingdata.Provider value={{ shippings, shipdispatch }} >
        <Paymentdata.Provider value={{ payment, setpayment }}>
          <Countdata.Provider value={{ count, setcount }}>
            <Orderdata.Provider value={{ orderdata, setorderdata}}>
              {children}
            </Orderdata.Provider>
          </Countdata.Provider>
        </Paymentdata.Provider>
      </Shipingdata.Provider>
    </Cartdata.Provider>
  );
}
