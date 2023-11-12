import Input from "../Input";
import TextArea from "../TextArea";

const ParagraphGenerator = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <TextArea
                    rows={4}
                    name="description"
                    value={data.description}
                    onChange={onHandleChange}
                    label="What would you like to rewrite?"
                    placeholder="e.g. lime or lemon witch better"
                    className="min-h-0"
                    maxLength={400}
                    required
                />
            </div>
            <div className="mt-6">
                <Input
                    name="keywords"
                    label="Focus Keywords"
                    value={data.keywords}
                    onChange={onHandleChange}
                    placeholder="e.g. key1, key2, (comma separated)"
                    maxLength={200}
                    required
                />
            </div>
        </>
    );
};

export default ParagraphGenerator;
