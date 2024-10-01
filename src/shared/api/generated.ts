/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Blog API
 * OpenAPI spec version: 1.0.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
export type RaceArticleControllerSearchRaceArticlesParams = {
  query: string;
};

export type RaceArticleControllerDeleteRaceArticle200 = {
  success?: boolean;
};

export type CharacterArticleControllerSearchCharacterArticlesParams = {
  query: string;
};

export type CharacterArticleControllerDeleteCharacterArticle200 = {
  success?: boolean;
};

export type AuthControllerResetPassword200 = {
  success?: boolean;
};

export type AuthControllerLogoutUser200 = {
  success?: boolean;
};

/**
 * Является ли статья премиум-контентом
 */
export type UpdateRaceArticleDtoIsPremium =
  (typeof UpdateRaceArticleDtoIsPremium)[keyof typeof UpdateRaceArticleDtoIsPremium];

export const UpdateRaceArticleDtoIsPremium = {
  true: "true",
  false: "false",
} as const;

export interface UpdateRaceArticleDto {
  /** Класс расы */
  class: string;
  /** Содержание статьи */
  content: string;
  /** Отличительные признаки (разделенные запятыми) */
  distinctiveFeatures: string;
  /** Планета происхождения */
  homeWorld: string;
  /** Изображение статьи */
  image: Blob;
  /** Является ли статья премиум-контентом */
  isPremium: UpdateRaceArticleDtoIsPremium;
  /** Известные представители (ID персонажей, разделенные запятыми) */
  knownRepresentatives?: string;
  /** Язык */
  language: string;
  /** Название расы */
  raceName: string;
  /** Цвет кожи */
  skinColor: string;
  /** Заголовок статьи */
  title: string;
  /** Тип расы */
  type: string;
}

/**
 * Является ли статья премиум-контентом
 */
export type CreateRaceArticleDtoIsPremium =
  (typeof CreateRaceArticleDtoIsPremium)[keyof typeof CreateRaceArticleDtoIsPremium];

export const CreateRaceArticleDtoIsPremium = {
  true: "true",
  false: "false",
} as const;

export interface CreateRaceArticleDto {
  /** Класс расы */
  class: string;
  /** Содержание статьи */
  content: string;
  /** Отличительные признаки (разделенные запятыми) */
  distinctiveFeatures: string;
  /** Планета происхождения */
  homeWorld: string;
  /** Изображение статьи */
  image: Blob;
  /** Является ли статья премиум-контентом */
  isPremium: CreateRaceArticleDtoIsPremium;
  /** Известные представители (ID персонажей, разделенные запятыми) */
  knownRepresentatives?: string;
  /** Язык */
  language: string;
  /** Название расы */
  raceName: string;
  /** Цвет кожи */
  skinColor: string;
  /** Заголовок статьи */
  title: string;
  /** Тип расы */
  type: string;
}

export interface KnownRepresentativeResponseDto {
  /** ID персонажа */
  _id: string;
  /** Имя персонажа */
  name: string;
}

export interface ResponseRaceArticleDto {
  _id: string;
  author: ResponseUserDto;
  /** Класс расы */
  class: string;
  content: string;
  createdAt: string;
  /** Отличительные признаки */
  distinctiveFeatures: string[];
  /** Планета происхождения */
  homeWorld: string;
  image: string;
  isPremium: boolean;
  /** Известные представители */
  knownRepresentatives: KnownRepresentativeResponseDto[];
  /** Язык */
  language: string;
  likesCount: number;
  /** Название расы */
  raceName: string;
  readingTime: number;
  /** Цвет кожи */
  skinColor: string;
  title: string;
  /** Тип расы */
  type: string;
  updatedAt: string;
}

/**
 * Является ли статья премиум-контентом
 */
export type UpdateCharacterArticleDtoIsPremium =
  (typeof UpdateCharacterArticleDtoIsPremium)[keyof typeof UpdateCharacterArticleDtoIsPremium];

