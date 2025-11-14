import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * A custom hook to detect the current device view size based on MUI breakpoints.
 * @returns {object} An object containing boolean flags for isMobile, isTablet, and isDesktop.
 */
export function useDeviceType() {
  const theme = useTheme();

  // Mobile: screen size is less than the 'sm' breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Tablet: screen size is at least 'sm' but less than 'md'
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Desktop: screen size is 'md' or larger
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return { isMobile, isTablet, isDesktop };
}
