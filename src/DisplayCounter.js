import { useRecoilValue } from "recoil";
import { counterState } from "./counterState";

export const DisplayCounter = () => {
    const numberOfClicks = useRecoilValue(counterState);

    return (
        <h2>Number Of Clicks: {numberOfClicks}</h2>
    );
}