export const UpdateCharacterArticleDtoIsPremium = {
  true: "true",
  false: "false",
} as const;

/**
 * Пол персонажа
 */
export type UpdateCharacterArticleDtoGender =
  (typeof UpdateCharacterArticleDtoGender)[keyof typeof UpdateCharacterArticleDtoGender];

export const UpdateCharacterArticleDtoGender = {
  Мужской: "Мужской",
  Женский: "Женский",
  Другое: "Другое",
} as const;

export interface UpdateCharacterArticleDto {
  /** Дата рождения */
  birthDate?: string;
  /** Имя персонажа */
  characterName: string;
  /** Содержание статьи */
  content: string;
  /** Дата смерти */
  deathDate?: string;
  /** Пол персонажа */
  gender: UpdateCharacterArticleDtoGender;
  /** Рост персонажа */
  height?: string;
  /** Родной мир персонажа */
  homeWorld: string;
  /** Изображение статьи */
  image: Blob;
  /** Является ли статья премиум-контентом */
  isPremium: UpdateCharacterArticleDtoIsPremium;
  /** ID расы персонажа */
  race?: string;
  /** Заголовок статьи */
  title: string;
}

/**
 * Является ли статья премиум-контентом
 */
export type CreateCharacterArticleDtoIsPremium =
  (typeof CreateCharacterArticleDtoIsPremium)[keyof typeof CreateCharacterArticleDtoIsPremium];

export const CreateCharacterArticleDtoIsPremium = {
  true: "true",
  false: "false",
} as const;

/**
 * Пол персонажа
 */
export type CreateCharacterArticleDtoGender =
  (typeof CreateCharacterArticleDtoGender)[keyof typeof CreateCharacterArticleDtoGender];

export const CreateCharacterArticleDtoGender = {
  Мужской: "Мужской",
  Женский: "Женский",
  Другое: "Другое",
} as const;

export interface CreateCharacterArticleDto {
  /** Дата рождения */
  birthDate?: string;
  /** Имя персонажа */
  characterName: string;
  /** Содержание статьи */
  content: string;
  /** Дата смерти */
  deathDate?: string;
  /** Пол персонажа */
  gender: CreateCharacterArticleDtoGender;
  /** Рост персонажа */
  height?: string;
  /** Родной мир персонажа */
  homeWorld: string;
  /** Изображение статьи */
  image: Blob;
  /** Является ли статья премиум-контентом */
  isPremium: CreateCharacterArticleDtoIsPremium;
  /** ID расы персонажа */
  race?: string;
  /** Заголовок статьи */
  title: string;
}

export interface GetPaymentDto {
  /** ID платежа */
  id: string;
}

export interface RecipientDto {
  account_id: string;
  gateway_id: string;
}

export interface MetadataDto {
  order_id: string;
}

export interface ConfirmationDto {
  confirmation_url: string;
  type: string;
}

export interface AmountDto {
  currency: string;
  value: string;
}

export interface ResponsePaymentDto {
  amount: AmountDto;
  confirmation: ConfirmationDto;
  created_at: string;
  description: string;
  id: string;
  metadata: MetadataDto;
  paid: boolean;
  recipient: RecipientDto;
  refundable: boolean;
  status: string;
  test: boolean;
}

export interface CreatePaymentDto {
  /** Сумма платежа */
  amount: number;
}

export interface RaceInfo {
  /** ID расы */
  _id: string;
  /** Название расы */
  raceName: string;
}

export interface ResponseCharacterArticleDto {
  _id: string;
  author: ResponseUserDto;
  /** Дата рождения персонажа */
  birthDate?: string;
  /** Имя персонажа */
  characterName: string;
  content: string;
  createdAt: string;
  /** Дата смерти персонажа */
  deathDate?: string;
  /** Пол персонажа */
  gender: string;
  /** Рост персонажа */
  height?: string;
  /** Родной мир персонажа */
  homeWorld: string;
  image: string;
  isPremium: boolean;
  likesCount: number;
  /** Информация о расе персонажа */
  race?: RaceInfo;
  readingTime: number;
  title: string;
  updatedAt: string;
}

