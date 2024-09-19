import {
  ResponseUserDto,
  usersControllerGetUserById,
} from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function useUser(id: string, initialData?: ResponseUserDto) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      usersControllerGetUserById(id)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          throw error;
        }),
    initialData,
    retry: false,
  });
}
