import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_createdAt desc){
    _id, 
    title, 
    _type,
    _updatedAt,
    _rev,
    slug, 
    _createdAt,
    author -> {
    _id, name, image, bio, _type,
    _updatedAt,
    _rev,
    },
    views, 
    description, 
    category, 
    image
    }`);
