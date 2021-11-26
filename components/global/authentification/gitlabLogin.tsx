import qs from 'qs';

export const gitlabLogin = async () => {
    const data = {
        client_id: "53b680f99562ab067c8acd78307094942a2010c6e81f2057ce0a84787902aff5",
        redirect_uri : "http://localhost:3000/redirectGitlab"

    };
    window.location.href = "https://gitlab.com/oauth/authorize?response_type=code&state=STATE&" + qs.stringify(data);
    return null;
};