// import useSWR from 'swr';

export default function Events() {
  return (
    <div className="flex flex-col gap-2 justify-end h-full">
      <div className="text-2xl bg-background shadow-lg rounded-lg p-2 border-l-8 border-l-green-500">
        <p>Matematikos PUPP (II srautas)</p>
        <p className="text-xl">Liepos 12 d. - Liepos 16 d.</p>
      </div>

      <div className="text-3xl bg-white bg-opacity-90 shadow-lg rounded-lg p-2 border-l-8 border-l-green-500">
        <p className="line-clamp-1">
          Netradicinė technologijų-biologijos pamoka-paskaita 7 A kl. „Valgymo sutrikimai:
          psichologinė perspektyva“ (Vilniaus visuomenės sveikatos biuro mobiliosios komandos
          iniciatyva)
        </p>
        <p className="text-2xl">11:45</p>
      </div>

      <div className="text-4xl bg-white bg-opacity-90 shadow-lg rounded-lg p-2 border-l-8 border-l-green-500">
        <p className="line-clamp-1">Gimnazijos tarybos posėdis</p>
        <p className="text-3xl">12:45</p>
      </div>
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
