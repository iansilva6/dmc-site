import React from "react";
import { Item } from './styles';
import {FaWhatsapp} from 'react-icons/fa'

type Props = {

}

const Whatsapp: React.FC<Props> = ({ }) => {
    return (
        <Item>
            <FaWhatsapp
                size={40}
            />
        </Item>
    )
}

export default Whatsapp;