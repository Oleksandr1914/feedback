
import Image from "next/image"
import Logo from '../../assets/images/coffee-logo.png';

export const Header = () => {
    return <header className='relative'>
        <div className="w-screen mx-auto  mobile:w-[480px]  before:absolute before:top-full before:left-0 before:content-[''] before:w-screen before:h-px  before:bg-slate-950">
            <Image src={Logo} width={80} alt="logo" />
        </div>
    </header>

}