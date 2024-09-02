import { columns } from "@/components/table/ColumnsOrders";
import { DataTable } from "@/components/table/Table";
import { getOrders } from "@/lib/api";

export default function Orders() {
  const orders = getOrders();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <DataTable data={orders} columns={columns} />
    </div>
  );
}
