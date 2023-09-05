import ContentIcons from "../ContentIcons/ContentIcons";
import ContentTitles from "../ContentTitles/ContentTitles";
import ContentImage from "../ContentImage/ContentImage";
import "../Content/Content.css";

const Content = () => {
  return (
    <content>
      <article>
        <ContentIcons />
        <ContentTitles/>
        <ContentImage/>
      </article>
    </content>
  );
};

export default Content;
