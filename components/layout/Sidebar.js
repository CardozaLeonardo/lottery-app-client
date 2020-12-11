import { useRouter } from "next/router";
import { useContext } from "react";
import { MainContext } from "../../context";
import SidebarOption from "../shared/SidebarOption";
import Spinner from "../shared/Spinner";
import Logo from "../shared/Logo";
import { AiOutlineDashboard, AiOutlineUserSwitch, 
    AiOutlineHistory, AiOutlinePlayCircle, AiOutlineBarChart } from 'react-icons/ai';

const Sidebar = ({}) => {

    const { user } = useContext(MainContext);
    const router = useRouter();

    const redirectPage = (pathName) => {

        if(router.pathname != pathName) {
            window.location.replace(`.${pathName}`);
        }
    }
    
    return (

        <div className="bg-bg2 px-4 fixed inset-y-0 left-0" style={{width: '270px'}}>
            {
                user.email ? (
                    <div>
                        <Logo />

                        <div className="mt-6">

                            <div className="pt-8">

                            <SidebarOption action={() => redirectPage('/')} page="/">
                                <AiOutlineDashboard className="mr-2 text-xl" />
                                Dashboard
                            </SidebarOption>

                            { user.roles[0].name == 'Admin' &&
                                <SidebarOption action={() => redirectPage("/users")} page="/users">
                                    <AiOutlineUserSwitch className="mr-2 text-xl" />
                                    Usuarios
                                </SidebarOption>
                            }

                            {
                                user.roles[0].name == 'Player' &&
                                <SidebarOption action={() => redirectPage("/history")} page="/history">
                                    <AiOutlineHistory className="mr-2 text-xl" />
                                    Historial
                                </SidebarOption>
                            }

                            {
                                user.roles[0].name == 'Admin' &&
                                <SidebarOption action={() => redirectPage("/raffles")} page="/raffles">
                                    <AiOutlinePlayCircle className="mr-2 text-xl" />
                                    Sorteos
                                </SidebarOption>
                            }

                            {
                                user.roles[0].name == 'Admin' &&
                                <SidebarOption action={() => redirectPage("/winners")} page="/winners">
                                    <AiOutlineBarChart className="mr-2 text-xl" />
                                    Resultados
                                </SidebarOption>
                            }

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