import axios from "axios";
import apiClient from "@/api/apiClient";

export const fetchStockData = async (symbol: string, interval: string) => {
  const url = "/time_series";
  const response = await apiClient.get(url, {
    params: {
      symbol,
      interval,
    },
  });
  return response;
};

export const getQuote = async (symbol:string) => {
  const url = "/quote";
  const response = await apiClient.get(url, {
    params: {
      symbol,
    },
  });
  return response;
};

export const getPrice = async (symbol:string) => {
  const url = "/price";
  const response = await apiClient.get(url, {
    params: {
      symbol,
    },
  });
  return response;
};

export const getLogo = async (symbol:string) => {
  const url = "/logo";
  const response = await apiClient.get(url, {
    params: {
      symbol,
    },
  });
  return response;
};
