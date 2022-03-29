import axios from "axios";
import { base_path } from "../utils/constants";
import { token } from "../utils/constants";

export async function putLike(idPlace) {
  try {
    const url = `${base_path}/votacion/like/${idPlace}`;
    const tok = localStorage.getItem(token);

    let config = {
      headers: {
        Authorization: `Bearer ${tok}`,
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

    const tok = localStorage.getItem(token);

    let config = {
      headers: {
        Authorization: `Bearer ${tok}`,
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
  const tok = localStorage.getItem(token);

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${tok}`,
    },
  });
  return result.data;
}
