"use client";

import { sendNotification } from "@/lib/notification";
import { Button } from "@/components/ui/button";

type SendNotificationButton = {
  token: string;
  title?: string;
  message?: string;
  link?: string;
};

const SendNotificationButton = ({
  token,
  title = "Notification Title",
  message = "This is a test notification.",
  link = "https://example.com",
}: SendNotificationButton) => {
  const handleSendNotification = async () => {
    await sendNotification(token, title, message, link);
  };

  return (
    <Button className="mt-5" onClick={handleSendNotification}>
      Send Test Notification
    </Button>
  );
};

export default SendNotificationButton;
