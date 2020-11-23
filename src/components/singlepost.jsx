// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return "loading....";

  const blogger = {
      paddingTop: "10vh",
      marginLeft: "auto",
      width: "90vw  ",
      alignItems: "center",
      padding: "5vw"
  }

  return (
    <div style={blogger}>
        
        <h2 style={{fontFamily: "sans-serif"}}>{postData.title}</h2>
        <img src={urlFor(postData.mainImage).width(200).url()} style={{width: "100%", height: "50vh", }} alt="" />
        <div className="container" style={{padding: "2em"}}>
            <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
            />
        </div>
        <div>
            <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Kap"
            />
            <h4>{postData.name}</h4>
        </div>
        {/* <div>
        
        </div> */}
        <div>
            <Link to="/">Homepage</Link> | <Link to="/blog">Blog Posts</Link>
        </div>
    </div>
  );
}