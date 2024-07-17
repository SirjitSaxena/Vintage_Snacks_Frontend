import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

import TableProduct from "./user/TableProduct";

const Checkout = () => {
  const { cart ,userAddress} = useContext(AppContext);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Order Summary</h1>

        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                Product Details
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                Shipping Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                <TableProduct cart={cart} />
              </td>
              <td className="bg-dark text-light">
                <ul style={{fontWeight:'bold'}}>
                  <li>Name : {userAddress?.fullName} </li>
                  <li>Phone : {userAddress?.phoneNumber} </li>
                  <li>Country : {userAddress?.country}</li>
                  <li>State : {userAddress?.state}</li>
                  <li>Pincode : {userAddress?.pincode}</li>
                  <li>Near By : {userAddress?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container text-center my-5">
        <button className="btn btn-secondary btn-lg"style={{fontWeight:'bold'}}>Proceed To Pay</button>
      </div>
    </>
  );
};

export default Checkout;
