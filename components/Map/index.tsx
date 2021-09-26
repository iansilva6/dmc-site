import React from "react";
import { Section } from './styles';

type Props = {

}

const Map: React.FC<Props> = ({ }) => {
    return (
        <Section>
            <iframe title="DuarteMatos&Carvalho" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0513555929533!2d-38.432967485354865!3d-12.968565663261572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bd501019edf%3A0xd11b93633f00b86b!2sDuarteMatos%26Carvalho%20Advogados!5e0!3m2!1sen!2sus!4v1632094529142!5m2!1sen!2sus" width="100%" height="500" loading="lazy"></iframe>
        </Section>
    )
}

export default Map;