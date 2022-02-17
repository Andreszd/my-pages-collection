export default function Tooltip({ text }) {
  return (
    <span className="absolute bg-slate-400 rounded bottom-0 left-0 translate-y-full text-xs text-white px-2 py-1 -translate-x-1/4">
      {text}
    </span>
  );
}
