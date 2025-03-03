"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function DropdownDatePortfolio() {
  return (
    <Select>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Jan</SelectItem>
        <SelectItem value="2">Feb</SelectItem>
        <SelectItem value="3">Mar</SelectItem>
        <SelectItem value="4">Apr</SelectItem>
        <SelectItem value="5">May</SelectItem>
        <SelectItem value="6">Jun</SelectItem>
        <SelectItem value="7">Jul</SelectItem>
        <SelectItem value="8">Aug</SelectItem>
        <SelectItem value="9">Sep</SelectItem>
        <SelectItem value="10">Oct</SelectItem>
        <SelectItem value="11">Nov</SelectItem>
        <SelectItem value="12">Des</SelectItem>
      </SelectContent>
    </Select>

  )
}
