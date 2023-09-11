import bg from '../assets/hero.jpg';

export default function BackgroundImage() {
  return (
    <>
      <img
        className="fixed object-cover w-screen h-screen transition-opacity duration-1000"
        src={bg}
      />
    </>
  );
}
