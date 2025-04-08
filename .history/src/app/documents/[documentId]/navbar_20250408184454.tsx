import Image from "next/image"

export const Navbar = () => {
    return (
        <nav>
            <Image src="/logo.svg" alt="Logo" width={36} height={36}/>
        </nav>
    );
};