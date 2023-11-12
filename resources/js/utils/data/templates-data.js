const templatesData = [
    {
        id: 1,
        type: "",
        title: "Blog Titles",
        slug: "blog-titles",
        completion: "blog_titles",
        description:
            "Simplify your content creation process with our AI-powered blog title generator",
        icon: "Blog",
    },
    {
        id: 2,
        type: "",
        title: "Blog Ideas",
        slug: "blog-ideas",
        completion: "blog_ideas",
        description:
            "Generate a Wide Range of Engaging Blog Ideas with AI-Powered Writing Assistance",
        icon: "BlogIdea",
    },
    {
        id: 3,
        type: "",
        title: "Blog Intros",
        slug: "blog-intros",
        completion: "blog_intros",
        description:
            "Transform Your Blogging Success with AI Blog Intros that Set the Tone, Build Trust",
        icon: "BlogIntro",
    },
    {
        id: 4,
        type: "",
        title: "Blog Section",
        slug: "blog-section",
        completion: "blog_section",
        description:
            "Create Engaging and Well-Structured Blog Posts with Our Comprehensive Template",
        icon: "Blog",
    },
    {
        id: 5,
        type: "",
        title: "Blog Conclusion",
        slug: "blog-conclusion",
        completion: "blog_conclusion",
        description:
            "Craft Powerful and Memorable Blog Conclusion with AI Writing Assistance",
        icon: "Conclusion",
    },
    {
        id: 6,
        type: "",
        title: "Summarize Text",
        slug: "summarize-text",
        completion: "summarize_text",
        description:
            "Effortlessly Summarize Long Texts and Save Time with Our Powerful Template",
        icon: "SummarizeText",
    },
    {
        id: 7,
        type: "",
        title: "Startup Name Idea",
        slug: "startup-name-idea",
        completion: "startup_name_idea",
        description:
            "Generate Catchy and Memorable Startup Names with AI Technology.",
        icon: "Startup",
    },
    {
        id: 8,
        type: "",
        title: "Testimonial/Reviews",
        slug: "testimonial-reviews",
        completion: "testimonial_reviews",
        description:
            "Generate Authentic and Engaging Reviews with AI Writing Assistance",
        icon: "Review",
    },
    {
        id: 9,
        type: "",
        title: "YouTube Tag Idea",
        slug: "youtube-tag-idea",
        completion: "youtube_tag_idea",
        description:
            "Generate Effective and Relevant Tags with AI-Powered Writing Assistance",
        icon: "YouTube",
    },
    {
        id: 10,
        type: "",
        title: "Video Titles",
        slug: "video-titles",
        completion: "video_titles",
        description:
            "Engage Your Audience & Boost Your Views with a Captivating Video Title.",
        icon: "Video",
    },
    {
        id: 11,
        type: "",
        title: "Video Description",
        slug: "video-description",
        completion: "video_description",
        description:
            "Generate Authentic and Engaging Reviews with AI Writing Assistance",
        icon: "Video",
    },
    {
        id: 12,
        type: "",
        title: "Instagram Captions",
        slug: "instagram-captions",
        completion: "instagram_captions",
        description:
            "Maximize Your Reach and Engagement on Instagram with Eye-Catching Captions",
        icon: "Instagram",
    },
    {
        id: 13,
        type: "",
        title: "Instagram #tag Idea",
        slug: "instagram-hashtag-idea",
        completion: "instagram_hashtag_idea",
        description:
            "Transform Your Instagram Posts into a Discoverable Work of Art with Our #tag Idea Template",
        icon: "Hashtag",
    },
    {
        id: 14,
        type: "",
        title: "Social Media Post (Personal)",
        slug: "social-media-post-personal",
        completion: "social_media_post_personal",
        description:
            "Unlock Your Creativity and Create Compelling Social Media Posts",
        icon: "SocialMedia",
    },
    {
        id: 15,
        type: "",
        title: "Social Media Post (Business)",
        slug: "social-media-post-business",
        completion: "social_media_post_business",
        description:
            "Maximizing Your Social Media Engagement with AI-Generated Captions and Posts",
        icon: "SocialMedia",
    },
    {
        id: 16,
        type: "",
        title: "Facebook Captions",
        slug: "facebook-captions",
        completion: "facebook_captions",
        description:
            "Maximize Your Facebook Presence with Captivating Captions Using Our Template",
        icon: "Facebook",
    },
    {
        id: 17,
        type: "",
        title: "Facebook Ads",
        slug: "facebook-ads",
        completion: "facebook_ads",
        description:
            "Generate High-Impact Facebook Ads with AI-Powered Writing Assistance",
        icon: "Facebook",
    },
    {
        id: 18,
        type: "",
        title: "Google Ads Titles",
        slug: "google-ads-titles",
        completion: "google_ads_titles",
        description:
            "Stand Out on Google and Drive Conversions with Engaging Ads Titles Using Our Template",
        icon: "GoogleAds",
    },
    {
        id: 19,
        type: "",
        title: "Google Ads Details",
        slug: "google-ads-details",
        completion: "google_ads_details",
        description:
            "Generate Authentic and Engaging Reviews with AI Writing Assistance",
        icon: "GoogleAdsDetails",
    },
    {
        id: 20,
        type: "",
        title: "Article Generator",
        slug: "article-generator",
        completion: "article_generator",
        description:
            "Effortlessly Summarize Long Texts and Save Time with Our Powerful Template",
        icon: "ArticleGenerator",
    },
    {
        id: 21,
        type: "",
        title: "Content Re-writer",
        slug: "content-re-writer",
        completion: "content_re_writer",
        description:
            "Revitalizing Your Text with Innovative Language and Unique Perspective",
        icon: "ContentReWriter",
    },
    {
        id: 22,
        type: "",
        title: "Paragraph Generator",
        slug: "paragraph-generator",
        completion: "paragraph_generator",
        description:
            "Unlocking the Power of Paragraphs for Engaging and Informative Content",
        icon: "ParagraphGenerator",
    },
    {
        id: 23,
        type: "",
        title: "Talking Points",
        slug: "talking-points",
        completion: "talking_points",
        description:
            "Facilitating Your Communication with Pre-Written Scripts and Conversation Starters",
        icon: "TalkingPoints",
    },
    {
        id: 24,
        type: "",
        title: "Pros & Cons",
        slug: "pros-cons",
        completion: "pros_cons",
        description:
            "Weighing the Advantages and Disadvantages of Any Topic with AI-Generated Analysis",
        icon: "ProsCons",
    },
    {
        id: 25,
        type: "",
        title: "Product Name Idea",
        slug: "product-name-idea",
        completion: "product_name_idea",
        description:
            "Innovative AI-Generated Product Naming for Your Brand's Success",
        icon: "ProductName",
    },
    {
        id: 26,
        type: "",
        title: "Product Description",
        slug: "product-description",
        completion: "product_description",
        description:
            "Captivating Your Customers with Convincing and Informative Product Descriptions",
        icon: "ProductDescription",
    },
    {
        id: 27,
        type: "",
        title: "Meta Description",
        slug: "meta-description",
        completion: "meta_description",
        description:
            "Boosting Your SEO and Click-Through Rates with AI-Generated Meta Descriptions",
        icon: "MetaDescription",
    },
    {
        id: 28,
        type: "",
        title: "FAQs",
        slug: "faqs",
        completion: "faqs",
        description:
            "Delivering Comprehensive Answers to Common Questions with AI-Powered FAQs",
        icon: "FAQs",
    },
    {
        id: 27,
        type: "",
        title: "FAQ Answers",
        slug: "faq-answers",
        completion: "faq_answers",
        description:
            "Providing Expert Responses to Common Questions with AI-Generated FAQ Answers",
        icon: "FAQsAnswer",
    },
    {
        id: 28,
        type: "",
        title: "Problem Agitate Solution",
        slug: "problem-agitate-solution",
        completion: "problem_agitate_solution",
        description:
            "Driving Conversions with Compelling Problem-Agitate-Solution Messaging",
        icon: "ProblemAgitateSolution",
    },
];

export default templatesData;
