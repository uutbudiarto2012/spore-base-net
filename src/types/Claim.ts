export type TQueryClaimHistory = {
  page?: number
  pageSize?: number
  address?: string
}
type TEpoch = {
  id: number
  epoch: number
  start: string
  end: string
  totalParticipant: number
  totalReserved: string
  createdAt: string
  updatedAt: string
}
type THistoryClaim = {
  id: number
  addressWallet: string
  epochId: number
  txn: string
  claim: string
  totalClaim: string
  createdAt: string
  updatedAt: string
  epoch: TEpoch
}

export type TResponseHistoryClaim = {
  code: number
  message: string
  data: {
    data: THistoryClaim[],
    total_pages: number
    total_row: number
    page: number
    page_size: number
  }
}