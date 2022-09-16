import '../components.css';
import TopNav from './common/topnav';
import Buttons from './Home/buttons';
import logo from '../assets/logo.png'

function Home() {
  return (
    <div className="Home bg-slate-300 flex flex-col justify-center relative">
        <TopNav/>
        <div className="flex flex-col gap-5">
            <img src={logo} alt="Logo" className="h-52 w-52 m-auto mb-10" />
            <Buttons/>
        </div>
    </div>
  );
}

export default Home;
