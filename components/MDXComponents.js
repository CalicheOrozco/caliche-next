import { Photo } from "./Photo";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { ContainerBlog } from "./ContainerBlog";
import { Code } from "./Code";
import Date from "./Date";
import CodeBox from "./CodeBox";
import Quote from "./Quote";

export default {
  p: (props) => (
    <div className="flex justify-left py-5">
      <p
        className="text-xl text-gray-700 dark:text-gray-300 text-justify"
        {...props}
      />
    </div>
  ),
  a: (props) => (
    <div className="flex justify-left py-5">
      <a
        className="text-xl text-gray-700 dark:text-gray-300 text-justify"
        {...props}
      />
    </div>
  ),
  Link: (props) => (
    <a
      className="text-xl text-green-600 text-left underline px-1"
      href="props.href"
      target="_blank"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="text-xl text-gray-700 dark:text-gray-300 text-justify py-2"
      {...props}
    />
  ),
  ContainerBlog,
  Photo,
  Title,
  Quote,
  Subtitle,
  Code,
  CodeBox,
  Date,
};
