import { createFileRoute, Link } from "@tanstack/react-router"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const Route = createFileRoute("/_base/surveys/")({
  component: PostsListPage,
  pendingComponent: () => (
    <>
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
    </>
  ),
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      description: `Description ${i + 1}`,
    }))
  },
})

function PostsListPage() {
  return (
    <Card asChild>
      <Link
        to="/surveys/$surveyId"
        params={{
          surveyId: 1,
        }}
      >
        <CardHeader>
          <CardTitle>Survey 1</CardTitle>
          <CardDescription>Survey 2</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}
