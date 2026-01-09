type ContactInfoLink = {
    url: string;
    title: string;
    target: string;
};

type ContactInfo = {
    subtitle: string;
    link: ContactInfoLink;
    info: string;
};

type SEO = {
    title: string;
    meta_desc: string;
};

type ACF = {
    contact_title: string;
    contact_description: string;
    contact_info: ContactInfo[];
    contact_city_name: string;
    form_title: string;
    form_description: string;
};

export type ContactData = {
    id: number;
    slug: string;
    title: string;
    featured_image: string | null;
    seo: SEO;
    acf: ACF;
};