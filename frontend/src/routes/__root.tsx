import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

// import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";

import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh+200px)]">
      <Outlet />
      </div>
      {/* <TanStackRouterDevtools />
      <TanStackQueryLayout /> */}
    </div>
  ),
});
