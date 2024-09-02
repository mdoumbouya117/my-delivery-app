import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminDashboard from "./dashboard";
import ManageCouriers from "./manageCoursiers";
import OrdersDashboard from "./manageOrders";
import ManageRestaurants from "./manageRestaurants";

export default function Admin() {
  return (
    <Tabs defaultValue="dashboard" className="p-4 block">
      <TabsList>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="coursiers">Coursiers</TabsTrigger>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <AdminDashboard />
      </TabsContent>
      <TabsContent value="coursiers">
        <ManageCouriers />
      </TabsContent>
      <TabsContent value="orders">
        <OrdersDashboard />
      </TabsContent>
      <TabsContent value="restaurants">
        <ManageRestaurants />
      </TabsContent>
    </Tabs>
  );
}
