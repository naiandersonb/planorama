import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";

interface MonthCardProps {
  month: { slug: string; fullName: string };
  year: number;
  totalItems?: number;
  totalExpense?: number;
}

export function MonthCard({
  month,
  totalExpense = 0,
  totalItems = 0,
  year,
}: MonthCardProps) {
  return (
    <Link key={month.slug} href={`/finances/month/${month.slug}?year=${year}`}>
      <div className="dark:bg-slate-950 bg-slate-50 flex flex-col rounded-lg h-52 p-6 border-slate-200">
        <div>
          <h2 className="uppercase text-xl font-medium">
            {month.fullName.slice(0, 3)}/{year}
          </h2>
          <p className="text-sm font-ibmPlexMono text-slate-500">
            {totalItems} ITEM(S)
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-sm text-slate-500">Total</p>
          <p className="font-ibmPlexMono text-3xl">
            {formatCurrency({ value: totalExpense })}
          </p>
        </div>
      </div>
    </Link>
  );
}
