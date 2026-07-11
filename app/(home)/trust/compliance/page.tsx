import { redirect } from "next/navigation";

/**
 * Layout 导航使用 /trust/compliance，实际内容在 /trust/compliance-matrix
 */
export default function TrustComplianceRedirect() {
  redirect("/trust/compliance-matrix");
}
