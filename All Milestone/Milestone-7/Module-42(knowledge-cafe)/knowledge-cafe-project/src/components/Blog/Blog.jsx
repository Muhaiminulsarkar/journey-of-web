import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleBookmark }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='w-10/12 my-9'>
            <img className='w-full' src={cover} alt={`Cover pic of ${title}`} />
            <div className='flex justify-between items-center my-4'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <p className='font-bold text-xl'>{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex gap-3'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmark(blog)}><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <div>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a> </span>)
                    }
                </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired

}


export default Blog;