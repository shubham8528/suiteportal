import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import * as Styled from "./style";
import { urlList } from '../../utils/urls';
export default function Login() {
    const { loginUrl } = urlList
    const [loginData, setloginData] = useState({})
    const navigate = useNavigate()
    const data = [{ id: 0, label: "Username", type: "email", name: "userName", required: true },
    { id: 1, label: "Password", type: "password", name: "Password", required: true }]
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setloginData({ ...loginData, [name]: value })
    }
    const loginApi = async (payload) => {
        const { Password, ...rest } = payload
        const updatedData = {
            Password: Password,
            ...rest
        }
        try {
            const result = await axios.post(loginUrl, updatedData)
            if (result?.data?.status === 200) {
                localStorage.setItem("token", result?.data?.token)
                navigate("/maintenance-requests-list")
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        loginApi(loginData)
    }
    return (
        <Styled.BoxContainer>
            <div className='Container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {data?.map((item) => {
                        return (<>
                            <div class="inputbox">
                                <label>{item?.label}</label>
                                <input name={item?.name} type={item?.type} required={item?.required} onChange={handleChange} />
                            </div>
                        </>)
                    })}
                    <input type="submit" name="" value="Submit" />
                </form>
            </div>
        </Styled.BoxContainer>
    )
}
