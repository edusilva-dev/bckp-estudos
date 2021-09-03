const api = axios.create({
  baseURL: `${this.origin}`,
});

async function apiGet(route, params) {
  return (await api.get(`${route}`, params)).data
}

async function apiPost(route, params) {
  return (await api.post(`${route}`, params)).data
}

async function apiPut(route, params) {
  return (await api.put(`${route}`, params)).data
}

async function getUsers() {
  return await apiGet('/users')
}

async function authenticate(username, password) {
  return await apiPost('/login/authentication', {username, password})
}