import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProfileCard } from "./profile-card"
import { SummaryCards } from "./summary-cards";

const summaryData = [
  { title: "全注文数", value: 3 },
  { title: "確認中", value: 1 },
  { title: "製造中", value: 1 },
  { title: "出荷済", value: 1 },
  { title: "納車完了", value: 0 },
  { title: "キャンセル", value: 0 },
];

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-2">
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-xl">
            顧客情報
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <ProfileCard
          avatarUrl="/avatars/user1.jpg"
          name="山田 太郎"
          email="yamada@example.com"
          phone="090-1234-5678"
          address="東京都渋谷区神南1-19-11"
          joinedDate="2024年1月15日"
          onEdit={() => console.log("Edit profile")}
        />

        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-xl">
            主要指標
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <SummaryCards items={summaryData} />
        </CardFooter>
      </Card>
    </div>
  )
}
