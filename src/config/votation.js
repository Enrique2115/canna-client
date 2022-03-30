import axios from "axios";
import { base_path } from "../utils/constants";
import { getToken } from "./places";

export async function putLike(idPlace) {
  try {
    const url = `${base_path}/votacion/like/${idPlace}`;
    let config = {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    };

    const response = await axios.get(url, config);
    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function veriLike() {
  try {

    const url = `${base_path}/votacion/verifi`;
    let config = {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    };

    const response = await axios.get(url, config);
    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getaperturtime() {

  const url = `${base_path}/votacion/time`;
  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  return result.data;
}
