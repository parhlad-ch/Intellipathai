import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <MainProvider>

  {/* header area start */}
  {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

  {/* footer area start */}
  {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
