import Image from "next/image";

export default function Navbar(): JSX.Element {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center">
      <div className="flex justify-around items-center w-full">
        <div className="flex justify-center w-full ml-20">
          <Image
            src="/images/logo_test.webp"
            width="100"
            height="100"
            alt="logo"
          />
        </div>
        <div className="flex justify-end mr-2">
          <Image
            src="/images/facebook.webp"
            width="40"
            height="40"
            alt="logo"
          />
          <Image src="/images/github.webp" width="40" height="40" alt="logo" />
          <Image
            src="/images/instagram.webp"
            width="40"
            height="40"
            alt="logo"
          />
        </div>
      </div>
      <div className="text-sm text-gray-500">
        Privacy | Terms et Conditions | Cookie Policy
      </div>
      <div className="text-xs text-gray-500">
        POWERED BY ON REWIND, AN EMG COMPANY
      </div>
    </div>
  );
}
