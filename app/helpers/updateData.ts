import axios from "axios";

const updateData = async (url:string, formData:any) => {
  try {
    let options = {};
    let token = localStorage.getItem("user_token");
    if (token) {
        token = JSON.parse(token)
        options = {
            headers: {Authorization: `Bearer ${token}`}
        };
    }
    const response = await axios.put(url, formData);
    const data = response.data;
    return data;
  } catch (error) {
      console.log(error)
  }
};

export default updateData;