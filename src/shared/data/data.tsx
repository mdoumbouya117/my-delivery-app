import {
  CheckCircleIcon,
  CircleIcon,
  XCircleIcon,
  TimerIcon,
  BikeIcon,
  BanIcon,
  CookingPotIcon,
} from "lucide-react";

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: CheckCircleIcon,
  },
  {
    value: "deactive",
    label: "Deactive",
    icon: CircleIcon,
  },
];

export const orderStatuses = [
  {
    value: "pending",
    label: "Pending",
    icon: TimerIcon,
  },
  {
    value: "confirmed",
    label: "Confirmed",
    icon: TimerIcon,
  },
  {
    value: "preparing",
    label: "Preparing",
    icon: CookingPotIcon,
  },
  {
    value: "ready for pickup",
    label: "Ready for pickup",
    icon: CheckCircleIcon,
  },
  {
    value: "on the way",
    label: "On the way",
    icon: BikeIcon,
  },
  {
    value: "delivered",
    label: "Delivered",
    icon: CheckCircleIcon,
  },
  {
    value: "cancelled",
    label: "Cancelled",
    icon: BanIcon,
  },
  {
    value: "refunded",
    label: "Refunded",
    icon: CheckCircleIcon,
  },
  {
    value: "failed",
    label: "Failed",
    icon: CheckCircleIcon,
  },
  {
    value: "in Progress",
    label: "In progress",
    icon: CheckCircleIcon,
  },
  {
    value: "awaiting Payment",
    label: "Awaiting payment",
    icon: CheckCircleIcon,
  },
  {
    value: "on Hold",
    label: "On hold",
    icon: CheckCircleIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircleIcon,
  },
];

export const customerStatuses = [
  {
    value: "active",
    label: "Active",
    icon: CheckCircleIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: CircleIcon,
  },
  {
    value: "banned",
    label: "Banned",
    icon: BanIcon,
  },
];

export const specialties = [
  { value: "african", label: "African" },
  { value: "american", label: "American" },
  { value: "chinese", label: "Chinese" },
  { value: "french", label: "French" },
  { value: "greek", label: "Greek" },
  { value: "indian", label: "Indian" },
  { value: "italian", label: "Italian" },
  { value: "japanese", label: "Japanese" },
  { value: "korean", label: "Korean" },
  { value: "lebanese", label: "Lebanese" },
  { value: "middleEastern", label: "Middle Eastern" },
  { value: "mediterranean", label: "Mediterranean" },
  { value: "mexican", label: "Mexican" },
  { value: "spanish", label: "Spanish" },
  { value: "thai", label: "Thai" },
  { value: "vietnamese", label: "Vietnamese" },
];
