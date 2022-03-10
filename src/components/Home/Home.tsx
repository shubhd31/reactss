import * as React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-5">Deployment Practical - 7</h1>
        <table className="container w-50 table table-striped table-dark mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Azure</td>
              <td>
                <a
                  href="https://practical-7-t1.azurewebsites.net/"
                  target={"_blank"}
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Netlify</td>
              <td>
                <a
                  target={"_blank"}
                  href="https://react-practical-7.netlify.app"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Vercel</td>
              <td>
                <a
                  target={"_blank"}
                  href="https://deployment-prac-ss.vercel.app/"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Firebase</td>
              <td>
                <a target={"_blank"} href="https://practical-7-ss.web.app/">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Heroku</td>
              <td>
                <a
                  target={"_blank"}
                  href="https://deployment-pract-7.herokuapp.com/"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Home;
