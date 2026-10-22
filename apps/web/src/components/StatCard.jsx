function StatCard({ titulo, valor, icon: Icon }) {
  return (
    <div className="rounded-[22px] bg-white p-5 shadow-[0_9px_25px_rgba(57,49,122,0.1)] transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{titulo}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight">{valor}</p>
        </div>

        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eeeaff] text-[#7665e8]">
          <Icon size={20} />
        </span>
      </div>
    </div>
  );
}

export default StatCard;
