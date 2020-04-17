import React from 'react';
import {Link} from 'gatsby';
import Heading from './Heading'

export default function Infoblock({heading}) {
    return (
        <section className="my-5 py-4 bg-them">
            <div className="container">
                <Heading title={heading}/>
            </div>
            <div className="row"> 
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead mb-4 text-white">
                    Heyy !!!We have found  Paragraphs and associated modules to be a very successful recipe. Our clients love the plugability and extensibility of the system. if they need something new then we can build it. Oftentimes they are happy with the standard Paragraph bundles we can provide with Paragraphs pack. We are therefore continuing to build the ecosystem to support our own site building efforts. Bundles which have general application will be released back into Paragraphs Pack.

                    We are also committed to ensuring a great developer experience. Our modules do not ship as features. You won;t need to worry about overrides with us. All the site buider needs to do is enable the modules, make the required tweaks, if any, and capture the config in their own feature.
                    </p>
                    <Link to ="/abaout">
                        <button className="btn btn-warning btn-lg"> {heading}</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
