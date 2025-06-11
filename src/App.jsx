import Page from "./components/sections/Page";

//Header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";

//Main
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Testimonials/Testimonials";

//Footer
import Footer from "./components/sections/Footer";

///Modal
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  return ( 
    <ModalContextProvider>
  <Page>
    <Header> 
      <Navigation />
      <Hero/>
      <Reviews />
    </Header>

    <Main>
      <Logos />
      <Features />
      <FAQs />
      <Testimonials />
    </Main>

    <Footer />

    <Modal modal="sign-up">
      <SignUpModal/>
    </Modal>
  </Page>
  </ModalContextProvider>
  );
}

export default App;
