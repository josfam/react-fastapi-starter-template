import { createFileRoute } from '@tanstack/react-router'
import { PageTwo } from '@/pages/page-two'

export const Route = createFileRoute('/page-two')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageTwo />
}
