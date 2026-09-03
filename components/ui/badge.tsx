interface BadgeProps {
  status: "Online" | "Offline" | "Warning";
}

const Badge = ({ status }: BadgeProps) => {
  const config = {
    Online: {
      color: "text-green-700 bg-green-50 ring-green-600/20",
      dot: "bg-green-500",
      label: "Online",
    },
    Offline: {
      color: "text-red-700 bg-red-50 ring-red-600/20",
      dot: "bg-red-500",
      label: "Offline",
    },
    Warning: {
      color: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
      dot: "bg-yellow-500",
      label: "Warning",
    },
  };

  const { color, dot, label } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`}></span>
      {label}
    </span>
  );
};

export default Badge;
