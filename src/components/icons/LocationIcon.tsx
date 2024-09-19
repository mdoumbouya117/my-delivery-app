import { Fragment } from "react";
import { ComponentPropsWithoutRef } from "react";

const LocationIcon = (props: ComponentPropsWithoutRef<"svg">) => (
  <Fragment {...props}>
    <svg
      width="2"
      height="2"
      aria-hidden="true"
      fill="currentColor"
      className="mx-3 text-slate-300"
    >
      <circle cx="1" cy="1" r="1" />
    </svg>
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-1 text-slate-400 dark:text-slate-500"
      aria-hidden="true"
    >
      <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
      <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  </Fragment>
);

export default LocationIcon;
