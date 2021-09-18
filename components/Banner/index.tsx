import React from "react";
import Image from "next/image";
import { Button } from 'react-bootstrap';
import { Cover } from './styles';

type Props = {
    src: StaticImageData,
    alt?: string,
}

const Banner: React.FC<Props> = ({ src, alt }) => {
    return (
        <Cover>
            <Image id={"cover-img"} src={src} alt={alt} layout="responsive" />
        </Cover>
    )
}

export default Banner;