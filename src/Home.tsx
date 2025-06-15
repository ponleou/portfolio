import { useEffect, useRef, useState } from "react";
import GoldenHorizontal from "./components/GoldenHorizontal";
import TextCycle from "./components/TextCycle";
import typewriter from "./functions/typewriter";

export default function Home() {
    useEffect(() => {}, []);

    return (
        <div className="h-dvh bg-bg">
            <GoldenHorizontal
                className="h-dvh"
                top={<h1 className="text-primary text-h1 font-extrabold leading-[0.85] text-center">Keo Ponleou</h1>}
                bottom={
                    <div className="text-primary text-h3 font-semibold text-center">
                        SOFTWARE DEVELOPER
                        <TextCycle
                            textArray={["React.js", "HTML"]}
                            changeTime={100}
                            pauseTime={1500}
                            callback={typewriter}
                        />
                    </div>
                }
            />
        </div>
    );
}
