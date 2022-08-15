const API_URL = 'https://testapiwd.bojlk2.xyz'

export async function getCandidates() {
    const response = await fetch(`${API_URL}/candidates`)
    return await response.json()
}

export async function getCandidateById(id) {
    const response = await fetch(`${API_URL}/candidates/${id}`);
    return await response.json()
}
