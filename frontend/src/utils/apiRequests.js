import axios from "axios";

export let getRequest = async (url) => {
  try {
    let result = await axios.get(url);
    console.log(result.data);
    return result.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.message);
    } else {
      throw new Error(err.message);
    }
  }
};
