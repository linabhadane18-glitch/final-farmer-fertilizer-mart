import mongoose from "mongoose";

const { Schema, model } = mongoose;

/* =====================================
   Product Schema
===================================== */
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: Array,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    offerPrice: {
      type: Number,
      required: true,
    },

    image: {
      type: Array,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: false,
  }
);

/* =====================================
   Model Export
===================================== */
export default model("Product", productSchema);