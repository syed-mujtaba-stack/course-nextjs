import logo from "../../public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Row } from "./Layout";

export const Nav = () => {
  return (
    <Link href="https://booleanart.com" className='text-white bg-gradient-to-b from-gray-800 to-gray-900 p-4'>
      <Row gap={16} vAlign="center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <h1 className="text-3xl">
          <strong>Boolean</strong> <em>Art</em>
        </h1>
      </Row>
    </Link>
  );
};
