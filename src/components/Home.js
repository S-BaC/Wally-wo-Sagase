import TopNav from './common/topnav';
import Buttons from './Home_buttons';
import logo from '../assets/logo.png'

function Home() {
  return (
        <div className="Home bg-slate-300">
            <img src={logo} alt="Logo" className="h-52 w-52 mb-10" />
            <Buttons/>
    </div>
  );
}

export default Home;
