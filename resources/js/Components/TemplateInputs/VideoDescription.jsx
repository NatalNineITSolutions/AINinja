import TextArea from "@/Components/TextArea";

const VideoDescription = ({ data, errors, onHandleChange }) => {
    return (
        <div className="mt-6">
            <TextArea
                rows={4}
                name="title"
                value={data.title}
                label="What is the title of your video?"
                placeholder="e.g. Describe title of your video"
                onChange={onHandleChange}
                maxLength={400}
                required
            />
        </div>
    );
};

export default VideoDescription;
