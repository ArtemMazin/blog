export const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

export const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

export const REG_EXP_PASSWORD = /^(?=.*[0-9])(?=.*[A-Za-z]).{6,}$/i;

export const messages = {
  ERROR_INPUT_EMAIL: "Неверный формат почты",
  ERROR_INPUT_NAME:
    "Имя может содержать только латиницу, кириллицу, пробел или дефис",
  ERROR_INPUT_PASSWORD:
    "Пароль должен содержать минимум одну букву и одну цифру",
  ERROR_INPUT_PASSWORD_MIN_LENGTH: "Пароль должен быть не менее 6 символов",
  ERROR_FORM_REQUIRED: "Заполните это поле",
  ERROR_FORM_FIELDS: "Заполните все поля формы",
};
