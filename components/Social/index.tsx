import React from "react";
import { Social, Item } from './styles';
import {FaWhatsapp, FaInstagram, FaFacebookF} from 'react-icons/fa'

type Props = {

}

const Banner: React.FC<Props> = ({ }) => {
    return (
        <Social>
            <Item>
                <FaWhatsapp
                    size={28}
                />
            </Item>
            <Item>
                <FaInstagram
                    size={28}
                />
            </Item>
            <Item>
                <FaFacebookF
                    size={22}
                />
            </Item>
        </Social>
    )
}

export default Banner;