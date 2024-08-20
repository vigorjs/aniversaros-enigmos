const TEAM = [
  {
    id: 1,
    imageUrl:
      "https://www.kemhan.go.id/wp-content/uploads/2019/10/tmp_6644-20191028_142938-770056681.jpg",
    name: "Dova",
    gitlink: "https://github.com/saydova",
  },
  {
    id: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/President_Abdurrahman_Wahid_-_Indonesia.jpg",
    name: "Nurdi",
    gitlink: "https://github.com/nurdiansyah15",
  },
  {
    id: 3,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/B._J._Habibie%2C_President_of_Indonesia_portrait.jpg",
    name: "Virgo",
    gitlink: "https://github.com/vigorjs",
  },
  {
    id: 4,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/220px-Joko_Widodo_2019_official_portrait.jpg",
    name: "Levi",
    gitlink: "https://github.com/leviis10",
  },
  {
    id: 5,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/President_Megawati_Sukarnoputri_-_Indonesia.jpg",
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
                  className="w-[100%] h-56 object-cover"
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
