import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Events = {
	id: number;
	title: string;
	class: string;
	date: string;
	startTime: string;
	endTime: string;
};

const columns = [
	{
		header: "Title",
		accessor: "title",
	},
	{
		header: "Class",
		accessor: "class",
	},
	{
		header: "Date",
		accessor: "date",
		className: "hidden md:table-cell",
	},
	{
		header: "start Time",
		accessor: "startTime",
		className: "hidden md:table-cell",
	},
	{
		header: "End Time",
		accessor: "endTime",
		className: "hidden md:table-cell",
	},
	{
		header: "Actions",
		accessor: "action",
	},
];

const EventsListPage = () => {
	const renderRow = (item: Events) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
		>
			<td className="flex items-center gap-4 p-4">{item.title}</td>
			<td>{item.class}</td>
			<td className="hidden md:table-cell">{item.date}</td>
			<td className="hidden md:table-cell">{item.startTime}</td>
			<td className="hidden md:table-cell">{item.endTime}</td>

			<td>
				<div className="flex items-center gap-2">
					{role === "admin" && (
						<>
							<FormModal table="event" type="update" data={item} />
							<FormModal table="event" type="delete" id={item.id} />
						</>
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			{/* Top */}
			<div className="flex justify-between items-center">
				<h1 className="hidden md:block text-lg font-semibold">All Event</h1>
				<div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 ">
					<TableSearch />
					<div className="flex items-center gap-4 self-end">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
							<Image alt="" src="/filter.png" width={14} height={14}></Image>
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
							<Image alt="" src="/sort.png" width={14} height={14}></Image>
						</button>
						{role === "admin" && <FormModal table="event" type="create" />}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={eventsData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default EventsListPage;
