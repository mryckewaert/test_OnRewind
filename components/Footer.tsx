import Image from "next/image";

export default function Navbar(): JSX.Element {
  return (
    <div className="bg-gray-900 border-gray-900">
      <div>
        <div>
          <Image
            src="/images/logo_test.webp"
            width="100"
            height="100"
            alt="logo"
          />
        </div>
        <div>
          <Image
            src="/images/facebook.webp"
            width="50"
            height="50"
            alt="logo"
          />
          <Image src="/images/github.webp" width="50" height="50" alt="logo" />
          <Image
            src="/images/instagram.webp"
            width="50"
            height="50"
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
