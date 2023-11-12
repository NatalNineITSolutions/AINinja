import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";

const BlogIdeas = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <TextArea
                    rows={4}
                    name="details"
                    value={data.details}
                    onChange={onHandleChange}
                    label="What is your blog post about?"
                    placeholder="e.g. Describe your blog post"
                    className="min-h-0"
                    maxLength={200}
                    required
                />
            </div>
            <div className="mt-6">
                <Input
                    name="keywords"
                    value={data.keywords}
                    onChange={onHandleChange}
                    label="Primary Keywords"
                    placeholder="e.g. key1, key2, key3"
                    maxLength={100}
                    required
                />
            </div>
        </>
    );
};

export default BlogIdeas;
