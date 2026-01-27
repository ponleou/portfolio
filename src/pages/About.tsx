import { useOutletContext } from "react-router";
import RevealOn from "../components/movement/RevealOn";
import WindowCard from "../components/WindowCard";
import profile from "../content/profile";
import type { HomeContextType } from "../types/home";

export default function About() {
    const { reveal } = useOutletContext<HomeContextType>();

    return (
        <div className="px-24 py-48 min-h-dvh" id="main">
            <RevealOn
                className="transition-opacity ease-out duration-500"
                preRevealClass="opacity-0"
                postRevealClass="opacity-100"
                on={reveal}
            >
                <div className="max-w-[1280px] mx-auto">
                    <WindowCard>
                        <div className="flex flex-col-reverse md:flex-row text-primary gap-24 overflow-hidden">
                            <div className="relative self-center md:self-auto text-ascii-sm w-[111ch]">
                                {`                                             +++=++ +++++
                                        -:-.::.::--:-: . ..::
                                      ..::..... ::.....: .... .:.
                                    : .......  .... ...::    :.. ...
                                 =. ......    .     .  ::.   .... :.:-
                                *.  .           .      .---:..      . ..
                                .                   -====-:.      ..::-
                             .                      :=+++++=::       :..
                                                    .:=+++++=-.        .
                                            ::.:::::::::=+=-: :::::::::-=
                                          .  ..  :.       +=...        :.-
                                        .:---:   .       =+-.           +
                             .           ---=-=          .=**:..  ..    .
                              .          .--=====.      :.-+**#+.....: ..
                                ...     .--======-----:-++==+++*--=*##*
                               =---..:. :------==++==--=------===++**
                                -=-:==-.:-------==+++++++++++***+++*#
                                 -+===--:-------=====++=--====**++++
                                 -==+=::---======+=::-..:---:-:=+++
                                - .     ..::---=======+=+=======+*++*
                                =.:...     ::---=======++=======+*+++
                                ::.....::. .::---=======+===+++++*++
                                ::.....+*###+ .:----===++====++*+++::==#
                                ::-----###%%####%+::--==========+-:-==:==+
                                :=---.:::+**+++*++**####-:-----:.  :--=+*++
                              -:::::::+++*+*+*****##**###%=--.- ..:=+*#=+*
                                ==--:::--+#**####*####**##%%*##%#%:...::*#-==
                            -:.:-::.     -====+++**##%####%#######%%*:-#==+==
                          --:-.-:.:::.::.:.-=:.==------=#*#%###%###%###=#=+-*=
                    ......:::..:  ..:.......+++##+:---:::-=+*#####%#%%%=-+=*-:=
                    :....:...  ....   .:.. . :=-===*+==*+====:=++****###-==-=+=+ :  .
                 ..      .........   .. .. ----=+**--==+==--:====+#*#:--=-=*+= :..#:
                 ....            ..          ----:---*###*+=----::::++:::=-=-++ ..+
                .                  ...              .......  ..:----: .:::-+:-=+ ..-
                ::::.....           . ......       .==----:-=====+++.-- .:.--=-+..::
             -::..:........             ..  .    =++++========++*+.:*- . :-=-.   :-:-
            -::-:...............             :....  +++++++=====++**.::=*#=..::= ...::.-::-:
         .:::...................              ....+++++++=====++**.:-+**#. .-. ..:::..::::::
        . ........................                =+++++++======+*#=-==***:: .....:::..::::::-
        . :.... . . ................               =++++++++====+*##=+:**##% ......:::....:::::.
       . .   .  . ................              =++++++++===+**#*=+%*=%*#:......:::....::::::-*
      ...      .     ...............             =+++++++++*+***%#=*#-=:+# ......:::.....:::::.:
    ....       .     .................          ==+++++=*+++++**%=+*%==#*#:.....::::.....::::.:-
    . .....       .     .................         +*+*****+++++*+*#==*##==+*%.. *=::::......:::.::
    .......   ..  .     .................        =*%*****++++**#*#=+##==**:+.....:::::.....:::. :.
    ........    ..  .     ..................      **##****++****++*%**+***+::-....:::::......::. :.
    :........   ...  .     ..................     *####**++*+*+****#**-+# -*-.-..::::::......:: ....
    ...........  .... .     ..................    +####*+++*+**++*###*:+*=#+..-...::::::.....:: ....
    ....................     .................   :+#####**+*******+##%:+=---#..*..::::::......: :...:
    ....   .. ..  .......     ................   -+*%####*********#####-=*-+*..=..:::::::.....:.:...:-
    *.....   .............      ...............   :*+*####*=*+++*****#%#-==+-  .:...::::::.....:.:....:
    .....       ...........     ...............   =+***###**+*+****#***#-:-::  .:-...:::::.....:.:....:
    ......      ...........      ..............   =+++++#####****++##+#%=..+   ..-...::::::....:.:...:::
    ......       ..........       .............   +#+**++####+**+*+*###*=--+    ..:...:::::....:......::
  .... ..      .........       .............   -*#++*++###**+**#-:*=#*:-*    ..-....-::::...:......:..:
  ..    ......  ........        .............  :*##++***#####+.=*:===**-+    ..::::.::::::..:........:::
  ..   .................         ............  .**##**+*+#*#+=+.*::*=+==*     ..::::::::::..:........::::
  ...... ....   ........         .............  **###++##=++=:*:*.:=+*=+     ....-.::::::::..........:...-
  ...      ..... .......           ...........  **##%#++=++*-:+:+--==**       ...:.:::::::::: ...........:
  ...     ...............            ..........  *##=%-=*+*+=--+-*==-==*        ...:::::::::::  ......::::-:
 ... ...               ..             .........  *+#=#=+*++*-+=*=*+=--**         ..-::::::::::   .....:::..::
 ....            ......                ..........+-+=+*++**+:#=+===+=+#*         ..:   :::::::              ::
 ..         ..  ....                    ..       -- =#% *+.* -=++===++*#:         ......::.:::        .:::....
 ..       ..............                .........  + ##% #=:==-==*=+++*+#:---     ........:  .:    ..:::......
..      ...:.....                         ....... =* %*# -=#:=.#-*+**-*+#*--:::=  . ..:....:...    ... ::.
.    .....                                 ...... +* # #  +.-=.%-*+====-#%-:-::--..  ..:...:...       :...:-..
........       .........                   ..... .+-.% #  +-#*.#.+++=+=+===-:=+-.     ..::..:.    ........:::::`}
                            </div>
                            <div className="text-base-ad no-ligatures">
                                <p>
                                    <span className="font-bold text-accent">Ponleou</span>@
                                    <span className="font-bold text-accent">Portfolio</span>
                                </p>
                                <p>-----------------</p>
                                <p>
                                    <span className="font-bold text-accent">Name</span>: {profile.first_name}{" "}
                                    {profile.last_name}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Role</span>: {profile.role}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Hobby</span>: {profile.hobby}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Status</span>: {profile.status}
                                </p>
                                <br />
                                <p>
                                    <span className="font-bold text-accent">Institution</span>: {profile.uni}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Degree</span>: {profile.degree}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Major</span>: {profile.major}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">WAM</span>: {profile.wam} (
                                    {profile.wam >= 80 && "HD"}
                                    {profile.wam >= 70 && profile.wam < 80 && "D"}
                                    {profile.wam >= 60 && profile.wam < 70 && "C"}
                                    {profile.wam >= 50 && profile.wam < 60 && "P"}
                                    {profile.wam < 50 && "N"})
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Graduate</span>:{" "}
                                    {profile.grad_date.toLocaleDateString("en-AU", { month: "long", year: "numeric" })}
                                    {new Date() < profile.grad_date && " (expected)"}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Location</span>: {profile.location_state},{" "}
                                    {profile.location_country}
                                </p>
                                <br />
                                <p>
                                    <span className="font-bold text-accent">Stack</span>: {profile.stack.join(", ")}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Experience</span>:{" "}
                                    {new Date().getFullYear() - profile.experience_start.getFullYear()} years
                                </p>
                                <p>
                                    <span className="font-bold text-accent">OS</span>: {profile.os} {profile.os_arch}{" "}
                                    (btw)
                                </p>
                                <p>
                                    <span className="font-bold text-accent">WM</span>: {profile.wm}
                                </p>
                                <p>
                                    <span className="font-bold text-accent">Dotfiles</span>:{" "}
                                    <a href={profile.dotfiles} target="_blank" className="underline hover:no-underline">
                                        {profile.dotfiles}
                                    </a>
                                </p>
                                <br />
                                <div className="flex">
                                    <span className="w-[3ch] h-[2em] bg-accent-40"></span>
                                    <span className="w-[3ch] h-[2em] bg-accent-60"></span>
                                    <span className="w-[3ch] h-[2em] bg-accent"></span>
                                    <span className="w-[3ch] h-[2em] bg-primary-40"></span>
                                    <span className="w-[3ch] h-[2em] bg-primary-60"></span>
                                    <span className="w-[3ch] h-[2em] bg-primary"></span>
                                </div>
                            </div>
                        </div>
                    </WindowCard>
                </div>
            </RevealOn>
        </div>
    );
}
