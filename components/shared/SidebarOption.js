
const SidebarOption = ({action, children, active}) => {

    const bgActive = active ? 'bg-blue-900':'';

    return (
        <div onClick={() => action()} className={`flex py-3 px-2 text-gray-300 text-sm rounded-xl 
        hover:bg-gray-500 cursor-pointer items-center delay-75 ${bgActive}`}>
            {children}
        </div>
    )
}

export default SidebarOption;