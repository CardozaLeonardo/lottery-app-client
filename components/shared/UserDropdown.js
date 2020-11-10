const staticProfile =  'https://res.cloudinary.com/dgtemyvsk/image/upload/v1601193741/leo_tzqgcm.jpg';

const UserDropdown = () => {

    return (
        <div className="cursor-pointer relative" >
            <div className="flex items-center" >
                <div className="mr-2">
                    <p className="text-secondary font-bold text-sm" >The username</p>
                    <p className="text-gray-400 text-opacity-75 text-xs" >Admin</p>
                </div>
                <figure className="bg-white rounded-full p-px">
                    <img src={staticProfile} className="h-10 w-10 rounded-full object-cover" alt="username" />
                </figure>
            </div>
        </div>
    )
}

export default UserDropdown;