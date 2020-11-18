import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import {Card,Button} from 'react-bootstrap';

export default function BlogPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div id="blogs">
      <Link to="/" className="btn btn-default"><i class="fa fa-backward" aria-hidden="true"></i></Link>
      <h2>Blog Posts</h2>
      <h3>Welcome to our blog posts page!</h3>
      <div className="row">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div className="col-md-4" key={post.slug.current}>
              <div className="card" style={{marginTop: "2em", marginBottom: "1em"}} key={index}>
                <img className="card-img-top" src={post.mainImage.asset.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{console.log(post)}.</p>
                  <Link to={"posts/" + post.slug.current} className="btn btn-primary">Read Full</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}