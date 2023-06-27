// import useSWR from 'swr'


// // service
// ;
// import { WpGraphQlPostConst } from "../constants/GraphQlConst";
// import PostService from "../services/PostService";
// import PostType from "../types/PostType";

// const usePostListSwr = (staticPostList: PostType[]) => {
//     const { data: postList } = useSWR(
//         WpGraphQlPostConst.list,
//         PostService.getList,
//         { fallbackData: staticPostList }
//     )
//     return postList;
// }

// export default usePostListSwr;