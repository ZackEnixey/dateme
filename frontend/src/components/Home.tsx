import { useContext } from "react";
import { BasicContext } from "../context/BasicContext";
import ChooseRole from "./ChooseRole";
import Card from "./Card";
import DeckBar from "./DeckBar";
import AddCardIdea from "./AddCardIdea";
import Languages from "./Languages";
import Intro from "./Intro";

const Home = () => {
    const { counter, setCounter, isIntroRenderedState } = useContext(BasicContext);
    const increase = () => {
        setCounter(counter+1);
    };

    return (
        <div className="wrapper">
            {/* <Intro /> */}
            <ChooseRole />
            <Card />
            <DeckBar />
            <AddCardIdea />
            <Languages />
            
            {counter}
            <button onClick={increase}> + </button>
        </div>
    )
}

export default Home