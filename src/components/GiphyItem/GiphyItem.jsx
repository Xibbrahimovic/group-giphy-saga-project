

function GiphyItem ({gif}) {
    return (
        <div>
            <p>{gif.title}</p>
            <img src={gif.images.fixed_height.url} alt="" />
        </div>
    )
} // end GiphyItem

export default GiphyItem;