"use client"

import { useState } from "react"
import { ArrowUpDown, Filter } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export type SortOption = "size-asc" | "size-desc" | "price-asc" | "price-desc" | "none"

interface SkipFiltersProps {
  onFilterChange: (filters: {
    allowedOnRoad?: boolean
    allowsHeavyWaste?: boolean
  }) => void
  onSortChange: (sort: SortOption) => void
  currentSort: SortOption
}

export default function SkipFilters({ onFilterChange, onSortChange, currentSort }: SkipFiltersProps) {
  const [filters, setFilters] = useState({
    allowedOnRoad: false,
    allowsHeavyWaste: false,
  })

  const handleFilterChange = (filterName: string, value: boolean) => {
    const newFilters = {
      ...filters,
      [filterName]: value,
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const getSortLabel = (sort: SortOption) => {
    switch (sort) {
      case "size-asc":
        return "Size: Small to Large"
      case "size-desc":
        return "Size: Large to Small"
      case "price-asc":
        return "Price: Low to High"
      case "price-desc":
        return "Price: High to Low"
      default:
        return "Sort by"
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Filters */}
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3 flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter Options
          </h3>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.allowedOnRoad}
                onChange={(e) => handleFilterChange("allowedOnRoad", e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Road placement allowed</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.allowsHeavyWaste}
                onChange={(e) => handleFilterChange("allowsHeavyWaste", e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Heavy waste allowed</span>
            </label>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[180px] justify-between bg-white dark:bg-gray-800">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                {getSortLabel(currentSort)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSortChange("size-asc")}>Size: Small to Large</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange("size-desc")}>Size: Large to Small</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange("price-asc")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange("price-desc")}>Price: High to Low</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSortChange("none")}>Default Order</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
