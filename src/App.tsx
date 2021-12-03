import { useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { useAppDispatch, useAppSelector } from "./store"
import { initSession } from "./store/auth/thunks"

const App: React.FC = () => {
  const { user, loading, accessToken } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = accessToken || localStorage.getItem('token');
    if (!token) return;

    dispatch(initSession(token));
  }, [accessToken])

  return (
    <Layout>
      <Routes>
        {loading ? (
           <Route path="*" element={<h1>Chargement...</h1>} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            {!user && <Route path="/sign-in" element={<Login />} />}
            {user && <Route path="/user" element={<Profile />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Layout>
  )
}

export default App
