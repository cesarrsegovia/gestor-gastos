import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute = ({user, redirecTo, children}) => {
  if(user==null) return <Navigate to={redirecTo} replace />
    return children ? children : <Outlet />
}
