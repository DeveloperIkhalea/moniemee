"use client"

import { useEffect, useState } from "react"
import { getExpenses } from "../lib/expenses"
import { Expense } from "../types/expense"

function formatMoney(value: number) {
  return value.toLocaleString(undefined, { style: "currency", currency: "USD" })
}

export function ExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    setExpenses(getExpenses())
  }, [])

  if (expenses.length === 0) return <p className="text-sm text-slate-500">No expenses yet.</p>

  return (
    <ul className="space-y-3">
      {expenses.map((e) => (
        <li
          key={e.id}
          className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold text-slate-900">{e.description}</div>
            <div className="text-xs text-slate-500">
              {e.category} • {e.date}
            </div>
          </div>

          <div className="mt-2 flex items-baseline gap-2 sm:mt-0">
            <span className="text-sm text-slate-500">Amount</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              {formatMoney(e.amount)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}