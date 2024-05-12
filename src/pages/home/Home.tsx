import About from "../../components/about/About";
import SideBar from "../../components/sidebar/SideBar";

export default function Home() {
  return (
    <div className="w-screen flex max-w-screen-xl bg-top-right h-screen text-textDark">
      <SideBar />
      <main className="px-4 flex-1 pt-28">
        <About />
      </main>
    </div>
  );
}
