import React, { useState, useEffect } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

//Context Types

interface IData {
  key: string;
  value: any;
}

interface IObj {
  [key: string]: IData;
}

export interface IContextObj {
  product: IObj;
  products: IObj[];
  checkout: any;
  isCartOpen: boolean;
  isMenuOpen: boolean;
  createCheckout: () => void;
  fetchCheckout: (checkoutId: string) => void;
  addItemToCheckout: (id: string, qty: number) => void;
  removeLineItems: (lineItem: string[]) => void;
  fetchAllProducts: () => void;
  fetchProductWithHandle: (handle: string) => void;
  closeCart: () => void;
  openCart: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

export const ShopContext = React.createContext<IContextObj>({
  product: {},
  products: [],
  checkout: {},
  isCartOpen: false,
  isMenuOpen: false,
  createCheckout: async () => {},

  fetchCheckout: async () => {},

  addItemToCheckout: async (id: string, qty: number) => {},
  removeLineItems: async (lineItemsToRemoveId: string[]) => {},
  fetchAllProducts: async () => {},

  fetchProductWithHandle: async (handle: string) => {},

  closeCart: () => {},
  openCart: () => {},

  closeMenu: () => {},

  openMenu: () => {},
});

const ShopProvider: React.FC = (props) => {
  const [product, setProduct] = useState<IObj>({});
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState<any>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    setCheckout(checkout);
  };

  const fetchCheckout = async (checkoutId: string) => {
    const checkout = await client.checkout.fetch(checkoutId);
    setCheckout(checkout);
  };

  const addItemToCheckout = async (id: string, quantity: any) => {
    const lineItemsToAdd = [
      {
        variantId: id,
        quantity: parseInt(quantity, 10),
      },
    ];
    // console.log(lineItemsToAdd);
    const checkoutFetched = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    setCheckout(checkoutFetched);
    openCart();
  };

  const removeLineItems = async (lineItemsToRemoveId: string[]) => {
    const removedCheckout = await client.checkout.removeLineItems(
      checkout.id,
      lineItemsToRemoveId
    );
    setCheckout(removedCheckout);
  };

  const fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    setProducts(products);
  };

  const fetchProductWithHandle = async (handle: string) => {
    const product = await client.product.fetchByHandle(handle);
    setProduct(product);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  const system: IContextObj = {
    product: product,
    products: products,
    checkout: checkout,
    isCartOpen: isCartOpen,
    isMenuOpen: isMenuOpen,
    createCheckout: createCheckout,
    fetchCheckout: fetchCheckout,
    addItemToCheckout: addItemToCheckout,
    removeLineItems: removeLineItems,
    fetchAllProducts: fetchAllProducts,

    fetchProductWithHandle: fetchProductWithHandle,

    closeCart: closeCart,
    openCart: openCart,

    closeMenu: closeMenu,

    openMenu: openMenu,
  };

  // console.log("context initialized");

  return (
    <ShopContext.Provider value={system}>{props.children}</ShopContext.Provider>
  );
};

export default ShopProvider;
