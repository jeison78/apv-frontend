import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-3 md:mx-7 ">
        <Link 
            to="/admin/perfil"
            className="font-bold uppercase text-gray-500 hover:text-indigo-600"
        >Perfil</Link>
        <Link 
            to="/admin/Cambiar-password"
            className="font-bold uppercase text-gray-500  hover:text-indigo-600"
        >Cambiar Password</Link>
    </nav>
  )
}

export default AdminNav