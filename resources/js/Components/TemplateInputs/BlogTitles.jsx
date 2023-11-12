import TextArea from "@/Components/TextArea";

const BlogTitles = ({ data, errors, onHandleChange }) => {
    return (
        <div className="mt-6">
            <TextArea
                rows={4}
                name="details"
                value={data.details}
                label="What is your blog post is about?"
                placeholder="e.g. Describe your blog post"
                onChange={onHandleChange}
                maxLength={400}
                required
            />
            {/* <Input
                name="title"
                value={data.title}
                label="Label"
                maxLength={10}
                onChange={onHandleChange}
                required
            /> */}
        </div>
    );
};

export default BlogTitles;
