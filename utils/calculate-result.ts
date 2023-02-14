import { crimes } from "@/data";

export const calculateResult = (score: number) => {

  if (score > 45) {
    return crimes[9];
  }
  else if (score > 40) {
    return crimes[8]
  }
  else if (score > 35) {
    return crimes[7]
  }
  else if (score > 30) {
    return crimes[6]
  }
  else if (score > 25) {
    return crimes[5]
  }
  else if (score > 20) {
    return crimes[4]
  }
  else if (score > 15) {
    return crimes[3]
  }
  else if (score > 10) {
    return crimes[2]
  }
  else if (score > 5) {
    return crimes[1]
  }
  else {
    return crimes[0]
  }
};
