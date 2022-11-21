import ResourceList from "./ResourceList";
import { PageTitle } from "../../Components";

export const Resources = () => {
	return (
		<div>
			<PageTitle titleText="Resources" />
			<div className="Main-Content">
				<p>
					Over the past few years, I have built a collection of bookmarked sites
					that I have found useful. Here I have categorised them into groups and
					subgroups for various computing-related topics. This has mainly been
					created as a personal directory/reference guide for myself, negating
					the need for logging into every browser I use. However, this page is
					also public, allowing others to use this directory.
				</p>
				<p>
					Each resource contains its normal link, as well as an archive link.
					This uses the{" "}
					<a
						href="https://archive.org/web/"
						rel="noreferrer"
						aria-label="Link to the Wayback machine archive"
					>
						Wayback Machine
					</a>{" "}
					to show previously archived versions of this site. It has been
					included in the event that the original distributor of this content
					decides to remove it.
				</p>
				<ResourceList />
			</div>
		</div>
	);
};
