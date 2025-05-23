//faça o componente

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/actions/auth";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const user = await getCurrentUser();
        return user;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    },
  });
}
