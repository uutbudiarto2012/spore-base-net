import { axiosClient } from '@/lib/axiosclient'
import { TQueryClaimHistory, TResponseHistoryClaim } from '@/types/Claim'
import { useQuery } from '@tanstack/react-query'


const getClaimHistory = async (params?: TQueryClaimHistory): Promise<TResponseHistoryClaim> => {
  const response = await axiosClient({
    method: 'GET',
    url: `history-cliam`,
    params
  })
  return response.data
}

const useSporeToken = (params?: TQueryClaimHistory) => {
  return useQuery({
    queryKey: ['history-cliam', params],
    queryFn: () => getClaimHistory(params),
  })
}
export {
  useSporeToken,
  getClaimHistory
}

