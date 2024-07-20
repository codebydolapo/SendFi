

function AssetComponent({asset, amount, price, change, icon}: any) {
    return (
        <div className={`w-full h-[5rem] min-h-[5rem] flex items-center justify-around border-b-[0.5px] border-[#0000003d] `}>
            <img alt="" src={icon} className={`w-7 h-7 rounded-full mx-2`} />
            <div className={`w-[25%] h-full flex items-center justify-start `}>
                <p className={`text-lg font-bold text-[#000000] capitalize px-2`}>{asset}</p>
            </div>
            <div className={`w-[25%] h-full flex items-center justify-start`}>
                <p className={`text-lg font-bold text-[#000000] capitalize px-2`}>{amount}</p>
            </div>
            <div className={`w-[25%] h-full flex items-center justify-start`}>
                <p className={`text-lg font-bold text-[#000000] capitalize px-2`}>{price}</p>
            </div>
            <div className={`w-[25%] h-full flex items-center justify-start`}>
                <p className={`text-lg font-bold text-[#000000] capitalize px-2`}>{change}</p>
            </div>
        </div>
    )
}

export default AssetComponent
