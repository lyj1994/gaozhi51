import fse from "fs-extra";
import Link from "next/link";
import path from "path";
import all from "../../content/all.json";

export async function getStaticProps() {
  // const res = await fse.readFile(path.join(__dirname, "../../content"), "utf8");
  return Promise.resolve({
    props: {
      list: all,
      // res,
    },
  });
}

const Articles = (props: any) => {
  return (
    <ul className="content-width mx-auto">
      {props.list.map((i: any) => {
        const { title } = i;
        return (
          <li key={title}>
            <Link href={`/articles/${title}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
