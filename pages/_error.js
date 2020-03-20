import React from "react";
import Router from "next/router";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h1>oops! Something Went worng!</h1>
      <button>
        <Link href="/">Go back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
