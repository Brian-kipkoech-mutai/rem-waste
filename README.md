# Skip Hire Selection App

A modern, responsive React application for selecting skip hire sizes with a clean and intuitive user interface.
## 🔗 Live Demo

👉 [Visit Live Site](https://rem-waste-zeta.vercel.app/)

## 🚀 Features

- **Real Skip Data Integration**: Uses actual skip size data with pricing and restrictions
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Interactive Filtering**: Filter skips by road placement and heavy waste allowance
- **Visual Indicators**: Clear badges for restrictions and permissions
- **Price Calculation**: Automatic VAT calculation and display
- **Modern UI/UX**: Clean, card-based layout with subtle animations
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **pnpm** - Fast, disk space efficient package manager

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Brian-kipkoech-mutai/rem-waste.git
cd skip-hire-selection
\`\`\`

2. Install dependencies using pnpm:
\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
pnpm dev
\`\`\`

4. Open your browser and navigate to \`http://localhost:3000\`

## 🏗️ Build for Production

To create a production build:

\`\`\`bash
pnpm build
\`\`\`

To preview the production build:

\`\`\`bash
pnpm preview
\`\`\`

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

### 🎨 Theming Support
- Supports:
  - 🌞 Light Mode
  - 🌙 Dark Mode
  - 🖥️ System Preference Mode
- Theme is preserved using local storage or system preference.
- Toggle integrated into the UI for user control.

### 🧩 Modular Codebase
- Structured for scalability and clarity:

## 🎨 Design System

### Color Palette:
- **Primary Blue**: #2563eb (Blue-600)
- **Success Green**: #10b981 (Green-500)
- **Warning Amber**: #d97706 (Amber-600)
- **Background**: Gradient from blue-50 to green-50
- **Text**: Gray-900 for headings, Gray-600 for body text

### Typography:
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body Text**: Regular weight (400-500)

### Components:
- **Cards**: Rounded corners (rounded-2xl), subtle shadows
- **Buttons**: Rounded (rounded-xl), hover effects
- **Badges**: Pill-shaped indicators for skip sizes and restrictions

## 🔧 Data Structure

### Skip Option Interface:
\`\`\`typescript
interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
\`\`\`

## 🚀 Key Features Explained

 

### Skip Filtering
- Filter skips by road placement permission
- Filter by heavy waste allowance
- Clear visual feedback when no skips match filters
- Easy filter reset option

### Price Calculation
- Automatic VAT calculation based on provided rates
- Clear display of both pre-VAT and total prices
- Formatted currency display

### Restriction Indicators
- Visual badges for road placement restrictions
- Visual badges for heavy waste restrictions
- Tooltip explanations for restriction icons

### Interactive Selection
- Visual feedback with border highlighting and scaling effects
- Check mark indicators for selected items
- Smooth transitions and hover effects

### Mobile-First Design
- Touch-friendly interface elements
- Optimized button sizes for mobile interaction
- Responsive grid that adapts to screen size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/new-feature\`
3. Commit your changes: \`git commit -am 'Add new feature'\`
4. Push to the branch: \`git push origin feature/new-feature\`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License  

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
# remwaste
# remwaste
# remwaste
# rem-waste
