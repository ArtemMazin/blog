import { usersControllerGetProfile } from "@/shared/api/generated";
import { AuthContext } from "@/shared/contexts/authContext";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function useProfile() {
  const authContext = React.useContext(AuthContext);
  const { setIsAuthenticated } = authContext;

  return useQuery({
    queryKey: ["user"],
    queryFn: () =>
      usersControllerGetProfile({
        withCredentials: true,
      })
        .then((res) => {
          setIsAuthenticated(true);
          return res.data;
        })
        .catch((error) => {
          setIsAuthenticated(false);
          throw error;
        }),
  });
}
