import axios from 'axios'

const fetchClient = (baseURL?: string) => axios.create({ baseURL })

export default fetchClient
