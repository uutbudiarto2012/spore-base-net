import { axiosClient } from '@/lib/axiosclient'
import { TResponseChain } from '@/types/Chain'
import { useQuery } from '@tanstack/react-query'


const getData = async (): Promise<TResponseChain> => {
  const response = await axiosClient({
    method: 'GET',
    url: `chains`,
  })
  return response.data
}

const useChains = () => {
  return useQuery({
    queryKey: ['chain'],
    queryFn: () => getData(),
  })
}

export { useChains, getData }