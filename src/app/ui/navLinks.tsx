import {linksList} from "@/app/lib/data";
import Link from "next/link";

export default function NavLinks() {
    const links = linksList()
    return (
        <div>
            {links.map((link) => {
                return(
                    <Link key={link.name} href={link.href}>
                        {link.name.toUpperCase()}
                    </Link>
                )}
            )}
        </div>
    )
}