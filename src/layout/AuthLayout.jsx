import { Outlet } from "react-router-dom";//Es un componente 

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2  gap-10 items-center  w-11/12 ">
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout;