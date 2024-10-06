import React, { useState } from 'react'
import * as Styled from "./style";
import axios from 'axios';
import { urlList } from '../../utils/urls';
export default function MaintenanceForm() {
    const { setMaintenanceFormUrl } = urlList
    const [maintenanceForm, setMaintenanceForm] = useState({})
    const formData = {
        typeData: [
            { id: 0, name: "name", label: "Name", type: "text", placeholder: "Name", value: maintenanceForm?.name },
            { id: 0, name: "email", label: "Email", type: "email", placeholder: "Email", value: maintenanceForm?.email },
            { id: 0, name: "unitNumber", label: "Unit Number", type: "text", placeholder: "Unit Number", value: maintenanceForm?.unitNumber },
        ],
        selectData: { label: 'Select Options', options: [{ id: 0, option: "Summary" }, { id: 1, option: "Details" }] },
        textareaField: [{ id: 0, name: "summary", placeholder: "Summary", value: maintenanceForm?.summary }, { id: 1, name: "details", placeholder: "Details", value: maintenanceForm?.details }]
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMaintenanceForm({ ...maintenanceForm, [name]: value })
    }
    const submitForm = async (data) => {
        try {
            await axios.post(setMaintenanceFormUrl, data).then((res) => alert(res?.data?.message)).catch((err) => alert(err?.response?.data?.message))

            setMaintenanceForm({
                name: "",
                email: "",
                unitNumber: "",
                serviceType: "",
                summary: "",
                details: ""
            })
        } catch (err) {
            console.log(err.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm(maintenanceForm)

    }
    return (
        <div>
            <Styled.FormBox onSubmit={handleSubmit}>
                <div className='formContainer'>
                    <h2>MaintenanceRequest</h2>
                    <div className='InputField'>
                        {formData?.typeData?.map((item) => <div className='inputBox'>
                            <div>{item?.label}</div>
                            <input required name={item?.name} value={item?.value} type={item?.type} placeholder={item?.placeholder} onChange={handleChange} />
                        </div>)}
                    </div>
                    <div className='InputField'>
                        <div>{formData?.selectData?.label}</div>
                        <select required name="serviceType" onChange={handleChange}>
                            {formData?.selectData?.options?.map((item) => <option value={item?.option}>{item?.option}</option>
                            )}
                        </select>
                    </div>
                    <div className='textAreaField'>
                        {formData?.textareaField?.map((item) => <div><textarea required name={item?.name} value={item?.value} placeholder={item?.placeholder} onChange={handleChange} ></textarea></div>)}
                        <button type="submit">Submit Request</button>
                    </div>
                </div>
            </Styled.FormBox >
        </div >
    )
}
