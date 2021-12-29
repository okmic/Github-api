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
  const [serch, setSetch] = useState<string>("alpha")

  useEffect(() => {
    setUsers(null)
     axios.get<SeatchResolt>(`https://api.github.com/search/users?q=${serch}`)
      .then(response => {
        setUsers(response.data.items)
      }) 
  }, [serch])

  return (
    <>
      <SearchForm setSetch={setSetch} />
      <SearchResult users={users} />
    </>
  )
}

export default App
