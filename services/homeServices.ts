import axios from "axios";
import apiClient from "@/api/apiClient";

export const fetchStocks = async () => {

    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const url = '/stocks?source=docs&exchange=NASDAQ'
    try {
      const response = await apiClient.get(url);
      return response.data.data
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };
