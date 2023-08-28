// import useSWR from 'swr';

export default function Events() {
  return (
    <div className="text-2xl flex gap-8">
      <p>Renginis 1</p>
      <p>Renginis 2</p>
      <p>Renginis 3</p>
      <p>Renginis 4</p>
      <p>Renginis 5</p>
      <p>Renginis 6</p>
      <p>Renginis 7</p>
    </div>
  );
  // TODO

  // const { data, error } = useSWR(`/events/public/today`, {
  //   refreshInterval: 5 * 60 * 1000, // 5min,
  // });

  // if (error) {
  //   return null;
  // }

  // return (
  //   <>
  //     {data?.map((x: any) => {
  //       return (
  //         <div key={x.id}>
  //           {x.title} ~~~~~ {x.startDate ?? x.startDateTime}-{x.endDate ?? x.endDateTime}
  //         </div>
  //       );
  //     })}
  //   </>
  // );
}
