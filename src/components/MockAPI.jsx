import axios from "axios"

const MockAPI = axios.create(
    {baseURL:"https://68bf54cd9c70953d96ef54f6.mockapi.io"}
)

export default MockAPI