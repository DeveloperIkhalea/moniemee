"use client"

import { useState } from "react"
import { addExpense } from "../lib/expenses"
import { Expense } from "../types/expense"

export function ExpenseForm({ onSaved }: { onSaved: () => void }) {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("Other")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const expense: Expense = {
      id: crypto.randomUUID(),
      description,
      amount: Number(amount),
      category,
      date,
    }
    addExpense(expense)
    onSaved()
    setDescription("")
    setAmount("")
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Description</label>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Amount</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Category</label>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Date</label>
          <input
            type="date"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Add expense
      </button>
    </form>
  )
}