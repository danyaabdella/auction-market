import { AuctionCard } from "@/components/auction-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const similarAuctions = [
  {
    id: "2",
    title: "Vintage Leica Camera",
    description: "Classic Leica M3 in excellent condition.",
    currentBid: 450,
    bids: 12,
    timeLeft: "1 day",
    imageUrl: "/placeholder.svg?height=300&width=400",
    seller: {
      name: "Classic Cameras",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    title: "Nikon F2 Photomic",
    description: "Professional 35mm film camera.",
    currentBid: 380,
    bids: 9,
    timeLeft: "3 days",
    imageUrl: "/placeholder.svg?height=300&width=400",
    seller: {
      name: "Vintage Photo",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "4",
    title: "Hasselblad 500C/M",
    description: "Medium format camera with 80mm lens.",
    currentBid: 890,
    bids: 15,
    timeLeft: "2 days",
    imageUrl: "/placeholder.svg?height=300&width=400",
    seller: {
      name: "Pro Gear",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export function SimilarAuctions({ currentAuctionId }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Auctions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {similarAuctions
            .filter((auction) => auction.id !== currentAuctionId)
            .map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

