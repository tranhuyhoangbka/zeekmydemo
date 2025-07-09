import { AppLayout } from "@/components/app-layout"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import data from "./data.json"
import { DataTableRecentOrder } from "@/components/data-table-recent-order"

export default function Page() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-6 px-4 lg:px-6">ダッシュボード</h1>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-4 lg:px-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <h3 className="text-xs text-gray-500 uppercase tracking-wider">総顧客数</h3>
           <p className="text-2xl font-bold text-gray-800">89</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <h3 className="text-xs text-gray-500 uppercase tracking-wider">総見積数</h3>
           <p className="text-2xl font-bold text-gray-800">340</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <h3 className="text-xs text-gray-500 uppercase tracking-wider">総注文数</h3>
           <p className="text-2xl font-bold text-gray-800">125</p>
        </div>
      </div>


      <h2 className="text-2xl font-bold mb-4 px-4 lg:px-6">注文ステータス</h2>



      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 px-4 lg:px-6">
         <div className="p-4 rounded-xl shadow-sm text-white bg-amber-500 transition-all hover:brightness-110">
            <h3 className="font-bold text-sm">確認中</h3>
            <p className="text-3xl font-bold">15</p>
         </div>
         <div className="p-4 rounded-xl shadow-sm text-white bg-blue-500 transition-all hover:brightness-110">
            <h3 className="font-bold text-sm">製造中</h3>
            <p className="text-3xl font-bold">8</p>
         </div>
         <div className="p-4 rounded-xl shadow-sm text-white bg-green-500 transition-all hover:brightness-110">
            <h3 className="font-bold text-sm">出荷済</h3>
            <p className="text-3xl font-bold">72</p>
         </div>
         <div className="p-4 rounded-xl shadow-sm text-white bg-indigo-500 transition-all hover:brightness-110">
            <h3 className="font-bold text-sm">納車完了</h3>
            <p className="text-3xl font-bold">30</p>
         </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 px-4 lg:px-6">最近の注文</h2>
        <DataTableRecentOrder data={data} />
      </div>
    </AppLayout>
  )
}
