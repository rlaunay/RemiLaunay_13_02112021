import { authActions } from ".";
import { AppDispatch } from "..";
import fetchApi, { apiClient } from "../../api";
import { User } from "../../Types/Auth";

type LoginPayload = {
  email: string; 
  password: string;
  remember: boolean;
}

export function updateUser(accessToken: string | undefined, userInfo: { firstName: string, lastName: string }, cb: () => void) {
  return async (dispatch: AppDispatch) => {
    dispatch(authActions.updateRequest());

    try {
      // const reponseProfile = await fetchApi<{ body: User }>('/user/profile', {
      //   method: 'PUT',
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      //   body: JSON.stringify(userInfo)
      // });
      const reponseProfile = await apiClient.user.update(accessToken, userInfo)

      dispatch(authActions.updateSuccess(reponseProfile.body));
      cb();
    } catch (err: any) {
      dispatch(authActions.updateError(err.message));
    }
  }
}

export function login({ email, password, remember }: LoginPayload) {
  return async (dispatch: AppDispatch) => {
    dispatch(authActions.loginRequest());

    try {
      // const reponseLogin = await fetchApi<{ body: { token: string } }>('/user/login', {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password
      //   })
      // });
      const reponseLogin = await apiClient.user.login(email, password);

      if (remember) {
        localStorage.setItem('token', reponseLogin.body.token);
      }

      dispatch(authActions.loginSuccess({
        token: reponseLogin.body.token,
      }));
    } catch (err: any) {
      dispatch(authActions.loginFail(err.message || 'Un problème est survenue !'));
    }
  }
}

export const initSession = (token: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(authActions.loginRequest())
    
    try {
      // const responseProfil = await fetchApi<{ body: User }>('/user/profile', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      const responseProfil = await apiClient.user.getProfil(token);

      dispatch(authActions.loginSuccess({
        token,
        user: responseProfil.body
      }))
    } catch (err: any) {
      dispatch(authActions.logout())
    }
  }
}