/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Blog API
 * OpenAPI spec version: 1.0.0
 */
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

import type { AxiosRequestConfig, AxiosResponse } from "axios";
export type ArticlesControllerSearchArticlesParams = {
  query: string;
};

export interface SignInResponseDto {
  [key: string]: any;
}

export interface SignUpResponseDto {
  [key: string]: any;
}

export interface SignUpDto {
  /** User email */
  email: string;
  /** User name */
  name: string;
  /** User password */
  password: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface ProfileResponseDto {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  favorite_articles: string[];
  avatar: string;
  about: string;
  isPremium: boolean;
}

export interface UpdateArticleDto {
  [key: string]: any;
}

export interface ArticleDto {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: { _id: string; name: string; email: string };
  createdAt: string;
  updatedAt: string;
  isPremium: boolean;
}

export interface IPaymentDetails {
  id: string;
  status: "pending" | "succeeded" | "failed";
  paid: boolean;
  amount: {
    value: string;
    currency: string;
  };
  confirmation: {
    type: string;
    confirmation_url: string;
  };
  created_at: string;
  description: string;
  metadata: {
    order_id: string;
  };
  recipient: {
    account_id: string;
    gateway_id: string;
  };
  refundable: boolean;
  test: boolean;
}

export const appControllerGetHello = <TData = AxiosResponse<void>>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/`, options);
};

export const articlesControllerGetAllArticles = <
  TData = AxiosResponse<ArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/article/all`, options);
};

export const articlesControllerGetOneArticle = <
  TData = AxiosResponse<ArticleDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/article/find/${id}`, options);
};

export const articlesControllerCreateArticle = <
  TData = AxiosResponse<ArticleDto>,
>(
  articleDto: FormData,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/article/create`, articleDto, options);
};

export const articlesControllerUpdateArticle = <
  TData = AxiosResponse<ArticleDto>,
>(
  id: string,
  updateArticleDto: UpdateArticleDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.patch(`/article/update/${id}`, updateArticleDto, options);
};

export const articlesControllerDeleteArticle = <TData = AxiosResponse<void>>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.delete(`/article/delete/${id}`, options);
};

export const articlesControllerSearchArticles = <
  TData = AxiosResponse<ArticleDto[]>,
>(
  params: ArticlesControllerSearchArticlesParams,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/article/search`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const articlesControllerGetArticlesByAuthor = <
  TData = AxiosResponse<ArticleDto[]>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/article/my-all`, options);
};

export const articlesControllerAddArticleToFavorites = <
  TData = AxiosResponse<string>,
>(
  articleId: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.patch(`/users/add-favorite-article`, { articleId }, options);
};

export const articlesControllerRemoveArticlesToFavorites = <
  TData = AxiosResponse<string>,
>(
  articleId: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.patch(
    `/users/delete-favorite-article`,
    { articleId },
    options,
  );
};

export const usersControllerGetUser = <
  TData = AxiosResponse<ProfileResponseDto>,
>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/users/${id}`, options);
};

export const usersControllerGetProfile = <
  TData = AxiosResponse<ProfileResponseDto>,
>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.get(`/users/profile`, options);
};

export const usersControllerUpdateProfile = <
  TData = AxiosResponse<ProfileResponseDto>,
>(
  updateProfileDto: FormData,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.patch(`/users/update-profile`, updateProfileDto, options);
};

export const authControllerSignUp = <TData = AxiosResponse<SignUpResponseDto>>(
  signUpDto: SignUpDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/sign-up`, signUpDto, options);
};

export const authControllerLogin = <TData = AxiosResponse<SignInResponseDto>>(
  signInDto: SignInDto,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/sign-in`, signInDto, options);
};

export const authControllerLogout = <TData = AxiosResponse<void>>(
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/logout`, null, options);
};

export const authControllerResetPassword = <TData = AxiosResponse<void>>(
  email: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/auth/reset-password`, { email }, options);
};

export const authControllerUpdatePassword = <TData = AxiosResponse<void>>(
  updatePasswordDto: {
    token: string;
    newPassword: string;
  },
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(
    `/auth/reset-password-confirm`,
    updatePasswordDto,
    options,
  );
};

export const paymentControllerCreatePayment = <
  TData = AxiosResponse<IPaymentDetails>,
>(
  createPaymentDto: {
    amount: number;
  },
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/payment`, createPaymentDto, options);
};

export const paymentControllerGetPaymentDetails = <
  TData = AxiosResponse<IPaymentDetails>,
>(
  getPaymentDto: {
    id: string;
  },
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return instance.post(`/payment/get-payment`, getPaymentDto, options);
};

export type AppControllerGetHelloResult = AxiosResponse<void>;
export type ArticlesControllerGetAllArticlesResult = AxiosResponse<
  ArticleDto[]
>;
export type ArticlesControllerGetOneArticleResult = AxiosResponse<ArticleDto>;
export type ArticlesControllerCreateArticleResult = AxiosResponse<ArticleDto>;
export type ArticlesControllerUpdateArticleResult = AxiosResponse<ArticleDto>;
export type ArticlesControllerDeleteArticleResult = AxiosResponse<void>;
export type ArticlesControllerSearchArticlesResult = AxiosResponse<
  ArticleDto[]
>;
export type UsersControllerGetProfileResult = AxiosResponse<ProfileResponseDto>;
export type AuthControllerSignUpResult = AxiosResponse<SignUpResponseDto>;
export type AuthControllerLoginResult = AxiosResponse<SignInResponseDto>;
