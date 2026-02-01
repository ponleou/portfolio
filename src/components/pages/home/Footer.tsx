import { typewriter } from "../../../functions/revealFunctions";
import Lined from "../../Lined";
import RevealText from "../../movement/RevealText";

export default function Footer({ revealNavigatorsFooter }: { revealNavigatorsFooter: boolean }) {
    return (
        <Lined
            cssColor="var(--color-primary)"
            enable={{ start: true }}
            lengthRem={10}
            gapRem={2.5}
            orientation="horizontal"
        >
            <RevealText
                initialText=""
                text="&copy; 2025-2026 KEO PONLEOU SOK. ALL RIGHTS RESERVED."
                revealCallback={typewriter}
                delayPerCallback={30}
                startOn={revealNavigatorsFooter}
                allowReset={true}
            ></RevealText>
        </Lined>
    );
}
