import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";

const BlogConclusion = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <Input
                    name="title"
                    value={data.title}
                    onChange={onHandleChange}
                    label="Blog Post Title"
                    placeholder="e.g. describe blog title"
                    maxLength={200}
                    required
                />
            </div>
            <div className="mt-6">
                <TextArea
                    rows={4}
                    name="details"
                    value={data.details}
                    onChange={onHandleChange}
                    label="What is your blog post about?"
                    placeholder="e.g. describe your blog post"
                    className="min-h-0"
                    maxLength={300}
                    required
                />
            </div>
        </>
    );
};

export default BlogConclusion;
