import Login from "../components/login";
import MaintenanceForm from "../components/maintenanceForm";
import MaintenanceRequestList from "../components/maintenanceRequestList";

export const protectedRoutes = [
    {
        id: 0,
        title: "Login",
        path: "/login",
        data: <Login />,
        isProtected: false,

    }, {
        id: 1,
        title: "MaintenanceForm",
        path: "/",
        data: <MaintenanceForm />,
        isProtected: false,

    }, {
        id: 2,
        title: "maintenance-requests-list",
        path: "/maintenance-requests-list",
        data: <MaintenanceRequestList />,
        isProtected: true,

    }]