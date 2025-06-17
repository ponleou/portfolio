import { useEffect, useRef, useState } from "react";
import delay from "../functions/delay";
import RevealText from "./RevealText";
import type { RevealFunction } from "../functions/revealStyles";

export default function TextCycle({
    initialText = "",
    textArray,
    changeTime, // delay between change of each text character
    pauseTime, // delay time when text is completely transitioned
    revealCallback,
}: {
    initialText?: string;
    textArray: string[];
    changeTime: number;
    pauseTime: number;
    revealCallback: RevealFunction;
}) {
    let index = useRef<number>(0);
    const [currentText, setCurrentText] = useState<string>(initialText);
    const [nextText, setNextText] = useState<string>(textArray[index.current]);
    const [finished, setFinished] = useState<boolean>(false);

    const setCurrentFinished = (finished: boolean) => {
        setFinished(finished);
    };

    const goNextText = async () => {
        await delay(pauseTime);
        setCurrentText(nextText);
        index.current++;

        if (index.current >= textArray.length) {
            index.current = 0;
        }

        setNextText(textArray[index.current]);
    };

    useEffect(() => {
        (async () => {
            if (finished) {
                await goNextText();
                setFinished(false);
            }
        })();
    }, [finished]);

    return (
        <RevealText
            initialText={currentText}
            delayPerCallback={changeTime}
            text={nextText}
            revealCallback={revealCallback}
            finishedCallback={setCurrentFinished}
        ></RevealText>
    );
}
