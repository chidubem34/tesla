import logo from "@/assets/images/tesla_trademark.png";
import Image from "next/image";
import Link from "next/link";

export default function AppLogo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Link
        href="/"
        className="relative w-28 h-12 flex px-2 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
      >
        <Image
          src={logo}
          alt="Tesla Logo"
          width={100}
          height={100}
          className="h-full w-auto object-contain"
          priority
        />
      </Link>
    </div>
  );
}
