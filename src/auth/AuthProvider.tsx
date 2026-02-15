import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

interface AuthProviderWithHistoryProps {
    children: React.ReactNode;
}

const Auth0ProviderWithHistory: React.FC<AuthProviderWithHistoryProps> = ({ children }) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN || "dev-placeholder.auth0.com";
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || "placeholder-client-id";

    const onRedirectCallback = (appState: any) => {
        window.history.replaceState(
            {},
            document.title,
            appState?.returnTo || window.location.pathname
        );
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
