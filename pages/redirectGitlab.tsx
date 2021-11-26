import axios from 'axios';
import qs from 'qs';
import React from "react";

const redirectGitlab = (): JSX.Element => {
    const clientId = "94$?jEbeNmai@n&L";
    const clientSecret = "secret";

    if (typeof window === "undefined")
        return (<p>Error window undefined</p>)
    var url = new URL(window.location.href);
    var auth_code = url.searchParams.get("code");
    const Config = {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    }
    const params = {
        client_id: clientId,
        client_secret: clientSecret,
        code: auth_code,
        accept: "json"
    }

    console.log(auth_code)
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const service = { code: auth_code };
    
    axios.post(`http://localhost:8080/gitlab/`, service, config)
        .then(res => {
            console.log(res.data)
            axios.get(`http://localhost:8080/gitlab/me`, config)
            .then(res => {
                console.log(res.data)
                location.href = `/?name=${res.data.name}`
            })
        .catch(error => {
            console.log(error)
        })
        })
        .catch(error => {
            console.log(error)
        })
    return (
        <>
            <p>client_id: {clientId}</p>
            <p>auth_code: {auth_code}</p>
        </>
    );
};

export default redirectGitlab