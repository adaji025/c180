import { useFetch } from "@mantine/hooks";
import { PostTypes } from "../types/posts";
import SearchInput from "./components/_core/SearchInput";
import PostCommentChart from "./components/PostCommentChart";
import PostInsights from "./components/PostInsights";
import TodoChart from "./components/TodoChart";
import TopUsers from "./components/TopUsers";
import WelcomeStatistics from "./components/WelcomeStatistics";
import { UsersTypes } from "../types/users";
import { apiUrl } from "./apiLog";

export async function getStaticProps() {
  const res = await fetch(`${apiUrl}/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
export default function IndexPage({ posts }: { posts: PostTypes[] }) {
  const {
    data: users,
    loading,
    error,
  } = useFetch<UsersTypes[]>("https://api.example.com/users");

  return (
    <div className="bg-[#171821] text-white min-h-screen py-5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 placeholder:text-xs">
        <SearchInput onSearch={() => {}} />

        <div className="mt-10 flex gap-10">
          <WelcomeStatistics posts={posts} />
          <PostCommentChart />
        </div>
        <TopUsers />
        <div className="mt-10 flex gap-10">
          <TodoChart />
          <PostInsights />
        </div>
      </div>
    </div>
  );
}
