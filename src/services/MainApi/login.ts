import baseAPi from "./config/index";

interface LoginPayload {
  email: string;
  senha: string;
}

export function login(payload: LoginPayload) {
  return baseAPi.post('/login', payload);
}