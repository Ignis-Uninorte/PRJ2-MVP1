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
        title: "Samsung Galaxy Tab A9 5g 64gb Silver Color Mystic silver",
        shippingName: "shipping1",
        quantity: 1,
      },
      {
        id: 2,
        imgSrc: SC2,
        title: "SAMSUNG 12.4 Inch S9FE 128GB WiFi Gray Color",
        shippingName: "shipping2",
        quantity: 1,
      },
      {
        id: 3,
        imgSrc: SC3,
        title: "Lenovo M9 4gb Ram 128gb Alm Octa Core Folio Case Color Gray",
        shippingName: "shipping3",
        quantity: 1,
      },
    ],
  };
  