import { useEffect, useState } from "react"
import { UserType } from "../App"
import styles from './index.module.css'


type PropsType = {
  userDetails: UserType
}

export const ResultDescription: React.FC<PropsType> = ({userDetails}) => {

  const [timer, setTimer] = useState(60)
  useEffect(() => {
   const interval =  setInterval(() => {
      setTimer(prev => prev - 1)
      console.log('tick')
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

    return <div className={styles.resultatWrapper}>
      <div>{timer}</div>
      <div>
        <img src={userDetails.avatar_url} alt={userDetails.login} />
      </div>
      <div className={styles.itemResultatWrapper}>
        <span className={styles.itemResultatWrapper}>User name: {userDetails.login}</span>
      </div>
      <div className={styles.itemResultatWrapper}>
        <span className={styles.itemResultatWrapper}>Followers: {userDetails.followers}</span>
      </div>
  </div>
}