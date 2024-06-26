import ThemeToggler from "@/components/ThemeToggler";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-[100vh] items-center justify-center">
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
