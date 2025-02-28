import  React from "react"
import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardHeader } from "@/components/dashboard/header"

export default function DashboardLayout({children}){
  
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
       <div className="flex-1">
        {/* <DashboardHeader /> */}
        <main>{children}</main>
       </div>
     </div>
  )
}

