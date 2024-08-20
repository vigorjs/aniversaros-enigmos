const TEAM = [
  {
    id: 1,
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2023/05/26/pragos-little-krishna-1_169.png?w=620",
    name: "Dova",
    gitlink: "https://github.com/saydova",
  },
  {
    id: 2,
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2023/05/26/pragos-little-krishna-1_169.png?w=620",
    name: "Nurdi",
    gitlink: "https://github.com/nurdiansyah15",
  },
  {
    id: 3,
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2023/05/26/pragos-little-krishna-1_169.png?w=620",
    name: "Virgo",
    gitlink: "https://github.com/vigorjs",
  },
  {
    id: 4,
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2023/05/26/pragos-little-krishna-1_169.png?w=620",
    name: "Levi",
    gitlink: "https://github.com/leviis10",
  },
  {
    id: 5,
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2023/05/26/pragos-little-krishna-1_169.png?w=620",
    name: "Nabila",
    gitlink: "https://github.com/nabilasucisa",
  },
];

function OurTeam() {
  return (
    <div id="team" className="bg-[#00072D] scroll-mt-10">
      <div className="container mx-auto py-52 px-5 ">
        <div className="pb-10">
          <h1 className="text-center text-4xl font-bold text-[#FFFFFF] mb-10">
            Meet Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {TEAM.map((item, id) => (
            <a href={item.gitlink} target="_blank" key={id}>
              <div className="team-member text-center bg-[#FFFFFF] shadow-md rounded-sm transform transition-transform hover:scale-105 hover:shadow-1xl">
                <img
                  className="w-full h-56 object-cover"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="p-5">
                  <h4 className="text-2xl font-semibold text-[#000000]">
                    {item.name}
                  </h4>
                  <p className="text-[#ED1C24] font-medium mt-2">
                    {item.position}
                  </p>
                  <p className="text-[#000000] mt-4">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
