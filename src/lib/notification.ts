export const sendNotification = async (
  token: string,
  title?: string,
  message?: string,
  link?: string
) => {
  try {
    const response = await fetch("/api/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, title, message, link }),
    });

    if (!response.ok) {
      throw new Error("Failed to send notification");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Cast error to Error to access its message property
    const errorMessage =
      (error as Error).message || "An unknown error occurred";
    console.error("Error sending notification:", errorMessage);
    return { success: false, error: errorMessage };
  }
};
