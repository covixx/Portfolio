import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
type UsageData = {
  time: string;
  keypresses: number;
  mouseMovement: number;
  middleClicks: number;
  rightClicks: number;
  leftClicks: number;
};

const generateData = () => {
  const data: UsageData[] = [];
  const startTime = new Date(2024, 0, 1, 15, 0, 0); // Start at 3:00 PM
  for (let i = 0; i < 360; i += 15) { // 72 data points (every 15 minutes for 18 hours)
    const time = new Date(startTime.getTime() + i * 60000);
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      keypresses: Math.floor(Math.random() * 1000),
      mouseMovement: Math.floor(Math.random() * 400),
      middleClicks: Math.floor(Math.random() * 0),
      rightClicks: Math.floor(Math.random() * 50),
      leftClicks: Math.floor(Math.random() * 400)
    });
  }
  return data;
};

const data = generateData();

export default function Component() {
  return (
    <div className="bg-transparent text-[#d87d4a] mt-8 ">
        <h2 className="text-2xl text-[rgb(216,125,74)] mb-4">activity</h2>
      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="time" 
              stroke="#4ade80" 
              tick={{ fill: '#4ade80' }} 
              interval={11} // Show every 3 hours
            />
            <YAxis stroke="#4ade80" tick={{ fill: '#4ade80' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1c1c', border: '1px solid #333' }}
              labelStyle={{ color: '#4ade80' }}
              itemStyle={{ color: '#4ade80' }}
            />
            
            <Line type="monotone" dataKey="keypresses" stroke="#4ecdc4" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="mouseMovement" stroke="#f7b731" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="middleClicks" stroke="#fc5c65" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="rightClicks" stroke="#a55eea" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="leftClicks" stroke="#26de81" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  );
}