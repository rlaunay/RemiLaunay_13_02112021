export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export type AuthState = {
  loading: boolean;
  error?: string | null;
  user?:  User;
  accessToken?: string;
  update: {
    loading?: boolean;
    error?: string | null;
  }
}