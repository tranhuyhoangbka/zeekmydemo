import React from "react";

interface SummaryCardItem {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

interface SummaryCardsProps {
  items: SummaryCardItem[];
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({ items }) => {
  return (
    <div className="summary-cards grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 my-2">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="summary-card bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
        >
          {item.icon && (
            <div className="card-icon mb-2 w-8 h-8 text-blue-600">
              {item.icon}
            </div>
          )}
          <p className="card-title text-sm font-medium text-gray-700">
            {item.title}
          </p>
          <p className="card-value text-2xl font-bold text-gray-700 mt-1">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

// Usage example:
// import { SummaryCards } from "./SummaryCards";
// import { ReactComponent as OrderIcon } from "./icons/order.svg";
//
// const summaryData = [
//   { title: "全注文数", value: 12, icon: <OrderIcon /> },
//   { title: "処理中", value: 3, icon: <OrderIcon /> },
//   { title: "完了", value: 8, icon: <OrderIcon /> },
//   { title: "キャンセル", value: 1, icon: <OrderIcon /> },
// ];
//
// <SummaryCards items={summaryData} />
