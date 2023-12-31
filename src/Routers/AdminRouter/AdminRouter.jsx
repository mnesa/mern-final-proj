import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLocation } from "react-router-dom";
import Loading from "../../Components/Shared/Loading/Loading";
import useAdmin from "../../hooks/useAdmin";

const AdminRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return;
    <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
