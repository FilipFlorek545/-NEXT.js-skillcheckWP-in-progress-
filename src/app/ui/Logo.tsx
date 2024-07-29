import Image from "next/image";
import companyLogo from '../../../public/companyLogo.png'
import Link from "next/link";

export const CompanyLogo = () => {
    return(
        <Link href="/">
            <div className="logo_wrapper">
                <Image src="/companyLogo.png" alt="company" width={180} height={40}/>
            </div>
        </Link>
    )
}