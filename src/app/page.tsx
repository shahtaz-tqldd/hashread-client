import Footer from "@/components/Footer/Footer";
import BlogList from "@/components/PageComponents/Home/BlogList";
import Hero from "@/components/PageComponents/Home/Hero";
import Topics from "@/components/PageComponents/Home/Topics";
import TrendingBlog from "@/components/PageComponents/Home/TrendingBlog";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrendingBlog />
      <hr className="border-gray-300 container" />
      <section className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <BlogList />
        </div>
        <div className="col-span-1 flex flex-col gap-16">
          <Topics />
        </div>
      </section>
    </div>
  )
}
