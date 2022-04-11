import './Main.css';
import Greetings from '../Greetings/Greetings';
import Offer from '../Offer/Offer';
import Figma from '../Figma/Figma';
import Grade from '../Grade/Grade';
import Slider from '../Slider/Slider';
import Table from '../Table/Table';
import Done from '../Done/Done';

function Main() {
    return (
        <section className="main">
            <Greetings/>
            <Offer />
            <Figma />
            <Grade />
            <Slider />
            <Table />
            <Done />
        </section>
    );
}
export default Main;