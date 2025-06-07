"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft, Truck } from "lucide-react"
import type { SkipOption } from "./types"
import SkipCard from "./components/SkipCard"
import SkipFilters, { type SortOption } from "./components/SkipFilters"
import SkipSizeInfo from "./components/SkipSizeInfo"
import QuickFilters from "./components/QuickFilters"
import ContractPage from "./pages/ContractPage"
import { ModeToggle } from "./components/mode-toggle"
import { calculateTotalPrice, formatCurrency } from "./utils/calculateTotalPrice"

// Skip data from the provided JSON
const skipData: SkipOption[] = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.813",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 375,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.171",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 400,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.339",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 439,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.516",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.69",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.876",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.434",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.603",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
]

function App() {
  const [selectedSkip, setSelectedSkip] = useState<SkipOption | null>()
  const [filteredSkips, setFilteredSkips] = useState<SkipOption[]>(skipData)
  const [currentPage, setCurrentPage] = useState<"selection" | "contract">("selection")
  const [sortOption, setSortOption] = useState<SortOption>("none")
  const [filters, setFilters] = useState({
    allowedOnRoad: false,
    allowsHeavyWaste: false,
  })

  // Apply filters and sorting when they change
  useEffect(() => {
    let result = [...skipData]

    // Apply filters
    if (filters.allowedOnRoad) {
      result = result.filter((skip) => skip.allowed_on_road)
    }

    if (filters.allowsHeavyWaste) {
      result = result.filter((skip) => skip.allows_heavy_waste)
    }

    // Apply sorting
    switch (sortOption) {
      case "size-asc":
        result = [...result].sort((a, b) => a.size - b.size)
        break
      case "size-desc":
        result = [...result].sort((a, b) => b.size - a.size)
        break
      case "price-asc":
        result = [...result].sort(
          (a, b) => calculateTotalPrice(a.price_before_vat, a.vat) - calculateTotalPrice(b.price_before_vat, b.vat),
        )
        break
      case "price-desc":
        result = [...result].sort(
          (a, b) => calculateTotalPrice(b.price_before_vat, b.vat) - calculateTotalPrice(a.price_before_vat, a.vat),
        )
        break
      default:
        // Keep original order
        break
    }

    setFilteredSkips(result)

    // If the selected skip doesn't match the filters, clear the selection
    if (
      selectedSkip &&
      ((filters.allowedOnRoad && !selectedSkip.allowed_on_road) ||
        (filters.allowsHeavyWaste && !selectedSkip.allows_heavy_waste))
    ) {
      setSelectedSkip(null)
    }
  }, [filters, sortOption, selectedSkip, skipData])

  const handleSkipSelect = (skip: SkipOption) => {
    setSelectedSkip(skip)
  }

  const handleQuickSelect = (size: number) => {
    const skip = skipData.find((s) => s.size === size)
    if (skip) {
      setSelectedSkip(skip)
      // Scroll to the selected skip
      setTimeout(() => {
        const element = document.getElementById(`skip-${skip.id}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }, 100)
    }
  }

  const handleFilterChange = (newFilters: {
    allowedOnRoad?: boolean
    allowsHeavyWaste?: boolean
  }) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }))
  }

  const handleSortChange = (sort: SortOption) => {
    setSortOption(sort)
  }

  const handleContinue = () => {
    if (selectedSkip) {
      setCurrentPage("contract")
    }
  }

  const handleBack = () => {
    setCurrentPage("selection")
  }

  if (currentPage === "contract" && selectedSkip) {
    return <ContractPage selectedSkip={selectedSkip} onBack={handleBack} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <div className="bg-background shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-1 ">
          <div className="flex justify-between items-start mb-6">
            <div></div>
            <ModeToggle />
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Truck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Choose Your Perfect Skip Size</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the skip size that best matches your project needs. All options include flexible{" "}
              {skipData[0]?.hire_period_days}-day hire periods.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info, Quick Filters, and Filters */}
        <div className="mb-8 space-y-6">
          <SkipSizeInfo />
          <QuickFilters onQuickSelect={handleQuickSelect} />
          <SkipFilters onFilterChange={handleFilterChange} onSortChange={handleSortChange} currentSort={sortOption} />
        </div>

        {/* Skip Options Grid */}
        {filteredSkips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkips.map((skip) => (
              <div key={skip.id} id={`skip-${skip.id}`}>
                <SkipCard skip={skip} isSelected={selectedSkip?.id === skip.id} onSelect={handleSkipSelect} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 text-center">
            <h3 className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-2">No skips match your filters</h3>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              Please adjust your filter criteria to see available skip options.
            </p>
            <button
              onClick={() => {
                setFilters({ allowedOnRoad: false, allowsHeavyWaste: false })
                setSortOption("none")
              }}
              className="px-4 py-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/70 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Selection Summary & Actions */}
      {selectedSkip && (
        <div className="bg-background border-t border-border shadow-lg sticky bottom-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Selected Skip Summary */}
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{selectedSkip.size} Yard Skip</h4>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrency(calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat))} •{" "}
                    {selectedSkip.hire_period_days} day hire
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedSkip(null)}
                  className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Clear Selection
                </button>
                <button
                  onClick={handleContinue}
                  className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  Continue
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Disclaimer */}
      <div className="bg-accent/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-muted-foreground text-center">
            Imagery and information shown throughout this website may not reflect the exact shape or size specification.
            Colours may vary, options and/or accessories may be featured at additional cost.
          </p>
          <p className="text-sm text-muted-foreground text-center mt-2">
            All prices include VAT at {skipData[0]?.vat}%. Delivery to {skipData[0]?.postcode} area.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