export interface ResponseRollCharacterDto {
  /** id полученного персонаж */
  character: string;
  /** Флаг, указывающий, является ли персонаж новым в коллекции */
  isNew: boolean;
  /** Оставшееся количество бросков на сегодня */
  remainingRolls: number;
}

export interface ResponseUserCollectionDto {
  /** ID коллекции пользователя */
  _id: string;
  /** Список id персонажей в коллекции */
  characters: string[];
  createdAt: string;
  /** Дата последнего броска */
  lastRollDate: string;
  /** Количество бросков сегодня */
  rollsToday: number;
  updatedAt: string;
  /** ID пользователя */
  user: string;
}

export interface UpdatePasswordDto {
  /** Новый пароль */
  newPassword: string;
  /** Токен сброса пароля */
  resetToken: string;
}

export interface ResetPasswordDto {
  /** Email пользователя */
  email: string;
}

export interface LoginDto {
  /** Email пользователя */
  email: string;
  /** Пароль пользователя */
  password: string;
}

export interface RegisterDto {
  /** Email пользователя */
  email: string;
  /** Имя пользователя */
  name: string;
  /** Пароль пользователя */
  password: string;
}

export interface UpdateProfileDto {
  /** Информация о пользователе */
  about?: string;
  /** Изображение профиля */
  avatar?: Blob;
  /** Имя пользователя */
  name: string;
}

/**
 * Действие с избранной статьей
 */
export type ToggleFavoriteArticleDtoAction =
  (typeof ToggleFavoriteArticleDtoAction)[keyof typeof ToggleFavoriteArticleDtoAction];

export const ToggleFavoriteArticleDtoAction = {
  add: "add",
  remove: "remove",
} as const;

export interface ToggleFavoriteArticleDto {
  /** Действие с избранной статьей */
  action: ToggleFavoriteArticleDtoAction;
  /** ID статьи для добавления/удаления в избранное */
  articleId: string;
}

export interface ResponseUserDto {
  /** ID пользователя */
  _id: string;
  /** Информация о пользователе */
  about?: string;
  /** Аватар пользователя */
  avatar?: string;
  createdAt: string;
  /** Email пользователя */
  email: string;
  /** Список ID избранных статей */
  favorite_articles: string[];
  /** Статус премиум-подписки */
  isPremium: boolean;
  /** Имя пользователя */
  name: string;
  updatedAt: string;
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

/**
 * @summary Получить всех пользователей
 */
export const usersControllerGetAllUsers = <
  TData = AxiosResponse<ResponseUserDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/users`, options);
};

/**
 * @summary Получить профиль текущего пользователя
 */
export const usersControllerGetProfile = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/users/profile`, options);
};

/**
 * @summary Получить пользователя по ID
 */
export const usersControllerGetUserById = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/users/${id}`, options);
};

/**
 * @summary Добавить/удалить статью в/из избранного
 */
export const usersControllerToggleFavoriteArticle = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  toggleFavoriteArticleDto: ToggleFavoriteArticleDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.patch(
    `/users/favorite-article`,
    toggleFavoriteArticleDto,
    options,
  );
};

/**
 * @summary Обновить профиль пользователя
 */
export const usersControllerUpdateProfile = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  updateProfileDto: UpdateProfileDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  const formData = new FormData();
  formData.append("name", updateProfileDto.name);
  if (updateProfileDto.about !== undefined) {
    formData.append("about", updateProfileDto.about);
  }
  if (updateProfileDto.avatar !== undefined) {
    formData.append("avatar", updateProfileDto.avatar);
  }

  return instance.patch(`/users/update-profile`, formData, options);
};

/**
 * @summary Регистрация нового пользователя
 */
export const authControllerRegisterUser = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  registerDto: RegisterDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/sign-up`, registerDto, options);
};

