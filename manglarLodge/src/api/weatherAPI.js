import axios from "axios";

const API_KEY = "803b8f27deffc1c37ec0de7617932745";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city = "Chichiriviche", country = "VE") => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: `${city},${country}`,
        appid: API_KEY,
        units: "metric",
        lang: "es",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error obteniendo el clima:", error);
    return null;
  }
};
