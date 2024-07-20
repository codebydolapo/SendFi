import AssetComponent from "./AssetComponent"

function MarketComponent() {
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
                    <p className={`text-xs font-bold text-[#00000069] capitalize tracking-widest px-2`}>total value</p>
                </div>
                <div className={`w-[25%] h-full flex items-center justify-start`}>
                    <p className={`text-xs font-bold text-[#00000069] capitalize tracking-widest px-2`}>price movement</p>
                </div>
            </div>

            <div className={`w-full flex flex-col flex-1 overflow-y-scroll no-scrollbar`}>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
                <AssetComponent/>
            </div>
        </div>
    )
}

export default MarketComponent
