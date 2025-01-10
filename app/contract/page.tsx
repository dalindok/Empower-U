import ArticleListing from "@/components/ArticleListing";
import Header from "@/components/contract/Header";
import MoreArticles from "@/components/home/MoreArticles";
import SearchBar from "@/components/SearchBar";
import React from "react";

const Contract = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-2">
        <SearchBar />
      </div>
      <ArticleListing />
      <MoreArticles />
    </div>
  );
};

export default Contract;
