import {useLocation} from "react-router";

const AdminRoute = ({children}) => {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  return <div></div>;
};

export default AdminRoute;
