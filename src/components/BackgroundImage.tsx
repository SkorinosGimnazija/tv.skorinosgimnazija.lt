import { useEffect, useRef } from 'react';
import useSWR from 'swr';
import { minuteToMs } from '../utils/lib';

export default function BackgroundImage() {
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const visibleImg = useRef<HTMLImageElement>();

  const { data, error } = useSWR<AnnouncementDto[]>(`/school/public/random-image`, {
    refreshInterval: minuteToMs(45),
  });

  useEffect(() => {
    if (img1.current == null || img2.current == null || data == null || error) {
      return;
    }

    if (visibleImg.current === img1.current) {
      visibleImg.current = img2.current;
    } else {
      visibleImg.current = img1.current;
    }

    visibleImg.current.src = import.meta.env.VITE_STATIC_URL + '/' + data;
  }, [data, error]);

  const onImageLoad = () => {
    img1.current!.classList.toggle('opacity-0');
    img2.current!.classList.toggle('opacity-0');
  };

  return (
    <>
      <img
        ref={img1}
        onLoad={onImageLoad}
        className="opacity-0 absolute object-cover w-screen h-screen transition-opacity duration-1000"
      />
      <img
        ref={img2}
        onLoad={onImageLoad}
        className="absolute object-cover w-screen h-screen transition-opacity duration-1000"
      />
    </>
  );
}
