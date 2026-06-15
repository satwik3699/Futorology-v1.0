"use client";

import { useMemo, useState } from "react";
import { solutions } from "@/lib/solutions";
import SolutionCard from "@/components/solutions/SolutionCard";
import SolutionFilters from "@/components/solutions/SolutionFilters";

export default function SolutionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return solutions.filter((solution) => {
      const matchesCategory =
        category === "All" ||
        solution.category === category;

      const matchesSearch =
        solution.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Solutions Marketplace
        </h1>

        <p className="text-gray-600 mt-2">
          Explore enterprise innovation solutions.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search solutions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl px-5 py-3"
      />

      <SolutionFilters
        selected={category}
        onSelect={setCategory}
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((solution) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
          />
        ))}
      </div>
    </div>
  );
}