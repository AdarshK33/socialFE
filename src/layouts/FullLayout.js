import React, {
  Fragment,
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.secondary.dark, //use for layout
  [theme.breakpoints.up("lg")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);

  useEffect(() => {
    if (router.route == "/" || !router.route == "/login") {
      // console.log("called use efect route", isSidebarOpen);
      setSidebarOpen(false);
      setMobileSidebarOpen(false);
    } else {
      setSidebarOpen(true);
      setMobileSidebarOpen(true);
    }
  }, [router]);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  // console.log("called  route", isSidebarOpen, isMobileSidebarOpen);

  return (
    <MainWrapper>
      {router.route !== "/" && router.route !== "/login" && (
        <>
          <Header
            sx={{
              paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
              backgroundColor: "#fbfbfb",
            }}
            toggleMobileSidebar={() => setSidebarOpen(!isSidebarOpen)}
            moduleName={"NAME"}
          />

          <Sidebar
            isSidebarOpen={isSidebarOpen}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setSidebarOpen(!isSidebarOpen)}
          />
        </>
      )}
      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
            transform: isSidebarOpen && lgUp ? "265px" : "0",
            transition: "all 0.6s ease-in-out",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default React.memo(FullLayout);
