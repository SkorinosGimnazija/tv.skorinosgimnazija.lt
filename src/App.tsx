import Events from './components/Events';
import FakeTimetable from './components/FakeTimetable';
import Header from './components/Header';

export default function App() {
  return (
    <div className="relative">
      <img className="absolute -z-50" />
      <Header />
      <main className="p-4">
        <div className="grid grid-cols-5 grid-rows-2">
          <FakeTimetable />
          <div className="row-span-2 flex flex-col justify-center items-center text-3xl">
            <p>1. 8:00 - 9:45</p>
            <p>2. 8:00 - 9:45</p>
            <p>3. 8:00 - 9:45</p>
            <p>4. 8:00 - 9:45</p>
            <p>5. 8:00 - 9:45</p>
            <p>6. 8:00 - 9:45</p>
            <p>7. 8:00 - 9:45</p>
          </div>
          <FakeTimetable />
        </div>
        <Events />
      </main>
    </div>
  );
}
