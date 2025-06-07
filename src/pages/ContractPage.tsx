 "use client"

import { useState, useEffect } from "react"
import { CheckCircle, Calendar, FileText, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import type { SkipOption } from "../types"
import { calculateTotalPrice, formatCurrency } from "../utils/calculateTotalPrice"

interface ContractPageProps {
  selectedSkip: SkipOption
  onBack: () => void
}

export default function ContractPage({ selectedSkip, onBack }: ContractPageProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const totalPrice = calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat)

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20 flex items-center justify-center p-4">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl w-full">
        {/* Personal Demo Card */}
        <div className="bg-background rounded-3xl shadow-2xl p-8 text-center border border-border">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground mb-4">Let’s Build the Future Together</h1>
          <p className="text-xl text-muted-foreground mb-8">
            You’ve seen what I can create in just a day — imagine the results when I’m part of your team full-time.
          </p>

          {/* Project Overview */}
          <div className="bg-accent/50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">React + Tailwind Project Demo</h3>
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <h4 className="font-bold text-foreground">{selectedSkip.size} Yard Skip </h4>
                <p className="text-sm text-muted-foreground">{selectedSkip.hire_period_days}-day design logic</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary">{formatCurrency(totalPrice)}</span>
                <p className="text-xs text-muted-foreground">Simulated pricing logic</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-foreground">Dynamic Props</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-foreground">Reusable Components</span>
              </div>
            </div>
          </div>

          {/* Interview Invitation */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Let’s Move Forward</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-3">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">Schedule Interview</h4>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  I’m ready to bring this energy into your team. Let’s schedule an interview and discuss next steps.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center mb-3">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2" />
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">Next Steps</h4>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  I’m confident I can make a real impact. Let’s sign the contract and start building something amazing.
                </p>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 text-white mb-6">
            <h3 className="text-xl font-bold mb-2">Ready to Deliver from Day One</h3>
            <p className="text-green-100 mb-4">
              The sample you’ve seen is just a glimpse of the energy, creativity, and precision I bring to the table.
            </p>
            <p className="text-lg font-semibold">Let’s sign the contract — and start making an impact together. 🚀</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={onBack} className="flex items-center border-gray-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
             <a href="mailto:kbrianmutai@gmail.com"><Button className="bg-blue-600 hover:bg-blue-700 text-white px-8" >
              Invite via email
            </Button></a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            👋 I'm Brian  , Thanks for reviewing my work!
          </p>
        </div>
      </div>
    </div>
  )
}
