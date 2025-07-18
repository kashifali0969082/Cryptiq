import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { TrendingUp } from 'lucide-react';

interface PortfolioItem {
  symbol: string;
  name: string;
  value: string;
  change: string;
  changeValue: string;
  isPositive: boolean;
}

interface PortfolioCardProps {
  portfolioData: PortfolioItem[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolioData }) => {
  const [timeframe, setTimeframe] = useState<'30m' | '1h' | '24h'>('1h');
  const [selectedSymbol, setSelectedSymbol] = useState<string>('BTC');
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [chart, setChart] = useState<any>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);

  const totalValue = '$27,540.30';
  const totalChange = '+$457.50';
  const totalChangePercent = '+1.69%';

  const availableTokens = [
    { symbol: 'BTC', name: 'Bitcoin', pair: 'BTC-USD' },
    { symbol: 'ETH', name: 'Ethereum', pair: 'ETH-USD' },
    { symbol: 'SOL', name: 'Solana', pair: 'SOL-USD' },
    { symbol: 'ADA', name: 'Cardano', pair: 'ADA-USD' },
  ];

  const timeframeMap = {
    '30m': { granularity: 600, span: 1800 },
    '1h': { granularity: 900, span: 3600 },
    '24h': { granularity: 1600, span: 86400 },
  };

  const fetchData = async () => {
    try {
      const { granularity, span } = timeframeMap[timeframe];
      const now = new Date();
      const end = now.toISOString();
      const start = new Date(now.getTime() - span * 1000).toISOString();

      const selectedToken = availableTokens.find(token => token.symbol === selectedSymbol);
      const pair = selectedToken?.pair || 'BTC-USD';

      const url = `https://api.exchange.coinbase.com/products/${pair}/candles?start=${start}&end=${end}&granularity=${granularity}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      const sorted = data.sort((a: number[], b: number[]) => a[0] - b[0]);
      const closePrices = sorted.map((candle: number[]) => candle[4]);
      const times = sorted.map((candle: number[]) => {
        const date = new Date(candle[0] * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      });

      setChartData(closePrices);
      setLabels(times);
    } catch (error) {
      console.error('Error fetching data:', error);
      setChartData([50000, 51000, 50500, 52000, 51500]);
      setLabels(['10:00', '10:15', '10:30', '10:45', '11:00']);
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeframe, selectedSymbol]);

  useEffect(() => {
    if (chart) chart.destroy();

    if (chartData.length > 0 && chartRef.current) {
    const options = {
  chart: {
    type: 'line',
    height: 200,
    toolbar: { show: false },
    background: 'transparent',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
    },
  },
  series: [{
    name: `${selectedSymbol} Price`,
    data: chartData,
  }],
  stroke: {
    curve: 'smooth',
    width: 3,
    colors: ['#10B981'], // RED
  },
  xaxis: {
    categories: labels,
    labels: {
      show: true,
      style: { colors: '#9CA3AF', fontSize: '10px' },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      show: true,
      style: { colors: '#9CA3AF', fontSize: '10px' },
      formatter: (value: number) => `${value.toFixed(0)}`
    },
  },
  grid: { 
    show: true,
    borderColor: '#374151', // subtle grid line color
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shade: 'dark',
  //     gradientToColors: ['#red'],
  //     shadeIntensity: 0,
  //     type: 'vertical',
  //     opacityFrom: 1,
  //     opacityTo: 1,
  //   },
  // },
};


      const newChart = new ApexCharts(chartRef.current, options);
      newChart.render();
      setChart(newChart);
    }

    return () => {
      if (chart) chart.destroy();
    };
  }, [chartData, labels, selectedSymbol]);

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-4 border border-gray-800/40">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">Portfolio</h3>
          <div className="text-3xl font-bold text-white mt-2">{totalValue}</div>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-green-400 text-sm font-medium">{totalChange}</span>
            <span className="text-green-400 text-sm">({totalChangePercent})</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={selectedSymbol}
            onChange={(e) => setSelectedSymbol(e.target.value)}
            className="bg-gray-800/50 rounded-xl px-3 py-2 border border-gray-700/30 text-white text-sm focus:outline-none"
          >
            {availableTokens.map(token => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol} - {token.name}
              </option>
            ))}
          </select>
          
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <button className="p-2 bg-green-500/20 rounded-xl hover:bg-green-500/30 transition-colors border border-green-500/20">
          <TrendingUp className="w-4 h-4 text-green-400" />
        </button>
        <div className="flex items-center space-x-4 ml-auto">
          {['30m', '1h', '24h'].map(t => (
            <button
              key={t}
              onClick={() => setTimeframe(t as '30m' | '1h' | '24h')}
              className={`text-sm px-3 py-1 rounded-lg transition-colors ${
                timeframe === t
                  ? 'text-white font-medium bg-green-500/20 border border-green-500/30'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-48 bg-gray-950/50 rounded-2xl p-4 border border-gray-800/30">
        <div ref={chartRef} id="crypto-chart" className="w-full h-full"></div>
      </div>

      <div className="mt-4 space-y-3">
        {portfolioData.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-800/20 rounded-xl border border-gray-700/20"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border border-gray-600/30">
                <span className="text-white text-xs font-bold">{item.symbol}</span>
              </div>
              <div>
                <div className="text-white text-sm font-medium">{item.name}</div>
                <div className="text-gray-400 text-xs">{item.value}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm font-medium ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {item.change}
              </div>
              <div className={`text-xs ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {item.changeValue}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;