import TextArea from "../TextArea";

const SummarizeText = ({ data, errors, onHandleChange }) => {
    return (
        <div className="mt-6">
            <TextArea
                rows={10}
                name="details"
                value={data.details}
                onChange={onHandleChange}
                label="What would you like to summarize?"
                placeholder="e.g. Enter your text to summarize"
                className="min-h-0"
                maxLength={6000}
                required
            />
        </div>
    );
};

export default SummarizeText;
