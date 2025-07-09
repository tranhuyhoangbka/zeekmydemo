import { useSearchParams } from "react-router-dom"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Truck, Car } from "lucide-react"
import { cn } from "@/lib/utils"

const STATUS_STEPS = ["確認中", "製造中", "出荷済", "納車完了"]

const fakeOrders = {
  ORDER001: "確認中",
  ORDER002: "製造中",
  ORDER003: "出荷済",
  ORDER004: "納車完了",
  予約: "出荷済",
}

const statusIcons: Record<string, JSX.Element> = {
  確認中: <Clock className="text-orange-500" />,
  製造中: <Truck className="text-orange-500" />,
  出荷済: <Car className="text-orange-500" />,
  納車完了: <CheckCircle className="text-green-600" />,
}

export default function OrderStatusPage() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id") ?? ""

  const currentStatus = fakeOrders[id as keyof typeof fakeOrders] ?? "出荷済"
  const currentStep = STATUS_STEPS.indexOf(currentStatus)

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">🚗 車両注文状況</h1>
      <p className="mb-4 text-muted-foreground">🧾 注文番号: <strong>{id}</strong></p>

      <Card>
        <CardContent className="space-y-6 py-6">
          {STATUS_STEPS.map((step, index) => {
            const isCurrent = index === currentStep
            const isCompleted = index < currentStep

            let progressValue = 0
            if (isCompleted) progressValue = 100
            else if (isCurrent) progressValue = 25

            const colorClass = isCompleted
              ? "text-green-600"
              : isCurrent
              ? "text-orange-500"
              : "text-gray-400"

            return (
              <div
                key={step}
                className={cn(
                  "flex items-center gap-4",
                  isCurrent && "bg-orange-50 rounded-md px-3 py-2"
                )}
              >
                <div className="w-6">{statusIcons[step]}</div>
                <span className={cn("w-28 font-medium", colorClass)}>{step}</span>
                <Progress className="flex-1" value={progressValue} />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </AppLayout>
  )
}

