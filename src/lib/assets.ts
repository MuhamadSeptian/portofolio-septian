import fs from "fs";
import path from "path";

// Mengecek apakah file ada di folder public (dipakai saat build agar tidak muncul gambar rusak).
export function publicFileExists(urlPath?: string): boolean {
  if (!urlPath) return false;
  return fs.existsSync(path.join(process.cwd(), "public", urlPath));
}
