import './App.css'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-1'>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App