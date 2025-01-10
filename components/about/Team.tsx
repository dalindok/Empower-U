import React from "react";
import Dalin from "@/public/team/Dalin.jpg";
import sreyka from "@/public/team/sreyka.jpg";
import chantha from "@/public/team/chantha.jpg";
const Team = () => {
  const team = [
    {
      name: "Dok Dalin",
      role: "Team Leader",
      img: Dalin,
    },
    {
      name: "Sean Sreyka",
      role: "Content Creator",
      img: sreyka,
    },
    {
      name: "Chourn Chantha",
      role: "Software Developer",
      img: chantha,
    },
    {
      name: "Chea Lima",
      role: "Content Creator",
      img: sreyka,
    },
  ];
  return (
    <div className="text-center">
      <p className="text-2xl font-bold py-6">Our Team</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-28">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center w-full"
          >
            <img
              src={member.img.src}
              alt={member.name}
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
            <p className="text-2xl font-bold py-2">{member.name}</p>
            <p className="text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
