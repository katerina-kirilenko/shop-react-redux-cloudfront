import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Short Product Description1",
    productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 24,
    title: "ProductOne",
    image: "",
    count: 1,
    creationDate: 0,
  },
  {
    description: "Short Product Description7",
    productId: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductTitle",
    image: "",
    count: 1,
    creationDate: 0,
  },
  {
    description: "Short Product Description2",
    productId: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Product",
    image: "",
    count: 1,
    creationDate: 0,
  },
  {
    description: "Short Product Description4",
    productId: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "ProductTest",
    image: "",
    count: 1,
    creationDate: 0,
  },
  {
    description: "Short Product Descriptio1",
    productId: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    title: "Product2",
    image: "",
    count: 1,
    creationDate: 0,
  },
  {
    description: "Short Product Description7",
    productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductName",
    image: "",
    count: 1,
    creationDate: 0,
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product) => ({ ...product })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
      image: "",
      count: 1,
      creationDate: 0,
    },
  },
  {
    product: {
      description: "Short Product Description7",
      productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
      image: "",
      count: 1,
      creationDate: 0,
    },
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