/**
 * @summary Авторизация пользователя
 */
export const authControllerAuthenticateUser = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  loginDto: LoginDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/sign-in`, loginDto, options);
};

/**
 * @summary Выход пользователя
 */
export const authControllerLogoutUser = <
  TData = AxiosResponse<AuthControllerLogoutUser200>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/logout`, undefined, options);
};

/**
 * @summary Запрос на сброс пароля
 */
export const authControllerResetPassword = <
  TData = AxiosResponse<AuthControllerResetPassword200>,
>(
  resetPasswordDto: ResetPasswordDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/reset-password`, resetPasswordDto, options);
};

/**
 * @summary Подтверждение сброса пароля
 */
export const authControllerResetPasswordConfirm = <
  TData = AxiosResponse<ResponseUserDto>,
>(
  updatePasswordDto: UpdatePasswordDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(
    `/auth/reset-password-confirm`,
    updatePasswordDto,
    options,
  );
};

/**
 * @summary Получить коллекцию текущего пользователя
 */
export const userCollectionControllerGetUserCollection = <
  TData = AxiosResponse<ResponseUserCollectionDto>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/user-collection`, options);
};

/**
 * @summary Получить случайного персонажа
 */
export const userCollectionControllerRollCharacter = <
  TData = AxiosResponse<ResponseRollCharacterDto>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/user-collection/roll`, undefined, options);
};

export const userCollectionControllerResetDailyRolls = <
  TData = AxiosResponse<void>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(
    `/user-collection/reset-daily-rolls`,
    undefined,
    options,
  );
};

/**
 * @summary Создать платеж
 */
export const paymentControllerCreatePayment = <
  TData = AxiosResponse<ResponsePaymentDto>,
>(
  createPaymentDto: CreatePaymentDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/payment`, createPaymentDto, options);
};

/**
 * @summary Получить информацию о платеже
 */
export const paymentControllerGetPayment = <
  TData = AxiosResponse<ResponsePaymentDto>,
>(
  getPaymentDto: GetPaymentDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/payment/get-payment`, getPaymentDto, options);
};

/**
 * @summary Получить все статьи о персонажах
 */
export const characterArticleControllerGetAllCharacterArticles = <
  TData = AxiosResponse<ResponseCharacterArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/character-articles/all`, options);
};

/**
 * @summary Получить все мои статьи о персонажах
 */
export const characterArticleControllerGetMyAllCharacterArticles = <
  TData = AxiosResponse<ResponseCharacterArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/character-articles/my-all`, options);
};

/**
 * @summary Получить одну статью о персонаже
 */
export const characterArticleControllerGetOneCharacterArticle = <
  TData = AxiosResponse<ResponseCharacterArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/character-articles/find/${id}`, options);
};

/**
 * @summary Получить статьи о персонажах по расе
 */
export const characterArticleControllerGetArticlesByRace = <
  TData = AxiosResponse<ResponseCharacterArticleDto[]>,
