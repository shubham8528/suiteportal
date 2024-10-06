import { Navigate } from "react-router-dom";

export default function Protection({ children }) {
    const token = localStorage.getItem("token")
    return token ? children : <Navigate to="/login" />;
}
