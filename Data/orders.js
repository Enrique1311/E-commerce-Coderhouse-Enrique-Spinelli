import img4 from "../assets/Images/monitor-samsung.jpg";
import img5 from "../assets/Images/notebook-lenovo.jpg";

export const ORDERS = [
  {
    id: 1,
    date: 1600000654446,
    total: 268000,
    item: [
      {
        id: 4,
        category: 4,
        name: "Monitor Gamer Samsung",
        description: "F27T350FHL, Led 27, Dark Blue Gray, 60Hz, 100V/240V",
        price: 48000,
        image: img4,
      },
      {
        id: 5,
        category: 1,
        name: "Notebook Lenovo IdeaPad",
        description:
          "Intel Core i7-1165G7, 16GB de RAM, 512GB SSD, 15.6 FHD, Windows 10 Home",
        price: 210000,
        image: img5,
      },
    ],
  },
];
