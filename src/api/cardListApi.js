import axios from "axios";

export const host = process.env.PUBLIC_URL;

export const getCards = async () => {
  try {
    const response = await axios.get(`${host}/json/cardList.json`); // 프로젝트라면 Swagger에서 백엔드에게 경로를 받아온다. 지금은 json을 쓰자.
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
