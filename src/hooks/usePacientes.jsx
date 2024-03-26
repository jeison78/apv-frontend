import { useContext } from 'react' //Extrayendo los datos del context
import PacientesContext from '../context/PacientesProvider'

const usePacientes = () => {
    return useContext(PacientesContext)
}

export default usePacientes