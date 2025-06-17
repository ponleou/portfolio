export type RevealFunction = (current: string, target: string) => [boolean, string];

export const typewriter: RevealFunction = function (current: string, text: string): [boolean, string] {
    if (current === text) {
        return [true, current];
    }

    let isSubset = true;
    let returnString = current;

    for (let i = 0; i < returnString.length; i++) {
        if (i >= text.length) {
            isSubset = false;
            break;
        }

        if (returnString[i] === text[i]) {
            continue;
        } else {
            isSubset = false;
            break;
        }
    }

    if (isSubset) {
        returnString += text[returnString.length];
    } else {
        returnString = returnString.slice(0, -1);
    }

    return [returnString === text, returnString];
};
