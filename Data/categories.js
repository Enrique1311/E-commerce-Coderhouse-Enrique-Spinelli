import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../Styles/colors";

export const CATEGORIES = [
  {
    id: 1,
    category: "Notebooks",
    image: <Entypo name="laptop" size={70} color={colors.blue} />,
  },
  {
    id: 2,
    category: "Tablets",
    image: <Entypo name="tablet" size={60} color={colors.blue} />,
  },
  {
    id: 3,
    category: "Celulares",
    image: <FontAwesome name="mobile" size={70} color={colors.blue} />,
  },
  {
    id: 4,
    category: "Monitores",
    image: <Feather name="monitor" size={70} color={colors.blue} />,
  },
];
