import { useMemo, useState } from "react"
import { RatingProps } from "./Rating.props"
import { FaStar } from "react-icons/fa";

export const Rating = ({ count = 5, rating = 0, color, onRating }: RatingProps): JSX.Element => {
    const [hoverRating, setHoverRating] = useState(0);

    const getColor = (index: number) => {
        if (hoverRating >= index) {
            return color = '#ff9719'
        } else if (!hoverRating && rating >= index) {
            return color = '#ff9719'
        }
        return color = '#a8a29e'
    }

    const starRating = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map(idx => {
                return <FaStar
                    key={idx}
                    className="cursor-pointer"
                    style={{ color: getColor(idx) }}
                    onClick={() => onRating(idx)}
                    onMouseEnter={() => setHoverRating(idx)}
                    onMouseLeave={() => setHoverRating(0)}
                />
            })
    }, [count, rating, hoverRating])

    return <div className="flex gap-1">{starRating}</div>
}