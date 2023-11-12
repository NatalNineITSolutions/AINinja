import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";

const TestimonialReviews = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <Input
                    name="name"
                    value={data.name}
                    onChange={onHandleChange}
                    label="Product Name"
                    placeholder="e.g. Apple, Google"
                    maxLength={100}
                    required
                />
            </div>
            <div className="mt-6">
                <TextArea
                    rows={4}
                    name="details"
                    value={data.details}
                    onChange={onHandleChange}
                    label="Product Description"
                    placeholder="e.g. Describe what your website or business do"
                    className="min-h-0"
                    maxLength={200}
                    required
                />
            </div>
        </>
    );
};

export default TestimonialReviews;
