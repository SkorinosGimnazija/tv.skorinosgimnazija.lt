import bgImage from './assets/bg.jpg';
import Events from './components/Events';
import Header from './components/Header';

export default function App() {
  return (
    <div className="relative">
      <img src={bgImage} className="absolute -z-50" />
      <Header />
      <main>
        <Events />
      </main>
    </div>
  );
}
