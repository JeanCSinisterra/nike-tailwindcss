import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback } ) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer"
        className="rounded-full object-cover w-[120-px] h-[120px]"
        />
        <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="rating"
            height={24}
            width={24}
            className="object-contain m-0"
            />
              <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
        </div>
          <h3 className="mt-1 font-palanquin text-center text-2xl font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard