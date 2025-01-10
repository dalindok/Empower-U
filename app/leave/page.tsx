import ArticleListing from "@/components/ArticleListing";
import MoreArticles from "@/components/home/MoreArticles";
import Header from "@/components/leave/Header";
import SearchBar from "@/components/SearchBar";
import React from "react";

const Leave = () => {
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

export default Leave;
