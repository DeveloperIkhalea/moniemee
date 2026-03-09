"use client"

import { getBudget, setBudget } from "@/lib/budget"
import { useEffect, useState } from "react"


export default function SettingsPage() {
  const [budget, setBudgetState] = useState(0)

  useEffect(() => {
    setBudgetState(getBudget())
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 pl-64 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 px-4">
        <header>
          <h1 className="text-3xl font-semibold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-600">Set your monthly budget target.</p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium text-slate-700">Monthly budget</label>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="number"
              min="0"
              value={budget}
              onChange={(e) => setBudgetState(Number(e.target.value))}
              className="w-40 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button
              type="button"
              onClick={() => setBudget(budget)}
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Save
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}