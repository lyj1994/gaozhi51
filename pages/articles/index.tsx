import fse from "fs-extra";
import path from "path";

export async function getStaticProps() {
  // const res = await fse.readFile(path.join(__dirname, "../../content"), "utf8");
  return Promise.resolve({
    props: {
      // res,
    },
  });
}

const Articles = (props: any) => {
  console.log(props);
  return <div>list</div>;
};

export default Articles;
