import Announcement from './components/Announcement';
import BackgroundImage from './components/BackgroundImage';
import Events from './components/Events';
import Timetable from './components/Timetable';

export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-300">
      <BackgroundImage />
      <main className="p-8 grid grid-cols-12 grid-rows-6 w-full h-full">
        <div className="row-span-2 col-span-5">
          <Announcement />
        </div>
        <div className="col-start-9 row-span-full col-span-4">
          <Timetable />
        </div>
        <div className="row-start-5 row-span-2 col-span-5">
          <Events />
        </div>
      </main>
    </div>
  );
}
