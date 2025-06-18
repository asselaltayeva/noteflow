import {motion} from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext";

function MobuleMenuIcon() {
    const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  
    return (
      <motion.button
        onClick={() => setMobileMenuOpened(true)}
        animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="hidden cursor-pointer items-center justify-center max-lg:flex"
      >
        <Menu className="stroke-primary-50 h-7 w-7" width={2} />
      </motion.button>
    );
  }
  
  export default MobuleMenuIcon;