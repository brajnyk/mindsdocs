import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <div>
                <Link>
                <Image src="/logo.svg" alt="Logo" width={36} height={36}/>
                </Link>
            </div>
        </nav>
    );
};