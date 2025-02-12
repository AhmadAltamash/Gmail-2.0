export const HOST = 'http://localhost:8080/api/v1';

//Users
export const REGISTER = `${HOST}/user/register`;
export const LOGIN = `${HOST}/user/login`;
export const LOGOUT = `${HOST}/user/logout`;

//Mails
export const SEND_MAIL = `${HOST}/email/createEmail`;
export const GET_ALL_MAILS = `${HOST}/email/getAllEmails`;
export const DELETE_MAIL = `${HOST}/email/email`;