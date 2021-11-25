import axios from 'axios';
import qs from 'qs';
import React from "react";

const GithubCallback = (): JSX.Element => {
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
    // axios.post(`https://github.com/login/oauth/access_token`, qs.stringify(params), Config).then(res => {
    //     var token = new URLSearchParams(res.data).get("access_token")
    //     console.log(res.data)
    //     const service = {
    //         name: "github",
    //         user_id: "0",
    //         description: "github",
    //         service_token: token,
    //         token_expiration: 1,
    //     };
    //     const Config = {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token")
    //         }
    //     }
    //     axios.post(`http://localhost:8080/api/service`, service, Config)
    //         .then(res => {
    //             window.location.href = 'http://localhost:3000/admin/user-profile'
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // })
    return (
        <>
            <p>client_id: {clientId}</p>
            <p>auth_code: {auth_code}</p>
        </>
    );
};

export default GithubCallback