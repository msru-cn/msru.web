import type { ComponentType } from "react";

// bespoke components register here: key -> component. Empty initially, append as needed.
const CUSTOM: Record<string, ComponentType<Record<string, unknown>>> = {};

export function resolveCustom(key: string): ComponentType<Record<string, unknown>> | undefined {
  return CUSTOM[key];
}
