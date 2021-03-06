import React from "react"
import { LoginBg } from "../../assets"
import { Button, Gap, Input, Link } from "../../components"

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="imageBg" className="left-bg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Daftar Sekarang" />
      </div>
    </div>
  )
}

export default Login
