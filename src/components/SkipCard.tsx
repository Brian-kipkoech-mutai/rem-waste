
import { Check, Ban } from "lucide-react"
import type { SkipOption } from "../types"
import { calculateTotalPrice, formatCurrency } from "../utils/calculateTotalPrice"

interface SkipCardProps {
  skip: SkipOption
  isSelected: boolean
  onSelect: (skip: SkipOption) => void
}

export default function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat)

  return (
    <div
      onClick={() => onSelect(skip)}
      className={`relative bg-background hover:cursor-pointer rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${isSelected ? "border-2 border-blue-500" : "border border-gray-200  dark:border-none hover:border-gray-300 dark:bg-[#1C1C1C]"
        }`}
    >
      {/* Size Badge */}
      <div className="absolute top-4 right-4 z-5">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{skip.size} Yards</div>
      </div>

      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute top-4 left-4 z-5">
          <div className="bg-green-500 text-white p-2 rounded-full">
            <Check className="h-4 w-4" />
          </div>
        </div>
      )}

      {/* Skip Image */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/11521609/pexels-photo-11521609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt={`${skip.size} Yard Skip`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{skip.size} Yard Skip</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{skip.hire_period_days} day hire period</p>

        {/* Features */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 mr-2 text-green-500">
              {skip.allowed_on_road ? <Check className="h-4 w-4" /> : <Ban className="h-4 w-4 text-gray-400" />}
            </div>
            <span className={skip.allowed_on_road ? "text-gray-700 dark:text-gray-200" : "text-gray-400"}>
              {skip.allowed_on_road ? "Road placement allowed" : "No road placement"}
            </span>
          </div>

          <div className="flex items-center text-sm">
            <div className="w-4 h-4 mr-2 text-green-500">
              {skip.allows_heavy_waste ? <Check className="h-4 w-4" /> : <Ban className="h-4 w-4 text-gray-400" />}
            </div>
            <span className={skip.allows_heavy_waste ? "text-gray-700 dark:text-gray-200" : "text-gray-400"}>
              {skip.allows_heavy_waste ? "Heavy waste allowed" : "No heavy waste"}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(totalPrice)}</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">inc. VAT</span>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {formatCurrency(skip.price_before_vat)} + {skip.vat}% VAT
          </div>
        </div>

        {/* Select Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onSelect(skip)
          }}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${isSelected ? "bg-green-500 text-white hover:bg-green-600" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {isSelected ? (
            <span className="flex items-center justify-center">
              <Check className="h-5 w-5 mr-2" />
              Selected
            </span>
          ) : (
            <span className="flex items-center justify-center">Select This Skip</span>
          )}
        </button>
      </div>
    </div>
  )
}
