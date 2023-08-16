import { useEffect, useRef } from 'react';
import useSWR from 'swr';

export default function Events() {
  const test = useRef(0);

  const { data, error, isLoading, isValidating } = useSWR(
    // `${import.meta.env.VITE_API_URL}/events/public/today`,
    `${import.meta.env.VITE_API_URL}/events/public/-10`,
    {
      // refreshInterval: 60 * 60 * 1000, // 1h,
      refreshInterval: 3000,
    }
  );

  useEffect(() => {
    test.current = test.current + 1;
  });

  if (isLoading || isValidating) {
    return 'LOADING';
  }

  if (error) {
    return 'ERROR' + JSON.stringify(error);
  }

  return (
    <>
      {test.current}

      {data?.map((x: any) => {
        return (
          <div key={x.id}>
            {x.title} ~~~~~ {x.startDate ?? x.startDateTime}-{x.endDate ?? x.endDateTime}
          </div>
        );
      })}
    </>
  );
}
