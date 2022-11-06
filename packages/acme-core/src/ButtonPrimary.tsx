import * as React from "react"

export interface ButtonPrimaryProps {
  children: React.ReactNode
}

export function ButtonPrimary(props: ButtonPrimaryProps) {
  return (
    <button
      style={{
        backgroundColor: "blue",
      }}
    >
      {props.children}
    </button>
  )
}

ButtonPrimary.displayName = "ButtonPrimary"
