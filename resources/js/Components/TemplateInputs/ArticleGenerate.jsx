import Input from "../Input";

const ArticleGenerate = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <Input
                    name="title"
                    value={data.title}
                    onChange={onHandleChange}
                    label="Article Title"
                    placeholder="e.g. Amazing cuisine culture of Mexico"
                    maxLength={200}
                    required
                />
            </div>

            <div className="mt-6">
                <Input
                    name="keywords"
                    label="Focus Keywords"
                    value={data.keywords}
                    onChange={onHandleChange}
                    placeholder="e.g. key1, key2, (comma seperated)"
                    maxLength={200}
                    required
                />
            </div>
        </>
    );
};

export default ArticleGenerate;
