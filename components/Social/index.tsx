import React from "react";
import { Social, Item } from './styles';
import {FaWhatsapp, FaInstagram, FaFacebookF, FaPhoneAlt} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

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
            <Item>
                <FaPhoneAlt
                    size={22}
                />
            </Item>
            <Item>
                <FiMail
                    size={28}
                />
            </Item>
        </Social>
    )
}

export default Banner;