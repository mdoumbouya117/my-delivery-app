export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?auto=compress&cs=tinysrgb&w=${width}&h=750&dpr=2&q=${
    quality || 75
  }`;
};
