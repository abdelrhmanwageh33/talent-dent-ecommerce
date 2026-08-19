import Image from "next/image";

export default function NavLogo() {
  return (
  <div className="flex justify-start items-center ">
  <Image
    src="/logo.png"
    alt="talant dent logo"
    width={200}
    height={150}
    loading="eager"
  />
</div>
  )
}
