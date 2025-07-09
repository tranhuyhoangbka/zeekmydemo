import { AppLayout } from "@/components/app-layout"
import { SectionCards } from "@/components/section-cards"
import data from "./data.json"
import { DataTableUser } from "@/components/data-table-user"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };


  return (
    <AppLayout>
      <div className="flex flex-col gap-4">

      <div className="flex justify-between items-center mb-4 px-4 lg:px-6">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={() =>{}}
            className="border rounded px-3 py-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            検索
          </button>
        </div>
        <button
          onClick={() => {navigate(`/settings`)}}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          新規顧客追加
        </button>
      </div>

        <DataTableUser data={data} />
      </div>
    </AppLayout>
  )
}
