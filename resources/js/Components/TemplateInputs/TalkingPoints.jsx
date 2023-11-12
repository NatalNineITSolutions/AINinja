import TextArea from "@/Components/TextArea";

const TalkingPoints = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <TextArea
                    rows={3}
                    name="title"
                    value={data.title}
                    onChange={onHandleChange}
                    label="Article Title"
                    placeholder="e.g. 10 ways to create a website"
                    className="min-h-0"
                    maxLength={300}
                    required
                />
            </div>
            <div className="mt-6">
                <TextArea
                    rows={4}
                    name="subheadings"
                    value={data.subheadings}
                    onChange={onHandleChange}
                    label="Subheading Description"
                    placeholder="e.g. Why you should create website"
                    className="min-h-0"
                    maxLength={400}
                    required
                />
            </div>
        </>
    );
};

export default TalkingPoints;
