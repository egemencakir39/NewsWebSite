import { BrowserRouter } from 'react-router-dom'
import './App.css'
import PageContainer from './Container/PageContainer'
import RouterConfig from './config/RouterConfig'
import Marque from './components/Marque'
import Header from './components/Header'
import Home from './Pages/Home'

function App() {

  return (
    <div>
      <Marque />
      <Header />
      <PageContainer>
        <Home />
      </PageContainer>


    </div>
  )
}

export default App
