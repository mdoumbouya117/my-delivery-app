This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!--  -->

# List of customer statuses :

- Active
- Inactive
- Banned

# List of order statuses :

- Pending: The order has been placed but not yet confirmed by the restaurant.
- Confirmed: The restaurant has confirmed the order.
- Preparing: The restaurant is currently preparing the order.
- Ready for Pickup: The order is ready to be picked up by the customer or delivery driver.
- On the Way: The order is being delivered to the customer.
- Delivered: The order has been successfully delivered to the customer.
- Cancelled: The order has been cancelled, either by the customer or the restaurant.
- Refunded: The order has been refunded to the customer.
- Failed: The order failed due to payment or other issues.
- In Progress: The order is in the process of being prepared.
- Awaiting Payment: The order has been placed, but payment is pending.
- On Hold: The order is temporarily on hold, possibly due to issues with payment or other reasons.

# List of types of users

Here are some common types of users you can have on a delivery app:

1. **Customer/User**: The primary users who browse, order, and track deliveries.
2. **Restaurant Owner/Manager**: Manages restaurant listings, menu items, and incoming orders.
3. **Delivery Driver/Courier**: Handles the delivery of orders from restaurants to customers.
4. **Admin**: Manages the overall platform, including user management, monitoring orders, handling disputes, and platform maintenance.
