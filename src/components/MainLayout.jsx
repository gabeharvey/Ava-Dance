import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import GolfFilm from './GolfFilm';
import Offers from './Offers';
import Media from './Media';

const MainLayout = () => {
  return (
    <>
      <div id="player-bio">
        <PlayerBio />
      </div>
      <div id="golf-film">
        <GolfFilm />
      </div>
      <div id="player-cards">
        <PlayerCards />
      </div>
      <div id="media">
        <Media />
      </div>
      <div id="offers">
        <Offers />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default MainLayout;