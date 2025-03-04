import { axiosClient } from '@/lib/axiosclient'
import { TDistributionReward, THolderCharts } from '@/types/DistributionReward'
import { useQuery } from '@tanstack/react-query'


const getDistributionReward = async (): Promise<THolderCharts> => {
  const response = await axiosClient({
    method: 'GET',
    url: `client/asset-distribution`,
  })
  const balanceUsds = response.data.data.map((i: TDistributionReward) => i.balanceUsd)
  const balances = response.data.data.map((i: TDistributionReward) => i.balance)
  const labels = response.data.data.map((i: TDistributionReward) => i.name)
  return { balanceUsds, balances, labels }
}
const getAumProgress = async (): Promise<number> => {
  const response = await axiosClient({
    method: 'GET',
    url: `history-aum/latest-aum`,
  })
  return response.data?.data?.latest_aum || 0
}

const useDistributionReward = () => {
  return useQuery({
    queryKey: ['client/asset-distribution'],
    queryFn: () => getDistributionReward(),
  })
}

const useAumProgress = () => {
  return useQuery({
    queryKey: ['history-aum/latest-aum'],
    queryFn: () => getAumProgress(),
  })
}

export {
  useDistributionReward,
  useAumProgress
}
