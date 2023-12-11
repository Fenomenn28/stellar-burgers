export const BASE_URL = "https://norma.nomoreparties.space/api";

export function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Ошибка ${res.status}`);
}