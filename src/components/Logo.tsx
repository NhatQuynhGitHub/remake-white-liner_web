import Link from "next/link";
import Image from "next/image";

export default function Logo({ width, height }) {
  return (
    <div>
      <Link href="/">
        <Image
          className="logo"
          alt="Logo"
          src="/images/White_Linen_Headers_400_x_150_px_2.png"
          width={width}
          height={height}
        />
      </Link>
    </div>
  );
}