>(
  raceId: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/character-articles/by-race/${raceId}`, options);
};

/**
 * @summary Создать новую статью о персонаже
 */
export const characterArticleControllerCreateCharacterArticle = <
  TData = AxiosResponse<void>,
>(
  createCharacterArticleDto: CreateCharacterArticleDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  const formData = new FormData();
  formData.append("title", createCharacterArticleDto.title);
  formData.append("content", createCharacterArticleDto.content);
  formData.append("isPremium", createCharacterArticleDto.isPremium);
  formData.append("image", createCharacterArticleDto.image);
  formData.append("characterName", createCharacterArticleDto.characterName);
  if (createCharacterArticleDto.birthDate !== undefined) {
    formData.append("birthDate", createCharacterArticleDto.birthDate);
  }
  if (createCharacterArticleDto.deathDate !== undefined) {
    formData.append("deathDate", createCharacterArticleDto.deathDate);
  }
  if (createCharacterArticleDto.race !== undefined) {
    formData.append("race", createCharacterArticleDto.race);
  }
  formData.append("gender", createCharacterArticleDto.gender);
  if (createCharacterArticleDto.height !== undefined) {
    formData.append("height", createCharacterArticleDto.height);
  }
  formData.append("homeWorld", createCharacterArticleDto.homeWorld);

  return instance.post(`/character-articles/create`, formData, options);
};

/**
 * @summary Обновить статью о персонаже
 */
export const characterArticleControllerUpdateCharacterArticle = <
  TData = AxiosResponse<ResponseCharacterArticleDto>,
>(
  id: string,
  updateCharacterArticleDto: UpdateCharacterArticleDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  const formData = new FormData();
  formData.append("title", updateCharacterArticleDto.title);
  formData.append("content", updateCharacterArticleDto.content);
  formData.append("isPremium", updateCharacterArticleDto.isPremium);
  formData.append("image", updateCharacterArticleDto.image);
  formData.append("characterName", updateCharacterArticleDto.characterName);
  if (updateCharacterArticleDto.birthDate !== undefined) {
    formData.append("birthDate", updateCharacterArticleDto.birthDate);
  }
  if (updateCharacterArticleDto.deathDate !== undefined) {
    formData.append("deathDate", updateCharacterArticleDto.deathDate);
  }
  if (updateCharacterArticleDto.race !== undefined) {
    formData.append("race", updateCharacterArticleDto.race);
  }
  formData.append("gender", updateCharacterArticleDto.gender);
  if (updateCharacterArticleDto.height !== undefined) {
    formData.append("height", updateCharacterArticleDto.height);
  }
  formData.append("homeWorld", updateCharacterArticleDto.homeWorld);

  return instance.patch(`/character-articles/update/${id}`, formData, options);
};

/**
 * @summary Удалить статью о персонаже
 */
export const characterArticleControllerDeleteCharacterArticle = <
  TData = AxiosResponse<CharacterArticleControllerDeleteCharacterArticle200>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.delete(`/character-articles/delete/${id}`, options);
};

/**
 * @summary Поиск статей о персонажах
 */
export const characterArticleControllerSearchCharacterArticles = <
  TData = AxiosResponse<ResponseCharacterArticleDto[]>,
>(
  params: CharacterArticleControllerSearchCharacterArticlesParams,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/character-articles/search`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * @summary Лайкнуть статью о персонаже
 */
export const characterArticleControllerLikeCharacterArticle = <
  TData = AxiosResponse<ResponseCharacterArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/character-articles/like/${id}`, undefined, options);
};

/**
 * @summary Убрать лайк со статьи о персонаже
 */
export const characterArticleControllerUnlikeCharacterArticle = <
  TData = AxiosResponse<ResponseCharacterArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/character-articles/unlike/${id}`, undefined, options);
};

/**
 * @summary Получить топ-5 статей о персонажах
 */
export const characterArticleControllerGetTopCharacterArticles = <
  TData = AxiosResponse<ResponseCharacterArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/character-articles/top`, options);
};

/**
 * @summary Получить все статьи о расах
 */
export const raceArticleControllerGetAllRaceArticles = <
  TData = AxiosResponse<ResponseRaceArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/race-articles/all`, options);
};

/**
 * @summary Получить все мои статьи о расах
 */
export const raceArticleControllerGetMyAllRaceArticles = <
  TData = AxiosResponse<ResponseRaceArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/race-articles/my-all`, options);
};

/**
 * @summary Получить одну статью о расе
 */
export const raceArticleControllerGetOneRaceArticle = <
  TData = AxiosResponse<ResponseRaceArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/race-articles/find/${id}`, options);
};

/**
 * @summary Создать новую статью о расе
 */
export const raceArticleControllerCreateRaceArticle = <
  TData = AxiosResponse<ResponseUserDto | ResponseRaceArticleDto>,
