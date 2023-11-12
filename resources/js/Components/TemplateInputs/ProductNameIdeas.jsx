import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";

const ProductNameIdeas = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <Input
                    name="keywords"
                    value={data.keywords}
                    onChange={onHandleChange}
                    label="Seed words"
                    placeholder="e.g. fast, healthy, compact"
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
                    label="Product Description"
                    placeholder="e.g. Describe description"
                    className="min-h-0"
                    maxLength={400}
                    required
                />
            </div>
        </>
    );
};

export default ProductNameIdeas;
