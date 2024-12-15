import Image from "next/image";
import Body from "./components/Body";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

// function List() {
//   return (
//     <div>
//       <ul>
//         <li> item 1</li>
//         <li> item 2</li>
//         <li> item 3</li>
//       </ul>
//     </div>
//   )
// }


function Home() {
  return (
    <div>

      <link rel="icon" type="image/x-icon" href="/favicon_sevda.ico" />
      <title> my app</title>
        
      <Header />

      <main>
        
        <Body />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default Home;
