import { useMutation } from "@tanstack/react-query";
import { User } from "@/types";
import { api } from "@/axios";
import { AxiosError } from "axios";

const signUpService = async (user: User) => {
  const response = await api.post("/api/auth/register", user);
  return response.data;
};

export const useSignUp = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: any) => void;
  onError: (error: AxiosError<any>) => void;
}) => {
  return useMutation({
    mutationFn: async (user: User) => {
      return await signUpService(user);
    },
    onSuccess,
    onError,
  });
};
