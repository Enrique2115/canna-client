import axios from "axios";
import { base_path } from "../utils/constants";
import { token } from "../utils/constants";

export async function getTimeVotacionInit() {
  try {
    const url = `${base_path}/time`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getListPlaces() {
  try {
    const url = `${base_path}/partic`;
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

export async function getToken() {
  try {
    
    // si existe el token, que lo retorn
    if (localStorage.getItem(token)) return localStorage.getItem(token)

    // si no existe que se inserta un nuevo token
    const url = `${base_path}/tokeniser`;
    const response = await axios.get(url);
    const asd = response.data.token;
    localStorage.setItem(token, asd);
    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}
