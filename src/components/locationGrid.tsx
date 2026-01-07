import LocationCard from "./LocationCard";

export default function LocationGrid({ posts ,url,cat}: { posts: any[],url:any,cat:string }) {    
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {posts.map((post) => (
        <LocationCard key={post.id} post={post} url={url} cat={cat} />
      ))}
    </div>
  );
}
