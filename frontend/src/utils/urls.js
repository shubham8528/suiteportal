const URL = process.env.REACT_APP_URL_DEV
console.log(URL, "shubham")
export const urlList = {
    maintenanceListUrl: `${URL}api/maintenance-requests`,
    maintenanceCloseById: `${URL}api/maintenance-requests/`,
    setMaintenanceFormUrl: `${URL}api/maintenance-requests`,
    loginUrl: `${URL}api/admin/login`

}

export const token = localStorage.getItem("token")
export const header = { headers: { "Authorization": `Bearer ${token}` } }