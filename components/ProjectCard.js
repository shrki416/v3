import Image from "next/image";

export default function ProjectCard({ title, link, imgUrl, number }) {
  return (
    <a href={link} className="w-full block shadow-2xl border-red-500 border-2">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            alt="avatar"
            layout="fill"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-red-500 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
}
