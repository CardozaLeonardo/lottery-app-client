import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../../context';
import Dropdown from '../dropdown/Dropdown';
import DropdownItem from '../dropdown/DropdownItem';
import { deleteToken } from '../../util/cookie';
import { RiWindowsFill } from 'react-icons/ri';

const staticProfile =  'https://www.nicepng.com/png/detail/806-8061298_jacques-mestre-generic-male-profile.png';
const staticPlayerProfile = 'https://directionalfinance.com.au/wp-content/uploads/2015/11/generic-placeholder-person.png';

const UserDropdown = () => {

    const [show, setShow] = useState(false);
    const { user } = useContext(MainContext);
    const router = useRouter();

    const onItemClicked = () => {
        //setLayer(true);
        setShow(true);
    }

    const onLogoutClicked = () => {

        deleteToken();
        //router.replace('/login');
        window.location.replace('./login');
    }
    
    return (
        <div onClick={() => onItemClicked()} className="cursor-pointer relative" >
            <div className="flex items-center" >
                <div className="mr-2">
                    <p className="text-secondary font-bold text-sm" >{ user.username }</p>
                    <p className="text-gray-400 text-opacity-75 text-xs" >{ user.roles[0].name }</p>
                </div>
                <figure className="bg-white rounded-full p-px">
                    <img src={user && user.roles[0].name == 'Admin' ? staticProfile : staticPlayerProfile} 
                    className="h-10 w-10 rounded-full object-cover" alt="username" />
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