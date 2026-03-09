"use client"

import { useMemo, useState } from "react"
import { Expense } from "../types/expense"

export function SpendingChat({ expenses, budget }: { expenses: Expense[]; budget: number }) {
  const [messages, setMessages] = useState<string[]>([])
  const total = useMemo(() => expenses.reduce((sum, e) => sum + e.amount, 0), [expenses])

  function askQuestion() {
    const over = total - budget
    const suggestion =
      budget <= 0
        ? "Set a monthly budget first in Settings."
        : over > 0
        ? `You're over budget by ${over.toFixed(2)}. Try cutting non-essential expenses or lowering your monthly goal.`
        : `Great! You have ${Math.abs(over).toFixed(2)} remaining. Keep tracking and stay within budget.`

    setMessages((prev) => [...prev, suggestion])
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Spending assistant</h2>
      <div className="mt-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="rounded-xl bg-slate-50 p-3 text-sm text-slate-800">
            {msg}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={askQuestion}
        className="mt-4 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
      >
        Analyze my spending
      </button>
    </div>
  )
}