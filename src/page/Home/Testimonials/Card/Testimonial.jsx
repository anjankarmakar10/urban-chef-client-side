const Testimonial = ({ item }) => {
  return (
    <article className="bg-slate-600 text-center h-full text-white p-8 flex items-center justify-center flex-col gap-3 chef-hero">
      <q className="max-w-lg text-lg ">{item?.testimonial}</q>
      <p className="font-medium">{item?.author}</p>
    </article>
  );
};

export default Testimonial;
