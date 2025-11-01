// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Play } from "lucide-react";
import "./App.css";
import { SearchField } from "./components/elements/search-field/SearchField";
import { TRACKS } from "./data/tracks.data";
import Track from "./components/elements/track-item/Track";
import { useQueryState } from "nuqs";
import { useMemo } from "react";
// import { musicPlayerStore } from "./store/store";

function App() {
	const [searchTerm, setSearchTerm] = useQueryState("q");

	const filteredTracks = useMemo(() => {
		if (!searchTerm) return TRACKS;

		return TRACKS.filter((track) => track.name.toLowerCase().includes(searchTerm.toLowerCase()));
	}, [searchTerm]);
	// const [count, setCount] = useState(0)

	return (
		<div>
			<SearchField value={searchTerm || ""} onChange={(e) => setSearchTerm(e.target.value)} />
			<div className="relative">
				<img src="banner.jpg" alt="banner" className="rounded-xl" />
				<div className="flex items-center justify-between absolute bottom-layout left-0 w-full px-layout">
					<div>
						<h1 className="text-2xl font-semibold mb-1 text-white">Daft Pank</h1>
						<h2 className="text-primary font-medium">6.8m listeners</h2>
					</div>
					<button className="rounded-full bg-linear-to-r from-[#2F3034] to-[#1F2026] p-5 border border-player-bg border-solid duration-300 hover:translate-y-0.5 hover:shadow">
						<Play className="text-primary" fill="var(--color-primary)" />
					</button>
				</div>
			</div>

			<div>
				{filteredTracks.map((track) => (
					<Track key={track.name} track={track} />
				))}
			</div>
		</div>
	);
}

export default App;
