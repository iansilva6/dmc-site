import React from "react";
import { Item } from './styles';
import {FaWhatsapp} from 'react-icons/fa'

type Props = {

}

const Whatsapp: React.FC<Props> = ({ }) => {
    return (
        <Item>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5571991977966" target={"_blank"} rel={"noreferrer"}>
                <FaWhatsapp
                    size={40}
                />
            </a>
        </Item>
    )
}

export default Whatsapp;