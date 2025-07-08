import { AppLayout } from "@/components/app-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-8 max-w-xl">
        <h1 className="text-2xl font-bold">アカウント設定</h1>

        {/* 氏名 */}
        <div className="space-y-2">
          <Label htmlFor="name">氏名</Label>
          <Input id="name" placeholder="山田 太郎" />
        </div>

        {/* メール */}
        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" placeholder="yamada@example.com" />
        </div>

        {/* 電話番号 */}
        <div className="space-y-2">
          <Label htmlFor="phone">電話番号</Label>
          <Input id="phone" placeholder="090-1234-5678" />
        </div>

        {/* 住所 */}
        <div className="space-y-2">
          <Label htmlFor="address">住所</Label>
          <Input id="address" placeholder="東京都渋谷区○○ 1-2-3" />
        </div>

        {/* パスワード */}
        <div className="space-y-2">
          <Label htmlFor="password">パスワードを変更</Label>
          <Input id="password" type="password" placeholder="新しいパスワード" />
        </div>

        {/* 通知 */}
        <div className="flex items-center gap-4">
          <Label htmlFor="notifications" className="flex-1">
            注文ステータスの通知を受け取る
          </Label>
          <Switch id="notifications" />
        </div>

        {/* ダークモード */}
        <div className="flex items-center gap-4">
          <Label htmlFor="darkmode" className="flex-1">
            ダークモードを有効にする
          </Label>
          <Switch id="darkmode" />
        </div>

        {/* 保存ボタン */}
        <Button className="mt-4">保存</Button>
      </div>
    </AppLayout>
  )
}
