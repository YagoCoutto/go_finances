import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect
} from 'react';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

//web - 192850272751-un0h5ksh78k7bqs5bghn2r30lao38tht.apps.googleusercontent.com
//android - 192850272751-mape32ffdc564occ2pb15m8k8oscuhef.apps.googleusercontent.com

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData); /*[] -> esse é o valor inicial*/

WebBrowser.maybeCompleteAuthSession()


function AuthProvider({ children }: AuthProviderProps) {
    const user = {
        id: '1231456',
        name: 'Yago',
        email: 'yagoig8@gmail.com',
    }


    async function signInWithGoogle() {
        const [acessToken, setAcessToken] = React.useState(null);
        const [user, setUser] = React.useState(null);
        const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
            clientId: "192850272751-un0h5ksh78k7bqs5bghn2r30lao38tht.apps.googleusercontent.com",
            androidClientId: "192850272751-mape32ffdc564occ2pb15m8k8oscuhef.apps.googleusercontent.com"

        });

        React.useEffect(() => {
            if (response?.type === "success") {
                setAcessToken(response.authentication.accessToken);
                acessToken && fetchUserInfo();
            }
        }, [response, acessToken])


        async function fetchUserInfo() {
            let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: {
                    authorization: `Bearer ${acessToken}`
                }
            });
            const useInfo = await response.json();
            setUser(useInfo)
        }

        return (
            
        )
    }
}