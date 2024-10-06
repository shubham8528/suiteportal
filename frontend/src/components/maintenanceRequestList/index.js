import React, { useEffect, useState } from 'react'
import * as Styled from "./style";
import axios from 'axios';
import { header, urlList } from '../../utils/urls';


export default function MaintenanceRequestList() {
    const { maintenanceListUrl, maintenanceCloseById } = urlList
    const [maintenanceList, setMaintenanceList] = useState([])
    const fetchMaintenanceList = async () => {
        try {
            const result = await axios.get(maintenanceListUrl, header)
            setMaintenanceList(result?.data?.data)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        fetchMaintenanceList()
    }, [])
    const handleClick = async (id) => {
        try {
            console.log("ckecked")
            const result = await axios.put(`${maintenanceCloseById}${id}/close`, { userId: id }, header)
            if (result?.data?.status === 200) {
                fetchMaintenanceList()
            }
        } catch (err) {
            console.log(err.message)
        }

    }
    return (
        <div>
            <Styled.TableBox>
                <caption>Maintenance Request List</caption>
                <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UnitNumber</th>
                        <th>ServiceType</th>
                        <th>Summary</th>
                        <th>Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {maintenanceList?.map((item, index) => {
                        return (<tr>
                            <th>{index + 1}</th>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>{item?.unitNumber}</td>
                            <td>{item?.serviceType}</td>
                            <td>{item?.summary}</td>
                            <td>{item?.details}</td>
                            <td className='status'>{item?.status === "false" ? "close" : "active"}</td>
                            {item?.status === "true" && <button onClick={() => handleClick(item?._id)}>Close</button>}
                        </tr>)
                    })}
                </tbody>
            </Styled.TableBox>
        </div>
    )
}
