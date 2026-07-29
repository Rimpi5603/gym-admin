function DashboardCard({ title, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-gray-400 text-sm font-semibold uppercase">
        {title}
      </h3>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}

export default DashboardCard;