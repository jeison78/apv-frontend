import { useContext } from 'react' //Extrayendo los datos del context
import AuthContext from '../context/AuthProvider'

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth