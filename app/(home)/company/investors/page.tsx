import { redirect } from "next/navigation";

/**
 * Footer 链接 /company/investors → 重定向至已有的 /investors 页面
 * 避免维护两份相同内容
 */
export default function CompanyInvestorsRedirect() {
  redirect("/investors");
}
