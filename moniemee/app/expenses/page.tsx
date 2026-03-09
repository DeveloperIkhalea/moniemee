"use client"

import { useState } from "react"
import { ExpenseForm } from "../../components/expenseForm"
import { ExpenseList } from "../../components/expenseList"

export default function ExpensesPage() {
  const [refresh, setRefresh] = useState(0)

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-4xl space-y-6 px-4">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Monthly expenses</h1>
            <p className="text-sm text-slate-600">
              Track your spending and stay on budget.
            </p>
          </div>
          <div className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-slate-800">Add a new expense</h2>
            <ExpenseForm onSaved={() => setRefresh((r) => r + 1)} />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-slate-800">Recent expenses</h2>
            <ExpenseList key={refresh} />
          </section>
        </div>
      </div>
    </main>
  )
}