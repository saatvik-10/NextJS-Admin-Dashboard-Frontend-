import Navbar from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden w-[300px] pr-16 pt-14 md:block lg:pr-0">
          <Sidebar />
        </div>
        <div className="w-full p-5 pt-20 md:max-w-[1140px]">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
