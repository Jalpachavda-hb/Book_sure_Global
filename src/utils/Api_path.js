// import axios from "axios";
// import { toast } from "react-toastify";

// export const BASE_URL = "https://booksureglobal.com/api";
export const BASE_URL = "http://localhost:8000/api";


// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const API_PATHS = {
  HOMEPAGE: {
    GETHEROSECTION: "getHero",
    GETHOMEABOUT: "getAbout",
    GETHELPSECTION: "getHelp",
    GETSOFTWARE: "getSoftwareActive",
    GETWHYCHOOSEUS: "getwhychooseus",
  },
  TESTIMONIAL: {
    GETTESTIMONIAL: "getTestimonials",
  },
  SOFTWARE: {
    GETSOFTWARE: "getSoftwareActive",
  },
  DATASEQURITY: {
    GETDATASEQURITY: "data/data-security",
  },

  ABOUTMAINPAGE: {
    GETABOUTUSSCTION: "aboutmain/about",
    GETHIGHLIGHT: "aboutmain/highlights",
    GETOURASSOCIATE: "/aboutmain/hero-associate",
  },

  PRICING: {
    ADDINUIRY: "inq/addinquiries",
    GETACTIVEPRICING: "pricing/active",
    GETTITLE: "gettitles",
  },

  CONTACTUS: {
       GETCONTACTPAGEINFO: "contact/getContactPageInfo",

    SUBMITCONTACT: "contactus/contact",
    // GETCONTACTFAQ: "/contact/getcontact-faq-section",
    GETCONTACTFAQ: "contact/contact-faqs/active",
  },

  CARRER: {
    POSTAPPLICATION: "career/addcareer-applications",
  },

  WEBSETTING: {
    GETWEBSETTING: "getwebdetail",
  },
  SERVICES : {
  GETSERVICEBYSLUG: "/sub-services/by-slug",
    GETACTIVESERVICES : "services/active",
  },

TEAM : {
  GETTEAMDATA : "team/getmembers"
}

};
