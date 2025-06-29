import { useEffect, useState } from "react";
import delay from "../functions/delay";
import type { RevealFunction } from "../functions/revealFunctions";

export default function RevealText({
    initialText = "",
    text,
    delayPerCallback,
    revealCallback,
    finishedCallback,
    startOn = true,
}: {
    initialText?: string;
    text: string;
    delayPerCallback: number;
    revealCallback: RevealFunction;
    finishedCallback?: (finished: boolean) => void;
    startOn?: boolean;
}) {
    const [textDisplay, setTextDisplay] = useState<string>(initialText);

    useEffect(() => {
        if (startOn) {
            let finished = false;
            let currentText = textDisplay;

            (async () => {
                while (!finished) {
                    if (currentText === "") {
                        await delay(delayPerCallback);
                    }

                    const [isFinished, returnText] = revealCallback(currentText, text);
                    finished = isFinished;
                    currentText = returnText;
                    setTextDisplay(currentText);

                    if (!finished) {
                        await delay(delayPerCallback);
                    }
                }
                if (finishedCallback) {
                    finishedCallback(true);
                }
            })();
        }
    }, [text, initialText, startOn]);

    return <p className={`h-[1lh]`}>{textDisplay}</p>;
}
