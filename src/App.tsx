import bg from './assets/hero2.jpg';
import Announcement from './components/Announcement';
import Events from './components/Events';
import FakeTimetable from './components/FakeTimetable';
import Timetable from './components/Timetable';

export default function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="relative w-screen h-screen overflow-hidden bg-gray-300 bg-cover bg-no-repeat bg-center"
    >
      {/* <img className="absolute -z-50 object-cover w-full h-full" src={bg} /> */}
      <main className="p-8 grid grid-cols-12 grid-rows-6 w-full h-full">
        <div className="row-span-2 col-span-5">
          <Announcement />
        </div>
        <div className="col-start-9 row-span-full col-span-4">
          <FakeTimetable />
          {/* <Timetable /> */}
        </div>
        <div className="row-start-5 row-span-2 col-span-5">
          <Events />
        </div>
      </main>
    </div>
  );
}
