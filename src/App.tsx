import bg from './assets/hero.jpg';
import Announcement from './components/Announcement';
import Events from './components/Events';
import FakeTimetable from './components/FakeTimetable';

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img className="absolute -z-50 object-cover w-full h-full" src={bg} />
      <main className="p-8 grid grid-cols-12 grid-rows-6 w-full h-full">
        <div className="row-span-2 col-span-5">
          <Announcement />
        </div>
        <div className="col-start-9 row-span-full col-span-4">
          <FakeTimetable />
        </div>
        <div className="row-start-5 row-span-2 col-span-5">
          <Events />
        </div>
      </main>
    </div>
  );
}
