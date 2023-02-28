import { API_URL } from '@configs/axios'

export const RequestPokemon = async (id: number) => {
  const { data, status } = await API_URL.get(`/pokemon/${id}`)

  if (data) {
    return { data, status }
  }

  throw new Error('Erro ao fazer a requisição na API do Pokemon')
}
