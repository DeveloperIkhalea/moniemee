const KEY = "moniemee.expenses"

export function loadExpenses(): string | null {
  if (typeof window === "undefined") return null
  return window.localStorage.getItem(KEY)
}

export function saveExpenses(value: string) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(KEY, value)
}