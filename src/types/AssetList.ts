type TChain = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}
type TTicker = {
  id: number
  name: string
  x: string
  telegram: string | null
  web: string | null
  dc: string | null
  apiPrice: string
  apiBalance: string
  link_wallet: string
  createdAt: string
  updatedAt: string
}
type TAssetList = {
  id: number
  tickerId: number
  wallet: string
  chainId: number
  balance: number
  price: number
  subTotal: number
  createdAt: string
  updatedAt: string
  chain: TChain
  ticker: TTicker,
  link_ref: string
}

export type TResponseAssetList = {
  code: number
  message: string
  data: {
    data: TAssetList[],
    total_pages: number
    total_row:number
    page: number
    page_size: number
    total_balance_usd: number
  }
}

type TClientBalanceWallet = {
  ticker: TTicker
  chain: TChain
  wallets: string[],
  balance: number
  price: number
  subTotal: number
  createdAt: string
  link_ref: string
}
export type TResponseClientBalanceWallet = {
  data: TClientBalanceWallet[]
  total: number
}

export type TAumHistory = {
  id: number
  date: string
  aum: number
  rewardDistribution: number | null,
  createdAt: string
}