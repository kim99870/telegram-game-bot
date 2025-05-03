import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowUpRight, Bitcoin, Monitor } from "lucide-react"

export default function Home() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12 bg-gradient-to-b from-gray-900 to-black">
      <Card className="w-full max-w-md border-green-500/20 bg-black/80 text-white">
        <CardHeader className="border-b border-green-500/20">
          <div className="flex items-center gap-2">
            <Bitcoin className="h-6 w-6 text-yellow-500" />
            <CardTitle className="text-green-400">BitMatch 베팅 게임</CardTitle>
          </div>
          <CardDescription className="text-gray-400">비트코인과 이더리움 가격 변동에 베팅하는 게임</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-gray-400">Bitcoin</div>
                <div className="text-xl font-bold text-green-400">₩97,490.04</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Round</div>
                <div className="text-xl font-bold text-yellow-400">120</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Ethereum</div>
                <div className="text-xl font-bold text-green-400">₩1,854.39</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-green-400">게임 특징:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  실시간 비트코인 및 이더리움 가격 추적
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  다양한 베팅 옵션 (BTC WIN, ETH WIN, TIE 등)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  120초마다 새로운 라운드 시작
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  가상 화폐로 안전하게 베팅
                </li>
              </ul>
            </div>

            <div className="pt-4 space-y-4">
              <Link href="/web-game">
                <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2">
                  웹 게임 시작하기
                  <Monitor className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="https://t.me/BitMaket_7bot" target="_blank">
                <Button
                  variant="outline"
                  className="w-full border-green-700 text-green-400 hover:bg-green-900/30 flex items-center justify-center gap-2"
                >
                  텔레그램에서 봇 시작하기
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
