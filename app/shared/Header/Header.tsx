import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
interface HeaderProps{
    h2:string,
    currentRoute:string,
    page:string

}
export default function Header({h2,currentRoute,page}:HeaderProps) {
  return (
    <div className="">
        <h2 className="text-2xl text-black dark:text-white"> {h2} </h2>
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink render={<a href="/" />}>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink render={<a href={`/${currentRoute}`} />}>
        {page}
      </BreadcrumbLink>
    </BreadcrumbItem>
   
  </BreadcrumbList>
</Breadcrumb>

    </div>
  )
}
