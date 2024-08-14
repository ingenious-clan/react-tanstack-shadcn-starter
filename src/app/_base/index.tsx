import { createFileRoute } from "@tanstack/react-router"

import { Seo } from "@/components/layout/seo"

export const Route = createFileRoute("/_base/")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="p-4">
      <Seo description="Survery App" />
      <h1>Home</h1>
    </div>
  )
}
