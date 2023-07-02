import LoginPage from '@renderer/pages/Login'
import { useEffect, useState } from 'react'
import Dashboard from '@renderer/pages/Dashboard'
import { LoadingOverlay } from '@mantine/core'

export default function App(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean | string>(false)

  useEffect(() => {
    let userFromLocalStorage = localStorage.getItem('user')
    if (userFromLocalStorage !== null) {
      console.log("loged in")
      setIsLogin(true)
    }
  }, [isLogin])

  if (isLogin === true) {
    console.log("displaying dashboard")
    return <Dashboard />
  }

  if ((isLogin as boolean) === false) {
    return <LoginPage loginHook={setIsLogin} />
  }

  return <LoadingOverlay visible={true} />
}
