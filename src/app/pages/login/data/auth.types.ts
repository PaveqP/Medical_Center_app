export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type AuthRequestType = {
  email: string;
  password: string;
};
