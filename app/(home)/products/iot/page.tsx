import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/products-iot.json";

export default function IoTPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BlockRenderer blocks={data} />
    </div>
  );
}
