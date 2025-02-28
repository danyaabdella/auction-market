"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Box, Clock, Gavel, Home, Package, Settings, Users } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: BarChart3 },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Auctions", href: "/dashboard/auctions", icon: Gavel },
  { name: "Orders", href: "/dashboard/orders", icon: Box },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "History", href: "/dashboard/history", icon: Clock },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-muted/30">
      {/* <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">A</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent gradient-bg">AuctionHub</span>
        </Link>
      </div> */}
      <div className="flex-1 space-y-1 p-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 hover:text-primary",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </div>
      <div className="p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Back to Store
        </Link>
      </div>
    </div>
  )
}

