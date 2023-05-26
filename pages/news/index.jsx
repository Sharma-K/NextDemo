import Link from "next/link";
const News = () =>{
    return(
        <div>
            News Page
            <div>
                <ul>
                    <li>
                        <Link href='/news/details'>Details Page</Link>
                    </li>
                    <li>
                        <Link href='/news/:id' >Items Page</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default News;