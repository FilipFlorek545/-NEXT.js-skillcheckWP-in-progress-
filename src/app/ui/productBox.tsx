import Image from "next/image";
import Link from "next/link";

export const ProductBox = ({name, description}) => {
    let hrefLink = name ? '/' + name : '#';
    return(
        <div className="product_wrapper">
            <Link href={hrefLink}>
                <div className="product_image_wrapper">
                    {/*<Image src={} alt={} />*/}
                </div>
                <div className="product_description">
                    <h3>{name ?? 'Another interesting idea'}</h3>
                    <p>{description ?? "Another interesting idea's description, that is full of details!"}</p>
                </div>
            </Link>
        </div>
    )
}