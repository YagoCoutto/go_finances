import {
    ReactNode,
    createContext,
    useContext
} from 'react';

//import * as Google from 'expo-google-app-auth';
import * as Google from 'expo-auth-session';

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

function AuthProvider({ children }: AuthProviderProps) {
    const user = {
        id: '1231456',
        name: 'Yago',
        email: 'yagoig8@gmail.com',
    }

    async function signInWithGoogle() {
        try {
            const result = await Google.logInAsync({
                iosClientId: '192850272751-gar5ili1muqb7qkrhhedbph45d2np74f.apps.googleusercontent.com',
                androidClientId: '192850272751-mape32ffdc564occ2pb15m8k8oscuhef.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });

            if (result.type === 'success') {
                const userLogged = {
                    id: String(result.user.id),
                    email: result.user.email!,
                    name: result.user.name,
                    photo: result.user.photoUrl!
                };
                console.log(userLogged)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }