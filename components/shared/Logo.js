import { useRouter } from "next/router";

const logoUrl = 'https://res.cloudinary.com/dgtemyvsk/image/upload/v1607231825/logo_lottery_app_pgxped.png';

const Logo = () => {

    const router = useRouter();

    return (
        <figure onClick={() => router.push('/')} className="w-full h-auto cursor-pointer" style={{height: '120px'}}>
            <img src={ logoUrl } alt="logo_image" className="w-full h-full object-cover" />
        </figure>
    )
}

export default Logo;