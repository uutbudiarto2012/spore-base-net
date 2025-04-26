import BigNumber from "bignumber.js"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToSporeNumber(bigNumber: string) {
  const bn = new BigNumber(bigNumber).dividedBy(new BigNumber('1000000000000000000'))
  const stringNumber = bn.toString()
  const USDollar = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });
  return USDollar.format(+stringNumber)
}

export function bigNumberToNumber(bigNumber: string) {
  const bn = new BigNumber(bigNumber)
  const stringNumber = bn.toString()
  const USDollar = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });
  return USDollar.format(+stringNumber)
}

export function NumberDotted(data: number) {
  const r = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
  });
  return r.format(data)
}
export function NumberComma(data: number) {
  const r = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });
  return r.format(data)
}
export function createScanUrlGNosis({ type, hash }: { type: string, hash: string }) {
  return `https://gnosisscan.io/${type}/${hash}`
}

export function createScanUrl({url, type, hash }: {url:string, type: string, hash: string }) {
  return `${url}/${type}/${hash}`
}

export const cutString = (data: string, count: number) => {
  const F = data.slice(0, count || 3);
  const L = data.slice(-count);
  return F ? `${F}...${L}` : "-";
}

export function bigNumberToInt(bigNumber: string) {
  const bn = new BigNumber(bigNumber)
  const stringNumber = bn.toString()
  return +stringNumber
}
export function toLinkRef(link: string, address: string) {
  const replacedUrl = link.replace('<wallet>', address);
  return replacedUrl;
}
