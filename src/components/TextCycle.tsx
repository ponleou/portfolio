import { useEffect, useState } from "react";
import delay from "../functions/delay";

export default function TextCycle({
    initialText = "",
    textArray,
    changeTime, // delay between change of each text character
    pauseTime, // delay time when text is completely transitioned
    callback,
}: {
    initialText?: string;
    textArray: string[];
    changeTime: number;
    pauseTime: number;
    callback: (current: string, target: string) => [boolean, string];
}) {
    const [textDisplay, setTextDisplay] = useState<string>(initialText);

    useEffect(() => {
        let index = 0;
        let finished = false;
        let currentText = textDisplay;

        (async () => {
            while (true) {
                const [isFinished, returnText] = callback(currentText, textArray[index]);
                finished = isFinished;
                currentText = returnText;
                setTextDisplay(currentText);

                if (finished) {
                    await delay(pauseTime);
                    index++;

                    if (index >= textArray.length) {
                        index = 0;
                    }
                } else {
                    await delay(changeTime);
                }
            }
        })();
    }, []);

    return <p>{textDisplay}</p>;
}
