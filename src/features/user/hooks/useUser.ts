import { usersControllerGetUser } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      usersControllerGetUser(id, {
        withCredentials: true,
      })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          throw error;
        }),
    retry: false,
  });
}
