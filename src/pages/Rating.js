import axios from 'axios';
import React, { useState } from 'react'

export default function Rating({ rating, productid }) {
    const [reviews, setreviews] = useState({ points: 5, review: '' });
    const changeHandler = (e) => {
        setreviews({ ...reviews, [e.target.name]: e.target.value });
    }
    const ratingHandler = (e) => {
        setreviews({ ...reviews, [e.target.name]: Number(e.target.value) });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`https://backend-ffkf.onrender.com/api/products/rating/${productid}`, reviews, { headers: { 'x-token': `${localStorage.getItem('token')}` } }).then(res => { alert(res.data); window.location.reload(false); });
    }
    return (
        <div className='rating'>
            <h2 className="ratinghead">Review</h2>
            <div className="allreview">
                {rating.map(rat => {
                    return (
                        <div key={rat._id} className="singlereview">
                            <div className="ratname"><b>{rat.reviewby.name}</b></div>
                            <div className="rating">{rat.points === 5 && <img src='data:image/png;base64,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' alt='5 stars' width={90} height={25} />}</div>
                            <div className="rating">{rat.points === 4 && <img src='data:image/png;base64,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' alt='4 stars' width={90} height={25} />}</div>
                            <div className="rating">{rat.points === 3 && <img src='data:image/png;base64,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' alt='3 stars' width={90} height={25} />}</div>
                            <div className="rating">{rat.points === 2 && <img src='data:image/png;base64,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' alt='2 stars' width={90} height={25} />}</div>
                            <div className="rating">{rat.points === 1 && <img src='data:image/png;base64,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' alt='1 stars' width={90} height={25} />}</div>
                            <div className="ratingtime">{rat.createdAt}</div>
                            <div className="ratreview">{rat.review}</div>
                        </div>
                    )
                })}
            </div>
            <div className="writereview">
                <h2 className="writehead">Write a customer review</h2>
                <div className="writeform">
                    <form className='reviewform' onSubmit={submitHandler}>
                        <h4>Rating</h4>
                        <select onChange={ratingHandler} name="points" id="points">
                            <option value={5}>5-Exelent</option>
                            <option value={4}>4-Good</option>
                            <option value={3}>3-Average</option>
                            <option value={2}>2-Bad</option>
                            <option value={1}>1-Poor</option>
                        </select>
                        <input onChange={changeHandler} type="text" name="review" id="review" placeholder='comment' />
                        <input className='subrev' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
