import { createFileRoute } from "@tanstack/react-router";
import { PageOne } from "@/pages/page-one";

export const Route = createFileRoute("/page-one")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageOne />;
}
