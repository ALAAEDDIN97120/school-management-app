"use client";
import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 92, fill: "#C3EBFA" },
	{ name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
	return (
		<div className="p-4 rounded-md bg-white h-80 relative">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-semibold">Performance</h1>
				<Image alt="" src="/moreDark.png" width={16} height={16} />
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						dataKey="value"
						startAngle={180}
						endAngle={0}
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={70}
						fill="#8884d8"
						label
					/>
				</PieChart>
			</ResponsiveContainer>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
				<h1 className="text-3xl font-bold">9.2</h1>
				<p className="text-xm text-gray-300">10 max</p>
			</div>
			<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
				<h1 className="text-sm font-medium">1 st Semester - 2nd Semester</h1>
			</div>
		</div>
	);
};

export default Performance;
