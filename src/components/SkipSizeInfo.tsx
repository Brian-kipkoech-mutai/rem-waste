import { Info } from "lucide-react"

export default function SkipSizeInfo() {
  return (
    <div className="bg-blue-50 dark:bg-gray-200 dark:border-none border border-blue-100 rounded-xl p-4 mb-6">
      <div className="flex items-start">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Info className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-blue-800 mb-1">Skip Size Guide</h3>
          <p className="text-sm text-blue-700">
            Skip sizes are measured in cubic yards. A 4-yard skip is suitable for small home projects, while larger 10+
            yard skips are ideal for major renovations or commercial use.
          </p>
        </div>
      </div>
    </div>
  )
}
