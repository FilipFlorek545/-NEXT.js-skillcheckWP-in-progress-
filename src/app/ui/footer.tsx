import Image from "next/image";
import Facebook from '../../../public/socials/fbIco.png'
import Instagram from "../../../public/socials/instagramIco.png"
import LinkedIn from '../../../public/socials/linkedInIco.png'
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <div>
                <h5>SOCIAL</h5>
                <div>
                    {SmBubble(Instagram)}
                    {SmBubble(Facebook)}
                    {SmBubble(LinkedIn)}
                </div>
            </div>
            <div>
                <p>CompanyName, @2024</p>
                <Link href="#">Privacy policy</Link>
            </div>
        </>
    )
}

function SmBubble (ico){
    return(
       <div>
           <Image src={ico} alt={ico} width={25} height={25}/>
       </div>
    )
}