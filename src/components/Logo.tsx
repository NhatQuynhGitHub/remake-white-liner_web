import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number
  className?: string
}

export default function Logo({ width, height, className } : LogoProps) {
  return (
    <div>
      <Link href="/">
        <Image
          className={className}
          alt="Logo"
          src="/images/White_Linen_Headers_400_x_150_px_2.png"
          width={width}
          height={height}
        />
      </Link>
    </div>
  );
}
