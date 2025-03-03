type TChain = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export type TResponseChain = {
  code: number
  message: string
  data: TChain[]
}