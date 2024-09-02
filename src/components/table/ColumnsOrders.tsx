"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./TableRowActions";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./TableColumnHeader";
import { orderStatuses } from "@/shared/data/data";
import { formatCurrency } from "@/lib/currency";

type OrderItem = {
  itemName: string;
  quantity: number;
  price: number;
};

type OrderTable = {
  id: string;
  restaurantId: string;
  restaurantName: string;
  restaurantPhone: string;
  customerId: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  courierId: string;
  courierName: string;
  status: string;
  totalAmount: number;
  orderDate: string;
  deliveryDate: string;
  items: OrderItem[];
  paymentMethod: string;
  deliveryFee: number;
  rating: number;
};

export const columns: ColumnDef<OrderTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer name" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("customerName")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "customerPhone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Phone" />
    ),
    cell: ({ row }) => <>{row.getValue("customerPhone")}</>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "restaurantName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Restaurant Name" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("restaurantName")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Amount" />
    ),
    cell: ({ row }) => <>{formatCurrency(row.getValue("totalAmount"))}</>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "restaurantPhone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Restaurant Phone" />
    ),
    cell: ({ row }) => <>{row.getValue("restaurantPhone")}</>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = orderStatuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
