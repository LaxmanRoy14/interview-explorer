import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.info("Logged Out");

    setTimeout(() => {
      localStorage.removeItem("user");
      navigate("/login");
      window.location.reload();
    }, 1000);
  }, []);

  return null;
}

export default Logout;
