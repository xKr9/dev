export default function FeatureCard({ title, description, pills, link }) {
  return (
    <div className="rounded-lg flex">
      <div className="w-3/5 bg-primary"></div>
      <div className="w-2/5">
        <h4>Featured Project</h4>
        <h3>{title}</h3>
        <div className=""></div>
        <div className="flex"></div>
      </div>
    </div>
  );
}
