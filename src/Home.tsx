import { useEffect, useRef, useState } from "react";
import GoldenHorizontal from "./components/GoldenHorizontal";

export default function Home() {
    useEffect(() => {}, []);

    return (
        <div className="h-dvh bg-bg">
            <GoldenHorizontal
                className="h-dvh"
                top={<h1 className="text-primary text-h1 font-bold leading-[0.85] text-center">Keo Ponleou</h1>}
                bottom={<div className="text-primary text-h3 font-bold text-center">SOFTWARE DEVELOPER</div>}
            />
        </div>
    );
}
