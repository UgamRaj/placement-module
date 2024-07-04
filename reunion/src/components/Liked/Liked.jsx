import Card from "../Card/Card";
import { useMyContext } from "../Context/MyContext";

const Liked = () => {
  const { liked } = useMyContext();
  //   console.log("🚀 ~ Liked ~ liked:", liked);
  const isLiked = true;

  return (
    <>
      <div className="mainContainer">
        {liked.length === 0 ? (
          <h3>Not data</h3>
        ) : (
          liked.map((accommodation, i) => {
            return <Card key={i} {...accommodation} isLiked={isLiked} />;
          })
        )}
      </div>
    </>
  );
};

export default Liked;
