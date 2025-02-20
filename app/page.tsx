import ArticleListing from "@/components/ArticleListing";
import Header from "@/components/home/Header";
import MoreArticles from "@/components/home/MoreArticles";
import SubHead from "@/components/home/SubHead";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <Header />
      <SubHead />
      <div className="flex justify-center py-2">
        <SearchBar />
      </div>
      <ArticleListing />
      <MoreArticles />
    </div>
  );
}
