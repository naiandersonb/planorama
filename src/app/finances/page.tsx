import { months } from "@/components/constants/months";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function FinancesPage() {

  const currentYear = new Date().getFullYear()

  return (
    <div className="md:px-6 px-4">
      <h1 className="md:text-4xl text-2xl">Finance Manager</h1>

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-14">
        {months.map((month) => (
          <Link key={month.slug} href={`/${month.slug}?year=${currentYear}`}>
          <div
           
            className="bg-neutral-900 flex flex-col rounded-lg h-52"
          >
            <div className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 mb-1" />
                <h2 className="uppercase text-xl">{month.fullName.slice(0, 3)}/{currentYear}</h2>
              </div>
              <p className="text-sm text-neutral-500 mt-2">0 ITEM(S)</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-neutral-500 mb-1 px-4">Total</p>
              <div className="flex items-center gap-2 mt-auto text-xl justify-between border-t border-neutral-800 p-4">
                <p>R$</p>
                <p>00,00</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
