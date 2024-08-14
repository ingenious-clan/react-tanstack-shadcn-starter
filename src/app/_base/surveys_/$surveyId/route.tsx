import { createFileRoute, defer, Outlet } from "@tanstack/react-router"
import { z } from "zod"

import { fetchPost } from "@/queries/fetch-post"

export const Route = createFileRoute("/_base/surveys/$surveyId")({
  component: PostLayout,
  parseParams: (params) =>
    z.object({ surveyId: z.coerce.number().int() }).parse(params),
  loader: ({ params }) => {
    const post = fetchPost({ id: params.surveyId })
    return {
      post: defer(post),
    }
  },
})

function PostLayout() {
  return (
    <div className="w-full space-y-12">
      <header className="border-b bg-card py-12">
        <div className="container">
          <h1 className="text-3xl">Survey 1</h1>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
