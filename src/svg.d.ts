declare module "*.svg" {
  import * as React from "react";

  // SVGR gives us this named export
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  // fallback for importing as a normal string path
  const src: string;
  export default src;
}
