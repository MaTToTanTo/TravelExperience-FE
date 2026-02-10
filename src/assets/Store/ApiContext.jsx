import {use,useState} from 'react'
import { createContext } from 'react'
import { useMsal } from '@azure/msal-react'
import Axios from 'axios'

export const ApiContext = createContext()

export function ApiProvider({children}) {
    const { instance, accounts } = useMsal();
    const api =Axios.create({
        baseURL: 'https://localhost:7268',
    });

const HttpGet = async (endpoint) => {
    try {
        let tokenResponse;
        try {
         tokenResponse = await instance.acquireTokenSilent({
            scopes: ["User.Read"],
            account: accounts[0],
        });
        } catch (silentError) {
        console.error("Error acquiring token silently:", silentError);
    
        tokenResponse = await instance.acquireTokenPopup({
            scopes: ["User.Read"],
            account: accounts[0],
        });
        }
        const response = await api.get(endpoint, {
            headers: {
                Authorization: `Bearer ${tokenResponse.accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("API GET request error:", error);
        throw error;
    }
}
const HttpPost = async (endpoint, data) => {
    try {
        let tokenResponse;
        try {
         tokenResponse = await instance.acquireTokenSilent({
            scopes: ["User.Read"],
            account: accounts[0],
        });
        } catch (silentError) {
        console.error("Error acquiring token silently:", silentError);
        tokenResponse = await instance.acquireTokenPopup({
            scopes: ["User.Read"],
            account: accounts[0],
        });
        }
        const response = await api.post(endpoint, data, {
            headers: {
                Authorization: `Bearer ${tokenResponse.accessToken}`,
        },
        });
        return response.data;
    } catch (error) {
        console.error("API POST request error:", error);
        throw error;
    }
};

const HttpPut = async (url, data) => {
        try {
            let tokenResponse;
            try {
              tokenResponse = await instance.acquireTokenSilent({
                scopes: ["User.Read"],
                account: accounts[0],
            });
                } catch (silentError) {
                    console.error("Silent token acquisition failed, acquiring via popup", silentError);
                
                
                tokenResponse = await instance.acquireTokenPopup({
                        scopes: ["User.Read"],
                        account: accounts[0],
                    });
                    
                }
            const response = await api.put(url, data, {
                headers: {
                    Authorization: `Bearer ${ tokenResponse.accessToken}`,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error("PUT error:", error);
            throw error;
        }
    };

return (
    <ApiContext.Provider value={{ HttpGet, HttpPost, HttpPut }}>
        {children}
    </ApiContext.Provider>
);

}

