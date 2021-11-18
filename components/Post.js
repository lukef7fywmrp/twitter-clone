import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "./Modal";

function Post({ id, post }) {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <>
      <div className="p-3 flex cursor-pointer border-b border-gray-700">
        <img
          src={post.userImg}
          alt=""
          className="h-11 w-11 rounded-full mr-4"
        />
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex justify-between">
            <div className="text-[#6e767d]">
              <div className="inline-block group">
                <h4 className="font-bold text-[#d9d9d9] inline-block group-hover:underline">
                  {post.username}
                </h4>
                <span className="ml-1.5">@{post.tag} </span>
              </div>{" "}
              · <span className="hover:underline"> 9m</span>
              <p className="text-[#d9d9d9]">{post.text}</p>
            </div>
            <div className="icon group">
              <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </div>
          </div>
          <img
            src={post.image}
            alt=""
            className="rounded-2xl max-h-80 object-contain"
          />
          <div className="text-[#6e767d] flex justify-between w-10/12">
            <div className="icon group" onClick={() => setIsOpen(true)}>
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>

            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-pink-600/10">
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              </div>
              <span className="group-hover:text-pink-600 text-sm">136</span>
            </div>

            <div className="icon group">
              <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            <div className="icon group">
              <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
          </div>
        </div>
      </div>

      {isOpen && <Modal id={id} />}
    </>
  );
}

export default Post;
