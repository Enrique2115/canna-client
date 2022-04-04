import axios from "axios";
import { base_path } from "../utils/constants";
import { getToken } from "./places";

export async function getcategori(id) {
  try {

    const url = `${base_path}/categ/r/${id}`;
    let config = {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    };

    console.log(await getToken())
    const response = await axios.get(url, config);
    return response.data;
  
} catch (error) {
    console.log(error);
    return null;
  }
}

export async function getListcategori() {
  try {
    const url = `${base_path}/categ`;
    let config = {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    };

    console.log(await getToken())
    const response = await axios.get(url, config);
    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}
