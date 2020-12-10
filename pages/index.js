
import { useContext, useEffect } from 'react';
import Container from '../components/layout/Container';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Layer from '../components/shared/Layer';
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
           <RaffleBox />
         </div>
       
       </Container>

       

     </div>
      
      

      {/*<UserForm /> */}
   </div>
   <Footer />
   </>
  )
}
