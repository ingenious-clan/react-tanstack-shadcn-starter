import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

import { Seo } from "@/components/layout/seo"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchPost } from "@/queries/fetch-post"

export const Route = createFileRoute("/_base/surveys/$surveyId/")({
  parseParams: (params) =>
    z.object({ surveyId: z.coerce.number().int() }).parse(params),
  stringifyParams: ({ surveyId }) => ({ surveyId: `${surveyId}` }),
  loader: async ({ params }) => {
    const post = await fetchPost({ id: params.surveyId })
    return {
      post,
    }
  },
  component: PostPage,
  pendingComponent: () => (
    <>
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-2/3" />
    </>
  ),
})

function PostPage() {
  return (
    <>
      <Seo title="Survey" />
      <article className="prose">Survey Description</article>
    </>
  )
}
