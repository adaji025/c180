import { useFetch } from "@mantine/hooks";
import { PostTypes } from "../types/posts";
import SearchInput from "../components/_core/SearchInput";
import PostCommentChart from "../components/PostCommentChart";
import PostInsights from "../components/PostInsights";
import TodoChart from "../components/TodoChart";
import TopUsers from "../components/TopUsers";
import WelcomeStatistics from "../components/WelcomeStatistics";
import { UsersTypes } from "../types/users";
import { apiUrl } from "../apiLog";
import { CommentsTypes } from "../types/comment";
import { AlbumTypes, Photostypes } from "../types/album";

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
  const { data: users } = useFetch<UsersTypes[]>(`${apiUrl}/users`);
  const { data: comments } = useFetch<CommentsTypes[]>(`${apiUrl}/comments`);
  const { data: albums } = useFetch<AlbumTypes[]>(`${apiUrl}/albums`);
  const { data: photos } = useFetch<Photostypes[]>(`${apiUrl}/photos`);

  return (
    <div className="bg-[#171821] text-white min-h-screen py-5">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 placeholder:text-xs">
        <SearchInput onSearch={() => {}} />

        <div className="mt-10 flex gap-10">
          <WelcomeStatistics
            posts={posts}
            comments={comments}
            albums={albums}
            photos={photos}
          />
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
