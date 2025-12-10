"use client"
const Loader = () => {
  return (
    <div className="animate-pulse">
     

      {/* search */}
      <div className="mx-auto w-4/5 -mt-10 bg-white p-6 rounded-xl shadow">
        <div className="h-14 bg-slate-300 rounded-lg"></div>
      </div>

      {/*  title */}
      <div className="px-10 py-8 space-y-3">
        <div className="h-6 w-1/2 bg-slate-300 rounded"></div>
        <div className="h-4 w-3/5 bg-slate-300 rounded"></div>
      </div>

      {/* course cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 shadow rounded-xl space-y-3">
            <div className="h-40 bg-slate-300 rounded-lg"></div>
            <div className="h-5 w-3/4 bg-slate-300 rounded-lg"></div>
            <div className="h-4 w-full bg-slate-300 rounded-lg"></div>
            <div className="h-4 w-[90%] bg-slate-300 rounded-lg"></div>
            <div className="h-10 w-28 bg-slate-300 rounded-lg mt-3"></div>
          </div>
        ))}
      </div>

      {/* testimonials */}
      <div className="h-80 bg-slate-300 w-full mt-16"></div>

      {/* instructors*/}
      <div className="px-10 py-10 space-y-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-6">
            <div className="h-40 w-40 bg-slate-300 rounded-full"></div>
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-slate-300 w-1/2 rounded"></div>
              <div className="h-4 bg-slate-300 w-3/5 rounded"></div>
              <div className="h-4 bg-slate-300 w-[90%] rounded"></div>
              <div className="h-4 bg-slate-300 w-[80%] rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
