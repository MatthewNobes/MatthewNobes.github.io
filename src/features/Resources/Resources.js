import ResourceList from "./ResourceList";

export const Resources = () => {
  return (
    <div className="Main-Content">
      <h1 className="PageTitle">Resources</h1>
      <p>
        Over the past few years I have built a collection of bookmarked sites{" "}
      </p>
      <ResourceList />
    </div>
  );
};
