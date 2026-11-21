/** @type {import('next').NextConfig} */
// output: "export" menghasilkan situs statis (folder "out") yang bisa di-hosting di mana saja.
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
