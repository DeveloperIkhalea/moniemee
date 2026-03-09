const BUDGET_KEY = "moniemee.budget"

export function getBudget(): number {
  if (typeof window === "undefined") return 0
  const raw = window.localStorage.getItem(BUDGET_KEY)
  const n = Number(raw)
  return Number.isFinite(n) ? n : 0
}

export function setBudget(value: number) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(BUDGET_KEY, String(value))
}