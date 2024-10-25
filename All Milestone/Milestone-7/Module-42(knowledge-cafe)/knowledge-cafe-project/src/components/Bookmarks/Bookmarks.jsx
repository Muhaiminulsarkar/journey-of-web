import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3">
            <h5 className="text-3xl mb-8">Bookmarks Blogs: {bookmarks.length}</h5>
            <div className="p-3 border bg-gray-200">

            {
                bookmarks.map(bookmark => <p key={bookmark.id} className="p-3 border m-2 text-xl font-bold bg-white">{bookmark.title}</p>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;