import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import DanceFilm from './DanceFilm';
import Offers from './Offers';
import Media from './Media';

const MainLayout = () => {
  return (
    <>
      <div id="player-bio">
        <PlayerBio />
      </div>
      <div id="dance-film">
        <DanceFilm />
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