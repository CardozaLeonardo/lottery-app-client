import Head from 'next/head'
import UserForm from '../components/form/UserForm'
import Container from '../components/layout/Container'
import Pagination from '../components/pagination/Pagination'
import Ticket from '../components/ticket/Ticket'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    
   <div className="flex justify-center"> 

      <Ticket  />

      {/*<UserForm /> */}
   </div>
  )
}
