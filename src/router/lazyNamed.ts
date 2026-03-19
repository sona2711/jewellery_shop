import { lazy, type ComponentType } from "react";

export const lazyNamed = (
  importer: () => Promise<Record<string, unknown>>,
  exportName: string,
) =>
  lazy(() =>
    importer().then((module) => ({
      default: module[exportName] as ComponentType,
    })),
  );