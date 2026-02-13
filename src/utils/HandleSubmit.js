
import { toast } from "react-toastify";
import { API_PATHS } from "./Api_path";
import axios from "axios";
import { BASE_URL } from "./Api_path";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postcareer = async (form) => {
  try {
    const formData = new FormData();

    formData.append("full_name", form.fullName);
    formData.append("position", form.position);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("resume", form.resume);

    const res = await apiClient.post(
      API_PATHS.CARRER.POSTAPPLICATION,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data;
  } catch (error) {
    return {
      success: false,
      message:
        error?.response?.data?.message || "Application submission failed",
    };
  }
};


export const addQuote = async (data) => {
  try {
    const res = await apiClient.post(
      API_PATHS.PRICING.ADDINUIRY,
      data // ✅ JSON
    );

    return res.data;
  } catch (error) {
    return {
      success: false,
      message:
        error?.response?.data?.message || "Failed to submit inquiry",
    };
  }
};