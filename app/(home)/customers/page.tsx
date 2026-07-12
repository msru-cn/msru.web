import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/customers.json";

export default function CustomersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BlockRenderer blocks={data} />
    </div>
  );
}
