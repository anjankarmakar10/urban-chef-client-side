import { Card } from "flowbite-react";

const Blog = ({ question, answere, code }) => {
  return (
    <>
      <Card className="h-fit mb-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {question}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {answere}
        </p>
        {code && <code className="bg-slate-300 p-2 rounded-md">{code}</code>}
      </Card>
    </>
  );
};

export default Blog;
