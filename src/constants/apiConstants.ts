export const APIConstants = {
    ApiUrl: getAPIUrl(),
    AuthAppClientId: 'AuthAppClientId',
    AuthScope: 'AuthScope',
    LoginAuthorityUrl: 'LoginAuthorityUrl',
    ResetPasswordAuthorityUrl: 'ResetPasswordAuthorityUrl',
    BaseUrl: 'BaseUrl',
    DevBaseUrl: 'http://localhost:3000',
};

export function getAPIUrl(): string {  //Change the prod/UAT URL at the time of prod deployment
    return 'https://app-sc-api.azurewebsites.net';
}

export function extractSubDomain(): string {
    try {
        let host = window.location.host;
        let parts = host.split(".");
        let subdomain = "";
        // If we get more than 3 parts, then we have a subdomain
        // NOTE: This could be 4, if you have a com.au
        if (host === 'localhost:3000') {
            return "localhost";
        }
        if (parts.length < 3) {
            return "app";
        }

        subdomain = parts[0];
        return subdomain;
    } catch {
        return 'app';
    }
}