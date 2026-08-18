import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Category } from "@/lib/ProductType";

interface PageNumber {
  pagePagination: number;
}

export default function ProductPagination({
  pagePagination,
}: PageNumber) {
  const previousPage = Math.max(pagePagination - 1, 1);
  const nextPage = pagePagination + 1;

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href={`/products?page=${previousPage}&limit=12`}
          />
        </PaginationItem>

        {/* Page 1 */}
        <PaginationItem>
          <PaginationLink
            href="/products?page=1&limit=12"
            isActive={pagePagination === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>

        {/* Page 2 */}
        <PaginationItem>
          <PaginationLink
            href="/products?page=2&limit=12"
            isActive={pagePagination === 2}
          >
            2
          </PaginationLink>
        </PaginationItem>

        {/* Page 3 */}
        <PaginationItem>
          <PaginationLink
            href="/products?page=3&limit=12"
            isActive={pagePagination === 3}
          >
            3
          </PaginationLink>
        </PaginationItem>
<PaginationItem>
          <PaginationLink
            href="/products?page=4&limit=12"
            isActive={pagePagination === 4}
          >
           4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="/products?page=5&limit=12"
            isActive={pagePagination === 5}
          >
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="/products?page=6&limit=12"
            isActive={pagePagination === 6}
          >
           6
          </PaginationLink>
        </PaginationItem>
        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href={`/products?page=${nextPage}&limit=12`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}