import { Suspense, type ComponentType, type ReactNode } from "react";
import { Loader } from "../components/common/Loader";

export const PageSuspense = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<Loader size="large" />}>{children}</Suspense>
);

export const WithSuspense = ({ Component }: { Component: ComponentType }) => (
  <PageSuspense>
    <Component />
  </PageSuspense>
);

