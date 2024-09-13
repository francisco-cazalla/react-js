import { Box } from "@chakra-ui/react";
import NavBar from "../componentes/navBar";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default MainLayout;