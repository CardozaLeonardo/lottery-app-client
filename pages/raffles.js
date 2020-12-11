import { useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../context';

import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Spinner from '../components/shared/Spinner';
import RafflesContent from '../components/content/RafflesContent';
import Forbidden from '../components/content/Forbidden';

const Raffles = () => {
    const router = useRouter();
    const { user, setUser, setLayer } = useContext(MainContext);
    const [userResponse, isUserLoading, userError, userFetcher] = useFetch();
    
    useEffect(() => {
        if(userResponse) {
            setUser(userResponse);
        } else {

            userFetcher.get('/auth/me');
        }
        

        if(userError && userError == 401) {
            
            //router.replace("/login");
            window.location.replace('../login');
        }

    }, [userResponse])

    return(
        <>
            { isUserLoading &&
               <div className="flex justify-center">
                   <Spinner />
               </div>
            }

            {
                userResponse && !userError && user && user.roles[0].name == 'Admin' && <RafflesContent />
            }

            {
                userResponse && userResponse.roles[0].name != 'Admin' ? (<Forbidden />) : null
            }
        </>
    )
}

export default Raffles;