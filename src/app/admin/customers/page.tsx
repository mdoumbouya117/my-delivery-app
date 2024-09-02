import { columns } from "@/components/table/ColumnsCustomers";
import { DataTable } from "@/components/table/Table";
import { getCustomers } from "@/lib/api";

export default function Customers() {
  const customers = getCustomers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Customers</h1>
      <DataTable data={customers} columns={columns} />
    </div>
  );
}
