import ResourceList from "./ResourceList";

const Title = () => <h1 className="PageTitle">Resources</h1>;

export const Resources = () => {
  return (
    <div>
      <Title />
      <div className="Main-Content">
        <p>
          Over the past few years, I have built a collection of bookmarked sites
          that I have found useful. Here I have categorised them into groups and
          subgroups for various computing-related topics. This has mainly been
          created as a personal directory/reference guide for myself, negating
          the need for logging into every browser I use. However, this page is
          also public, in the event others wish to use this directory.
        </p>
        <p>
          Each resource contains its normal link, as well as an archive link.
          This uses the Wayback machine to show previously archived versions of
          this site. It has been included if the original distributor of this
          content decides to remove it.
        </p>
        <ResourceList />
      </div>
    </div>
  );
};
