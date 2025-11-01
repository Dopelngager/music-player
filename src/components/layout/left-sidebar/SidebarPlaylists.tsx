import { playlistStore } from "@/store/playlist-store";
import { PagesConfig } from "@/config/pages.config";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Menu } from "./Menu";
import CustomMenu from "@/components/elements/ui/custom-menu/CustomMenu";

export function SidebarPlaylists() {
	const [value, setValue] = useState("");
	const [isShow, setIsShow] = useState(false);

	return (
		<Menu
			items={playlistStore.playlists.map((playlist) => ({
				name: playlist.name,
				link: PagesConfig.PLAYLIST(playlist.name)
			}))}
			title="Playlists"
		>
			<div className="relative">
				<button
					className="flex items-center gap-1.5 mt-5 bg-zinc-700/30 py-2 px-3.5 rounded-md  duration-300 transition-colors hover:bg-zinc-700/50"
					onClick={() => setIsShow((prev) => !prev)}
				>
					<Plus /> <span>New Playlist</span>
				</button>

				{isShow && (
					<CustomMenu side="left">
						<input
							autoFocus
							type="text"
							placeholder="Playlist name"
							value={value}
							onChange={(e) => setValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && value.trim()) {
									playlistStore.createPlaylist(value.trim());
									setValue("");
								}
							}}
							className="rounded-md px-3 py-2 w-full"
						/>
					</CustomMenu>
				)}
			</div>
		</Menu>
	);
}
