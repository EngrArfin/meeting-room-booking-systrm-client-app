import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string | undefined | null) => {
  if (!token || typeof token !== "string" || token.trim() === "") {
    throw new Error("Invalid token specified: must be a string");
  }

  // Decoding the token payload
  const decodedToken = jwtDecode(token);
  return decodedToken;
};
