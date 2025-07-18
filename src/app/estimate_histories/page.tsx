import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { DataTableEstimate } from "@/components/data-table-estimate"
import { useState } from "react"

export default function Page() {
  const [orderId, setOrderId] = useState('');
  const [typeFilter, setTypeFilter] = useState<'購入' | '予約' | ''>('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [modelFilter, setModelFilter] = useState<Order['model'] | ''>('');
  const [priceMin, setPriceMin] = useState<number | ''>('');
  const [priceMax, setPriceMax] = useState<number | ''>('');
  const [statusFilter, setStatusFilter] = useState<Order['status'] | ''>('');

  const handleSearch = () => {
    // implement filtering logic
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">


            <div className="space-y-4 mb-6 px-4 lg:px-6">
        {/* Row: Order ID */}

        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">作成日:</label>
          <input
            type="date"
            value={dateFrom}
            onChange={e => setDateFrom(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <span className="mx-2">～</span>
          <input
            type="date"
            value={dateTo}
            onChange={e => setDateTo(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>


        {/* Row: Model */}
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">モデル:</label>
          <select
            value={modelFilter}
            onChange={e => setModelFilter(e.target.value as any)}
            className="border rounded px-3 py-2 text-gray-600 flex-1 max-w-xs"
          >
            <option value="">選択</option>
            <option value="Zeekr 009 Pro">Zeekr 009 Pro</option>
            <option value="Zeekr 009 Max">Zeekr 009 Max</option>
            <option value="Zeekr 009 Ultra">Zeekr 009 Ultra</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">色:</label>
          <select
            value={modelFilter}
            onChange={e => setModelFilter(e.target.value as any)}
            className="border rounded px-3 py-2 text-gray-600 flex-1 max-w-xs"
          >
            <option value="">選択</option>
            <option value="Zeekr 009 Pro">マットブラック</option>
            <option value="Zeekr 009 Max">パールホワイト</option>
            <option value="Zeekr 009 Ultra">レッドメタリック</option>
          </select>
        </div>
        {/* Row: Status */}
        {/* Row: Date filters */}
        
        {/* Row: Price filters */}
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">シート数:</label>
          <input
            type="number"
            placeholder="最低シート数"
            value={priceMin}
            onChange={e => setPriceMin(e.target.value === '' ? '' : Number(e.target.value))}
            className="border rounded px-3 py-2 placeholder-gray-400 flex-1 max-w-xs"
          />
          <span className="mx-2">～</span>
          <input
            type="number"
            placeholder="最高シート数"
            value={priceMax}
            onChange={e => setPriceMax(e.target.value === '' ? '' : Number(e.target.value))}
            className="border rounded px-3 py-2 placeholder-gray-400 flex-1 max-w-xs"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">価格:</label>
          <input
            type="number"
            placeholder="最低価格"
            value={priceMin}
            onChange={e => setPriceMin(e.target.value === '' ? '' : Number(e.target.value))}
            className="border rounded px-3 py-2 placeholder-gray-400 flex-1 max-w-xs"
          />
          <span className="mx-2">～</span>
          <input
            type="number"
            placeholder="最高価格"
            value={priceMax}
            onChange={e => setPriceMax(e.target.value === '' ? '' : Number(e.target.value))}
            className="border rounded px-3 py-2 placeholder-gray-400 flex-1 max-w-xs"
          />
        </div>
        {/* Search button */}
        <div className="flex justify-start">
          <button
            onClick={handleSearch}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            検索
          </button>
        </div>
      </div>


              <DataTableEstimate data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