>(
  createRaceArticleDto: CreateRaceArticleDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  const formData = new FormData();
  formData.append("title", createRaceArticleDto.title);
  formData.append("content", createRaceArticleDto.content);
  formData.append("isPremium", createRaceArticleDto.isPremium);
  formData.append("image", createRaceArticleDto.image);
  formData.append("raceName", createRaceArticleDto.raceName);
  formData.append("type", createRaceArticleDto.type);
  formData.append("class", createRaceArticleDto.class);
  formData.append("skinColor", createRaceArticleDto.skinColor);
  formData.append(
    "distinctiveFeatures",
    createRaceArticleDto.distinctiveFeatures,
  );
  formData.append("homeWorld", createRaceArticleDto.homeWorld);
  formData.append("language", createRaceArticleDto.language);
  if (createRaceArticleDto.knownRepresentatives !== undefined) {
    formData.append(
      "knownRepresentatives",
      createRaceArticleDto.knownRepresentatives,
    );
  }

  return instance.post(`/race-articles/create`, formData, options);
};

/**
 * @summary Обновить статью о расе
 */
export const raceArticleControllerUpdateRaceArticle = <
  TData = AxiosResponse<ResponseRaceArticleDto>,
>(
  id: string,
  updateRaceArticleDto: UpdateRaceArticleDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  const formData = new FormData();
  formData.append("title", updateRaceArticleDto.title);
  formData.append("content", updateRaceArticleDto.content);
  formData.append("isPremium", updateRaceArticleDto.isPremium);
  formData.append("image", updateRaceArticleDto.image);
  formData.append("raceName", updateRaceArticleDto.raceName);
  formData.append("type", updateRaceArticleDto.type);
  formData.append("class", updateRaceArticleDto.class);
  formData.append("skinColor", updateRaceArticleDto.skinColor);
  formData.append(
    "distinctiveFeatures",
    updateRaceArticleDto.distinctiveFeatures,
  );
  formData.append("homeWorld", updateRaceArticleDto.homeWorld);
  formData.append("language", updateRaceArticleDto.language);
  if (updateRaceArticleDto.knownRepresentatives !== undefined) {
    formData.append(
      "knownRepresentatives",
      updateRaceArticleDto.knownRepresentatives,
    );
  }

  return instance.patch(`/race-articles/update/${id}`, formData, options);
};

/**
 * @summary Удалить статью о расе
 */
export const raceArticleControllerDeleteRaceArticle = <
  TData = AxiosResponse<RaceArticleControllerDeleteRaceArticle200>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.delete(`/race-articles/delete/${id}`, options);
};

/**
 * @summary Поиск статей о расах
 */
export const raceArticleControllerSearchRaceArticles = <
  TData = AxiosResponse<ResponseRaceArticleDto[]>,
>(
  params: RaceArticleControllerSearchRaceArticlesParams,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/race-articles/search`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * @summary Лайкнуть статью о расе
 */
export const raceArticleControllerLikeRaceArticle = <
  TData = AxiosResponse<ResponseRaceArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/race-articles/like/${id}`, undefined, options);
};

/**
 * @summary Убрать лайк со статьи о расе
 */
export const raceArticleControllerUnlikeRaceArticle = <
  TData = AxiosResponse<ResponseRaceArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/race-articles/unlike/${id}`, undefined, options);
};

/**
 * @summary Получить топ-5 статей о расах
 */
export const raceArticleControllerGetTopRaceArticles = <
  TData = AxiosResponse<ResponseRaceArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/race-articles/top`, options);
};

export type UsersControllerGetAllUsersResult = AxiosResponse<ResponseUserDto[]>;
export type UsersControllerGetProfileResult = AxiosResponse<ResponseUserDto>;
export type UsersControllerGetUserByIdResult = AxiosResponse<ResponseUserDto>;
export type UsersControllerToggleFavoriteArticleResult =
  AxiosResponse<ResponseUserDto>;
