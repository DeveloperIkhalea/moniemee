
"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { getBudget } from "../../lib/budget"
import { getExpenses } from "../../lib/expenses"
import { SpendingChat } from "../../components/spendingChat"
import { Expense } from "../../types/expense"

// ...existing code...


function formatMoney(value: number) {
  return value.toLocaleString(undefined, { style: "currency", currency: "USD" })
}


export default function DashboardPage() {
  const expenses = useMemo(() => getExpenses(), [])
  
  const budget = Number(getBudget())
  

  const totals = useMemo(() => {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0)
    return { total, remaining: budget - total, count: expenses.length }
  }, [expenses, budget])

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-4xl space-y-8 px-4">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-600">Quick view of your monthly spending.</p>
          </div>
          <Link
            href="/expenses"
            className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
          >
            View expenses
          </Link>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Budget</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{formatMoney(budget)}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Spent</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {formatMoney(totals.total)}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Remaining</p>
            <p
              className={`mt-2 text-3xl font-semibold ${
                totals.remaining < 0 ? "text-rose-600" : "text-emerald-700"
              }`}
            >
              {formatMoney(totals.remaining)}
            </p>

          </div>

        </section>

      <SpendingChat expenses={expenses} budget={budget} />

      </div>

    </main>
  )
}