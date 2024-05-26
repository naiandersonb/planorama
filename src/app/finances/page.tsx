"use client";

import { months } from "@/components/constants/months";
import { MonthCard } from "@/components/finances/month-card";
import { SelectYear } from "@/components/finances/select-year";
import { useState } from "react";

export default function FinancesPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleChangeYear = (year: number) => {
    setCurrentYear(year);
  };

  return (
    <div className="md:px-6 px-4">
      <div className="flex gap-4 justify-between md:items-center my-8">
        <h1 className="md:text-4xl text-2xl">Finance Manager</h1>
        <SelectYear onChangeYear={handleChangeYear} defaultYear={currentYear} />
      </div>

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-1">
        {months.map((month) => (
          <MonthCard key={month.slug} month={month} year={currentYear} />
        ))}
      </section>
    </div>
  );
}
