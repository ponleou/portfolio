import { useEffect, useState } from "react";
import delay from "../functions/delay";
import type { RevealFunction } from "../functions/revealFunctions";

export default function RevealText({
    initialText = "",
    text,
    delayPerCallback,
    revealCallback,
    startOn = true,
    allowReset = false,
    finishedCallback,
    resetCallback = () => {},
}: {
    initialText?: string;
    text: string;
    delayPerCallback: number;
    revealCallback: RevealFunction;
    startOn?: boolean;
    allowReset?: boolean;
    finishedCallback?: (finished: boolean) => void;
    resetCallback?: (finished: boolean) => void;
}) {
    const [textDisplay, setTextDisplay] = useState<string>(initialText);

    useEffect(() => {
        let cancelled = false;
        const targetText = startOn ? text : allowReset ? initialText : textDisplay;

        if (textDisplay === targetText) return;

        let finished = false;
        let currentText = textDisplay;

        (async () => {
            while (!finished && !cancelled) {
                if (currentText === "") {
                    await delay(delayPerCallback);
                }

                const [isFinished, returnText] = revealCallback(currentText, targetText);
                finished = isFinished;
                currentText = returnText;
                setTextDisplay(currentText);

                if (!finished) {
                    await delay(delayPerCallback);
                }
            }

            if (!cancelled) {
                if (startOn && finishedCallback) {
                    finishedCallback(true);
                } else if (!startOn && allowReset && resetCallback) {
                    resetCallback(false);
                }
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [text, initialText, startOn]);

    return <p className={`h-lh`}>{textDisplay}</p>;
}
