import mongoose from "mongoose";

const { Schema, model } = mongoose;

/**
 * Order Schema
 */
const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required"],
      ref: "User",
      trim: true,
    },

    items: [
      {
        product: {
          type: String,
          required: [true, "Product ID is required"],
          ref: "Product",
          trim: true,
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required"],
          min: 1,
        },
      },
    ],

    amount: {
      type: Number,
      required: [true, "Order amount is required"],
      min: 0,
    },

    address: {
      type: String,
      required: [true, "Address ID is required"],
      ref: "Address",
      trim: true,
    },

    status: {
      type: String,
      default: "Order Placed",
      trim: true,
    },

    paymentType: {
      type: String,
      required: [true, "Payment type is required"],
      trim: true,
    },

    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Order", orderSchema);