 "use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback } from "react";

export function ProductListControls() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(pathname + "?" + createQueryString("q", e.target.value));
  };

  const handleSort = (value: string) => {
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          className="pl-10"
          onChange={handleSearch}
          defaultValue={searchParams.get("q") || ""}
        />
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <span className="text-sm font-medium text-muted-foreground hidden sm:block">Sort by:</span>
        <Select onValueChange={handleSort} defaultValue={searchParams.get('sort') || 'relevance'}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating-desc">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
