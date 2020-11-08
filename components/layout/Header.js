import UserDropdown from '../shared/UserDropdown';

const Header = () => {

    return (
        <header className="flex justify-between items-center px-4 py-2">
            <h5>LotteryApp</h5>

            <UserDropdown />
        </header>
    )
}

export default Header;