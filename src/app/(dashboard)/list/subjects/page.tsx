import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Subjecte = {
	id: number;
	name: string;
	teachers: string[];
};

const columns = [
	{
		header: "Subject Name",
		accessor: "name",
	},
	{
		header: "Teachers",
		accessor: "teachers",
		className: "hidden md:table-cell",
	},

	{
		header: "Actions",
		accessor: "action",
	},
];

const SubjectListPage = () => {
	const renderRow = (item: Subjecte) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
		>
			<td className="flex items-center gap-4 p-4">{item.name}</td>
			<td className="hidden md:table-cell">{item.teachers.join(",")}</td>
			<td>
				<div className="flex items-center gap-2">
					{role === "admin" && (
						<>
							<FormModal table="subject" type="update" data={item} />
							<FormModal table="subject" type="delete" id={item.id} />
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
				<h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
				<div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 ">
					<TableSearch />
					<div className="flex items-center gap-4 self-end">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
							<Image alt="" src="/filter.png" width={14} height={14}></Image>
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
							<Image alt="" src="/sort.png" width={14} height={14}></Image>
						</button>
						{role === "admin" && <FormModal table="subject" type="create" />}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={subjectsData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default SubjectListPage;
