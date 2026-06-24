export default function ServiceProcessCard({
  number,
  title,
}) {
  return (
    <div
      className="
        rounded-3xl

        bg-gradient-to-br
        from-purple-50
        to-sky-50

        p-6
      "
    >
      <div
        className="
          text-3xl
          font-bold
          text-purple-700
        "
      >
        {number}
      </div>

      <h3
        className="
          mt-4
          font-semibold
        "
      >
        {title}
      </h3>
    </div>
  );
}