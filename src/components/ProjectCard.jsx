export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg border-sky-600">
      <img src={image} alt={title} className="w-full h-40 object-none" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <a href={link} target="_blank" className="text-black-500 underline text-sm">Github</a>
      </div>
    </div>
  );
}