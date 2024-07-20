import { useEffect, useState } from "react"
import AssetComponent from "./AssetComponent"

function MarketComponent() {

    interface CoinData{
        name?: string,
        btcPrice?: string,
        price?: string,
        change?: string,
        iconUrl?: string
    }

    const [coins, setCoins] = useState<CoinData[] | undefined>([])

    useEffect(() => {

        const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b9841e479cmshb7619c7b1c75221p111b03jsna08ee37f1d6e',
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
            }
        };

        (async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setCoins(result.data.coins[0])
                console.log(coins);
                console.log("hello")
            } catch (error) {
                console.error(error);
            }
            // console.log("hello")
        })()

    }, [])





    return (
        <div className={`w-full h-full flex flex-col justify-start`}>
            <div className={`w-full h-[4rem] flex items-center justify-end pl-12 `}>
                <div className={`w-[25%] h-full flex items-center justify-start `}>
                    <p className={`text-xs font-bold text-[#00000069] capitalize tracking-widest px-2`}>asset</p>
                </div>
                <div className={`w-[25%] h-full flex items-center justify-start`}>
                    <p className={`text-xs font-bold text-[#00000069] capitalize tracking-widest px-2`}>amount</p>
                </div>
                <div className={`w-[25%] h-full flex items-center justify-start`}>
                    <p className={`text-xs font-bold text-[#00000069] capitalize tracking-widest px-2`}>Price</p>
                </div>
                <div className={`w-[25%] h-full flex items-center justify-start`}>
                    <p className={`text-xs font-bold text-[#00000069] capitalize tracking-widest px-2`}>Change</p>
                </div>
            </div>

            <div className={`w-full flex flex-col flex-1 overflow-y-scroll no-scrollbar`}>
                <AssetComponent
                    asset={coins?.name}
                    amount={coins?.btcPrice}
                    price={coins?.price}
                    change={coins?.change}
                    icon={coins?.iconUrl}
                />

            </div>
        </div>
    )
}

export default MarketComponent
