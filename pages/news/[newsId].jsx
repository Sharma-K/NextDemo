import { useRouter } from "next/router";

const NewsItem = () =>{
    const router = useRouter();
    const newsId = router.query.newsId;
    return (
        <div>
            The news item is: { newsId }
        </div>
    )
}
export default NewsItem;