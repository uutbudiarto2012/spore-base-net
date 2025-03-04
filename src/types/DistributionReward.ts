export type TDistributionReward = {
  name: string
  balance: number
  balanceUsd: number
}

export type TResponseDistributionReward = {
  code: number
  message: string
  data: TDistributionReward[]
}

type THolderBalace = number[]
type THolderBalaceUsd = number[]
type THolderLable = string[]

export type THolderCharts = {
  balanceUsds: THolderBalace
  balances: THolderBalaceUsd
  labels: THolderLable
}