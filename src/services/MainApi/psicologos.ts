import baseAPi from "./config/index";


interface PsicologoPayLoad {
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}

export function cadastroPsicologo(payload: PsicologoPayLoad) {
    return baseAPi.post("/psicologos", payload); 
}

export function listarPsicologo (token: string) {
  return baseAPi.get ("/psicologos", {
    headers: {
      Autorization: `JWT ${token}`,
    }
  });

}