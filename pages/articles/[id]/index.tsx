import ReactMarkdown from "react-markdown";
import all from "../../../content/all.json";

export async function getStaticPaths() {
  return {
    paths: all.map((i) => ({
      params: {
        id: i.title,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const {
    params: { id },
  } = context;

  return {
    props: all.find((i) => i.title === id),
  };
}

const Article = (props: any) => {
  const { _content } = props;
  return (
    <div className="content-width mx-auto">
      <ReactMarkdown>{_content}</ReactMarkdown>
    </div>
  );
};

export default Article;
