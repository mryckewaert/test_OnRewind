import Image from "next/image";

export default function Navbar(): JSX.Element {
  return (
    <div className="bg-gray-900 border-gray-900 fixed z-50">
      <div className="flex justify-around items-center">
        <Image
          src="/images/logo_test.webp"
          width="100"
          height="100"
          alt="logo"
        />
        <div className="text-gray-500">FUN ZONE</div>
        <div className="text-gray-500">TESTIMONIALS</div>
      </div>
      <div className="flex justify-around items-center">
        <Image
          src="/images/search.webp"
          width="50"
          height="50"
          alt="research"
        />
        <div className="text-gray-500">Profile</div>
      </div>
    </div>
  );
}
