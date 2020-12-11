
import { useContext, useEffect } from 'react';
import PlayerContent from '../components/content/PlayerContent';
import Container from '../components/layout/Container';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Layer from '../components/shared/Layer';
import Spinner from '../components/shared/Spinner';
import RaffleBox from '../components/ticket/RaffleBox';
import Ticket from '../components/ticket/Ticket';
import { MainContext } from '../context';
import useFetch from '../hooks/useFetch';


export default function Home() {

  const {user, setUser} = useContext(MainContext);
  const [response, isLoading, error, fetcher] = useFetch();

  useEffect(() => {
    
    if(error && error == 401){
       window.location.replace('./login');
    }

    if(response) {
      setUser(response);
    } else {
      fetcher.get('/auth/me');
    }

  }, [response])

  return (
   <> 
   <div className="flex justify-between min-h-full">

     <Layer />

     <Sidebar />

     <div className="w-full">
       

       <Container>
          <Header />

         <div className="w-full">
           <br />
           <br />

           {
               user ? (
                 <>
                  {
                    user && user.roles[0].name == 'Player' ? (
                      <PlayerContent />
                    ): (
                      <div>
                        <h2 className="text-6xl text-center text-gray-200">Bienviendo </h2>
        
                        <div className="h-48"></div>
                      </div>
                    )
                  }
                 </>
               ) : (
                 <>
                    <div className="flex justify-center">
                      <Spinner />
                    </div>
                    <div className="h-48"></div>
                 </>
               )
           }


            
         </div>

         <div className="h-48"></div>

         <Footer />
       
       </Container>

       

     </div>
      
      

      {/*<UserForm /> */}
   </div>
   
   </>
  )
}
