import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function SiteHeader() {
  const location = useLocation();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

          {location.pathname === "/estimates" && (
            <>
              <h1 className="text-base font-medium">見積履歴</h1>
            </>
            
          )}

          {location.pathname === "/order-status" && (
            <>
              <Link to="/orders">注文一覧</Link> /
              <h1 className="text-base font-medium">車両注文状況</h1>
            </>
            
          )}

          {location.pathname === "/orders" && (
            <>
              <h1 className="text-base font-medium">注文一覧</h1>
            </>
            
          )}

        {location.pathname === "/settings" && (
            <>
              <h1 className="text-base font-medium">設定</h1>
            </>
            
          )}

          {location.pathname === "/estimates/detail" && (
            <>
              <Link to="/estimates">見積履歴</Link> /
              <h1 className="text-base font-medium">見積詳細</h1>
            </>
            
          )}

          {location.pathname === "/" && (
            <>
              <h1 className="text-base font-medium"></h1>
            </>
            
          )}

          {location.pathname === "/customers" && (
            <>
              <h1 className="text-base font-medium">顧客一覧</h1>
            </>
            
          )}

          {location.pathname === "/profile" && (
            <>
              <Link to="/customers">顧客一覧</Link> /
              <h1 className="text-base font-medium">顧客詳細情報</h1>
            </>
            
          )}

          {location.pathname === "/edit-profile" && (
            <>
              <Link to="/customers">顧客一覧</Link> /
              <h1 className="text-base font-medium">顧客詳細情報</h1>
            </>
            
          )}
      </div>
    </header>
  )
}
