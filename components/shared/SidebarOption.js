import { useRouter } from "next/router";

const SidebarOption = ({action, children, page}) => {

    const router = useRouter();
    const bgActive = page == router.pathname  ? 'bg-blue-900':'hover:bg-gray-500';

    return (
        <div onClick={() => action()} className={`flex py-3 px-2 text-gray-300 text-sm rounded-xl 
         cursor-pointer items-center delay-75 ${bgActive}`}>
            {children}
        </div>
    )
}

export default SidebarOption;