
import { AlbumTypes, Photostypes } from "../types/album";
import { CommentsTypes } from "../types/comment";
import { PostTypes } from "../types/posts";
import { AlbumIcon, BatteryIcon, PhotosIcon, TotalPostIcon } from "./_core/svg";

interface IProps {
  posts: PostTypes[];
  comments: CommentsTypes[] | null;
  albums: AlbumTypes[] | null;
  photos: Photostypes[] | null;
}
const WelcomeStatistics = ({ posts, comments, albums, photos }: IProps) => {
  const totalPost = posts.length;
  const totalComments = comments?.length;
  const totalAlbums = albums?.length;
  const totalPhotos = photos?.length;
  return (
    <div className="bg-primary px-5 py-7 rounded-[10px]  w-4/6">
      <div className="font-semibold">Welcome, Jonas!</div>
      <div className="text-[10px] font-medium text-grayColor">Summary</div>

      <div className="mt-5 grid grid-cols-4 gap-5  w-full">
        <div className="p-5 bg-darkColor rounded-xl">
          <TotalPostIcon />
          <div className="font-semibold mt-4">{totalPost}</div>
          <div className="text-[10px] font-medium mt-2">Total Posts</div>
        </div>
        <div className="p-5 bg-darkColor rounded-xl">
          <BatteryIcon />
          <div className="font-semibold mt-4">{totalComments}</div>
          <div className="text-[10px] font-medium mt-2">TotaTotal Comments</div>
        </div>
        <div className="p-5 bg-darkColor rounded-xl">
          <AlbumIcon />
          <div className="font-semibold mt-4">{totalAlbums}</div>
          <div className="text-[10px] font-medium mt-2">Total Albums</div>
        </div>
        <div className="p-5 bg-darkColor rounded-xl">
          <PhotosIcon />
          <div className="font-semibold mt-4">{totalPhotos}</div>
          <div className="text-[10px] font-medium mt-2">Total Photos</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStatistics;
