import Card from './Card';
import OnScroll from '../utils/OnScroll';
import { tw } from 'twind';

const CardGroup = ({ data, internalMenu }) => {
  return (
    <OnScroll internalMenu={internalMenu} fade="animate-fadeIn">
      <div className={tw(`flex justify-center`)}>
        <div
          className={tw(
            `flex flex-col lg:flex-row lg:space-x-10 justify-center pt-16 mx-auto lg:mx-80 text-left max-w-7xl             
          `
          )}
        >
          {data.map((cardData, index) => {
            return <Card key={index} title={cardData.title} SVG={cardData.SVG} body={cardData.body} />;
          })}
        </div>
      </div>
    </OnScroll>
  );
};
export default CardGroup;
