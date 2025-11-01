import type { ITrack } from "@/types/track.types";
import { Heart } from "lucide-react";
import { TrackInfo } from "../ui/track-info/TrackInfo";
import { transformDuration } from "@/utils/transform-duration";
import { favoriteStore } from "@/store/favorite-store";
import { AddToPlaylist } from "./AddToPlaylist";

interface ITrackProps {
	track: ITrack;
}

export default function Track({ track }: ITrackProps) {
	return (
		<div className="border-b border-player-bg/50 py-7 flex justify-between items-center last:border-0">
			<TrackInfo
				title={track.name}
				subTitle={transformDuration(track.duration)}
				image={track.cover}
				track={track}
			/>
			<div className="flex items-center gap-4">
				<button
					onClick={() => {
						favoriteStore.toggleFavorite(track.name);
					}}
				>
					<Heart
						className="text-primary opacity-85 duration-300 hover:opacity-100"
						fill={favoriteStore.favoriteName.includes(track.name) ? "var(--color-primary)" : "none"}
					/>
				</button>
				<AddToPlaylist track={track} />
			</div>
		</div>
	);
}
