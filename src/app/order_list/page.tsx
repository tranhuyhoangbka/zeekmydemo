import { AppLayout } from "@/components/app-layout"
import data from "./data.json"
import { DataTableOrder } from "@/components/data-table-order"
import { useState } from "react";

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
    <AppLayout>
      <div className="flex flex-col gap-4">
      
      <div className="space-y-4 mb-6 px-4 lg:px-6">
        {/* Row: Order ID */}
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">注文番号:</label>
          <input
            type="text"
            placeholder="注文番号を入力"
            value={orderId}
            onChange={e => setOrderId(e.target.value)}
            className="border rounded px-3 py-2 placeholder-gray-400 flex-1 max-w-xs"
          />
        </div>
        {/* Row: Type */}
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">タイプ:</label>
          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value as any)}
            className="border rounded px-3 py-2 text-gray-600 flex-1 max-w-xs"
          >
            <option value="">選択</option>
            <option value="購入">購入</option>
            <option value="予約">予約</option>
          </select>
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
        {/* Row: Status */}
        <div className="flex items-center space-x-4">
          <label className="text-sm w-20">ステータス:</label>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as any)}
            className="border rounded px-3 py-2 text-gray-600 flex-1 max-w-xs"
          >
            <option value="">選択</option>
            <option value="確認中">確認中</option>
            <option value="製造中">製造中</option>
            <option value="出荷済">出荷済</option>
          </select>
        </div>
        {/* Row: Date filters */}
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
        {/* Row: Price filters */}
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

        <DataTableOrder data={data} />
      </div>
    </AppLayout>
  )
}
