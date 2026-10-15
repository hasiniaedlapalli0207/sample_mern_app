
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Home() {
  return (
    <div>
      <img src={img1} alt="Image 1" />
      <img src={img2} alt="Image 2" />
      <img src={img3} alt="Image 3" />
    </div>
  );
}

export default Home;
