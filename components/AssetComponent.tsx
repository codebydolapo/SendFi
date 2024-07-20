

function AssetComponent() {
    return (
        <div className={`w-full h-[4rem] min-h-[4rem] flex items-center justify-around border-b-[0.5px] border-[#0000003d] `}>
            <img alt="" src="/icons/ethereum.png" className={`w-7 h-7 rounded-full mx-2`} />
            <div className={`w-[25%] h-full flex items-center justify-start `}>
                <p className={`text-xs font-bold text-[#000000] capitalize tracking-widest px-2`}>Ethereum</p>
            </div>
            <div className={`w-[25%] h-full flex items-center justify-start`}>
                <p className={`text-xs font-bold text-[#000000] capitalize tracking-widest px-2`}>2.5</p>
            </div>
            <div className={`w-[25%] h-full flex items-center justify-start`}>
                <p className={`text-xs font-bold text-[#000000] capitalize tracking-widest px-2`}>$9232</p>
            </div>
            <div className={`w-[25%] h-full flex items-center justify-start`}>
                <p className={`text-xs font-bold text-[#e43a36] capitalize tracking-widest px-2`}>2%</p>
            </div>
        </div>
    )
}

export default AssetComponent
