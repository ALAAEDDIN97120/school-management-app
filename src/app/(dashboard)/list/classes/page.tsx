import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Class = {
	id: number;
	name: string;
	capacity: number;
	grade: number;
	supervisor: string;
};

const columns = [
	{
		header: "Class Names",
		accessor: "clesses",
	},

	{
		header: "Capacity",
		accessor: "capacity",
		className: "hidden lg:table-cell",
	},
	{
		header: "Grade",
		accessor: "grade",
		className: "hidden lg:table-cell",
	},
	{
		header: "Supervisor",
		accessor: "supervisor",
		className: "hidden lg:table-cell",
	},
	{
		header: "Actions",
		accessor: "action",
	},
];

const ClassListListPage = () => {
	const renderRow = (item: Class) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
		>
			<td className="flex items-center gap-4 p-4">{item.name}</td>
			<td className="hidden md:table-cell">{item.capacity}</td>
			<td className="hidden md:table-cell">{item.grade}</td>
			<td className="hidden md:table-cell">{item.supervisor}</td>
			<td>
				<div className="flex items-center gap-2">
					{role === "admin" && (
						<>
							<FormModal table="class" type="update" data={item} />
							<FormModal table="class" type="delete" id={item.id} />
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
				<h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
				<div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 ">
					<TableSearch />
					<div className="flex items-center gap-4 self-end">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
							<Image alt="" src="/filter.png" width={14} height={14}></Image>
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
							<Image alt="" src="/sort.png" width={14} height={14}></Image>
						</button>
						{role === "admin" && <FormModal table="class" type="create" />}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={classesData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default ClassListListPage;
