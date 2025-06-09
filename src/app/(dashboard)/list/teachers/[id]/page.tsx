import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
	return (
		<div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
			{/* LIFT */}
			<div className="w-full xl:w-2/3">
				{/* TOP SECTION */}
				<div className="flex flex-col lg:flex-row gap-4">
					{/*=== USER INFO CARD ===*/}
					<div className="bg-Sky py-6 px-4 rounded-md flex-1 flex gap-4">
						{/* IMAGE USER  */}
						<div className="w-1/3">
							<Image
								src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
								alt=""
								width={144}
								height={144}
								className="w-36 h-36 rounded-full object-cover"
							/>
						</div>
						{/* INFO USER */}
						<div className=" felx flex-col justify-between gap-4 w-2/3">
							<div className="flex items-center gap-4">
								<h1 className="text-xl font-semibold">Dean Guerrero </h1>
								{role === "admin" && (
									<FormModal
										table="teacher"
										type="update"
										data={{
											id: 1,
											username: "deanguerrero",
											email: "deanguerrero@gmail.com",
											password: "password",
											firstName: "Dean",
											lastName: "Guerrero",
											phone: "+1 234 567 89",
											address: "1234 Main St, Anytown, USA",
											bloodType: "A+",
											dateOfBirth: "2000-01-01",
											sex: "male",
											img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
										}}
									/>
								)}
							</div>
							<p className="text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
							</p>
							<div className="flex justify-between items-center flex-wrap gap-2 text-xs font-medium">
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image alt="" src="/blood.png" width={14} height={14} />
									<span className="">A+</span>
								</div>
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image alt="" src="/date.png" width={14} height={14} />
									<span className="">January 2025</span>
								</div>
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image alt="" src="/mail.png" width={14} height={14} />
									<span className="">dean@gmail.com</span>
								</div>
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image alt="" src="/phone.png" width={14} height={14} />
									<span className="">+5 456 45 36</span>
								</div>
							</div>
						</div>
					</div>
					{/*=== SMALL CARD  ===*/}
					<div className="flex-1  flex gap-4 justify-between flex-wrap">
						{/* CARD */}
						<div className="bg-white flex  p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47.95%]">
							<Image
								alt=""
								src="/singleAttendance.png"
								width={24}
								height={24}
								className="w-6 h-6 "
							/>
							<div className="">
								<h1 className="text-xl font-semibold">90%</h1>
								<span className="text-sm text-gray-400">Attendance</span>
							</div>
						</div>
						{/* CARD */}
						<div className="bg-white flex  p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47.95%]">
							<Image
								alt=""
								src="/singleBranch.png"
								width={24}
								height={24}
								className="w-6 h-6 "
							/>
							<div className="">
								<h1 className="text-xl font-semibold">2</h1>
								<span className="text-sm text-gray-400">Branches</span>
							</div>
						</div>
						{/* CARD */}
						<div className="bg-white flex  p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47.95%]">
							<Image
								alt=""
								src="/singleLesson.png"
								width={24}
								height={24}
								className="w-6 h-6 "
							/>
							<div className="">
								<h1 className="text-xl font-semibold">6</h1>
								<span className="text-sm text-gray-400">Lessons</span>
							</div>
						</div>
						{/* CARD */}
						<div className="bg-white flex  p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47.95%]">
							<Image
								alt=""
								src="/singleClass.png"
								width={24}
								height={24}
								className="w-6 h-6 "
							/>
							<div className="">
								<h1 className="text-xl font-semibold">8</h1>
								<span className="text-sm text-gray-400">Classes</span>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM SECTION */}
				<div className="p-4 mt-4 bg-white rounded-md  h-[800px]">
					<h1 className="">Teacher&apos;s Schedule</h1>
					<BigCalendar />
				</div>
			</div>
			{/* REIGHT SECTION */}
			<div className="w-full xl:w-1/3   flex flex-col gap-4">
				{/*=== SHORTCUTS ===*/}
				<div className="bg-white rounded-md p-4">
					<h1 className="text-xl font-semibold">Shortcuts</h1>
					<div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
						<Link className="p-4 rounded-md bg-SkyLight   " href="/">
							Teacher&apos;s CLasses
						</Link>
						<Link className="p-4 rounded-md bg-PurpleLight " href="/">
							Teacher&apos;s Students
						</Link>
						<Link className="p-4 rounded-md bg-YellowLight " href="/">
							Teacher&apos;s Lessons
						</Link>
						<Link className="p-4 rounded-md  bg-pink-50  " href="/">
							Teacher&apos;s Exams
						</Link>
						<Link className="p-4 rounded-md bg-SkyLight " href="/">
							Teacher&apos;s Assignment
						</Link>
					</div>
				</div>
				<Performance />
				<Announcements />
			</div>
		</div>
	);
};

export default SingleTeacherPage;
