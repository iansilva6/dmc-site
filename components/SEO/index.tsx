import React from "react";

type PropsHeader = {
    title?: string;
    description?: string;
    canonical?: string;
    url?: string;
    site_name?: string;
    type?: string;
    image?: string;
    video?: string;
    keywords?: string;
    author?: string;
};

export const SEOHeader: React.FC<PropsHeader> = ({
    title = "DuarteMatos&Carvalho Sociedade de Advogados",
    description = "Advogado em Salvador, Direito da Família, Direito Desportivo, Direito Previdenciário, Direito Digital, Direito Público e Administrativo, Juizado Especial.",
    canonical = "",
    site_name = "DuarteMatos&Carvalho Sociedade de Advogados",
    url = "http://duartematosecarvalho.com.br/",
    type = "site",
    image = "",
    video,
    keywords,
    author,
}) => {
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
            />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="http://duartematosecarvalho.com.br/" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta name="theme-color" content="#000000" />

            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content="pt-BR" />
            <meta property="og:site_name" content={site_name} />
            {type && <meta property="og:type" content={type} />}
            {video && <meta property="og:video" content={video} />}
        </>
    );
};