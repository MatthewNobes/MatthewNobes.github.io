import ResourceList from "./ResourceList";

const Title = () => <h1 className="PageTitle">Resources</h1>;

export const Resources = () => {
  return (
    <div>
      <Title />
      <div className="Main-Content">
        <p>
          Over the past few years I have built a collection of bookmarked sites
          that I have found useful. Here I have categorised them and provided
          the links, as well as archived links, in case the original
          distributor's of these links decides to withdraw their content.
        </p>
        <ResourceList />
      </div>
    </div>
  );
};
