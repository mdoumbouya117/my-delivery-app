"use client";

import Footer from "@/components/Footer";
import RestaurantList from "@/components/RestaurantList";
import SendNotificationButton from "@/components/SendNotificationButton";
import useFcmToken from "@/hooks/useFcmToken";
import Payment from "./payment/page";

const Home = () => {
  const { token, notificationPermissionStatus } = useFcmToken();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
        {notificationPermissionStatus === "granted" ? (
          <p>Permission to receive notifications has been granted.</p>
        ) : notificationPermissionStatus !== null ? (
          <p>
            You have not granted permission to receive notifications. Please
            enable notifications in your browser settings.
          </p>
        ) : null}

        {token && <SendNotificationButton token={token} />}

        <Payment />

        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
