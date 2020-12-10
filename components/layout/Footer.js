import Logo from '../shared/Logo';

const Footer = () => {

    return (
        <footer className="bg-bg3 text-gray-400 px-4 py-2">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-200 text-opacity-50">&copy; lotteryapp.com</p>
                    <p className="text-gray-200">Derechos reservados. Universidad Centroamericana</p>
                </div>
                <div style={{width: '270px'}}>
                    <Logo />
                </div>
            </div>
        </footer>
    )
}

export default Footer;