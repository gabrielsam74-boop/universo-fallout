import { Metric } from '@/lib/data';

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const isPositive = metric.change >= 0;
  
  return (
    <div className="terminal-border bg-vault-gray p-6 crt-effect">
      <h3 className="text-sm text-vault-green/70 mb-2">{metric.name}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-retro pip-boy-text">{metric.value}</span>
        <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(metric.change)}%
        </span>
      </div>
    </div>
  );
}
