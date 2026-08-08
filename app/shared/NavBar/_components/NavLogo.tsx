import Image from "next/image";

export default function NavLogo() {
  return (
    <div>
      <Image src={'/logo.png'} alt="talant dent logo" width={200} height={200} loading="eager"></Image>
    </div>
  )
}
