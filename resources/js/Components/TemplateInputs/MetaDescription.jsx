import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";

const MetaDescription = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <Input
                    name="name"
                    value={data.name}
                    onChange={onHandleChange}
                    label="Website Name"
                    placeholder="e.g. Google, Amazon"
                    maxLength={100}
                    required
                />
            </div>
            <div className="mt-6">
                <TextArea
                    rows={4}
                    name="description"
                    value={data.description}
                    onChange={onHandleChange}
                    label="Website Description"
                    placeholder="e.g. Describe what your website or business do"
                    className="min-h-0"
                    maxLength={400}
                    required
                />
            </div>
            <div className="mt-6">
                <Input
                    name="keywords"
                    label="Keywords"
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

export default MetaDescription;
