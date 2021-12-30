import axios from 'axios'
import { useEffect, useState } from 'react'
import { SearchForm } from './components/SearchForm'
import { SearchResult } from './components/SearchResult'

export type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}

export type SearchUsersType = {
  login: string
  id: number
}

export type SeatchResolt = {
  items: Array<SearchUsersType>
}

function App() {

  const [users, setUsers] = useState<Array<SearchUsersType> | null>(null)
  const [search, setSeatch] = useState<string>("alpha-lucky")
 
  useEffect(() => {
    setUsers(null)
     axios.get<SeatchResolt>(`https://api.github.com/search/users?q=${search}`)
      .then(response => {
        setUsers(response.data.items)
      }) 
  }, [search])

  return (
    <>
      <SearchForm setSeatch={setSeatch}  />
      <SearchResult users={users} />
    </>
  )
}

export default App