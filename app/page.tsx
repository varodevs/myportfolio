import Header from "./ui/Header/Header";
import Slider from "./ui/Projects/Projects";
import Aboutme from "./ui/Aboutme/Aboutme";
import Tech from "./ui/Tech/Tech";

export default function Home() {
  return(
    <>
      <Header />
      <section className="flex flex-col justify-items-center gap-20">
        <Slider />
        <Aboutme />
        <Tech /> 
      </section>
    </>
    );
    // <main className="flex min-h-screen flex-col items-center gap-28">
    
      
      
    // </main>

}
