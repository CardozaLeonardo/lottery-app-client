import { useRouter } from "next/router";
import { useContext } from "react";
import { MainContext } from "../../context";
import SidebarOption from "../shared/SidebarOption";
import Spinner from "../shared/Spinner";
import Logo from "../shared/Logo";
import { AiOutlineDashboard, AiOutlineUserSwitch } from 'react-icons/ai';

const Sidebar = ({}) => {

    const { user } = useContext(MainContext);
    const router = useRouter();
    
    return (

        <div className="bg-bg2 w-sd px-4" >
            {
                user.email ? (
                    <div>
                        <Logo />

                        <div className="mt-12">

                            <div className="pt-10">

                            <SidebarOption action={() => router.push("/")} page="/">
                                <AiOutlineDashboard className="mr-2 text-xl" />
                                Dashboard
                            </SidebarOption>

                            <SidebarOption action={() => router.push("/users")} page="/users">
                                <AiOutlineUserSwitch className="mr-2 text-xl" />
                                Usuarios
                            </SidebarOption>

                            
                            </div>
                        </div>
                    </div>
                ): (
                    <div className="flex justify-center items-center h-full" >
                        <Spinner />
                    </div>
                )
            }
        </div>   
    )
}

export default Sidebar;