export type UsersControllerUpdateProfileResult = AxiosResponse<ResponseUserDto>;
export type AuthControllerRegisterUserResult = AxiosResponse<ResponseUserDto>;
export type AuthControllerAuthenticateUserResult =
  AxiosResponse<ResponseUserDto>;
export type AuthControllerLogoutUserResult =
  AxiosResponse<AuthControllerLogoutUser200>;
export type AuthControllerResetPasswordResult =
  AxiosResponse<AuthControllerResetPassword200>;
export type AuthControllerResetPasswordConfirmResult =
  AxiosResponse<ResponseUserDto>;
export type UserCollectionControllerGetUserCollectionResult =
  AxiosResponse<ResponseUserCollectionDto>;
export type UserCollectionControllerRollCharacterResult =
  AxiosResponse<ResponseRollCharacterDto>;
export type UserCollectionControllerResetDailyRollsResult = AxiosResponse<void>;
export type PaymentControllerCreatePaymentResult =
  AxiosResponse<ResponsePaymentDto>;
export type PaymentControllerGetPaymentResult =
  AxiosResponse<ResponsePaymentDto>;
export type CharacterArticleControllerGetAllCharacterArticlesResult =
  AxiosResponse<ResponseCharacterArticleDto[]>;
export type CharacterArticleControllerGetMyAllCharacterArticlesResult =
  AxiosResponse<ResponseCharacterArticleDto[]>;
export type CharacterArticleControllerGetOneCharacterArticleResult =
  AxiosResponse<ResponseCharacterArticleDto>;
export type CharacterArticleControllerGetArticlesByRaceResult = AxiosResponse<
  ResponseCharacterArticleDto[]
>;
export type CharacterArticleControllerCreateCharacterArticleResult =
  AxiosResponse<void>;
export type CharacterArticleControllerUpdateCharacterArticleResult =
  AxiosResponse<ResponseCharacterArticleDto>;
export type CharacterArticleControllerDeleteCharacterArticleResult =
  AxiosResponse<CharacterArticleControllerDeleteCharacterArticle200>;
export type CharacterArticleControllerSearchCharacterArticlesResult =
  AxiosResponse<ResponseCharacterArticleDto[]>;
export type CharacterArticleControllerLikeCharacterArticleResult =
  AxiosResponse<ResponseCharacterArticleDto>;
export type CharacterArticleControllerUnlikeCharacterArticleResult =
  AxiosResponse<ResponseCharacterArticleDto>;
export type CharacterArticleControllerGetTopCharacterArticlesResult =
  AxiosResponse<ResponseCharacterArticleDto[]>;
export type RaceArticleControllerGetAllRaceArticlesResult = AxiosResponse<
  ResponseRaceArticleDto[]
>;
export type RaceArticleControllerGetMyAllRaceArticlesResult = AxiosResponse<
  ResponseRaceArticleDto[]
>;
export type RaceArticleControllerGetOneRaceArticleResult =
  AxiosResponse<ResponseRaceArticleDto>;
export type RaceArticleControllerCreateRaceArticleResult = AxiosResponse<
  ResponseUserDto | ResponseRaceArticleDto
>;
export type RaceArticleControllerUpdateRaceArticleResult =
  AxiosResponse<ResponseRaceArticleDto>;
export type RaceArticleControllerDeleteRaceArticleResult =
  AxiosResponse<RaceArticleControllerDeleteRaceArticle200>;
export type RaceArticleControllerSearchRaceArticlesResult = AxiosResponse<
  ResponseRaceArticleDto[]
>;
export type RaceArticleControllerLikeRaceArticleResult =
  AxiosResponse<ResponseRaceArticleDto>;
export type RaceArticleControllerUnlikeRaceArticleResult =
  AxiosResponse<ResponseRaceArticleDto>;
export type RaceArticleControllerGetTopRaceArticlesResult = AxiosResponse<
  ResponseRaceArticleDto[]
>;
