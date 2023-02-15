import { crimes } from "@/data";

export const calculateResult = (score: number) => {

  if (score > 33) {
    return crimes[9];
  }
  else if (score > 32) {
    return crimes[8]
  }
  else if (score > 31) {
    return crimes[7]
  }
  else if (score > 30) {
    return crimes[6]
  }
  else if (score > 28) {
    return crimes[5]
  }
  else if (score > 26) {
    return crimes[4]
  }
  else if (score > 25) {
    return crimes[3]
  }
  else if (score > 24) {
    return crimes[2]
  }
  else if (score > 23) {
    return crimes[1]
  }
  else {
    return crimes[0]
  }
};
