import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
  {/* header is rendered by root layout */}

      {/* main content */}
      {children}
      {/* main content */}

  {/* footer is rendered by root layout */}

      {/* back to top */}
      <BackToTop/>
      {/* back to top */}
    </MainProvider>
  );
}
