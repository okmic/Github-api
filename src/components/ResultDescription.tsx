import { UserType } from "../App"
import styles from './index.module.css'


type PropsType = {
  userDetails: UserType
}

export const ResultDescription: React.FC<PropsType> = ({userDetails}) => {
    return <div className={styles.resultatWrapper}>
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