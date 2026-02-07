import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import hero from "./hero.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";
import fertilizer_category_icon from "./fertilizer_category_icon.png";
import organic_category_icon from "./organic_category_icon.png";
import seed_cat_icon from "./seed_cat_icon.png";
import tool_cat_icon from "./tool_cat_icon.png";
import pesticides_cat_icon from "./pesticides_cat_icon.png";
import fertilizer1 from "./fertilizer1.png";
import fertilizer2 from "./fertilizer2.png";
import fertilizer3 from "./fertilizer3.png";
import fertilizer4 from "./fertilizer4.png";
import fertilizer5 from "./fertilizer5.png";
import fertilizer6 from "./fertilizer6.png";
import fertilizer7 from "./fertilizer7.png";
import fertilizer8 from "./fertilizer8.png";
import pesti1 from "./pesti1.png";
import pesti2 from "./pesti2.png";
import pesti3 from "./pesti3.png";
import pesti4 from "./pesti4.png";
import pesti5 from "./pesti5.png";
import pesti6 from "./pesti6.png";

import seed_image2 from "./seed_image2.png";
import seed_image3 from "./seed_image3.png";
import seed_image4 from "./seed_image4.png";


import tool1 from "./tool1.png";
import tool2 from "./tool2.png";
import tool3 from "./tool3.png";
import tool4 from "./tool4.png";
import tool5 from "./tool5.png";
import tool6 from "./tool6.png";
import rupees from "./rupees.png";
import BestSeller from "../components/BestSeller";
import brand_logo from "./brand_logo.png";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
  rupees,
  brand_logo,
  hero,
  fertilizer_category_icon,
  organic_category_icon,
  seed_cat_icon,
  tool_cat_icon,
  pesticides_cat_icon,
  fertilizer1,
  fertilizer2,
  fertilizer3,
  fertilizer4,
  fertilizer5,
  fertilizer6,
  fertilizer7,
  fertilizer8,
  pesti1,
  pesti2,
  pesti3,
  pesti4,
  pesti5,
  pesti6,
 
  seed_image2,
  seed_image3,
  seed_image4,


  tool2,
  tool4,
  tool3,
  tool1,
  tool5,
  tool6,
};

export const categories = [
  {
    text: "Fertilizer",
    path: "Vegetables fertilizer",
    image: fertilizer_category_icon,
    bgColor: "#FEF6DA",
  },
  {
    text: "Organic Fertilizer",
    path: "Organic Fertilizer",
    image: organic_category_icon,
    bgColor: "#FEE0E0",
  },
  {
    text: "Seeds",
    path: "Seeds",
    image: seed_cat_icon,
    bgColor: "#F0F5DE",
  },
  {
    text: "Tools",
    path: "tool",
    image: tool_cat_icon,
    bgColor: "#E1F5EC",
  },
  {
    text: "Pesticides",
    path: "Pesticides",
    image: pesticides_cat_icon,
    bgColor: "#FEE6CD",
  },
  
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  // Vegetables
  {
    _id: "gd46g23h",
    name: "Padma Fertilizer",
    category: "fertilizer",
    price: 2500,
    offerPrice: 2000,
    image: [fertilizer1],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Mega Fertilizer",
    category: "fertilizer",
    price: 4000,
    offerPrice: 3500,
    image: [fertilizer2],
    description: [
      
       "Rich in Vitamin C",
      
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Nitrogen Fertilizer",
    category: "fertilizer",
    price: 3000,
    offerPrice: 2800,
    image: [fertilizer3],
    description: [
    "rich set of nutrients",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Potassium 50kg",
    category: "fertilizer",
    price: 1800,
    offerPrice: 1500,
    image: [fertilizer4],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "Janhvi 500g",
    category: "fertilizer",
    price: 2200,
    offerPrice: 1900,
    image: [fertilizer5],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // pesticides
  {
    _id: "ek51j12k",
    name: "lina 1 kg",
    category: "fertilizer",
    price: 120,
    offerPrice: 110,
    image: [fertilizer6],
    description: [
      "Crisp and juicy",
      
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek52j23k",
    name: " anti-INsect 1 kg",
    category: "Pesticides",
    price: 80,
    offerPrice: 75,
    image: [pesti1],
    description: [
      "Juicy and sweet",
      "Rich in Vitamin C",
      "Perfect for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek53j34k",
    name: "Banana 1 kg",
    category: "Pesticides",
    price: 50,
    offerPrice: 45,
    image: [pesti2],
    description: [
      "Sweet and ripe",
      "High in potassium",
      "Great for smoothies and snacking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek54j45k",
    name: "Mango 1 kg",
    category: "Pesticides",

    price: 150,
    offerPrice: 140,
    image: [pesti3],
    description: [
      "Sweet and flavorful",
      "Perfect for smoothies and desserts",
      "Rich in Vitamin A",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek55j56k",
    name: "Grapes 500g",
    category: "Pesticides",
    price: 70,
    offerPrice: 65,
    image: [pesti4],
    description: [
      "Fresh and juicy",
      "Rich in antioxidants",
      "Perfect for snacking and fruit salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // tool
  {
    _id: "ek56j67k",
    name: "Amul Milk 1L",
    category: "tool",
    price: 60,
    offerPrice: 55,
    image: [tool1],
    description: [
      "Pure and fresh",
      "Rich in calcium",
      "Ideal for tea, coffee, and desserts",
      "Trusted brand quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek57j78k",
    name: "Paneer 200g",
    category: "tool",
    price: 90,
    offerPrice: 85,
    image: [tool2],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek58j89k",
    name: "Eggs 12 pcs",
    category: "tool",
    price: 90,
    offerPrice: 85,
    image: [tool3],
    description: [
      "Farm fresh",
      "Rich in protein",
      "Ideal for breakfast and baking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek59j90k",
    name: "Paneer 200g",
    category: "tool",
    price: 90,
    offerPrice: 85,
    image: [tool4],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek60j01k",
    name: "Cheese 200g",
    category: "tool",
    price: 140,
    offerPrice: 130,
    image: [tool5],
    description: [
      "Creamy and delicious",
      "Perfect for pizzas and sandwiches",
      "Rich in calcium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // seeds
  {
    _id: "ek61j12k",
    name: "Coca-Cola 1.5L",
    category: "Seeds",
    price: 80,
    offerPrice: 75,
    image: [seed_image2],
    description: [
      "Refreshing and fizzy",
      "Perfect for parties and gatherings",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek62j23k",
    name: "Pepsi 1.5L",
    category: "Seeds",
    price: 78,
    offerPrice: 73,
    image: [seed_image3],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek63j34k",
    name: "Sprite 1.5L",
    category: "Seeds",
    price: 79,
    offerPrice: 74,
    image: [seed_image4],
    description: [
      "Refreshing citrus taste",
      "Perfect for hot days",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  

];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
