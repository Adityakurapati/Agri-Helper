import PostCard from '../postCard/PostCard'  // Adjust this import based on how PostCard is exported
import styles from './blog.module.css'
import { getPosts } from '../../lib/data.js'

const BlogPage=async () =>
{
        try
        {
                const posts=await getPosts();
                return (
                        <section className={ styles.container }>
                                { posts.map( ( post ) => (
                                        <div className={ styles.post } key={ post._id }>
                                                <PostCard post={ post } />
                                        </div>
                                ) ) }
                        </section>
                );
        } catch ( error )
        {
                console.error( "Error fetching posts:", error );
                return <div>Error loading posts. Please try again later.</div>;
        }
};

export default BlogPage;