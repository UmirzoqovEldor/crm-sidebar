// export { vectors,analitk,buyurtma,moliya,talaba,guruh,kurs,hr} from "."
import person from "../assets/svg/Ellipse.svg";
import analitk from "../assets/svg/Frame.svg";
import vectors from "../assets/svg/Vectors.svg";
import buyurtma from "../assets/svg/Frame1.svg";
import moliya from "../assets/svg/Vector1.svg";
import talaba from "../assets/svg/Frame2.svg";
import guruh from "../assets/svg/Frame3.svg";
import kurs from "../assets/svg/Frame4.svg";
import hr from "../assets/svg/Frame5.svg";
import setting from "../assets/svg/Frame6.svg";
import exit from "../assets/svg/Frame7.svg";
import past from "../assets/svg/past-icon.png";

export {
  person,
  exit,
  setting,
  vectors,
  analitk,
  buyurtma,
  moliya,
  talaba,
  guruh,
  kurs,
  hr,
  past
};
export const data = [
  {
    id: 1,
    img: analitk,
    title: "Analitika",
    icon: vectors,
    past:past,
    list: ["Barcha Lidlar", "Brinchi dars", "Yangi Talabalar"],
  },
  {
    id: 2,
    img: buyurtma,
    title: "Buyrtma",
    icon: vectors,
    past:past,
    list:[]
  },
  {
    id: 3,
    img: moliya,
    title: "Moliya",
    icon: vectors,
    past:past,
    list:[]
  },
  {
    id: 4,
    img: talaba,
    title: "Talaba",
    icon: vectors,
    past:past,
    list: ["Barcha Talabalar", "Davomat", "Aktiv", "Ota-onalar"],
  },
  {
    id: 5,
    img: guruh,
    title: "Guruhlar",
    icon: vectors,
    past:past,
    list: ["Dars Jadvali", "Xonalar"],
  },
  {
    id: 6,
    img: kurs,
    title: "kurslar",
    icon: vectors,
    past:past,
    list: ["Barcha Kurslar", "Yunalishlar"],
  },
  { id: 7, img: hr, title: "Hr", icon: vectors,past:past, list: ["Rullar", "Xodimlar"] },
];
