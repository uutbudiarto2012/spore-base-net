import { axiosClient } from '@/lib/axiosclient'
import { TResponseAssetList } from '@/types/AssetList'
import { useQuery } from '@tanstack/react-query'


const getData = async (params: { page: number, pageSize: number }): Promise<TResponseAssetList> => {
  const response = await axiosClient({
    method: 'GET',
    url: `balance-wallet`,
    params
  })
  return response.data
}

const useAssetList = ({ page, pageSize}: { page: number, pageSize: number }) => {
  return useQuery({
    queryKey: ['asset-list', { page, pageSize }],
    queryFn: () => getData({ page, pageSize }),
  })
}

export { useAssetList, getData }