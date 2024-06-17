import { useState } from 'react'
import './App.css'
import Container from './components/PageContainer'
import Header from './components/Header'
import ButonItem from './components/ButonItem'
import PokemenCards from './components/PokemenCards'
import Loading from './components/Loading'
import SearchForm from './components/searchForm'

function App() {

  

  return (
    <>  
    <Header/>
    
    <Container>
      <SearchForm/>
      <Loading/>
      <PokemenCards/>
    </Container>
    </>
  )
}

export default App
