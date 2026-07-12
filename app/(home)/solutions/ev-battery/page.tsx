import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/solutions-ev-battery.json";

export default function EvBatteryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BlockRenderer blocks={data} />
    </div>
  );
}
