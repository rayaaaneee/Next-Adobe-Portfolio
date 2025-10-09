import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementData } from '@/components/home/adaptable-grid';

import bashImg from "~/img/home/programmation-languages/bash.png";

const devTools = [
    {
        name: "Bash",
        color: "#283037",
        icon: bashImg,
        link: "https://www.gnu.org/software/bash/"
    },
    // {
    //     name: "(Oh-My)ZSH",
    //     color: "#4d4d4d",
    //     //icon: "zsh", --- IGNORE ---
    //     link: "https://ohmyz.sh/"
    // }
] as AdaptableGridElementData[];

export type DevTools = DeepReadonly<typeof devTools>;

export default devTools as DevTools;