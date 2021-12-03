import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../Types/Auth';

const initialState: AuthState = {
  loading: false,
  update: {
    loading: false,
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; user?: User | undefined }>) => {
      state.loading = false;
      state.accessToken = action.payload.token;
      state.user = action.payload?.user;
    },
    logout: () => {
      localStorage.clear();
      return initialState;
    },
    updateRequest: (state) => {
      state.update.error = null;
      state.update.loading = true;
    },
    updateError: (state, action: PayloadAction<string>) => {
      state.update.loading = false;
      state.update.error = action.payload;
    },
    updateSuccess: (state, action: PayloadAction<User>) => {
      state.update.loading = false;
      state.user = action.payload;
    }
  },
});

export const { actions: authActions } = authSlice;

export default authSlice.reducer;
