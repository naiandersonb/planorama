'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";

interface SelectYearProps {
  defaultYear: number;
  range?: number;
  onChangeYear?: (year: number) => void;
}

export function SelectYear({
  defaultYear,
  onChangeYear,
  range = 100,
}: SelectYearProps) {
  const years = useMemo(() => {
    const oldYears = Array.from(
      { length: range },
      (_, index) => defaultYear - range + index
    );
    const nextYears = Array.from(
      { length: range },
      (_, index) => defaultYear + index
    );

    return [...oldYears, ...nextYears];
  }, [defaultYear, range]);

  const handleChangeYear = (year: string) => {
    onChangeYear && onChangeYear(Number(year));
  };

  return (
    <Select
      onValueChange={(value) => handleChangeYear(value)}
      defaultValue={defaultYear.toString()}
    >
      <SelectTrigger className="md:w-[180px] w-[120px] dark:bg-slate-900 bg-slate-50">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="dark:bg-slate-900 bg-slate-50 max-h-56">
        {years.map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
