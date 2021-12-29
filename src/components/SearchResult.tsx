import axios from "axios"
import { useEffect, useState } from "react"
import { SearchUsersType, UserType } from "../App"
import { ResultDescription } from "./ResultDescription"
import styles from './index.module.css'

type PropsType = {
  users: Array<SearchUsersType> | null
}

export const SearchResult: React.FC<PropsType> = ({ users }) => {

  const [userDetails, setUserDetails] = useState<UserType | null>(() => null)
  const [selectedUser, setSelectedUser] = useState<SearchUsersType | null>(() => null)

  useEffect(() => {
    if (selectedUser)
      document.title = selectedUser.login
    if (!!selectedUser)
      axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
        .then(response => {
          setUserDetails(response.data)
        })

  }, [selectedUser])

  return <div className={styles.resultatContainer}>
    <div className={styles.usersWrapper}>
      {!users
        ? <div>Loading...</div>
        : users.map(s =>
          <div
            key={s.id}
            className={selectedUser === s ? styles.selected : styles.user}
            onClick={() => setSelectedUser(s)}>
            <span>{s.login + " "}</span>
          </div>)}
    </div>
    <div>
      {userDetails && <ResultDescription 
      userDetails={userDetails} />}
    </div>
  </div>
}