import type React from "react"

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",")

const isFocusable = (element: Element): element is HTMLElement => {
  if (!(element instanceof HTMLElement)) {
    return false
  }

  const style = window.getComputedStyle(element)
  return style.visibility !== "hidden" && style.display !== "none"
}

export const focusElementById = (id?: string) => {
  if (!id) {
    return
  }

  document.getElementById(id)?.focus()
}

export const focusPanelFromTrigger = (event: React.KeyboardEvent, panelId?: string) => {
  if (event.key !== "Tab" || event.shiftKey || !panelId) {
    return
  }

  const panel = document.getElementById(panelId)
  if (!panel) {
    return
  }

  event.preventDefault()
  panel.focus()
}

export const focusNextAfterTrigger = (triggerId?: string) => {
  if (!triggerId) {
    return
  }

  const trigger = document.getElementById(triggerId)
  if (!trigger) {
    return
  }

  const focusableElements = Array.from(document.querySelectorAll(focusableSelector)).filter(isFocusable)
  const triggerIndex = focusableElements.indexOf(trigger)
  const nextElement = focusableElements[triggerIndex + 1]

  nextElement?.focus()
}
