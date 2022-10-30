export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { article: {} },
  };
}

const Article = () => {
  return <div>article</div>;
};

export default Article;
