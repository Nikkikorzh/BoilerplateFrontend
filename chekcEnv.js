import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.VITE_APP_ENVIRONMENT);
process.env.VITE_APP_ENVIRONMENT="main";
console.log(process.env.VITE_APP_ENVIRONMENT);