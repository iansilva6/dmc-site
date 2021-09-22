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
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5571991977966" target={"_blank"} rel={"noreferrer"}>
                    <FaWhatsapp
                        size={28}
                    />
                </a>
            </Item>
            <Item>
                <a href="https://www.instagram.com/duartematoscarvalho/" target={"_blank"} rel={"noreferrer"}>
                    <FaInstagram
                        size={28}
                    />
                </a>
            </Item>
            <Item>
                <a href="https://www.facebook.com/duartematoscarvalho/" target={"_blank"} rel={"noreferrer"}>
                    <FaFacebookF
                        size={22}
                    />
                </a>
            </Item>
            <Item>
                <a href="tel:+5571991977966" target={"_blank"} rel={"noreferrer"}>
                    <FaPhoneAlt
                        size={22}
                    />
                </a>
            </Item>
            <Item>
                <a href="mailto:duartematoscarvalhoadvogados@gmail.com" target={"_blank"} rel={"noreferrer"}>
                    <FiMail
                        size={28}
                    />
                </a>
            </Item>
        </Social>
    )
}

export default Banner;