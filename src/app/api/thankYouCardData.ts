import { ThankYou } from "./allTypes";
import painSpecialist from "../../../public/Pain-Specialists.webp";
import physiotherapists from "../../../public/Physiotherapists.webp";
import psychologists from "../../../public/Psychologists.webp";
import nutritionists from "../../../public/Nutritionists.webp";
import painSpecialistMob from "../../../public/thankyou1.webp";
import physiotherapistsMob from "../../../public/thankyou2.webp";
import psychologistsMob from "../../../public/thankyou3.webp";
import nutritionistsMob from "../../../public/thankyou4.webp";

// thankyou card data
export const ThankYouCardData: ThankYou[] = [
    { img: painSpecialist, mobImg: painSpecialistMob, title: "Pain Specialists" },
    {
      img: physiotherapists,
      mobImg: physiotherapistsMob,
      title: "Physiotherapists",
    },
    { img: psychologists, mobImg: psychologistsMob, title: "Psychologists" },
    { img: nutritionists, mobImg: nutritionistsMob, title: "Nutritionists" },
  ];