import { createContext, useState } from 'react';

const userTest = {
    id: 27,
    username: 'wait...',
    role: {
        id: 2,
        name: 'Admin'
    }
};

export const MainContext = createContext();

export const MainProvider = ({children}) => {

    const [user, setUser] = useState(userTest);
    const [isLogged, setLogged] = useState(null);
    const [layer, setLayer] = useState(false);

    return (
        <MainContext.Provider value={{
            user,
            setUser,
            isLogged,
            setLogged,
            layer,
            setLayer
        }}>
            { children }
        </MainContext.Provider>
    )
}