import { Search } from "lucide-react";
import type { ChangeEvent } from "react";

interface ISearchFieldProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchField({ value, onChange }: ISearchFieldProps) {
	return (
		<div className="flex items-center gap-3 group">
			<Search className="opacity-40 group-focus-within:opacity-100 duration-300" />
			<input
				type="search"
				placeholder="Search for songs, artists, etc..."
				className="bg-transparent w-full"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
