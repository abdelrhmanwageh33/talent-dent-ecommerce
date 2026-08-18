import Image from "next/image";

export default function NavLogo() {
  return (
  <div className="flex justify-start items-start ">
  <Image
    src="/logo.png"
    alt="talant dent logo"
    width={200}
    height={200}
    loading="eager"
  />
</div>
  )
}
