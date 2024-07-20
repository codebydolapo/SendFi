import { ShoppingBagIcon } from "@heroicons/react/24/outline";


function SideBarItem({icon, title, selected}: any) {
    return (
        <div className={`w-full h-[12%] flex cursor-pointer`}>
            <div className={`w-[15%] h-full flex items-center justify-center`}>
                {icon}
            </div>
            <div className={`w-[85%] h-full flex items-center justify-start`}>
                <p className = {`text-base font-bold ${selected ? "text-[#a7f40c]" : "text-[#000000af]"}`}>{title}</p>
            </div>
        </div>
    );
}

export default SideBarItem;
