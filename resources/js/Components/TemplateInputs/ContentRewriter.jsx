import TextArea from "../TextArea";

const ContentRewriter = ({ data, errors, onHandleChange }) => {
    return (
        <div className="mt-6">
            <TextArea
                rows={10}
                name="details"
                value={data.details}
                onChange={onHandleChange}
                label="What would you like to rewrite?"
                placeholder="e.g. Enter your text to rewrite"
                className="min-h-0"
                maxLength={6000}
                required
            />
        </div>
    );
};

export default ContentRewriter;
