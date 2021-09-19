import React from "react";
import { Section } from './styles';

type Props = {

}

const Map: React.FC<Props> = ({ }) => {
    return (
        <Section>
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=R.%20Alberto%20Fi%C3%BAsa,%2082%20&t=&z=15&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
        </Section>
    )
}

export default Map;