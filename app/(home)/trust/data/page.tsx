import { redirect } from "next/navigation";

/**
 * Layout 导航使用 /trust/data，实际内容在 /trust/data-residency
 */
export default function TrustDataRedirect() {
  redirect("/trust/data-residency");
}
