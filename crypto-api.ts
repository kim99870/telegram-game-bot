// Simple API to get cryptocurrency prices from Binance
export async function getBinancePrice() {
  try {
    // Fetch BTC price
    const btcResponse = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", {
      next: { revalidate: 0 }, // Don't cache
    })

    // Fetch ETH price
    const ethResponse = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT", {
      next: { revalidate: 0 }, // Don't cache
    })

    if (!btcResponse.ok || !ethResponse.ok) {
      return null
    }

    const btcData = await btcResponse.json()
    const ethData = await ethResponse.json()

    // Convert to Korean Won (approximate exchange rate)
    const usdToKrw = 1350 // Approximate exchange rate
    const btcPrice = Number.parseFloat(btcData.price) * usdToKrw
    const ethPrice = Number.parseFloat(ethData.price) * usdToKrw

    return {
      btcPrice,
      ethPrice,
    }
  } catch (error) {
    console.error("Error fetching crypto prices:", error)
    return null
  }
}
