import { Content } from "./Content.jsx"
import { Box } from "./Box.jsx";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100vw"
    }}
  >
    {children}
    <Content />
  </Box>
);
