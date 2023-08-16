import bgImage from './assets/bg.jpg';
import Events from './components/Events';
import Header from './components/Header';
import Timetable from './components/Timetable';

export default function App() {
  return (
    <div className="relative">
      <img src={bgImage} className="absolute -z-50" />
      <Header />
      <main className="p-4">
        <Timetable />
        <Events />
      </main>
    </div>
  );
}
