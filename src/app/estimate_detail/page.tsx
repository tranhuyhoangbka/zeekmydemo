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
import ImageUrl from './images/black.webp'

const estimate = {
  estimateId: "E1001",
  createdAt: "2025-06-10T14:23:00Z",
  model: "Zeekr 009 Pro",
  customization: {
    bodyColor: "マットブラック",
    seatConfig: "6人乗り",
    interiorTrim: "レザー・ブラック"
  },
  specs: {
    batteryCapacity_kWh: 100,
    range_km: 550,
    dimensions_mm: { length: 4990, width: 1990, height: 1620 },
    acceleration_0_100_kmh_s: 4.5
  },
  estimatedPrice_yen: 5790000,
  imageUrl: "https://porsche-vietnam.vn/wp-content/uploads/2018/07/model-718-cayman.png"
};

export const EstimateDetail: React.FC = () => {
  const {
    model,
    imageUrl,
    createdAt,
    customization: { bodyColor, seatConfig, interiorTrim },
    specs: { batteryCapacity_kWh, range_km, dimensions_mm, acceleration_0_100_kmh_s },
    estimatedPrice_yen,
  } = estimate;

  const formattedDate = new Date(createdAt).toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });


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
               


            <div className="w-full h-full mt-6 p-4 bg-white shadow-lg">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{model} 見積詳細</h1>
        <p className="text-sm text-gray-500">作成日: {formattedDate}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: Car Image */}
        <div className="flex-1">
          <img
            src={ImageUrl}
            alt={`${model} 画像`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 space-y-4">
          {/* Customization Info */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">カスタマイズ情報</h2>
            <ul className="space-y-2">
              <li>ボディカラー: <strong>{bodyColor}</strong></li>
              <li>シート構成: <strong>{seatConfig}</strong></li>
              <li>インテリアトリム: <strong>{interiorTrim}</strong></li>
            </ul>
          </div>

          {/* Specifications */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">仕様</h2>
            <table className="w-full text-base">
              <tbody>
                <tr>
                  <td className="py-2">バッテリー容量:</td>
                  <td className="py-2 font-medium">{batteryCapacity_kWh} kWh</td>
                </tr>
                <tr>
                  <td className="py-2">走行可能距離:</td>
                  <td className="py-2 font-medium">{range_km} km</td>
                </tr>
                <tr>
                  <td className="py-2">全長×全幅×全高:</td>
                  <td className="py-2 font-medium">
                    {dimensions_mm.length}×{dimensions_mm.width}×{dimensions_mm.height} mm
                  </td>
                </tr>
                <tr>
                  <td className="py-2">0–100 km/h 加速:</td>
                  <td className="py-2 font-medium">{acceleration_0_100_kmh_s} 秒</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Price Display */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <p className="text-2xl font-bold">推定価格：{estimatedPrice_yen.toLocaleString()} 円</p>
          </div>
        </div>
      </div>
    </div>





            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
