import axios from "axios";
import apiClient from "@/api/apiClient";

export const getStockData = async (symbol: string, interval: string, start_date:string) => {

const outputsize=13

  const url = "/time_series";
  const response = await apiClient.get(url, {
    params: {
      symbol,
      interval,
      start_date,
      outputsize

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
