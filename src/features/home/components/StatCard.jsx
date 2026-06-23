export default function StatCard({
  stat,
}) {
  return (
    <div
      className="
        text-center
      "
    >
      <div
      className="
        text-5xl
        font-bold
      
        tracking-tight
      
        text-yellow-400
      
        drop-shadow-sm
      
        [text-shadow:0_0_25px_rgba(250,204,21,0.35)]
      
        lg:text-6xl
    "
    >
       {stat.value}
    </div>

      <p
        className="
          mt-3

          text-sm
          font-medium

          uppercase
          tracking-wider

          text-slate-300
        "
      >
        {stat.label}
      </p>
    </div>
  );
}