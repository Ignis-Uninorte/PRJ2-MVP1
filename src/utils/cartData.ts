// src/data/cartData.ts

import SC1 from "../assets/SC-1.png"
import SC2 from "../assets/SC-2.png"
import SC3 from "../assets/SC-3.png"


export const cart = {
    subtotal: 4139.00,
    shippingCost: 15.00,
    discounts: 0.00,
    vat: 30.00,
    total: 4174.00,
    products: [
      {
        id: 1,
        imgSrc: SC1,
        title: "SAMSUNG Galaxy Tab A9+ Plus",
        shippingName: "shipping1",
        quantity: 1,
      },
      {
        id: 2,
        imgSrc: SC2,
        title: "Samsung Galaxy Tab S9 FE+ Plus",
        shippingName: "shipping2",
        quantity: 1,
      },
      {
        id: 3,
        imgSrc: SC3,
        title: "Lenovo Tab M9",
        shippingName: "shipping3",
        quantity: 1,
      },
    ],
  };
  