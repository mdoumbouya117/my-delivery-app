import { columns } from "@/components/table/ColumnsCouriers";
import { DataTable } from "@/components/table/Table";
import { getCouriers } from "@/lib/api";

export default function Couriers() {
  const couriers = getCouriers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Couriers</h1>
      <DataTable data={couriers} columns={columns} />
    </div>
  );
}
