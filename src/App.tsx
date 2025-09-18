import Announcement from './components/Announcement';
import BackgroundImage from './components/BackgroundImage';
import Events from './components/Events';
import Timetable from './components/Timetable';
import defaultBg from './assets/hero.jpg';

export default function App() {
  return (
    <div
      style={{ backgroundImage: `url(${defaultBg})` }}
      className="h-screen w-screen bg-center bg-cover bg-no-repeat"
    >
      <BackgroundImage />
      <main className="p-8 grid grid-cols-12 grid-rows-6 w-full h-full">
        <div className="row-span-2 col-span-5">
          <Announcement />
        </div>
        <div className="col-start-8 row-span-full col-span-full">
          <Timetable />
        </div>
        <div className="row-start-5 row-span-2 col-span-5">
          <Events />
        </div>
      </main>
    </div>
  );
}
