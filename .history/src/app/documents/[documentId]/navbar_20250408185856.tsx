import Image from "next/image"
import Link from "next/link";

import { MenuBar } from "./menubar";
import { DocumentInput } from "./document-input";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
                   <Image src="/logo.svg" alt="Logo" width={36} height={36}/>
                </Link>
                <div className="flex flex-col">
                    <DocumentInput />
                    <MenuBar />
                    {}
                </div>
            </div>
        </nav>
    );
};
