import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
class indexPage extends Component {
  //  Network call
  static async getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "SuperApp" });
      }, 100);
    });
    return promise;
  }
  render() {
    return (
      <div>
        <h1>Hello Next.js Homepage! {this.props.appName}</h1>
        <p>
          <Link href="/auth">
            <a>Go Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to auth</button>
      </div>
    );
  }
}

export default indexPage;
