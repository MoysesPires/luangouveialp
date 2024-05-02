"use client";
import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { IUser } from "@/services/Auth/types";
import auth from "@/services/Auth";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

type IAuthContextType = {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  loading: boolean;
};

type IAuthProviderType = {
  children: ReactNode;
};

const UseAuthContext = createContext<IAuthContextType | undefined>(undefined);

export function UseAuthProvider({ children }: IAuthProviderType) {
  const [user, setUser] = React.useState<IUser | undefined>(undefined);
  const router = useRouter();
  const path = usePathname();

  const [loading, setLoading] = React.useState<boolean>(false);

  async function getUserInfos() {
    try {
      setLoading(true);
      const data = await auth.getUserInfos();
      if (data) {
        if (data?.role === "admin") {
          if (!path.startsWith("/admin")) {
            router.push("/admin");
          }
          setUser(data);
          return;
        }
        router.push("/dashboard");
        setUser(data);
      }
    } catch (e) {
      router.push("/auth");
      Cookies.remove("token");
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getUserInfos();
    }
  }, []);

  return (
    <UseAuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UseAuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UseAuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
