import Announcements from "@/components/Announcements";
import { AttendanceChart } from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
	return (
		<div className="p-4 gap-4 flex flex-col md:flex-row">
			{/* LEFT SIDE */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* Card section */}
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCard type="student" />
					<UserCard type="teacher" />
					<UserCard type="parent" />
					<UserCard type="staff" />
				</div>
				{/* MIDDLE CHAETS */}
				<div className="flex gap-4 flex-col lg:flex-row  ">
					{/* COUNT CHART */}
					<div className="w-full lg:w-1/3 h-[450px]">
						<CountChart />
					</div>
					{/* ATTENDANCE CHART */}
					<div className="w-full lg:w-2/3 h-[450px]">
						<AttendanceChart />
					</div>
				</div>
				{/* BOTTOM CHARTS */}
				<div className="w-full h-[500px]">
					<FinanceChart />
				</div>
			</div>
			{/* REIGHT SIDE */}
			<div className="w-full lg:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	);
};

export default AdminPage;
