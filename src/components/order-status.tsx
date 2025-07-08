import { useSearchParams } from "react-router-dom"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const STATUS_STEPS = ["確認中", "製造中", "出荷済", "納車完了"]

const fakeOrders = {
  ORDER001: "確認中",
  ORDER002: "製造中",
  ORDER003: "出荷済",
  ORDER004: "納車完了",
}

export default function OrderStatusPage() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id") ?? ""

  const currentStatus = fakeOrders[id as keyof typeof fakeOrders] ?? "確認中"
  const currentStep = STATUS_STEPS.indexOf(currentStatus)

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">車両注文状況</h1>
      <p className="mb-4 text-muted-foreground">注文番号: {id}</p>

      <Card>
        <CardContent className="space-y-6 py-6">
          {STATUS_STEPS.map((step, index) => (
            <div key={step} className="flex justify-between items-center">
              <span className="w-28">{step}</span>
              <Progress
                className="w-3/4"
                value={
                  index < currentStep
                    ? 100
                    : index === currentStep
                    ? 50
                    : 0
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </AppLayout>
  )
}
