"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import Input from "../ui/input";
import Button from "../ui/button";

const DeviceFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "All");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    if (status && status !== "All") {
      params.set("status", status);
    } else {
      params.delete("status");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedSearch, status, pathname, router, searchParams]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search by name or IP..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant={status === "All" ? "primary" : "secondary"}
          onClick={() => setStatus("All")}
        >
          All
        </Button>
        <Button
          variant={status === "Online" ? "primary" : "secondary"}
          onClick={() => setStatus("Online")}
        >
          Online
        </Button>
        <Button
          variant={status === "Offline" ? "primary" : "secondary"}
          onClick={() => setStatus("Offline")}
        >
          Offline
        </Button>
      </div>
    </div>
  );
};

export default DeviceFilters;
