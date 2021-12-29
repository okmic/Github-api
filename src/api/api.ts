import axios from "axios"

export const API = {
    getUsers(serch: string) {
        debugger
        return axios.get<any>(`https://api.github.com/search/users?q=${serch}`).then(s => s.data)
    }
}