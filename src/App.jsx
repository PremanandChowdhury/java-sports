import '@/index.css'
import { Toaster } from 'react-hot-toast'
import RoutesContainer from './routes'

function App() {

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={ false }
        gutter={ 8 }
        containerClassName=""
        containerStyle={ {} }
        toastOptions={ {
          // Define default options
          className: '',
          duration: 2500,
          style: {
            background: '#856544',
            color: '#fff'
          },

          // Default options for specific types
          success: {
            duration: 2000,
            style: {
              background: 'green',
              color: '#fff'
            }
          },
          error: {
            duration: 2000,
            style: {
              background: 'red',
              color: '#fff'
            }
          }
        } }
      />
      <RoutesContainer />
    </div>
  )
}

export default App