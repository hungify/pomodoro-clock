/// <reference types="react-scripts" />
declare module "*.wav" {
  const src: string;
  export default src;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
