import About from "../../components/about/About";
import SideBar from "../../components/sidebar/SideBar";
import Technologies from "../../components/technologies/Technologies";

export default function Home() {
  return (
    <div className="w-screen lg:px-10 flex justify-between max-w-screen-xl h-screen text-textDark">
      <div className="lg:w-1/2 z-50">
        <SideBar />
      </div>
      <main className="flex-1 pt-28 flex flex-col lg:w-1/2 gap-32">
        <About />
        <Technologies />
      </main>
    </div>
  );
}
