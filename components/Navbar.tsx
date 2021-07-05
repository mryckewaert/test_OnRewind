import Image from "next/image";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <div className="flex justify-around items-center bg-gray-900 border-gray-900 w-full z-50">
      <div className="flex justify-around items-center w-full">
        <Link href="/">
          <a>
            <Image
              src="/images/logo_test.webp"
              width="100"
              height="100"
              alt="logo"
            />
          </a>
        </Link>
        <Link href="/funzone">
          <a className="text-gray-500">FUN ZONE</a>
        </Link>
        <Link href="/testimonials">
          <a className="text-gray-500">TESTIMONIALS</a>
        </Link>
      </div>
      <div className="flex justify-around items-center w-6/12">
        <Image
          src="/images/search.webp"
          width="25"
          height="25"
          alt="research"
        />
        <div className="text-gray-500">Profile</div>
      </div>
    </div>
  );
}
