import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";

const FAQAnswers = ({ data, errors, onHandleChange }) => {
    return (
        <>
            <div className="mt-6">
                <Input
                    name="name"
                    value={data.name}
                    onChange={onHandleChange}
                    label="Product Name"
                    placeholder="e.g. Google, Amazon"
                    maxLength={100}
                    required
                />
            </div>
            <div className="mt-6">
                <Input
                    name="title"
                    value={data.title}
                    onChange={onHandleChange}
                    label="Question about product"
                    placeholder="e.g. How to use this product?"
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
                    placeholder="e.g. Describe what your website or business do"
                    className="min-h-0"
                    maxLength={400}
                    required
                />
            </div>
        </>
    );
};

export default FAQAnswers;
