export const HOST = 'https://gmail-2-0.onrender.com';
// import axios from "axios";

// const HOST = axios.create({
//   baseURL: "https://gmail-2-0.onrender.com", // Change this to your backend URL
//   withCredentials: true, // Ensures cookies are sent with requests
// });

//Users
export const REGISTER = `${HOST}/api/v1/user/register`;
export const LOGIN = `${HOST}/api/v1/user/login`;
export const LOGOUT = `${HOST}/api/v1/user/logout`;

//Mails
export const SEND_MAIL = `${HOST}/api/v1/email/createEmail`;
export const GET_ALL_MAILS = `${HOST}/api/v1/email/getAllEmails`;
export const DELETE_MAIL = `${HOST}/api/v1/email/email`;