import { Expense } from "../types/expense"
import { loadExpenses, saveExpenses } from "./storage"

export function getExpenses(): Expense[] {
  const stored = loadExpenses()
  if (!stored) return []
  try {
    return JSON.parse(stored) as Expense[]
  } catch {
    return []
  }
}

export function addExpense(expense: Expense) {
  const all = getExpenses()
  saveExpenses(JSON.stringify([expense, ...all]))
}