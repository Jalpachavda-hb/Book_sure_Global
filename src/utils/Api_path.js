import axios from "axios";
import { toast } from "react-toastify";

export const BASE_URL = "http://localhost:8000/api/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const API_PATHS = {
  TESTIMONIAL: {
    GETTESTIMONIAL: "getTestimonials",
  },

  WEBSETTING: {
    GETWEBSETTING: "getwebdetail",
  },
  HOMEPAGE: {
    GETHEROSECTION: "getHero",
    GETABOUTSECTION: "getAbout",
    GETHELPSECTION: "getHelp",
    GETSOFTWARE: "getSoftwareActive",
    WHYCHOOSEUS: "getwhychooseus",
  },
  TEAM: {
    GETGALLERY: "active",
    GETTEAMMEMBER: "getmembers",
    GETTEAMMEMBERBYSLUG: "member", //SLUG
    GETTEAMSECTIONTITLE: "gettitle",
    GETTEAMCTA: "team-cta",
  },

  SERVICES: {
    GETACTIVESERVICES: "getActiveServices",
    GETBYID: "getbyid", // id
  },

  PRICING: {
    ADDINUIRY: "addinquiries",
    GETACTIVEPRICING: "active",
    GETTITLE: "gettitles",
  },

  CONTACTUS: {
    GETCONTACTPAGEINFO: "contact/getContactPageInfo",
    SUBMITCONTACT: "contactus/contact",
    GETCONTACTFAQ: "/contact/getcontact-faq-section",
    GETCONTACTFAQ: "contact-faqs/active",
  },
  DATASEQURITY: {
    GETDATASEQURITY: "/api/datasqurity",
  },
  CARRER: {
    POSTAPPLICATION: "career/addcareer-applications",
  },

  ABOUTMAINPAGE: {
    GETABOUTUSSCTION: "aboutmain/about",
    GETHIGHLIGHT: "aboutmain/highlights",
    GETOURASSOCIATE: "/aboutmain/hero-associate",
  },
};
