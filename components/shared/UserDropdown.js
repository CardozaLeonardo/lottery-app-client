import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../../context';
import Dropdown from '../dropdown/Dropdown';
import DropdownItem from '../dropdown/DropdownItem';
import { deleteToken } from '../../util/cookie';

const staticProfile =  'https://res.cloudinary.com/dgtemyvsk/image/upload/v1601193741/leo_tzqgcm.jpg';

const UserDropdown = () => {

    const [show, setShow] = useState(false);
    const { user } = useContext(MainContext);
    const router = useRouter();

    const onItemClicked = () => {
        //setLayer(true);
        setShow(true);

        console.log("Clicked");
    }

    const onLogoutClicked = () => {

        deleteToken();
        router.replace('/login');
    }
    
    return (
        <div onClick={() => onItemClicked()} className="cursor-pointer relative" >
            <div className="flex items-center" >
                <div className="mr-2">
                    <p className="text-secondary font-bold text-sm" >{ user.username }</p>
                    <p className="text-gray-400 text-opacity-75 text-xs" >{ "Admin" }</p>
                </div>
                <figure className="bg-white rounded-full p-px">
                    <img src={staticProfile} className="h-10 w-10 rounded-full object-cover" alt="username" />
                </figure>
            </div>

            {
                show ? (
                    <Dropdown close={setShow}>
                        <DropdownItem term="Configuracion" callback={() => {}} />
                        <DropdownItem term="Salir" callback={onLogoutClicked} />
                    </Dropdown>
                ): null
            }
        </div>
    )
}

export default UserDropdown;