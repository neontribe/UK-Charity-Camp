import "./page.css";
import PageHeader from "./components/PageHeader/PageHeader";
export default function Home() {
  return (
    <>
      <PageHeader />
      <main>
        <div>
          <h1> Third sector unconference </h1>

          <form>
            <label>Sign up for more information</label>
            <input type="email"></input>
            <button>Submit</button>
          </form>
        </div>

        <div>
          <div>
            <p>Location Icon</p>
            <h2>DD/MM/YY Birmingham </h2>
          </div>
          <div>
            <p>small circle</p>
            <p>small circle</p>
            <p>small circle</p>
          </div>
          <div>
            <p>Twitter Icon</p>
            <p>
              Follow us on <a>Twitter </a> for updates
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
