'use client'
import { useParams, useSearchParams } from "next/navigation"

export default function MonthPage() {
  const params = useParams()
  const query = useSearchParams()
  const year = query.get('year')
  const month = params?.month
 
  return <div className="md:px-6 px-4">
<div className="my-8">
        <h1 className="md:text-4xl text-2xl uppercase">{month}/{year}</h1>
       
      </div>
  </div>
}