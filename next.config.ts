import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Next.js blocks SVGs from the image optimizer by default (XSS
    // precaution, since an SVG can contain a <script> tag). Your hero
    // slider (hero2.svg, hero3.svg) and gallery category icons
    // (acne.svg, eczema.svg, etc.) all go through next/image, so without
    // this they fail to load entirely — that's the actual bug, not a
    // CSS/contrast issue.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;