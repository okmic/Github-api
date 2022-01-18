import axios from "axios"
import { useEffect, useState } from "react"
import { SearchUsersType, UserType } from "../App"
import { ResultDescription } from "./ResultDescription"
import styles from './index.module.css'

type PropsType = {
  users: Array<SearchUsersType> | null
}

export const SearchResult: React.FC<PropsType> = ({ users }) => {

  const [userDetails, setUserDetails] = useState<UserType | null>( null)
  const [selectedUser, setSelectedUser] = useState<SearchUsersType | null>(() => ({login: "okmic", id: 80267051}))
  const [timer, setTiner] = useState(false)

  useEffect(() => {
    if (selectedUser)
    document.title = selectedUser.login
  }, [selectedUser])
  
  useEffect(() => {
    if (!!selectedUser)
      axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
        .then(response => {
          setUserDetails(response.data)
          setTiner(true)
        })
  }, [selectedUser])

  useEffect(()=> {
    if(selectedUser?.id === userDetails?.id){
    let timeout = setTimeout(() => {
      if(selectedUser && selectedUser.id === userDetails?.id){
      setUserDetails(null)
      setSelectedUser(null)
      setTiner(false)
      }
    }, 60000)
    return () =>  clearTimeout(timeout)
  }
  }, [timer])

  return <div className={styles.resultatContainer}>
    <div className={styles.usersWrapper}>
      {!users
        ? <div className={styles.loading}>Loading...</div>
        : users.map(s =>
          <div
            key={s.id}
            className={selectedUser?.login === s.login? styles.selected : styles.user}
            onClick={() => {
              setUserDetails(null)
              setSelectedUser(s)
              }}>
            <span>{s.login + " "}</span>
          </div>)}
    </div>
    <div className={styles.descriptionWrapper}>
    { timer 
      ? userDetails
      ? <ResultDescription 
      userDetails={userDetails} />
      : <div className={styles.loading}>loading...</div>
      : <div className={styles.loading}>The viewing time has expired, select the user again.</div>
    }
    </div>
  </div>
}