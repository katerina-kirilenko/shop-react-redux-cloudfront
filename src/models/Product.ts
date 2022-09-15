import * as Yup from "yup";

export const ProductSchema = Yup.object({
  productId: Yup.string().required().default(""),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  image: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
  count: Yup.number().default(0).required(),
  creationDate: Yup.string().default("").required(),
});

export const AvailableProductSchema = ProductSchema.shape({
  count: Yup.number().integer().min(0).required().defined().default(0),
});

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
