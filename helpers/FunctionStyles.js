export function colorTypes(type) {
  switch (type) {
    case ("Acero", "Steel"):
      return "#A8A8AF";
      break;
    case ("Veneno", "Poison"):
      return "#A45C96";
      break;
    case ("Agua", "Water"):
      return "#3599FB";
      break;
    case ("Bicho", "Bug"):
      return "#899530";
      break;
    case ("Dragón", "Dragon"):
      return "#614FA9";
      break;
    case ("Eléctrico", "Electric"):
      return "#EECA78";
      break;
    case ("Fantasma", "Ghost"):
      return "#59598A";
      break;
    case ("Fuego", "Fire"):
      return "#DE5034";
      break;
    case ("Hielo", "Ice"):
      return "#A5E5F9";
      break;
    case ("Lucha", "Fighting"):
      return "#B05A47";
      break;
    case ("Normal", "Normal"):
      return "#BEB9B7";
      break;
    case ("Planta", "Grass"):
      return "#769F53";
      break;
    case ("Psíquico", "Psychic"):
      return "#FCAFCA";
      break;
    case ("Roca", "Rock"):
      return "#BBAA66";
      break;
    case ("Siniestro", "Dark"):
      return "#625756";
      break;
    case ("Tierra", "Ground"):
      return "#DBBA58";
      break;
    case ("Volador", "Flying"):
      return "#719CE5";
      break;
    case "???":
      return "#6BA08E";
      break;
    case ("Hada", "Fairy"):
      return "#FEAAFF";
      break;
    default:
      break;
  }
}


export function capitalizeFirstLetter(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
};