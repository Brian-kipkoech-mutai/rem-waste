"use client"

import { Button } from "./ui/button"
import { Zap, Home, Building, Truck } from "lucide-react"

interface QuickFiltersProps {
  onQuickSelect: (size: number) => void
}

export default function QuickFilters({ onQuickSelect }: QuickFiltersProps) {
  const quickOptions = [
    { size: 4, label: "Small Projects", icon: Home, description: "Garden cleanup, small renovations" },
    { size: 8, label: "Medium Projects", icon: Building, description: "Kitchen/bathroom renovation" },
    { size: 12, label: "Large Projects", icon: Truck, description: "House clearance, major renovation" },
  ]

  return (
    <div className="bg-background border border-border rounded-xl p-4 shadow-sm mb-6">
      <h3 className="font-medium text-foreground mb-3 flex items-center">
        <Zap className="h-4 w-4 mr-2" />
        Quick Selection
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {quickOptions.map((option) => (
          <Button
            key={option.size}
            variant="outline"
            onClick={() => onQuickSelect(option.size)}
            className="h-auto p-4 flex flex-col items-start text-left hover:bg-accent"
          >
            <div className="flex items-center mb-2">
              <option.icon className="h-5 w-5 mr-2 text-primary" />
              <span className="font-medium">{option.size} Yard Skip</span>
            </div>
            <div className="text-xs text-muted-foreground">{option.description}</div>
          </Button>
        ))}
      </div>
    </div>
  )
}
