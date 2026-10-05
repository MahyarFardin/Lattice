export default function Shape({ className = '' }: { className?: string }) {
  return (
    <div className={`shape ${className}`} aria-hidden="true">
      <div className="shape-cube">
        {Array.from({ length: 6 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
    </div>
  )
}
