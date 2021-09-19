import React from "react";
import Image from "next/image";
import { Cover } from './styles';

type Props = {
    srcDesktop: StaticImageData,
    srcMobile: StaticImageData,
    alt?: string,
}

const Banner: React.FC<Props> = ({ srcDesktop, srcMobile, alt }) => {
    return (
        <Cover>
            <Image
                className="hero__mobile-image"
                src={srcMobile}
                sizes="100vw"
                alt={alt}
                layout="fill"
                objectFit="cover" 
            />
            <Image
                className="hero__desktop-image"
                src={srcDesktop}
                sizes="80vw"
                alt={alt}
                layout="responsive"
                objectFit="cover"
            />
        </Cover>
    )
}

export default Banner;