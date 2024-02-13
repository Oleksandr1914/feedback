export default function Form() {

    const onSubmit = (e: any) => {
        e.preventDefault();
    };

    return <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <label>
            Share your experience and rate our cafe
        </label>
        <textarea name="feedback" className="border-[1px] rounded-md border-borderInput p-2 min-h-24" placeholder="Tell us about quality and service in detail"></textarea>
        <button type="submit" className="ml-auto bg-buttom py-1 px-3 rounded text-white mt-3">Submit</button>
    </form>
}