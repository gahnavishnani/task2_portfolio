import myPhoto from "../assets/myphoto.jpg";
function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4 pt-24 space-y-6">
      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
        <img
          src={myPhoto}
          alt="Gahna Vishnani"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold">Gahna Vishnani</h1>
      <p className="text-lg text-green-400">Full Stack AI Web Developer</p>
    </div>
  );
}

export default Home;