import { axiosClient } from '@/lib/axiosclient'
import { TDistributionReward, THolderCharts } from '@/types/DistributionReward'
import { useQuery } from '@tanstack/react-query'


const getData = async (): Promise<THolderCharts> => {
  const response = await axiosClient({
    method: 'GET',
    url: `client/asset-distribution`,
  })

  const balanceUsds = response.data.data.map((i: TDistributionReward) => i.balanceUsd)
  const balances = response.data.data.map((i: TDistributionReward) => i.balance)
  const labels = response.data.data.map((i: TDistributionReward) => i.name)
  return { balanceUsds, balances, labels }
}

const useDistributionReward = () => {
  return useQuery({
    queryKey: ['client/asset-distribution'],
    queryFn: () => getData(),
  })
}

export { getData, useDistributionReward }
