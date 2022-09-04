import { useStateValue } from '../lib/state_manager/contextApi'
import styles from '../styles/Home.module.css'
import Signin from './auth/signin'

export default function Home() {

  const {state} = useStateValue();



  return (
    <div>
      {
        state.user?.username
      }
    </div>
  )
}
