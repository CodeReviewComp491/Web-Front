import qs from 'qs';

export const githubLogin = async () => {
    const clientId = "d42fa202c19059ba09a9";
    const data = {client_id: clientId};
    window.location.href = "https://github.com/login/oauth/authorize?scope=repo&" + qs.stringify(data);
    return null;
};