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

export const getHero = async () => {
  try {
    const response = await apiClient.get(API_PATHS.HOMEPAGE.GETHEROSECTION);
    return response.data; // { success, message, data }
  } catch (error) {
    console.error("Error fetching hero:", error);
    return {
      success: false,
      message: "Failed to fetch hero section",
      data: null,
    };
  }
};
export const getHomeAbout = async () => {
  try {
    const response = await apiClient.get(API_PATHS.HOMEPAGE.GETHOMEABOUT);
    return response.data; // { success, data }
  } catch (error) {
    console.error("Error fetching about:", error);
    return {
      success: false,
      data: null,
    };
  }
};

export const getHelp = async () => {
  try {
    const response = await apiClient.get(API_PATHS.HOMEPAGE.GETHELPSECTION);
    return response.data;
  } catch (error) {
    console.error("Error fetching help:", error);
    return { success: false, data: null };
  }
};

export const fetchSoftware = async () => {
  try {
    const res = await apiClient.get(API_PATHS.SOFTWARE.GETSOFTWARE);

    return res.data.data;
  } catch (error) {
    console.error("Error fetching active software:", error);
    toast.error("Failed to load active software images");
    throw error;
  }
};
export const getWhyChooseUs = async () => {
  try {
    const res = await apiClient.get(API_PATHS.HOMEPAGE.GETWHYCHOOSEUS);

    return res.data; // {success:true,data:{}}
  } catch (error) {
    console.error("Get WhyChooseUs Error:", error);
    return null;
  }
};

export const fetchActiveTestimonials = async () => {
  try {
    const res = await apiClient.get(API_PATHS.TESTIMONIAL.GETTESTIMONIAL);

    return res.data.data; // ✅ Only Array
  } catch (error) {
    return [];
  }
};

export const getDataSequrity = async () => {
  try {
    const res = await apiClient.get(API_PATHS.DATASEQURITY.GETDATASEQURITY);

    return res.data;
  } catch (error) {
    console.error("Get Data Security Error:", error);
    return null;
  }
};

export const GetAboutmain = async () => {
  try {
    const res = await apiClient.get(API_PATHS.ABOUTMAINPAGE.GETABOUTUSSCTION);
    return res.data || null; // Remove `.data` since your backend returns direct object
  } catch (error) {
    console.error("Get About Error:", error);
    return null;
  }
};

export const getcompanyhighlight = async () => {
  try {
    const res = await apiClient.get(API_PATHS.ABOUTMAINPAGE.GETHIGHLIGHT);

    console.log("RAW API RESPONSE:", res.data);

    // Case 1: { success: true, data: {...} }
    if (res?.data?.data) {
      return res.data.data;
    }

    // Case 2: API directly returns object
    if (res?.data && typeof res.data === "object") {
      return res.data;
    }

    return null;
  } catch (error) {
    console.error("Fetch Company Highlight Error:", error);
    return null;
  }
};

export const getActivePricingModel = async () => {
  try {
    const res = await apiClient.get(API_PATHS.PRICING.GETACTIVEPRICING);

    // API: { success: true, data: [...] }
    if (res?.data?.success && Array.isArray(res.data.data)) {
      return res.data.data;
    }

    return [];
  } catch (error) {
    console.error("Fetch Pricing Error:", error);
    return [];
  }
};
export const fetchFaq = async () => {
  try {
    const res = await apiClient.get(API_PATHS.CONTACTUS.GETCONTACTFAQ);

    // ✅ Return array safely
    return res.data?.data || [];
  } catch (error) {
    console.log("Active FAQ Fetch Error:", error);
    return [];
  }
};
export const GetContactPageInfo = async () => {
  try {
    const res = await apiClient.get(API_PATHS.CONTACTUS.GETCONTACTPAGEINFO);

    // expected response: { success: true, data: {...} }
    return res.data?.data || null;
  } catch (error) {
    console.log("Contact Page Fetch Error:", error);
    return null;
  }
};

export const getActiveServices = async () => {
  try {
    const res = await apiClient.get(API_PATHS.SERVICES.GETACTIVESERVICES);

    // ✅ Return only array
    return res.data?.data || [];
  } catch (error) {
    console.error("Get Active Services Error:", error);
    return [];
  }
};

export const getSubServiceBySlug = async (slug) => {
  try {
    const res = await apiClient.get(
      `${API_PATHS.SERVICES.GETSERVICEBYSLUG}/${slug}`,
    );

    return res.data?.data || [];
  } catch (error) {
    console.error("Get SubService By Slug Error:", error);
    return [];
  }
};
